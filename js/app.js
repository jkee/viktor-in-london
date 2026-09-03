/* Viktor in London — a personal "where to live" map.
 *
 * Layers:
 *   livability — computed liveability score surface (docs/livability.md is SSOT)
 *   notes    — scored walk notes, as colored dots with popups
 *   zone     — the area of interest: dashed outline + dimming outside it
 *   coffee   — specialty coffee shops (☕ badges; top tier gets a bold ring)
 *   food     — restaurants rated 8.0+ (🍽 badges; 9.0+ gets a bold ring)
 *   stations — tube / rail stations (🚇 badges; hubs get a bold ring)
 *   wealth   — "good life" district signals (🥑: Waitrose, GAIL's, Aesop, Whole Foods)
 *   crime    — combined crime severity density (violet surface)
 *
 * All data lives in data/*.js as plain window globals (see README.md).
 */

'use strict';

/* ================================ Config ================================ */

const CONFIG = {
  center: [51.5074, -0.1183],
  zoom: 12,
  scoreMin: -5,
  scoreMax: 5,
  densitySampleStep: 4,  // px between canvas heat samples (higher = faster, blurrier)
  // Diverging color ramp (RdYlGn) for walk-note badges: scoreMin → neutral → scoreMax
  ramp: [
    [215, 48, 39],
    [254, 224, 139],
    [26, 152, 80]
  ],
  // Liveability score — constants mirror docs/livability.md (the SSOT).
  // Any change starts in that file.
  livability: {
    // Five display grades over the 0–1 score (0.2-wide bands). Same teal
    // family throughout, but grades 1–3 stay pale washes while 4–5 jump in
    // depth and opacity, so the top band reads at a glance.
    grades: [
      { min: 0.0, rgb: [214, 237, 233], alpha: 0.10 },
      { min: 0.2, rgb: [178, 220, 213], alpha: 0.20 },
      { min: 0.4, rgb: [135, 199, 189], alpha: 0.30 },
      { min: 0.6, rgb: [26, 138, 126], alpha: 0.50 },
      { min: 0.8, rgb: [4, 92, 84], alpha: 0.62 }
    ],
    categories: {
      connectivity: { sigma: 500, k: 2.0, weight: 0.35 },
      coffee:       { sigma: 300, k: 2.5, weight: 0.30 },
      food:         { sigma: 350, k: 3.0, weight: 0.20 },
      goodlife:     { sigma: 400, k: 2.0, weight: 0.15 }
    }
  }
};

/* =============================== Helpers ================================ */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/** Diverging ramp lookup for t in [0, 1] (0 = red, 0.5 = yellow, 1 = green). */
function rampColor(t) {
  const { ramp } = CONFIG;
  t = Math.max(0, Math.min(1, t));
  const [from, to, f] = t < 0.5 ? [ramp[0], ramp[1], t * 2] : [ramp[1], ramp[2], (t - 0.5) * 2];
  return [
    Math.round(from[0] + (to[0] - from[0]) * f),
    Math.round(from[1] + (to[1] - from[1]) * f),
    Math.round(from[2] + (to[2] - from[2]) * f)
  ];
}

/** Map a score in [scoreMin, scoreMax] onto the diverging ramp. */
function scoreColor(score) {
  const { scoreMin, scoreMax } = CONFIG;
  return rampColor((score - scoreMin) / (scoreMax - scoreMin));
}

