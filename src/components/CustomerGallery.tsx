import React, { useState, useEffect } from 'react';
import { MapPin, X, ZoomIn, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  showTextOverlay?: boolean;
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
  showTextOverlay = false,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const displayed = items.slice(0, maxItems);

  // Keyboard navigation & escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) =>
          prev !== null && prev < displayed.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : displayed.length - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, displayed.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [selectedPhotoIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : displayed.length - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev < displayed.length - 1 ? prev + 1 : 0
    );
  };

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
          {displayed.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
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
              
              {/* Subtle hover overlay and zoom icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>

              {showTextOverlay && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
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
                </>
              )}
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

      {/* Lightbox Modal - Photograph Only */}
      {selectedPhotoIndex !== null && displayed[selectedPhotoIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image button */}
          {displayed.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer backdrop-blur-xs border border-white/10"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Next image button */}
          {displayed.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer backdrop-blur-xs border border-white/10"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Center Image Container - Photograph Only (No labels, location names, or captions) */}
          <div
            className="relative max-w-7xl max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayed[selectedPhotoIndex].src}
              alt={displayed[selectedPhotoIndex].alt}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-transform duration-200"
            />
          </div>
        </div>
      )}
    </section>
  );
};
