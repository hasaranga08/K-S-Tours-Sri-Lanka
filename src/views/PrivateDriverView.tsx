import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { PRIVATE_DRIVER_SERVICE } from '../data/services';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import { CustomerGallery } from '../components/CustomerGallery';
import { 
  CheckCircle2, 
  Car, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  MessageCircle, 
  Compass, 
  Fuel, 
  DollarSign,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface PrivateDriverViewProps {
  onNavigate: (path: string) => void;
}

export const PrivateDriverView: React.FC<PrivateDriverViewProps> = ({ onNavigate }) => {
  useSEO({
    title: PRIVATE_DRIVER_SERVICE.metaTitle,
    description: PRIVATE_DRIVER_SERVICE.metaDescription,
    canonicalPath: '/sri-lanka-private-driver/',
    ogImage: PRIVATE_DRIVER_SERVICE.heroImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Sri Lanka Private Driver & Chauffeur Guide",
      "provider": {
        "@type": "TravelAgency",
        "name": COMPANY_INFO.name,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "url": COMPANY_INFO.canonicalOrigin
      },
      "areaServed": {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      "description": PRIVATE_DRIVER_SERVICE.intro
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Sri Lanka Private Driver & Chauffeur Guide Service"
        subtitle={PRIVATE_DRIVER_SERVICE.intro}
        badge="Trusted Chauffeur Service · Nearly 40 Years Experience"
        breadcrumbs={[{ label: 'Sri Lanka Private Driver' }]}
        onNavigate={onNavigate}
        actions={
          <>
            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to inquire about hiring a private driver for my trip in Sri Lanka.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hire Driver via WhatsApp</span>
            </a>

            <a
              href="#driver-enquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold rounded-xl shadow-md transition-all"
            >
              <span>Get Itemized Quotation</span>
            </a>
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-14">

      {/* Why Choose a KS Tours Driver */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
            Peace of Mind Island Travel
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            What is Included with Your Private Driver?
          </h2>
          <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
            We provide a transparent, all-inclusive private driver service. You never have to worry about petrol spikes, unexpected toll booths, or driver meal bills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRIVATE_DRIVER_SERVICE.inclusions.slice(0, 8).map((inc, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2.5" />
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                {inc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet & Vehicle Categories */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
            Our Vehicle Fleet
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            Modern, Clean &amp; Fully Insured Vehicles
          </h2>
          <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
            Choose the ideal vehicle for your travel party. All vehicles undergo regular mechanical safety inspections and are cleaned daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRIVATE_DRIVER_SERVICE.vehicles.map((v, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 block mb-1">
                  {v.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-neutral-900 mb-3">
                  {v.name}
                </h3>

                <div className="space-y-2 text-xs text-neutral-600 mb-5">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>Capacity: <strong>{v.passengers}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>Luggage: <strong>{v.luggage}</strong></span>
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-4 mb-4">
                  <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {v.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <span className="text-[11px] text-neutral-500 block mb-3">
                  Recommended for: {v.recommendedFor}
                </span>
                <a
                  href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I am interested in booking a private ${v.name} for my trip in Sri Lanka.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire for {v.category}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Pricing & Zero Commission Policy */}
      <section className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-10 border border-neutral-800">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Ethical Tourism Policy</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Our Promise: Zero Forced Shopping Stops
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
            A common complaint among international travelers in Sri Lanka is being pressured by freelance taxi drivers into overpriced spice gardens, gem shops, or batik factories for commissions.
          </p>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            At Kumar &amp; Sons Tours, we have operated on trust and family integrity for nearly 40 years. We only stop at places <strong>you want to visit</strong>. Your driver is there to serve you, protect you, and guide you safely across our beautiful homeland.
          </p>
        </div>
      </section>

      {/* Tailor-Made & Itinerary Integration Banner */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Need Route Planning Support?</span>
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
            Combine Your Chauffeur With a Custom Itinerary
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Not sure how to structure your route across Sigiriya, Kandy, Nuwara Eliya, Ella, and Yala? Explore our{' '}
            <button
              onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
              className="text-amber-900 font-semibold underline hover:text-amber-950 cursor-pointer"
            >
              tailor-made Sri Lanka tours
            </button>{' '}
            or browse our proven{' '}
            <button
              onClick={() => onNavigate('/sri-lanka-tours/')}
              className="text-amber-900 font-semibold underline hover:text-amber-950 cursor-pointer"
            >
              multi-day tour packages
            </button>{' '}
            for inspiration. We can also arrange direct{' '}
            <button
              onClick={() => onNavigate('/sri-lanka-airport-transfers/')}
              className="text-amber-900 font-semibold underline hover:text-amber-950 cursor-pointer"
            >
              Colombo airport transfers
            </button>{' '}
            on arrival.
          </p>
        </div>

        <button
          onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Design Custom Tour</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Real Traveler Moments with Our Chauffeurs */}
      <section className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8">
        <CustomerGallery
          title="On the Road with Kumar &amp; Sons Chauffeurs"
          subtitle="Genuine snapshots of international travelers touring scenic Sri Lankan routes with Kumar and Chathuranga."
          categoryFilter="driver"
          maxItems={6}
        />
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={PRIVATE_DRIVER_SERVICE.faqs}
        title="Frequently Asked Questions About Hiring a Private Driver"
      />

      {/* Enquiry Form */}
      <section id="driver-enquiry">
        <EnquiryForm
          initialTour="Private Driver Chauffeur Only"
          headline="Request a Private Driver Quotation"
          subheadline="Share your dates, pickup location, and planned destinations. We will calculate the total mileage and provide an all-inclusive transparent quote."
        />
      </section>
    </div>
  </div>
);
};