/** Small round emoji badge; `variant` maps to a CSS class (see css/style.css). */
function badgeIcon(emoji, variant, bold) {
  return L.divIcon({
    className: `badge badge--${variant}` + (bold ? ` badge--${variant}-bold` : ''),
    html: emoji,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

/** Standard popup: bold title, optional detail lines, optional muted footnote. */
function popupHtml(title, lines, footnote) {
  return (
    '<div class="note-popup">' +
    `<div class="score">${escapeHtml(title)}</div>` +
    lines.filter(Boolean).map(l => `<div>${escapeHtml(l)}</div>`).join('') +
    (footnote ? `<div class="date">${escapeHtml(footnote)}</div>` : '') +
    '</div>'
  );
}

/* ===================== Density overlay (crime layer) ==================== */
/* Paints a single-hue density surface from weighted points. `ref` is the
 * value at which the color ramp saturates (precomputed percentile). */

const DensityLayer = L.Layer.extend({
  initialize(points, ref, hue) {
    this._points = points;   // [[lat, lng, densityPerKm2, unitRadiusM], ...]
    this._ref = ref;
    this._hue = hue;         // {low: [r,g,b], high: [r,g,b]}
    // Each point smooths over its own unit's true radius (clamped so tiny
    // tower-block LSOAs don't vanish below the sampling resolution).
    this._minRadiusMeters = 120;
  },

  onAdd(map) {
    this._map = map;
    this._canvas = L.DomUtil.create('canvas', 'leaflet-zoom-hide');
    this._canvas.style.pointerEvents = 'none';
    map.getPane('overlayPane').appendChild(this._canvas);
    map.on('moveend zoomend resize', this._redraw, this);
    this._redraw();
  },

  onRemove(map) {
    map.getPane('overlayPane').removeChild(this._canvas);
    map.off('moveend zoomend resize', this._redraw, this);
  },

  _redraw() {
    if (!this._map) return;
    const map = this._map;
    const size = map.getSize();
    if (!size.x || !size.y) return;
    L.DomUtil.setPosition(this._canvas, map.containerPointToLayerPoint([0, 0]));
    this._canvas.width = size.x;
    this._canvas.height = size.y;

    const metersPerPixel =
      40075016.686 * Math.abs(Math.cos(map.getCenter().lat * Math.PI / 180)) /
      (256 * Math.pow(2, map.getZoom()));

    let maxCutoff = 0;
    const pts = this._points
      .map(p => {
        const cp = map.latLngToContainerPoint([p[0], p[1]]);
        const radiusPx = Math.max(p[3] || 0, this._minRadiusMeters) / metersPerPixel;
        const sigma = radiusPx / 1.6;
        const cutoff = radiusPx * 3;
        if (cutoff > maxCutoff) maxCutoff = cutoff;
        return { x: cp.x, y: cp.y, w: p[2], cutoff2: cutoff * cutoff, inv2s2: 1 / (2 * sigma * sigma) };
      })
      .filter(p =>
        p.x > -maxCutoff && p.x < size.x + maxCutoff &&
        p.y > -maxCutoff && p.y < size.y + maxCutoff);

    const ctx = this._canvas.getContext('2d');
    ctx.clearRect(0, 0, size.x, size.y);
    if (!pts.length) return;

    const step = CONFIG.densitySampleStep;
    const gw = Math.ceil(size.x / step);
    const gh = Math.ceil(size.y / step);
    const off = document.createElement('canvas');
    off.width = gw;
    off.height = gh;
    const octx = off.getContext('2d');
    const img = octx.createImageData(gw, gh);
    const { low, high } = this._hue;

    for (let gy = 0; gy < gh; gy++) {
      const py = gy * step + step / 2;
      for (let gx = 0; gx < gw; gx++) {
        const px = gx * step + step / 2;
        let gSum = 0;
        let wSum = 0;
        for (const p of pts) {
          const dx = px - p.x;
          const dy = py - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > p.cutoff2) continue;
          const g = Math.exp(-d2 * p.inv2s2);
          gSum += g;
          wSum += p.w * g;
        }
        if (gSum < 1e-3) continue;
        // Color carries intensity: locally averaged count, ramp saturating at
        // ref (p95). Alpha only marks data coverage — quiet areas stay visible
        // as a pale wash instead of vanishing into false "safe" white holes.
        const t = Math.min(1, (wSum / gSum) / this._ref);
        const shaped = Math.pow(t, 0.6);
        const coverage = 1 - Math.exp(-gSum * 3);
        const i = (gy * gw + gx) * 4;
        img.data[i] = Math.round(low[0] + (high[0] - low[0]) * shaped);
        img.data[i + 1] = Math.round(low[1] + (high[1] - low[1]) * shaped);
        img.data[i + 2] = Math.round(low[2] + (high[2] - low[2]) * shaped);
        img.data[i + 3] = Math.round(coverage * (0.12 + 0.43 * shaped) * 255);
      }
    }

    octx.putImageData(img, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(off, 0, 0, size.x, size.y);
  }
});

/* ============================== Base map ================================ */

const map = L.map('map', { zoomControl: true }).setView(CONFIG.center, CONFIG.zoom);

L.maplibreGL({
  style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

L.control.scale({ position: 'bottomleft', metric: true, imperial: false, maxWidth: 140 }).addTo(map);

/* ============================ Interest zone ============================= */
/* Soft dotted outline. Always on (no toggle). */

const zoneRing = window.ZONE || [];
const zone = L.layerGroup();

if (zoneRing.length >= 3) {
  L.polygon(zoneRing, {
    color: '#3b5bdb',
    opacity: 0.55,
    weight: 2.5,
    dashArray: '0.5 9',
    lineCap: 'round',
    lineJoin: 'round',
    fill: false,
    interactive: false
  }).addTo(zone);
}

zone.addTo(map);

function fitZone() {
  if (zoneRing.length >= 3) {
    map.fitBounds(L.latLngBounds(zoneRing).pad(0.12));
  }
}
fitZone();

/* If the page loads while #map has no layout size (hidden tab, embedded
 * webview), Leaflet caches the 0×0 size and fitBounds lands on zoom 0 with
 * no resize event to recover. Re-measure and re-fit once real size arrives. */
{
  const mapEl = document.getElementById('map');
  let awaitingSize = mapEl.clientWidth === 0 || mapEl.clientHeight === 0;
  new ResizeObserver(() => {
    map.invalidateSize({ animate: false });
    if (awaitingSize && mapEl.clientWidth > 0 && mapEl.clientHeight > 0) {
      awaitingSize = false;
      fitZone();
    }
  }).observe(mapEl);
}

/* ============================= Walk notes =============================== */

const notes = (window.NOTES || []).filter(n =>
  typeof n.lat === 'number' && typeof n.lng === 'number' && typeof n.score === 'number');


const noteMarkers = L.layerGroup(notes.map(n => {
  const [r, g, b] = scoreColor(n.score);
  const marker = L.circleMarker([n.lat, n.lng], {
    radius: 7,
    color: '#fff',
    weight: 2,
    fillColor: `rgb(${r},${g},${b})`,
    fillOpacity: 1
  });
  const label = n.score > 0 ? `+${n.score}` : `${n.score}`;
  marker.bindPopup(popupHtml(`Score: ${label}`, [n.note], n.date));
  return marker;
}));  // off by default — toggled from the panel

/* =============================== Coffee ================================= */
/* window.COFFEE is filled by data/coffee-chains.js + data/coffee-independents.js.
 * Chains have {chain, name}; independents have {name, tier}. */

const coffee = L.layerGroup((window.COFFEE || []).map(c => {
  const title = c.chain ? `${c.chain} — ${c.name}` : c.name;
  const isTop = Boolean(c.tier && c.tier.startsWith('★★★'));
  const marker = L.marker([c.lat, c.lng], { icon: badgeIcon('☕', 'coffee', isTop), title });
  marker.bindPopup(popupHtml(title, [c.tier, c.address]));
  return marker;
})).addTo(map);

/* ================================ Food ================================== */

const food = L.layerGroup((window.FOOD || []).map(f => {
  const title = `${f.name} · ${f.rating}`;
  const marker = L.marker([f.lat, f.lng], { icon: badgeIcon('🍽', 'food', f.rating >= 9), title });
  marker.bindPopup(popupHtml(
    title,
    [[f.cuisine, f.price, f.area].filter(Boolean).join(' · '), f.address],
    f.tags ? f.tags.replace(/-/g, ' ').replace(/,/g, ' · ') : ''
  ));
  return marker;
}));  // off by default — toggled from the panel

/* =============================== Stations =============================== */

const stations = L.layerGroup((window.STATIONS || []).map(s => {
  const marker = L.marker([s.lat, s.lng], { icon: badgeIcon('🚇', 'station', Boolean(s.hub)), title: s.name });
  marker.bindPopup(popupHtml(s.name + (s.hub ? ' · hub' : ''), [s.lines]));
  return marker;
})).addTo(map);

/* ============================ Crime density ============================= */
/* MPS LSOA-level recorded crime, 12 months, combined into one severity
 * score (70% violent crime, 30% theft — see data/crime.js). Off by default. */

const crime = window.CRIME || { combined: [], combinedRef: 1 };

// Violet ramp — deliberately distinct from the teal liveability ramp
// so both layers stay readable when shown together.
const crimeHeat = new DensityLayer(crime.combined, crime.combinedRef, {
  low: [238, 226, 254],
  high: [74, 20, 134]
});

/* ============================== Good life =============================== */
/* Chains that signal a wealthy, pleasant district (Waitrose, GAIL's, Aesop,
 * Whole Foods) — a lifestyle proxy layer, one badge style, no tiers. */

const wealth = L.layerGroup((window.WEALTH || []).map(w => {
  const title = `${w.chain} — ${w.name}`;
  const marker = L.marker([w.lat, w.lng], { icon: badgeIcon('🥑', 'wealth', false), title });
  marker.bindPopup(popupHtml(title, [w.address]));
  return marker;
})).addTo(map);


/* ===================== Liveability score (heat map) ===================== */
/* Computed live from the coffee / food / stations / good-life datasets.
 * Formula, constants and rationale: docs/livability.md (the SSOT).
 * Fast path: each POI is "splatted" onto a per-category accumulation grid,
 * then cells are saturated, weighted, blended and masked to the zone. */

const LivabilityLayer = L.Layer.extend({
  initialize(categoryPoints, ring) {
    this._cats = categoryPoints;  // { name: { pts: [[lat,lng,w]], cfg } }
    this._ring = ring;
  },

  onAdd(map) {
    this._map = map;
    this._canvas = L.DomUtil.create('canvas', 'leaflet-zoom-hide');
    this._canvas.style.pointerEvents = 'none';
    map.getPane('overlayPane').appendChild(this._canvas);
    map.on('moveend zoomend resize', this._redraw, this);
    this._redraw();
  },

  onRemove(map) {
    map.getPane('overlayPane').removeChild(this._canvas);
    map.off('moveend zoomend resize', this._redraw, this);
  },

  _redraw() {
    if (!this._map) return;
    const map = this._map;
    const size = map.getSize();
    if (!size.x || !size.y) return;
    L.DomUtil.setPosition(this._canvas, map.containerPointToLayerPoint([0, 0]));
    this._canvas.width = size.x;
    this._canvas.height = size.y;
    const ctx = this._canvas.getContext('2d');
    ctx.clearRect(0, 0, size.x, size.y);

    const metersPerPixel =
      40075016.686 * Math.abs(Math.cos(map.getCenter().lat * Math.PI / 180)) /
      (256 * Math.pow(2, map.getZoom()));
    const step = CONFIG.densitySampleStep;
    const gw = Math.ceil(size.x / step);
    const gh = Math.ceil(size.y / step);

    // 1. Accumulate raw reachness A_c on one grid per category.
    const grids = {};
    for (const [name, cat] of Object.entries(this._cats)) {
      const grid = new Float32Array(gw * gh);
      const sigmaPx = cat.cfg.sigma / metersPerPixel;
      const cutoff = sigmaPx * 3;
      const inv2s2 = 1 / (2 * sigmaPx * sigmaPx);
      for (const [lat, lng, w] of cat.pts) {
        const cp = map.latLngToContainerPoint([lat, lng]);
        if (cp.x < -cutoff || cp.x > size.x + cutoff ||
            cp.y < -cutoff || cp.y > size.y + cutoff) continue;
        const gx0 = Math.max(0, Math.floor((cp.x - cutoff) / step));
        const gx1 = Math.min(gw - 1, Math.ceil((cp.x + cutoff) / step));
        const gy0 = Math.max(0, Math.floor((cp.y - cutoff) / step));
        const gy1 = Math.min(gh - 1, Math.ceil((cp.y + cutoff) / step));
        for (let gy = gy0; gy <= gy1; gy++) {
          const dy = gy * step + step / 2 - cp.y;
          for (let gx = gx0; gx <= gx1; gx++) {
            const dx = gx * step + step / 2 - cp.x;
            const d2 = dx * dx + dy * dy;
            if (d2 > cutoff * cutoff) continue;
            grid[gy * gw + gx] += w * Math.exp(-d2 * inv2s2);
          }
        }
      }
      grids[name] = grid;
    }

    // 2. Zone ring in grid coordinates, for masking.
    const ring = this._ring.map(([lat, lng]) => {
      const cp = map.latLngToContainerPoint([lat, lng]);
      return [cp.x / step, cp.y / step];
    });
    const inRing = (x, y) => {
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    };

    // 3. Blend: S = Σ W_c · (1 − exp(−A_c / k_c)).
    // Quantizing at grid resolution and upscaling staircases the band edges,
    // so instead upscale the continuous score field and quantize per screen
    // pixel. The coarse image encodes S in R and the zone mask in G, with
    // alpha kept opaque so bilinear interpolation doesn't premultiply the
    // channels away.
    const off = document.createElement('canvas');
    off.width = gw;
    off.height = gh;
    const octx = off.getContext('2d');
    const img = octx.createImageData(gw, gh);
    const cats = Object.entries(this._cats);

    for (let gy = 0; gy < gh; gy++) {
      for (let gx = 0; gx < gw; gx++) {
        const cell = gy * gw + gx;
        let S = 0;
        for (const [name, cat] of cats) {
          S += cat.cfg.weight * (1 - Math.exp(-grids[name][cell] / cat.cfg.k));
        }
        const i = cell * 4;
        img.data[i] = Math.round(255 * Math.min(1, S));
        img.data[i + 1] = inRing(gx + 0.5, gy + 0.5) ? 255 : 0;
        img.data[i + 3] = 255;
      }
    }
    octx.putImageData(img, 0, 0);

    const full = document.createElement('canvas');
    full.width = size.x;
    full.height = size.y;
    const fctx = full.getContext('2d');
    fctx.imageSmoothingEnabled = true;
    fctx.imageSmoothingQuality = 'high';
    fctx.drawImage(off, 0, 0, size.x, size.y);

    const grades = CONFIG.livability.grades;
    const lut = new Array(256);
    for (let v = 0; v < 256; v++) {
      let grade = grades[0];
      for (const g of grades) {
        if (v / 255 >= g.min) grade = g;
      }
      lut[v] = grade;
    }

    const fimg = fctx.getImageData(0, 0, size.x, size.y);
    const fd = fimg.data;
    for (let i = 0; i < fd.length; i += 4) {
      if (fd[i + 1] < 128) {
        fd[i + 3] = 0;
        continue;
      }
      const grade = lut[fd[i]];
      fd[i] = grade.rgb[0];
      fd[i + 1] = grade.rgb[1];
      fd[i + 2] = grade.rgb[2];
      fd[i + 3] = Math.round(grade.alpha * 255);
    }
    fctx.putImageData(fimg, 0, 0);
    ctx.drawImage(full, 0, 0);
  }
});

const livabilityCats = {
  connectivity: {
    cfg: CONFIG.livability.categories.connectivity,
    pts: (window.STATIONS || []).map(s => [s.lat, s.lng, s.hub ? 3 : 1])
  },
  coffee: {
    cfg: CONFIG.livability.categories.coffee,
    pts: (window.COFFEE || []).map(c => [c.lat, c.lng, (c.tier || '').startsWith('★★★') ? 2 : 1])
  },
  food: {
    cfg: CONFIG.livability.categories.food,
    pts: (window.FOOD || []).map(f => [f.lat, f.lng, f.rating >= 9 ? 2 : 1])
  },
  goodlife: {
    cfg: CONFIG.livability.categories.goodlife,
    pts: (window.WEALTH || []).filter(w => w.chain !== 'Aesop')
      .map(w => [w.lat, w.lng, (w.chain === 'Waitrose' || w.chain === 'Whole Foods') ? 1.5 : 1])
  }
};

const livability = new LivabilityLayer(livabilityCats, window.ZONE || []).addTo(map);

/* =============================== Controls =============================== */

const toggles = {
  'toggle-livability': livability,
  'toggle-markers': noteMarkers,
  'toggle-coffee': coffee,
  'toggle-food': food,
  'toggle-tube': stations,
  'toggle-wealth': wealth,
  'toggle-crime': crimeHeat
};

for (const [id, layer] of Object.entries(toggles)) {
  const input = document.getElementById(id);
  if (!input) continue;
  input.addEventListener('change', e => {
    if (e.target.checked) map.addLayer(layer);
    else map.removeLayer(layer);
  });
}

// On small screens the panel is collapsed behind the roundel button.
const panel = document.getElementById('panel');
document.getElementById('panel-toggle').addEventListener('click', () => {
  panel.classList.toggle('open');
});

/* ------------------------- "Show me" (geolocation) ---------------------- */
/* Geolocation is only requested when the button is pressed — the browser
 * shows its permission prompt on the first press; afterwards it just works. */

const locateBtn = document.getElementById('locate-btn');
const toast = document.getElementById('toast');
let meMarker = null;
let meCircle = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

locateBtn.addEventListener('click', () => {
  locateBtn.classList.add('locating');
  map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true, timeout: 12000 });
});

map.on('locationfound', e => {
  locateBtn.classList.remove('locating');
  const radius = Math.min(e.accuracy / 2, 400);
  if (meMarker) {
    meMarker.setLatLng(e.latlng);
    meCircle.setLatLng(e.latlng).setRadius(radius);
  } else {
    meCircle = L.circle(e.latlng, {
      radius,
      color: '#10069f',
      weight: 1,
      fillColor: '#10069f',
      fillOpacity: 0.08,
      interactive: false
    }).addTo(map);
    meMarker = L.marker(e.latlng, {
      icon: L.divIcon({ className: 'me-dot', iconSize: [16, 16], iconAnchor: [8, 8] }),
      interactive: false
    }).addTo(map);
  }
});

map.on('locationerror', () => {
  locateBtn.classList.remove('locating');
  showToast('Location unavailable — check GPS permission for this site');
});
