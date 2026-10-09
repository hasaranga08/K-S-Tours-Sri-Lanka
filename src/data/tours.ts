import { TourPackage } from '../types';

export const TOURS: TourPackage[] = [
  {
    id: "tour-7-day-classic",
    slug: "7-day-sri-lanka-tour",
    title: "7-Day Classic Sri Lanka Cultural & Tea Country Tour",
    metaTitle: "7 Day Sri Lanka Tour | 7 Days Sri Lanka Itinerary | KS Tours",
    metaDescription: "Experience Sri Lanka in 7 days: Sigiriya Rock, Dambulla Caves, Temple of the Tooth Kandy, Nuwara Eliya tea hills, and Negombo with private chauffeur Kumar & Sons.",
    durationDays: 7,
    durationLabel: "7 Days / 6 Nights",
    category: "classic",
    tagline: "The essential Sri Lanka circuit: ancient wonders, royal capitals, and misty tea hills.",
    heroImage: "/images/nuwaraeliya-destinantion.webp",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Sigiriya", "Dambulla", "Kandy", "Nuwara Eliya", "Colombo"],
    primaryKeyword: "7 day Sri Lanka tour",
    secondaryKeywords: ["7 days Sri Lanka itinerary", "7 day Sri Lanka tour package", "Sri Lanka 1 week tour", "Sri Lanka private tour 7 days"],
    featured: true,
    overview: "Designed for travelers seeking the quintessential Sri Lankan experience within one week. This carefully paced private tour connects the Cultural Triangle's ancient palaces with the spiritual serenity of Kandy and the lush emerald peaks of Ceylon tea country, ending along the western coastline.",
    highlights: [
      "Climb UNESCO World Heritage Sigiriya Lion Rock at morning light",
      "Wander the Buddhist cave sanctuaries and golden statues of Dambulla",
      "Attend the evening ceremonial puja at the sacred Temple of the Tooth Relic in Kandy",
      "Stroll the world-class Royal Botanical Gardens in Peradeniya",
      "Sample fresh high-grown Ceylon tea directly from a historic Nuwara Eliya tea estate",
      "Private air-conditioned vehicle with dedicated English-speaking chauffeur guide throughout"
    ],
    itinerary: [
      {
        day: 1,
        title: "Airport Arrival – Welcome to Negombo",
        description: "Meet your Kumar & Sons driver guide at Bandaranaike International Airport (CMB). Transfer to your beachside hotel in Negombo or Kochchikade. Depending on arrival time, relax by the Indian Ocean or explore the bustling fish market and Dutch canals.",
        stayLocation: "Negombo / Kochchikade",
        mealsIncluded: "Breakfast included on subsequent days"
      },
      {
        day: 2,
        title: "Negombo to Sigiriya via Pinnawala or Dambulla",
        description: "Depart toward the Cultural Triangle. Stop at the Dambulla Cave Temple to marvel at the centuries-old painted rock caverns and reclining Buddha statues. Arrive in Sigiriya and settle into your hotel surrounded by birdsong and forest greenery.",
        stayLocation: "Sigiriya / Habarana"
      },
      {
        day: 3,
        title: "Sigiriya Lion Rock & Village Culture",
        description: "Early morning ascent of Sigiriya Rock Fortress before the midday heat. Admire the world-renowned frescoes, mirror wall, and 360-degree panorama from the sky citadel. In the afternoon, enjoy an authentic traditional village catamaran ride and clay-pot lunch.",
        stayLocation: "Sigiriya / Habarana"
      },
      {
        day: 4,
        title: "Sigiriya to Kandy – Spices & Sacred Relics",
        description: "Journey south into the foothills of Kandy. Pause at a fragrant spice garden in Matale to discover how cinnamon, cardamoms, and cloves are grown. In the evening, attend the ceremonial drum ritual at the Temple of the Sacred Tooth Relic.",
        stayLocation: "Kandy"
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya – Scenic Tea Country",
        description: "Visit Peradeniya Royal Botanical Gardens before winding uphill through mist-shrouded valleys past Ramboda Falls. Stop at a working Ceylon tea factory to witness the traditional orthodox rolling and withering process, followed by tea tasting.",
        stayLocation: "Nuwara Eliya"
      },
      {
        day: 6,
        title: "Nuwara Eliya to Negombo / Colombo",
        description: "Enjoy a morning stroll around Lake Gregory or Victoria Park. Descend through the dramatic valleys of Kitulgala (filming site of The Bridge on the River Kwai) with optional white-water rafting, returning to the western coast for your final evening.",
        stayLocation: "Negombo or Colombo"
      },
      {
        day: 7,
        title: "Colombo / Negombo to Airport Departure",
        description: "Enjoy breakfast overlooking the water. Your private chauffeur transfers you smoothly to Bandaranaike International Airport with ample time for your onward flight.",
        stayLocation: "Departure"
      }
    ],
    included: [
      "Dedicated air-conditioned private vehicle throughout",
      "Experienced English-speaking professional chauffeur-guide (Kumar / Chathu or senior team)",
      "All driver accommodation, meals, tolls, parking, and highway charges",
      "Comprehensive vehicle passenger insurance and unlimited tour mileage",
      "Airport meet & greet on arrival and airport departure transfer",
      "Customizable daily schedule matching your personal pace"
    ],
    excluded: [
      "International flights and Sri Lanka tourist visa (ETA)",
      "Hotel accommodations (can be included or booked independently by you)",
      "Monument and national park entrance tickets",
      "Personal expenses, drinks, and discretionary tipping"
    ],
    faqs: [
      {
        question: "Can we start this tour from Colombo instead of Negombo?",
        answer: "Yes, absolutely! Since our tours are 100% private, we can pick you up anywhere in Colombo, Negombo, or directly from the airport arrivals hall."
      },
      {
        question: "Can we modify this 7-day itinerary to include a safari?",
        answer: "Yes. Many guests swap Nuwara Eliya for Minneriya elephant safari in the Cultural Triangle or add Udawalawe. Contact us via WhatsApp to customize."
      },
      {
        question: "What is the cost for this 7-day tour?",
        answer: "Pricing depends on your preferred vehicle size (sedan vs. van) and whether you want chauffeur-only or hotel packages included. Contact us for a prompt, transparent quotation."
      }
    ]
  },
  {
    id: "tour-10-day-highlights-safari",
    slug: "10-day-sri-lanka-tour",
    title: "10-Day Sri Lanka Highlights, Scenic Train & Safari Tour",
    metaTitle: "10 Day Sri Lanka Tour | 10 Days Sri Lanka Itinerary & Safari | KS Tours",
    metaDescription: "Our most popular 10 day Sri Lanka itinerary: Sigiriya, Kandy, scenic hill country blue train to Ella, Yala leopard safari, and Galle Fort coast.",
    durationDays: 10,
    durationLabel: "10 Days / 9 Nights",
    category: "classic",
    tagline: "The golden balance of culture, highland train romance, wild leopards, and coastal charm.",
    heroImage: "/images/sri-lanka-ella-nine-arch-train.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Sigiriya", "Dambulla", "Kandy", "Nuwara Eliya", "Ella", "Yala National Park", "Mirissa", "Galle"],
    primaryKeyword: "10 day Sri Lanka tour",
    secondaryKeywords: ["10 days Sri Lanka itinerary", "10 day Sri Lanka tour package", "Sri Lanka 10 day itinerary with driver", "Sri Lanka holiday packages 10 days"],
    featured: true,
    overview: "Our signature 10-day island journey delivers the quintessential diversity of Sri Lanka. From the ancient UNESCO wonder of Sigiriya to the spiritual heartbeat of Kandy, the vintage blue train over the Nine Arch Bridge, exhilarating leopard tracking in Yala National Park, and golden southern beaches.",
    highlights: [
      "Climb 5th-century Sigiriya Rock Fortress & explore Dambulla Golden Caves",
      "Visit the Temple of the Sacred Tooth Relic in historic royal Kandy",
      "Ride the world's most scenic highland railway through tea valleys to Ella",
      "Photograph the architectural marvel of Nine Arch Demodara Bridge",
      "4x4 open-jeep wildlife safari tracking leopards and elephants in Yala National Park",
      "Sunset stroll along the seaside ramparts of UNESCO-listed Galle Dutch Fort",
      "Unwind on the tranquil palm-fringed sands of the southern coastline"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Welcome to Sri Lanka",
        description: "Warm welcome at Bandaranaike International Airport by Kumar & Sons Tours. Transfer to your coastal hotel in Negombo or Kochchikade to unwind.",
        stayLocation: "Negombo"
      },
      {
        day: 2,
        title: "Negombo to Cultural Triangle & Dambulla",
        description: "Travel inland through rural coconut landscapes to Dambulla. Explore the world's best-preserved rock cave temple complex with 150+ Buddha images.",
        stayLocation: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya Rock Citadel & Minneriya Safari",
        description: "Climb the ancient Lion Rock early morning. Afternoon open-jeep safari at Minneriya or Kaudulla National Park to witness wild elephant herds.",
        stayLocation: "Sigiriya"
      },
      {
        day: 4,
        title: "Sigiriya to Kandy – Spice Gardens & Sacred Tooth",
        description: "Drive south to the hill capital Kandy. Tour Matale spice gardens. In Kandy, visit the sacred Temple of the Tooth and enjoy a Kandyan cultural show.",
        stayLocation: "Kandy"
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya – Tea Country Vistas",
        description: "Wander Peradeniya Botanical Gardens, then drive through spectacular tea hills past Ramboda waterfall to Nuwara Eliya. Tour a working tea factory.",
        stayLocation: "Nuwara Eliya"
      },
      {
        day: 6,
        title: "Scenic Highland Blue Train to Ella",
        description: "Board the iconic blue train from Nanu Oya station to Ella as it glides over misty mountain gorges and tea terraces. Your driver greets you at Ella station.",
        stayLocation: "Ella"
      },
      {
        day: 7,
        title: "Ella Sights – Nine Arch Bridge to Yala",
        description: "Morning walk to the famous Nine Arch Bridge and hike Little Adam's Peak. Descend past Ravana Falls to the southern wilderness border of Yala.",
        stayLocation: "Yala / Tissamaharama"
      },
      {
        day: 8,
        title: "Yala National Park Safari to Mirissa Beach",
        description: "Early dawn 4x4 jeep safari in Yala tracking leopards, sloth bears, and crocodiles. Afterward, continue west along the sparkling southern ocean to Mirissa.",
        stayLocation: "Mirissa"
      },
      {
        day: 9,
        title: "Mirissa to Galle Dutch Fort & West Coast",
        description: "Optional morning whale watching cruise or beach leisure. Afternoon walk atop the 17th-century ramparts of Galle Fort, then drive to your beach hotel.",
        stayLocation: "Galle / Bentota / Negombo"
      },
      {
        day: 10,
        title: "Departure Transfer",
        description: "Scenic drive via the expressway to Bandaranaike International Airport in time for your return flight, carrying unforgettable memories of Sri Lanka.",
        stayLocation: "Departure"
      }
    ],
    included: [
      "Exclusive private vehicle with A/C and dedicated chauffeur guide",
      "All fuel, highway tolls, driver allowance, and parking charges",
      "Reserved tickets for the scenic highland blue train (Kandy to Ella)",
      "Private 4x4 open safari jeep with national park tracker in Yala",
      "Airport pick-up and drop-off"
    ],
    excluded: [
      "International airfare and Sri Lanka visa fees",
      "Hotel accommodations (available on request)",
      "Park entrance permits and temple entrance tickets",
      "Personal meals, tips, and optional activities"
    ],
    faqs: [
      {
        question: "Is this tour suitable for first-time visitors to Sri Lanka?",
        answer: "Yes, this is our most recommended itinerary for first-timers because it encapsulates Sri Lanka's greatest highlights (history, nature, wildlife, beaches) with sensible drive times."
      },
      {
        question: "Can we extend our stay at the beach at the end?",
        answer: "Yes, we frequently add extra days in Mirissa, Weligama, Tangalle, or Bentota for guests wanting extra beach relaxation."
      }
    ]
  },
  {
    id: "tour-14-day-grand-explorer",
    slug: "14-day-sri-lanka-tour",
    title: "14-Day Grand Island Explorer & Beach Retreat",
    metaTitle: "14 Day Sri Lanka Tour | 2 Week Sri Lanka Itinerary | KS Tours",
    metaDescription: "The ultimate 2-week Sri Lanka itinerary. Complete cultural triangle, highland trekking, Horton Plains, Yala safaris, whale watching, and beach relaxation.",
    durationDays: 14,
    durationLabel: "14 Days / 13 Nights",
    category: "classic",
    tagline: "The complete two-week journey across ancient empires, misty peaks, untamed wildlife, and tropical coasts.",
    heroImage: "/images/tangalle beach.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Anuradhapura", "Sigiriya", "Polonnaruwa", "Kandy", "Nuwara Eliya", "Horton Plains", "Ella", "Yala", "Mirissa", "Galle", "Bentota"],
    primaryKeyword: "14 day Sri Lanka tour",
    secondaryKeywords: ["14 days Sri Lanka itinerary", "2 week Sri Lanka itinerary", "14 day Sri Lanka tour package", "Sri Lanka private tour 2 weeks"],
    featured: true,
    overview: "A deeply immersive 14-day tour that doesn't rush. Explore both ancient capitals (Anuradhapura and Polonnaruwa), hike through high cloud forests at Horton Plains, take the legendary hill train, track leopards in Yala, spot blue whales in Mirissa, and unwind along pristine golden sands.",
    highlights: [
      "Explore both ancient UNESCO capitals: Anuradhapura and Polonnaruwa",
      "Sigiriya Lion Rock and sunrise views from Pidurangala",
      "Hike to the dramatic 870m vertical precipice of World's End in Horton Plains",
      "Scenic blue train from Nuwara Eliya through tea estates into Ella",
      "Comprehensive wildlife safaris in both Minneriya and Yala National Parks",
      "Indian Ocean whale watching expedition off the coast of Mirissa",
      "Leisurely multi-night stays allowing relaxed travel without daily packing"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Sri Lanka – Coastal Negombo", description: "Meet your Kumar & Sons driver guide and relax by the coast.", stayLocation: "Negombo" },
      { day: 2, title: "Negombo to Anuradhapura Ancient Capital", description: "Journey north to explore 2,000-year-old stupas and the sacred Jaya Sri Maha Bodhi tree.", stayLocation: "Anuradhapura" },
      { day: 3, title: "Anuradhapura to Sigiriya via Mihintale", description: "Ascend the sacred mountain of Mihintale, birthplace of Buddhism in Sri Lanka, before heading to Sigiriya.", stayLocation: "Sigiriya" },
      { day: 4, title: "Sigiriya Rock Citadel & Polonnaruwa Ruins", description: "Morning climb of Sigiriya Rock Fortress. Afternoon bicycle or car tour of royal Polonnaruwa.", stayLocation: "Sigiriya" },
      { day: 5, title: "Sigiriya to Kandy via Dambulla & Spice Gardens", description: "Explore Dambulla Caves and Matale spice estates on the way to Kandy.", stayLocation: "Kandy" },
      { day: 6, title: "Kandy Cultural Immersion", description: "Visit Temple of the Tooth, Peradeniya Gardens, and scenic viewpoint over Kandy Lake.", stayLocation: "Kandy" },
      { day: 7, title: "Kandy to Nuwara Eliya Highland Tea Country", description: "Drive through waterfall country to Nuwara Eliya. Tour an orthodox tea plantation and factory.", stayLocation: "Nuwara Eliya" },
      { day: 8, title: "Horton Plains World's End Trek & Train to Ella", description: "Dawn hike to World's End and Baker's Falls, then board the afternoon train to Ella.", stayLocation: "Ella" },
      { day: 9, title: "Ella Gap, Nine Arch Bridge & Waterfalls", description: "Visit Nine Arch Bridge, hike Little Adam's Peak, and enjoy Ella's relaxed cafe culture.", stayLocation: "Ella" },
      { day: 10, title: "Ella to Yala National Park Wilderness", description: "Descend to the dry zone scrublands of Yala. Afternoon leopard and elephant safari.", stayLocation: "Yala" },
      { day: 11, title: "Yala to Mirissa Southern Coastline", description: "Travel along the south coast to Mirissa. Relax on sandy beaches under coconut palms.", stayLocation: "Mirissa" },
      { day: 12, title: "Mirissa Whale Watching & Galle Fort", description: "Morning boat excursion for blue whales and dolphins. Afternoon walk atop Galle Fort ramparts.", stayLocation: "Galle / Bentota" },
      { day: 13, title: "Coastal Relaxation & Sea Turtle Sanctuary", description: "A leisurely beach day in Bentota with optional water sports or lagoon boat safari.", stayLocation: "Bentota" },
      { day: 14, title: "Departure via Colombo", description: "Direct transfer via Southern Expressway to Bandaranaike Airport for departure.", stayLocation: "Departure" }
    ],
    included: [
      "All private ground transport with fuel, driver guide, and tolls",
      "Scenic blue train tickets reserved",
      "Yala 4x4 private open safari jeep with driver",
      "Flexible schedule with full itinerary control"
    ],
    excluded: [
      "International flights and visa",
      "Site entry tickets and meals unless specified",
      "Accommodations (can be customized upon request)"
    ],
    faqs: [
      {
        question: "Can we slow the pace down to spend 3 days at the beach?",
        answer: "Yes! With our tailor-made approach, we can shorten any cultural stop and add extra days at Mirissa or Bentota."
      }
    ]
  },
  {
    id: "tour-honeymoon-romantic",
    slug: "sri-lanka-honeymoon",
    title: "10-Day Sri Lanka Romantic Honeymoon Tour",
    metaTitle: "Sri Lanka Honeymoon Packages | Luxury Romantic Tours | KS Tours",
    metaDescription: "Celebrate love in paradise: private scenic train ride, secluded boutique retreats, candlelit tea hill dinners, private Yala safari, and south coast beaches.",
    durationDays: 10,
    durationLabel: "10 Days / 9 Nights",
    category: "honeymoon",
    tagline: "Romantic candlelit retreats, scenic tea hills, secluded beaches, and effortless private travel.",
    heroImage: "/images/galle honeymoon.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Mirissa", "Galle"],
    primaryKeyword: "Sri Lanka honeymoon packages",
    secondaryKeywords: ["Sri Lanka honeymoon", "Sri Lanka honeymoon tour", "romantic holidays Sri Lanka", "honeymoon in Sri Lanka", "luxury Sri Lanka honeymoon"],
    featured: true,
    overview: "Crafted specifically for couples seeking intimacy, romance, and unhurried wonder. Wander hand-in-hand through ancient royal water gardens, sip champagne with views of tea-covered mountain valleys, embark on an exhilarating private safari, and stroll sunset ramparts by the sea.",
    highlights: [
      "Private champagne tea tasting overlooking misty mountain valleys",
      "Exclusive chauffeured travel ensuring privacy and flexibility throughout",
      "Scenic highland blue train ride past emerald tea estates to Ella",
      "Private sunset safari jeep in Yala away from the crowds",
      "Romantic seaside dinner and private stroll through historic Galle Fort"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Romantic Coastal Welcome", description: "Chauffeured pickup and arrival cocktail at your tranquil coastal retreat.", stayLocation: "Negombo" },
      { day: 2, title: "Scenic Drive to Cultural Triangle", description: "Travel to Sigiriya and check into a secluded eco-luxury resort surrounded by forest.", stayLocation: "Sigiriya" },
      { day: 3, title: "Sigiriya Citadel & Evening Spa Ritual", description: "Private morning ascent of Sigiriya fortress followed by a rejuvenating Ayurvedic couple's massage.", stayLocation: "Sigiriya" },
      { day: 4, title: "Kandy Royal Hills & Candlelit Dinner", description: "Visit the Temple of the Tooth and enjoy an intimate dinner overlooking the hills of Kandy.", stayLocation: "Kandy" },
      { day: 5, title: "Tea Country Highlands Romance", description: "Wind through rolling tea estates. Afternoon high tea on manicured colonial lawns.", stayLocation: "Nuwara Eliya" },
      { day: 6, title: "Scenic Blue Train Journey to Ella", description: "Board the vintage train together as dramatic valleys unfold beneath your window.", stayLocation: "Ella" },
      { day: 7, title: "Nine Arch Bridge Sunrise & Journey South", description: "Capture romantic photos at Nine Arch Bridge before continuing to the wild border of Yala.", stayLocation: "Yala" },
      { day: 8, title: "Private Wildlife Safari & Beach Sunset", description: "Exclusive 4x4 morning safari tracking leopards, followed by sunset cocktails on Mirissa beach.", stayLocation: "Mirissa" },
      { day: 9, title: "Galle Fort Sunset Stroll", description: "Walk the cobblestone paths and watch the sunset from the lighthouse ramparts.", stayLocation: "Galle" },
      { day: 10, title: "Airport Departure Transfer", description: "Relaxed private transfer to Bandaranaike International Airport for your flight home.", stayLocation: "Departure" }
    ],
    included: [
      "Dedicated luxury private A/C vehicle and experienced personal driver guide",
      "Complimentary bottled water, Wi-Fi hotspot in vehicle, and personalized romantic touches",
      "All driver expenses, fuel, and expressway tolls"
    ],
    excluded: [
      "Flights, visas, personal items, and entrance fees"
    ],
    faqs: [
      {
        question: "Can KS Tours help book romantic boutique hotels?",
        answer: "Yes, we have long-standing relationships across Sri Lanka with stunning boutique villas, tea bungalows, and luxury safari tents. We can recommend and organize accommodations tailored to your budget."
      }
    ]
  },
  {
    id: "tour-family-wildlife-culture",
    slug: "sri-lanka-family-tours",
    title: "10-Day Sri Lanka Family Adventure, Wildlife & Beaches",
    metaTitle: "Sri Lanka Family Tours & Packages | Sri Lanka With Kids | KS Tours",
    metaDescription: "Kid-approved Sri Lanka family holidays: elephant encounters, gentle hikes, scenic train journeys, wildlife safaris, and safe golden beaches with KS Tours.",
    durationDays: 10,
    durationLabel: "10 Days / 9 Nights",
    category: "family",
    tagline: "Exciting, safe, and stress-free island adventures for parents and kids of all ages.",
    heroImage: "/images/safari tour srilanka.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Pinnawala", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Bentota"],
    primaryKeyword: "Sri Lanka family tours",
    secondaryKeywords: ["Sri Lanka family tour packages", "Sri Lanka family holiday", "Sri Lanka with kids", "family safari Sri Lanka", "best Sri Lanka family holiday"],
    featured: true,
    overview: "Traveling with children requires the right balance: spacious comfortable vehicles, engaging activities that spark curiosity, gentle pacing without exhausting road marathons, and beach bays where kids can safely swim. Backed by nearly 40 years of local family expertise.",
    highlights: [
      "Observe bathing elephants up close along the river in Pinnawala",
      "Gentle climb and ancient water garden exploration at Sigiriya",
      "Thrilling 4x4 open-jeep safari spotting wild elephants, monkeys, and peacocks",
      "Ride the famous mountain train with open doors and breezy windows",
      "Visit sea turtle conservation hatcheries along the golden southern coast"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Settle in by the Coast", description: "Gentle airport pickup. Settle into a kid-friendly beach hotel in Negombo with a pool.", stayLocation: "Negombo" },
      { day: 2, title: "Pinnawala Elephants to Sigiriya", description: "Watch elephant herds splashing in the river, then continue to the Cultural Triangle.", stayLocation: "Sigiriya" },
      { day: 3, title: "Sigiriya Rock & Village Bullock/Catamaran Tour", description: "Climb the lion paws in the morning; take an interactive village cart ride and sample fresh coconut.", stayLocation: "Sigiriya" },
      { day: 4, title: "Minneriya Wild Elephant Safari", description: "See dozens of wild elephant families and babies feeding around the open reservoir waters.", stayLocation: "Sigiriya" },
      { day: 5, title: "Sigiriya to Kandy Cultural Capital", description: "Tour spice gardens with tasting of natural vanilla and cocoa, followed by a Kandyan cultural drum show.", stayLocation: "Kandy" },
      { day: 6, title: "Peradeniya Botanical Gardens & Hill Train", description: "Run around giant ficus trees and bamboo groves, then board the scenic mountain train to Ella.", stayLocation: "Ella" },
      { day: 7, title: "Nine Arch Bridge & Tea Factory", description: "Walk to the iconic viaduct bridge to watch the train cross, followed by an interactive tea leaf picking experience.", stayLocation: "Ella" },
      { day: 8, title: "Yala National Park Safari", description: "Thrilling jeep adventure spotting spotted deer, wild boars, crocodiles, and wild elephants.", stayLocation: "Yala" },
      { day: 9, title: "Beach Relaxation & Turtle Hatchery", description: "Transfer to Bentota's calm beach bay. Visit a local marine turtle rescue centre.", stayLocation: "Bentota" },
      { day: 10, title: "Departure Transfer", description: "Direct drive on the expressway to the airport for your journey home.", stayLocation: "Departure" }
    ],
    included: [
      "Spacious air-conditioned family van with child safety seats available on request",
      "Experienced family-friendly driver guide who prioritizes safety and flexibility",
      "All vehicle fuel, tolls, and driver allowances"
    ],
    excluded: [
      "Flights, visas, meals, and entry tickets"
    ],
    faqs: [
      {
        question: "Do you supply child booster or baby car seats?",
        answer: "Yes, child and infant safety car seats can be arranged upon request. Please inform us of your children's ages when inquiring."
      }
    ]
  },
  {
    id: "tour-wildlife-safari",
    slug: "sri-lanka-safari-tours",
    title: "8-Day Sri Lanka Wildlife & Big 4 Safari Expedition",
    metaTitle: "Sri Lanka Safari Tours | Wildlife & Leopard Safaris | KS Tours",
    metaDescription: "Experience Sri Lanka's Big 4: Leopards in Yala, Elephants in Udawalawe/Minneriya, Sloth Bears, and Blue Whales in Mirissa with local safari specialists.",
    durationDays: 8,
    durationLabel: "8 Days / 7 Nights",
    category: "safari",
    tagline: "Track the Sri Lankan Big 4: Leopards, Asian Elephants, Sloth Bears, and Blue Whales.",
    heroImage: "/images/sri-lanka-yala-safari-leopard.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Wilpattu / Minneriya", "Sigiriya", "Kandy", "Udawalawe", "Yala National Park", "Mirissa"],
    primaryKeyword: "Sri Lanka safari tours",
    secondaryKeywords: ["Sri Lanka wildlife tours", "Yala safari tour", "Sri Lanka leopard safari", "Udawalawe safari", "Sri Lanka elephant safari"],
    featured: true,
    overview: "Sri Lanka is recognized by naturalists as one of the world's most biodiverse wildlife destinations. This tour is engineered specifically for photographers and animal lovers to maximize sightings of the island's premier wild species across key national reserves.",
    highlights: [
      "Witness wild elephant herds in Minneriya or Kaudulla National Parks",
      "Multiple game drives across Yala National Park for maximum leopard encounter chances",
      "Udawalawe National Park safari famous for year-round elephant interactions",
      "Ocean expedition off the southern continental shelf in search of Blue Whales and dolphins",
      "Expert local 4x4 safari trackers and dedicated private chauffeur throughout"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Coastal Prep", description: "Meet your Kumar & Sons driver guide and relax.", stayLocation: "Negombo" },
      { day: 2, title: "Cultural Triangle & Minneriya Safari", description: "Afternoon jeep safari in Minneriya observing hundreds of Asian elephants.", stayLocation: "Habarana / Sigiriya" },
      { day: 3, title: "Sigiriya & Drive to Central Foothills", description: "Morning exploration of Sigiriya, followed by scenic drive through Matale into Kandy.", stayLocation: "Kandy" },
      { day: 4, title: "Kandy to Udawalawe National Park", description: "Descend into the southern dry plains. Afternoon safari in Udawalawe National Park.", stayLocation: "Udawalawe" },
      { day: 5, title: "Udawalawe Elephant Transit Home to Yala", description: "Visit the rehabilitation centre where orphaned baby elephants are nursed and returned to the wild.", stayLocation: "Yala" },
      { day: 6, title: "Full-Day or Dual Yala Safaris", description: "Early dawn game drive in Block 1 tracking leopards and sloth bears, followed by late afternoon safari.", stayLocation: "Yala" },
      { day: 7, title: "Yala to Mirissa – Whale Watching", description: "Early morning boat safari on the Indian Ocean for Blue Whales and spinner dolphins.", stayLocation: "Mirissa" },
      { day: 8, title: "Galle Fort & Airport Transfer", description: "Historic walk through Galle Fort and expressway transfer back to the international airport.", stayLocation: "Departure" }
    ],
    included: [
      "Private air-conditioned transport throughout the island",
      "Dedicated 4x4 open safari jeeps with experienced wildlife trackers in Minneriya, Udawalawe, and Yala",
      "Driver guide, fuel, and all road tolls"
    ],
    excluded: [
      "National park entrance fees and international travel expenses"
    ],
    faqs: [
      {
        question: "What is the best month for wildlife safaris in Sri Lanka?",
        answer: "February to June is exceptional for Yala leopard sightings as water supplies diminish. July to October is peak season for the famous Minneriya Elephant Gathering. November to April is prime for whale watching."
      }
    ]
  },
  {
    id: "tour-tailor-made",
    slug: "tailor-made-sri-lanka-tours",
    title: "100% Tailor-Made & Custom Sri Lanka Private Tours",
    metaTitle: "Tailor-Made Sri Lanka Tours | Custom Private Itineraries | KS Tours",
    metaDescription: "Design your dream Sri Lanka holiday from scratch. Choose your pace, hotels, destinations, safaris, and transport with nearly 40 years of local expertise.",
    durationDays: 1,
    durationLabel: "Custom Duration (3 to 30 Days)",
    category: "tailor-made",
    tagline: "Your trip, your pace, your choice — backed by nearly four decades of genuine local guidance.",
    heroImage: "/images/sri-lanka-private-driver-tour.jpg",
    startLocation: "Anywhere in Sri Lanka",
    endLocation: "Anywhere in Sri Lanka",
    destinations: ["Custom Selection across all Sri Lankan provinces"],
    primaryKeyword: "tailor-made Sri Lanka tours",
    secondaryKeywords: ["Sri Lanka custom tours", "Sri Lanka private tour packages", "custom Sri Lanka itinerary", "personalized tours Sri Lanka"],
    featured: false,
    overview: "Every traveler is unique. Whether you want a leisurely 3-week wellness retreat, a high-octane surfing and hiking expedition, or a bespoke multi-generational family journey, Kumar & Sons Tours builds your itinerary around your exact desires, timing, and budget.",
    highlights: [
      "Complete freedom to choose your starting date, duration, and pace",
      "Handpick your preferred destinations: mountains, culture, safaris, beaches, or off-the-beaten-track",
      "Direct advice from senior tour operators with nearly 40 years in Sri Lankan tourism",
      "Transparent quotations with no hidden agency markups or forced tourist shopping stops",
      "Instant planning support and rapid adjustments via WhatsApp"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tell Us What You Love",
        description: "Share your travel dates, group size, interests (wildlife, beaches, culture, hiking), and accommodation preferences via our form or WhatsApp.",
        stayLocation: "Custom"
      },
      {
        day: 2,
        title: "Receive a Custom Day-by-Day Proposal",
        description: "We craft a personalized route proposal detailing realistic drive times, optimal visit hours, and insider local recommendations.",
        stayLocation: "Custom"
      },
      {
        day: 3,
        title: "Refine & Confirm",
        description: "Fine-tune the schedule until it matches your exact vision. No pressure, no lock-ins.",
        stayLocation: "Custom"
      }
    ],
    included: [
      "Customized private transport with dedicated English-speaking chauffeur guide",
      "Complete flexibility to adjust stops along the road each day",
      "24/7 on-tour telephone & WhatsApp support from Kumar & Chathu"
    ],
    excluded: [
      "Customized based on your agreement"
    ],
    faqs: [
      {
        question: "Can I book my own hotels and just hire a car and driver with you?",
        answer: "Yes, absolutely! Many of our international guests prefer booking their own accommodations via Booking.com or Airbnb and booking only our private driver and vehicle service."
      }
    ]
  },
  {
    id: "tour-honeymoon-ceylon-escape",
    slug: "8-day-romantic-ceylon-escape",
    title: "8-Day Romantic Ceylon Escape & Coastal Luxury",
    metaTitle: "8 Day Sri Lanka Honeymoon | Romantic Ceylon Escape | KS Tours",
    metaDescription: "An intimate 8-day honeymoon in Sri Lanka featuring Sigiriya fortress, Kandy royal hills, scenic tea country, and secluded beachfronts in Bentota.",
    durationDays: 8,
    durationLabel: "8 Days / 7 Nights",
    category: "honeymoon",
    tagline: "Unwind together with ancient wonders, scenic high tea, and private Indian Ocean sunsets.",
    heroImage: "/images/srilanka romantic tours.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Galle", "Bentota"],
    primaryKeyword: "8 day Sri Lanka honeymoon",
    secondaryKeywords: ["Sri Lanka honeymoon itinerary", "romantic tour Sri Lanka", "private honeymoon Sri Lanka"],
    featured: true,
    overview: "Crafted specifically for couples looking for an unhurried, romantic week in Sri Lanka. Experience private sunrise exploration of Sigiriya, intimate dinners amidst misty tea plantations, and serene beachside relaxation along the southern shoreline.",
    highlights: [
      "Private early sunrise climb of Sigiriya Lion Rock Fortress",
      "Romantic candlelit dinner amidst cool highland tea plantations",
      "Stroll hand-in-hand through Peradeniya Royal Botanical Gardens",
      "Historic sunset ramparts walk in 17th-century Galle Dutch Fort",
      "Two relaxing nights at a private beachfront resort in Bentota"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Coastal Welcome", description: "Meet your private chauffeur guide and settle into a quiet oceanfront boutique hotel in Negombo.", stayLocation: "Negombo" },
      { day: 2, title: "Negombo to Sigiriya", description: "Journey into the Cultural Triangle. Stop at the Dambulla Cave Temple and enjoy an evening couples spa ritual.", stayLocation: "Sigiriya" },
      { day: 3, title: "Sigiriya Sunrise & Water Gardens", description: "Private early morning climb of Sigiriya rock before crowds arrive. Afternoon at leisure with serene forest views.", stayLocation: "Sigiriya" },
      { day: 4, title: "Cultural Foothills & Kandy", description: "Drive through Matale spice groves into Kandy. Visit the sacred Temple of the Tooth and enjoy an intimate lakeside dinner.", stayLocation: "Kandy" },
      { day: 5, title: "Highlands Romance – Nuwara Eliya", description: "Wind through lush tea valleys past Ramboda Falls. Private high tea and tasting at an orthodox tea factory.", stayLocation: "Nuwara Eliya" },
      { day: 6, title: "Highlands to Galle & Bentota Coast", description: "Descend to the south coast. Explore the cobblestone alleys of Galle Fort before arriving at your seaside retreat.", stayLocation: "Bentota" },
      { day: 7, title: "Tropical Beach Leisure", description: "Unwind on golden sands, enjoy fresh coconut water, or take an optional private sunset boat cruise.", stayLocation: "Bentota" },
      { day: 8, title: "Airport Departure Transfer", description: "Smooth expressway transfer to Bandaranaike International Airport for your flight.", stayLocation: "Departure" }
    ],
    included: [
      "Dedicated air-conditioned private vehicle throughout",
      "Senior English-speaking chauffeur guide",
      "Highway tolls, fuel, driver meals and driver accommodation",
      "Complimentary Wi-Fi and chilled bottled water in vehicle"
    ],
    excluded: ["International airfare, visa, entrance tickets, and personal expenses"],
    faqs: [
      { question: "Can we extend this honeymoon with extra beach days?", answer: "Yes, you can easily add extra days in Bentota, Tangalle, or Mirissa. Just ask us via WhatsApp." }
    ]
  },
  {
    id: "tour-honeymoon-luxury-hideaway",
    slug: "11-day-luxury-hideaways-honeymoon",
    title: "11-Day Secret Sri Lanka & Luxury Safari Hideaway",
    metaTitle: "11 Day Sri Lanka Luxury Honeymoon & Safari | KS Tours",
    metaDescription: "An unforgettable 11-day Sri Lanka couples journey covering secluded Wilpattu dry-zone sanctuaries, Ella mountain views, private Yala safaris, and Tangalle shores.",
    durationDays: 11,
    durationLabel: "11 Days / 10 Nights",
    category: "honeymoon",
    tagline: "Secluded wilderness hideaways, mist-wrapped mountain peaks, and golden Indian Ocean coves.",
    heroImage: "/images/lepord.webp",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Wilpattu", "Sigiriya", "Ella", "Yala", "Tangalle", "Galle"],
    primaryKeyword: "Sri Lanka luxury honeymoon safari",
    secondaryKeywords: ["luxury honeymoon Sri Lanka", "secluded Sri Lanka couples holiday", "Yala honeymoon safari"],
    featured: false,
    overview: "Designed for couples craving both wilderness adventure and secluded luxury. Traverse the wild leopard territory of Yala, witness misty peaks around Ella's Nine Arch Bridge, and unwind in secluded boutique villas along Sri Lanka's quiet southern coves.",
    highlights: [
      "Exclusive private 4x4 open-jeep safari in Yala National Park",
      "Sunrise over Ella's Nine Arch Bridge and Little Adam's Peak",
      "Scenic blue mountain rail journey through high-altitude tea valleys",
      "Stay in secluded boutique hideaways away from mass tourist buses",
      "Sunset champagne moments overlooking the pristine rocky coves of Tangalle"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Tranquil Start", description: "Arrive at BIA Airport, meet your private chauffeur, and relax at a peaceful lagoon sanctuary.", stayLocation: "Negombo" },
      { day: 2, title: "Negombo to Wilpattu / Sigiriya", description: "Scenic transfer toward the dry zone, visiting ancient forest monasteries en route.", stayLocation: "Sigiriya" },
      { day: 3, title: "Sigiriya Sky Fortress & Village Cruise", description: "Morning climb of Sigiriya followed by a serene catamaran boat ride on a lotus-covered lake.", stayLocation: "Sigiriya" },
      { day: 4, title: "Sigiriya to Kandy Cultural Hills", description: "Travel to Kandy, visit the Temple of the Tooth Relic, and stroll through royal botanical gardens.", stayLocation: "Kandy" },
      { day: 5, title: "Scenic Mountain Train to Ella", description: "Board the world-famous hill country train to Ella as cascading waterfalls and tea valleys pass by.", stayLocation: "Ella" },
      { day: 6, title: "Ella Romance & Ravana Falls", description: "Explore the Nine Arch Bridge and Little Adam's Peak with panoramic valley views.", stayLocation: "Ella" },
      { day: 7, title: "Ella to Yala Wildlife Sanctuary", description: "Descend to Yala's wild plains. Afternoon golden hour game drive tracking leopards and elephants.", stayLocation: "Yala" },
      { day: 8, title: "Yala Dawn Safari to Tangalle Coast", description: "Early morning safari tracking wildlife, then transfer to a secluded coastal hideaway in Tangalle.", stayLocation: "Tangalle" },
      { day: 9, title: "Tangalle Secluded Beach Day", description: "A day of pure relaxation on unspoiled, palm-fringed sandy coves.", stayLocation: "Tangalle" },
      { day: 10, title: "Galle Dutch Fort Heritage Stroll", description: "Explore the historic colonial ramparts, artisan boutiques, and lighthouse in Galle.", stayLocation: "Galle" },
      { day: 11, title: "Expressway Transfer to Airport", description: "Private chauffeur transfer directly to the airport for your journey home.", stayLocation: "Departure" }
    ],
    included: [
      "Private luxury air-conditioned vehicle with personal driver guide",
      "Private 4x4 safari jeep with national park tracker in Yala",
      "Reserved 1st or 2nd class scenic train tickets to Ella",
      "Full vehicle insurance, fuel, tolls, and driver allowances"
    ],
    excluded: ["International flights, visas, and monument entry tickets"],
    faqs: [
      { question: "Can we stay in glamping safari tents in Yala?", answer: "Yes! There are incredible luxury tented camps on the border of Yala that we frequently book for couples." }
    ]
  },
  {
    id: "tour-family-safari-adventure",
    slug: "9-day-family-active-adventure",
    title: "9-Day Sri Lanka Family Adventure & Wildlife Safari",
    metaTitle: "9 Day Sri Lanka Family Tour & Safari | Family Holidays | KS Tours",
    metaDescription: "A thrilling 9-day family holiday in Sri Lanka: Minneriya wild elephant gathering, Sigiriya rock climb, Kandy cultural performance, and beach fun in Bentota.",
    durationDays: 9,
    durationLabel: "9 Days / 8 Nights",
    category: "family",
    tagline: "Thrilling elephant encounters, ancient castles, and sunny beaches paced for kids and parents.",
    heroImage: "/images/family adv.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Sigiriya", "Minneriya", "Kandy", "Bentota"],
    primaryKeyword: "9 day Sri Lanka family tour",
    secondaryKeywords: ["Sri Lanka family safari holiday", "Sri Lanka with children", "family tour package Sri Lanka"],
    featured: true,
    overview: "Specially designed for parents traveling with children or teenagers. Shortened drive times, interactive wildlife encounters, engaging historical castles to climb, and a relaxing beach finale ensure everyone stays happy and energized.",
    highlights: [
      "Open 4x4 safari in Minneriya National Park watching hundreds of wild elephants",
      "Climb ancient Sigiriya Lion Rock and walk through landscaped water gardens",
      "Interactive village catamaran boat ride and traditional Sri Lankan lunch",
      "Kandy cultural performance featuring traditional fire walking and drummers",
      "Visit Kosgoda Sea Turtle Conservation project to see newly hatched baby turtles"
    ],
    itinerary: [
      { day: 1, title: "Airport Pickup – Family Welcome", description: "Meet your family-friendly chauffeur and check into your beachside hotel with a swimming pool.", stayLocation: "Negombo" },
      { day: 2, title: "Negombo to Cultural Triangle", description: "Drive inland to Habarana / Sigiriya with a stop to see giant Buddha statues and fruit stalls.", stayLocation: "Sigiriya" },
      { day: 3, title: "Sigiriya Lion Rock & Village Experience", description: "Morning climb of the ancient lion paws rock. Enjoy a bullock cart ride and clay-pot cooking demonstration.", stayLocation: "Sigiriya" },
      { day: 4, title: "Minneriya Wild Elephant Safari", description: "Exciting open-top jeep safari to watch wild elephant herds gathering by the lakeside.", stayLocation: "Sigiriya" },
      { day: 5, title: "Sigiriya to Kandy Cultural City", description: "Visit a spice garden where kids learn how cinnamon and cocoa grow, followed by the Temple of the Tooth.", stayLocation: "Kandy" },
      { day: 6, title: "Peradeniya Botanical Gardens & Transfer to Coast", description: "Walk among giant trees and bamboo forests before transferring down to the sunny beach bay in Bentota.", stayLocation: "Bentota" },
      { day: 7, title: "Sea Turtle Rescue & River Boat Safari", description: "Visit a marine turtle hatchery and take a boat safari along the Madu River through mangrove tunnels.", stayLocation: "Bentota" },
      { day: 8, title: "Beach Fun & Ocean Relaxation", description: "A free day for building sandcastles, swimming in the warm Indian Ocean, or trying gentle water sports.", stayLocation: "Bentota" },
      { day: 9, title: "Expressway Transfer to Airport", description: "Convenient private transfer directly to BIA Airport for your flight home.", stayLocation: "Departure" }
    ],
    included: [
      "Spacious air-conditioned family van with child safety seats upon request",
      "Family-experienced chauffeur guide prioritizing safety and flexibility",
      "All vehicle fuel, tolls, and driver allowances"
    ],
    excluded: ["International flights, visas, and park entrance fees"],
    faqs: [
      { question: "Is this itinerary suitable for young kids under 6?", answer: "Yes, drive times are limited to 2-3 hours between bases, and hotels with swimming pools are prioritized." }
    ]
  },
  {
    id: "tour-family-island-explorer",
    slug: "12-day-island-explorer-family-tour",
    title: "12-Day Island Explorer: Nature, Hill Country Trains & Coastal Fun",
    metaTitle: "12 Day Sri Lanka Family Explorer | Trains & Wildlife | KS Tours",
    metaDescription: "An enriching 12-day family itinerary: ancient Sigiriya, hill country train to Ella, Udawalawe elephant transit home, Yala safaris, and Mirissa beaches.",
    durationDays: 12,
    durationLabel: "12 Days / 11 Nights",
    category: "family",
    tagline: "The ultimate Sri Lankan family adventure balancing history, mountains, animals, and waves.",
    heroImage: "/images/ella train.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Negombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Udawalawe", "Mirissa"],
    primaryKeyword: "12 day Sri Lanka family tour",
    secondaryKeywords: ["Sri Lanka family road trip", "Sri Lanka family itinerary 12 days", "family holiday Sri Lanka"],
    featured: false,
    overview: "An immersive, beautifully balanced island holiday connecting Sri Lanka's finest highlights. Ride the iconic mountain train with open doors, witness baby elephants fed at milk stations, track leopards in Yala, and snorkel in calm southern bays.",
    highlights: [
      "Ride the world-renowned blue train winding through emerald tea hills",
      "Watch milk-feeding time at the Udawalawe Elephant Transit Home",
      "Climb Sigiriya Fortress and explore Dambulla's golden cave sanctuaries",
      "Walk the viaduct arches of Demodara Nine Arch Bridge in Ella",
      "Whale watching boat cruise off Mirissa and relaxing on safe family beaches"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Coastal Chill", description: "Settle into your Negombo family resort after your international flight.", stayLocation: "Negombo" },
      { day: 2, title: "Negombo to Sigiriya", description: "Drive to the Cultural Triangle. Visit the impressive Dambulla Cave Temple en route.", stayLocation: "Sigiriya" },
      { day: 3, title: "Sigiriya Rock & Kaudulla Safari", description: "Morning climb of Lion Rock fortress; afternoon jeep safari spotting wild elephants in Kaudulla.", stayLocation: "Sigiriya" },
      { day: 4, title: "Cultural Foothills to Kandy", description: "Visit a Matale spice garden and the Temple of the Sacred Tooth Relic in royal Kandy.", stayLocation: "Kandy" },
      { day: 5, title: "Kandy to Nuwara Eliya Tea Country", description: "Drive past Ramboda Falls into cool mountain air. Visit a working tea factory and taste fresh Ceylon tea.", stayLocation: "Nuwara Eliya" },
      { day: 6, title: "Scenic Hill Country Train to Ella", description: "Board the vintage mountain train to Ella with panoramic views of waterfalls and tea valleys.", stayLocation: "Ella" },
      { day: 7, title: "Nine Arch Bridge & Little Adam's Peak", description: "Hike gently to Ella's Nine Arch Bridge to wave at passing trains, followed by Little Adam's Peak.", stayLocation: "Ella" },
      { day: 8, title: "Ella to Udawalawe Elephant Sanctuary", description: "Descend into the southern plains. Visit the Elephant Transit Home and take an afternoon safari.", stayLocation: "Udawalawe" },
      { day: 9, title: "Udawalawe to Mirissa Beach", description: "Short drive to the golden palm-fringed coast of Mirissa. Unwind on the beach and enjoy fresh seafood.", stayLocation: "Mirissa" },
      { day: 10, title: "Whale Watching & Galle Fort", description: "Morning boat trip to spot blue whales and dolphins. Afternoon walk along Galle Fort's historic ramparts.", stayLocation: "Mirissa" },
      { day: 11, title: "Coastal Beach & Snorkelling Fun", description: "Swim in calm coral reefs or relax under palm trees by the sea.", stayLocation: "Mirissa" },
      { day: 12, title: "Expressway Transfer to Airport", description: "Comfortable drive along the southern expressway directly to the international airport.", stayLocation: "Departure" }
    ],
    included: [
      "Comfortable air-conditioned private family van throughout",
      "Dedicated chauffeur guide with deep local knowledge",
      "Reserved scenic train tickets and 4x4 safari jeep in Udawalawe"
    ],
    excluded: ["International flights, visas, and park entrance tickets"],
    faqs: [
      { question: "Can we rent booster seats for the vehicle?", answer: "Yes, booster and child seats can be arranged free of charge upon request." }
    ]
  },
  {
    id: "tour-safari-big-game-expedition",
    slug: "6-day-big-game-safari",
    title: "6-Day Big Game Safari: Elephants, Leopards & Birds",
    metaTitle: "6 Day Sri Lanka Wildlife Safari | Leopards & Elephants | KS Tours",
    metaDescription: "Intensive 6-day wildlife expedition covering Minneriya elephant gathering, Udawalawe grasslands, and dual game drives in Yala National Park with expert trackers.",
    durationDays: 6,
    durationLabel: "6 Days / 5 Nights",
    category: "safari",
    tagline: "A concentrated, action-packed wildlife circuit for photographers and safari enthusiasts.",
    heroImage: "/images/Sri-Lanka-elephants.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Minneriya", "Udawalawe", "Yala National Park"],
    primaryKeyword: "6 day Sri Lanka safari tour",
    secondaryKeywords: ["Sri Lanka wildlife expedition", "Yala leopard safari 6 days", "Minneriya elephant tour"],
    featured: true,
    overview: "Focused entirely on maximizing animal sightings. This 6-day itinerary links Sri Lanka's three premier national parks: the elephant gathering in Minneriya, the open plains of Udawalawe, and the world-renowned leopard haven of Yala.",
    highlights: [
      "Minneriya / Kaudulla open jeep safari for wild elephant herds",
      "Udawalawe National Park game drive tracking herds, water buffalo, and eagles",
      "Dual early-morning and late-afternoon game drives in Yala Block 1",
      "Accompanied by skilled licensed safari trackers and dedicated chauffeur",
      "Optimized driving routes to spend maximum daylight hours inside parks"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Direct to Cultural Triangle", description: "Meet your chauffeur and travel directly to Habarana, the base for central elephant reserves.", stayLocation: "Habarana / Sigiriya" },
      { day: 2, title: "Minneriya / Kaudulla Elephant Safari", description: "Afternoon 4x4 open-jeep safari observing hundreds of wild Asian elephants grazing around the reservoir.", stayLocation: "Habarana" },
      { day: 3, title: "Habarana to Udawalawe National Park", description: "Journey south past the Knuckles mountain range into the dry scrub savanna of Udawalawe.", stayLocation: "Udawalawe" },
      { day: 4, title: "Udawalawe Dawn Safari to Yala", description: "Early morning safari in Udawalawe's grassy plains, then transfer to Yala on the edge of the wilderness.", stayLocation: "Yala" },
      { day: 5, title: "Dual Yala Game Drives (Morning & Dusk)", description: "Dawn game drive tracking leopards and sloth bears, midday rest, and late afternoon return for golden hour predators.", stayLocation: "Yala" },
      { day: 6, title: "Yala to Airport Transfer", description: "Expressway transfer back to Bandaranaike International Airport in time for your flight.", stayLocation: "Departure" }
    ],
    included: [
      "Private air-conditioned transport with dedicated chauffeur guide",
      "Open 4x4 safari jeeps with experienced trackers in Minneriya, Udawalawe, and Yala",
      "All fuel, road tolls, and driver accommodation"
    ],
    excluded: ["National park entrance fees, flights, and meals not specified"],
    faqs: [
      { question: "What are the odds of seeing a leopard in Yala?", answer: "Yala has one of the world's highest leopard densities. Taking dual game drives dramatically increases your chances of multiple sightings." }
    ]
  },
  {
    id: "tour-safari-wild-rainforest-marine",
    slug: "9-day-rainforest-leopards-marine-safari",
    title: "9-Day Wild Sri Lanka: Rainforests, Leopards & Marine Life",
    metaTitle: "9 Day Sri Lanka Wildlife & Rainforest Tour | KS Tours",
    metaDescription: "Comprehensive 9-day biodiversity expedition: Sinharaja virgin rainforest, Udawalawe elephants, Yala leopards, and Mirissa blue whale watching.",
    durationDays: 9,
    durationLabel: "9 Days / 8 Nights",
    category: "safari",
    tagline: "From endemic rainforest birds to savannah apex predators and the largest mammal on Earth.",
    heroImage: "/images/diving sri lanka.jpg",
    startLocation: "Colombo / Negombo (BIA Airport)",
    endLocation: "Colombo / Negombo (BIA Airport)",
    destinations: ["Sinharaja", "Udawalawe", "Yala National Park", "Bundala", "Mirissa"],
    primaryKeyword: "Sri Lanka biodiversity safari tour",
    secondaryKeywords: ["Sinharaja rainforest tour", "whale watching and safari Sri Lanka", "Sri Lanka birdwatching tour"],
    featured: false,
    overview: "Sri Lanka's most comprehensive naturalist journey. Explore the UNESCO Sinharaja primary rainforest for endemic bird flocks and reptiles, traverse Udawalawe and Yala for terrestrial megafauna, and head into the Indian Ocean to observe giant blue whales.",
    highlights: [
      "Guided foot trek in Sinharaja Forest Reserve with a specialist naturalist guide",
      "Udawalawe National Park elephant safari and Elephant Transit Home",
      "Two dedicated game drives in Yala National Park for leopards and bears",
      "Bundala National Park RAMSAR wetland for migratory flocks and flamingos",
      "Ocean boat safari off Mirissa tracking blue whales, sperm whales, and dolphins"
    ],
    itinerary: [
      { day: 1, title: "Arrival – Coastal Prep", description: "Meet your private chauffeur guide and settle into a relaxing retreat in Negombo.", stayLocation: "Negombo" },
      { day: 2, title: "Negombo to Sinharaja Rainforest", description: "Travel to the boundary of the virgin tropical rainforest. Evening nature walk for nocturnal amphibians.", stayLocation: "Sinharaja" },
      { day: 3, title: "Full-Day Sinharaja Rainforest Trek", description: "Guided walking trek spotting mixed-species bird feeding waves, purple-faced langurs, and endemic flora.", stayLocation: "Sinharaja" },
      { day: 4, title: "Sinharaja to Udawalawe National Park", description: "Descend into the dry zone. Afternoon jeep safari tracking wild elephant herds.", stayLocation: "Udawalawe" },
      { day: 5, title: "Udawalawe to Yala via Bundala Wetlands", description: "Visit Bundala's salt lagoons for extraordinary birdlife, then settle near Yala National Park.", stayLocation: "Yala" },
      { day: 6, title: "Yala National Park Full-Day Game Drives", description: "Early dawn safari tracking leopards and sloth bears, followed by late afternoon exploration of waterholes.", stayLocation: "Yala" },
      { day: 7, title: "Yala to Mirissa Coast", description: "Scenic transfer to Mirissa. Relax by the ocean and prepare for tomorrow's marine voyage.", stayLocation: "Mirissa" },
      { day: 8, title: "Mirissa Blue Whale Watching Cruise", description: "Morning boat expedition into deep Indian Ocean waters searching for the world's largest whales.", stayLocation: "Mirissa" },
      { day: 9, title: "Galle Fort & Airport Transfer", description: "Brief stop at historic Galle Fort before taking the southern expressway back to the airport.", stayLocation: "Departure" }
    ],
    included: [
      "Dedicated air-conditioned private vehicle and chauffeur guide",
      "Specialist naturalist tracker for Sinharaja trek",
      "4x4 open safari jeeps in Udawalawe and Yala",
      "Whale watching boat tickets and life jackets included"
    ],
    excluded: ["Park entrance tickets, international flights, and personal expenses"],
    faqs: [
      { question: "When is the whale watching season in Mirissa?", answer: "The peak whale watching season runs from November to April when seas are calm and blue whales feed along the continental shelf." }
    ]
  }
];
