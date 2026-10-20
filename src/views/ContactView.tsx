import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { EnquiryForm } from '../components/EnquiryForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Plane,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "Contact KS Tours Sri Lanka | Tour Inquiries & Bookings",
    description: "Contact Kumar & Sons Tours. Chat directly on WhatsApp (+94 77 774 1615) or request a custom itinerary quote. Kochchikade base 15 mins from CMB airport.",
    canonicalPath: "/contact/",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Kumar & Sons Tours Sri Lanka",
      description: "Direct contact channels for planning private tours, driver hire, and airport transfers in Sri Lanka.",
      url: "https://www.kstourssrilanka.com/contact/",
      mainEntity: {
        "@type": "TravelAgency",
        "name": COMPANY_INFO.name,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "address": COMPANY_INFO.address
      }
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Contact KS Tours Sri Lanka"
        subtitle="Get in touch with Kumar & Chathu. Whether you need an airport transfer quotation, advice on traveling with children, or a complete custom multi-day tour itinerary, we are here to help."
        badge="Direct Family Assistance · Rapid Replies"
        breadcrumbs={[{ label: 'Contact Us' }]}
        onNavigate={onNavigate}
        actions={
          <a
            href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to contact you about traveling in Sri Lanka.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
          </a>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-14">

        {/* 3 Modern Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Channel 1: WhatsApp (Highlighted Primary) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500/30 shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Fastest Response
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  WhatsApp Chat
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Connect directly with Kumar &amp; Chathuranga on your phone. Send your travel dates or ask questions for instant quotes.
              </p>

              <div className="text-base font-bold text-neutral-900 font-mono pt-1">
                {COMPANY_INFO.whatsappDisplay}
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I am reaching out to discuss a tour itinerary in Sri Lanka.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>

          {/* Channel 2: Phone & Email */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D7C78]/10 text-[#0D7C78] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7C78] bg-[#0D7C78]/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Direct Line &middot; Email
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  Call or Email
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Prefer email or a phone call? Reach out anytime and we will respond with comprehensive details.
              </p>

              <div className="space-y-2 pt-1 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-neutral-900 font-medium">
                  <Phone className="w-4 h-4 text-[#0D7C78]" />
                  <a href={COMPANY_INFO.phoneTel} className="hover:underline">{COMPANY_INFO.phoneDisplay}</a>
                </div>
                <div className="flex items-center gap-2 text-neutral-900 font-medium">
                  <Mail className="w-4 h-4 text-[#0D7C78]" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">{COMPANY_INFO.email}</a>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm shadow-xs transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Us an Email</span>
            </a>
          </div>

          {/* Channel 3: Negombo / Airport Location */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-[#D4A017] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Local Base
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  Airport Proximity
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our operations base is located in Kochchikade, Negombo — just 15 to 20 minutes from Bandaranaike International Airport (CMB).
              </p>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/60 text-xs text-neutral-700 space-y-1">
                <div className="font-bold text-neutral-900">{COMPANY_INFO.name}</div>
                <div>{COMPANY_INFO.address}</div>
                <div className="text-[#0D7C78] font-medium pt-1">Ideal for seamless arrivals &amp; early departures.</div>
              </div>
            </div>

            <a
              href={COMPANY_INFO.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-bold text-sm shadow-xs transition-all"
            >
              <span>See TripAdvisor Profile</span>
            </a>
          </div>

        </div>

        {/* Embedded Enquiry Form */}
        <section>
          <EnquiryForm
            title="Send Your Sri Lanka Travel Brief"
            subtitle="Fill in this quick form and Kumar & Chathu will get back to you within hours with suggested routing and custom pricing."
          />
        </section>

      </div>
    </div>
  );
};
