import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';
import { assetUrl } from '../utils/asset';

interface PageBannerProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  badge?: string | React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
  actions?: React.ReactNode;
  className?: string;
  minHeightClass?: string;
  image?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
  onNavigate,
  actions,
  className = '',
  minHeightClass = 'min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]',
  image = '/images/banner.webp'
}) => {
  return (
    <section 
      aria-label="Page Hero Banner" 
      className={`relative w-full bg-neutral-950 overflow-hidden text-white ${className}`}
    >
      {/* Background Image using banner.jpg with cover & centered focal point */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url('${assetUrl(image)}')`,
          backgroundPosition: 'center 40%'
        }}
        aria-hidden="true"
      />

      {/* Subtle high-legibility dark overlay gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/92 via-neutral-950/78 to-neutral-900/65"
        aria-hidden="true" 
      />

      {/* Banner Content Container — begins right under navbar */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${minHeightClass} flex flex-col justify-center`}>
        {/* Integrated Breadcrumbs */}
        {breadcrumbs && onNavigate && (
          <div className="mb-3 sm:mb-4">
            <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} lightText={true} />
          </div>
        )}

        {/* Optional Pill Badge */}
        {badge && (
          <div className="mb-2 sm:mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#F4CA26]">
              {badge}
            </span>
          </div>
        )}

        {/* Single H1 Page Heading */}
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-200 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Optional CTA buttons / action links */}
        {actions && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
};
