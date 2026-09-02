// Independent cafes from propercoffee.app/london (May 2026) — all Purist (★★★)
// and Specialty (★★) picks from the districts inside the interest zone:
// Fitzrovia, Shoreditch, Covent Garden, Clerkenwell, Soho, King's Cross,
// Islington, Hackney, Dalston. Everyday-tier picks are excluded.
// Chain locations already listed in coffee-chains.js are skipped here.

window.COFFEE = (window.COFFEE || []).concat([
  // --- Fitzrovia (14 picks, minus KTH ×2, WatchHouse, Qima) ---
  { name: "Attendant Coffee Roasters Fitzrovia", tier: "★★★ Purist", address: "27A Foley St, W1W 6DY", lat: 51.5192, lng: -0.1407 },
  { name: "Kaffeine", tier: "★★★ Purist", address: "66 Great Titchfield St, W1W 7QJ", lat: 51.5185, lng: -0.1404 },
  { name: "THE BARN Café", tier: "★★★ Purist", address: "36 Charlotte St, W1T 2NJ", lat: 51.5191, lng: -0.1352 },
  { name: "Kafi", tier: "★★ Specialty", address: "Cleveland St, W1T 6NJ", lat: 51.5223, lng: -0.1407 },
  { name: "Omotesando Koffee", tier: "★★ Specialty", address: "8 Newman St, W1T 1FB", lat: 51.5166, lng: -0.1348 },
  { name: "Alex Coffee", tier: "★★ Specialty", address: "1 Hanson St, W1W 6TA", lat: 51.5194, lng: -0.1403 },
  { name: "Kronotrop", tier: "★★ Specialty", address: "42 Mortimer St, W1W 7RH", lat: 51.5179, lng: -0.1405 },
  { name: "Kitchen Coffee", tier: "★★ Specialty", address: "42 Newman St, W1T 1QD", lat: 51.5187, lng: -0.1364 },
  { name: "Caravan Fitzrovia", tier: "★★ Specialty", address: "152 Great Portland St, W1W 6AJ", lat: 51.5207, lng: -0.1427 },
  { name: "Store Street Espresso", tier: "★★ Specialty", address: "40 Store St, WC1E 7DB", lat: 51.5201, lng: -0.1307 },

  // --- Shoreditch (12 picks, minus KTH, Ozone, Origin) ---
  { name: "LIFT COFFEE", tier: "★★★ Purist", address: "73 Rivington St, EC2A 3AY", lat: 51.5263, lng: -0.0795 },
  { name: "Allpress Espresso Bar", tier: "★★★ Purist", address: "58 Redchurch St, E2 7DP", lat: 51.5244, lng: -0.0743 },
  { name: "Dark Arts Coffee", tier: "★★★ Purist", address: "1 Holywell Ln, EC2A 3ET", lat: 51.5239, lng: -0.0776 },
  { name: "Flying Horse Coffee", tier: "★★★ Purist", address: "4b Holywell Ln, EC2A 3ET", lat: 51.5239, lng: -0.0779 },
  { name: "Attendant Coffee Roasters", tier: "★★ Specialty", address: "74 Great Eastern St, EC2A 3JL", lat: 51.5257, lng: -0.0825 },
  { name: "Nude Coffee Roasters", tier: "★★ Specialty", address: "25 Hanbury St, E1 6QR", lat: 51.5205, lng: -0.0728 },
  { name: "High Grade Coffee", tier: "★★ Specialty", address: "Old Truman Brewery, 91 Brick Ln, E1 6QL", lat: 51.5213, lng: -0.0719 },
  { name: "Kybelle Cafe", tier: "★★ Specialty", address: "62 Great Eastern St, EC2A 3QR", lat: 51.5253, lng: -0.0816 },
  { name: "Nkora Coffee", tier: "★★ Specialty", address: "21 Hackney Rd, E2 7NX", lat: 51.5276, lng: -0.0769 },

  // --- Covent Garden (10 picks, minus KTH, WatchHouse ×2, Qima, Hagen) ---
  { name: "Monmouth Coffee Company", tier: "★★★ Purist", address: "27 Monmouth St, WC2H 9EU", lat: 51.5144, lng: -0.1268 },
  { name: "Wolfox Speciality Coffee", tier: "★★★ Purist", address: "19 Monmouth St, WC2H 9DD", lat: 51.5145, lng: -0.1267 },
  { name: "Redemption Roasters", tier: "★★ Specialty", address: "40 Drury Ln, WC2B 5RR", lat: 51.5146, lng: -0.1223 },
  { name: "% ARABICA", tier: "★★ Specialty", address: "5 King St, WC2E 8HN", lat: 51.5117, lng: -0.1240 },
  { name: "Neal Street Espresso", tier: "★★ Specialty", address: "34 Neal St, WC2H 9PS", lat: 51.5142, lng: -0.1253 },

  // --- Clerkenwell (8 picks) ---
  { name: "Colonna & Small's", tier: "★★★ Purist", address: "96a Leather Ln, EC1N 7TX", lat: 51.5216, lng: -0.1100 },
  { name: "Prufrock Coffee", tier: "★★★ Purist", address: "23-25 Leather Ln, EC1N 7TE", lat: 51.5199, lng: -0.1095 },
  { name: "Attendant Coffee Roasters", tier: "★★ Specialty", address: "75 Leather Ln, EC1N 7TJ", lat: 51.5211, lng: -0.1100 },
  { name: "The Ethiopian Coffee Company", tier: "★★ Specialty", address: "61 Amwell St, EC1R 1UR", lat: 51.5298, lng: -0.1106 },
  { name: "Briki", tier: "★★ Specialty", address: "67 Exmouth Market, EC1R 4QL", lat: 51.5264, lng: -0.1083 },
  { name: "Rose & Rose", tier: "★★ Specialty", address: "400 St John St, EC1V 4NJ", lat: 51.5310, lng: -0.1058 },
  { name: "Sofu Coffee", tier: "★★ Specialty", address: "68 Compton St, EC1V 0BN", lat: 51.5247, lng: -0.1024 },
  { name: "COMP Coffee", tier: "★★ Specialty", address: "85 Leather Ln, EC1N 7TS", lat: 51.5214, lng: -0.1102 },

  // --- Soho (7 picks, minus KTH) ---
  { name: "Kaffeine Eastcastle", tier: "★★★ Purist", address: "15 Eastcastle St, W1T 3AY", lat: 51.5169, lng: -0.1372 },
  { name: "The Colombian Coffee Company", tier: "★★ Specialty", address: "22 Greek St, W1D 4DY", lat: 51.5137, lng: -0.1306 },
  { name: "Tintico", tier: "★★ Specialty", address: "57 Greek St, W1D 3DX", lat: 51.5145, lng: -0.1313 },
  { name: "Café Vins", tier: "★★ Specialty", address: "1 Marlborough Ct, Carnaby, W1F 7EE", lat: 51.5134, lng: -0.1388 },
  { name: "Nagare Coffee", tier: "★★ Specialty", address: "2 Newburgh St, Carnaby, W1F 7RD", lat: 51.5135, lng: -0.1384 },
  { name: "London Grand Coffee", tier: "★★ Specialty", address: "11 Warwick St, W1B 5NA", lat: 51.5111, lng: -0.1379 },

  // --- King's Cross (7 picks, minus Origin) ---
  { name: "Hermanos Colombian Coffee Roasters", tier: "★★★ Purist", address: "Pancras Rd, N1C 4TB", lat: 51.5312, lng: -0.1249 },
  { name: "Gramos Coffee Bar", tier: "★★★ Purist", address: "King's Cross Underground Station, N1 9AL", lat: 51.5318, lng: -0.1244 },
  { name: "Notes Coffee Roasters & Bar", tier: "★★ Specialty", address: "1 Pancras Rd, N1C 4AG", lat: 51.5331, lng: -0.1251 },
  { name: "Redemption Roasters King's Cross", tier: "★★ Specialty", address: "Unit 109 Stable St, N1C 4DR", lat: 51.5359, lng: -0.1262 },
  { name: "Store Street Espresso Tavistock", tier: "★★ Specialty", address: "54 Tavistock Pl, WC1H 9RG", lat: 51.5257, lng: -0.1250 },
  { name: "Frequency Coffee", tier: "★★ Specialty", address: "121 King's Cross Rd, WC1X 9NH", lat: 51.5291, lng: -0.1160 },

  // --- Islington / Angel (7 picks) ---
  { name: "Redemption Roasters Angel", tier: "★★ Specialty", address: "96-98 Islington High St, N1 8EG", lat: 51.5342, lng: -0.1045 },
  { name: "Chapel Market Roastery", tier: "★★ Specialty", address: "4 Chapel Market, N1 9EZ", lat: 51.5335, lng: -0.1106 },
  { name: "SELV ROASTERY", tier: "★★ Specialty", address: "116 Upper St, N1 1AP", lat: 51.5384, lng: -0.1025 },
  { name: "Brood Roastery", tier: "★★ Specialty", address: "113 Essex Rd, N1 2SL", lat: 51.5390, lng: -0.0988 },
  { name: "Devotion Coffee", tier: "★★ Specialty", address: "2 Cross St, N1 2BL", lat: 51.5388, lng: -0.0990 },
  { name: "Spring Valley Coffee", tier: "★★ Specialty", address: "24 Camden Passage, N1 8ED", lat: 51.5352, lng: -0.1034 },
  { name: "Frequency Coffee Angel", tier: "★★ Specialty", address: "13 Camden Passage, N1 8EA", lat: 51.5347, lng: -0.1041 },

  // --- Hackney (4 picks; Lodestar sits just north of the zone outline) ---
  { name: "sons", tier: "★★ Specialty", address: "St John at Hackney Courtyard, E5 0PD", lat: 51.5483, lng: -0.0535 },
  { name: "Elsewhere Coffee", tier: "★★ Specialty", address: "1A Amhurst Rd, E8 1LL", lat: 51.5473, lng: -0.0555 },
  { name: "Running Late Coffee", tier: "★★ Specialty", address: "249b Mare St, E8 3NS", lat: 51.5426, lng: -0.0555 },
  { name: "Lodestar Coffee", tier: "★★ Specialty", address: "163 Clarence Rd, Lower Clapton, E5 8EE", lat: 51.5553, lng: -0.0562 },

  // --- Dalston (2 picks) ---
  { name: "Allpress Roastery & Cafe", tier: "★★ Specialty", address: "55 Dalston Ln, E8 2NG", lat: 51.5465, lng: -0.0706 },
  { name: "Batch Baby", tier: "★★ Specialty", address: "43 De Beauvoir Rd, N1 5SF", lat: 51.5392, lng: -0.0814 },

  // --- Camden (Primrose Hill / Camden Town expansion) ---
  { name: "Glass Coffee", tier: "★★★ Purist", address: "BoxPark Camden, 192-198 Camden High St, NW1 8QP", lat: 51.5401, lng: -0.1433 },
  { name: "Camden Coffee Roastery", tier: "★★ Specialty", address: "12 Castlehaven Rd, NW1 8QU", lat: 51.5423, lng: -0.1449 },

  // --- Notting Hill (Zone 1 expansion) ---
  { name: "LIFT COFFEE Notting Hill", tier: "★★★ Purist", address: "133 Kensington Church St, W8 7LP", lat: 51.5075, lng: -0.1949 },
  { name: "Guillam Coffee House", tier: "★★ Specialty", address: "26 Notting Hill Gate, W11 3HX", lat: 51.5096, lng: -0.1943 },
  { name: "Amoret Coffee", tier: "★★ Specialty", address: "53 Pembridge Rd, W11 3HG", lat: 51.5108, lng: -0.1976 },
  { name: "Notting Hill Coffee Project", tier: "★★ Specialty", address: "63 Notting Hill Gate, W11 3JS", lat: 51.5089, lng: -0.1966 },
  { name: "The Hatch Specialty Coffee", tier: "★★ Specialty", address: "21 Notting Hill Gate, W11 3JQ", lat: 51.5092, lng: -0.1944 },

  // --- South Bank / Waterloo (Zone 1 expansion) ---
  { name: "Birds Hill Coffee", tier: "★★ Specialty", address: "142 Southwark St, SE1 0SW", lat: 51.5065, lng: -0.1022 },
  { name: "Calico Coffee", tier: "★★ Specialty", address: "101 Lower Marsh, SE1 7AB", lat: 51.5013, lng: -0.1121 },

  // --- Bermondsey Street (500m buffer) ---
  { name: "Urban Baristas", tier: "★★ Specialty", address: "135 Bermondsey St, SE1 3UW", lat: 51.4999, lng: -0.0814 },
  { name: "Fuckoffee", tier: "★★ Specialty", address: "163-167 Bermondsey St, SE1 3UW", lat: 51.4993, lng: -0.0811 },

  // --- Zone 2 expansion: Bermondsey deep ---
  { name: "Monmouth Coffee Roastery", tier: "★★★ Purist", address: "Arch 3, Discovery Estate, St James's Rd, SE16 4RA", lat: 51.4958, lng: -0.0671 },
  { name: "Monmouth Coffee Dockley Road", tier: "★★★ Purist", address: "3-4 Dockley Rd, SE16 3AF", lat: 51.4956, lng: -0.0693 },

  // --- Zone 2: Battersea / Nine Elms ---
  { name: "Nostos Coffee", tier: "★★★ Purist", address: "10a Battersea Park Rd, SW8 4FF", lat: 51.4770, lng: -0.1469 },
  { name: "District Battersea", tier: "★★ Specialty", address: "49 Parkgate Rd, SW11 4NP", lat: 51.4792, lng: -0.1670 },
  { name: "Doppio Coffee Warehouse", tier: "★★ Specialty", address: "336 Battersea Park Rd, SW11 3BY", lat: 51.4708, lng: -0.1704 },
  { name: "Kapihan", tier: "★★ Specialty", address: "547 Battersea Park Rd, SW11 3BL", lat: 51.4715, lng: -0.1675 },
  { name: "Sendero Nine Elms", tier: "★★ Specialty", address: "37 Patcham Terrace, SW8 4EX", lat: 51.4762, lng: -0.1480 },
  { name: "The Coffee Studio", tier: "★★ Specialty", address: "V1 Patcham Terrace, SW8 4FN", lat: 51.4767, lng: -0.1472 },

  // --- Zone 2: Brixton ---
  { name: "Sendero Specialty Coffee", tier: "★★ Specialty", address: "1 Atlantic Rd, SW9 8HX", lat: 51.4633, lng: -0.1146 },
  { name: "Door", tier: "★★ Specialty", address: "244 Ferndale Rd, SW9 8FR", lat: 51.4641, lng: -0.1159 },
  { name: "Beans & Beats", tier: "★★ Specialty", address: "179 Ferndale Rd, SW9 8BA", lat: 51.4639, lng: -0.1166 },
  { name: "Four Boroughs", tier: "★★ Specialty", address: "245a Coldharbour Ln, SW9 8RR", lat: 51.4647, lng: -0.1024 },
  { name: "Addis in Brixton", tier: "★★ Specialty", address: "20 Market Row, SW9 8LD", lat: 51.4620, lng: -0.1133 },

  // --- Zone 2: Peckham ---
  { name: "Ukkei", tier: "★★★ Purist", address: "Rye Lane Market, 48 Rye Ln, SE15 5BY", lat: 51.4709, lng: -0.0699 },
  { name: "Old Spike", tier: "★★ Specialty", address: "54 Peckham Rye, SE15 4JR", lat: 51.4652, lng: -0.0666 },
  { name: "Calm Coffee Roastery", tier: "★★ Specialty", address: "Peckham Levels, 95A Rye Ln, SE15 4ST", lat: 51.4709, lng: -0.0675 },
  { name: "Daydreamer", tier: "★★ Specialty", address: "133a Rye Ln, SE15 4BQ", lat: 51.4698, lng: -0.0682 },
  { name: "South London Louie", tier: "★★ Specialty", address: "67 Peckham Rd, SE5 8UH", lat: 51.4742, lng: -0.0797 },

  // --- Zone 2: Fulham / Parsons Green ---
  { name: "Naive", tier: "★★ Specialty", address: "75 Parsons Green Ln, SW6 4JA", lat: 51.4746, lng: -0.2005 },
  { name: "District Parsons Green", tier: "★★ Specialty", address: "50 Parsons Green Ln, SW6 4HU", lat: 51.4753, lng: -0.2008 },
  { name: "Carbon Kopi", tier: "★★ Specialty", address: "1 Hazlebury Rd, SW6 2NA", lat: 51.4726, lng: -0.1914 },

  // --- Zone 2: Clapham ---
  { name: "The Common Espresso Bar", tier: "★★ Specialty", address: "10 Clapham Park Rd, SW4 7BB", lat: 51.4613, lng: -0.1368 },
  { name: "BOBO & WILD", tier: "★★ Specialty", address: "18 Clapham Common South Side, SW4 7AB", lat: 51.4610, lng: -0.1386 }
]);
