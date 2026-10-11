// Gyms — Viktor's gym shortlist research (Oct 2026): brands marked out of 10
// for fit (training quality, atmosphere, facilities, member feedback — not
// review-site averages), plus their branches in the zone + 500 m buffer.
// Branch addresses from each brand's official club pages (2026-10),
// geocoded by postcode. Prices checked 2026-10-11; "on quote" = no current
// full-membership price could be verified.
//
// GYM_BRANDS: per-brand assessment shown in every branch popup.
//   mark    — fit score out of 10
//   top     — the shortlist (bold ring)
//   chain   — mass-market chain: marked "Chain" in the popup, muted badge
//   studio  — class studio, not an unrestricted weights gym
//   price, verdict, says — popup lines (says = what members report)
// GYMS: one entry per branch — brand, name, address, lat, lng, url;
//   visit: true = "visit first" pick, soon: true = announced, not open yet.

window.GYM_BRANDS = {
  "Third Space": {
    mark: 9, top: true, url: "https://www.thirdspace.london/",
    price: "From £257/mo single club · £299 group · £345 group plus",
    verdict: "Best overall starting point — lifting, classes and recovery in one membership.",
    says: "Praised for cleanliness, equipment, classes and changing rooms. Watch for rising prices, peak crowding and popular classes filling up; branches vary."
  },
  "BXR": {
    mark: 8.5, top: true, url: "https://www.bxrlondon.com/",
    price: "Full membership on quote · City: £140 / 8 visits, £95 Fri–Sun",
    verdict: "Most interesting boutique alternative. City's elevated setting is a bonus; Marylebone has the stronger boxing identity.",
    says: "Members praise the trainers, atmosphere and sense of belonging; some find customer service rigid. Thinner independent reviews than the big chains."
  },
  "Equinox": {
    mark: 8.5, top: true, url: "https://www.equinox.com/",
    price: "On quote · St James's (E) is a separate premium proposition",
    verdict: "Strong for comfortable, focused training — less so if a lively social scene is the goal.",
    says: "Modern, clean facilities. Finance-heavy crowd, busy commuter hours, very quiet afternoons and weekends; people mostly do their own thing."
  },
  "Gymbox": {
    mark: 8, top: true, url: "https://gymbox.com/",
    price: "Branch / package dependent · one member reports £145 all-club",
    verdict: "Best match for a lively, less formal vibe — visit at your actual workout time.",
    says: "Great variety, combat classes, equipment and energy. Complaints: loud music, darkness, peak overcrowding, membership admin."
  },
  "BLOK": {
    mark: 8.5, top: true, studio: true, url: "https://www.bloklondon.com/",
    price: "Shoreditch flex: £95 / 5 classes · £160 / 10 · £260 unlimited premium",
    verdict: "Strongest studio pick — movement, strength, yoga and Pilates.",
    says: "Shoreditch holds 4.8/5 from 30,000+ ClassPass ratings."
  },
  "1Rebel": {
    mark: 8, studio: true, url: "https://www.1rebel.com/",
    price: "All-access £135 / 8 sessions · £229 / 31 (6-month commitment); rolling costs more",
    verdict: "Good for an energetic class routine.",
    says: "Praise for trainer energy, amenities and variety; criticism of uneven coaching and customer service."
  },
  "Barry's": {
    mark: 7.5, studio: true, url: "https://www.barrys.com/",
    price: "Class packs / memberships — London price not verified",
    verdict: "Hard workouts; classes don't automatically turn into friends.",
    says: "Devoted fans of particular instructors; others question price, volume and consistency."
  },
  "Harbour Club": {
    mark: 7.5, url: "https://www.harbourclub.com/",
    price: "On quote",
    verdict: "Relevant for tennis — more leisure club than gym; judge each club's social feel.",
    says: "Friendly staff, community, training plus racquets. Some question value and service consistency."
  },
  "KX": {
    mark: 7.5, url: "https://www.kxlife.co.uk/",
    price: "On quote · very high-end",
    verdict: "Gym, restaurant and club in one. Lower confidence until an in-person visit.",
    says: "Praised amenities, personal service, food and club feel; inconsistent service and cramped post-class changing rooms. Feedback is mostly older."
  },
  "Muscleworks": {
    mark: 7.5, url: "https://muscleworksgym.co.uk/",
    price: "Confirm current membership",
    verdict: "Strong lifting option — equipment and training culture over luxury.",
    says: "Great machine selection, serious atmosphere, helpful staff — friendlier than its bodybuilding image."
  },
  "Virgin Active": {
    mark: 7.5, chain: true, url: "https://www.virginactive.co.uk/",
    price: "On quote, by club / access tier",
    verdict: "Worth checking selected branches — start with Aldersgate (gym, pool, spa, reformer included) and Mayfair.",
    says: "Aldersgate gets good comments on layout and classes. Chain-wide: maintenance, pool closures, hygiene, cancellation handling."
  },
  "Fitness First": {
    mark: 7, chain: true, url: "https://www.fitnessfirst.co.uk/",
    price: "Marylebone standard from £130/mo",
    verdict: "Practical middle ground — inspect Marylebone and Cottons before judging the chain.",
    says: "Cottons praised for size and facilities; hygiene, hot water and confusing access terms flagged at Baker Street and Cottons."
  },
  "Nuffield Health": {
    mark: 7, chain: true, url: "https://www.nuffieldhealth.com/gyms",
    price: "Moorgate: £139/mo annual · £163 rolling",
    verdict: "Useful gym-and-pool alternative; City and Moorgate deserve a look.",
    says: "Pools and broader facilities appreciated; big branch differences, maintenance issues, uneven classes."
  },
  "Anytime Fitness": {
    mark: 6.5, chain: true, url: "https://www.anytimefitness.com/en-gb/",
    price: "On quote, by franchise",
    verdict: "Good neighbourhood fallback, especially if 24-hour access matters.",
    says: "Friendly, quieter, convenient; small floors, limited kit and contract admin. Franchises vary."
  },
  "Better": {
    mark: 6.5, chain: true, url: "https://www.better.org.uk/",
    price: "Centre / package dependent",
    verdict: "Worth it for pools and local community — a different thing from a premium club.",
    says: "Welcoming staff and swimming (Oasis especially); cleanliness, service and ventilation complaints across centres."
  },
  "PureGym": {
    mark: 6, chain: true, url: "https://www.puregym.com/",
    price: "e.g. £28.99 Whitechapel · £31.99 Hoxton · £32.99 Shoreditch",
    verdict: "Functional budget option.",
    says: "Cheap and convenient; crowding and variable upkeep, though some branches fare much better."
  },
  "The Gym Group": {
    mark: 6, chain: true, url: "https://www.thegymgroup.com/",
    price: "London from £20.99; varies by branch",
    verdict: "Price benchmark and backup.",
    says: "Value is the draw; trade-off in crowding and facilities."
  }
};

