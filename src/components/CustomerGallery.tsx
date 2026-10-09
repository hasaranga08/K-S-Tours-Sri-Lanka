import React, { useState } from 'react';
import { MapPin, X, ZoomIn, ShieldCheck, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, HOMEPAGE_GALLERY_IMAGES, GalleryItem } from '../data/gallery';

interface CustomerGalleryProps {
  title?: string;
  subtitle?: string;
  className?: string;
  items?: GalleryItem[];
  onNavigate?: (path: string) => void;
  showViewAllButton?: boolean;
  maxItems?: number;
  categoryFilter?: string;
}

export const CustomerGallery: React.FC<CustomerGalleryProps> = ({
  title = "Real Journeys With KS Tours",
  subtitle = "Genuine photographs of our real travelers, private vehicles, wildlife safaris, and iconic destinations across Sri Lanka with Kumar and Chathuranga.",
  className = "",
  items = HOMEPAGE_GALLERY_IMAGES,
  onNavigate,
  showViewAllButton = true,
  maxItems = 8,
  categoryFilter,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const displayed = items.slice(0, maxItems);

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/gallery/');
    } else {
      window.location.href = '/gallery/';
    }
  };

  return (
    <section className={`py-12 bg-neutral-50/60 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D7C78] bg-[#0D7C78]/10 px-3.5 py-1.5 rounded-full border border-[#0D7C78]/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D7C78]" />
            <span>100% Authentic Moments &middot; Nearly 40 Years of Guiding</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 6-8 Curated Real Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayed.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[4/3] hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width="600"
                height="450"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-medium text-[#F4CA26] flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-[#F4CA26] shrink-0" />
                  <span>{photo.location}</span>
                </span>
                <h3 className="text-xs sm:text-sm font-semibold leading-snug line-clamp-1 drop-shadow-xs">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-neutral-300 leading-tight line-clamp-1 mt-0.5 opacity-90">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Gallery Button */}
        {showViewAllButton && (
          <div className="mt-10 text-center">
            <a
              href="/gallery/"
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D7C78] hover:bg-[#0A5F5C] text-white rounded-xl text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>View All Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/90 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-medium text-neutral-300">{selectedPhoto.location}</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-neutral-900 border-t border-neutral-800 text-white">
              <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                {selectedPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
