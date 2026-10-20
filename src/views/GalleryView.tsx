import React, { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { GALLERY_ITEMS } from '../data/gallery';
import { 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { getWhatsAppUrl, COMPANY_INFO } from '../data/company';

interface GalleryViewProps {
  onNavigate: (path: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate }) => {
  // Enhanced SEO configuration
  useSEO({
    title: 'Sri Lanka Travel Gallery & Tour Photos | KS Tours',
    description: 'Explore authentic photos from Sri Lanka tours: real travelers, scenic landmarks, clean air-conditioned vehicles, and wild elephant safaris.',
    canonicalPath: '/gallery/',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Sri Lanka Travel Gallery | KS Tours Sri Lanka',
      description: 'Authentic photographs of travelers, private chauffeur vehicles, wildlife game drives, and heritage destinations across Sri Lanka with Kumar & Sons Tours.',
      url: 'https://www.kstourssrilanka.com/gallery/',
      provider: {
        '@type': 'TravelAgency',
        name: 'Kumar & Sons Tours Sri Lanka',
        url: 'https://www.kstourssrilanka.com/',
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email
      }
    }
  });

  // Lightbox active image index (null when closed)
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation & escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => 
          prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => 
          prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePhotoIndex]);

  return (
    <div className="bg-neutral-50/50 min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Sri Lanka Travel Gallery"
        subtitle="Authentic moments, scenic landscapes, and real traveler memories from our private journeys across Sri Lanka."
        badge="Tour Memories & Landscapes"
        breadcrumbs={[{ label: 'Gallery' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">

        {/* Masonry Travel Photography Layout */}
        <main aria-label="Sri Lanka Travel Photography Gallery">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 [column-fill:_balance]">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-4 sm:mb-6"
              >
                <div
                  onClick={() => setActivePhotoIndex(index)}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo ${index + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePhotoIndex(index);
                    }
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-auto object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle hover overlay with minimal zoom icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-3 rounded-full bg-black/50 text-white backdrop-blur-xs shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Elegant Bottom CTA */}
        <section className="bg-gradient-to-br from-amber-900 to-neutral-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg mt-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/60 px-3 py-1 rounded-md border border-amber-800/80 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Tailor-Made Sri Lanka Journeys</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
              Ready to Experience Sri Lanka with Us?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              Whether you are planning a multi-day island tour, a scenic day excursion, or booking a private driver, Kumar &amp; Sons Tours will personalize every detail for you.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={getWhatsAppUrl("Hello Kumar & Sons Tours, I loved your travel gallery photos and would like to inquire about a private tour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('/tailor-made-sri-lanka-tours/')}
                className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-sm transition-colors cursor-pointer"
              >
                Plan Your Custom Tour
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Clean Fullscreen Lightbox - Focused entirely on photograph */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => 
                prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1
              );
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer backdrop-blur-xs border border-white/10"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Next image button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => 
                prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0
              );
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer backdrop-blur-xs border border-white/10"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Center Image Container - Photograph Only */}
          <div
            className="relative max-w-7xl max-h-[92vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activePhotoIndex].src}
              alt={GALLERY_ITEMS[activePhotoIndex].alt}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg shadow-2xl transition-transform duration-200"
            />
          </div>
        </div>
      )}
    </div>
  );
};
