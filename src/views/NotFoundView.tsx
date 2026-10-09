import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Compass, ArrowRight, Home, Calendar } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (path: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "Page Not Found (404) | KS Tours Sri Lanka",
    description: "The page or itinerary you requested could not be found. Explore our authentic private Sri Lanka tours, day trips, and custom itineraries.",
    noIndex: true
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-amber-50 text-amber-700 mx-auto flex items-center justify-center">
        <Compass className="w-10 h-10 text-amber-700" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Error 404</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
          The page or itinerary you requested may have moved or been updated. Let us help you find the right route for your Sri Lanka journey.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
        <button
          onClick={() => onNavigate('/sri-lanka-tours/')}
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#0D7C78] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#0A5F5C] transition-colors cursor-pointer shadow-xs"
        >
          <Calendar className="w-4 h-4" />
          <span>Browse Tour Packages</span>
        </button>
        <button
          onClick={() => onNavigate('/day-tours/')}
          className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 text-neutral-800 rounded-xl text-xs sm:text-sm font-semibold hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <span>View Day Tours</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
