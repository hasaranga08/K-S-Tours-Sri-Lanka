import React from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { assetUrl } from '../utils/asset';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Compass
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#0C1519] text-neutral-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Heritage Column */}
          <div className="lg:col-span-2 space-y-5">
            {/* White Logo ONLY without duplicate text next to it */}
            <a 
              href="/" 
              onClick={(e) => handleLink('/', e)}
              className="inline-block"
            >
              <img 
                src={assetUrl('/images/White Logo.png')} 
                alt="Kumar &amp; Sons Tours Sri Lanka" 
                className="h-14 w-auto object-contain max-w-[240px]" 
                width="240"
                height="80"
              />
            </a>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Family-operated Sri Lankan tour company with nearly 40 years of local expertise. We design personalized private tours, wildlife safaris, romantic honeymoons, and reliable chauffeur-driven transport across Sri Lanka.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F4CA26] hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 transition-colors"
              >
                <span>Rated on TripAdvisor</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-neutral-400 flex items-center gap-1.5 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D7C78]" />
                <span>Nearly 40 Years Experience</span>
              </span>
            </div>
          </div>

          {/* Tour Packages Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4CA26] mb-4">
              Tour Packages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/sri-lanka-tours/" onClick={(e) => handleLink('/sri-lanka-tours/', e)} className="hover:text-white transition-colors">
                  All Tour Packages
                </a>
              </li>
              <li>
                <a href="/day-tours/" onClick={(e) => handleLink('/day-tours/', e)} className="hover:text-white transition-colors">
                  Day Tours &amp; Excursions
                </a>
              </li>
              <li>
                <a href="/sri-lanka-honeymoon/" onClick={(e) => handleLink('/sri-lanka-honeymoon/', e)} className="hover:text-white transition-colors">
                  Honeymoon Packages
                </a>
              </li>
              <li>
                <a href="/sri-lanka-family-tours/" onClick={(e) => handleLink('/sri-lanka-family-tours/', e)} className="hover:text-white transition-colors">
                  Family Tour Packages
                </a>
              </li>
              <li>
                <a href="/sri-lanka-safari-tours/" onClick={(e) => handleLink('/sri-lanka-safari-tours/', e)} className="hover:text-white transition-colors">
                  Wildlife &amp; Safari Tours
                </a>
              </li>
              <li>
                <a href="/tailor-made-sri-lanka-tours/" onClick={(e) => handleLink('/tailor-made-sri-lanka-tours/', e)} className="text-[#0D7C78] hover:text-emerald-300 font-semibold transition-colors">
                  Tailor-Made Custom Tours
                </a>
              </li>
            </ul>
          </div>

          {/* Explore & Activities Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4CA26] mb-4">
              Explore Sri Lanka
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/activities/" onClick={(e) => handleLink('/activities/', e)} className="hover:text-white transition-colors">
                  Things to Do (Activities)
                </a>
              </li>
              <li>
                <a href="/destinations/" onClick={(e) => handleLink('/destinations/', e)} className="hover:text-white transition-colors">
                  Destinations Guide
                </a>
              </li>
              <li>
                <a href="/destinations/sigiriya/" onClick={(e) => handleLink('/destinations/sigiriya/', e)} className="hover:text-white transition-colors">
                  Sigiriya Rock Citadel
                </a>
              </li>
              <li>
                <a href="/destinations/ella/" onClick={(e) => handleLink('/destinations/ella/', e)} className="hover:text-white transition-colors">
                  Ella &amp; Nine Arch Bridge
                </a>
              </li>
              <li>
                <a href="/gallery/" onClick={(e) => handleLink('/gallery/', e)} className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="/sri-lanka-travel-guide/" onClick={(e) => handleLink('/sri-lanka-travel-guide/', e)} className="hover:text-white transition-colors">
                  Sri Lanka Travel Guides
                </a>
              </li>
              <li>
                <a href="/sri-lanka-private-driver/" onClick={(e) => handleLink('/sri-lanka-private-driver/', e)} className="hover:text-white transition-colors">
                  Private Driver Service
                </a>
              </li>
              <li>
                <a href="/about/" onClick={(e) => handleLink('/about/', e)} className="hover:text-white transition-colors">
                  About KS Tours
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4CA26] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4CA26] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a tour.")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4CA26] shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4CA26] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href={getWhatsAppUrl("Hello Kumar & Sons Tours, I am planning a holiday to Sri Lanka.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="/about/" onClick={(e) => handleLink('/about/', e)} className="hover:text-neutral-300">About Us</a>
            <a href="/activities/" onClick={(e) => handleLink('/activities/', e)} className="hover:text-neutral-300">Activities</a>
            <a href="/gallery/" onClick={(e) => handleLink('/gallery/', e)} className="hover:text-neutral-300">Gallery</a>
            <a href="/contact/" onClick={(e) => handleLink('/contact/', e)} className="hover:text-neutral-300">Contact &amp; Enquiry</a>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-400">Negombo &middot; Sri Lanka</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
