import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { TOURS } from '../data/tours';
import { DESTINATIONS } from '../data/destinations';
import { ACTIVITIES } from '../data/activities';
import { TourCard } from '../components/TourCard';
import { CustomerGallery } from '../components/CustomerGallery';
import { TripAdvisorWidget } from '../components/TripAdvisorWidget';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  MessageCircle, 
  Calendar, 
  Users, 
  Sparkles, 
  Compass, 
  Camera, 
  HeartHandshake, 
  Check, 
  Car, 
  Palmtree,
  Star,
  Clock
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  useSEO({
    title: 'Sri Lanka Tours & Holiday Packages | KS Tours',
    description: 'Discover Sri Lanka with Kumar & Sons Tours. 40 years of local expertise crafting bespoke private tours, wildlife safaris, and chauffeur travel.',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: '/images/Slide1.jpg'
  });

  const [activeTourCategory, setActiveTourCategory] = useState<'all' | 'honeymoon' | 'family' | 'safari'>('all');

  const filteredFeaturedTours = TOURS
    .filter((t) => t.id !== 'tour-tailor-made' && t.category !== 'tailor-made')
    .filter((t) => {
      if (activeTourCategory === 'all') return t.featured;
      return t.category === activeTourCategory;
    })
    .slice(0, 6);

  // 6 key destinations for the homepage
  const featuredDestinations = DESTINATIONS.filter((d) => 
    ['sigiriya', 'kandy', 'ella', 'yala', 'galle', 'nuwara-eliya'].includes(d.slug)
  );

  // 4 curated activities for the homepage
  const homeActivities = ACTIVITIES.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 bg-[#FAF8F5]">
      
      {/* =========================================================================
          1. CINEMATIC HERO SECTION (/images/Slide1.jpg)
         ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        
        {/* Full-width Immersive Hero Background */}
        <div className="absolute inset-0">
          <img
            src="/images/Slide1.jpg"
            alt="Scenic Sri Lanka landscape with Kumar & Sons Tours"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05] scale-102 transition-transform duration-1000"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle multi-layer gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1519] via-[#0C1519]/40 to-black/30" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-6">
          
          {/* Top Heritage Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F4CA26] shadow-lg animate-in fade-in duration-500">
            <Sparkles className="w-4 h-4 text-[#F4CA26]" />
            <span>Nearly 40 Years of Trusted Local Expertise &middot; Est. 1980s</span>
          </div>

          {/* Primary Hero Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-md">
            Sri Lanka Tours &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#F4CA26]">
              Tailor-Made Private Journeys
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-200 font-normal leading-relaxed drop-shadow-sm">
            Handcrafted 7-, 10- and 14-day itineraries, custom tailor-made holidays, wild elephant safaris, and dedicated private driver hire guided by Kumar &amp; Chathuranga.
          </p>

          {/* Action Button Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-[#0D7C78] hover:bg-[#0A5F5C] text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F4CA26]" />
              <span>Plan Your Sri Lanka Tour</span>
            </button>

            <button
              onClick={() => onNavigate('/sri-lanka-tours/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Tours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subtle WhatsApp Quick Badge */}
          <div className="pt-3">
            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I saw your website and would like to plan a Sri Lanka trip.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors bg-black/40 px-4 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Chat: {COMPANY_INFO.whatsappDisplay}</span>
            </a>
          </div>

        </div>

      </section>

      {/* =========================================================================
          2. TRUST & HERITAGE STRIP
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#0D7C78]/10 text-[#0D7C78] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm sm:text-base leading-tight">Nearly 40 Years</h3>
              <p className="text-xs text-neutral-500 mt-0.5">Family Local Expertise</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/60 text-[#D4A017] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm sm:text-base leading-tight">100% Private Tours</h3>
              <p className="text-xs text-neutral-500 mt-0.5">Your Group, Your Pace</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/60 text-emerald-700 flex items-center justify-center shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm sm:text-base leading-tight">English Chauffeurs</h3>
              <p className="text-xs text-neutral-500 mt-0.5">Comfortable A/C Transport</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/60 text-blue-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm sm:text-base leading-tight">Zero Commissions</h3>
              <p className="text-xs text-neutral-500 mt-0.5">No Forced Shopping Stops</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. WHY TRAVEL WITH KS TOURS? (Visual Asymmetrical Layout)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D7C78]/10 text-[#0D7C78] text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Authentic Family Guiding</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              Why Travel With Kumar &amp; Sons Tours?
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              As an independent family-operated Sri Lanka tour operator and travel agency established in the 1980s, we are not an anonymous web reseller or overseas third party. When you plan a holiday with Kumar &amp; Sons Tours, you work directly with Kumar, Chathuranga, and our experienced local team based in Kochchikade, Negombo. We take personal pride in managing every detail of your journey — from airport meet-and-greets and private air-conditioned vehicles to custom itineraries and handpicked boutique accommodations across the island.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Direct Local Pricing &middot; Zero Middlemen</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Book directly with genuine local operators. No inflated commissions or markups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Total Itinerary Freedom &middot; Your Schedule</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Want to stop for a fresh king coconut or photograph a misty waterfall? Your chauffeur adjusts on the fly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">24/7 Personal Family Support</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">Direct cell and WhatsApp contact throughout your journey from arrival to airport departure.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about/')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D7C78] hover:text-[#0A5F5C] cursor-pointer"
              >
                <span>Read Our Authentic 40-Year Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-200 shadow-md">
                <img
                  src="/images/chathu-welcoming-guests-sri-lanka.jpg"
                  alt="Kumar welcoming guests on a Sri Lanka tour"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="bg-[#0C1519] text-white p-6 rounded-3xl space-y-1 shadow-md">
                <div className="text-2xl font-serif font-bold text-[#F4CA26]">1980s</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Guiding Travelers</div>
                <p className="text-xs text-neutral-400 mt-1">Starting with Kumar nearly four decades ago across Sri Lanka.</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-md space-y-2">
                <div className="flex items-center gap-1 text-[#F4CA26]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-bold text-neutral-900">5-Star TripAdvisor Rated</div>
                <p className="text-xs text-neutral-600">Consistently praised for honest advice, safe driving, and caring hospitality.</p>
              </div>

              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-200 shadow-md">
                <img
                  src="/images/G4.jpg"
                  alt="KS Tours private chauffeur vehicle"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. FEATURED SRI LANKA EXPERIENCES (Large Visual Blocks)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D7C78]">
            Curated Island Themes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Featured Sri Lanka Experiences
          </h2>
          <p className="text-sm text-neutral-600">
            From mist-wrapped mountain peaks to wild elephant savannas and sunlit coastlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Culture */}
          <div 
            onClick={() => onNavigate('/activities/')}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img 
              src="/images/sri-lanka-sigiriya-sunrise.jpg" 
              alt="Ancient Culture & Sigiriya Citadel" 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4CA26]">Heritage</span>
              <h3 className="font-serif text-lg font-bold">Ancient Culture</h3>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">Sigiriya Rock, Kandy Temple, Dambulla Caves.</p>
            </div>
          </div>

          {/* Wildlife */}
          <div 
            onClick={() => onNavigate('/activities/')}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img 
              src="/images/sri-lanka-yala-safari-leopard.jpg" 
              alt="Wild Elephants & Leopards" 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4CA26]">Safaris</span>
              <h3 className="font-serif text-lg font-bold">Wildlife &amp; Safari</h3>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">Yala leopards, Minneriya elephant gatherings.</p>
            </div>
          </div>

          {/* Mountains & Tea */}
          <div 
            onClick={() => onNavigate('/activities/')}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img 
              src="/images/sri-lanka-ella-nine-arch-train.jpg" 
              alt="Tea Country & Scenic Trains" 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4CA26]">Highlands</span>
              <h3 className="font-serif text-lg font-bold">Tea &amp; Mountains</h3>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">Nine Arch Bridge, Nuwara Eliya, scenic train.</p>
            </div>
          </div>

          {/* Beaches */}
          <div 
            onClick={() => onNavigate('/activities/')}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img 
              src="/images/sri-lanka-galle-fort-coast.jpg" 
              alt="Tropical Beaches & Oceans" 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4CA26]">Coastlines</span>
              <h3 className="font-serif text-lg font-bold">Beaches &amp; Oceans</h3>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">Mirissa whales, Galle Fort, Bentota golden sands.</p>
            </div>
          </div>

          {/* Adventure */}
          <div 
            onClick={() => onNavigate('/activities/')}
            className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
          >
            <img 
              src="/images/ellla waterfall.jpg" 
              alt="Adventure Hiking in Sri Lanka" 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4CA26]">Adventures</span>
              <h3 className="font-serif text-lg font-bold">Trekking &amp; Trails</h3>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">Ella Rock, Little Adam's Peak, waterfalls.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. FEATURED TOUR PACKAGES (Modern Cards Showcase)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7C78] block mb-1">
              Hand-Crafted Itineraries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Featured Tour Packages
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              100% private guided routes with your personal chauffeur. Every stop is fully customizable.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Featured' },
              { id: 'honeymoon', label: 'Honeymoon' },
              { id: 'family', label: 'Family' },
              { id: 'safari', label: 'Wildlife & Safari' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTourCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none ${
                  activeTourCategory === tab.id
                    ? 'bg-[#0D7C78] text-white shadow-xs'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeaturedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Explore All Tours Link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('/sri-lanka-tours/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>View All Tour Packages (7, 10 &amp; 14-Day Itineraries)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('/sri-lanka-private-driver/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 text-sm font-semibold shadow-xs transition-all cursor-pointer"
          >
            <span>Hire a Private Driver Only</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          6. EXPLORE SRI LANKA (Visual Destinations Showcase)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7C78] block mb-1">
              Top Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Explore Sri Lanka
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              From the cultural heartland to mist-veiled mountain ranges and coastal sanctuaries.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/destinations/')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D7C78] hover:text-[#0A5F5C] cursor-pointer"
          >
            <span>All Destinations Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredDestinations.map((dest) => (
            <div
              key={dest.slug}
              onClick={() => onNavigate(`/destinations/${dest.slug}/`)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
                width="400"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-medium text-[#F4CA26] block">
                  {dest.region}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold leading-tight group-hover:text-[#F4CA26] transition-colors">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. REAL JOURNEYS WITH KS TOURS (Homepage Real Photos Gallery)
         ========================================================================= */}
      <CustomerGallery onNavigate={onNavigate} showTextOverlay={false} />

      {/* =========================================================================
          8. ACTIVITIES IN SRI LANKA (Showcase from Activities Page)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7C78] block mb-1">
              Unforgettable Adventures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Things to Do in Sri Lanka
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Immerse yourself in authentic experiences that make Sri Lanka a world-renowned destination.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/activities/')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D7C78] hover:text-[#0A5F5C] cursor-pointer"
          >
            <span>View All Activities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => onNavigate('/activities/')}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 text-[#F4CA26] px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    {act.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-neutral-900 group-hover:text-[#0D7C78] transition-colors leading-snug">
                    {act.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                    {act.tagline}
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#0D7C78]" />
                    {act.location.split(',')[0]}
                  </span>
                  <span className="text-[#0D7C78] font-semibold flex items-center gap-0.5">
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. TRIPADVISOR REVIEWS WIDGET
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TripAdvisorWidget />
      </section>

      {/* =========================================================================
          10. FINAL VISUAL CTA
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0C1519] via-[#142228] to-[#0D7C78] text-white p-8 sm:p-14 shadow-2xl border border-white/10">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4CA26] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#F4CA26]" />
              <span>Nearly 40 Years of Creating Unforgettable Journeys</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Explore Sri Lanka?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Let's craft your ideal private tour. Whether it's an unhurried couple's getaway, a fun family expedition, or custom chauffeur transport, we will make it seamless and memorable.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-[#F4CA26] hover:bg-[#e0b71f] text-neutral-950 shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-neutral-900" />
                <span>Plan Your Journey</span>
              </button>

              <a
                href={getWhatsAppUrl("Hello Kumar & Sons Tours, I am ready to plan a private Sri Lanka tour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp With Kumar</span>
              </a>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none hidden lg:block">
            <img
              src="/images/sri-lanka-sigiriya-sunrise.jpg"
              alt="Sigiriya"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
