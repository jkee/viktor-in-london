// Walk notes — personal scored observations, shown as colored dots.
//
// Each entry:
//   lat, lng — where the note was made (long-press a spot in Google Maps to copy coordinates)
//   score    — how much you'd want to live there, from -5 (no way) to +5 (love it)
//   note     — the original text about the place
//   date     — optional, free text

window.NOTES = [
  {
    lat: 51.5205, lng: -0.0836,
    score: -2,
    note: "Sun Street — kind of a shitty place, lives in the construction area basically. The building itself is great and the view is amazing, but overall not great."
  },
  {
    lat: 51.5218, lng: -0.0842,
    score: 1,
    note: "Worship Street, area around Techspace. It's okay, kind of empty, but not bad."
  },
  {
    lat: 51.5208, lng: -0.0800,
    score: -1,
    note: "Zone between the Amazon office / Principal Place and the City. Feels like a corporate zone more than a living zone. Still kind of nice, lots of cafes, but corporate vibe."
  },
  {
    lat: 51.5223, lng: -0.0786,
    score: 2,
    note: "Principal Place. Still corporate vibe because of the offices, but feels kinda nice. Shoreditch to the left, Spitalfields to the right — 200m to the hip parts. Principal Tower is not bad."
  },
  {
    lat: 51.5253, lng: -0.0823,
    score: -2,
    note: "Great Eastern Street — just a large street, looks not bad but doesn't feel like home. A lot of cars. Okay, but definitely don't live here."
  },
  {
    lat: 51.5231, lng: -0.0844,
    score: -1,
    note: "Scrutton Street, around the coffee shop. Feels kind of nice but industrial — mostly (nice) offices. It's for the work, not for the living."
  },
  {
    lat: 51.5277, lng: -0.0817,
    score: 4,
    note: "Hoxton Square area (probably). Surprisingly feels like home. Young people, not too polished, some weirdness, definitely some life happening. Two guys holding hands — incredible."
  },
  {
    lat: 51.5240, lng: -0.0723,
    score: 1,
    note: "Redchurch Street — basically a shopping street: clothes, home stuff. Like it much more than Oxford Street, not crowded, people are cool. But it's a shopping street — maybe in some proximity, not exactly there."
  },
  {
    lat: 51.5222, lng: -0.0672,
    score: 2,
    note: "Cheshire Street (like a Cheshire cat) — more or less the Brick Lane part. A lot of shops and stuff, feels cool."
  },
  {
    lat: 51.5270, lng: -0.0595,
    score: -4,
    note: "Bethnal Green, after Shoreditch / Brick Lane. At first feels nice but quickly becomes cheaper, a lot of stupid shops. Don't want to live here."
  },
  {
    lat: 51.5279, lng: -0.0666,
    score: -4,
    note: "Residential area around Ivimey Street — definitely cheap, a lot of community buildings. The crowd is not young. Don't like it."
  },
  {
    lat: 51.5284, lng: -0.0685,
    score: -2,
    note: "Elwin Street & Barnet Grove — interesting: all two-storey buildings, feels like there's history, but very silent. No restaurants, no cafes, just residentials with a parking lot (you can park a car here, that's nice). Not a great place to live."
  },
  {
    lat: 51.5290, lng: -0.0710,
    score: 1,
    note: "Columbia Road — kind of the vibe, feels like Notting Hill with all these colorful shops selling unnecessary things. But not to live — just to stroll here once, maybe twice."
  },
  {
    lat: 51.5316, lng: -0.0670,
    score: 5,
    note: "Near Hackney City Farm, Haggerston Park, the café. Magic happens — it feels amazing here. Young and stylish people, music playing, random outdoor dancing zone. This Hackney City Farm is something."
  },
  {
    lat: 51.5360, lng: -0.0615,
    score: 5,
    note: "Hackney again. A lot of feels — oh my fucking god, it feels great here. Very young. Leaving some great area."
  },
  {
    lat: 51.5352, lng: -0.0775,
    score: -3,
    note: "Between Shoreditch Park and Hackney — quite empty. Not literally empty, but very residential, nothing happening. Maybe okay for family life or old folks, not for me."
  },
  {
    lat: 51.5308, lng: -0.0928,
    score: 0,
    note: "Shepherdess Walk, the old factory places. Very quiet, kind of close to the main street, but maybe a little too empty. It's okay."
  },
  {
    lat: 51.5258, lng: -0.0950,
    score: 2,
    note: "Residential area around Norman Street & Bartholomew Square (St Luke's). Feels better than Hoxton — actually nice. A lot of new buildings, some places to visit, a lot of sports happening. Lever Street feels okay."
  },
  {
    lat: 51.5190, lng: -0.1380,
    score: 3,
    note: "Fitzrovia (comparison note): in Fitzrovia I feel better — maybe just used to it. More crowded, but yeah."
  },
  {
    lat: 51.5262, lng: -0.1030,
    score: 3,
    note: "Percival Street & Agdon Street — here Clerkenwell begins (in my head at least). Feels like getting home a little bit. Easy-going, understandable, more upscale than other places. Okay in a good way."
  },
  {
    lat: 51.5221, lng: -0.1055,
    score: 4,
    note: "Clerkenwell Road / Britton Street. Feels very good — different, design. Good area, like Farringdon and Clerkenwell. Been here a lot."
  },
  {
    lat: 51.5225, lng: -0.1105,
    score: 3,
    note: "Further along Clerkenwell Road — Back Hill, Leather Lane. Also good, still Clerkenwell. Central, but not Shoreditch-central. Some nice places here."
  },
  {
    lat: 51.5217, lng: -0.1010,
    score: 4,
    note: "Классная улица, очень приятно находиться — классный домик и церковь рядом (Farringdon / Clerkenwell, вероятно St John's Lane / Clerkenwell Green / Charterhouse Square). Всё под рукой, очень красиво."
  },
  {
    lat: 51.5180, lng: -0.0927,
    score: 3,
    note: "Fore Street, рядом с Barbican. Очень классный двор вокруг, new builds создают классную среду. Супер рядом с Barbican — что-то там есть."
  }
];
