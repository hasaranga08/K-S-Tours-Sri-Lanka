import React, { useState, useMemo } from 'react';
import { TourPackage } from '../types';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { CustomerGallery } from '../components/CustomerGallery';
import { TourCard } from '../components/TourCard';
import { TOURS } from '../data/tours';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { 
  Check, 
  X, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  ShieldCheck, 
  MessageCircle, 
  ChevronDown, 
  Share2,
  Clock
} from 'lucide-react';

interface TourDetailViewProps {
  tour: TourPackage;
  onNavigate: (path: string) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({ tour, onNavigate }) => {
  // Independent accordion open state per day: does not collapse other days, preventing layout shifts
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 1: true });

  const toggleDay = (dayNum: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  const allOpen = useMemo(() => {
    return tour.itinerary.every((d) => !!openDays[d.day]);
  }, [tour.itinerary, openDays]);

  const toggleAll = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !allOpen;
    const updated: Record<number, boolean> = {};
    tour.itinerary.forEach((d) => {
      updated[d.day] = nextState;
    });
    setOpenDays(updated);
  };

  const tourSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.overview,
    "touristType": tour.category,
    "offers": {
      "@type": "Offer",
      "description": "Contact us for a personalized quotation based on party size and hotel preferences.",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "url": COMPANY_INFO.canonicalOrigin
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": tour.itinerary.map((d) => ({
        "@type": "ListItem",
        "position": d.day,
        "name": `Day ${d.day}: ${d.title}`,
        "description": d.description
      }))
    }
  }), [tour]);

  useSEO({
    title: tour.metaTitle,
    description: tour.metaDescription,
    canonicalPath: `/itineraries/${tour.slug}/`,
    ogImage: tour.heroImage,
    schema: tourSchema
  });

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello Kumar & Sons Tours, I am interested in booking or customizing the "${tour.title}" (${tour.durationLabel}). Could you please share quotation and availability?`
  );

  const relatedTours = TOURS.filter((t) => t.id !== tour.id && (t.category === tour.category || t.featured)).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: 'Sri Lanka Tours', path: '/sri-lanka-tours/' },
          { label: tour.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Tour Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden bg-neutral-900 text-white min-h-[420px] flex items-end">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width="1200"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        
        <div className="relative z-10 p-6 sm:p-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-semibold mb-2">
            <span className="capitalize">{tour.category} Package</span>
            <span aria-hidden="true">&middot;</span>
            <span>{tour.durationLabel}</span>
            <span aria-hidden="true">&middot;</span>
            <span>Private Chauffeur Tour</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {tour.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
            {tour.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About This Tour on WhatsApp</span>
            </a>

            <a
              href="#tour-enquiry"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <span>Get Custom Quotation</span>
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
            {tour.durationLabel}
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Start &amp; Finish</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-700" />
            {tour.startLocation.split('/')[0]}
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Tour Type</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-700" />
            100% Private Guided
          </span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-0.5">Transport</span>
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Car className="w-4 h-4 text-amber-700" />
            Private A/C Vehicle
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Overview, Highlights, Day-by-day Itinerary */}
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

          {/* Key Highlights */}
          <section className="bg-amber-50/50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-serif text-lg font-bold text-neutral-900 mb-3">
              Trip Highlights
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
              {tour.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Day-by-Day Itinerary */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-neutral-900">
                  Day-by-Day Itinerary
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Click any day to expand or collapse details.
                </p>
              </div>

              <button
                type="button"
                onClick={toggleAll}
                className="text-xs font-semibold text-amber-800 hover:text-amber-950 cursor-pointer select-none"
              >
                {allOpen ? 'Collapse All Days' : 'Expand All Days'}
              </button>
            </div>

            <div className="space-y-3">
              {tour.itinerary.map((day) => {
                const isOpen = !!openDays[day.day];
                return (
                  <div
                    key={day.day}
                    className="border border-neutral-200 rounded-xl overflow-hidden bg-white transition-colors"
                  >
                    <button
                      type="button"
                      onClick={(e) => toggleDay(day.day, e)}
                      aria-expanded={isOpen}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                          {day.day}
                        </span>
                        <div>
                          <span className="text-[11px] font-semibold text-neutral-400 block uppercase tracking-wider">
                            Day {day.day}
                          </span>
                          <h4 className="font-serif font-bold text-sm sm:text-base text-neutral-900">
                            {day.title}
                          </h4>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-700' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-3">
                        <p>{day.description}</p>
                        {day.stayLocation && (
                          <div className="flex items-center gap-2 text-xs text-neutral-500 pt-2 border-t border-dashed border-neutral-200">
                            <MapPin className="w-3.5 h-3.5 text-amber-700" />
                            <span>Overnight Stay: <strong className="text-neutral-800">{day.stayLocation}</strong></span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
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
                {tour.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">&bull;</span>
                    <span>{item}</span>
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
                {tour.excluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-400">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tour FAQs */}
          <FAQAccordion faqs={tour.faqs} title="Questions About This Itinerary" />
        </div>

        {/* Right Sidebar: Sticky Quotation & Driver Card */}
        <div className="space-y-6">
          <div className="sticky top-28 space-y-6">
            
            {/* Quick WhatsApp & Call Action Box */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                Custom Quotation
              </span>
              <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                Personalized Tour Price
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                We customize the price according to your party size, preferred hotel tier, and starting date with direct local rates.
              </p>

              <div className="space-y-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp Now</span>
                </a>

                <a
                  href="#tour-enquiry"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-xs rounded-lg transition-colors"
                >
                  <span>Submit Web Enquiry Form</span>
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Nearly 40 Years of Safe Guiding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free itinerary modifications anytime</span>
                </div>
              </div>
            </div>

            {/* Operator Credentials */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 text-xs text-neutral-600 space-y-3">
              <h4 className="font-serif font-bold text-sm text-neutral-900">
                Your Chauffeur Guide Team
              </h4>
              <p className="leading-relaxed">
                Led by Kumar and his son Chathu, Kumar &amp; Sons Tours ensures every vehicle is strictly maintained, clean, air-conditioned, and fully insured.
              </p>
              <div className="pt-2 text-neutral-900 font-medium">
                Direct Hotline: {COMPANY_INFO.phone}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Real Customer Photographs On Tour */}
      <section className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 shadow-2xs">
        <CustomerGallery
          title="Moments From Real Sri Lanka Journeys"
          subtitle="Genuine snapshots of travelers exploring cultural citadels, tea country trains, and wildlife safaris with Kumar & Sons Tours."
          maxItems={4}
        />
      </section>

      {/* Embedded Enquiry Form */}
      <section id="tour-enquiry" className="pt-4">
        <EnquiryForm
          initialTour={tour.title}
          headline={`Inquire About: ${tour.title}`}
          subheadline="Submit your details below and we will prepare a personalized itinerary proposal for your dates."
        />
      </section>

      {/* Related Tour Packages */}
      {relatedTours.length > 0 && (
        <section className="pt-10 border-t border-neutral-200">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
            Other Popular Sri Lanka Tours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTours.map((relTour) => (
              <TourCard key={relTour.id} tour={relTour} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
