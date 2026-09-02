# Liveability score — methodology (SSOT)

**This file is the single source of truth for the liveability heat map.**
The constants in `js/app.js` (`CONFIG.livability`) must mirror the tables
below; any change starts here.

## Idea

For every point on the map, measure how *reachable* four kinds of amenities
are on foot, saturate each measure (the 2nd nearby café matters much more
than the 12th), and blend them into one 0–1 score.

## Formula

For a point **x** and category **c** with POI set *P_c*:

```
A_c(x) = Σ_{i ∈ P_c}  w_i · exp( −d(x,i)² / 2σ_c² )     (raw reachness)
R_c(x) = 1 − exp( −A_c(x) / k_c )                        (saturated, 0–1)
S(x)   = Σ_c  W_c · R_c(x)                               (final score, 0–1)
```

- `d(x,i)` — straight-line distance in meters (equirectangular approx).
- `σ_c` — walking tolerance: how far people will comfortably walk for this
  amenity. The gaussian at distance σ contributes ~61%, at 2σ ~14%.
- `k_c` — saturation constant: A_c = k gives R = 0.63; A_c = 3k gives R = 0.95.
- `W_c` — category weight in the final blend.

## Categories and constants

| category | source layer | σ (m) | k | W | point weights |
|---|---|---|---|---|---|
| connectivity | stations | 500 | 2.0 | 0.35 | hub = 3, other = 1 |
| coffee | coffee | 300 | 2.5 | 0.30 | ★★★ Purist = 2, all others = 1 |
| food | food (8.0+) | 350 | 3.0 | 0.20 | rating ≥ 9.0 = 2, else = 1 |
| good life | wealth | 400 | 2.0 | 0.15 | Waitrose / Whole Foods = 1.5; GAIL's / Little Waitrose = 1; **Aesop excluded** |

Rationale:
- **Connectivity weighted highest** (0.35): non-negotiable for daily life;
  hubs count triple because they multiply reachable destinations.
- **Coffee second** (0.30): the map owner's stated priority; ★★★ places are
  destinations, hence double weight; walking tolerance lowest (a daily
  ritual must be close).
- **Food** (0.20): 8.0+ casual places only (the dataset is already filtered);
  9.0+ doubled.
- **Good life** (0.15): a lifestyle proxy, not a need. Aesop excluded — a
  skincare shop is a signal, not an amenity; full supermarkets (Waitrose,
  Whole Foods) weigh 1.5 because they anchor daily life in a way a bakery
  does not.

## Validation (2026-09-03, Shoreditch + references)

| point | S | conn | coffee | food | good life |
|---|---|---|---|---|---|
| Shoreditch, Redchurch St | 0.87 | 0.84 | 0.96 | 0.99 | 0.61 |
| Shoreditch, Rivington St | 0.85 | 0.82 | 0.97 | 0.97 | 0.51 |
| Shoreditch, Arnold Circus | 0.79 | 0.72 | 0.92 | 0.99 | 0.43 |
| Shoreditch, Hoxton Square | 0.76 | 0.71 | 0.91 | 0.92 | 0.37 |
| Soho, Berwick St | 0.96 | 0.98 | 0.97 | 1.00 | 0.85 |
| Marylebone Village | 0.82 | 0.96 | 0.54 | 0.97 | 0.87 |
| Clerkenwell, Exmouth Market | 0.76 | 0.73 | 0.70 | 0.96 | 0.68 |
| Peckham, Rye Lane | 0.72 | 0.80 | 0.79 | 0.99 | 0.01 |
| Canary Wharf | 0.68 | 0.98 | 0.54 | 0.24 | 0.85 |
| Bethnal Green | 0.49 | 0.79 | 0.17 | 0.78 | 0.02 |
| Clapham Common | 0.48 | 0.66 | 0.53 | 0.00 | 0.59 |
| Hackney City Farm | 0.42 | 0.54 | 0.13 | 0.92 | 0.02 |
| Primrose Hill | 0.31 | 0.46 | 0.04 | 0.26 | 0.55 |

Face-validity: Shoreditch ranks where its reputation (and the owner's walk
notes) put it; Bethnal Green drops sharply; Marylebone shows its true
profile (transport + groceries, weak coffee); Soho maxes out — correct,
because this score measures *amenity access only*. Peace, character and
safety are what the walk notes and the crime layer are for.

## Known caveats

- **Hackney/Broadway Market coffee shadow**: propercoffee.app underrepresents
  Hackney's independents, so coffee-reachness (and total score) reads low
  around London Fields / Hackney City Farm. Partly real (chains and
  good-life brands genuinely absent), partly a data gap.
- The score is computed live in the browser from the four data layers — it
  automatically reflects any data update, and inherits any data bias.
- Straight-line distances ignore rivers, rail cuts and one-way mazes; treat
  scores within ±0.05 as equal.
