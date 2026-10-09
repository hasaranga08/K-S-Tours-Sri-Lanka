import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { ExternalLink, Star, ShieldCheck } from 'lucide-react';

interface TripAdvisorWidgetProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const TripAdvisorWidget: React.FC<TripAdvisorWidgetProps> = ({
  title = "Tripadvisor Reviews & Traveler Ratings",
  subtitle = "Read genuine, unedited feedback from international guests who toured Sri Lanka with Kumar & Sons Tours.",
  className = ""
}) => {
  useEffect(() => {
    // Asynchronously load the official Elfsight script without blocking initial rendering
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Independent &middot; Verified Traveler Reviews</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            {subtitle}
          </p>
        </div>

        {/* Real Uploaded TripAdvisor Certificate / Review Proof Banner */}
        <div className="max-w-3xl mx-auto mb-8 bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xs">
          <a
            href={COMPANY_INFO.tripAdvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            title="View verified reviews on TripAdvisor"
          >
            <img
              src="/images/Review.jpg"
              alt="TripAdvisor guest reviews and ratings for Kumar & Sons Tours Sri Lanka"
              className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
              width="1280"
              height="504"
              loading="lazy"
            />
          </a>
        </div>

        {/* Official Elfsight TripAdvisor Widget Container */}
        <div className="min-h-[160px] flex flex-col items-center justify-center">
          <div
            className="elfsight-app-f1994790-ec26-4652-a9ca-80bc89e49c9d w-full"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Direct Link to Official TripAdvisor Listing */}
        <div className="mt-8 text-center">
          <a
            href={COMPANY_INFO.tripAdvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-lg shadow-2xs hover:shadow-xs transition-all"
          >
            <span>See all traveler reviews on Tripadvisor</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
