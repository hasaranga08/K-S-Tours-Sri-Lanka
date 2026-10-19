import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { assetUrl } from '../utils/asset';
import { 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  Calendar, 
  Heart, 
  Users, 
  Camera, 
  Clock,
  Sparkles,
  MapPin,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setToursDropdownOpen(false);
  };

  const isToursActive = 
    currentPath.startsWith('/sri-lanka-tour') || 
    currentPath.startsWith('/itineraries') || 
    currentPath.startsWith('/day-tours') ||
    currentPath.startsWith('/sri-lanka-honeymoon') ||
    currentPath.startsWith('/sri-lanka-family-tours') ||
    currentPath.startsWith('/sri-lanka-safari-tours');

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF8F5]/98 backdrop-blur-md shadow-xs border-b border-[#E8E2D9] py-2.5' 
          : 'bg-[#FAF8F5] border-b border-[#EBE5DF] py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick('/', e)} 
          className="flex items-center shrink-0 py-1 group select-none focus-visible:outline-2 focus-visible:outline-[#0D7C78] rounded-lg"
          aria-label="Kumar & Sons Tours Sri Lanka Homepage"
        >
          <img 
            src={assetUrl('/images/KS Logo.png')} 
            alt="Kumar &amp; Sons Tours Sri Lanka" 
            className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            width="220"
            height="52"
          />
        </a>

        {/* Desktop Editorial Navigation Menu */}
        <nav 
          className="hidden xl:flex items-center gap-6 2xl:gap-7 text-[13px] tracking-[0.02em] font-medium text-[#0C1519]/80"
          aria-label="Main Navigation"
        >
          {/* Home */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Home
          </a>

          {/* Tour Packages Dropdown */}
          <div 
            className="relative py-2 group"
            onMouseEnter={() => setToursDropdownOpen(true)}
            onMouseLeave={() => setToursDropdownOpen(false)}
          >
            <button
              onClick={(e) => handleLinkClick('/sri-lanka-tours/', e)}
              className={`flex items-center gap-1 py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer focus-visible:outline-none focus-visible:text-[#0D7C78] ${
                isToursActive ? 'text-[#0D7C78] font-bold' : ''
              }`}
              aria-expanded={toursDropdownOpen}
              aria-haspopup="true"
            >
              <span>Tour Packages</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                toursDropdownOpen ? 'rotate-180 text-[#0D7C78]' : 'text-neutral-400'
              }`} />
            </button>

            {toursDropdownOpen && (
              <div 
                className="absolute top-full left-0 w-80 bg-[#FAF8F5] border border-[#E8E2D9] rounded-2xl shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                role="menu"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200/60 mb-1">
                  Private Sri Lanka Itineraries
                </div>

                <a
                  href="/sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl text-neutral-800 hover:bg-[#0D7C78]/10 hover:text-[#0D7C78] transition-colors"
                  role="menuitem"
                >
                  <Compass className="w-4 h-4 text-[#0D7C78]" />
                  <span>All Tour Packages</span>
                </a>

                <a
                  href="/itineraries/"
                  onClick={(e) => handleLinkClick('/itineraries/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-100/70 hover:text-[#0D7C78] transition-colors"
                  role="menuitem"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A017]" />
                  <span>Compare Multi-Day Itineraries</span>
                </a>
                
                <a
                  href="/day-tours/"
                  onClick={(e) => handleLinkClick('/day-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-100/70 hover:text-[#0D7C78] transition-colors"
                  role="menuitem"
                >
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>Excursions &amp; Day Tours</span>
                </a>

                <a
                  href="/sri-lanka-honeymoon/"
                  onClick={(e) => handleLinkClick('/sri-lanka-honeymoon/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-100/70 hover:text-[#0D7C78] transition-colors"
                  role="menuitem"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Honeymoon &amp; Romantic Escapes</span>
                </a>

                <a
                  href="/sri-lanka-family-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-family-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-100/70 hover:text-[#0D7C78] transition-colors"
                  role="menuitem"
                >
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Family Adventure Tours</span>
                </a>

                <a
                  href="/sri-lanka-safari-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-safari-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-100/70 hover:text-[#0D7C78] transition-colors"
                  role="menuitem"
                >
                  <Camera className="w-4 h-4 text-emerald-600" />
                  <span>Wildlife &amp; Safari Tours</span>
                </a>

                <div className="my-1 border-t border-neutral-200/70" />

                <a
                  href="/tailor-made-sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-50 text-[#8C5D05] hover:bg-amber-100/80 transition-colors"
                  role="menuitem"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A017]" />
                  <span>Tailor-Made Custom Planning</span>
                </a>
              </div>
            )}
          </div>

          {/* Tailor-Made */}
          <a
            href="/tailor-made-sri-lanka-tours/"
            onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/tailor-made-sri-lanka-tours/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Tailor-Made
          </a>

          {/* Destinations */}
          <a
            href="/destinations/"
            onClick={(e) => handleLinkClick('/destinations/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath.startsWith('/destinations') ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Destinations
          </a>

          {/* Activities */}
          <a
            href="/activities/"
            onClick={(e) => handleLinkClick('/activities/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/activities/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Activities
          </a>

          {/* Travel Guide */}
          <a
            href="/sri-lanka-travel-guide/"
            onClick={(e) => handleLinkClick('/sri-lanka-travel-guide/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath.startsWith('/sri-lanka-travel-guide') ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Travel Guide
          </a>

          {/* About */}
          <a
            href="/about/"
            onClick={(e) => handleLinkClick('/about/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/about/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            About
          </a>

          {/* Contact */}
          <a
            href="/contact/"
            onClick={(e) => handleLinkClick('/contact/', e)}
            className={`py-1.5 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/contact/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Medium-screen Navigation (Tablet landscape: lg to xl) */}
        <nav 
          className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-medium text-[#0C1519]/80"
          aria-label="Tablet Navigation"
        >
          <a
            href="/sri-lanka-tours/"
            onClick={(e) => handleLinkClick('/sri-lanka-tours/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] ${
              isToursActive ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Tours
          </a>
          <a
            href="/tailor-made-sri-lanka-tours/"
            onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] ${
              currentPath === '/tailor-made-sri-lanka-tours/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Tailor-Made
          </a>
          <a
            href="/destinations/"
            onClick={(e) => handleLinkClick('/destinations/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] ${
              currentPath.startsWith('/destinations') ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Destinations
          </a>
          <a
            href="/activities/"
            onClick={(e) => handleLinkClick('/activities/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] ${
              currentPath === '/activities/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Activities
          </a>
          <a
            href="/about/"
            onClick={(e) => handleLinkClick('/about/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] ${
              currentPath === '/about/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            About
          </a>
          <a
            href="/contact/"
            onClick={(e) => handleLinkClick('/contact/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] ${
              currentPath === '/contact/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Header CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a Sri Lanka tour.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#0D7C78] hover:text-[#084D4A] bg-[#0D7C78]/8 hover:bg-[#0D7C78]/15 border border-[#0D7C78]/20 transition-colors shadow-2xs whitespace-nowrap"
            title="Chat directly on WhatsApp with Kumar & Chathu"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0D7C78] hover:bg-[#0A5F5C] active:bg-[#084D4A] shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0D7C78]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F4CA26]" />
            <span>Plan Your Tour</span>
          </button>
        </div>

        {/* Mobile Header Actions & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a Sri Lanka tour.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#0D7C78] hover:bg-[#0D7C78]/10 rounded-xl transition-colors"
            aria-label="WhatsApp Kumar & Sons Tours"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0C1519] hover:bg-neutral-100 rounded-xl focus-visible:outline-2 focus-visible:outline-[#0D7C78]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Redesigned Premium Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t border-[#E8E2D9] bg-[#FAF8F5] px-5 pt-3 pb-6 space-y-1.5 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath === '/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Home
          </a>

          {/* Tour Packages Accordion inside Mobile Menu */}
          <div className="rounded-xl border border-neutral-200/80 overflow-hidden bg-white/70">
            <button
              type="button"
              onClick={() => setMobileToursOpen(!mobileToursOpen)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100/50 transition-colors"
              aria-expanded={mobileToursOpen}
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0D7C78]" />
                <span>Tour Packages</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${mobileToursOpen ? 'rotate-180 text-[#0D7C78]' : ''}`} />
            </button>

            {mobileToursOpen && (
              <div className="px-3 pb-2.5 pt-1 space-y-1 bg-[#FAF8F5] border-t border-neutral-100 text-xs">
                <a
                  href="/sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-800 hover:bg-neutral-200/50 font-medium"
                >
                  All Tour Packages
                </a>
                <a
                  href="/itineraries/"
                  onClick={(e) => handleLinkClick('/itineraries/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-200/50"
                >
                  Compare Multi-Day Itineraries
                </a>
                <a
                  href="/day-tours/"
                  onClick={(e) => handleLinkClick('/day-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-200/50"
                >
                  Day Tours &amp; Excursions
                </a>
                <a
                  href="/sri-lanka-honeymoon/"
                  onClick={(e) => handleLinkClick('/sri-lanka-honeymoon/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-200/50"
                >
                  Honeymoon &amp; Romantic Escapes
                </a>
                <a
                  href="/sri-lanka-family-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-family-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-200/50"
                >
                  Family Adventure Tours
                </a>
                <a
                  href="/sri-lanka-safari-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-safari-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-200/50"
                >
                  Wildlife &amp; Safari Tours
                </a>
                <a
                  href="/tailor-made-sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
                  className="block px-3 py-2 rounded-lg bg-amber-50 text-[#8C5D05] font-semibold"
                >
                  Tailor-Made Custom Planning
                </a>
              </div>
            )}
          </div>

          <a
            href="/tailor-made-sri-lanka-tours/"
            onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath === '/tailor-made-sri-lanka-tours/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Tailor-Made
          </a>

          <a
            href="/destinations/"
            onClick={(e) => handleLinkClick('/destinations/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath.startsWith('/destinations') ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Destinations
          </a>

          <a
            href="/activities/"
            onClick={(e) => handleLinkClick('/activities/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath === '/activities/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Activities
          </a>

          <a
            href="/sri-lanka-travel-guide/"
            onClick={(e) => handleLinkClick('/sri-lanka-travel-guide/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath.startsWith('/sri-lanka-travel-guide') ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Travel Guide
          </a>

          <a
            href="/gallery/"
            onClick={(e) => handleLinkClick('/gallery/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath === '/gallery/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Gallery
          </a>

          <a
            href="/about/"
            onClick={(e) => handleLinkClick('/about/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath === '/about/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            About Us
          </a>

          <a
            href="/contact/"
            onClick={(e) => handleLinkClick('/contact/', e)}
            className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
              currentPath === '/contact/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-100/70'
            }`}
          >
            Contact
          </a>

          {/* Action CTAs in Mobile Menu */}
          <div className="pt-4 border-t border-neutral-200/70 flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a tour in Sri Lanka.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-700 text-white font-semibold text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Kumar &amp; Chathu</span>
            </a>
            <button
              onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#0D7C78] text-white font-semibold text-sm shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F4CA26]" />
              <span>Plan Your Tailor-Made Tour</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
