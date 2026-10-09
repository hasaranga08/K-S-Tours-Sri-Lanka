import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { DAY_TOURS } from '../data/dayTours';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Clock, MapPin, ArrowRight, MessageCircle, ShieldCheck, Compass } from 'lucide-react';

interface DayToursListViewProps {
  onNavigate: (path: string) => void;
}

export const DayToursListView: React.FC<DayToursListViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "Sri Lanka Day Tours | Private Day Trips & Excursions | KS Tours",
    description: "Book private Sri Lanka day tours: Sigiriya Rock & Dambulla, Kandy Cultural Tour, Galle Dutch Fort, Nuwara Eliya Tea Country, and Yala safari day trips with private chauffeur.",
    canonicalPath: "/day-tours/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": DAY_TOURS.map((dt, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": dt.title,
        "url": `${COMPANY_INFO.canonicalOrigin}/day-tours/${dt.slug}/`
      }))
    }
  });

  const dayTourFaqs = [
    {
      question: "Are your Sri Lanka day tours completely private?",
      answer: "Yes, every day tour is 100% private for you and your travel companions. You will have your own dedicated air-conditioned car or passenger van with a professional English-speaking driver guide. You set the pace and can stop whenever you like."
    },
    {
      question: "Where can we be picked up for a day tour?",
      answer: "We offer pickup directly from your hotel, villa, or residence in Colombo, Negombo, Kandy, Galle, Bentota, or directly from Bandaranaike International Airport."
    },
    {
      question: "How do we book a day trip?",
      answer: "Simply message us directly on WhatsApp (+94 77 774 1615) with your date and pickup location, or complete the quick enquiry form below. We confirm bookings quickly."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Day Tours' }]} onNavigate={onNavigate} />

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
          Private Island Excursions
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
          Sri Lanka Day Tours &amp; Private Day Trips
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
          Short on time or based at a beach resort? Our private day tours offer convenient, door-to-door full-day excursions to Sri Lanka's greatest ancient wonders, tea-covered mountains, wildlife safaris, and colonial forts with dedicated chauffeur guides.
        </p>
      </div>

      {/* Day Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DAY_TOURS.map((tour) => {
          const tourUrl = `/day-tours/${tour.slug}/`;
          return (
            <article
              key={tour.id}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden flex flex-col hover:border-neutral-300 transition-all hover:shadow-md group"
            >
              <a
                href={tourUrl}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(tourUrl);
                }}
                className="block relative aspect-[16/9] overflow-hidden bg-neutral-100"
              >
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="225"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2.5 left-2.5 text-xs font-semibold text-white bg-neutral-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded">
                  {tour.duration}
                </span>
              </a>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-1.5">
                    <span>Private Day Tour</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>A/C Transport</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>Chauffeur Guide</span>
                  </div>

                  <h2 className="font-serif text-lg font-bold text-neutral-900 leading-snug group-hover:text-amber-800 transition-colors">
                    <a
                      href={tourUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(tourUrl);
                      }}
                    >
                      {tour.title}
                    </a>
                  </h2>

                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {tour.overview}
                  </p>

                  <div className="mt-3 text-xs text-neutral-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span className="line-clamp-1">Starts: {tour.startPoint}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I am interested in booking the "${tour.title}". Could you please provide a quote?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={tourUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(tourUrl);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Day Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <FAQAccordion faqs={dayTourFaqs} title="Questions About Private Day Tours" />

      <EnquiryForm headline="Book or Inquire About a Day Tour" />
    </div>
  );
};
