import React from 'react';
import { Destination } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  onNavigate: (path: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onNavigate }) => {
  const url = `/destinations/${destination.slug}/`;

  return (
    <article className="group bg-white rounded-xl border border-neutral-200 overflow-hidden flex flex-col hover:border-neutral-300 transition-all hover:shadow-md">
      <a
        href={url}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(url);
        }}
        className="block relative aspect-[4/3] overflow-hidden bg-neutral-100"
      >
        <img
          src={destination.heroImage}
          alt={`${destination.name} - Sri Lanka Travel Guide`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="400"
          height="300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[11px] font-medium text-amber-300 tracking-wider uppercase block">
            {destination.region}
          </span>
          <h3 className="font-serif text-xl font-bold leading-tight drop-shadow-sm">
            {destination.name}
          </h3>
        </div>
      </a>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
          {destination.intro}
        </p>

        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-medium">
            {destination.thingsToDo.length} Key Highlights
          </span>
          <a
            href={url}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(url);
            }}
            className="font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Explore Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
