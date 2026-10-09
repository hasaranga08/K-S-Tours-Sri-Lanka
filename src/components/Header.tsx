import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
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
  Sparkles
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
      setScrolled(window.scrollY > 20);
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
    currentPath.startsWith('/tailor-made') ||
    currentPath.startsWith('/day-tours') ||
    currentPath.startsWith('/sri-lanka-honeymoon') ||
    currentPath.startsWith('/sri-lanka-family-tours') ||
    currentPath.startsWith('/sri-lanka-safari-tours');

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-2' 
        : 'bg-white border-b border-neutral-200/60 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick('/', e)} 
          className="flex items-center group py-1 shrink-0 select-none focus-visible:outline-2 focus-visible:outline-[#0D7C78] rounded-lg"
          aria-label="Kumar & Sons Tours Sri Lanka Homepage"
        >
          <img 
            src="/images/KS Logo.png" 
            alt="Kumar &amp; Sons Tours Sri Lanka" 
            className="h-11 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            width="220"
            height="56"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
          
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
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
              className={`flex items-center gap-1.5 py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
                isToursActive ? 'text-[#0D7C78] font-bold' : ''
              }`}
            >
              <span>Tour Packages</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                toursDropdownOpen ? 'rotate-180 text-[#0D7C78]' : 'text-neutral-400'
              }`} />
            </button>

            {toursDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-neutral-200/90 rounded-2xl shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="/sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-xl text-neutral-800 hover:bg-[#0D7C78]/10 hover:text-[#0D7C78] transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#0D7C78]" />
                  <span>All Tour Packages</span>
                </a>
                
                <a
                  href="/day-tours/"
                  onClick={(e) => handleLinkClick('/day-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-50 hover:text-[#0D7C78] transition-colors"
                >
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>Day Tours</span>
                </a>

                <a
                  href="/sri-lanka-honeymoon/"
                  onClick={(e) => handleLinkClick('/sri-lanka-honeymoon/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-50 hover:text-[#0D7C78] transition-colors"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Honeymoon Tours</span>
                </a>

                <a
                  href="/sri-lanka-family-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-family-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-50 hover:text-[#0D7C78] transition-colors"
                >
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Family Tours</span>
                </a>

                <a
                  href="/sri-lanka-safari-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-safari-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl text-neutral-700 hover:bg-neutral-50 hover:text-[#0D7C78] transition-colors"
                >
                  <Camera className="w-4 h-4 text-emerald-600" />
                  <span>Wildlife &amp; Safari Tours</span>
                </a>

                <div className="my-1 border-t border-neutral-100" />

                <a
                  href="/tailor-made-sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
                  className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-xl bg-amber-50/70 text-[#9E6B05] hover:bg-amber-100/70 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A017]" />
                  <span>Tailor-Made Custom Tours</span>
                </a>
              </div>
            )}
          </div>

          {/* Activities */}
          <a
            href="/activities/"
            onClick={(e) => handleLinkClick('/activities/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/activities/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Activities
          </a>

          {/* Destinations */}
          <a
            href="/destinations/"
            onClick={(e) => handleLinkClick('/destinations/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath.startsWith('/destinations') ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Destinations
          </a>

          {/* Gallery */}
          <a
            href="/gallery/"
            onClick={(e) => handleLinkClick('/gallery/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/gallery/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Gallery
          </a>

          {/* About */}
          <a
            href="/about/"
            onClick={(e) => handleLinkClick('/about/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/about/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            About
          </a>

          {/* Contact */}
          <a
            href="/contact/"
            onClick={(e) => handleLinkClick('/contact/', e)}
            className={`py-1 transition-colors hover:text-[#0D7C78] cursor-pointer ${
              currentPath === '/contact/' ? 'text-[#0D7C78] font-bold' : ''
            }`}
          >
            Contact
          </a>

        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a Sri Lanka trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-2xs whitespace-nowrap"
            title="Chat directly on WhatsApp with Kumar & Chathu"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0D7C78] hover:bg-[#0A5F5C] shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F4CA26]" />
            <span>Plan Your Trip</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a Sri Lanka tour.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-xl"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:bg-neutral-100 rounded-xl focus-visible:outline-2 focus-visible:outline-[#0D7C78]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Redesigned Compact Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-5 pt-3 pb-6 space-y-2 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
              currentPath === '/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Home
          </a>

          {/* Tour Packages Accordion inside Mobile Menu */}
          <div className="rounded-xl border border-neutral-200/70 overflow-hidden bg-neutral-50/50">
            <button
              type="button"
              onClick={() => setMobileToursOpen(!mobileToursOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100/70 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0D7C78]" />
                <span>Tour Packages</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${mobileToursOpen ? 'rotate-180 text-[#0D7C78]' : ''}`} />
            </button>

            {mobileToursOpen && (
              <div className="px-3 pb-2.5 pt-1 space-y-1 bg-white border-t border-neutral-100 text-xs">
                <a
                  href="/sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                >
                  All Tours
                </a>
                <a
                  href="/day-tours/"
                  onClick={(e) => handleLinkClick('/day-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50"
                >
                  Day Tours
                </a>
                <a
                  href="/sri-lanka-honeymoon/"
                  onClick={(e) => handleLinkClick('/sri-lanka-honeymoon/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50"
                >
                  Honeymoon Tours
                </a>
                <a
                  href="/sri-lanka-family-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-family-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50"
                >
                  Family Tours
                </a>
                <a
                  href="/sri-lanka-safari-tours/"
                  onClick={(e) => handleLinkClick('/sri-lanka-safari-tours/', e)}
                  className="block px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50"
                >
                  Wildlife &amp; Safari
                </a>
                <a
                  href="/tailor-made-sri-lanka-tours/"
                  onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
                  className="block px-3 py-2 rounded-lg bg-amber-50 text-[#9E6B05] font-semibold"
                >
                  Tailor-Made Tours
                </a>
              </div>
            )}
          </div>

          <a
            href="/activities/"
            onClick={(e) => handleLinkClick('/activities/', e)}
            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
              currentPath === '/activities/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Activities
          </a>

          <a
            href="/destinations/"
            onClick={(e) => handleLinkClick('/destinations/', e)}
            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
              currentPath.startsWith('/destinations') ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Destinations
          </a>

          <a
            href="/gallery/"
            onClick={(e) => handleLinkClick('/gallery/', e)}
            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
              currentPath === '/gallery/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Gallery
          </a>

          <a
            href="/about/"
            onClick={(e) => handleLinkClick('/about/', e)}
            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
              currentPath === '/about/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            About
          </a>

          <a
            href="/contact/"
            onClick={(e) => handleLinkClick('/contact/', e)}
            className={`block px-3 py-2 rounded-xl text-sm font-medium ${
              currentPath === '/contact/' ? 'bg-[#0D7C78]/10 text-[#0D7C78] font-bold' : 'text-neutral-800 hover:bg-neutral-50'
            }`}
          >
            Contact
          </a>

          {/* Action CTAs in Mobile Menu */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to plan a tour in Sri Lanka.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-medium text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Kumar &amp; Chathu</span>
            </a>
            <button
              onClick={(e) => handleLinkClick('/tailor-made-sri-lanka-tours/', e)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#0D7C78] text-white font-medium text-sm shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F4CA26]" />
              <span>Plan Your Trip</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
