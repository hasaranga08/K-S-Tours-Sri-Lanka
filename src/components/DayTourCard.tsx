import React from 'react';
import { DayTourPackage } from '../data/dayTours';
import { getWhatsAppUrl } from '../data/company';
import { Clock, MapPin, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

interface DayTourCardProps {
  tour: DayTourPackage;
  onNavigate: (path: string) => void;
  className?: string;
}

export const DayTourCard: React.FC<DayTourCardProps> = ({ tour, onNavigate, className = "" }) => {
  const tourUrl = `/day-tours/${tour.slug}/`;

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(tourUrl);
  };

  const whatsappUrl = getWhatsAppUrl(
    `Hello Kumar & Sons Tours, I am interested in booking the "${tour.title}". Could you please provide quotation and availability?`
  );

  return (
    <article className={`group relative bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-1.5 border border-neutral-200/60 ${className}`}>
      {/* Photography Header */}
      <div 
        onClick={handleNavigate}
        className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer"
      >
        <img
          src={tour.heroImage}
          alt={`${tour.title} - Sri Lanka Day Tour`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          loading="lazy"
          width="600"
          height="400"
        />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        
        {/* Floating Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0C1519]/75 text-[#F4CA26] backdrop-blur-md border border-white/10">
            <Clock className="w-3 h-3 text-[#F4CA26]" />
            <span>Day Tour</span>
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md">
            <span>{tour.duration.split('(')[0].trim()}</span>
          </span>
        </div>

        {/* Start Location Teaser */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-xs text-neutral-200 mb-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#F4CA26] shrink-0" />
            <span className="line-clamp-1 font-medium text-xs drop-shadow-xs">
              Pickup: {tour.startPoint.split('(')[0].trim()}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#0D7C78] transition-colors leading-snug line-clamp-2">
            <a href={tourUrl} onClick={handleNavigate}>
              {tour.title}
            </a>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {tour.overview}
          </p>

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="mt-4 pt-3 border-t border-neutral-100 space-y-1.5">
              {tour.highlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D7C78] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
            title="Inquire directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={handleNavigate}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0D7C78] hover:bg-[#0A5F5C] shadow-2xs transition-all cursor-pointer"
          >
            <span>View Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
