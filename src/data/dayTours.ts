import { FAQItem } from '../types';

export interface DayTourScheduleItem {
  time: string;
  activity: string;
  description: string;
}

export interface DayTourPackage {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  duration: string;
  startPoint: string;
  endPoint: string;
  heroImage: string;
  tagline: string;
  overview: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  highlights: string[];
  schedule: DayTourScheduleItem[];
  included: string[];
  excluded: string[];
  suitableFor: string;
  optionalAddons: string[];
  faqs: FAQItem[];
  relatedDestinations: string[];
  relatedTours: string[];
}

export const DAY_TOURS: DayTourPackage[] = [
  {
    id: "day-tour-sigiriya-dambulla",
    slug: "sigiriya-day-tour",
    title: "Sigiriya Rock Fortress & Dambulla Caves Private Day Tour",
    metaTitle: "Sigiriya Day Tour & Dambulla Caves | Private Day Trip | KS Tours",
    metaDescription: "Private full-day tour to UNESCO Sigiriya Lion Rock and Dambulla Golden Cave Temple from Colombo, Negombo, or Kandy. Chauffeur guide, A/C car, and flexible stops.",
    duration: "Full Day (approx. 10–12 hours)",
    startPoint: "Colombo, Negombo, or Kandy (Hotel pickup)",
    endPoint: "Return to your hotel",
    heroImage: "/images/SDayTour.jpg",
    tagline: "Climb the 5th-century sky fortress of King Kashyapa and marvel at 2,000-year-old painted cave sanctuaries.",
    overview: "This is Sri Lanka's most iconic archaeological day excursion. Ascend the world-renowned Sigiriya Lion Rock early in the day to beat the heat, admire the ancient frescoes, and explore the symmetrical royal water gardens. In the afternoon, visit the UNESCO Dambulla Cave Temple complex containing over 150 Buddha statues.",
    primaryKeyword: "Sigiriya day tour",
    secondaryKeywords: ["Sigiriya day trip", "Sigiriya private day tour", "Sigiriya tour from Colombo", "Sigiriya Rock day trip", "Sigiriya and Dambulla day tour"],
    highlights: [
      "Early morning climb of UNESCO World Heritage Sigiriya Rock Fortress",
      "Marvel at 5th-century Sigiriya maidens frescoes and the colossal Lion's Paws",
      "Explore the ancient royal pleasure water and boulder gardens",
      "Visit the five sacred rock cave sanctuaries of Dambulla Golden Temple",
      "Stop at a traditional rural spice garden in Matale (optional)"
    ],
    schedule: [
      { time: "06:00 AM", activity: "Hotel Pickup", description: "Your private chauffeur guide picks you up in an air-conditioned vehicle from your hotel in Colombo, Negombo, or Kandy." },
      { time: "09:30 AM", activity: "Sigiriya Lion Rock Climb", description: "Begin the ascent before peak midday heat. Explore royal ruins, frescoes, mirror wall, and summit panoramas (approx. 2.5–3 hours)." },
      { time: "01:00 PM", activity: "Traditional Sri Lankan Lunch", description: "Enjoy authentic rice and curry cooked in clay pots at a reputable local village restaurant." },
      { time: "02:30 PM", activity: "Dambulla Cave Temple Tour", description: "Ascend the gentle slope to explore five ancient cave temples dating back to King Valagamba (1st century BC)." },
      { time: "04:30 PM", activity: "Scenic Return Drive", description: "Relax in your comfortable air-conditioned vehicle with stops for fresh king coconut water as desired." },
      { time: "07:30 PM", activity: "Hotel Drop-off", description: "Arrive back safely at your accommodation." }
    ],
    included: [
      "Private air-conditioned vehicle with dedicated English-speaking driver guide",
      "All vehicle fuel, expressway tolls, highway charges, and parking fees",
      "Hotel pickup and drop-off in Colombo, Negombo, or Kandy",
      "Complimentary bottled drinking water during transit",
      "Full flexibility to pause for photos, meals, and rest along the route"
    ],
    excluded: [
      "Sigiriya Rock Fortress entrance ticket ($36 USD per person)",
      "Dambulla Cave Temple entrance ticket ($10 USD approx.)",
      "Lunch, snacks, and personal beverages",
      "Discretionary driver tipping"
    ],
    suitableFor: "Couples, active families, photographers, and history enthusiasts.",
    optionalAddons: [
      "Substitute or add Pidurangala Rock sunrise hike",
      "Afternoon Minneriya wild elephant safari add-on",
      "Traditional Habarana village bullock cart and catamaran ride"
    ],
    faqs: [
      { question: "Is the drive from Colombo or Negombo too long for a single day?", answer: "The drive takes approximately 3.5 to 4 hours each way. Because the route travels on smooth main roads, thousands of international visitors do this day trip comfortably with an early morning start." },
      { question: "How physically demanding is the Sigiriya climb?", answer: "There are approximately 1,200 steps with secure modern handrails. A moderate level of fitness is recommended. Travelers can also enjoy the flat royal gardens at the base if they choose not to ascend the summit." }
    ],
    relatedDestinations: ["sigiriya", "dambulla", "kandy"],
    relatedTours: ["7-day-sri-lanka-tour", "10-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-kandy-cultural",
    slug: "kandy-day-tour",
    title: "Kandy Cultural Capital & Royal Botanical Gardens Day Tour",
    metaTitle: "Kandy Day Tour | Temple of Tooth & Botanical Gardens | KS Tours",
    metaDescription: "Full day private tour to Kandy from Colombo or Negombo. Visit Temple of the Sacred Tooth Relic, Royal Botanical Gardens Peradeniya, tea factory, and spice gardens.",
    duration: "Full Day (approx. 9–11 hours)",
    startPoint: "Colombo, Negombo, or BIA Airport",
    endPoint: "Return to your hotel",
    heroImage: "/images/kandy sri lanka.jpg",
    tagline: "Immerse yourself in the sacred spiritual heritage, colonial tea hills, and botanical wonders of the hill capital.",
    overview: "Ascend from the coastal lowlands into the mist-draped hills surrounding Kandy Lake. This private day tour visits the UNESCO-listed Sri Dalada Maligawa (Temple of the Sacred Tooth Relic), the world-renowned Peradeniya Botanical Gardens with its giant Java fig trees, and an authentic Ceylon tea processing factory.",
    primaryKeyword: "Kandy day tour",
    secondaryKeywords: ["Kandy day trip", "Kandy private day tour", "Kandy tour from Colombo", "Temple of the Tooth day tour", "Kandy cultural day tour"],
    highlights: [
      "Pay homage at the sacred Sri Dalada Maligawa (Temple of the Sacred Tooth Relic)",
      "Wander 147 acres of giant palms, bamboo, and orchids at Peradeniya Botanical Gardens",
      "Scenic panoramic drive overlooking tranquil Kandy Lake and city hills",
      "Visit an authentic working Ceylon tea factory and sample single-origin tea",
      "Explore natural herbal medicine and spice cultivation in Matale"
    ],
    schedule: [
      { time: "06:30 AM", activity: "Hotel Departure", description: "Pickup from your hotel in Colombo or Negombo." },
      { time: "09:30 AM", activity: "Peradeniya Royal Botanical Gardens", description: "Explore the historic royal botanical sanctuary, home to over 4,000 plant species." },
      { time: "11:45 AM", activity: "Ceylon Tea Estate & Factory", description: "Learn orthodox tea harvesting and rolling methods followed by fresh tea tasting." },
      { time: "01:00 PM", activity: "Lunch Overlooking Kandy Lake", description: "Enjoy lunch at a scenic hillside restaurant." },
      { time: "02:15 PM", activity: "Temple of the Sacred Tooth Relic", description: "Tour the royal palace complex and inner golden casket sanctum housing the sacred relic." },
      { time: "04:30 PM", activity: "Scenic Return Drive", description: "Descend the Kadugannawa mountain pass toward the western coast." },
      { time: "07:00 PM", activity: "Hotel Drop-off", description: "Return to your Colombo or Negombo hotel." }
    ],
    included: [
      "Dedicated air-conditioned private vehicle and English-speaking chauffeur guide",
      "All vehicle fuel, highway tolls, and parking tickets",
      "Hotel pickup and drop-off",
      "Bottled water"
    ],
    excluded: [
      "Temple of the Tooth entrance ($15 USD approx.)",
      "Botanical Gardens entrance ($10 USD approx.)",
      "Lunch and personal expenses"
    ],
    suitableFor: "Families, spiritual seekers, botany enthusiasts, and cultural travelers.",
    optionalAddons: [
      "Pinnawala Elephant Sanctuary stopover en route",
      "Traditional Kandyan cultural dance and fire-walking performance"
    ],
    faqs: [
      { question: "What is the dress code for Kandy Temple?", answer: "Shoulders and knees must be fully covered. White or light-coloured modest clothing is traditional. Footwear must be removed at the temple entrance." }
    ],
    relatedDestinations: ["kandy", "nuwara-eliya"],
    relatedTours: ["7-day-sri-lanka-tour", "10-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-galle-fort",
    slug: "galle-day-tour",
    title: "Galle Dutch Fort, Turtle Sanctuary & Madu River Day Tour",
    metaTitle: "Galle Day Tour & Galle Fort Trip | South Coast Sri Lanka | KS Tours",
    metaDescription: "Experience Galle Dutch Fort, sea turtle conservation, and Madu River boat safari on a scenic south coast private day trip from Colombo or Negombo with KS Tours.",
    duration: "Full Day (approx. 8–10 hours)",
    startPoint: "Colombo, Negombo, or Bentota",
    endPoint: "Return to your hotel",
    heroImage: "/images/GDayTour.jpg",
    tagline: "Walk 17th-century ocean ramparts, cruise through mangrove islets, and protect endangered sea turtles.",
    overview: "Travel swiftly down the Southern Expressway to the UNESCO World Heritage Galle Dutch Fort. Stroll cobblestone streets lined with colonial architecture, visit the iconic lighthouse, and enjoy ocean vistas. En route, experience a tranquil mangrove boat safari on the Madu River and visit a local sea turtle hatchery.",
    primaryKeyword: "Galle day tour",
    secondaryKeywords: ["Galle Fort day tour", "Galle day trip", "Galle private tour", "Galle tour from Colombo", "south coast Sri Lanka day trip"],
    highlights: [
      "Guided walking tour along the ramparts and lighthouse of UNESCO Galle Dutch Fort",
      "Browse boutique cafes, Ceylon spice stores, and artisanal jewelry galleries",
      "Madu River boat safari through mangrove tunnels and cinnamon peeling islands",
      "Support sea turtle conservation and hold newborn baby turtles at a beach rescue centre",
      "Watch traditional stilt fishermen along the southern coastline"
    ],
    schedule: [
      { time: "07:30 AM", activity: "Hotel Departure", description: "Convenient morning pickup from your hotel via the Southern Expressway." },
      { time: "09:30 AM", activity: "Madu River Mangrove Boat Safari", description: "Cruise through 64 mangrove islands, see kraal fishing traps, and visit Cinnamon Island." },
      { time: "11:15 AM", activity: "Sea Turtle Rescue Centre", description: "Learn about conservation efforts protecting endangered sea turtle species and nests." },
      { time: "12:30 PM", activity: "Arrival at Galle Fort & Seafood Lunch", description: "Lunch in a restored Dutch colonial manor inside the historic fort." },
      { time: "02:00 PM", activity: "Galle Fort Ramparts & Street Walk", description: "Visit the lighthouse, Dutch Reformed Church, Clock Tower, and sunset ocean ramparts." },
      { time: "04:30 PM", activity: "Coastal Drive & Stilt Fishermen", description: "Pause along the rocky shore to observe historic traditional stilt fishing." },
      { time: "06:30 PM", activity: "Return to Hotel", description: "Relaxing drive back to Colombo or Negombo." }
    ],
    included: [
      "Private A/C vehicle with professional English-speaking chauffeur guide",
      "Expressway tolls, fuel, and parking fees",
      "Bottled water"
    ],
    excluded: [
      "Madu River private boat hire ticket (approx. $15–$20 USD per boat)",
      "Turtle hatchery entry fee ($5 USD approx.)",
      "Lunch and personal shopping"
    ],
    suitableFor: "Families, couples, photographers, and relaxed leisure travelers.",
    optionalAddons: [
      "Detour to Unawatuna Japanese Peace Pagoda",
      "Visit Handunugoda Virgin White Tea Estate in Ahangama"
    ],
    faqs: [
      { question: "Is Galle Fort pedestrian-friendly?", answer: "Yes! Galle Fort is one of the most walkable historic towns in Asia, with minimal vehicle traffic on inner alleys." }
    ],
    relatedDestinations: ["galle", "bentota", "mirissa"],
    relatedTours: ["10-day-sri-lanka-tour", "14-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-nuwara-eliya",
    slug: "nuwara-eliya-day-tour",
    title: "Nuwara Eliya Tea Country, Waterfalls & Little England Day Tour",
    metaTitle: "Nuwara Eliya Day Tour | Ceylon Tea Plantations & Waterfalls | KS Tours",
    metaDescription: "Scenic day trip to Nuwara Eliya from Kandy, Colombo, or Negombo. Visit Ramboda Falls, Mackwoods/Damro tea estates, Lake Gregory, and colonial Little England.",
    duration: "Full Day (approx. 9–11 hours)",
    startPoint: "Kandy, Colombo, or Negombo",
    endPoint: "Return to your hotel",
    heroImage: "/images/nuwaraeliya-destinantion.webp",
    tagline: "Climb through emerald tea terraces, thunderous waterfalls, and the cool colonial highlands of Ceylon.",
    overview: "Escape into the cool mist of Sri Lanka's high country. Ascend past cascading waterfalls into Nuwara Eliya (1,868m altitude), renowned for its Tudor architecture and sprawling Ceylon tea estates. Walk through fragrant tea fields, tour an operational tea processing plant, and stroll beside Lake Gregory.",
    primaryKeyword: "Nuwara Eliya day tour",
    secondaryKeywords: ["Nuwara Eliya day trip", "tea plantation day tour Sri Lanka", "Nuwara Eliya tour from Kandy", "Little England Sri Lanka tour"],
    highlights: [
      "Spectacular mountain scenic drive ascending past Ramboda Falls",
      "Tour an operational highland Ceylon tea factory and enjoy complimentary tea tasting",
      "Walk the flower gardens and historic paths of colonial Victoria Park",
      "Stroll the shores of Lake Gregory surrounded by pine hills",
      "Visit the iconic 1894 British red-brick Post Office in Nuwara Eliya town"
    ],
    schedule: [
      { time: "07:00 AM", activity: "Morning Departure", description: "Pickup from hotel and journey up into the central highlands." },
      { time: "09:30 AM", activity: "Ramboda Falls Viewpoint", description: "Stop at the roaring twin cascades of Ramboda Falls for photography and tea." },
      { time: "10:30 AM", activity: "Ceylon Tea Estate & Factory Guided Tour", description: "Observe tea pickers at work, witness the withering and rolling process, and taste pure Pekoe." },
      { time: "01:00 PM", activity: "Colonial High Tea / Lunch", description: "Enjoy lunch in a heritage colonial hotel or lakefront restaurant." },
      { time: "02:30 PM", activity: "Lake Gregory & Victoria Park", description: "Leisurely stroll around the lake and park." },
      { time: "04:00 PM", activity: "Scenic Mountain Descent", description: "Relax as your private driver navigates scenic highland passes." },
      { time: "06:30 PM", activity: "Hotel Drop-off", description: "Return to your hotel." }
    ],
    included: [
      "Private air-conditioned touring vehicle and experienced chauffeur guide",
      "All fuel, expressway tolls, and parking fees",
      "Complimentary factory tea tasting"
    ],
    excluded: [
      "Lake Gregory entrance ($2 USD approx.)",
      "Lunch and personal expenditures"
    ],
    suitableFor: "Couples, photographers, nature lovers, and tea enthusiasts.",
    optionalAddons: [
      "Strawberry farm tour and fresh strawberry milkshake tasting"
    ],
    faqs: [
      { question: "What should I wear for Nuwara Eliya?", answer: "Because Nuwara Eliya sits at high altitude, temperatures are cooler (around 15°C–20°C). Bring a light jacket or cardigan." }
    ],
    relatedDestinations: ["nuwara-eliya", "kandy", "ella"],
    relatedTours: ["7-day-sri-lanka-tour", "14-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-yala-safari",
    slug: "yala-safari-day-tour",
    title: "Yala National Park Afternoon Wildlife & Leopard Safari Day Tour",
    metaTitle: "Yala Safari Day Tour | Yala National Park Leopard Safari | KS Tours",
    metaDescription: "Private Yala National Park safari day trip from Ella, Mirissa, Galle, or Hambantota. Open 4x4 safari jeep, wildlife tracker, and high leopard density.",
    duration: "Full Day (approx. 7–9 hours)",
    startPoint: "Ella, Mirissa, Tangalle, or Galle",
    endPoint: "Return to your hotel",
    heroImage: "/images/safari1.jpg",
    tagline: "Track the elusive Sri Lankan leopard, wild elephants, and sloth bears across premier scrub wilderness.",
    overview: "Experience the adrenaline of an open-top 4x4 safari through Yala National Park. Famous for possessing one of the highest densities of leopards in the world, Yala also shelters wild Asian elephants, sloth bears, mugger crocodiles, and colorful storks across its coastal lagoons and rocky outcrops.",
    primaryKeyword: "Yala safari day tour",
    secondaryKeywords: ["Yala safari day trip", "Yala National Park tour", "Yala private safari", "Yala safari from Ella", "Yala safari from Mirissa"],
    highlights: [
      "4-hour afternoon game drive in a specialized 4x4 open safari jeep",
      "Track wild Sri Lankan leopards (Panthera pardus kotiya) across Block 1 tracks",
      "Observe wild elephant herds drinking at brackish coastal lagoons",
      "Spot sloth bears, spotted deer, marsh crocodiles, and wild water buffalos",
      "Accompanied by an experienced local driver-tracker who knows recent animal movements"
    ],
    schedule: [
      { time: "11:30 AM", activity: "Hotel Departure", description: "Pickup from your hotel in Ella, Mirissa, Tangalle, or Galle." },
      { time: "01:45 PM", activity: "Arrival at Tissamaharama / Yala Gate", description: "Meet your private open 4x4 safari jeep and national park guide." },
      { time: "02:15 PM", activity: "Safari Game Drive Commences", description: "Enter park gates as afternoon shadows lengthen and predators become active." },
      { time: "06:00 PM", activity: "Exit Park at Sunset", description: "Witness the sunset over the wilderness and transfer back to your private A/C road vehicle." },
      { time: "08:30 PM", activity: "Return to Hotel", description: "Arrival back at your accommodation." }
    ],
    included: [
      "Private air-conditioned transport to and from Yala gates",
      "Private 4x4 open safari jeep with driver-tracker",
      "All road tolls, fuel, and vehicle fees"
    ],
    excluded: [
      "National park entrance ticket and service fees (approx. $35–$40 USD per adult)",
      "Meals and refreshments"
    ],
    suitableFor: "Wildlife photographers, animal enthusiasts, couples, and adventurous families.",
    optionalAddons: [
      "Combine with morning visit to Bundala Ramsar Bird Sanctuary"
    ],
    faqs: [
      { question: "Why is the afternoon safari recommended?", answer: "Leopards and elephants become active late in the afternoon as temperatures drop, frequently coming to waterholes and rocky outcrops." }
    ],
    relatedDestinations: ["yala", "ella", "galle"],
    relatedTours: ["sri-lanka-safari-tours", "10-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-udawalawe-safari",
    slug: "udawalawe-safari-day-tour",
    title: "Udawalawe Elephant Safari & Transit Home Day Tour",
    metaTitle: "Udawalawe Safari Day Tour | Guaranteed Wild Elephants | KS Tours",
    metaDescription: "Guaranteed wild elephant sightings on a private Udawalawe National Park day safari with Elephant Transit Home calf feeding visit. Private transport and 4x4 jeep.",
    duration: "Full Day (approx. 7–9 hours)",
    startPoint: "Ella, Bentota, Mirissa, Galle, or Colombo",
    endPoint: "Return to your hotel",
    heroImage: "/images/safari2.jpg",
    tagline: "Encounter hundreds of free-roaming wild Asian elephants and observe baby elephant milk feeding.",
    overview: "Udawalawe is Sri Lanka's answer to the East African savanna. Surrounding a massive water reservoir, its open plains guarantee sightings of large wild elephant herds feeding, bathing, and interacting year-round. Also visit the Elephant Transit Home to watch orphaned baby calves receive their milk feeding.",
    primaryKeyword: "Udawalawe safari day tour",
    secondaryKeywords: ["Udawalawe safari day trip", "Udawalawe elephant tour", "Udawalawe tour from Ella", "Udawalawe private safari"],
    highlights: [
      "3-hour open 4x4 safari with guaranteed wild elephant herd encounters",
      "Visit the Elephant Transit Home during the public calf milk feeding session",
      "Wide open grasslands offering outstanding photography without dense bush obstructions",
      "Spot water monitors, wild boars, crocodiles, jackals, and crested serpent eagles"
    ],
    schedule: [
      { time: "08:30 AM", activity: "Hotel Departure", description: "Pickup from your hotel in southern Sri Lanka or hill country." },
      { time: "11:30 AM", activity: "Elephant Transit Home Feeding", description: "Watch rescued orphaned baby elephants rush out for their scheduled noon milk feeding." },
      { time: "12:45 PM", activity: "Lunch at Local Resthouse", description: "Enjoy fresh local curry." },
      { time: "02:00 PM", activity: "4x4 Safari Game Drive", description: "Board your private jeep for a deep traverse of Udawalawe's open grasslands." },
      { time: "05:30 PM", activity: "Safari Concludes & Return Drive", description: "Return comfortably to your private car." },
      { time: "07:30 PM", activity: "Hotel Drop-off", description: "Arrive back at your accommodation." }
    ],
    included: [
      "Private roundtrip air-conditioned road transport",
      "Private 4x4 open safari jeep and tracker inside the park",
      "Fuel, expressway tolls, and driver allowances"
    ],
    excluded: [
      "National park entrance ticket (approx. $30 USD per adult)",
      "Elephant Transit Home entry ($5 USD approx.)",
      "Meals and discretionary tipping"
    ],
    suitableFor: "Families with young children, seniors, and dedicated wildlife lovers.",
    optionalAddons: [
      "Buduruwagala 1,000-year-old rock Buddha carvings stopover"
    ],
    faqs: [
      { question: "Is Udawalawe better for kids than Yala?", answer: "Yes! Udawalawe has open savanna landscapes where elephants are spotted almost immediately, keeping children engaged without long waits in the jeep." }
    ],
    relatedDestinations: ["yala", "ella", "galle"],
    relatedTours: ["sri-lanka-safari-tours", "sri-lanka-family-tours"]
  },
  {
    id: "day-tour-colombo-city",
    slug: "colombo-city-day-tour",
    title: "Colombo City Heritage, Culture & Street Life Private Day Tour",
    metaTitle: "Colombo City Day Tour | Heritage, Temples & Markets | KS Tours",
    metaDescription: "Explore Sri Lanka's vibrant commercial capital on a private day tour with Kumar & Sons. Gangaramaya Temple, Red Mosque, Galle Face Green, and Pettah Bazaar.",
    duration: "Full Day (approx. 7–8 hours)",
    startPoint: "Colombo hotels, Negombo hotels, or CMB Airport",
    endPoint: "Return to your hotel",
    heroImage: "/images/colombo-destinantion.jpg",
    tagline: "Uncover British colonial architecture, multi-faith temples, bustling bazaars, and sunset over the Indian Ocean.",
    overview: "Experience the colorful contrasts of Colombo, where centuries of Portuguese, Dutch, and British colonial history blend with modern seaside promenades. Your private chauffeur guide takes you inside the sacred Gangaramaya Temple, past the crimson candy-striped Red Mosque, through the sensory maze of Pettah Market, and onto the oceanfront lawns of Galle Face Green.",
    primaryKeyword: "Colombo city day tour",
    secondaryKeywords: ["Colombo day trip", "Colombo city tour private driver", "Colombo sightseeing day tour", "Pettah market tour Colombo"],
    highlights: [
      "Visit the iconic lakeside Gangaramaya Buddhist Temple and its eclectic museum",
      "Marvel at the candy-striped architecture of Jami Ul-Alfar Mosque (Red Mosque)",
      "Drive through colonial Colombo Fort, the Old Parliament, and Clock Tower",
      "Walk the historic grounds of Independence Memorial Hall and Arcade",
      "Experience the bustling wholesale spice and textile alleys of Pettah Bazaar",
      "Sip fresh king coconut along the breezy Galle Face Green oceanfront promenade"
    ],
    schedule: [
      { time: "08:30 AM", activity: "Hotel Pickup", description: "Your private driver guide greets you at your Colombo or Negombo hotel." },
      { time: "09:15 AM", activity: "Gangaramaya Temple & Seema Malaka", description: "Explore the ornate temple complex and serene lake pavilion designed by Geoffrey Bawa." },
      { time: "11:00 AM", activity: "Independence Memorial & Cinnamon Gardens", description: "Visit the national monument set among leafy colonial avenues." },
      { time: "12:30 PM", activity: "Traditional Sri Lankan Lunch", description: "Dine at a respected local restaurant specializing in authentic Ceylon crab or hopper curries." },
      { time: "02:00 PM", activity: "Pettah Bazaar & Red Mosque", description: "Stroll vibrant merchant streets smelling of cinnamon, nutmeg, and roasted coffee." },
      { time: "03:45 PM", activity: "Colombo Fort & Old Dutch Hospital", description: "Admire preserved 17th-century colonial Dutch brick hospital buildings now housing chic boutiques." },
      { time: "05:00 PM", activity: "Galle Face Green Sunset Walk", description: "Watch locals fly kites and taste fresh isso vade (prawn fritters) as the sun sets over the sea." },
      { time: "06:00 PM", activity: "Hotel Drop-off", description: "Return comfortably to your accommodation." }
    ],
    included: [
      "Private air-conditioned car or passenger van with English-speaking chauffeur guide",
      "All vehicle fuel, highway parking fees, and road charges",
      "Hotel pickup and drop-off in Colombo or Negombo",
      "Bottled mineral water"
    ],
    excluded: [
      "Gangaramaya Temple entry fee (approx. $4 USD)",
      "Lunch, street snacks, and personal purchases"
    ],
    suitableFor: "Transit passengers, cruise ship visitors, culture enthusiasts, and photographers.",
    optionalAddons: [
      "National Museum of Colombo guided walkthrough",
      "Authentic Ceylon tea salon high tea experience"
    ],
    faqs: [
      { question: "Can this tour accommodate cruise passengers at Colombo Port?", answer: "Yes! We regularly provide private port pickup and drop-off scheduled precisely around cruise docking times." }
    ],
    relatedDestinations: ["colombo", "negombo", "galle"],
    relatedTours: ["7-day-sri-lanka-tour", "14-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-negombo-lagoon",
    slug: "negombo-day-tour",
    title: "Negombo Coastal Heritage, Dutch Canal & Lagoon Boat Day Tour",
    metaTitle: "Negombo Day Tour | Dutch Canals, Fish Market & Lagoon | KS Tours",
    metaDescription: "Discover Negombo's vibrant fishing culture, Dutch canals, catamarans, and lagoon boat tour with KS Tours, headquartered locally in Negombo for nearly 40 years.",
    duration: "Half to Full Day (approx. 5–7 hours)",
    startPoint: "Negombo, Waikkal, or Colombo hotels / Airport",
    endPoint: "Return to your hotel",
    heroImage: "/images/negombo lagoon.jpeg",
    tagline: "Explore the bustling Little Rome of Ceylon with the local family operator who knows every canal and coastal village.",
    overview: "Kumar & Sons Tours is proudly headquartered in Kochchikade/Negombo. This authentic day excursion showcases our coastal home: the historic 17th-century Dutch Hamilton Canal, traditional wooden oruwa catamarans with billowing sails, the sensory spectacle of the Lellama open-air fish auction, and a private boat ride through mangrove-fringed Negombo Lagoon.",
    primaryKeyword: "Negombo day tour",
    secondaryKeywords: ["Negombo day trip", "Negombo fish market tour", "Dutch canal boat tour Negombo", "Negombo lagoon tour"],
    highlights: [
      "Witness fishermen haul morning catches at the bustling Lellama Fish Market",
      "Boat ride along the historic Dutch Hamilton Canal through waterside hamlets",
      "Spot kingfishers, herons, and water monitors in the mangrove wetlands of Negombo Lagoon",
      "Admire the grand Renaissance-style ceiling paintings inside St. Mary's Church",
      "See traditional wooden outrigger catamarans (oruwas) anchored along golden sands"
    ],
    schedule: [
      { time: "07:30 AM", activity: "Lellama Open-Air Fish Market", description: "Arrive as colorful wooden boats dock with overnight catches of tuna, shark, and crabs." },
      { time: "09:00 AM", activity: "St. Mary's Church & Dutch Fort Ruins", description: "Visit the grand Catholic cathedral that earned Negombo its title as 'Little Rome'." },
      { time: "10:30 AM", activity: "Negombo Lagoon & Canal Boat Safari", description: "Board a private boat along the historic waterway lined with coconut groves." },
      { time: "01:00 PM", activity: "Lagoon Lagoon-side Seafood Lunch", description: "Feast on world-famous Negombo jumbo prawns, lagoon crabs, and garlic bread." },
      { time: "02:30 PM", activity: "Catamaran Beach Stroll", description: "Relax along the coastal strip and visit traditional dry-fish drying fields." },
      { time: "04:00 PM", activity: "Hotel Drop-off", description: "Return to your Negombo or Colombo hotel." }
    ],
    included: [
      "Private dedicated transport with local chauffeur guide",
      "Fuel, road tolls, and parking",
      "Bottled water"
    ],
    excluded: [
      "Lagoon boat hire fee (approx. $15–$20 USD per boat)",
      "Lunch and personal expenses"
    ],
    suitableFor: "Flight arrival/departure days, families, seafood foodies, and photography lovers.",
    optionalAddons: [
      "Muthurajawela marsh conservation boat excursion",
      "Evening beach barbecue dinner arrangement"
    ],
    faqs: [
      { question: "Is this tour ideal for a layover from Bandaranaike Airport?", answer: "Yes! Negombo is just 15 minutes from CMB Airport, making this the best layover tour in Sri Lanka." }
    ],
    relatedDestinations: ["negombo", "colombo"],
    relatedTours: ["7-day-sri-lanka-tour", "sri-lanka-private-driver"]
  },
  {
    id: "day-tour-ella-highlands",
    slug: "ella-day-tour",
    title: "Ella Nine Arch Bridge, Little Adam's Peak & Ravana Falls Day Tour",
    metaTitle: "Ella Day Tour | Nine Arch Bridge & Little Adam's Peak | KS Tours",
    metaDescription: "Scenic private day trip to Ella from Nuwara Eliya, Kandy, or south coast. Hike Little Adam's Peak, photograph Demodara Nine Arch Bridge, and see Ravana Falls.",
    duration: "Full Day (approx. 8–10 hours)",
    startPoint: "Nuwara Eliya, Kandy, Haputale, or Mirissa/Tangalle",
    endPoint: "Return to your hotel",
    heroImage: "/images/ninearch ella.jpg",
    tagline: "Stand above misty mountain gorges, watch trains cross the viaduct in the clouds, and swim beneath legendary cascades.",
    overview: "Ella is Sri Lanka's premier mountain hiking sanctuary. This action-packed day excursion takes you to the iconic Demodara Nine Arch Bridge timed for the scenic train crossing, guides you up the gentle panoramic slopes of Little Adam's Peak, and brings you to the roaring base of Ravana Falls.",
    primaryKeyword: "Ella day tour",
    secondaryKeywords: ["Ella day trip", "Nine Arch Bridge day tour", "Little Adams Peak day tour", "Ella tour from Nuwara Eliya"],
    highlights: [
      "Photograph the vintage blue train traversing the British colonial Nine Arch Viaduct",
      "Hike through emerald tea fields up to the 360-degree viewpoint of Little Adam's Peak",
      "Admire the dramatic drop of Ella Gap framed by towering granite peaks",
      "Stand at the thundering mist base of multi-tiered Ravana Falls",
      "Enjoy lunch and Ceylon tea tasting at a vibrant hillside cafe overlooking mountain ridges"
    ],
    schedule: [
      { time: "07:30 AM", activity: "Hotel Departure", description: "Scenic mountain drive towards Ella through rolling tea valleys." },
      { time: "09:30 AM", activity: "Demodara Nine Arch Bridge Walk", description: "Hike through forest paths to the viaduct; positioned for the scheduled train crossing." },
      { time: "11:30 AM", activity: "Little Adam's Peak Ascent", description: "Easy-to-moderate 45-minute trail rewarded with sweeping views across Ella Rock and lowlands." },
      { time: "01:15 PM", activity: "Highland Cafe Lunch", description: "Relax at an open-air cafe in Ella town with fresh avocado salads and curries." },
      { time: "02:45 PM", activity: "Ravana Falls & Mythological Caves", description: "Visit the roaring waterfall steeped in the ancient Ramayana epic." },
      { time: "04:30 PM", activity: "Scenic Return Drive", description: "Comfortable drive back as evening mist rolls into the hills." }
    ],
    included: [
      "Dedicated air-conditioned touring car/van with experienced mountain chauffeur guide",
      "Fuel, toll charges, and vehicle expenses",
      "Bottled drinking water"
    ],
    excluded: [
      "Optional zipline or swing activities at Flying Ravana",
      "Lunch and personal expenditures"
    ],
    suitableFor: "Active travelers, couples, photographers, and scenery enthusiasts.",
    optionalAddons: [
      "Flying Ravana mega-zipline ride",
      "Demodara loop railway station visit"
    ],
    faqs: [
      { question: "How difficult is the Little Adam's Peak hike?", answer: "It is an easy to moderate walk taking roughly 45 minutes each way along a well-defined gravel and stone staircase path." }
    ],
    relatedDestinations: ["ella", "nuwara-eliya", "yala"],
    relatedTours: ["10-day-sri-lanka-tour", "14-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-bentota-madu-river",
    slug: "bentota-day-tour",
    title: "Bentota Golden Beach, Madu River Safari & Brief Garden Day Tour",
    metaTitle: "Bentota Day Tour | Madu River Boat Safari & Water Sports | KS Tours",
    metaDescription: "Full day private trip to Bentota and Balapitiya from Colombo or Negombo. Madu River mangrove cruise, sea turtle hatchery, Brief Garden, and golden beach.",
    duration: "Full Day (approx. 8–9 hours)",
    startPoint: "Colombo or Negombo hotels",
    endPoint: "Return to your hotel",
    heroImage: "/images/bentota beach.jpg",
    tagline: "Cruise through tangled mangrove islands, explore world-renowned landscape gardens, and relax on tropical sands.",
    overview: "Bentota is Sri Lanka's prime southwest coastal retreat. This private excursion combines an eco-friendly river cruise through the 64 islands of the Madu Ganga wetland estuary, a guided tour of Bevis Bawa's enchanting Brief Garden, an encounter with newborn sea turtles, and downtime on Bentota's world-famous golden sands.",
    primaryKeyword: "Bentota day tour",
    secondaryKeywords: ["Bentota day trip", "Madu River day tour", "Bentota boat safari", "Bentota private tour from Colombo"],
    highlights: [
      "2-hour private boat cruise through Madu River mangrove tunnels and cinnamon peeling islands",
      "Natural outdoor fish therapy spa experience on floating lagoon decks",
      "Hold baby green and hawksbill turtles at a respected beachside conservation hatchery",
      "Explore the lush hidden Japanese-colonial landscape sculptures of Brief Garden",
      "Stroll the broad, golden sands of Bentota peninsula where lagoon meets ocean"
    ],
    schedule: [
      { time: "08:00 AM", activity: "Hotel Departure", description: "Pickup via the Southern Expressway down to the southwest coast." },
      { time: "09:45 AM", activity: "Madu Ganga River Boat Safari", description: "Board your private canopy boat to explore bird-rich mangrove channels." },
      { time: "11:45 AM", activity: "Kosgoda Sea Turtle Conservation Project", description: "Learn how volunteers rescue sea turtle eggs from poachers." },
      { time: "01:00 PM", activity: "Fresh Coastal Seafood Lunch", description: "Dine overlooking the calm lagoon waters." },
      { time: "02:30 PM", activity: "Brief Garden by Bevis Bawa", description: "Wander through bamboo groves and artful courtyards designed by Geoffrey Bawa's brother." },
      { time: "04:00 PM", activity: "Bentota Golden Beach", description: "Unwind on the beach and enjoy fresh king coconut water." },
      { time: "05:30 PM", activity: "Expressway Return", description: "Smooth drive back to your hotel." }
    ],
    included: [
      "Private A/C transport with courteous chauffeur guide",
      "Expressway tolls, fuel, and parking fees",
      "Bottled water"
    ],
    excluded: [
      "Madu River boat hire (approx. $15–$20 USD per boat)",
      "Brief Garden entry ($10 USD approx.)",
      "Turtle hatchery entry ($5 USD approx.)",
      "Lunch and optional watersports"
    ],
    suitableFor: "Families, couples, botanical garden fans, and nature enthusiasts.",
    optionalAddons: [
      "Jet ski, banana boat, or windsurfing rentals at Bentota Lagoon"
    ],
    faqs: [
      { question: "Is the boat safari safe for small children and seniors?", answer: "Yes! Modern life jackets are provided for all passengers and the flat-bottomed lagoon boats travel on smooth, calm inland waters." }
    ],
    relatedDestinations: ["bentota", "galle", "colombo"],
    relatedTours: ["sri-lanka-honeymoon", "sri-lanka-family-tours"]
  },
  {
    id: "day-tour-anuradhapura-heritage",
    slug: "anuradhapura-day-tour",
    title: "Anuradhapura Sacred Ancient Kingdom Private Day Tour",
    metaTitle: "Anuradhapura Day Tour | Ancient Sacred Capital | KS Tours",
    metaDescription: "Journey back over 2,000 years on a private Anuradhapura day tour. Jaya Sri Maha Bodhi, Ruwanwelisaya stupa, Twin Ponds, and ancient monasteries.",
    duration: "Full Day (approx. 10–12 hours)",
    startPoint: "Sigiriya, Dambulla, Habarana, or Negombo",
    endPoint: "Return to your hotel",
    heroImage: "/images/anuradhapura-destination.jpg",
    tagline: "Walk in the footsteps of ancient Sinhalese kings at the world's most enduring Buddhist monastic kingdom.",
    overview: "Anuradhapura served as the glorious royal capital of ancient Sri Lanka for over a millennium. This sacred pilgrimage tour visits the 2,300-year-old Jaya Sri Maha Bodhi (the oldest documented human-planted tree on Earth), the sparkling white dome of Ruwanwelisaya, and astonishing ancient hydraulic engineering marvels.",
    primaryKeyword: "Anuradhapura day tour",
    secondaryKeywords: ["Anuradhapura day trip", "Anuradhapura private tour", "Ancient city Anuradhapura tour", "Sri Lanka sacred city day tour"],
    highlights: [
      "Pay homage at the sacred Jaya Sri Maha Bodhi tree, grown from an original branch of the Buddha's Bodhi tree",
      "Stand in awe before the majestic 103-meter-high Ruwanwelisaya Stupa",
      "Explore the vast brick dome of Jetavanaramaya, once among the tallest structures of the ancient world",
      "See the intricately carved Moonstone and guardstones of the Mahasena Palace",
      "Admire the monumental stone-cut bathing pools of Kuttam Pokuna (Twin Ponds)"
    ],
    schedule: [
      { time: "06:30 AM", activity: "Hotel Departure", description: "Early morning pickup for the drive to the North Central Province." },
      { time: "09:00 AM", activity: "Sacred Bo Tree & Brazen Palace", description: "Join devout pilgrims offering white lotus blossoms at Sri Maha Bodhi." },
      { time: "10:30 AM", activity: "Ruwanwelisaya & Mirisawetiya Stupas", description: "Circumbulate the sacred white stupas surrounded by elephant friezes." },
      { time: "01:00 PM", activity: "Lunch in Anuradhapura Town", description: "Enjoy traditional local rice and vegetable curries." },
      { time: "02:15 PM", activity: "Jetavanaramaya & Abhayagiri Monasteries", description: "Explore ancient university ruins that once housed 5,000 Buddhist monks." },
      { time: "04:00 PM", activity: "Kuttam Pokuna & Samadhi Buddha Statue", description: "Reflect at the sublime 4th-century meditating Buddha statue." },
      { time: "05:30 PM", activity: "Return Drive", description: "Relax on the return journey to your hotel." }
    ],
    included: [
      "Private air-conditioned vehicle with knowledgeable English-speaking chauffeur guide",
      "All vehicle fuel, tolls, and site parking",
      "Bottled water"
    ],
    excluded: [
      "Anuradhapura UNESCO archeological pass ($30 USD per adult)",
      "Lunch and personal expenditures"
    ],
    suitableFor: "History buffs, spiritual travelers, archaeologists, and couples.",
    optionalAddons: [
      "Mihintale rock sanctuary sunset hike (the cradle of Sri Lankan Buddhism)"
    ],
    faqs: [
      { question: "What clothing is required for Anuradhapura?", answer: "Modest attire covering shoulders and below the knees is strictly required at all active religious sites. White attire is deeply respected." }
    ],
    relatedDestinations: ["anuradhapura", "sigiriya", "dambulla"],
    relatedTours: ["14-day-sri-lanka-tour", "7-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-polonnaruwa-ruins",
    slug: "polonnaruwa-day-tour",
    title: "Polonnaruwa Medieval Kingdom & Gal Vihara Private Day Tour",
    metaTitle: "Polonnaruwa Day Tour | Medieval Ruins & Gal Vihara | KS Tours",
    metaDescription: "Private full-day tour to UNESCO Polonnaruwa from Sigiriya, Kandy, or Habarana. Explore King Parakramabahu's royal palace, Gal Vihara stone Buddhas, and Lotus Pond.",
    duration: "Full Day (approx. 8–10 hours)",
    startPoint: "Sigiriya, Dambulla, Kandy, or Habarana",
    endPoint: "Return to your hotel",
    heroImage: "/images/polonnaruwa-srilanka.jpg",
    tagline: "Marvel at monumental stone-carved Buddha statues and royal palaces of Sri Lanka's medieval golden age.",
    overview: "Set along the banks of the sea-like Parakrama Samudra reservoir, Polonnaruwa was the thriving royal capital of Sri Lanka from the 11th to 13th centuries. Outstandingly well-preserved, this compact archaeological park features monumental granite rock carvings at Gal Vihara, royal council chambers, and decorative Hindu shrines.",
    primaryKeyword: "Polonnaruwa day tour",
    secondaryKeywords: ["Polonnaruwa day trip", "Polonnaruwa private tour", "Gal Vihara day tour", "Polonnaruwa ruins tour Sri Lanka"],
    highlights: [
      "Gaze upon the world-renowned Gal Vihara four colossal rock-cut Buddha statues",
      "Walk through the seven-story brick ruins of King Parakramabahu the Great's Royal Palace",
      "Tour the Sacred Quadrangle containing the ornate circular Vatadage relic house",
      "See the lotus-shaped stone pond (Nelum Pokuna) and Rankoth Vehera stupa",
      "Drive along the massive earth dam embankment of the Parakrama Samudra reservoir"
    ],
    schedule: [
      { time: "08:00 AM", activity: "Hotel Departure", description: "Pickup from your hotel in the Cultural Triangle or Kandy." },
      { time: "09:30 AM", activity: "Polonnaruwa Archaeological Museum", description: "Orientation with scale models showing what the royal city looked like at its zenith." },
      { time: "10:30 AM", activity: "Royal Palace Complex & Council Chambers", description: "Walk through audience halls with carved elephant pillars." },
      { time: "12:00 PM", activity: "The Sacred Quadrangle", description: "Explore the ancient Tooth Relic chambers and circular stone pavilions." },
      { time: "01:15 PM", activity: "Traditional Village Lunch", description: "Farmer's style clay-pot buffet cooked over firewood." },
      { time: "02:30 PM", activity: "Gal Vihara Monumental Rock Carvings", description: "Admire the 14-meter recumbent Buddha and serene standing statue carved from living granite." },
      { time: "04:30 PM", activity: "Parakrama Samudra Dam & Return Drive", description: "Pause at the great ancient reservoir for photos before returning to your hotel." }
    ],
    included: [
      "Private A/C vehicle with experienced English-speaking chauffeur guide",
      "Fuel, highway tolls, and site parking fees",
      "Bottled water"
    ],
    excluded: [
      "Polonnaruwa UNESCO entrance ticket ($30 USD per adult)",
      "Lunch and personal expenditures"
    ],
    suitableFor: "Photographers, architecture lovers, couples, and families.",
    optionalAddons: [
      "Explore the archaeological ruins by bicycle rental",
      "Afternoon Minneriya wild elephant safari combo"
    ],
    faqs: [
      { question: "Is Polonnaruwa easier to walk than Sigiriya?", answer: "Yes! Polonnaruwa is relatively flat with minimal climbing compared to the 1,200 steep steps of Sigiriya Rock." }
    ],
    relatedDestinations: ["polonnaruwa", "sigiriya", "dambulla"],
    relatedTours: ["10-day-sri-lanka-tour", "7-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-minneriya-safari",
    slug: "minneriya-safari-day-tour",
    title: "Minneriya National Park 'The Elephant Gathering' Safari Day Tour",
    metaTitle: "Minneriya Safari Day Tour | The Great Elephant Gathering | KS Tours",
    metaDescription: "Witness hundreds of wild Asian elephants gather on a private Minneriya National Park afternoon 4x4 safari from Sigiriya, Dambulla, or Kandy.",
    duration: "Half to Full Day (approx. 6–8 hours)",
    startPoint: "Sigiriya, Dambulla, Habarana, or Kandy",
    endPoint: "Return to your hotel",
    heroImage: "/images/Minneriya Sri lanka.jpg",
    tagline: "Witness one of wildlife's greatest spectacles: hundreds of wild Asian elephants gathered around an ancient reservoir.",
    overview: "Every dry season (especially June through October), the receding waters of the 3rd-century Minneriya reservoir expose sweet green grasses that attract between 150 to 300+ wild elephants. This private 4x4 safari gets you front-row seats to watch matriarchs guide calves, young bulls spar, and herds graze peacefully at golden hour.",
    primaryKeyword: "Minneriya safari day tour",
    secondaryKeywords: ["Minneriya day trip", "Minneriya elephant gathering tour", "Minneriya safari from Sigiriya", "Kaudulla elephant safari"],
    highlights: [
      "3.5-hour private game drive in an open-top 4x4 safari jeep",
      "Witness wild elephant family herds feeding, playing, and drinking around the reservoir",
      "High probability of seeing 100+ elephants in a single afternoon",
      "Spot painted storks, fish eagles, wild boars, sambar deer, and marsh mugger crocodiles",
      "Accompanied by an experienced wildlife driver who knows herd movement corridors"
    ],
    schedule: [
      { time: "01:30 PM", activity: "Hotel Departure", description: "Pickup from your hotel in Sigiriya, Dambulla, or Habarana." },
      { time: "02:30 PM", activity: "Minneriya Park Entrance & Jeep Boarding", description: "Meet your specialized 4x4 open safari vehicle and wildlife tracker." },
      { time: "03:00 PM", activity: "Grassland Game Drive Commences", description: "Traverse dry zone scrub forests towards the vast lake basin." },
      { time: "04:15 PM", activity: "Peak Gathering Observation", description: "Station the vehicle at safe distances from grazing herds as golden hour begins." },
      { time: "06:15 PM", activity: "Exit Park at Sunset", description: "Transfer back to your air-conditioned road car." },
      { time: "07:30 PM", activity: "Hotel Drop-off", description: "Arrive back safely at your accommodation." }
    ],
    included: [
      "Roundtrip air-conditioned private road transport to park gates",
      "Private 4x4 open safari jeep and skilled tracker",
      "All vehicle fuel, driver allowances, and road fees"
    ],
    excluded: [
      "National park entrance ticket and government taxes (approx. $35–$40 USD per adult)",
      "Meals and refreshments"
    ],
    suitableFor: "Families with kids, wildlife photographers, nature lovers, and couples.",
    optionalAddons: [
      "Flexibility to route to adjacent Kaudulla or Eco Park if herds have migrated"
    ],
    faqs: [
      { question: "What happens if the elephants are in Kaudulla instead?", answer: "Minneriya and Kaudulla are connected by an elephant corridor. Our experienced drivers verify herd locations daily and will take you to whichever park has the largest gathering." }
    ],
    relatedDestinations: ["sigiriya", "dambulla", "polonnaruwa"],
    relatedTours: ["sri-lanka-safari-tours", "sri-lanka-family-tours"]
  },
  {
    id: "day-tour-kitulgala-rafting",
    slug: "kitulgala-adventure-day-tour",
    title: "Kitulgala White Water Rafting & Rainforest Adventure Day Tour",
    metaTitle: "Kitulgala Adventure Day Tour | White Water Rafting | KS Tours",
    metaDescription: "Adrenaline-fueled day trip to Kitulgala from Colombo, Kandy, or Bentota. Grade 3 white-water rafting, natural rock slides, waterfall jumps, and rainforest trek.",
    duration: "Full Day (approx. 8–10 hours)",
    startPoint: "Colombo, Negombo, Kandy, or Bentota hotels",
    endPoint: "Return to your hotel",
    heroImage: "/images/kitulgala.jpg",
    tagline: "Shoot raging rapids down the jungle-clad Kelani River, leap into natural rock pools, and trek prehistoric rainforests.",
    overview: "Nestled in the lush western foothills, Kitulgala is Sri Lanka's adventure capital and the filming location of the Oscar-winning movie 'The Bridge on the River Kwai'. This thrilling private excursion features exhilarating Grade 2 and Grade 3 white-water rafting down the roaring Kelani River, natural waterfall slides, and scenic jungle dining.",
    primaryKeyword: "Kitulgala day tour",
    secondaryKeywords: ["Kitulgala white water rafting day tour", "Kitulgala adventure day trip", "Kitulgala tour from Colombo", "Kitulgala tour from Kandy"],
    highlights: [
      "Exciting Grade 2 and 3 white-water rafting run tackling 7 exhilarating river rapids",
      "Natural stream confidence jumps and sliding down smooth granite rock waterslides",
      "Drift past the historic site where David Lean filmed 'The Bridge on the River Kwai'",
      "Scenic trek through the virgin canopy of Makandawa Rainforest Sanctuary",
      "Enjoy an authentic riverside Sri Lankan rice and curry buffet lunch"
    ],
    schedule: [
      { time: "06:30 AM", activity: "Hotel Departure", description: "Pickup and scenic mountain drive through rubber and tea plantations." },
      { time: "09:30 AM", activity: "Safety Briefing & Equipment Fitting", description: "Meet certified river rafting instructors and don life vests and helmets." },
      { time: "10:00 AM", activity: "White-Water Rafting Adventure", description: "Tackle named rapids including 'Butter Crunch', 'Killer Cave', and 'Virgin Fishery' (approx. 2 hours)." },
      { time: "12:15 PM", activity: "Natural Rock Pool Sliding & Jumps", description: "Optional canyoning and waterfall pool leaps in crystal-clear jungle streams." },
      { time: "01:30 PM", activity: "Riverside Buffet Lunch", description: "Hearty traditional curry buffet overlooking the tumbling river." },
      { time: "03:00 PM", activity: "Rainforest Nature Walk", description: "Look for endemic wet-zone bird species, orchids, and bamboo groves." },
      { time: "04:30 PM", activity: "Scenic Return Drive", description: "Relax comfortably in your private air-conditioned vehicle." }
    ],
    included: [
      "Private dedicated air-conditioned vehicle with professional chauffeur guide",
      "All vehicle fuel, highway tolls, and parking fees",
      "Bottled water"
    ],
    excluded: [
      "Rafting and canyoning equipment and instructor fee (approx. $25–$30 USD per person)",
      "Lunch and personal expenditures"
    ],
    suitableFor: "Adventure seekers, youth groups, active couples, and confident swimmers.",
    optionalAddons: [
      "Belilena prehistoric cave archaeological exploration"
    ],
    faqs: [
      { question: "Do I need prior rafting experience?", answer: "No! All trips are guided by certified white-water instructors and include comprehensive safety briefings and flotation gear." }
    ],
    relatedDestinations: ["kandy", "colombo", "nuwara-eliya"],
    relatedTours: ["7-day-sri-lanka-tour", "14-day-sri-lanka-tour"]
  },
  {
    id: "day-tour-pinnawala-kandy",
    slug: "pinnawala-kandy-day-tour",
    title: "Pinnawala Elephant Care & Kandy Temple of the Tooth Day Tour",
    metaTitle: "Pinnawala & Kandy Day Tour | Elephant River Bathing | KS Tours",
    metaDescription: "Popular private day excursion from Colombo or Negombo to Pinnawala Elephant Orphanage and Kandy Sacred Tooth Temple with Kumar & Sons Tours.",
    duration: "Full Day (approx. 9–11 hours)",
    startPoint: "Colombo or Negombo hotels / CMB Airport",
    endPoint: "Return to your hotel",
    heroImage: "/images/pinnawala.jpg",
    tagline: "Watch gentle elephant herds bathe in the Ma Oya river, then explore the spiritual royal citadel of Kandy.",
    overview: "This is one of the most beloved day trips in Sri Lanka, perfect for travellers based in Colombo or Negombo. Start your morning watching rescued elephant herds play and splash along the riverbanks of Pinnawala, followed by a scenic drive up the mountain pass into Kandy to tour the sacred Temple of the Tooth and Peradeniya Botanical Gardens.",
    primaryKeyword: "Pinnawala and Kandy day tour",
    secondaryKeywords: ["Pinnawala day trip", "Kandy and Pinnawala private tour", "Pinnawala elephant tour from Colombo", "Kandy day trip from Negombo"],
    highlights: [
      "Watch dozens of wild Asian elephants bathe together in the rushing Ma Oya river",
      "Visit the UNESCO-listed Sri Dalada Maligawa (Temple of the Sacred Tooth Relic)",
      "Stroll the world-class Royal Botanical Gardens at Peradeniya",
      "Stop at a spice and herbal sanctuary in the Kadugannawa hills",
      "Visit an authentic working Ceylon tea processing factory with tea tasting"
    ],
    schedule: [
      { time: "07:00 AM", activity: "Hotel Departure", description: "Convenient pickup from your Colombo or Negombo accommodation." },
      { time: "09:30 AM", activity: "Pinnawala Elephant River Bathing", description: "Enjoy front-row cafe seats as the herd walks down to the river for their morning bath." },
      { time: "11:30 AM", activity: "Highland Ascent & Herbal Garden", description: "Learn about traditional Ayurvedic plants and natural remedies." },
      { time: "01:00 PM", activity: "Kandyan Hillside Lunch", description: "Lunch overlooking the city hills and Kandy Lake." },
      { time: "02:15 PM", activity: "Temple of the Sacred Tooth Relic", description: "Tour the sacred inner sanctum and historic royal complex." },
      { time: "04:30 PM", activity: "Kadugannawa Mountain Pass Descent", description: "Scenic mountain drive down towards the coast." },
      { time: "07:00 PM", activity: "Hotel Drop-off", description: "Return safely to your hotel." }
    ],
    included: [
      "Private air-conditioned car or van with English-speaking chauffeur guide",
      "All fuel, expressway tolls, and vehicle parking fees",
      "Hotel pickup and drop-off",
      "Bottled water"
    ],
    excluded: [
      "Pinnawala entrance ticket (approx. $15 USD per adult)",
      "Temple of the Tooth entrance ($15 USD approx.)",
      "Lunch and personal expenditures"
    ],
    suitableFor: "Families with children, seniors, first-time visitors, and cultural travelers.",
    optionalAddons: [
      "Giragama working tea factory tour add-on",
      "Traditional gem museum and jewelry workshop walkthrough"
    ],
    faqs: [
      { question: "What time is the elephant river bath in Pinnawala?", answer: "The herd bathes in the river twice daily, from 10:00 AM to 12:00 PM and from 2:00 PM to 4:00 PM." }
    ],
    relatedDestinations: ["kandy", "negombo", "colombo"],
    relatedTours: ["7-day-sri-lanka-tour", "sri-lanka-family-tours"]
  }
];
