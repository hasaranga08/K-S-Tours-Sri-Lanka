import { FAQItem } from '../types';

export interface DriverVehicle {
  name: string;
  category: string;
  passengers: string;
  luggage: string;
  features: string[];
  recommendedFor: string;
}

export const PRIVATE_DRIVER_SERVICE = {
  title: "Sri Lanka Private Driver & Chauffeur Guide Service",
  metaTitle: "Sri Lanka Private Driver & Chauffeur Tours | KS Tours",
  metaDescription: "Hire a trusted, English-speaking Sri Lanka private driver. Modern air-conditioned cars and vans, clean vehicles, fuel & tolls included. Nearly 40 years experience.",
  tagline: "Safe, flexible, and stress-free island travel with seasoned local chauffeurs.",
  heroImage: "/images/sri-lanka-private-driver-tour.jpg",
  primaryKeyword: "Sri Lanka private driver",
  secondaryKeywords: [
    "hire driver Sri Lanka",
    "private car and driver Sri Lanka",
    "Sri Lanka chauffeur guide",
    "Sri Lanka tour driver",
    "English speaking driver Sri Lanka",
    "car with driver Sri Lanka"
  ],
  intro: "Navigating Sri Lanka's winding mountain passes, bustling town streets, and rural routes is best entrusted to a professional local driver. Kumar & Sons Tours provides English-speaking chauffeur guides with clean, modern, fully air-conditioned vehicles — giving you total freedom, safety, and insider local knowledge every kilometre of your journey.",
  vehicles: [
    {
      name: "Comfort Sedan / Saloon (Toyota Prius / Axio / Premio)",
      category: "Sedan Car",
      passengers: "1 – 3 Adults",
      luggage: "2 Large Suitcases + 2 Hand Luggage",
      features: ["Full Climate Control A/C", "Tinted UV Windows", "Comfortable Fabric/Leather Seats", "Phone Chargers & Wi-Fi"],
      recommendedFor: "Solo travelers, couples, and small families"
    },
    {
      name: "Spacious Touring Van (Toyota KDH / Commuter / HiAce)",
      category: "Passenger Van",
      passengers: "4 – 8 Passengers",
      luggage: "6 – 8 Large Suitcases + Backpacks",
      features: ["Dual-Zone Air Conditioning", "High Ceiling & Reclining Seats", "Ample Luggage Bay", "Curtains for privacy"],
      recommendedFor: "Larger families, groups of friends, and travelers with substantial luggage"
    },
    {
      name: "Mini-Coach / Executive Bus",
      category: "Coach",
      passengers: "9 – 16 Passengers",
      luggage: "12+ Large Suitcases",
      features: ["High-power AC", "PA Microphone System", "Overhead Racks", "Panoramic View Windows"],
      recommendedFor: "Tour groups, yoga retreats, and multi-family gatherings"
    }
  ] as DriverVehicle[],
  inclusions: [
    "Dedicated English-speaking professional chauffeur-guide (Kumar, Chathu, or senior vetted driver)",
    "Clean, comfortable, late-model air-conditioned vehicle",
    "All vehicle fuel and unlimited travel mileage during scheduled itinerary",
    "All expressway tolls, provincial road taxes, and vehicle parking fees",
    "Full driver accommodation and meals handled by us",
    "Comprehensive commercial passenger vehicle insurance coverage",
    "Free airport meet-and-greet assistance with flight tracking",
    "Flexible stops for photography, fresh coconut water, and meals anytime"
  ],
  pricingPolicy: "We believe in honest, upfront rates with ZERO hidden surprises. You receive a fixed quote covering everything — driver, vehicle, fuel, tolls, and parking. No forced shopping commission stops, ever.",
  faqs: [
    {
      question: "What is included in the private driver quotation?",
      answer: "Every quotation from Kumar & Sons Tours is all-inclusive. It covers your dedicated English-speaking chauffeur guide, the modern air-conditioned vehicle, all fuel for agreed daily travel, expressway tolls, parking fees, comprehensive passenger insurance, and the driver's meals and overnight accommodation. There are no hidden fees or unexpected road expenses."
    },
    {
      question: "How does driver accommodation and meals work?",
      answer: "Most tourist hotels and guest houses in Sri Lanka provide complimentary driver quarters and meals. If you choose to stay at a private villa, boutique bungalow, or Airbnb that does not have driver facilities, we arrange and cover the driver's nearby accommodation directly. You never have to book rooms, pay extra fees, or worry about your driver's lodging."
    },
    {
      question: "What vehicle options can we choose between?",
      answer: "For solo travellers and couples (1–3 passengers), we provide comfortable air-conditioned sedans such as the Toyota Premio, Prius, or Axio. For families and small groups (3–8 passengers), we deploy spacious high-roof passenger touring vans (Toyota KDH / HiAce Commuter) featuring dual A/C and generous luggage bays. For larger groups (9–16+ passengers), mini-coaches with PA systems are available."
    },
    {
      question: "Can we request a tailor-made itinerary or change our plans on the road?",
      answer: "Yes, absolutely! Having your own private driver gives you total schedule flexibility. If you want an earlier morning start to beat the heat at Sigiriya, wish to pause for fresh king coconuts, or decide to stay longer at an Ella viewpoint, your chauffeur accommodates your personal rhythm. You can also send us a wish-list of places and we will build a realistic daily route for you."
    },
    {
      question: "What are the practical advantages of hiring a local driver over driving yourself?",
      answer: "Self-driving in Sri Lanka requires navigating narrow roads, mountain switchbacks, local bus traffic, and obtaining local endorsements for foreign driving permits in Colombo. A professional local chauffeur eliminates this stress completely, knows safe alternative routes, assists with language barriers and luggage, and shares authentic historical and cultural insights throughout the trip."
    },
    {
      question: "Are your drivers English-speaking and experienced?",
      answer: "Yes. All our drivers are fluent in English, and founder Kumar also speaks conversational German. With nearly 40 years of island operation, our drivers are patient, safe, family-oriented, and thoroughly knowledgeable about Sri Lankan history, nature, and scenic stops."
    },
    {
      question: "How do we enquire and confirm a private driver booking?",
      answer: "You can send us an inquiry via our online booking form or message Kumar & Chathuranga directly on WhatsApp (+94 77 774 1615). Share your travel dates, passenger count, luggage volume, and desired destinations. We will review the route, advise on sensible travel times, and provide a clear, itemized proposal within hours."
    }
  ] as FAQItem[]
};

