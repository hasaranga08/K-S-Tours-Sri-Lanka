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
      question: "Do I have to provide accommodation or food for the driver?",
      answer: "No. Most hotels and resorts in Sri Lanka provide complimentary driver quarters and meals. If your boutique hotel or Airbnb does not have driver accommodation, our quotation covers the driver's lodging so you never have to worry."
    },
    {
      question: "Are your drivers English-speaking?",
      answer: "Yes, all our drivers speak good English, and Kumar also speaks conversational German. They are knowledgeable about local history, culture, routes, and wildlife."
    },
    {
      question: "Can we change our daily plans on the road?",
      answer: "Yes! That is the greatest advantage of a private driver. If you feel tired, want to linger longer at a waterfall, or stop for tea tasting, your driver adapts seamlessly."
    },
    {
      question: "How do we book a driver?",
      answer: "Simply send us your itinerary or travel dates via WhatsApp (+94 77 774 1615) or our website enquiry form. We will provide an itemized quote within hours."
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
