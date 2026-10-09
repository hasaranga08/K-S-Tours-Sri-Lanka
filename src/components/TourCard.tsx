import React from 'react';
import { TourPackage } from '../types';
import { getWhatsAppUrl } from '../data/company';
import { ArrowRight, MessageCircle, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface TourCardProps {
  tour: TourPackage;
  onNavigate: (path: string) => void;
  className?: string;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onNavigate, className = "" }) => {
  const tourUrl = `/itineraries/${tour.slug}/`;

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(tourUrl);
  };

  return (
    <article className={`group relative bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-1.5 border border-neutral-200/60 ${className}`}>
      
      {/* Large Photography Header with Soft Vignette */}
      <div 
        onClick={handleNavigate}
        className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer"
      >
        <img
          src={tour.heroImage}
          alt={`${tour.title} - Sri Lanka Tour`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          loading="lazy"
          width="600"
          height="400"
        />
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        
        {/* Floating Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0C1519]/75 text-[#F4CA26] backdrop-blur-md border border-white/10">
            <Sparkles className="w-3 h-3 text-[#F4CA26]" />
            <span>{tour.category === 'classic' ? 'Signature' : tour.category}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md">
            <Clock className="w-3 h-3 text-neutral-300" />
            <span>{tour.durationLabel}</span>
          </span>
        </div>

        {/* Bottom Destination Teaser inside image */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-xs text-neutral-200 mb-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#F4CA26] shrink-0" />
            <span className="line-clamp-1 font-medium text-xs drop-shadow-xs">
              {tour.destinations.slice(0, 4).join('  ·  ')}
              {tour.destinations.length > 4 ? '...' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Tour Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#0D7C78] transition-colors leading-snug">
            <a href={tourUrl} onClick={handleNavigate}>
              {tour.title}
            </a>
          </h3>

          {/* Tour Short Overview */}
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {tour.overview}
          </p>

          {/* Highlights Mini List */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
              {tour.highlights.slice(0, 2).map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-[11px] text-neutral-600 bg-neutral-50 px-2 py-0.5 rounded-md border border-neutral-200/60">
                  <ShieldCheck className="w-3 h-3 text-[#0D7C78]" />
                  <span className="line-clamp-1">{h.split(' ').slice(0, 5).join(' ')}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Bottom Row */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <a
            href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I am interested in the "${tour.title}" (${tour.durationLabel}). Could you provide a customized itinerary & quote?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition-colors"
            title="Chat on WhatsApp about this tour"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href={tourUrl}
            onClick={handleNavigate}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0D7C78] hover:bg-[#0A5F5C] shadow-2xs group-hover:shadow-md transition-all cursor-pointer"
          >
            <span>Explore Tour</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

    </article>
  );
};