export const AIRPORT_TRANSFERS_SERVICE = {
  title: "Bandaranaike Airport (CMB) Private Transfers & Taxi Services",
  metaTitle: "Sri Lanka Airport Transfers | Colombo & CMB | KS Tours",
  metaDescription: "Reliable, fixed-price transfers from Colombo Bandaranaike International Airport (CMB) to Negombo, Kandy, Sigiriya, Galle, and Ella. 24/7 meet & greet.",
  tagline: "Stress-free airport arrivals with flight monitoring and professional meet & greet.",
  heroImage: "/images/sri-lanka-private-driver-tour.jpg",
  primaryKeyword: "Sri Lanka airport transfer",
  secondaryKeywords: [
    "Colombo airport transfer",
    "Bandaranaike airport transfer",
    "Colombo airport to Kandy",
    "Colombo airport to Sigiriya",
    "Colombo airport to Galle",
    "airport taxi Sri Lanka"
  ],
  popularRoutes: [
    { destination: "Negombo / Kochchikade", distanceKm: "12 km", approxTime: "20 – 30 mins", notes: "Shortest route, ideal after a long haul flight" },
    { destination: "Colombo City Centre", distanceKm: "35 km", approxTime: "40 – 50 mins via Katunayake Expressway", notes: "Direct access to central hotels and Galle Face" },
    { destination: "Kandy", distanceKm: "115 km", approxTime: "3 – 3.5 hours", notes: "Via Central Expressway and scenic hill routes" },
    { destination: "Sigiriya / Dambulla", distanceKm: "145 km", approxTime: "3.5 – 4 hours", notes: "Direct route to the ancient Cultural Triangle" },
    { destination: "Galle / Unawatuna", distanceKm: "155 km", approxTime: "2 – 2.5 hours via Southern Expressway", notes: "Fast toll-highway straight to southern beaches" },
    { destination: "Ella / Hill Country", distanceKm: "210 km", approxTime: "5 – 5.5 hours", notes: "Spectacular scenic mountain climb" }
  ],
  faqs: [
    {
      question: "What happens if our flight to Sri Lanka is delayed?",
      answer: "We track your flight number in real-time. If your flight is delayed or lands early, your driver will automatically adjust their arrival time at no additional charge."
    },
    {
      question: "Where do we meet the driver at Colombo Airport?",
      answer: "Your driver will be waiting in the main arrivals concourse just past customs, holding a clear name board with your name."
    }
  ] as FAQItem[]
};
