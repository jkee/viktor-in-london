# Data sources

(The computed "Heat map" layer has its own methodology document:
[livability.md](livability.md) — that file is its single source of truth.)

Every dataset lives in `data/` as a hand-editable JS array. This file records
where each one came from and how to refresh it.

The common filter for all reference layers is the **area of interest** — the
polygon in `data/zone.js` — **plus a 500 m buffer** beyond its border
(point-in-polygon OR distance-to-border ≤ 500 m).

## notes.js — walk notes (personal)

Voice-note transcripts recorded while walking, manually geocoded and scored
−5…+5. This is the only dataset that is purely personal; everything else is
derived from public sources. To extend: walk more, transcribe, append.

## zone.js — area of interest

Hand-drawn: approximately **TfL fare Zones 1 + 2**. Fare zones have no
official polygons — the ring traces the Zone 2/3 boundary through its landmark
stations (White City → Kilburn → Hampstead → Archway → Manor House → Clapton →
Stratford → Canning Town → Island Gardens → Greenwich → Brockley → East
Dulwich → Brixton → Clapham South → Wandsworth → Putney → Hammersmith).

## coffee-chains.js — chain cafes

Branch lists from the chains' official location pages (fetched 2026-08/09):
Kiss the Hippo, WatchHouse, Rosslyn, Hagen (thehagenproject.com), Origin,
Ozone, Qima. Only branches inside the zone+buffer are listed; excluded branches
(Richmond, Canary Wharf, Fulham, deep Bermondsey, …) were dropped deliberately.
Coordinates geocoded from street addresses (accurate to the building).

## coffee-independents.js — independent cafes

From **propercoffee.app/london** (dataset dated May 2026), which embeds full
cafe records (name, tier, address, lat/lng) in its server-rendered pages.
Kept tiers: **★★★ Purist** and **★★ Specialty** only — the "Everyday" tier is
excluded by request. Districts covered: every propercoffee district that
overlaps the zone. Chain branches already in `coffee-chains.js` are skipped.

To refresh: load a propercoffee.app page, extract `"cafe_name" … "lat" … "lng"`
records from its embedded JSON payload, filter by tier + zone, dedupe.

## food.js — restaurants

From **theinfatuation.com/london/reviews** (fetched 2026-09-01; 2,517 reviews
scanned). Kept if **all** of:

- rating ≥ 8.0;
- price £–£££ (their INEXPENSIVE / MODERATELY_EXPENSIVE / EXPENSIVE tiers;
  VERY_EXPENSIVE = ££££ excluded);
- inside zone + 500 m buffer (coordinates from each review's JSON-LD);
- not obviously fine-dining / special-occasion: excluded when tagged
  `fine-dining`, or tagged `special-occasions` with no casual tag
  (casual-dinners / walk-ins / lunch / breakfast / brunch / cheap-eats /
  dining-solo / …), or an omakase/tasting-menu concept.

The `tags` field keeps the casual "perfect for" tags for the popup.

To refresh: the review list is served as ~100 server-rendered pages
(`/london/reviews?page=N`) with review metadata embedded; each review page
carries coordinates (JSON-LD `geo`) and "Perfect for" tags. Re-scrape, apply
the filter above, merge.

## wealth.js — "good life" markers

Branch locations of four chains used as a wealthy-pleasant-district proxy:
**Waitrose / Little Waitrose, GAIL's, Aesop, Whole Foods** — from the chains'
official store finders (fetched 2026-09), filtered to the zone + 500 m buffer.
No tiers; one avocado 🥑 badge per branch.

## crime.js — crime density ("Crime heat")

One combined severity score per LSOA (stored ×100):
`score = 0.7 × (violentDensity / violentP95) + 0.3 × (theftDensity / theftP95)`
— each component normalized by its own p95 so theft's volume can't drown out
violence; violence weighted 70% by severity. Component definitions below.

From the **London Datastore**: "MPS Recorded Crime: Geographic Breakdown" →
*MPS LSOA Level Crime (most recent 24 months)* CSV, using the Met's offence
taxonomy (more granular than data.police.uk's street-level categories — it
splits violence by injury and robbery/burglary by target). Latest build:
**12 months, Aug 2025 – Jul 2026**, LSOAs within the zone + 1 km.

- **theft** = theft from the person + other theft + bicycle theft
  (shoplifting excluded as business crime)
- **real** = violence WITH injury + homicide + robbery of personal property +
  residential burglary (home + unconnected building). Violence *without*
  injury, stalking/harassment, and business robbery/burglary are excluded
  on purpose — ~74% of the raw "violence" bucket involves no physical injury.

Each LSOA's 12-month sum sits at its ONS population-weighted centroid
(LSOA_PopCentroids_EW_2021_V4 on the ONS ArcGIS), with the unit's true
polygon radius for the smoothing kernel. `combinedRef` (p99 of the score)
caps the violet color ramp. To refresh: re-download the CSV and re-run the
sums for the latest 12 month columns.

## stations.js — tube / rail stations

Generated from the official **TfL StopPoint API** (2026-09): every
Underground, Elizabeth line, Overground, DLR and rail station in fare
Zones 1–2 (incl. 2/3 boundary stations) inside the zone + 500 m, with
line lists and fare zones. Same-name tube/rail stations more than 300 m
apart are kept separate (suffixed "(Rail)"). `hub: true` (bold ring) =
3+ lines, an Elizabeth line stop, or a named interchange.
