import React from 'react';
import { Destination } from '../types';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { TourCard } from '../components/TourCard';
import { TOURS } from '../data/tours';
import { DAY_TOURS } from '../data/dayTours';
import { DESTINATIONS } from '../data/destinations';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { 
  Check, 
  MapPin, 
  Clock, 
  Car, 
  Compass, 
  MessageCircle, 
  ArrowRight,
  Sun,
  Navigation,
  Sparkles,
  Camera
} from 'lucide-react';

interface DestinationDetailViewProps {
  destination: Destination;
  onNavigate: (path: string) => void;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({ destination, onNavigate }) => {
  useSEO({
    title: destination.metaTitle,
    description: destination.metaDescription,
    canonicalPath: `/destinations/${destination.slug}/`,
    ogImage: destination.heroImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": destination.name,
      "description": destination.intro,
      "touristType": ["Culture", "Nature", "Adventure", "Sightseeing"],
      "image": `${COMPANY_INFO.canonicalOrigin}${destination.heroImage}`
    }
  });

  const matchingTours = TOURS.filter((t) => 
    t.destinations.some((d) => d.toLowerCase().includes(destination.name.toLowerCase()))
  );

  const matchingDayTours = DAY_TOURS.filter((dt) =>
    dt.title.toLowerCase().includes(destination.name.toLowerCase()) ||
    dt.relatedDestinations.includes(destination.slug)
  );

  const relatedDestinations = DESTINATIONS.filter((d) => 
    destination.relatedDestinations?.includes(d.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: 'Destinations', path: '/destinations/' },
          { label: destination.name }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden bg-neutral-900 text-white min-h-[420px] flex items-end">
        <img
          src={destination.heroImage}
          alt={destination.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width="1200"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        
        <div className="relative z-10 p-6 sm:p-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-2">
            <span>{destination.region}</span>
            <span aria-hidden="true">&middot;</span>
            <span>Sri Lanka Travel Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {destination.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-200 leading-relaxed">
            {destination.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I am planning to visit ${destination.name}. Can you help organize a private tour or driver?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About {destination.name} on WhatsApp</span>
            </a>

            <a
              href="#destination-enquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <span>Request Custom Tour</span>
            </a>
          </div>
        </div>
      </section>

      {/* Destination Quick Summary Bar */}
      {(destination.suggestedDuration || destination.whatToCombineWith) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border border-neutral-200 rounded-xl p-5 shadow-xs text-xs">
          {destination.suggestedDuration && (
            <div>
              <span className="text-neutral-500 block mb-0.5">Recommended Time to Spend</span>
              <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-700" />
                {destination.suggestedDuration}
              </span>
            </div>
          )}
          {destination.whatToCombineWith && (
            <div>
              <span className="text-neutral-500 block mb-0.5">What to Combine With</span>
              <span className="font-semibold text-neutral-900 text-xs flex items-center gap-1.5 leading-snug">
                <Compass className="w-4 h-4 text-amber-700 shrink-0" />
                {destination.whatToCombineWith}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Multiple Authentic Photos Gallery */}
      {destination.galleryImages && destination.galleryImages.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
              Photographs of {destination.name} &amp; Real Journeys
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {destination.galleryImages.map((img, idx) => (
              <figure key={idx} className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200 shadow-2xs">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
                {img.caption && (
                  <figcaption className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium leading-snug drop-shadow-xs">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Highlights Grid */}
      <section className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 sm:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
          Key Highlights of {destination.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {destination.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
              <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Travel Info: Best Time & Transport */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 rounded-xl p-6">
          <div className="flex items-center gap-2.5 mb-3 text-amber-800">
            <Sun className="w-5 h-5" />
            <h3 className="font-serif font-bold text-lg text-neutral-900">
              Best Time to Visit
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {destination.bestTimeToVisit}
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-6">
          <div className="flex items-center gap-2.5 mb-3 text-amber-800">
            <Navigation className="w-5 h-5" />
            <h3 className="font-serif font-bold text-lg text-neutral-900">
              How to Get There
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {destination.howToGetThere}
          </p>
        </div>
      </section>

      {/* Top Things to Do */}
      <section className="space-y-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-neutral-900">
            Top Things to Do &amp; Experience in {destination.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Curated attractions and insider experiences recommended by our local drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.thingsToDo.map((thing, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-2xs">
              <span className="text-xs font-semibold text-amber-700 block mb-1">
                Experience 0{idx + 1}
              </span>
              <h4 className="font-serif font-bold text-base text-neutral-900 mb-2">
                {thing.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {thing.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Day Tours Available For This Destination */}
      {matchingDayTours.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-0.5">
                Single Day Excursions
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Day Tours Visiting {destination.name}
              </h3>
            </div>
            <button
              onClick={() => onNavigate('/day-tours/')}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>All Day Tours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchingDayTours.map((dt) => (
              <a
                key={dt.id}
                href={`/day-tours/${dt.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/day-tours/${dt.slug}/`);
                }}
                className="bg-white border border-neutral-200 rounded-xl p-4 flex flex-col justify-between hover:border-neutral-300 shadow-2xs transition-colors group"
              >
                <div>
                  <span className="text-[11px] font-semibold text-amber-800 block mb-1">{dt.duration}</span>
                  <h4 className="font-serif font-bold text-sm text-neutral-900 group-hover:text-amber-800">
                    {dt.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                    {dt.overview}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-amber-800">
                  <span>View Day Tour</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Multi-Day Tours Visiting this Destination */}
      {matchingTours.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                Multi-Day Itineraries Including {destination.name}
              </span>
              <h2 className="font-serif text-2xl font-bold text-neutral-900">
                Tour Packages That Visit {destination.name}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/sri-lanka-tours/')}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View All Itineraries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchingTours.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      )}

      {/* Destination FAQs */}
      <FAQAccordion
        faqs={destination.faqs}
        title={`Questions About Visiting ${destination.name}`}
      />

      {/* Nearby Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="pt-6 border-t border-neutral-200">
          <h3 className="font-serif text-xl font-bold text-neutral-900 mb-4">
            Nearby &amp; Combining Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedDestinations.map((relDest) => (
              <a
                key={relDest.slug}
                href={`/destinations/${relDest.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/destinations/${relDest.slug}/`);
                }}
                className="p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-serif font-bold text-sm text-neutral-900 group-hover:text-amber-800">
                    {relDest.name}
                  </h4>
                  <span className="text-[11px] text-neutral-500">{relDest.region}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Enquiry Form */}
      <section id="destination-enquiry">
        <EnquiryForm
          headline={`Plan Your Visit to ${destination.name}`}
          subheadline={`Let us know how many days you'd like to spend in ${destination.name} and what else you'd like to see.`}
        />
      </section>
    </div>
  );
};
