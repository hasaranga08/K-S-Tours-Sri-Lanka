export interface TourDay {
  day: number;
  title: string;
  description: string;
  stayLocation?: string;
  mealsIncluded?: string;
  highlights?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  durationDays: number;
  durationLabel: string;
  category: 'classic' | 'honeymoon' | 'family' | 'safari' | 'tailor-made' | 'short';
  tagline: string;
  heroImage: string;
  startLocation: string;
  endLocation: string;
  destinations: string[];
  overview: string;
  highlights: string[];
  itinerary: TourDay[];
  included: string[];
  excluded: string[];
  faqs: FAQItem[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  featured?: boolean;
}

export interface Destination {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  region: string;
  heroImage: string;
  galleryImages?: { src: string; alt: string; caption?: string }[];
  intro: string;
  highlights: string[];
  bestTimeToVisit: string;
  suggestedDuration?: string;
  howToGetThere: string;
  whatToCombineWith?: string;
  thingsToDo: { title: string; description: string }[];
  faqs: FAQItem[];
  relatedTours: string[];
  relatedDestinations: string[];
}

export interface TravelRoute {
  slug: string;
  title: string;
  fromCity: string;
  toCity: string;
  metaTitle: string;
  metaDescription: string;
  distanceKm: string;
  driveTimeHours: string;
  trainTimeHours?: string;
  heroImage: string;
  overview: string;
  transportOptions: { type: string; details: string; recommendation?: string }[];
  suggestedStops: { name: string; description: string }[];
  faqs: FAQItem[];
  relatedDestinations: string[];
  relatedTours: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  content: string; // rich markdown / HTML
  relatedTours: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  source: 'TripAdvisor' | 'Direct';
  quote: string;
  tourTaken?: string;
  date?: string;
  verified: boolean;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  whatsappPhone: string;
  country: string;
  travelDates: string;
  numberOfDays: string;
  adults: number;
  children: number;
  interestedTour?: string;
  preferredDestinations?: string[];
  accommodationType?: string;
  message: string;
}
