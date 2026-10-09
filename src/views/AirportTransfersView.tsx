import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { AIRPORT_TRANSFERS_SERVICE } from '../data/services';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { Plane, Clock, ShieldCheck, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';

interface AirportTransfersViewProps {
  onNavigate: (path: string) => void;
}

export const AirportTransfersView: React.FC<AirportTransfersViewProps> = ({ onNavigate }) => {
  useSEO({
    title: AIRPORT_TRANSFERS_SERVICE.metaTitle,
    description: AIRPORT_TRANSFERS_SERVICE.metaDescription,
    canonicalPath: '/sri-lanka-airport-transfers/',
    ogImage: AIRPORT_TRANSFERS_SERVICE.heroImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Sri Lanka Airport Transfers & Chauffeur Taxis",
      "description": AIRPORT_TRANSFERS_SERVICE.metaDescription,
      "provider": {
        "@type": "TravelAgency",
        "name": COMPANY_INFO.name,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "url": COMPANY_INFO.canonicalOrigin
      },
      "areaServed": {
        "@type": "Airport",
        "name": "Bandaranaike International Airport (CMB)"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "description": "Fixed transparent rates including all expressway tolls, parking, fuel and flight delay monitoring."
      }
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Sri Lanka Airport Transfers & Chauffeur Taxis"
        subtitle="Start your holiday seamlessly with a private meet-and-greet transfer from Bandaranaike International Airport (CMB / Katunayake) with live flight monitoring and transparent pricing."
        badge="24/7 Flight Tracking & Meet-and-Greet"
        breadcrumbs={[{ label: 'Airport Transfers' }]}
        onNavigate={onNavigate}
        actions={
          <a
            href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to book an airport transfer from Colombo CMB Airport.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Airport Taxi on WhatsApp</span>
          </a>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">

      {/* Routes & Estimated Travel Times */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-neutral-900">
          Popular Airport Transfer Routes &amp; Drive Times
        </h2>
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="divide-y divide-neutral-200">
            {AIRPORT_TRANSFERS_SERVICE.popularRoutes.map((route, i) => (
              <div key={i} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-neutral-50 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Plane className="w-4 h-4 text-amber-700" />
                    <span className="text-xs text-neutral-400">CMB Airport &rarr;</span>
                    <h3 className="font-serif font-bold text-base text-neutral-900">
                      {route.destination}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500">
                    {route.notes}
                  </p>
                </div>

                <div className="flex items-center gap-6 text-xs sm:text-right">
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Distance</span>
                    <strong className="text-neutral-900 font-semibold">{route.distanceKm}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Approx Time</span>
                    <strong className="text-neutral-900 font-semibold">{route.approxTime}</strong>
                  </div>
                  <a
                    href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I would like to book an airport transfer from CMB to ${route.destination}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap text-xs"
                  >
                    Book Transfer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-2xs">
          <Clock className="w-6 h-6 text-amber-700 mb-2" />
          <h4 className="font-serif font-bold text-neutral-900 mb-1">Flight Delay Protection</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            We track your incoming flight in real-time. Whether your plane lands early or 3 hours late, your driver is waiting with a name board at no extra cost.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-2xs">
          <ShieldCheck className="w-6 h-6 text-amber-700 mb-2" />
          <h4 className="font-serif font-bold text-neutral-900 mb-1">Fixed Upfront Pricing</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            No taximeter surprises or haggling at arrivals. Your quoted price includes fuel, expressway tolls, and parking tickets.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-2xs">
          <MapPin className="w-6 h-6 text-amber-700 mb-2" />
          <h4 className="font-serif font-bold text-neutral-900 mb-1">Based Right by the Airport</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Headquartered in Kochchikade/Negombo just 20 minutes from the terminal, our vehicles arrive swiftly and reliably.
          </p>
        </div>
      </div>

      <FAQAccordion faqs={AIRPORT_TRANSFERS_SERVICE.faqs} />

      <EnquiryForm
        initialTour="Airport Transfer Only"
        headline="Book Your Sri Lanka Airport Transfer"
        subheadline="Provide your flight number, date, and destination hotel for instant confirmation."
      />
    </div>
  </div>
);
};
