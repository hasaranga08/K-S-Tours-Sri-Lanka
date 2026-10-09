export interface ActivityItem {
  id: string;
  title: string;
  category: 'wildlife' | 'culture' | 'adventure' | 'tea' | 'beaches' | 'food';
  categoryLabel: string;
  tagline: string;
  description: string;
  location: string;
  image: string;
  duration: string;
  bestTime: string;
  highlights: string[];
  recommendedTours: { title: string; slug: string }[];
}

export const ACTIVITIES: ActivityItem[] = [
  // Wildlife
  {
    id: "wildlife-safari-yala",
    title: "4x4 Jeep Safari & Leopard Tracking",
    category: "wildlife",
    categoryLabel: "Wildlife & Safari",
    tagline: "Track the world's densest leopard population in Yala and Wilpattu.",
    description: "Embark on an adrenaline-fueled early morning or golden hour game drive through untamed coastal scrublands. With an expert licensed tracker, spot stealthy Sri Lankan leopards, sloth bears, marsh crocodiles, and wild boar roaming freely.",
    location: "Yala National Park / Wilpattu",
    image: "/images/sri-lanka-yala-safari-leopard.jpg",
    duration: "Half-Day (3.5 - 4 hours) or Full-Day",
    bestTime: "Dawn (6:00 AM) & Late Afternoon (3:00 PM)",
    highlights: ["Open-top 4x4 modified safari jeeps", "High leopard density in Block 1", "Spectacular birdlife around freshwater lagoons"],
    recommendedTours: [
      { title: "8-Day Wildlife & Big 4 Safari", slug: "sri-lanka-safari-tours" },
      { title: "6-Day Big Game Safari", slug: "6-day-big-game-safari" }
    ]
  },
  {
    id: "wildlife-elephant-gathering",
    title: "Wild Elephant Gathering & Lake Herds",
    category: "wildlife",
    categoryLabel: "Wildlife & Safari",
    tagline: "Witness one of Asia's greatest wildlife spectacles with hundreds of wild elephants.",
    description: "Every dry season, hundreds of wild Asian elephants congregate around the receding shores of ancient reservoirs in Minneriya and Kaudulla. Watch mothers nursing calves and massive tuskers grazing peacefully across vast grasslands.",
    location: "Minneriya & Kaudulla National Parks",
    image: "/images/Wild Elephant Gathering & Lake Herds.jpg",
    duration: "3 - 4 hours",
    bestTime: "Afternoon from 2:30 PM to sunset",
    highlights: ["Up to 300+ elephants in peak dry season", "Intimate observation of family herd dynamics", "Stunning lake vistas at sunset"],
    recommendedTours: [
      { title: "9-Day Family Active Adventure", slug: "9-day-family-active-adventure" },
      { title: "7-Day Classic Cultural Tour", slug: "7-day-sri-lanka-tour" }
    ]
  },
  {
    id: "wildlife-photography-birds",
    title: "Wildlife Photography & Bird Watching",
    category: "wildlife",
    categoryLabel: "Wildlife & Safari",
    tagline: "Capture over 450 bird species including 33 rare endemics in pristine wetlands.",
    description: "Sri Lanka is a world-class birding hotspot. From the saline lagoons of Bundala National Park (a RAMSAR wetland) to the virgin canopy of Sinharaja, spot flamingos, pelicans, painted storks, and endemic blue magpies.",
    location: "Bundala & Sinharaja Forest",
    image: "/images/Wildlife Photography & Bird Watching.jpg",
    duration: "Half-Day to Multi-Day",
    bestTime: "November to April (migratory season)",
    highlights: ["Endemic bird species guides", "Ideal lighting for telephoto photography", "Quiet, uncrowded natural reserves"],
    recommendedTours: [
      { title: "9-Day Wild Sri Lanka Rainforests & Marine", slug: "9-day-rainforest-leopards-marine-safari" }
    ]
  },

  // Culture
  {
    id: "culture-sigiriya-citadel",
    title: "Climbing Sigiriya Lion Rock Citadel",
    category: "culture",
    categoryLabel: "Ancient Culture",
    tagline: "Ascend the legendary 5th-century sky palace built atop a sheer 200m monolith.",
    description: "Recognized as the 8th Wonder of the World, Sigiriya was King Kashyapa's dramatic fortress in the sky. Walk through symmetrical water gardens, marvel at the 1,600-year-old maiden frescoes, pass between the colossal carved Lion Paws, and stand atop the palace ruins overlooking jungle plains.",
    location: "Sigiriya, Cultural Triangle",
    image: "/images/sri-lanka-sigiriya-sunrise.jpg",
    duration: "2.5 - 3 hours",
    bestTime: "Early Morning (7:00 AM) or Late Afternoon (3:30 PM)",
    highlights: ["UNESCO World Heritage fortress", "5th-century ancient frescoes and mirror wall", "Unrivaled 360-degree jungle views"],
    recommendedTours: [
      { title: "7-Day Classic Sri Lanka Tour", slug: "7-day-sri-lanka-tour" },
      { title: "Sigiriya Private Day Tour", slug: "day-tours/sigiriya-day-tour" }
    ]
  },
  {
    id: "culture-kandy-tooth-temple",
    title: "Sacred Temple of the Tooth & Royal Heritage",
    category: "culture",
    categoryLabel: "Ancient Culture",
    tagline: "Experience the spiritual heart of Sri Lankan Theravada Buddhism.",
    description: "Located within the royal palace complex of the historic Kingdom of Kandy, the Sri Dalada Maligawa houses the sacred tooth relic of the Buddha. Join the reverent evening puja ceremony filled with rhythmic drumbeats, aromatic jasmine blossoms, and golden shrines.",
    location: "Kandy Cultural Capital",
    image: "/images/Sacred Temple of the Tooth & Royal Heritage.jpg",
    duration: "1.5 - 2 hours",
    bestTime: "Puja times (5:30 AM, 9:30 AM, 6:30 PM)",
    highlights: ["Sacred tooth relic shrine", "Traditional Kandyan drum ceremony", "Peaceful stroll along Kandy Lake"],
    recommendedTours: [
      { title: "7-Day Classic Tour", slug: "7-day-sri-lanka-tour" },
      { title: "Kandy Private Day Trip", slug: "day-tours/kandy-day-tour" }
    ]
  },
  {
    id: "culture-dambulla-cave-temples",
    title: "Dambulla Golden Cave Sanctuaries",
    category: "culture",
    categoryLabel: "Ancient Culture",
    tagline: "Five ancient rock-cut sanctuaries filled with painted murals and golden statues.",
    description: "Dating back to the 1st century BC, Dambulla is the best-preserved cave temple complex in South Asia. Over 150 serene Buddha statues and vivid ceiling frescoes cover more than 2,000 square meters of subterranean stone.",
    location: "Dambulla",
    image: "/images/Dambulla Golden Cave Sanctuaries.jpeg",
    duration: "1.5 - 2 hours",
    bestTime: "Morning or Late Afternoon",
    highlights: ["Ancient reclining Buddha carved from living rock", "Panoramic views toward Sigiriya from the terrace", "Centuries of Buddhist mural artwork"],
    recommendedTours: [
      { title: "10-Day Island Highlights", slug: "10-day-sri-lanka-tour" }
    ]
  },

  // Adventure
  {
    id: "adventure-ella-rock-hiking",
    title: "Hiking Little Adam's Peak & Ella Rock",
    category: "adventure",
    categoryLabel: "Mountain Adventure",
    tagline: "Ascend green peaks for breathtaking panoramic views across the southern valleys.",
    description: "Ella is Sri Lanka's trekking capital. Little Adam's Peak offers a gentle 45-minute stroll through tea shrubs to a jagged ridge, while Ella Rock provides a rewarding half-day trek through eucalyptus forests to a cliff precipice overlooking Ravana Falls.",
    location: "Ella Highlands",
    image: "/images/Hiking Little Adam's Peak & Ella Rock.jpg",
    duration: "1 to 4 hours depending on trail",
    bestTime: "Sunrise (6:00 AM) before mist builds",
    highlights: ["Sweeping vistas of the Ella Gap", "Accessible walking paths suitable for families", "Cool refreshing highland climate"],
    recommendedTours: [
      { title: "10-Day Highlights & Safari", slug: "10-day-sri-lanka-tour" },
      { title: "14-Day Grand Explorer", slug: "14-day-sri-lanka-tour" }
    ]
  },
  {
    id: "adventure-whitewater-rafting",
    title: "White-Water Rafting in Kitulgala",
    category: "adventure",
    categoryLabel: "Mountain Adventure",
    tagline: "Paddle grade 2 and 3 rapids down the scenic Kelani River.",
    description: "Surrounded by dense rainforest where 'The Bridge on the River Kwai' was filmed, Kitulgala offers thrilling white-water rafting with safe, professional guides, followed by refreshing waterfall abseiling and natural stream sliding.",
    location: "Kitulgala",
    image: "/images/White-Water Rafting in Kitulgala.jpg",
    duration: "2 - 3 hours",
    bestTime: "Year-round (highest flow May-December)",
    highlights: ["Grade 2 & 3 whitewater rapids", "Warm tropical water and lush jungle scenery", "Natural rock pool canyoning"],
    recommendedTours: [
      { title: "100% Tailor-Made Tour", slug: "tailor-made-sri-lanka-tours" }
    ]
  },
  {
    id: "adventure-waterfall-trail",
    title: "Chasing Cascading Highland Waterfalls",
    category: "adventure",
    categoryLabel: "Mountain Adventure",
    tagline: "Discover roaring waterfalls tumbling down lush mountain gorges.",
    description: "From the multi-tiered cascades of Ramboda Falls in Nuwara Eliya to legendary Ravana Falls in Ella and secluded Diyaluma Falls with its natural cliffside infinity pools, Sri Lanka is blessed with hundreds of breathtaking waterfalls.",
    location: "Central Highlands & Ella",
    image: "/images/Chasing Cascading Highland Waterfalls.jpg",
    duration: "Flexible day stopovers",
    bestTime: "During and following rainy seasons",
    highlights: ["Natural rock infinity pools at Upper Diyaluma", "Iconic roadside photo stops with your chauffeur", "Cool fresh mountain swimming"],
    recommendedTours: [
      { title: "14-Day Grand Explorer", slug: "14-day-sri-lanka-tour" }
    ]
  },

  // Tea Country
  {
    id: "tea-plantation-factory-tasting",
    title: "Ceylon Tea Plantation Walk & Factory Tasting",
    category: "tea",
    categoryLabel: "Tea Country",
    tagline: "Walk amidst emerald Ceylon tea hills and taste world-famous high-grown brews.",
    description: "Explore the rolling manicured estates of Nuwara Eliya and Ella. Step inside a historic functioning factory to observe withering, rolling, fermenting, and grading, then savor single-estate pure Ceylon black, green, and silver tip teas.",
    location: "Nuwara Eliya & Ella",
    image: "/images/Ceylon Tea Plantation Walk & Factory Tasting.jpg",
    duration: "1.5 - 2 hours",
    bestTime: "Morning while tea pluckers are active in the fields",
    highlights: ["Learn orthodox manufacturing methods", "Professional tea cupping and tasting", "Colonial heritage architecture"],
    recommendedTours: [
      { title: "7-Day Classic Cultural Tour", slug: "7-day-sri-lanka-tour" },
      { title: "Nuwara Eliya Day Tour", slug: "day-tours/nuwara-eliya-day-tour" }
    ]
  },
  {
    id: "tea-scenic-train-journey",
    title: "World-Famous Blue Train: Kandy to Ella",
    category: "tea",
    categoryLabel: "Tea Country",
    tagline: "Ride what travel writers universally call the most scenic train journey on Earth.",
    description: "Board the vibrant blue train as it rumbles slowly through cloud-kissed mountain passes, towering pine forests, cascading waterfalls, and emerald tea valleys. Hang gently by open doorways and wave to friendly villagers along the tracks.",
    location: "Kandy to Nanu Oya (Nuwara Eliya) & Ella",
    image: "/images/World-Famous Blue Train Kandy to Ella.jpg",
    duration: "3 to 6 hours depending on segment",
    bestTime: "Morning or midday departures",
    highlights: ["Traversing the Demodara Nine Arch Bridge", "Reserved comfortable carriage seating arranged by KS Tours", "Iconic travel photography memories"],
    recommendedTours: [
      { title: "10-Day Sri Lanka Highlights", slug: "10-day-sri-lanka-tour" },
      { title: "10-Day Romantic Honeymoon", slug: "sri-lanka-honeymoon" }
    ]
  },

  // Beaches & Ocean
  {
    id: "beaches-mirissa-whale-watching",
    title: "Mirissa Blue Whale Watching Voyage",
    category: "beaches",
    categoryLabel: "Beaches & Ocean",
    tagline: "Sail into deep Indian Ocean waters to encounter the largest mammal on the planet.",
    description: "The deep oceanic trench just south of Mirissa brings blue whales, sperm whales, bryde's whales, and playful pods of spinner dolphins close to shore. Watch towering plumes of water vapor and monumental flukes slapping the ocean surface.",
    location: "Mirissa Coast",
    image: "/images/Mirissa Blue Whale Watching Voyage.jpg",
    duration: "3 - 5 hours",
    bestTime: "November to April (calmest ocean seas)",
    highlights: ["High encounter rate with blue whales", "Pods of hundreds of acrobatic spinner dolphins", "Safe, licensed coastal vessels"],
    recommendedTours: [
      { title: "8-Day Wildlife & Big 4 Safari", slug: "sri-lanka-safari-tours" },
      { title: "14-Day Grand Island Explorer", slug: "14-day-sri-lanka-tour" }
    ]
  },
  {
    id: "beaches-surfing-snorkeling",
    title: "Surfing, Snorkeling & Coral Reefs",
    category: "beaches",
    categoryLabel: "Beaches & Ocean",
    tagline: "Catch gentle peeling waves or snorkel alongside wild green sea turtles.",
    description: "From beginner-friendly sandy breaks in Weligama to lively reef waves in Midigama and crystal-clear turtle snorkeling at Pigeon Island or Polhena, Sri Lanka is a tropical ocean playground year-round.",
    location: "Weligama, Bentota, Hikkaduwa & Trincomalee",
    image: "/images/Surfing, Snorkeling & Coral Reefs.jpg",
    duration: "Flexible leisure",
    bestTime: "South Coast: Nov-Apr / East Coast: May-Oct",
    highlights: ["Swim alongside wild sea turtles in calm shallows", "Warm 28°C ocean water year-round", "Certified surf schools and equipment rental"],
    recommendedTours: [
      { title: "12-Day Island Explorer Family Tour", slug: "12-day-island-explorer-family-tour" }
    ]
  },
  {
    id: "beaches-galle-fort-stroll",
    title: "Galle Dutch Fort Sunset Ramparts Walk",
    category: "beaches",
    categoryLabel: "Beaches & Ocean",
    tagline: "Wander 17th-century cobblestone streets enclosed by living ocean walls.",
    description: "The UNESCO World Heritage fortress of Galle is a living monument where European colonial architecture blends with tropical South Asian life. Browse gem boutiques and historic cafes, then watch the sunset from the lighthouse ramparts.",
    location: "Galle Fort",
    image: "/images/Galle Dutch Fort Sunset Ramparts Walk.jpg",
    duration: "2 - 3 hours",
    bestTime: "Late Afternoon from 4:30 PM to sunset",
    highlights: ["Historic ramparts overlooking the roaring ocean", "Intact 17th-century Dutch and British architecture", "Vibrant artisanal gelato cafes and art galleries"],
    recommendedTours: [
      { title: "Galle Fort Private Day Tour", slug: "day-tours/galle-day-tour" },
      { title: "8-Day Romantic Ceylon Escape", slug: "8-day-romantic-ceylon-escape" }
    ]
  },

  // Food & Local Experiences
  {
    id: "food-sri-lankan-cooking",
    title: "Authentic Village Cooking & Clay-Pot Curry",
    category: "food",
    categoryLabel: "Food & Culture",
    tagline: "Learn the secrets of freshly ground spices, coconut milk, and clay-pot flavors.",
    description: "Join a local family in a rural village setting. Scrape fresh coconuts, grind fragrant spices on a traditional stone miris gala, and prepare five distinct curries in clay pots over a wood fire before enjoying an unforgettable feast on banana leaves.",
    location: "Habarana, Sigiriya or Kandy",
    image: "/images/Authentic Village Cooking & Clay-Pot Curry.jpg",
    duration: "2 - 3 hours including meal",
    bestTime: "Lunchtime (11:30 AM)",
    highlights: ["Hands-on cooking with local grandmothers and chefs", "Learn authentic spice blending techniques", "Eat delicious feast off banana leaves"],
    recommendedTours: [
      { title: "7-Day Classic Sri Lanka Tour", slug: "7-day-sri-lanka-tour" },
      { title: "10-Day Island Highlights", slug: "10-day-sri-lanka-tour" }
    ]
  },
  {
    id: "food-local-markets-coconuts",
    title: "Bustling Local Markets & King Coconut Stops",
    category: "food",
    categoryLabel: "Food & Culture",
    tagline: "Taste exotic tropical fruits and refreshing roadside king coconuts.",
    description: "One of the greatest joys of traveling with your KS Tours private chauffeur is pulling over at colorful roadside stalls for sweet golden thambili (king coconut), seasonal mangosteens, rambutan, woodapple, and freshly baked fish buns at local bakeries.",
    location: "Islandwide routes with your private driver",
    image: "/images/Bustling Local Markets & King Coconut Stops.jpg",
    duration: "Spontaneous 15-30 min stops",
    bestTime: "Throughout every driving day",
    highlights: ["100% natural hydration with fresh king coconut", "Try seasonal fruits you cannot find back home", "Honest local pricing with your trusted driver guide"],
    recommendedTours: [
      { title: "Sri Lanka Private Driver Service", slug: "sri-lanka-private-driver" }
    ]
  }
];