window.GYMS = [
  // --- Third Space ---
  { brand: "Third Space", name: "Battersea", address: "Ground Floor, Prospect Way, Battersea Power Station, SW11 8BH", lat: 51.48038, lng: -0.14416, url: "https://www.thirdspace.london/clubs/battersea/" },
  { brand: "Third Space", name: "Canary Wharf", address: "16-19 Canada Square, E14 5ER", lat: 51.50458, lng: -0.01623, url: "https://www.thirdspace.london/clubs/canary-wharf/" },
  { brand: "Third Space", name: "Chelsea", address: "19 Mallord Street, SW3 6AP", lat: 51.48544, lng: -0.17470, url: "https://www.thirdspace.london/clubs/chelsea/" },
  { brand: "Third Space", name: "City", address: "40 Mark Lane, EC3R 7AT", lat: 51.51014, lng: -0.08072, url: "https://www.thirdspace.london/clubs/city/" },
  { brand: "Third Space", name: "Clapham Junction", address: "Lavender Hill, SW11 1LN", lat: 51.46374, lng: -0.16659, url: "https://www.thirdspace.london/clubs/clapham-junction/" },
  { brand: "Third Space", name: "Islington", address: "15 Esther Anne Place, N1 1UL", lat: 51.53904, lng: -0.10365, url: "https://www.thirdspace.london/clubs/islington/" },
  { brand: "Third Space", name: "Marylebone", address: "Bulstrode Place, W1U 2HU", lat: 51.51827, lng: -0.15019, url: "https://www.thirdspace.london/clubs/marylebone/" },
  { brand: "Third Space", name: "Mayfair", address: "22 Clarges Street, W1J 5FA", lat: 51.50756, lng: -0.14602, url: "https://www.thirdspace.london/clubs/mayfair/" },
  { brand: "Third Space", name: "Moorgate", address: "16 South Place, EC2M 2AQ", lat: 51.51899, lng: -0.08724, url: "https://www.thirdspace.london/clubs/moorgate/", visit: true },
  { brand: "Third Space", name: "Paternoster Square", address: "31 Warwick Lane, EC4M 7BW", lat: 51.51545, lng: -0.10050, url: "https://www.thirdspace.london/clubs/paternoster-square/" },
  { brand: "Third Space", name: "Queen's Park", address: "111 Salusbury Road, NW6 6RG", lat: 51.53771, lng: -0.20657, url: "https://www.thirdspace.london/clubs/queens-park/", soon: true },
  { brand: "Third Space", name: "Soho", address: "67 Brewer Street, W1F 9US", lat: 51.51128, lng: -0.13568, url: "https://www.thirdspace.london/clubs/soho/" },
  { brand: "Third Space", name: "The Whiteley", address: "The Whiteley, Queensway, W2 4YN", lat: 51.51458, lng: -0.18872, url: "https://www.thirdspace.london/clubs/the-whiteley/" },
  { brand: "Third Space", name: "Tower Bridge", address: "2b More London Riverside, SE1 2AP", lat: 51.50529, lng: -0.08036, url: "https://www.thirdspace.london/clubs/tower-bridge/" },
  { brand: "Third Space", name: "Wood Wharf", address: "14 Charter Street, E14 5GZ", lat: 51.50312, lng: -0.01280, url: "https://www.thirdspace.london/clubs/wood-wharf/" },

  // --- BXR ---
  { brand: "BXR", name: "City", address: "22 Bishopsgate, Floor 25, EC2N 4BQ", lat: 51.51415, lng: -0.08349, url: "https://www.bxrlondon.com/gym/city", visit: true },
  { brand: "BXR", name: "Marylebone", address: "Chiltern Street, W1U 5QY (entrance 24 Paddington Street)", lat: 51.52068, lng: -0.15522, url: "https://www.bxrlondon.com/gym/marylebone" },

  // --- Equinox ---
  { brand: "Equinox", name: "Bishopsgate", address: "8 Clerk's Place, EC3A 8AQ", lat: 51.51526, lng: -0.08124, url: "https://www.equinox.com/clubs/london/bishopsgate", visit: true },
  { brand: "Equinox", name: "Kensington", address: "99 Kensington High Street, W8 5SA", lat: 51.50093, lng: -0.19125, url: "https://www.equinox.com/clubs/london/kensington" },
  { brand: "Equinox", name: "St James's (E by Equinox)", address: "12 St James's Street, SW1A 1ER", lat: 51.50633, lng: -0.13851, url: "https://www.equinox.com/clubs/london/stjames" },

  // --- Gymbox ---
  { brand: "Gymbox", name: "Bank", address: "71 Lombard Street, EC3V 9AY", lat: 51.51290, lng: -0.08771, url: "https://gymbox.com/gyms/bank/" },
  { brand: "Gymbox", name: "Elephant and Castle", address: "Unit 7, 38 New Kent Road, SE1 6TJ", lat: 51.49434, lng: -0.09670, url: "https://gymbox.com/gyms/elephant-and-castle/" },
  { brand: "Gymbox", name: "Farringdon", address: "12A Leather Lane, EC1N 7SS", lat: 51.51893, lng: -0.10882, url: "https://gymbox.com/gyms/farringdon/", visit: true },
  { brand: "Gymbox", name: "Finsbury Park", address: "Unit 4, City North, New Street, N4 3HN", lat: 51.56391, lng: -0.10791, url: "https://gymbox.com/gyms/finsbury-park/" },
  { brand: "Gymbox", name: "Holborn", address: "100 High Holborn, WC1V 6RD", lat: 51.51783, lng: -0.12005, url: "https://gymbox.com/gyms/holborn/" },
  { brand: "Gymbox", name: "Old Street", address: "201A Old Street, EC1V 9NP", lat: 51.52566, lng: -0.09049, url: "https://gymbox.com/gyms/old-street/", visit: true },
  { brand: "Gymbox", name: "Victoria", address: "10 Greencoat House, Francis Street, SW1P 1DH", lat: 51.49597, lng: -0.13678, url: "https://gymbox.com/gyms/victoria/" },
  { brand: "Gymbox", name: "Westfield London", address: "Westfield London, Ariel Way, W12 7GF", lat: 51.50746, lng: -0.22227, url: "https://gymbox.com/gyms/westfield-london/" },
  { brand: "Gymbox", name: "Westfield Stratford", address: "6A Chestnut Place, Westfield Stratford City, E20 1GL", lat: 51.54260, lng: -0.00804, url: "https://gymbox.com/gyms/westfield-stratford/" },

  // --- BLOK ---
  { brand: "BLOK", name: "Clapton", address: "The Tram Depot, 38-40 Upper Clapton Road, E5 8BQ", lat: 51.55992, lng: -0.05550, url: "https://www.bloklondon.com/studios/clapton" },
  { brand: "BLOK", name: "Shoreditch", address: "2 Principal Place, Hearn Street, EC2A 3BR", lat: 51.52218, lng: -0.07980, url: "https://www.bloklondon.com/studios/shoreditch", visit: true },

  // --- 1Rebel ---
  { brand: "1Rebel", name: "Angel", address: "403-405 St John Street, EC1V 4AB", lat: 51.53129, lng: -0.10687, url: "https://www.1rebel.com/en-gb/clubs/angel" },
  { brand: "1Rebel", name: "Bayswater", address: "34 Porchester Road, W2 6ES", lat: 51.51715, lng: -0.18771, url: "https://www.1rebel.com/en-gb/clubs/bayswater" },
  { brand: "1Rebel", name: "Broadgate", address: "31 Lower Circle, Broadgate, EC2M 2QS", lat: 51.51884, lng: -0.08314, url: "https://www.1rebel.com/en-gb/clubs/broadgate" },
  { brand: "1Rebel", name: "Chelsea", address: "107 King's Road, SW3 4PA", lat: 51.48864, lng: -0.16530, url: "https://www.1rebel.com/en-gb/clubs/chelsea" },
  { brand: "1Rebel", name: "Clapham", address: "95-97 Clapham High Street, SW4 7TB", lat: 51.46281, lng: -0.13449, url: "https://www.1rebel.com/en-gb/clubs/clapham" },
  { brand: "1Rebel", name: "Euston", address: "Lancing Street, NW1 1AD", lat: 51.52857, lng: -0.13173, url: "https://www.1rebel.com/en-gb/clubs/euston" },
  { brand: "1Rebel", name: "High Street Kensington", address: "45 Phillimore Walk, W8 7RZ", lat: 51.49952, lng: -0.19848, url: "https://www.1rebel.com/en-gb/clubs/high-street-kensington" },
  { brand: "1Rebel", name: "Holborn", address: "Unit 4, The Post Building, 1 Museum Street, WC1A 1JS", lat: 51.51688, lng: -0.12502, url: "https://www.1rebel.com/en-gb/clubs/holborn" },
  { brand: "1Rebel", name: "Leadenhall", address: "52 Lime Street, EC3M 7AF", lat: 51.51339, lng: -0.08152, url: "https://www.1rebel.com/en-gb/clubs/leadenhall" },
  { brand: "1Rebel", name: "Oxford Circus", address: "9 Holles Street, W1G 0DB", lat: 51.51588, lng: -0.14444, url: "https://www.1rebel.com/en-gb/clubs/oxford-circus" },
  { brand: "1Rebel", name: "South Bank", address: "7 Upper Ground, SE1 9PE", lat: 51.50835, lng: -0.10505, url: "https://www.1rebel.com/en-gb/clubs/south-bank" },
  { brand: "1Rebel", name: "St Johns Wood", address: "51 St John's Wood High Street, NW8 7NJ", lat: 51.53317, lng: -0.17065, url: "https://www.1rebel.com/en-gb/clubs/st-johns-wood" },
  { brand: "1Rebel", name: "Victoria", address: "5 Allington Street, SW1E 5BX", lat: 51.49721, lng: -0.14294, url: "https://www.1rebel.com/en-gb/clubs/victoria" },

  // --- Barry's ---
  { brand: "Barry's", name: "Canary Wharf", address: "Level Minus 2, 1 Crossrail Place, Canary Wharf, E14 5AR", lat: 51.50613, lng: -0.01782, url: "https://www.barrys.com/studio/london-canary-wharf" },
  { brand: "Barry's", name: "London Central", address: "163 Euston Road, NW1 2BH", lat: 51.52709, lng: -0.13084, url: "https://www.barrys.com/studio/london-central" },
  { brand: "Barry's", name: "London East", address: "2 Worship Street, EC2A 2AH", lat: 51.52201, lng: -0.08528, url: "https://www.barrys.com/studio/london-east" },
  { brand: "Barry's", name: "London SW1", address: "16 Eccleston Yards, Eccleston Place, SW1W 9AZ", lat: 51.49367, lng: -0.14852, url: "https://www.barrys.com/studio/barrys-bootcamp-sw1" },
  { brand: "Barry's", name: "London West", address: "9A Queensway, W2 4QJ", lat: 51.51094, lng: -0.18738, url: "https://www.barrys.com/studio/london-west" },
  { brand: "Barry's", name: "Soho", address: "59 Kingly Street, Soho, W1B 5QL", lat: 51.51269, lng: -0.13967, url: "https://www.barrys.com/studio/london-soho" },
  { brand: "Barry's", name: "St Paul's", address: "33 Gutter Lane, EC2V 8AS", lat: 51.51522, lng: -0.09563, url: "https://www.barrys.com/studio/london-st-pauls" },

  // --- Harbour Club ---
  { brand: "Harbour Club", name: "Chelsea", address: "Watermeadow Lane, SW6 2RW", lat: 51.46949, lng: -0.18453, url: "https://www.harbourclub.com/clubs/chelsea/" },
  { brand: "Harbour Club", name: "Kensington (now David Lloyd)", address: "Point West, 116 Cromwell Road, SW7 4XR", lat: 51.49554, lng: -0.18764, url: "https://www.davidlloyd.co.uk/clubs/kensington/" },
  { brand: "Harbour Club", name: "Notting Hill (now David Lloyd)", address: "1 Alfred Road, W2 5EU", lat: 51.52120, lng: -0.19631, url: "https://www.davidlloyd.co.uk/clubs/notting-hill/" },

  // --- KX ---
  { brand: "KX", name: "Chelsea", address: "151 Draycott Avenue, SW3 3AL", lat: 51.49299, lng: -0.16634, url: "https://www.kxlife.co.uk/" },

  // --- Muscleworks ---
  { brand: "Muscleworks", name: "Bethnal Green", address: "114 Vallance Road, E1 5BL", lat: 51.52238, lng: -0.06353, url: "https://muscleworksgym.co.uk/bethnal-green/" },
  { brand: "Muscleworks", name: "Southwark", address: "110 Southwark Street, SE1 0TA", lat: 51.50620, lng: -0.09994, url: "https://muscleworksgym.co.uk/southwark/" },
  { brand: "Muscleworks", name: "Stoke Newington", address: "1-3 Tyssen Road, N16 7NA", lat: 51.55919, lng: -0.07338, url: "https://muscleworksgym.co.uk/stoke-newington/" },

  // --- Virgin Active ---
  { brand: "Virgin Active", name: "Aldersgate", address: "200 Aldersgate Street, EC1A 4HD", lat: 51.51747, lng: -0.09751, url: "https://www.virginactive.co.uk/clubs/aldersgate" },
  { brand: "Virgin Active", name: "Bank", address: "5 Old Broad Street, EC2N 1DW", lat: 51.51476, lng: -0.08540, url: "https://www.virginactive.co.uk/clubs/bank" },
  { brand: "Virgin Active", name: "Canary Riverside", address: "West Ferry Circus, Canary Wharf, E14 8RR", lat: 51.50609, lng: -0.02804, url: "https://www.virginactive.co.uk/clubs/canary-riverside" },
  { brand: "Virgin Active", name: "Cannon Street", address: "The Walbrook Building, 97 Cannon Street, EC4N 5AE", lat: 51.51177, lng: -0.09042, url: "https://www.virginactive.co.uk/clubs/cannon-street" },
  { brand: "Virgin Active", name: "Clapham", address: "4-20 North Street, SW4 0HG", lat: 51.46620, lng: -0.14175, url: "https://www.virginactive.co.uk/clubs/clapham" },
  { brand: "Virgin Active", name: "Fulham Pools", address: "Normand Park, Lillie Road, SW6 7ST", lat: 51.48450, lng: -0.20875, url: "https://www.virginactive.co.uk/clubs/fulham-pools" },
  { brand: "Virgin Active", name: "Islington Angel", address: "333 Goswell Road, Islington, EC1V 7DG", lat: 51.53137, lng: -0.10523, url: "https://www.virginactive.co.uk/clubs/islington-angel" },
  { brand: "Virgin Active", name: "Kensington", address: "3rd Floor, 17A Old Court Place, W8 4PL", lat: 51.50280, lng: -0.19038, url: "https://www.virginactive.co.uk/clubs/kensington" },
  { brand: "Virgin Active", name: "Mayfair", address: "Hereford House, 64 North Row, W1K 7DA", lat: 51.51316, lng: -0.15635, url: "https://www.virginactive.co.uk/clubs/mayfair" },
  { brand: "Virgin Active", name: "Moorgate", address: "33 Bunhill Row, EC1Y 8LP", lat: 51.52303, lng: -0.08968, url: "https://www.virginactive.co.uk/clubs/moorgate" },
  { brand: "Virgin Active", name: "Notting Hill", address: "119-131 Lancaster Road, W11 1QT", lat: 51.51621, lng: -0.21122, url: "https://www.virginactive.co.uk/clubs/notting-hill" },
  { brand: "Virgin Active", name: "Strand", address: "Shell-Mex House, 80 The Strand, WC2R 0DT", lat: 51.50987, lng: -0.12172, url: "https://www.virginactive.co.uk/clubs/strand" },
  { brand: "Virgin Active", name: "Wandsworth Smugglers Way", address: "Wandsworth Riverside, West Smugglers Way, SW18 1DG", lat: 51.46338, lng: -0.18890, url: "https://www.virginactive.co.uk/clubs/wandsworth-smugglers-way" },

  // --- Fitness First ---
  { brand: "Fitness First", name: "Baker Street", address: "55 Baker Street, Marylebone, W1U 8EW", lat: 51.51890, lng: -0.15634, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-baker-street" },
  { brand: "Fitness First", name: "Bishopsgate", address: "47 Bishopsgate, EC2N 4AJ", lat: 51.51503, lng: -0.08263, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-bishopsgate" },
  { brand: "Fitness First", name: "Brixton", address: "Blue Star House, 234-244 Stockwell Road, SW9 9SP", lat: 51.46471, lng: -0.11508, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-brixton" },
  { brand: "Fitness First", name: "Clapham Junction Station", address: "34 St John's Hill, SW11 1SA", lat: 51.46368, lng: -0.16892, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-clapham-junction" },
  { brand: "Fitness First", name: "Fenchurch Street", address: "106 Fenchurch Street, EC3M 5JE", lat: 51.51263, lng: -0.07905, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-fenchurch-street" },
  { brand: "Fitness First", name: "Hammersmith", address: "26-28 Hammersmith Grove, W6 7HA", lat: 51.49585, lng: -0.22637, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-hammersmith" },
  { brand: "Fitness First", name: "Highbury", address: "Unit A East Stand, Avenell Road, N5 1FE", lat: 51.55782, lng: -0.10210, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-highbury" },
  { brand: "Fitness First", name: "Liverpool Street", address: "Platform 17-18, Liverpool Street Station, EC2M 7PY", lat: 51.51807, lng: -0.08200, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-liverpool-street" },
  { brand: "Fitness First", name: "London Bridge Cottons", address: "Cottons Building, Tooley Street, SE1 2QN", lat: 51.50541, lng: -0.08448, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-bridge-cottons" },
  { brand: "Fitness First", name: "Marylebone", address: "Cavendish Mews North, off Hallam Street, W1W 6LA", lat: 51.52030, lng: -0.14427, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-marylebone" },
  { brand: "Fitness First", name: "Oxford Circus", address: "15 Great Marlborough Street, W1F 7HR", lat: 51.51465, lng: -0.13915, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-oxford-circus" },
  { brand: "Fitness First", name: "Queen Victoria Street", address: "95 Queen Victoria Street, EC4V 4HN", lat: 51.51172, lng: -0.09671, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-queen-victoria-street" },
  { brand: "Fitness First", name: "Queen's Park", address: "105-109 Salusbury Road, Kilburn, NW6 6RG", lat: 51.53771, lng: -0.20657, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-queens-park" },
  { brand: "Fitness First", name: "The Strand (Covent Garden)", address: "6 Bedford Street, Covent Garden, WC2E 9HD", lat: 51.50974, lng: -0.12373, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-the-strand" },
  { brand: "Fitness First", name: "Thomas More Square (Wapping)", address: "15 Thomas More Street, E1W 1YW", lat: 51.50749, lng: -0.06720, url: "https://www.fitnessfirst.co.uk/find-a-gym/london-thomas-more-square-wapping" },

  // --- Nuffield Health ---
  { brand: "Nuffield Health", name: "Baltimore Wharf", address: "14 Baltimore Wharf, E14 9FT", lat: 51.49724, lng: -0.01575, url: "https://www.nuffieldhealth.com/gyms/baltimore-wharf" },
  { brand: "Nuffield Health", name: "Barbican", address: "97 Aldersgate Street, Barbican, EC1A 4JP", lat: 51.52027, lng: -0.09713, url: "https://www.nuffieldhealth.com/gyms/barbican" },
  { brand: "Nuffield Health", name: "Battersea", address: "Sheepcote Lane (off Latchmere Road), Battersea, SW11 5BW", lat: 51.47081, lng: -0.16331, url: "https://www.nuffieldhealth.com/gyms/battersea" },
  { brand: "Nuffield Health", name: "Bloomsbury", address: "Goodenough College, Mecklenburgh Place, WC1N 2AY", lat: 51.52418, lng: -0.11832, url: "https://www.nuffieldhealth.com/gyms/bloomsbury" },
  { brand: "Nuffield Health", name: "City", address: "4 Cousin Lane, EC4R 3XJ", lat: 51.50995, lng: -0.09137, url: "https://www.nuffieldhealth.com/gyms/city" },
  { brand: "Nuffield Health", name: "Covent Garden", address: "9 Endell Street, WC2H 9SA", lat: 51.51389, lng: -0.12390, url: "https://www.nuffieldhealth.com/gyms/covent-garden" },
  { brand: "Nuffield Health", name: "Fulham", address: "Bishop's Park, Stevenage Road, Fulham, SW6 6PF", lat: 51.47706, lng: -0.22220, url: "https://www.nuffieldhealth.com/gyms/fulham" },
  { brand: "Nuffield Health", name: "Islington", address: "27 Essex Road, Islington, N1 2SD", lat: 51.53712, lng: -0.10184, url: "https://www.nuffieldhealth.com/gyms/islington" },
  { brand: "Nuffield Health", name: "Moorgate", address: "1 Ropemaker Street, EC2Y 9AW", lat: 51.51935, lng: -0.08963, url: "https://www.nuffieldhealth.com/gyms/moorgate" },
  { brand: "Nuffield Health", name: "Paddington", address: "2 Sheldon Square, Paddington Central, W2 6EZ", lat: 51.51913, lng: -0.17973, url: "https://www.nuffieldhealth.com/gyms/paddington" },
  { brand: "Nuffield Health", name: "Shoreditch", address: "1-6 Bateman's Row, EC2A 3HH", lat: 51.52553, lng: -0.07944, url: "https://www.nuffieldhealth.com/gyms/shoreditch" },
  { brand: "Nuffield Health", name: "Wandsworth Southside", address: "Southside Shopping Centre, Buckhold Road, SW18 4TQ", lat: 51.45644, lng: -0.19430, url: "https://www.nuffieldhealth.com/gyms/wandsworth-southside" },

  // --- Better ---
  { brand: "Better", name: "Archway Leisure Centre", address: "Macdonald Road, Islington, N19 5DD", lat: 51.56578, lng: -0.13572, url: "https://www.better.org.uk/leisure-centre/london/islington/archway" },
  { brand: "Better", name: "Better Gym Hackney", address: "Christopher Addison House, 72 Wilton Way, E8 1BJ", lat: 51.54554, lng: -0.05737, url: "https://www.better.org.uk/leisure-centre/london/hackney/better-gym-hackney" },
  { brand: "Better", name: "Britannia Leisure Centre", address: "Pitfield Street, Hackney, N1 5FT", lat: 51.53428, lng: -0.08340, url: "https://www.better.org.uk/leisure-centre/london/hackney/britannia-leisure-centre" },
  { brand: "Better", name: "Cally Pool & Gym", address: "229 Caledonian Road, Islington, N1 0NH", lat: 51.53837, lng: -0.11681, url: "https://www.better.org.uk/leisure-centre/london/islington/cally" },
  { brand: "Better", name: "Chelsea Sports Centre", address: "Chelsea Manor Street, SW3 5PL", lat: 51.48739, lng: -0.16783, url: "https://www.better.org.uk/leisure-centre/london/kensington-and-chelsea/chelsea-sports-centre" },
  { brand: "Better", name: "Clissold Leisure Centre", address: "63 Clissold Road, Hackney, N16 9EX", lat: 51.55789, lng: -0.08458, url: "https://www.better.org.uk/leisure-centre/london/hackney/clissold-leisure-centre" },
  { brand: "Better", name: "Copper Box Arena", address: "Queen Elizabeth Olympic Park, Stratford, E20 3HB", lat: 51.54422, lng: -0.01992, url: "https://copperboxarena.org.uk/" },
  { brand: "Better", name: "Hammersmith Fitness and Squash Centre", address: "Chalk Hill Road, Hammersmith, W6 8DW", lat: 51.49205, lng: -0.22006, url: "https://www.better.org.uk/leisure-centre/london/hammersmith-and-fulham/hammersmith-fitness-and-squash-centre" },
  { brand: "Better", name: "Highbury Leisure Centre", address: "Highbury Crescent, Islington, N5 1RR", lat: 51.54900, lng: -0.10580, url: "https://www.better.org.uk/leisure-centre/london/islington/highbury" },
  { brand: "Better", name: "Ironmonger Row Baths", address: "1 Norman Street, Islington, EC1V 3AA", lat: 51.52658, lng: -0.09458, url: "https://www.better.org.uk/leisure-centre/london/islington/ironmonger-row-baths" },
  { brand: "Better", name: "Islington Tennis Centre and Gym", address: "Market Road, N7 9PL", lat: 51.54666, lng: -0.11893, url: "https://www.better.org.uk/leisure-centre/london/islington/islingtontc" },
  { brand: "Better", name: "Jubilee Hall Gym", address: "30 The Piazza, Covent Garden, WC2E 8BE", lat: 51.51163, lng: -0.12189, url: "https://www.better.org.uk/leisure-centre/london/covent-garden/jubilee-hall-gym" },
  { brand: "Better", name: "Kensington Leisure Centre", address: "Silchester Road, W10 6EX", lat: 51.51441, lng: -0.21530, url: "https://www.better.org.uk/leisure-centre/london/kensington-and-chelsea/kensington-leisure-centre" },
  { brand: "Better", name: "Kentish Town Sports Centre", address: "Grafton Road, Kentish Town, NW5 3DU", lat: 51.54746, lng: -0.14466, url: "https://www.better.org.uk/leisure-centre/london/camden/kentish-town-sports-centre" },
  { brand: "Better", name: "King's Cross Fitness", address: "1 Harrier Street, N1C 4EP", lat: 51.53770, lng: -0.12301, url: "https://www.better.org.uk/leisure-centre/london/camden/kings-cross-fitness" },
  { brand: "Better", name: "Lillie Road Fitness Centre", address: "Lillie Road, Fulham, SW6 7PD", lat: 51.48311, lng: -0.21612, url: "https://www.better.org.uk/leisure-centre/london/hammersmith-and-fulham/lillie-road" },
  { brand: "Better", name: "Oasis Sports Centre", address: "32 Endell Street, Covent Garden, WC2H 9AG", lat: 51.51566, lng: -0.12588, url: "https://www.better.org.uk/leisure-centre/london/camden/oasis-sports-centre" },
  { brand: "Better", name: "Pancras Square Leisure", address: "5 Pancras Square, N1C 4AG", lat: 51.53348, lng: -0.12504, url: "https://www.better.org.uk/leisure-centre/london/camden/pancras-square" },
  { brand: "Better", name: "Queensbridge Sports and Community Centre", address: "30 Holly Street, Hackney, E8 3XW", lat: 51.54257, lng: -0.07140, url: "https://www.better.org.uk/leisure-centre/london/hackney/queensbridge-sport-and-community-centre" },
  { brand: "Better", name: "Sobell Leisure Centre", address: "Hornsey Road, Islington, N7 7NY", lat: 51.55894, lng: -0.11157, url: "https://www.better.org.uk/leisure-centre/london/islington/sobell" },
  { brand: "Better", name: "Swiss Cottage Leisure Centre", address: "Adelaide Road, Camden, NW3 3NF", lat: 51.54235, lng: -0.17250, url: "https://www.better.org.uk/leisure-centre/london/camden/swiss-cottage-leisure-centre" },
  { brand: "Better", name: "Vauxhall Leisure Centre", address: "50 South Lambeth Road, Vauxhall, SW8 1DY", lat: 51.48367, lng: -0.12363, url: "https://www.better.org.uk/leisure-centre/london/lambeth/vauxhall-leisure-centre" },
  { brand: "Better", name: "Wavelengths Leisure Centre", address: "Giffin Street, Deptford, SE8 4RJ", lat: 51.47748, lng: -0.02357, url: "https://www.better.org.uk/leisure-centre/london/lewisham/wavelengths-leisure-centre" },

  // --- Anytime Fitness ---
  { brand: "Anytime Fitness", name: "Aldgate", address: "18 Alie Street, E1 8DE", lat: 51.51337, lng: -0.07187, url: "https://www.anytimefitness.com/en-gb/locations/london-aldgate-greater-london-uk-0482" },
  { brand: "Anytime Fitness", name: "Angel", address: "361-373 City Road, EC1V 1LR", lat: 51.53128, lng: -0.10250, url: "https://www.anytimefitness.com/en-gb/locations/london-angel-greater-london-uk-0160" },
  { brand: "Anytime Fitness", name: "Battersea", address: "58-70 York Road, SW11 3QD", lat: 51.46981, lng: -0.17600, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0567", soon: true },
  { brand: "Anytime Fitness", name: "Bermondsey", address: "Matter Bermondsey, 18-19 Crimscott Street, SE1 5TE", lat: 51.49526, lng: -0.07942, url: "https://www.anytimefitness.com/en-gb/locations/london-bermondsey-greater-london-uk-0494" },
  { brand: "Anytime Fitness", name: "Bow", address: "62 & 64 Vernon Road, Bow, E3 5GS", lat: 51.53248, lng: -0.02914, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0284" },
  { brand: "Anytime Fitness", name: "Brixton", address: "Ivor House, Acre Lane, SW2 5RS", lat: 51.46053, lng: -0.11754, url: "https://www.anytimefitness.com/en-gb/locations/london-brixton-greater-london-uk-0497" },
  { brand: "Anytime Fitness", name: "Chalk Farm", address: "47 Crogsland Road, NW1 8QJ", lat: 51.54428, lng: -0.15242, url: "https://www.anytimefitness.com/en-gb/locations/london-chalk-farm-greater-london-uk-0372" },
  { brand: "Anytime Fitness", name: "Chelsea", address: "222-224 Fulham Road, Chelsea, SW10 9NB", lat: 51.48543, lng: -0.18224, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0047" },
  { brand: "Anytime Fitness", name: "Clapham Junction", address: "276-288 Lavender Hill, SW11 1LJ", lat: 51.46402, lng: -0.16681, url: "https://www.anytimefitness.com/en-gb/locations/london-clapham-junction-greater-london-uk-0484" },
  { brand: "Anytime Fitness", name: "Dalston", address: "568 Kingsland Road, Dalston, E8 4AH", lat: 51.54521, lng: -0.07551, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0162" },
  { brand: "Anytime Fitness", name: "Euston", address: "210 Euston Road, NW1 2DA", lat: 51.52602, lng: -0.13540, url: "https://www.anytimefitness.com/en-gb/locations/london-euston-greater-london-uk-0193" },
  { brand: "Anytime Fitness", name: "Fulham (Hurlingham)", address: "Piper Building, Peterborough Road, SW6 3EF", lat: 51.46595, lng: -0.19315, url: "https://www.anytimefitness.com/en-gb/locations/london-fulham-hurlingham-south-east-uk-0427" },
  { brand: "Anytime Fitness", name: "Hackney Downs", address: "Unit 8, Maple Path, Lower Clapton, E5 8QJ", lat: 51.55566, lng: -0.06607, url: "https://www.anytimefitness.com/en-gb/locations/london-hackney-downs-greater-london-uk-0521" },
  { brand: "Anytime Fitness", name: "Isle of Dogs", address: "Stratus Point, 9 Harbour Way, E14 9YN", lat: 51.49943, lng: -0.02015, url: "https://www.anytimefitness.com/en-gb/locations/isle-of-dogs-greater-london-uk-0394" },
  { brand: "Anytime Fitness", name: "Kensington", address: "Royal Garden Hotel, 2-24 Kensington High Street, W8 4PT", lat: 51.50286, lng: -0.18829, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0029" },
  { brand: "Anytime Fitness", name: "Kilburn", address: "49-51 Kilburn High Road, NW6 5SB", lat: 51.53638, lng: -0.19179, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0379" },
  { brand: "Anytime Fitness", name: "Kings Cross", address: "Unit 2 The Nido Building, 200 Pentonville Road, N1 9JP", lat: 51.53137, lng: -0.11682, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0003" },
  { brand: "Anytime Fitness", name: "Ladbroke Grove", address: "332 Ladbroke Grove, W10 5AD", lat: 51.52523, lng: -0.21434, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0129" },
  { brand: "Anytime Fitness", name: "London Fields (Hackney)", address: "8 Pemberton Place, E8 3RF", lat: 51.54038, lng: -0.05482, url: "https://www.anytimefitness.com/en-gb/locations/london-fields-hackney-greater-london-uk-0433" },
  { brand: "Anytime Fitness", name: "Peckham", address: "190 Rye Lane, SE15 4NF", lat: 51.46714, lng: -0.06653, url: "https://www.anytimefitness.com/en-gb/locations/peckham-greater-london-uk-0392" },
  { brand: "Anytime Fitness", name: "St Paul's", address: "1 Priory Court, Pilgrim Street, EC4V 6DE", lat: 51.51356, lng: -0.10210, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0044" },
  { brand: "Anytime Fitness", name: "Stratford", address: "166-168 High Street, Stratford, E15 2FD", lat: 51.53565, lng: -0.00565, url: "https://www.anytimefitness.com/en-gb/locations/london-greater-london-uk-0020" },
  { brand: "Anytime Fitness", name: "Swiss Cottage", address: "5 Harben Parade, Finchley Road, NW3 6JP", lat: 51.54472, lng: -0.17656, url: "https://www.anytimefitness.com/en-gb/locations/london-swiss-cottage-greater-london-uk-0423" },
  { brand: "Anytime Fitness", name: "Wandsworth", address: "94 Putney Bridge Road, SW18 1TU", lat: 51.46012, lng: -0.19891, url: "https://www.anytimefitness.com/en-gb/locations/london-wandsworth-greater-london-uk-0464" },
  { brand: "Anytime Fitness", name: "Woodberry Down", address: "Unit 3, B2.0 Darter House, N4 2XE", lat: 51.57286, lng: -0.08898, url: "https://www.anytimefitness.com/en-gb/locations/london-woodberry-down-greater-london-uk-0522" },

  // --- PureGym ---
  { brand: "PureGym", name: "Aldgate", address: "The St. Botolph Building, 141 Houndsditch, EC3A 7DH", lat: 51.51455, lng: -0.07711, url: "https://www.puregym.com/gyms/london-aldgate/" },
  { brand: "PureGym", name: "Angel", address: "52 Upper Street, Angel, N1 0QH", lat: 51.53551, lng: -0.10532, url: "https://www.puregym.com/gyms/london-angel/" },
  { brand: "PureGym", name: "Bayswater", address: "Bayswater House, 6 Moscow Place, W2 4AP", lat: 51.51301, lng: -0.19028, url: "https://www.puregym.com/gyms/london-bayswater/" },
  { brand: "PureGym", name: "Bermondsey", address: "Biscuit Factory, 100 Drummond Road, SE16 4DG", lat: 51.49397, lng: -0.06191, url: "https://www.puregym.com/gyms/london-bermondsey/" },
  { brand: "PureGym", name: "Bethnal Green", address: "229 Cambridge Heath Road, E2 0EL", lat: 51.52676, lng: -0.05574, url: "https://www.puregym.com/gyms/london-bethnal-green/" },
  { brand: "PureGym", name: "Borough", address: "13-16 Empire Square West, Long Lane, SE1 4NA", lat: 51.50063, lng: -0.09079, url: "https://www.puregym.com/gyms/london-borough/" },
  { brand: "PureGym", name: "Bow Wharf", address: "221 Grove Road, Bow, E3 5SN", lat: 51.53207, lng: -0.04175, url: "https://www.puregym.com/gyms/london-bow-wharf/" },
  { brand: "PureGym", name: "Camberwell New Road", address: "The Heart, Unit 52, Camberwell New Road, SE5 0TF", lat: 51.47531, lng: -0.09555, url: "https://www.puregym.com/gyms/london-camberwell-new-road/" },
  { brand: "PureGym", name: "Camberwell Southampton Way", address: "Unit 2, 191-199 Southampton Way, SE5 7EJ", lat: 51.47802, lng: -0.08249, url: "https://www.puregym.com/gyms/london-camberwell-southampton-way/" },
  { brand: "PureGym", name: "Camden High Street", address: "Camden High Street, Camden, NW1 0LT", lat: 51.53674, lng: -0.14030, url: "https://www.puregym.com/gyms/london-camden-high-street/" },
  { brand: "PureGym", name: "Canary Wharf", address: "5 Hertsmere Road, West India Quay, E14 4AN", lat: 51.50789, lng: -0.02281, url: "https://www.puregym.com/gyms/london-canary-wharf/" },
  { brand: "PureGym", name: "Clapham", address: "95-97 Clapham High Street, SW4 7TB", lat: 51.46281, lng: -0.13449, url: "https://www.puregym.com/gyms/london-clapham/" },
  { brand: "PureGym", name: "Dalston", address: "Dalston Works, Martel Place, E8 2FR", lat: 51.54732, lng: -0.07027, url: "https://www.puregym.com/gyms/london-dalston/" },
  { brand: "PureGym", name: "East India Dock", address: "Import Building, Republic, E14 2BE", lat: 51.51018, lng: -0.00490, url: "https://www.puregym.com/gyms/london-east-india-dock/" },
  { brand: "PureGym", name: "Farringdon", address: "122 Clerkenwell Road, EC1R 5DL", lat: 51.52218, lng: -0.10896, url: "https://www.puregym.com/gyms/london-farringdon/" },
  { brand: "PureGym", name: "Finsbury Park", address: "189-219 Isledon Road, Islington, N7 7JR", lat: 51.56191, lng: -0.10789, url: "https://www.puregym.com/gyms/london-finsbury-park/" },
  { brand: "PureGym", name: "Fulham", address: "25 Jerdan Place, Fulham Place, SW6 1BE", lat: 51.48067, lng: -0.19800, url: "https://www.puregym.com/gyms/london-fulham/" },
  { brand: "PureGym", name: "Greenwich", address: "48-80 Greenwich High Road, Greenwich, SE10 8JL", lat: 51.47590, lng: -0.01920, url: "https://www.puregym.com/gyms/london-greenwich/" },
  { brand: "PureGym", name: "Greenwich Movement", address: "6 Lovibond Lane Off Norman Road, SE10 9FY", lat: 51.47722, lng: -0.01662, url: "https://www.puregym.com/gyms/greenwich-movement/" },
  { brand: "PureGym", name: "Hammersmith", address: "242 Shepherds Bush Road, W6 7NL", lat: 51.49562, lng: -0.22425, url: "https://www.puregym.com/gyms/london-hammersmith-palais/" },
  { brand: "PureGym", name: "Holborn", address: "Lacon House, 84 Theobalds Road, WC1X 8RW", lat: 51.52062, lng: -0.11806, url: "https://www.puregym.com/gyms/london-holborn/" },
  { brand: "PureGym", name: "Holloway Road", address: "Collingwood Business Centre, Mercers Road, N19 4PJ", lat: 51.55917, lng: -0.12453, url: "https://www.puregym.com/gyms/london-holloway-road/" },
  { brand: "PureGym", name: "Hoxton", address: "Unit 14 Rosewood Building, Cremer Street, E2 8GX", lat: 51.53017, lng: -0.07476, url: "https://www.puregym.com/gyms/london-hoxton/" },
  { brand: "PureGym", name: "Kentish Town", address: "217-223 Kentish Town Rd, NW5 2JU", lat: 51.54699, lng: -0.14185, url: "https://www.puregym.com/gyms/london-kentish-town/" },
  { brand: "PureGym", name: "Lambeth", address: "204-206 Wandsworth Road, Borough of Lambeth, SW8 2JU", lat: 51.47597, lng: -0.13122, url: "https://www.puregym.com/gyms/london-lambeth/" },
  { brand: "PureGym", name: "Limehouse", address: "Units B-D, Zenith Buildings, E14 7LB", lat: 51.51239, lng: -0.03690, url: "https://www.puregym.com/gyms/london-limehouse/" },
  { brand: "PureGym", name: "Marylebone", address: "7 Balcombe Street, NW1 6NA", lat: 51.52214, lng: -0.16120, url: "https://www.puregym.com/gyms/london-marylebone/" },
  { brand: "PureGym", name: "Monument", address: "68 King William Street, EC4N 7HR", lat: 51.51113, lng: -0.08685, url: "https://www.puregym.com/gyms/london-monument/" },
  { brand: "PureGym", name: "Moorgate", address: "48 London Wall, EC2M 5QB", lat: 51.51695, lng: -0.08809, url: "https://www.puregym.com/gyms/london-moorgate/" },
  { brand: "PureGym", name: "Oval", address: "Canterbury Court, Units 4, 4A, 5 And 5A, SW9 6DE", lat: 51.48040, lng: -0.11023, url: "https://www.puregym.com/gyms/london-oval/" },
  { brand: "PureGym", name: "Piccadilly", address: "Rex House, 4-12 Regent Street, SW1Y 4PE", lat: 51.50848, lng: -0.13316, url: "https://www.puregym.com/gyms/london-piccadilly/" },
  { brand: "PureGym", name: "Putney", address: "154-160 Upper Richmond Road, SW15 2SW", lat: 51.46020, lng: -0.21340, url: "https://www.puregym.com/gyms/london-putney/" },
  { brand: "PureGym", name: "Shoreditch", address: "The Fusion, 8 Bacon Street, E1 6LF", lat: 51.52412, lng: -0.07210, url: "https://www.puregym.com/gyms/london-shoreditch/" },
  { brand: "PureGym", name: "St Pauls", address: "20 Little Britain, St. Paul's, EC1A 7DH", lat: 51.51719, lng: -0.09847, url: "https://www.puregym.com/gyms/london-st-pauls/" },
  { brand: "PureGym", name: "Stratford", address: "68/7 The Mall, Stratford Centre, E15 1XQ", lat: 51.54195, lng: 0.00138, url: "https://www.puregym.com/gyms/london-stratford/" },
  { brand: "PureGym", name: "Swiss Cottage", address: "177 Finchley Road, South Hampstead, NW3 6LB", lat: 51.54587, lng: -0.17899, url: "https://www.puregym.com/gyms/london-swiss-cottage/" },
  { brand: "PureGym", name: "Tottenham Court Road", address: "Maple House, 145 Tottenham Court Road, W1T 7NE", lat: 51.52390, lng: -0.13706, url: "https://www.puregym.com/gyms/london-tottenham-court-road/" },
  { brand: "PureGym", name: "Tower Hill", address: "One America Square, Tower Hill, EC3N 2LB", lat: 51.51147, lng: -0.07669, url: "https://www.puregym.com/gyms/london-tower-hill/" },
  { brand: "PureGym", name: "Wandsworth", address: "52 Wandsworth High Street, Wandsworth, SW18 4LD", lat: 51.45690, lng: -0.19224, url: "https://www.puregym.com/gyms/london-wandsworth/" },
  { brand: "PureGym", name: "Waterloo", address: "11-15 Brad Street, SE1 8TG", lat: 51.50398, lng: -0.10862, url: "https://www.puregym.com/gyms/london-waterloo/" },
  { brand: "PureGym", name: "Whitechapel", address: "100 Whitechapel Road, Whitechapel, E1 1JG", lat: 51.51746, lng: -0.06479, url: "https://www.puregym.com/gyms/london-whitechapel/" },

  // --- The Gym Group ---
  { brand: "The Gym Group", name: "Angel", address: "265-269 Goswell Road, EC1V 7AH", lat: 51.52995, lng: -0.10304, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/angel/" },
  { brand: "The Gym Group", name: "Battersea", address: "Palmer Road, SW11 4FA", lat: 51.47824, lng: -0.14636, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/battersea/" },
  { brand: "The Gym Group", name: "Bloomsbury", address: "Coram Street, WC1N 1HB", lat: 51.52405, lng: -0.12665, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/bloomsbury/" },
  { brand: "The Gym Group", name: "Bromley by Bow", address: "24 Reed Avenue, E3 3ZA", lat: 51.52557, lng: -0.00932, url: "https://www.thegymgroup.com/find-a-gym/east-london-gyms/bromley-by-bow/" },
  { brand: "The Gym Group", name: "Caledonian Road", address: "7 Sterling Way, N7 9HJ", lat: 51.54637, lng: -0.11906, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/london-caledonian-road/" },
  { brand: "The Gym Group", name: "Camberwell", address: "60A Denmark Hill, SE5 8RZ", lat: 51.47320, lng: -0.09340, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/camberwell/" },
  { brand: "The Gym Group", name: "Canning Town", address: "Hallsville Quarter Minnie Baldock Street, E16 1ED", lat: 51.51490, lng: 0.00907, url: "https://www.thegymgroup.com/find-a-gym/east-london-gyms/london-canning-town/" },
  { brand: "The Gym Group", name: "Charing Cross", address: "17-21 Northumberland Avenue, WC2N 5EA", lat: 51.50727, lng: -0.12477, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/charing-cross/" },
  { brand: "The Gym Group", name: "Docklands", address: "The Forge Westferry Road, E14 3AE", lat: 51.48867, lng: -0.01873, url: "https://www.thegymgroup.com/find-a-gym/east-london-gyms/docklands/", soon: true },
  { brand: "The Gym Group", name: "Elephant and Castle", address: "3-9 Sayer Street, SE17 1FY", lat: 51.49248, lng: -0.09718, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/elephant-and-castle/" },
  { brand: "The Gym Group", name: "Euston Road", address: "1 Triton Square Regents Place, NW1 3AN", lat: 51.52489, lng: -0.14006, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/euston-road/" },
  { brand: "The Gym Group", name: "Fulham", address: "254-258 North End Road, Fulham, SW6 1NJ", lat: 51.48415, lng: -0.20186, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/london-fulham/" },
  { brand: "The Gym Group", name: "Greenwich", address: "2 Mariners Parade Creek Road, Greenwich, SE10 9SW", lat: 51.48133, lng: -0.01081, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/london-greenwich/" },
  { brand: "The Gym Group", name: "Hackney", address: "282 Richmond Road, E8 3BE", lat: 51.54332, lng: -0.05624, url: "https://www.thegymgroup.com/find-a-gym/east-london-gyms/hackney/" },
  { brand: "The Gym Group", name: "Loughborough Junction", address: "Higgs Yard Herne Hill Road, SE24 0AU", lat: 51.46555, lng: -0.10046, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/loughborough-junction/" },
  { brand: "The Gym Group", name: "Manor House", address: "Woodberry Down, Manor House, N4 2TG", lat: 51.57071, lng: -0.09462, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/manor-house/" },
  { brand: "The Gym Group", name: "Monument", address: "Northern and Shell Building 10 Lower Thames Street, EC3R 6EN", lat: 51.50914, lng: -0.08478, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/london-monument/" },
  { brand: "The Gym Group", name: "Old Kent Road", address: "1B Southernwood Retail Park, SE1 5JJ", lat: 51.48862, lng: -0.07450, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/old-kent-road/" },
  { brand: "The Gym Group", name: "Old Street", address: "250 Old Street, EC1V 9DD", lat: 51.52589, lng: -0.08516, url: "https://www.thegymgroup.com/find-a-gym/east-london-gyms/old-street/", soon: true },
  { brand: "The Gym Group", name: "Oxford Street", address: "120 Oxford Street Entrance on Wells Street, W1D 1LT", lat: 51.51604, lng: -0.13640, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/london-oxford-street/" },
  { brand: "The Gym Group", name: "Paddington", address: "The Gym Group Paddington 33 North Wharf Road Merchant Square, W2 1LA", lat: 51.51850, lng: -0.17707, url: "https://www.thegymgroup.com/find-a-gym/west-london-gyms/london-paddington/" },
  { brand: "The Gym Group", name: "Peckham Rye", address: "87 - 95 Rye Lane, Peckham, SE15 5EX", lat: 51.47134, lng: -0.06920, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/peckham-rye/" },
  { brand: "The Gym Group", name: "Putney", address: "45 Putney High Street, SW15 1SF", lat: 51.46447, lng: -0.21552, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/putney/", soon: true },
  { brand: "The Gym Group", name: "Shepherd's Bush", address: "W12 Shopping Unit F, Shepherd's Bush Green, W12 8PP", lat: 51.50386, lng: -0.21881, url: "https://www.thegymgroup.com/find-a-gym/west-london-gyms/shepherds-bush/" },
  { brand: "The Gym Group", name: "Stepney Green", address: "83-89 Mile End Road, Tower Hamlets, E1 4UJ", lat: 51.52117, lng: -0.05039, url: "https://www.thegymgroup.com/find-a-gym/east-london-gyms/london-stepney-green/" },
  { brand: "The Gym Group", name: "Stockwell", address: "15 Lett Road, Stockwell, SW9 0HP", lat: 51.47619, lng: -0.11786, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/stockwell/" },
  { brand: "The Gym Group", name: "Swiss Cottage", address: "115 - 121 Finchley Road Swiss Cottage, NW3 6HY", lat: 51.54304, lng: -0.17544, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/swiss-cottage/" },
  { brand: "The Gym Group", name: "Vauxhall", address: "6a St George Wharf, Vauxhall, SW8 2LE", lat: 51.48566, lng: -0.12610, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/vauxhall/" },
  { brand: "The Gym Group", name: "Walworth Road", address: "332-334 Walworth Road Newington, SE17 2NA", lat: 51.48606, lng: -0.09475, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/walworth-road/" },
  { brand: "The Gym Group", name: "Waterloo", address: "Barons Place 195-203 Waterloo Road, Waterloo, SE1 8UX", lat: 51.50072, lng: -0.10777, url: "https://www.thegymgroup.com/find-a-gym/south-london-gyms/waterloo/" },
  { brand: "The Gym Group", name: "West Hampstead Station", address: "Haywood House Blackburn Road, NW6 1RZ", lat: 51.54764, lng: -0.18983, url: "https://www.thegymgroup.com/find-a-gym/north-london-gyms/west-hampstead-station/", soon: true },
  { brand: "The Gym Group", name: "White City", address: "195 Wood Lane Unit 8 Westworks, W12 7FQ", lat: 51.51414, lng: -0.22710, url: "https://www.thegymgroup.com/find-a-gym/west-london-gyms/white-city/" },
];
