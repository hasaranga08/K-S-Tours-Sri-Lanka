import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TripAdvisorWidget } from '../components/TripAdvisorWidget';
import { 
  Compass, 
  ShieldCheck, 
  Heart, 
  Users, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Car, 
  MessageCircle, 
  CheckCircle2, 
  Calendar,
  Route,
  Trees,
  Check
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "About Kumar & Sons Tours Sri Lanka | 40 Years of Experience",
    description: "Discover Sri Lanka with Kumar & Sons Tours. Built on 40 years of island tourism experience, deep local knowledge, family heritage, and personalised private travel.",
    canonicalPath: "/about/",
    ogImage: "/images/G4.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Kumar & Sons Tours Sri Lanka",
      description: "Local family-owned tour operator in Sri Lanka with 40 years of tourism experience, offering personalized private tours and chauffeur service.",
      url: "https://www.kstourssrilanka.com/about/",
      mainEntity: {
        "@type": "TravelAgency",
        name: "Kumar & Sons Tours Sri Lanka",
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        address: COMPANY_INFO.address,
        url: "https://www.kstourssrilanka.com/about/"
      }
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-neutral-800">
      
      {/* =========================================================================
          1. HERO SECTION
          Compact, premium hero using /images/G4.jpg with measured dark scrim
          ========================================================================= */}
      <section 
        aria-label="About Us Hero"
        className="relative w-full bg-neutral-950 text-white overflow-hidden"
      >
        {/* Background Image using /images/G4.jpg */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: "url('/images/G4.jpg')",
            backgroundPosition: 'center 45%'
          }}
          aria-hidden="true"
        />

        {/* Measured dark gradient scrim for high legibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-900/65"
          aria-hidden="true" 
        />

        {/* Content Container — compact & premium */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-[360px] sm:min-h-[420px] flex flex-col justify-center">
          
          {/* Breadcrumbs */}
          <div className="mb-4 sm:mb-6">
            <Breadcrumbs 
              items={[{ label: 'About Us' }]} 
              onNavigate={onNavigate} 
              lightText={true} 
            />
          </div>

          {/* Quiet Kicker */}
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F4CA26]">
              Kumar &amp; Sons Tours Sri Lanka
            </span>
          </div>

          {/* Primary Hero Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            40 Years of Experience. One Island. Endless Stories.
          </h1>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-neutral-200 max-w-3xl leading-relaxed">
            Discover Sri Lanka with a local team built on four decades of experience, personal service and genuine knowledge of the island.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/sri-lanka-tours/')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-[#F4CA26] hover:bg-[#e5bc1f] transition-all shadow-md cursor-pointer uppercase tracking-wider whitespace-nowrap"
            >
              <Compass className="w-4 h-4 text-neutral-950" />
              <span>Explore Our Tours</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Create Your Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* PAGE CONTAINER FOR CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">

        {/* =========================================================================
            2. 40 YEARS OF SRI LANKAN TOURISM (Introductory Section)
            ========================================================================= */}
        <section className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
                Four Decades of Dedication
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-snug">
                40 Years of Exploring Sri Lanka, With You
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              <p>
                Kumar &amp; Sons Tours has been helping travellers discover Sri Lanka for around four decades. What began as a personal passion for showing visitors the authentic beauty of our homeland has grown into a trusted family travel company known for deep local knowledge, warm hospitality, and reliable island-wide journeys.
              </p>
              <p>
                Our four decades in Sri Lankan tourism have given us a profound understanding of the island’s varied destinations, ancient heritage, lush wildlife, diverse regional microclimates, and vibrant cultural traditions. We understand what international travellers need: dependable private transportation, experienced and courteous local driver-guides, prompt communication, and the freedom to experience Sri Lanka comfortably at their own pace.
              </p>
              <p>
                We believe that travel should be personal. Rather than simply selling off-the-shelf itineraries or hurried sightseeing routes, our focus is on creating thoughtful, tailor-made journeys that connect you with the real spirit of Sri Lanka.
              </p>
            </div>

            {/* Subtle editorial trust markers */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D7C78]" />
                <span>Four Decades Islandwide Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D7C78]" />
                <span>100% Private &amp; Personalised Journeys</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D7C78]" />
                <span>Dedicated Local Family Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. EXPERIENCE THAT MAKES A DIFFERENCE
            ========================================================================= */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              The Value of Four Decades
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Experience That Makes a Difference
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Why does 40 years of experience matter when planning your holiday? It shapes every single decision, route, recommendation, and personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Deep Local Knowledge */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Compass className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Deep Local Knowledge
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We know Sri Lanka beyond the usual tourist routes, from cultural landmarks and historic cities to hidden experiences, local communities, beaches, mountains and wildlife.
              </p>
            </div>

            {/* 2. Experience You Can Trust */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Experience You Can Trust
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Four decades in tourism means understanding how to organise smooth, comfortable and enjoyable journeys across the island.
              </p>
            </div>

            {/* 3. Personal Service */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D7C78] flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#0D7C78]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Personal Service
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Every traveller is different. We take the time to understand your interests, travel style and expectations before creating your journey.
              </p>
            </div>

            {/* 4. Professional & Reliable */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-sm transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Car className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Professional &amp; Reliable
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                From airport arrival to the final day of your journey, our aim is to provide dependable transportation, professional service and local support.
              </p>
            </div>

            {/* 5. Sri Lanka, Our Home */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-sm transition-all space-y-4 md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Sri Lanka, Our Home
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We don't simply take you around Sri Lanka. We know the country, its culture, traditions, food, landscapes and people because it is our home.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. FAMILY BUSINESS / OUR STORY
            Introducing Kumar & Chathuranga (Chathu)
            ========================================================================= */}
        <section className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#0C1519] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F4CA26]">
                Generations of Hospitality
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Our Story: A Sri Lankan Family Business
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                Kumar &amp; Sons Tours has grown through family experience and a long-standing, personal connection with Sri Lankan tourism. We take pride in welcoming guests as friends and sharing our island with genuine care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Kumar */}
              <div className="bg-white/5 rounded-2xl p-7 sm:p-8 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F4CA26]/20 border border-[#F4CA26]/40 flex items-center justify-center text-[#F4CA26] font-serif font-bold text-lg">
                    K
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      Kumar
                    </h3>
                    <p className="text-xs text-[#F4CA26] uppercase tracking-wider font-semibold">
                      Founder &amp; Owner
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  As the founder of Kumar &amp; Sons Tours, Kumar brings decades of hands-on experience in the Sri Lankan tourism industry. His deep-rooted local knowledge, intimate understanding of the country's roads and regions, and natural warmth allow him to understand travellers from all parts of the world, ensuring every guest feels secure, cared for, and thoroughly welcomed.
                </p>
              </div>

              {/* Chathuranga (Chathu) */}
              <div className="bg-white/5 rounded-2xl p-7 sm:p-8 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-serif font-bold text-lg">
                    C
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">
                      Chathuranga (Chathu)
                    </h3>
                    <p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                      Next Generation
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Chathuranga represents the next generation of the family business. Growing up immersed in Sri Lankan hospitality, he is actively continuing and developing the family's tourism tradition. Combining modern communication, responsive planning, and the foundational family values of honesty and attentiveness, he ensures that every itinerary runs seamlessly from initial contact to journey's end.
                </p>
              </div>

            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#F4CA26]" />
                <span>Direct family contact throughout your planning and tour</span>
              </div>
              <a
                href={getWhatsAppUrl("Hello Kumar & Chathu, I would like to speak with you about planning a tour in Sri Lanka.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#F4CA26] font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Message Kumar &amp; Chathu on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. USE IMAGE G6 (Image alongside editorial content)
            ========================================================================= */}
        <section className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-10 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image G6 */}
            <div className="lg:col-span-5 w-full order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/G6.jpg"
                  alt="Authentic Sri Lanka travel moments with local guidance and genuine hospitality"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
                Beyond Standard Tourism
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-snug">
                Local Knowledge. Personal Service. Genuine Experiences.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Travelling with a dedicated local Sri Lankan team offers something a generic package tour simply cannot replicate: authentic personal connection.
                </p>
                <p>
                  Instead of following large tour bus crowds or rigid schedules, private travel allows you to explore the island on human terms. When you travel with us, your driver-guide isn't just navigating roads — they are sharing the stories behind the ancient stone ruins, introducing you to village traditions, pointing out endemic birds in the canopy, and suggesting the tastiest local fruit at roadside stalls.
                </p>
                <p>
                  Our local presence means we have real relationships with local communities, wildlife trackers, boutique hotels, and artisans across every province. That makes your journey feel personal, spontaneous, and genuinely memorable.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0D7C78] hover:bg-[#0a615e] transition-all shadow-xs cursor-pointer"
                >
                  <span>Design a Personal Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            6. WHAT 40 YEARS HAS TAUGHT US
            Storytelling section
            ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              Reflections on Island Journeys
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              What 40 Years in Tourism Has Taught Us
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Four decades on the roads of Sri Lanka have shaped how we view travel. These simple truths guide how we plan every journey today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Lesson 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-[#0D7C78] tracking-wider uppercase">01 · Pacing</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                The best journeys are not always the busiest.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Rushing to check ten sights off a list leaves you exhausted. Giving each place time to breathe reveals its true magic and leaves you refreshed.
              </p>
            </div>

            {/* Lesson 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-[#0D7C78] tracking-wider uppercase">02 · Memory</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Travellers remember experiences more than schedules.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Years later, guests rarely talk about the exact departure times; they remember the warmth of a village smile, the morning mist over the tea hills, or watching an elephant by the lake.
              </p>
            </div>

            {/* Lesson 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-[#0D7C78] tracking-wider uppercase">03 · Adaptability</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Flexibility matters.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Weather shifts, spontaneous opportunities arise, and travel fatigue can happen. Being able to adapt a day's plan on the spot makes all the difference.
              </p>
            </div>

            {/* Lesson 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-[#0D7C78] tracking-wider uppercase">04 · Insight</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Local knowledge makes a difference.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Knowing the quietest hour to visit Sigiriya Rock, the best curve on the train ride, or which roadside cafe brews fresh Ceylon tea cannot be replaced by an algorithm.
              </p>
            </div>

            {/* Lesson 5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-[#0D7C78] tracking-wider uppercase">05 · Integrity</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Good communication creates trust.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Clear, honest, and prompt answers before booking and throughout the journey give travellers genuine peace of mind from start to finish.
              </p>
            </div>

            {/* Lesson 6 & 7 combined */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-[#0D7C78] tracking-wider uppercase">06 &amp; 07 · Attentiveness</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Every traveller is unique, and little details matter.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                No two holidays should look identical. Cold water bottles on a tropical afternoon, a careful driver, or an unexpected photo stop are what turn a trip into a treasure.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. FIVE-IMAGE VISUAL STORYTELLING SECTION
            Images: G4.jpg, G6.jpg, G7.jpg, G8.jpg, G10.jpg
            Photography-led layout (no labels/text over images, responsive)
            ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
                Visual Storytelling
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                Capturing the Spirit of Sri Lanka
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
              Real moments, authentic landscapes, and journeys shaped by forty years of island exploration.
            </p>
          </div>

          {/* Photography-led Masonry / Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
            
            {/* 1. Large Feature Image: G4.jpg (Spans 7 cols on desktop) */}
            <div className="sm:col-span-2 lg:col-span-7 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-2xs group aspect-[16/10] sm:aspect-[16/11]">
              <img
                src="/images/G4.jpg"
                alt="Scenic travel journey across Sri Lanka's beautiful countryside"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* 2. Medium Image: G6.jpg (Spans 5 cols on desktop) */}
            <div className="sm:col-span-1 lg:col-span-5 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-2xs group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/G6.jpg"
                alt="Exploring authentic Sri Lankan heritage, nature and local culture"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* 3. Medium Image: G7.jpg (Spans 4 cols on desktop) */}
            <div className="sm:col-span-1 lg:col-span-4 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-2xs group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/G7.jpg"
                alt="Historic cultural landmarks and tranquil landscapes of Sri Lanka"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* 4. Supporting Image: G8.jpg (Spans 4 cols on desktop) */}
            <div className="sm:col-span-1 lg:col-span-4 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-2xs group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/G8.jpg"
                alt="Lush tropical scenery and serene highland views in Sri Lanka"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* 5. Supporting Image: G10.jpg (Spans 4 cols on desktop) */}
            <div className="sm:col-span-1 lg:col-span-4 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-2xs group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/G10.jpg"
                alt="Picturesque coastal shores and peaceful island horizons in Sri Lanka"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        {/* =========================================================================
            8. OUR APPROACH TO EVERY JOURNEY
            ========================================================================= */}
        <section className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 lg:p-16 shadow-xs space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              How We Work With You
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Our Approach to Every Journey
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We look at travel as a collaborative craft. Here is how we ensure your holiday feels effortless from the very first conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Approach 1 */}
            <div className="bg-neutral-50/80 rounded-2xl p-7 border border-neutral-200/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Before You Travel
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We listen to what you want from your Sri Lanka holiday and help shape the journey around your interests. Whether you have an exact wishlist or just a rough idea, we provide honest advice on pacing, seasonal weather, and travel times.
              </p>
            </div>

            {/* Approach 2 */}
            <div className="bg-neutral-50/80 rounded-2xl p-7 border border-neutral-200/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                During Your Journey
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We focus on professional service, comfortable transportation and making your journey as smooth as possible. Your driver-guide handles the navigation and logistics so you can simply relax and enjoy every mile.
              </p>
            </div>

            {/* Approach 3 */}
            <div className="bg-neutral-50/80 rounded-2xl p-7 border border-neutral-200/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0D7C78] flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Beyond the Itinerary
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We want travellers to experience Sri Lanka rather than simply visit attractions. We encourage spontaneous stops, local tea tastings, scenic viewpoints, and genuine encounters with island life.
              </p>
            </div>

            {/* Approach 4 */}
            <div className="bg-neutral-50/80 rounded-2xl p-7 border border-neutral-200/60 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Your Journey, Your Way
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Whether you want culture, wildlife, beaches, mountains, food, adventure, photography or a combination of everything, we can help create a journey around you.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. WHY TRAVEL WITH KUMAR & SONS TOURS?
            6 Feature points
            ========================================================================= */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D7C78]">
              The Kumar &amp; Sons Standard
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Why Travel With Kumar &amp; Sons Tours?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              When you choose us, you are choosing four decades of dedication, local care, and honest family values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. 40 Years of Experience */}
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                40 Years of Experience
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Decades of experience in Sri Lankan tourism, giving you seasoned guidance you can rely on completely.
              </p>
            </div>

            {/* 2. Local Expertise */}
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Compass className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Local Expertise
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Knowledge of Sri Lanka's destinations, culture, people and landscapes rooted in a lifetime on the island.
              </p>
            </div>

            {/* 3. Private & Personalised Travel */}
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#0D7C78] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0D7C78]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Private &amp; Personalised Travel
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Journeys designed around your interests, your preferred pace, and your personal travel schedule.
              </p>
            </div>

            {/* 4. Professional Service */}
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Professional Service
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                A strong focus on reliability, clear communication, punctual logistics, and genuine customer care.
              </p>
            </div>

            {/* 5. Comfortable Transportation */}
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                <Car className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                Comfortable Transportation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Reliable vehicles and experienced drivers for safe, air-conditioned private journeys across all terrain.
              </p>
            </div>

            {/* 6. A Family You Can Trust */}
            <div className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-700" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900">
                A Family You Can Trust
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                A family-run tourism business with a long-standing personal connection to travellers visiting Sri Lanka.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            TRIPADVISOR VERIFIED REVIEWS WIDGET (Social Proof)
            ========================================================= */}
        <section>
          <TripAdvisorWidget 
            title="Real Reviews From Real Travellers"
            subtitle="Verified feedback from international guests who discovered Sri Lanka with Kumar & Sons Tours."
          />
        </section>

        {/* =========================================================================
            10. FINAL CTA SECTION
            ========================================================================= */}
        <section className="bg-gradient-to-br from-neutral-950 via-[#111C21] to-[#0D7C78]/80 text-white rounded-3xl p-8 sm:p-14 lg:p-16 shadow-xl border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F4CA26] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#F4CA26]" />
              <span>Personal Service · 40 Years of Experience</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Your Sri Lanka Story Starts Here
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed">
              Let our experience help you discover Sri Lanka in a way that is personal, comfortable and unforgettable.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/sri-lanka-tours/')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-neutral-950 bg-[#F4CA26] hover:bg-[#e5bc1f] transition-all shadow-md cursor-pointer uppercase tracking-wider inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-neutral-950" />
                <span>Explore Our Tours</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-xs transition-all shadow-md cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Create Your Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct WhatsApp contact support */}
            <div className="pt-4">
              <a
                href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to inquire about planning a trip to Sri Lanka.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Prefer to chat directly? Message us on WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
