import { TravelRoute } from '../types';

export const TRAVEL_ROUTES: TravelRoute[] = [
  {
    slug: "kandy-to-ella",
    title: "Kandy to Ella Tour: Scenic Train, Tea Country & Private Driver Guide",
    fromCity: "Kandy",
    toCity: "Ella",
    metaTitle: "Kandy to Ella Tour | Scenic Train & Private Car Route Guide | KS Tours",
    metaDescription: "Plan your journey from Kandy to Ella. Compare the world-famous scenic blue train vs private chauffeur drive, Ramboda Falls stops, tea estates, and booking tips.",
    distanceKm: "140 km (road) / 160 km (rail)",
    driveTimeHours: "4.5 to 5 hours by private car / 6.5 to 7 hours by train",
    trainTimeHours: "6.5 to 7 hours",
    heroImage: "/images/sri-lanka-ella-nine-arch-train.jpg",
    overview: "The journey between the royal cultural capital of Kandy and the mountain village of Ella is globally renowned as one of the most stunning travel corridors on earth. It crosses mist-covered tea plantations, colonial mountain passes, tumbling waterfalls, and high cloud forests.",
    transportOptions: [
      {
        type: "Scenic Highland Blue Train (Most Popular Experience)",
        details: "Rumble through high mountain passes and tea terraces with open windows. KS Tours pre-books your reserved seats, drops you at Kandy station, transports all your heavy luggage safely in our private car, and meets you on the platform at Ella station!",
        recommendation: "Highly Recommended – Best combination of sightseeing and luggage convenience"
      },
      {
        type: "Private Air-Conditioned Car / Van Drive",
        details: "Drive at your own pace through Ramboda pass with flexible photo stops at Ramboda Falls, Mackwoods/Damro Tea Factory, Nuwara Eliya town, and Gregory Lake.",
        recommendation: "Best for travelers with mobility concerns or those wanting extensive stops along the way"
      }
    ],
    suggestedStops: [
      { name: "Ramboda Falls", description: "Twin cascading falls plunging 109m beside the mountain highway with a viewpoint cafe." },
      { name: "Mackwoods / Damro Tea Centre", description: "Guided tour through working tea machinery and complimentary fresh Ceylon tea tasting." },
      { name: "Nuwara Eliya 'Little England'", description: "Colonial Post Office from 1894, Victoria Park, and pony rides around Lake Gregory." },
      { name: "Demodara Loop & Nine Arch Bridge", description: "Iconic engineering marvel where the railway loops under itself before Ella." }
    ],
    faqs: [
      { question: "Can KS Tours arrange the train tickets and take our luggage?", answer: "Yes! That is our signature service for this route. We buy reserved 2nd or 3rd class train tickets in advance. You enjoy the train hands-free while your driver carries all luggage by car to meet you at Ella station." },
      { question: "Is the train ride too long?", answer: "The full ride takes around 6.5 hours. If preferred, you can take a shorter 3-hour section from Nanu Oya (Nuwara Eliya) to Ella, which features the most dramatic mountain scenery." }
    ],
    relatedDestinations: ["kandy", "nuwara-eliya", "ella"],
    relatedTours: ["10-day-sri-lanka-tour", "sri-lanka-honeymoon", "14-day-sri-lanka-tour"]
  },
  {
    slug: "colombo-to-sigiriya",
    title: "Colombo to Sigiriya Tour & Private Transfer Route Guide",
    fromCity: "Colombo / Airport",
    toCity: "Sigiriya",
    metaTitle: "Colombo to Sigiriya Tour & Transfer | Private Driver Guide | KS Tours",
    metaDescription: "Travel comfortably from Colombo or BIA Airport to Sigiriya Rock Fortress. Drive times, Pinnawala and Dambulla cave stopovers, and private chauffeur options.",
    distanceKm: "165 km (from Colombo) / 145 km (from BIA Airport)",
    driveTimeHours: "3.5 to 4 hours via Central Expressway & Kurunegala",
    heroImage: "/images/SDayTour.jpg",
    overview: "Connecting Sri Lanka's western coast with the heart of the ancient Cultural Triangle, the Colombo to Sigiriya route leaves behind the coastal plains, passing lush coconut plantations, rural rubber estates, and jagged granite hills before reaching King Kashyapa's 5th-century citadel.",
    transportOptions: [
      {
        type: "Private Chauffeur-Driven Car / Van",
        details: "Direct door-to-door comfort with pickup directly from your Colombo hotel or airport arrivals. Full air conditioning, smooth overtaking, and stops whenever you wish.",
        recommendation: "Recommended – Fastest, safest, and most convenient"
      }
    ],
    suggestedStops: [
      { name: "Pinnawala Elephant Sanctuary", description: "Watch rescued elephants herd down to the Maha Oya river for their daily morning bath." },
      { name: "Kurunegala Ethagala (Elephant Rock)", description: "Pass the ancient royal city nestled beneath towering rock formations resembling animals." },
      { name: "Dambulla Golden Cave Temple", description: "World Heritage rock caves housing 150+ Buddha images located directly on the final approach to Sigiriya." }
    ],
    faqs: [
      { question: "Can we visit Dambulla Cave Temple on the way from Colombo?", answer: "Yes! Dambulla is located directly along the main highway just 25 minutes before Sigiriya. Visiting Dambulla en route saves significant travel time." }
    ],
    relatedDestinations: ["colombo", "negombo", "dambulla", "sigiriya"],
    relatedTours: ["sigiriya-day-tour", "7-day-sri-lanka-tour", "10-day-sri-lanka-tour"]
  },
  {
    slug: "colombo-to-galle",
    title: "Colombo to Galle Fort Tour & Southern Expressway Route Guide",
    fromCity: "Colombo",
    toCity: "Galle Fort",
    metaTitle: "Colombo to Galle Tour | Southern Expressway & Coastal Route | KS Tours",
    metaDescription: "Drive from Colombo to Galle Fort via the modern Southern Expressway. Discover Madu River boat safaris, Kosgoda turtle hatcheries, and private transfer options.",
    distanceKm: "125 km via Southern Expressway",
    driveTimeHours: "1.5 to 2 hours (Expressway) / 3.5 hours (Scenic Coastal Highway)",
    heroImage: "/images/GDayTour.jpg",
    overview: "Thanks to the Southern Expressway (E01), traveling from Colombo to the 17th-century ramparts of Galle Dutch Fort is fast, scenic, and smooth. Travelers can also take the heritage coastal highway to incorporate mangrove river cruises and sea turtle rescue sanctuaries along the way.",
    transportOptions: [
      {
        type: "Private Expressway Chauffeur",
        details: "Speed down the multilane highway with zero traffic jams in under 2 hours.",
        recommendation: "Recommended for fast, stress-free transfers"
      },
      {
        type: "Scenic Coastal Road Tour with Stops",
        details: "Travel along the palm-fringed coast with stops at Madu River safari and turtle conservation centres.",
        recommendation: "Recommended if turning the drive into a full day exploration"
      }
    ],
    suggestedStops: [
      { name: "Madu Ganga Mangrove River Safari", description: "Cruise through mangrove tunnels, visit cinnamon peeling island, and historical temples." },
      { name: "Kosgoda Sea Turtle Conservation Project", description: "Support local marine conservation and see newly hatched baby turtles." },
      { name: "Hikkaduwa Coral Reef", description: "Famous surfing and snorkeling hub with gentle sea turtles swimming close to shore." }
    ],
    faqs: [
      { question: "How much is the expressway toll?", answer: "All highway toll charges are already included in every private transfer quote from Kumar & Sons Tours." }
    ],
    relatedDestinations: ["colombo", "bentota", "galle", "mirissa"],
    relatedTours: ["galle-day-tour", "10-day-sri-lanka-tour"]
  },
  {
    slug: "ella-to-yala",
    title: "Ella to Yala National Park Tour & Wilderness Route Guide",
    fromCity: "Ella",
    toCity: "Yala National Park",
    metaTitle: "Ella to Yala Tour | Route Guide, Waterfalls & Safari | KS Tours",
    metaDescription: "Scenic transition from misty mountain tea country in Ella down to wild leopard territory in Yala. Ravana Falls, Buduruwagala rock carvings, and safari tips.",
    distanceKm: "105 km",
    driveTimeHours: "2 to 2.5 hours",
    heroImage: "/images/safari1.jpg",
    overview: "This dramatic journey plunges from the cool 1,000-metre cloud ridges of Ella down through the dry southern plains. En route, you pass roaring waterfalls and hidden 10th-century rock-cut Buddha statues before reaching the thorny scrublands of Yala.",
    transportOptions: [
      {
        type: "Private A/C Road Vehicle",
        details: "Smooth descent through the Ella mountain pass directly to your safari lodge or the national park gate in Tissamaharama.",
        recommendation: "Recommended – Straightforward and scenic"
      }
    ],
    suggestedStops: [
      { name: "Ravana Falls", description: "Spectacular 25-metre multi-tiered waterfall cascading directly beside the mountain road." },
      { name: "Buduruwagala Rock Sculptures", description: "A peaceful forest sanctuary featuring seven colossal 10th-century Mahayana Buddhist statues carved into a sheer cliff face." }
    ],
    faqs: [
      { question: "Can we do an afternoon safari in Yala on the day we leave Ella?", answer: "Yes! If you leave Ella around 11:30 AM, you arrive at Yala with ample time for lunch before your 2:15 PM afternoon 4x4 game drive." }
    ],
    relatedDestinations: ["ella", "yala"],
    relatedTours: ["yala-safari-day-tour", "10-day-sri-lanka-tour", "14-day-sri-lanka-tour"]
  },
  {
    slug: "colombo-to-kandy",
    title: "Colombo to Kandy Tour: Mountain Highway & Cultural Gateway",
    fromCity: "Colombo",
    toCity: "Kandy",
    metaTitle: "Colombo to Kandy Tour | Drive Guide & Pinnawala Stops | KS Tours",
    metaDescription: "Travel from Colombo to Kandy. Route details, Kadugannawa mountain pass, Pinnawala elephant sanctuary stopovers, and private chauffeur bookings.",
    distanceKm: "115 km",
    driveTimeHours: "3 to 3.5 hours",
    heroImage: "/images/KDayTour.jpg",
    overview: "The historic highway from Colombo to Kandy ascends from sea-level coconut groves into the foothills of the central mountain massif, culminating at the sacred royal city beside Kandy Lake.",
    transportOptions: [
      {
        type: "Private Car / Chauffeur",
        details: "Comfortable private transport with stops at elephant sanctuaries, spice gardens, and roadside fresh cashew nut stalls.",
        recommendation: "Recommended"
      }
    ],
    suggestedStops: [
      { name: "Pinnawala Elephant Orphanage", description: "Watch elephant herds drinking and playing along the river." },
      { name: "Matale Spice Gardens", description: "Learn how cinnamon, nutmeg, cardamom, and cocoa are cultivated naturally." }
    ],
    faqs: [
      { question: "Is the road to Kandy winding?", answer: "Only the final 30 minutes ascending the Kadugannawa mountain pass has gentle curves. Our drivers drive defensively and comfortably." }
    ],
    relatedDestinations: ["colombo", "kandy", "nuwara-eliya"],
    relatedTours: ["kandy-day-tour", "7-day-sri-lanka-tour"]
  }
];
