/**
 * Comprehensive Legacy URL Redirection Registry for KS Tours Sri Lanka.
 * Maps legacy URLs from previous websites (LiteSpeed / university project / old HTML)
 * to their exact permanent canonical destination routes on the new website.
 *
 * Implements 301-equivalent meta-refresh, canonical consolidation, and client-side routing.
 */

export interface LegacyRedirect {
  legacyPath: string; // e.g. "/10DayTour.html"
  targetPath: string; // canonical route, e.g. "/itineraries/10-day-sri-lanka-tour/"
  title: string;      // Human-readable title of destination
  category: 'itinerary' | 'day-tour' | 'gallery' | 'service' | 'trust' | 'category';
}

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  // =========================================================================
  // 19 Core Audited Legacy URLs (Explicit Migration Registry)
  // =========================================================================
  {
    legacyPath: "/gallery1.html",
    targetPath: "/gallery/",
    title: "KS Tours Sri Lanka Photo Gallery",
    category: "gallery"
  },
  {
    legacyPath: "/10DayTour.html",
    targetPath: "/itineraries/10-day-sri-lanka-tour/",
    title: "10-Day Sri Lanka Highlights, Scenic Train & Safari Tour",
    category: "itinerary"
  },
  {
    legacyPath: "/about.html",
    targetPath: "/about/",
    title: "About Kumar & Sons Tours Sri Lanka",
    category: "trust"
  },
  {
    legacyPath: "/testimonials.html",
    targetPath: "/about/",
    title: "Guest Reviews & TripAdvisor Testimonials",
    category: "trust"
  },
  {
    legacyPath: "/Experiences.html",
    targetPath: "/activities/",
    title: "Things to Do in Sri Lanka | Activities & Experiences",
    category: "category"
  },
  {
    legacyPath: "/contact.html",
    targetPath: "/contact/",
    title: "Contact Kumar & Sons Tours Sri Lanka",
    category: "trust"
  },
  {
    legacyPath: "/3DayTour.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },
  {
    legacyPath: "/Ayuruveda-details.html",
    targetPath: "/activities/",
    title: "Sri Lanka Activities & Wellness Experiences",
    category: "service"
  },
  {
    legacyPath: "/diving-details.html",
    targetPath: "/activities/",
    title: "Ocean Activities, Snorkeling & Diving in Sri Lanka",
    category: "category"
  },
  {
    legacyPath: "/tour-list2.html",
    targetPath: "/sri-lanka-tours/",
    title: "Sri Lanka Tours & Holiday Packages",
    category: "category"
  },
  {
    legacyPath: "/Surfing-details.html",
    targetPath: "/activities/",
    title: "Surfing, Snorkeling & Ocean Activities in Sri Lanka",
    category: "category"
  },
  {
    legacyPath: "/Safari-details.html",
    targetPath: "/sri-lanka-safari-tours/",
    title: "Sri Lanka Wildlife Safari Tours",
    category: "category"
  },
  {
    legacyPath: "/destination-list.html",
    targetPath: "/destinations/",
    title: "Sri Lanka Travel Destinations Directory",
    category: "category"
  },
  {
    legacyPath: "/kandy-day-tour.html",
    targetPath: "/day-tours/kandy-day-tour/",
    title: "Kandy Cultural Capital & Royal Botanical Gardens Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/sigiriya-day-tour.html",
    targetPath: "/day-tours/sigiriya-day-tour/",
    title: "Sigiriya Rock Fortress & Dambulla Caves Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/galle-day-tour.html",
    targetPath: "/day-tours/galle-day-tour/",
    title: "Galle Dutch Fort, Turtle Sanctuary & Madu River Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/Whale%20watching-details.html",
    targetPath: "/destinations/mirissa/",
    title: "Mirissa Blue Whale Watching Tours & Coastal Guide",
    category: "category"
  },
  {
    legacyPath: "/1Day-Tour%28Anuradhapura%29.html",
    targetPath: "/day-tours/anuradhapura-day-tour/",
    title: "Anuradhapura Sacred Ancient Kingdom Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/Custom%20Plan.html",
    targetPath: "/tailor-made-sri-lanka-tours/",
    title: "Tailor-Made Sri Lanka Tours & Custom Trip Planning",
    category: "category"
  },

  // =========================================================================
  // Decoded & Spelling Variants for the Core Legacy URLs
  // =========================================================================
  {
    legacyPath: "/Whale watching-details.html",
    targetPath: "/destinations/mirissa/",
    title: "Mirissa Blue Whale Watching Tours & Coastal Guide",
    category: "category"
  },
  {
    legacyPath: "/whale-watching-details.html",
    targetPath: "/destinations/mirissa/",
    title: "Mirissa Blue Whale Watching Tours & Coastal Guide",
    category: "category"
  },
  {
    legacyPath: "/1Day-Tour(Anuradhapura).html",
    targetPath: "/day-tours/anuradhapura-day-tour/",
    title: "Anuradhapura Sacred Ancient Kingdom Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/1day-tour(anuradhapura).html",
    targetPath: "/day-tours/anuradhapura-day-tour/",
    title: "Anuradhapura Sacred Ancient Kingdom Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/1day-tour-anuradhapura.html",
    targetPath: "/day-tours/anuradhapura-day-tour/",
    title: "Anuradhapura Sacred Ancient Kingdom Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/Custom Plan.html",
    targetPath: "/tailor-made-sri-lanka-tours/",
    title: "Tailor-Made Sri Lanka Tours & Custom Trip Planning",
    category: "category"
  },
  {
    legacyPath: "/custom-plan.html",
    targetPath: "/tailor-made-sri-lanka-tours/",
    title: "Tailor-Made Sri Lanka Tours & Custom Trip Planning",
    category: "category"
  },
  {
    legacyPath: "/Ayurveda-details.html",
    targetPath: "/activities/",
    title: "Sri Lanka Activities & Wellness Experiences",
    category: "service"
  },
  {
    legacyPath: "/ayurveda-details.html",
    targetPath: "/activities/",
    title: "Sri Lanka Activities & Wellness Experiences",
    category: "service"
  },

  // =========================================================================
  // Additional Legacy Photo Galleries
  // =========================================================================
  {
    legacyPath: "/gallery2.html",
    targetPath: "/gallery/",
    title: "KS Tours Sri Lanka Photo Gallery",
    category: "gallery"
  },
  {
    legacyPath: "/gallery3.html",
    targetPath: "/gallery/",
    title: "KS Tours Sri Lanka Photo Gallery",
    category: "gallery"
  },

  // =========================================================================
  // Multi-Day Tour Variations
  // =========================================================================
  {
    legacyPath: "/14DayTour.html",
    targetPath: "/itineraries/14-day-sri-lanka-tour/",
    title: "14-Day Grand Island Explorer & Beach Retreat",
    category: "itinerary"
  },
  {
    legacyPath: "/14DaysTour.html",
    targetPath: "/itineraries/14-day-sri-lanka-tour/",
    title: "14-Day Grand Island Explorer & Beach Retreat",
    category: "itinerary"
  },
  {
    legacyPath: "/7DayTour.html",
    targetPath: "/itineraries/7-day-sri-lanka-tour/",
    title: "7-Day Classic Sri Lanka Cultural & Tea Country Tour",
    category: "itinerary"
  },
  {
    legacyPath: "/7DaysTour.html",
    targetPath: "/itineraries/7-day-sri-lanka-tour/",
    title: "7-Day Classic Sri Lanka Cultural & Tea Country Tour",
    category: "itinerary"
  },
  {
    legacyPath: "/8DayTour.html",
    targetPath: "/itineraries/8-day-romantic-ceylon-escape/",
    title: "8-Day Romantic Ceylon Escape & Coastal Luxury",
    category: "itinerary"
  },
  {
    legacyPath: "/8DaysTour.html",
    targetPath: "/itineraries/8-day-romantic-ceylon-escape/",
    title: "8-Day Romantic Ceylon Escape & Coastal Luxury",
    category: "itinerary"
  },
  {
    legacyPath: "/3DaysTour.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },
  {
    legacyPath: "/4DayTour.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },
  {
    legacyPath: "/4DaysTour.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },
  {
    legacyPath: "/4DaysTours.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },
  {
    legacyPath: "/5DayTour.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },
  {
    legacyPath: "/5DaysTour.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Packages & Itineraries Directory",
    category: "itinerary"
  },

  // =========================================================================
  // Shorthand Day Tours (ADayTour, CDayTour, GDayTour, KDayTour, NDayTour, SDayTour)
  // =========================================================================
  {
    legacyPath: "/ADayTour.html",
    targetPath: "/day-tours/anuradhapura-day-tour/",
    title: "Anuradhapura Sacred Ancient Kingdom Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/CDayTour.html",
    targetPath: "/day-tours/colombo-city-day-tour/",
    title: "Colombo City Heritage & Culture Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/GDayTour.html",
    targetPath: "/day-tours/galle-day-tour/",
    title: "Galle Dutch Fort & Coastal Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/KDayTour.html",
    targetPath: "/day-tours/kandy-day-tour/",
    title: "Kandy Cultural Capital & Royal Botanical Gardens Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/NDayTour.html",
    targetPath: "/day-tours/nuwara-eliya-day-tour/",
    title: "Nuwara Eliya Tea Country Day Tour",
    category: "day-tour"
  },
  {
    legacyPath: "/SDayTour.html",
    targetPath: "/day-tours/sigiriya-day-tour/",
    title: "Sigiriya Rock Fortress & Dambulla Caves Day Tour",
    category: "day-tour"
  },

  // =========================================================================
  // Trust, About & Testimonials
  // =========================================================================
  {
    legacyPath: "/about-us.html",
    targetPath: "/about/",
    title: "About Kumar & Sons Tours Sri Lanka",
    category: "trust"
  },
  {
    legacyPath: "/testimonial.html",
    targetPath: "/about/",
    title: "Guest Reviews & TripAdvisor Testimonials",
    category: "trust"
  },
  {
    legacyPath: "/testomonials.html",
    targetPath: "/about/",
    title: "Guest Reviews & TripAdvisor Testimonials",
    category: "trust"
  },
  {
    legacyPath: "/testomonial.html",
    targetPath: "/about/",
    title: "Guest Reviews & TripAdvisor Testimonials",
    category: "trust"
  },
  {
    legacyPath: "/reviews.html",
    targetPath: "/about/",
    title: "Guest Reviews & TripAdvisor Testimonials",
    category: "trust"
  },

  // =========================================================================
  // Contact & Inquiries
  // =========================================================================
  {
    legacyPath: "/contact-us.html",
    targetPath: "/contact/",
    title: "Contact Kumar & Sons Tours Sri Lanka",
    category: "trust"
  },
  {
    legacyPath: "/feedback.html",
    targetPath: "/contact/",
    title: "Contact & Traveler Feedback",
    category: "trust"
  },

  // =========================================================================
  // Services & Chauffeurs
  // =========================================================================
  {
    legacyPath: "/services.html",
    targetPath: "/sri-lanka-private-driver/",
    title: "Sri Lanka Private Driver & Chauffeur Services",
    category: "service"
  },
  {
    legacyPath: "/service.html",
    targetPath: "/sri-lanka-private-driver/",
    title: "Sri Lanka Private Driver & Chauffeur Services",
    category: "service"
  },
  {
    legacyPath: "/driver.html",
    targetPath: "/sri-lanka-private-driver/",
    title: "Sri Lanka Private Driver & Chauffeur Services",
    category: "service"
  },
  {
    legacyPath: "/privatedriver.html",
    targetPath: "/sri-lanka-private-driver/",
    title: "Sri Lanka Private Driver & Chauffeur Services",
    category: "service"
  },
  {
    legacyPath: "/private-driver.html",
    targetPath: "/sri-lanka-private-driver/",
    title: "Sri Lanka Private Driver & Chauffeur Services",
    category: "service"
  },
  {
    legacyPath: "/airport.html",
    targetPath: "/sri-lanka-airport-transfers/",
    title: "Sri Lanka Airport Transfers",
    category: "service"
  },
  {
    legacyPath: "/airporttransfer.html",
    targetPath: "/sri-lanka-airport-transfers/",
    title: "Sri Lanka Airport Transfers",
    category: "service"
  },
  {
    legacyPath: "/airporttransfers.html",
    targetPath: "/sri-lanka-airport-transfers/",
    title: "Sri Lanka Airport Transfers",
    category: "service"
  },
  {
    legacyPath: "/airport-transfers.html",
    targetPath: "/sri-lanka-airport-transfers/",
    title: "Sri Lanka Airport Transfers",
    category: "service"
  },

  // =========================================================================
  // Tour Hubs & Themes
  // =========================================================================
  {
    legacyPath: "/tours.html",
    targetPath: "/sri-lanka-tours/",
    title: "Sri Lanka Tours & Holiday Packages",
    category: "category"
  },
  {
    legacyPath: "/tour.html",
    targetPath: "/sri-lanka-tours/",
    title: "Sri Lanka Tours & Holiday Packages",
    category: "category"
  },
  {
    legacyPath: "/tourpackages.html",
    targetPath: "/sri-lanka-tours/",
    title: "Sri Lanka Tours & Holiday Packages",
    category: "category"
  },
  {
    legacyPath: "/tour-packages.html",
    targetPath: "/sri-lanka-tours/",
    title: "Sri Lanka Tours & Holiday Packages",
    category: "category"
  },
  {
    legacyPath: "/tailormade.html",
    targetPath: "/tailor-made-sri-lanka-tours/",
    title: "Tailor-Made Sri Lanka Tours",
    category: "category"
  },
  {
    legacyPath: "/tailor-made.html",
    targetPath: "/tailor-made-sri-lanka-tours/",
    title: "Tailor-Made Sri Lanka Tours",
    category: "category"
  },
  {
    legacyPath: "/honeymoon.html",
    targetPath: "/sri-lanka-honeymoon/",
    title: "Sri Lanka Honeymoon Packages",
    category: "category"
  },
  {
    legacyPath: "/honeymoontour.html",
    targetPath: "/sri-lanka-honeymoon/",
    title: "Sri Lanka Honeymoon Packages",
    category: "category"
  },
  {
    legacyPath: "/honeymoon-tour.html",
    targetPath: "/sri-lanka-honeymoon/",
    title: "Sri Lanka Honeymoon Packages",
    category: "category"
  },
  {
    legacyPath: "/safari.html",
    targetPath: "/sri-lanka-safari-tours/",
    title: "Sri Lanka Wildlife Safari Tours",
    category: "category"
  },
  {
    legacyPath: "/wildlife.html",
    targetPath: "/sri-lanka-safari-tours/",
    title: "Sri Lanka Wildlife Safari Tours",
    category: "category"
  },
  {
    legacyPath: "/family.html",
    targetPath: "/sri-lanka-family-tours/",
    title: "Sri Lanka Family Holiday Tours",
    category: "category"
  },
  {
    legacyPath: "/familytour.html",
    targetPath: "/sri-lanka-family-tours/",
    title: "Sri Lanka Family Holiday Tours",
    category: "category"
  },
  {
    legacyPath: "/family-tour.html",
    targetPath: "/sri-lanka-family-tours/",
    title: "Sri Lanka Family Holiday Tours",
    category: "category"
  },
  {
    legacyPath: "/activities.html",
    targetPath: "/activities/",
    title: "Things to Do in Sri Lanka & Tour Activities",
    category: "category"
  },
  {
    legacyPath: "/thingstodo.html",
    targetPath: "/activities/",
    title: "Things to Do in Sri Lanka & Tour Activities",
    category: "category"
  },
  {
    legacyPath: "/things-to-do.html",
    targetPath: "/activities/",
    title: "Things to Do in Sri Lanka & Tour Activities",
    category: "category"
  },
  {
    legacyPath: "/destinations.html",
    targetPath: "/destinations/",
    title: "Sri Lanka Travel Destinations Directory",
    category: "category"
  },
  {
    legacyPath: "/destination.html",
    targetPath: "/destinations/",
    title: "Sri Lanka Travel Destinations Directory",
    category: "category"
  },
  {
    legacyPath: "/destination-detail.html",
    targetPath: "/destinations/",
    title: "Sri Lanka Travel Destinations Directory",
    category: "category"
  },
  {
    legacyPath: "/destination_detail.html",
    targetPath: "/destinations/",
    title: "Sri Lanka Travel Destinations Directory",
    category: "category"
  },
  {
    legacyPath: "/itineraries.html",
    targetPath: "/itineraries/",
    title: "Sri Lanka Tour Itineraries Directory",
    category: "category"
  }
];

/**
 * Resolves any incoming requested path to its canonical route if it is a legacy URL.
 * Handles exact matches, case-insensitive matches, URL-encoding (%20, %28, %29),
 * and `.html` extensions.
 */
export function resolveLegacyRoute(rawPath: string): string | null {
  if (!rawPath) return null;

  // Clean path (strip hash & query strings, ensure single leading slash)
  const cleanPath = rawPath.split('?')[0].split('#')[0].trim();
  const normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;

  // Decode URI components if encoded
  let decoded = normalized;
  try {
    decoded = decodeURIComponent(normalized);
  } catch {
    // Keep decoded = normalized on error
  }

  const normLower = normalized.toLowerCase();
  const decLower = decoded.toLowerCase();

  // Helper function to test matching against a registry item
  const matchesItem = (item: LegacyRedirect): boolean => {
    const itemPath = item.legacyPath.toLowerCase();
    let itemDecoded = itemPath;
    try {
      itemDecoded = decodeURIComponent(itemPath);
    } catch {
      // ignore
    }

    // Direct matches
    if (
      normLower === itemPath ||
      normLower === itemDecoded ||
      decLower === itemPath ||
      decLower === itemDecoded
    ) {
      return true;
    }

    // Match without .html extension (e.g. "/10DayTour" vs "/10DayTour.html")
    const stripHtml = (p: string) => (p.endsWith('.html') ? p.slice(0, -5) : p);
    if (
      stripHtml(normLower) === stripHtml(itemPath) ||
      stripHtml(decLower) === stripHtml(itemDecoded)
    ) {
      return true;
    }

    return false;
  };

  const found = LEGACY_REDIRECTS.find(matchesItem);
  if (found) {
    return found.targetPath;
  }

  // Fallback: If path ends with .html and matches an existing standard clean path
  if (normLower.endsWith('.html')) {
    const stripped = normalized.slice(0, -5);
    const candidateRoute = stripped === '' ? '/' : (stripped.endsWith('/') ? stripped : `${stripped}/`);
    return candidateRoute;
  }

  return null;
}
