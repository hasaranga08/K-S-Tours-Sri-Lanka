import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';

interface DestinationsListViewProps {
  onNavigate: (path: string) => void;
}

export const DestinationsListView: React.FC<DestinationsListViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "Best Sri Lanka Travel Destinations & Guides | KS Tours",
    description: "Explore Sri Lanka's top travel destinations. Complete travel guides for Sigiriya, Kandy, Ella, Yala National Park, Nuwara Eliya, and Galle Fort with local tour insights.",
    canonicalPath: "/destinations/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Sri Lanka Destinations & Travel Guides",
      "description": "Comprehensive travel guides for top destinations across Sri Lanka.",
      "url": "https://www.kstourssrilanka.com/destinations/",
      "itemListElement": DESTINATIONS.map((dest, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": dest.name,
        "url": `https://www.kstourssrilanka.com/destinations/${dest.slug}/`
      }))
    }
  });

  const destinationFaqs = [
    {
      question: "Which destinations are a must-visit for a first trip to Sri Lanka?",
      answer: "For a first visit of 7 to 10 days, we recommend Sigiriya (ancient rock fortress), Kandy (cultural heart), Nuwara Eliya or Ella (tea country and scenic train), Yala (wildlife safari), and Galle (coastal fort and beaches)."
    },
    {
      question: "How long should we spend in each destination?",
      answer: "We typically recommend 2 nights in the Cultural Triangle (Sigiriya/Dambulla), 1–2 nights in Kandy, 2 nights in Ella or Nuwara Eliya, 1–2 nights in Yala, and 2–3 nights along the southern beaches."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Sri Lanka Destinations & Travel Guides"
        subtitle="From ancient 5th-century rock palaces rising above the rainforest canopy to misty mountain tea terraces and untamed leopard safaris, discover Sri Lanka's most iconic regions."
        badge="Topical Island Travel Intelligence"
        breadcrumbs={[{ label: 'Destinations' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DESTINATIONS.map((dest) => (
          <DestinationCard key={dest.slug} destination={dest} onNavigate={onNavigate} />
        ))}
      </div>

      <FAQAccordion faqs={destinationFaqs} />

      <EnquiryForm
        headline="Plan a Tour Visiting These Destinations"
        subheadline="Select the destinations you're most excited about and we will craft a logical, relaxed route for you."
      />
    </div>
  </div>
);
};
