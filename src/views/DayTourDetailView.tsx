import React from 'react';
import { DayTourPackage } from '../data/dayTours';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { 
  Check, 
  X, 
  Clock, 
  MapPin, 
  Car, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  UserCheck
} from 'lucide-react';

interface DayTourDetailViewProps {
  tour: DayTourPackage;
  onNavigate: (path: string) => void;
}

export const DayTourDetailView: React.FC<DayTourDetailViewProps> = ({ tour, onNavigate }) => {
  useSEO({
    title: tour.metaTitle,
    description: tour.metaDescription,
    canonicalPath: `/day-tours/${tour.slug}/`,
    ogImage: tour.heroImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": tour.title,
      "description": tour.overview,
      "touristType": "DayTour",
      "offers": {
        "@type": "Offer",
        "description": "Private door-to-door day tour with personal vehicle and chauffeur guide.",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "TravelAgency",
        "name": COMPANY_INFO.name,
        "telephone": COMPANY_INFO.phone,
        "url": COMPANY_INFO.canonicalOrigin
      }
    }
  });

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello Kumar & Sons Tours, I am interested in booking the "${tour.title}". Could you please provide a quotation for my dates?`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: 'Day Tours', path: '/day-tours/' },
          { label: tour.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden bg-neutral-900 text-white min-h-[400px] flex items-end">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width="1200"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-2">
            <span>Private Day Excursion</span>
            <span aria-hidden="true">&middot;</span>
            <span>{tour.duration}</span>
            <span aria-hidden="true">&middot;</span>
            <span>Chauffeur Guide</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {tour.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-200 leading-relaxed">
            {tour.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>

            <a
              href="#day-tour-enquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <span>Request Quotation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Specs Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border border-neutral-200 rounded-xl p-5 shadow-xs text-xs">
        <div>
          <span className="text-neutral-500 block mb-0.5">Duration</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-700" />
            {tour.duration}
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Starting Point</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-700" />
            Hotel Pickup
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Transport</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Car className="w-4 h-4 text-amber-700" />
            Private A/C Vehicle
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Guide</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-amber-700" />
            English Driver Guide
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-10">
          
          {/* Overview */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">
              Tour Overview
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {tour.overview}
            </p>
          </section>

          {/* Highlights */}
          <section className="bg-amber-50/50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-3">
              Day Tour Highlights
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Hour-by-Hour Schedule */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-neutral-900">
              Suggested Day Itinerary &amp; Timeline
            </h2>
            <div className="relative border-l border-amber-200 ml-4 pl-6 space-y-6">
              {tour.schedule.map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-amber-600 border-2 border-white" />
                  <div className="text-xs font-semibold text-amber-800 font-mono mb-0.5">
                    {item.time}
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                    {item.activity}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-emerald-950 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-700" />
                What's Included
              </h3>
              <ul className="space-y-2 text-xs text-emerald-900">
                {tour.included.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">&bull;</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <X className="w-5 h-5 text-neutral-500" />
                What's Excluded
              </h3>
              <ul className="space-y-2 text-xs text-neutral-600">
                {tour.excluded.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-400">&bull;</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Suitable For & Optional Add-ons */}
          <section className="bg-white border border-neutral-200 rounded-xl p-6 space-y-4">
            <div>
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                Suitability
              </span>
              <p className="text-xs sm:text-sm text-neutral-800">
                {tour.suitableFor}
              </p>
            </div>

            {tour.optionalAddons.length > 0 && (
              <div className="pt-3 border-t border-neutral-100">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                  Optional Add-Ons &amp; Customizations:
                </span>
                <ul className="space-y-1 text-xs text-neutral-700">
                  {tour.optionalAddons.map((addon, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{addon}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* FAQs */}
          <FAQAccordion faqs={tour.faqs} title="Day Tour Questions &amp; Answers" />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                Private Day Trip
              </span>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                Instant Quotation
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                Send your date and pickup hotel. We confirm availability and provide transparent local rates within hours.
              </p>

              <div className="space-y-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="#day-tour-enquiry"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs rounded-lg transition-colors"
                >
                  <span>Submit Web Enquiry</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>100% Private Door-to-Door</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free hotel pickup &amp; drop-off</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Enquiry Form */}
      <section id="day-tour-enquiry">
        <EnquiryForm
          initialTour={tour.title}
          headline={`Inquire About: ${tour.title}`}
          subheadline="Provide your pickup location and preferred date for a quick confirmation."
        />
      </section>
    </div>
  );
};
