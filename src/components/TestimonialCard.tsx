import React from 'react';
import { Testimonial } from '../types';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <figure className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-colors">
      <div>
        {/* Rating stars & verified badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Verified TripAdvisor
          </span>
        </div>

        {/* Verbatim quote */}
        <blockquote className="text-sm text-neutral-800 leading-relaxed italic">
          "{testimonial.quote}"
        </blockquote>
      </div>

      <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
        <div>
          <cite className="font-semibold text-xs text-neutral-900 not-italic block">
            {testimonial.name}
          </cite>
          {testimonial.tourTaken && (
            <span className="text-[11px] text-neutral-500 block">
              {testimonial.tourTaken}
            </span>
          )}
        </div>

        <a
          href={COMPANY_INFO.tripAdvisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-emerald-700 transition-colors text-xs flex items-center gap-1"
          title="View on TripAdvisor"
        >
          <span className="text-[11px] font-medium">TripAdvisor</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </figure>
  );
};
