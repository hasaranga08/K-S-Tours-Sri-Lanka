import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { TOURS } from '../data/tours';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { TourCard } from '../components/TourCard';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { ArrowRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface ItinerariesComparisonViewProps {
  onNavigate: (path: string) => void;
}

export const ItinerariesComparisonView: React.FC<ItinerariesComparisonViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "Sri Lanka Itineraries | 7, 10 & 14 Day Tour Comparisons | KS Tours",
    description: "Compare classic Sri Lanka itineraries: 7-day cultural circuit, 10-day highlights & safari, and 14-day grand island exploration with Kumar & Sons Tours.",
    canonicalPath: "/itineraries/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Sri Lanka Itineraries & Tour Duration Guide",
      "description": "Compare proven 7-day, 10-day, and 14-day private routes in Sri Lanka.",
      "url": "https://www.kstourssrilanka.com/itineraries/"
    }
  });

  const durationTours = TOURS.filter((t) => t.category === 'classic');

  const comparisonFaqs = [
    {
      question: "How many days do I need for a good trip to Sri Lanka?",
      answer: "We recommend at least 10 days. 10 days provides the optimal balance to explore the Cultural Triangle (Sigiriya/Dambulla), the sacred city of Kandy, take the scenic blue train to Ella, experience a leopard safari in Yala, and relax on southern beaches without feeling rushed."
    },
    {
      question: "Is 7 days enough for Sri Lanka?",
      answer: "A 7-day tour is ideal if you want to focus either on the cultural and mountain highlights (Sigiriya, Kandy, Nuwara Eliya) or a combination of coastal beaches and wildlife. Our 7-Day Classic tour covers ancient palaces, royal temples, and tea estates smoothly."
    },
    {
      question: "What does the 14-day itinerary include that shorter tours skip?",
      answer: "The 14-day tour allows you to visit both ancient UNESCO capitals (Anuradhapura and Polonnaruwa), trek World's End in Horton Plains, take both Minneriya and Yala safaris, embark on a whale watching cruise in Mirissa, and enjoy multiple leisurely days at boutique beach retreats."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Sri Lanka Itineraries & Tour Duration Guide"
        subtitle="Choosing the right itinerary duration depends on your travel pace and holiday priorities. Compare our proven 7-day, 10-day, and 14-day private routes to find the perfect framework for your holiday."
        badge="Duration-Based Travel Architecture"
        breadcrumbs={[{ label: 'Sri Lanka Itineraries' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {durationTours.map((tour) => (
          <div key={tour.id} className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{tour.durationLabel}</span>
              </div>

              <h2 className="font-serif font-bold text-xl text-neutral-900 mb-3">
                {tour.title}
              </h2>

              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                {tour.overview}
              </p>

              <div className="border-t border-neutral-100 pt-4 mb-4">
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                  Destinations Included:
                </span>
                <div className="flex flex-wrap gap-1 text-xs text-neutral-700">
                  {tour.destinations.join(' &middot; ')}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate(`/itineraries/${tour.slug}/`)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>View Full Day-by-Day Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Tour Cards */}
      <section className="space-y-6 pt-6 border-t border-neutral-200">
        <h3 className="font-serif text-2xl font-bold text-neutral-900">
          Detailed Itinerary Packages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {durationTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      <FAQAccordion faqs={comparisonFaqs} />

      <EnquiryForm headline="Have a Different Number of Days in Mind?" />
    </div>
  </div>
);
};
