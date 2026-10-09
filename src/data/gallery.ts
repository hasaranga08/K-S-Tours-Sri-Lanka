export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
  alt: string;
  location: string;
  category: 'customers' | 'destinations' | 'wildlife' | 'culture' | 'vehicles';
  aspect?: string;
  featuredOnHome?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. gallerynew1 - Real Customers with Chauffeur Guide Kumar
  {
    id: "gallerynew1",
    src: "/images/gallerynew1.jpg",
    title: "Guests Welcomed by Kumar & KS Tours",
    description: "International travelers enjoying personalized Sri Lankan hospitality and private chauffeur guidance on arrival.",
    alt: "Happy international guests on a private Sri Lanka tour with KS Tours",
    location: "Negombo & Cultural Route",
    category: "customers",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },
  // 2. gallerynew2 - Real Customers at Scenic Viewpoint
  {
    id: "gallerynew2",
    src: "/images/gallerynew2.jpg",
    title: "Scenic Hill Country Tour with Guests",
    description: "Travelers taking in panoramic views of emerald tea plantations and misty mountains in central Sri Lanka.",
    alt: "Guests enjoying panoramic tea plantation views on a private tour with KS Tours",
    location: "Ella & Nuwara Eliya",
    category: "customers",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },
  // 3. gallerynew3 - Authentic Family Tour Experience
  {
    id: "gallerynew3",
    src: "/images/gallerynew3.jpg",
    title: "Family Holiday Adventure Across Sri Lanka",
    description: "A wonderful holiday group traveling comfortably in our private air-conditioned vehicle with Kumar.",
    alt: "Family enjoying their tailor-made holiday journey in Sri Lanka with Kumar and Sons Tours",
    location: "Kandy & Cultural Triangle",
    category: "customers",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },
  // 4. gallery1 - Private KS Tours Vehicle & Travel
  {
    id: "gallery1",
    src: "/images/gallery1.jpg",
    title: "KS Tours Modern Private Vehicle on Tour",
    description: "Our meticulously maintained, spacious, air-conditioned vehicle ready for safe cross-island touring.",
    alt: "KS Tours private modern air-conditioned vehicle for touring in Sri Lanka",
    location: "Islandwide Touring",
    category: "vehicles",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },
  // 5. gallery3 - Wild Elephants & Safari Jeeps
  {
    id: "gallery3",
    src: "/images/gallery3.jpg",
    title: "Wild Elephant Safari in Minneriya National Park",
    description: "Close wildlife encounter with herds of wild Asian elephants gathered near the ancient reservoir shores.",
    alt: "Wild elephant herd safari in Minneriya National Park Sri Lanka",
    location: "Minneriya / Kaudulla",
    category: "wildlife",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },
  // 6. gallerynew4 - Iconic Ella Nine Arch Bridge Experience
  {
    id: "gallerynew4",
    src: "/images/gallerynew4.jpg",
    title: "Nine Arch Bridge Scenic Highlands",
    description: "Visiting the architectural marvel nestled in lush jungle forest as the classic highland train passes.",
    alt: "Nine Arch Bridge surrounded by lush tea valleys in Ella Sri Lanka",
    location: "Ella",
    category: "destinations",
    aspect: "aspect-[3/4]",
    featuredOnHome: true
  },
  // 7. G11 - Chathu & Kumar Smiling with Guests
  {
    id: "g11",
    src: "/images/G11.jpg",
    title: "Kumar & Chathuranga with Delighted Guests",
    description: "Father-and-son team Kumar and Chathuranga sharing genuine smiles with travelers on a customized itinerary.",
    alt: "Kumar and Chathuranga with happy travelers on their private Sri Lanka tour",
    location: "Central Sri Lanka",
    category: "customers",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },
  // 8. gallery5 - Ceylon Tea Factory & Plantation Visit
  {
    id: "gallery5",
    src: "/images/gallery5.jpg",
    title: "Ceylon High-Grown Tea Estate Tour",
    description: "Learning the artisan craft of world-famous Ceylon tea with estate walks and fresh tea tasting.",
    alt: "Scenic tea estate and plantation hills in Nuwara Eliya Sri Lanka",
    location: "Nuwara Eliya Highlands",
    category: "culture",
    aspect: "aspect-[4/3]",
    featuredOnHome: true
  },

  // 9. gallery6 - Sigiriya Ancient Fortress Adventure
  {
    id: "gallery6",
    src: "/images/gallery6.jpg",
    title: "Sigiriya Lion Rock Citadel Expedition",
    description: "Climbing the legendary 5th-century UNESCO rock citadel with sweeping views over tropical forests.",
    alt: "Traveler exploring the ancient Sigiriya rock fortress in Sri Lanka",
    location: "Sigiriya",
    category: "destinations",
    aspect: "aspect-[3/4]",
    featuredOnHome: false
  },
  // 10. G1 - Guests on Island Tour
  {
    id: "g1",
    src: "/images/G1.jpg",
    title: "Sightseeing with Chauffeur Guide Kumar",
    description: "Relaxed private touring with authentic stops at local fruit markets and cultural landmarks.",
    alt: "Guests traveling with chauffeur guide Kumar across Sri Lanka",
    location: "Cultural Triangle",
    category: "customers",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 11. G2 - Tropical Village & Rural Landscape
  {
    id: "g2",
    src: "/images/G2.jpg",
    title: "Rural Sri Lankan Village Discovery",
    description: "Experiencing peaceful rural life, paddy fields, and genuine warmth in the Sri Lankan countryside.",
    alt: "Travelers enjoying rural countryside stops in Sri Lanka",
    location: "Habarana Village",
    category: "destinations",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 12. G3 - Asian Elephant in Grassland Habitat
  {
    id: "g3",
    src: "/images/G3.jpg",
    title: "Majestic Asian Elephant Close-up",
    description: "Watching wild bull elephants roam freely in Udawalawe National Park with experienced safari trackers.",
    alt: "Wild elephant up close in Sri Lankan national park safari",
    location: "Udawalawe National Park",
    category: "wildlife",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 13. G4 - Premium Private Van & Transportation
  {
    id: "g4",
    src: "/images/G4.jpg",
    title: "KS Tours Comfortable Travel Van",
    description: "Spacious passenger interior with tinted windows and full climate control for long-distance island comfort.",
    alt: "Modern private touring van provided by KS Tours Sri Lanka",
    location: "Southern Expressway",
    category: "vehicles",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 14. G5 - Golden Southern Coast Beach
  {
    id: "g5",
    src: "/images/G5.jpg",
    title: "Tropical Beach Sunset in Mirissa",
    description: "Swaying palm trees and golden sands along the pristine southern coastline of Sri Lanka.",
    alt: "Tropical golden beach and palm trees in Mirissa Sri Lanka",
    location: "Mirissa / Bentota",
    category: "destinations",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 15. G6 - Highland Mountain Passes
  {
    id: "g6",
    src: "/images/G6.jpg",
    title: "Misty Mountain Passes in the Central Hills",
    description: "Traversing winding scenic roads through cloud forests and cascading mountain waterfalls.",
    alt: "Misty mountain roads and green hills in central Sri Lanka",
    location: "Ramboda Pass",
    category: "destinations",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },

  // 16. G7 - Historic Galle Fort Coastal Ramparts
  {
    id: "g7",
    src: "/images/G7.jpg",
    title: "Galle Dutch Fort Ocean Ramparts",
    description: "Walking along historic 17th-century coral ramparts overlooking the rolling Indian Ocean waves.",
    alt: "Galle Fort coastal ramparts and ocean view in southern Sri Lanka",
    location: "Galle Fort",
    category: "culture",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 17. G8 - Ancient Sacred Temple Architecture
  {
    id: "g8",
    src: "/images/G8.jpg",
    title: "Sacred Stupas of the Cultural Triangle",
    description: "Visiting ancient white dagobas and revered Buddhist heritage sites dating back over two millennia.",
    alt: "Ancient Buddhist stupa in Anuradhapura Cultural Triangle Sri Lanka",
    location: "Anuradhapura / Polonnaruwa",
    category: "culture",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 18. G9 - Panoramic Ella Gap Scenery
  {
    id: "g9",
    src: "/images/G9.jpg",
    title: "Panoramic Ella Gap Mountain Vista",
    description: "Breath-taking viewpoints looking down through the deep gorge toward the southern coastal plains.",
    alt: "Ella Gap panoramic mountain gorge view in Sri Lanka",
    location: "Ella Gap",
    category: "destinations",
    aspect: "aspect-[3/2]",
    featuredOnHome: false
  },
  // 19. G10 - 4x4 Safari Jeep in Wildlife Sanctuary
  {
    id: "g10",
    src: "/images/G10.jpg",
    title: "4x4 Game Drive Through Yala National Park",
    description: "Navigating off-road trails in search of leopards, sloth bears, and endemic birds in Sri Lanka's premier park.",
    alt: "Open 4x4 safari jeep game drive in Yala National Park Sri Lanka",
    location: "Yala National Park",
    category: "wildlife",
    aspect: "aspect-[16/9]",
    featuredOnHome: false
  },
  // 20. G12 - Highland Forest & Waterfalls
  {
    id: "g12",
    src: "/images/G12.jpg",
    title: "Lush Tea Valleys & Highland Waterfalls",
    description: "Cool mountain air and dramatic cascading falls amidst emerald tea terraces in the hill country.",
    alt: "Scenic waterfalls and lush green valley in Sri Lanka hill country",
    location: "Ella & Nuwara Eliya",
    category: "destinations",
    aspect: "aspect-[9/16]",
    featuredOnHome: false
  },
  // 21. G13 - Sigiriya Monolith View from Pidurangala
  {
    id: "g13",
    src: "/images/G13.jpg",
    title: "Sigiriya Rock Viewed Across the Canopy",
    description: "Sunrise perspective of the ancient fortress rising high above the dense Central Province canopy.",
    alt: "Sunrise view of Sigiriya Lion Rock citadel rising above tropical jungle",
    location: "Pidurangala / Sigiriya",
    category: "destinations",
    aspect: "aspect-[9/16]",
    featuredOnHome: false
  },
  // 22. G14 - Madu River Boat Safari & Mangroves
  {
    id: "g14",
    src: "/images/G14.jpg",
    title: "Madu River Mangrove Canopy Cruise",
    description: "Cruising serene brackish waterways, cormorant roosts, and fragrant cinnamon island plantations.",
    alt: "Boat cruise through Madu River mangrove tunnels in Balapitiya Sri Lanka",
    location: "Balapitiya / Bentota",
    category: "wildlife",
    aspect: "aspect-[9/16]",
    featuredOnHome: false
  },
  // 23. G15 - Dambulla Royal Rock Cave Temple
  {
    id: "g15",
    src: "/images/G15.jpg",
    title: "Dambulla Golden Cave Temple Statues",
    description: "Marveling at 150+ Buddha statues and intricate ceiling frescoes preserved inside five sacred cave sanctuaries.",
    alt: "Ancient Buddha statues inside Dambulla cave temple Sri Lanka",
    location: "Dambulla",
    category: "culture",
    aspect: "aspect-[9/16]",
    featuredOnHome: false
  },
  // 24. G16 - Southern Savannah Golden Hour
  {
    id: "g16",
    src: "/images/G16.jpg",
    title: "Golden Hour Over Southern Wetlands",
    description: "Peaceful evening glow over tranquil reservoirs reflecting Sri Lanka's rich tropical birdlife.",
    alt: "Golden hour sunset over water reservoir in southern Sri Lanka",
    location: "Bundala / Hambantota",
    category: "destinations",
    aspect: "aspect-[16/9]",
    featuredOnHome: false
  },
  // 25. gallery17 - Authentic Mountain & Heritage Tour
  {
    id: "gallery17",
    src: "/images/gallery17.jpg",
    title: "Highland Splendour & Tea Hills Walk",
    description: "High-resolution portrait of travelers exploring the tea garden paths and highland vistas of Sri Lanka.",
    alt: "Travelers enjoying tea garden walk in the highlands with KS Tours",
    location: "Highland Countryside",
    category: "customers",
    aspect: "aspect-[3/4]",
    featuredOnHome: false
  }
];

// 8 curated authentic images for the homepage "Real Journeys With KS Tours" section
export const HOMEPAGE_GALLERY_IMAGES = GALLERY_ITEMS.filter((item) => item.featuredOnHome);
