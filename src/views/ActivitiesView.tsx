import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { ACTIVITIES, ActivityItem } from '../data/activities';
import { 
  Compass, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  Sun,
  ShieldCheck,
  Palmtree,
  Camera,
  Coffee,
  Waves,
  Utensils
} from 'lucide-react';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/company';

interface ActivitiesViewProps {
  onNavigate: (path: string) => void;
}

export const ActivitiesView: React.FC<ActivitiesViewProps> = ({ onNavigate }) => {
  useSEO({
    title: 'Things to Do in Sri Lanka | Activities & Experiences | KS Tours',
    description: 'Discover the best things to do in Sri Lanka: wildlife safaris, ancient Sigiriya climbs, scenic blue train rides, tea plantation tastings, whale watching, and authentic cooking experiences with Kumar & Sons Tours.',
    canonicalPath: '/activities/',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Things to Do in Sri Lanka — Top Activities & Experiences',
      description: 'Comprehensive guide to the finest activities in Sri Lanka including safaris, ancient culture, tea country treks, surfing, and culinary experiences.',
      url: 'https://www.kstourssrilanka.com/activities/',
      numberOfItems: ACTIVITIES.length,
      itemListElement: ACTIVITIES.map((act, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: act.title,
        description: act.description,
        image: `https://www.kstourssrilanka.com${act.image}`
      }))
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Activities', icon: Compass },
    { id: 'wildlife', label: 'Wildlife & Safari', icon: Camera },
    { id: 'culture', label: 'Ancient Culture', icon: Sparkles },
    { id: 'adventure', label: 'Mountain & Adventure', icon: Sun },
    { id: 'tea', label: 'Tea Country', icon: Coffee },
    { id: 'beaches', label: 'Beaches & Ocean', icon: Waves },
    { id: 'food', label: 'Food & Village Life', icon: Utensils }
  ];

  const filtered = activeCategory === 'all' 
    ? ACTIVITIES 
    : ACTIVITIES.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Things to Do in Sri Lanka — Top Activities & Experiences"
        subtitle="From open-top 4x4 leopard safaris to sunrise climbs above ancient cloud citadels, scenic blue train rides through high-grown tea hills, and peaceful ocean encounters with giant blue whales."
        badge="Curated Sri Lankan Experiences"
        breadcrumbs={[{ label: 'Activities' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#0D7C78] text-white shadow-md'
                    : 'bg-white text-neutral-700 border border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0D7C78]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Activities Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((activity) => (
            <article
              key={activity.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width="600"
                  height="375"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 text-[#F4CA26] backdrop-blur-md border border-white/10">
                    {activity.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 font-medium drop-shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#F4CA26]" />
                    {activity.location}
                  </span>
                  <span className="flex items-center gap-1 font-medium bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Clock className="w-3 h-3 text-neutral-300" />
                    {activity.duration}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h2 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-[#0D7C78] transition-colors leading-snug">
                    {activity.title}
                  </h2>
                  <p className="text-xs text-[#0D7C78] font-medium mt-1">
                    {activity.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                    {activity.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Linked Tours and WhatsApp CTA */}
                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  {activity.recommendedTours.length > 0 && (
                    <div className="text-xs text-neutral-500">
                      <span className="font-semibold text-neutral-700">Included in: </span>
                      {activity.recommendedTours.map((t, idx) => (
                        <button
                          key={idx}
                          onClick={() => onNavigate(t.slug.startsWith('day-tours') ? `/${t.slug}/` : `/itineraries/${t.slug}/`)}
                          className="text-[#0D7C78] hover:underline font-medium ml-1 cursor-pointer"
                        >
                          {t.title}{idx < activity.recommendedTours.length - 1 ? ',' : ''}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I am interested in including "${activity.title}" in our Sri Lanka trip.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquire This Activity</span>
                    </a>

                    <button
                      onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-neutral-700 hover:text-[#0D7C78] cursor-pointer"
                    >
                      <span>Custom Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tailor-Made Experience Banner */}
        <section className="bg-gradient-to-r from-[#0C1519] to-[#142228] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F4CA26]">
              Personalized Sri Lanka Vacations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Want to Combine These Activities Into One Seamless Route?
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We specialize in tailor-made itineraries. Tell us which activities you love — whether it's leopard safaris, mountain rail rides, surf lessons, or culinary feasts — and Kumar &amp; Chathu will map the ideal route with private chauffeur transport.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl("Hello Kumar & Sons Tours, I would like to design a custom tour with specific activities.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Kumar &amp; Chathu</span>
            </a>
            <button
              onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>Build Custom Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
