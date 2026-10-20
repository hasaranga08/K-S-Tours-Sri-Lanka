import React from 'react';
import { TravelRoute } from '../types';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { DESTINATIONS } from '../data/destinations';
import { TOURS } from '../data/tours';
import { DAY_TOURS } from '../data/dayTours';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { 
  Navigation, 
  Clock, 
  MapPin, 
  Car, 
  Train, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface RouteDetailViewProps {
  route: TravelRoute;
  onNavigate: (path: string) => void;
}

export const RouteDetailView: React.FC<RouteDetailViewProps> = ({ route, onNavigate }) => {
  useSEO({
    title: route.metaTitle,
    description: route.metaDescription,
    canonicalPath: `/routes/${route.slug}/`,
    ogImage: route.heroImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": route.title,
      "description": route.metaDescription,
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": route.fromCity
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": route.toCity
          }
        ]
      },
      "provider": {
        "@type": "TravelAgency",
        "name": COMPANY_INFO.name,
        "telephone": COMPANY_INFO.phone,
        "url": COMPANY_INFO.canonicalOrigin
      }
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: 'Travel Routes' },
          { label: `${route.fromCity} to ${route.toCity}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden bg-neutral-900 text-white min-h-[380px] flex items-end">
        <img
          src={route.heroImage}
          alt={route.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width="1200"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-2">
            <span>Sri Lanka Route Guide</span>
            <span aria-hidden="true">&middot;</span>
            <span>{route.fromCity} &rarr; {route.toCity}</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {route.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I would like to book a private tour/driver from ${route.fromCity} to ${route.toCity}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book This Route on WhatsApp</span>
            </a>

            <a
              href="#route-enquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <span>Get Route Quotation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Route Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border border-neutral-200 rounded-xl p-5 shadow-xs text-xs">
        <div>
          <span className="text-neutral-500 block mb-0.5">Route</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-amber-700" />
            {route.fromCity} to {route.toCity}
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Distance</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-700" />
            {route.distanceKm}
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Drive Time</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-700" />
            {route.driveTimeHours}
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Transport</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Car className="w-4 h-4 text-amber-700" />
            Car or Train
          </span>
        </div>
      </div>

      {/* Overview & Transport Options */}
      <section className="space-y-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
            Route Overview &amp; How to Travel
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl">
            {route.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {route.transportOptions.map((opt, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-2xs space-y-3">
              <div className="flex items-center gap-2">
                {opt.type.toLowerCase().includes('train') ? (
                  <Train className="w-5 h-5 text-amber-700" />
                ) : (
                  <Car className="w-5 h-5 text-amber-700" />
                )}
                <h3 className="font-serif font-bold text-base text-neutral-900">
                  {opt.type}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {opt.details}
              </p>
              {opt.recommendation && (
                <div className="pt-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded inline-block">
                  {opt.recommendation}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Suggested Scenic Stops */}
      <section className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
          Suggested Scenic Stops Along the Route
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {route.suggestedStops.map((stop, sIdx) => (
            <div key={sIdx} className="bg-white border border-neutral-200 rounded-xl p-4">
              <h4 className="font-serif font-bold text-sm text-neutral-900 mb-1">
                {stop.name}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {stop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Connected Destinations & Tours Along This Route */}
      <section className="space-y-6 pt-6 border-t border-neutral-200">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
            Connected Highlights
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
            Destinations &amp; Tours on This Route
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Explore key travel destinations and private tour packages that feature the {route.fromCity} to {route.toCity} journey.
          </p>
        </div>

        {/* Connected Destinations */}
        {route.relatedDestinations && route.relatedDestinations.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Key Stops &amp; Nearby Destinations:
            </h3>
            <div className="flex flex-wrap gap-2">
              {route.relatedDestinations.map((slug) => {
                const dest = DESTINATIONS.find((d) => d.slug === slug);
                return (
                  <a
                    key={slug}
                    href={`/destinations/${slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/destinations/${slug}/`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 hover:border-amber-400 hover:bg-amber-50 rounded-lg text-xs font-medium text-neutral-800 transition-colors shadow-2xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>{dest ? dest.name : slug}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Connected Tours */}
        {route.relatedTours && route.relatedTours.length > 0 && (
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Tours Including This Route:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {route.relatedTours.map((tSlug) => {
                const tour = TOURS.find((t) => t.slug === tSlug);
                const dayTour = DAY_TOURS.find((dt) => dt.slug === tSlug);
                const item = tour || dayTour;
                if (!item) return null;
                const path = tour ? `/itineraries/${item.slug}/` : `/day-tours/${item.slug}/`;
                return (
                  <a
                    key={tSlug}
                    href={path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(path);
                    }}
                    className="p-3 bg-white border border-neutral-200 hover:border-neutral-300 rounded-xl flex items-center justify-between text-xs font-semibold text-neutral-800 hover:text-amber-800 shadow-2xs transition-colors group"
                  >
                    <span className="line-clamp-1">{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* FAQs */}
      <FAQAccordion faqs={route.faqs} title={`Frequently Asked Questions: ${route.fromCity} to ${route.toCity}`} />

      {/* Enquiry Form */}
      <section id="route-enquiry">
        <EnquiryForm
          initialTour={`Route: ${route.fromCity} to ${route.toCity}`}
          headline={`Inquire About Travel from ${route.fromCity} to ${route.toCity}`}
          subheadline="Let us know your travel date and preferred transport option for a transparent quotation."
        />
      </section>
    </div>
  );
};
