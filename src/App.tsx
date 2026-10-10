import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

import { HomeView } from './views/HomeView';
import { ToursListView } from './views/ToursListView';
import { TourDetailView } from './views/TourDetailView';
import { DayToursListView } from './views/DayToursListView';
import { DayTourDetailView } from './views/DayTourDetailView';
import { DestinationsListView } from './views/DestinationsListView';
import { DestinationDetailView } from './views/DestinationDetailView';
import { RouteDetailView } from './views/RouteDetailView';
import { PrivateDriverView } from './views/PrivateDriverView';
import { AirportTransfersView } from './views/AirportTransfersView';
import { ItinerariesComparisonView } from './views/ItinerariesComparisonView';
import { BlogListView } from './views/BlogListView';
import { BlogDetailView } from './views/BlogDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { GalleryView } from './views/GalleryView';
import { ActivitiesView } from './views/ActivitiesView';
import { TailorMadeView } from './views/TailorMadeView';
import { NotFoundView } from './views/NotFoundView';

import { TOURS } from './data/tours';
import { DAY_TOURS } from './data/dayTours';
import { DESTINATIONS } from './data/destinations';
import { TRAVEL_ROUTES } from './data/routes';
import { BLOG_POSTS } from './data/blog';
import { Compass, ArrowRight } from 'lucide-react';

// Base path configured for deployment (e.g. '/K-S-Tours-Sri-Lanka' on GitHub Pages or '' on custom domain)
const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

const stripBasePath = (pathname: string): string => {
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    const stripped = pathname.slice(BASE_PATH.length);
    return stripped.startsWith('/') ? stripped : `/${stripped}`;
  }
  return pathname || '/';
};

const withBasePath = (route: string): string => {
  if (!BASE_PATH) return route;
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  return `${BASE_PATH}${cleanRoute}`;
};

export default function App() {
  // Support GitHub Pages SPA redirect query: ?/destinations/sigiriya/
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    
    const search = window.location.search;
    if (search.startsWith('?/')) {
      const redirectedPath = search.slice(1).split('&')[0].replace(/~and~/g, '&');
      const cleanPath = redirectedPath.startsWith('/') ? redirectedPath : `/${redirectedPath}`;
      window.history.replaceState(null, '', withBasePath(cleanPath));
      return cleanPath;
    }
    
    return stripBasePath(window.location.pathname) || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(stripBasePath(window.location.pathname) || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    // Ensure clean trailing slash for SEO consistency
    const normalized = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);

    // If navigating to the exact same page, ensure immediate scroll to top
    if (normalized === currentPath && !window.location.hash) {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    window.history.pushState(null, '', withBasePath(normalized));
    setCurrentPath(normalized);
  };

  // Router matcher
  const renderCurrentView = () => {
    const path = currentPath;

    // Homepage
    if (path === '/' || path === '') {
      return <HomeView onNavigate={navigateTo} />;
    }

    // Core Tours & Packages Listing
    if (path === '/sri-lanka-tours/' || path === '/sri-lanka-tour-packages/' || path === '/private-sri-lanka-tours/') {
      return <ToursListView onNavigate={navigateTo} defaultCategory="all" />;
    }

    if (path === '/tailor-made-sri-lanka-tours/' || path === '/tailor-made-tours/') {
      return <TailorMadeView onNavigate={navigateTo} />;
    }

    if (path === '/sri-lanka-honeymoon/') {
      return <ToursListView onNavigate={navigateTo} defaultCategory="honeymoon" />;
    }

    if (path === '/sri-lanka-family-tours/') {
      return <ToursListView onNavigate={navigateTo} defaultCategory="family" />;
    }

    if (path === '/sri-lanka-safari-tours/') {
      return <ToursListView onNavigate={navigateTo} defaultCategory="safari" />;
    }

    // Day Tours Hub: /day-tours/ (integrated filter into tours)
    if (path === '/day-tours/') {
      return <ToursListView onNavigate={navigateTo} defaultCategory="day-tours" />;
    }

    // Activities Hub: /activities/ & /things-to-do-in-sri-lanka/
    if (path === '/activities/' || path === '/things-to-do-in-sri-lanka/') {
      return <ActivitiesView onNavigate={navigateTo} />;
    }

    // Photo Gallery: /gallery/
    if (path === '/gallery/') {
      return <GalleryView onNavigate={navigateTo} />;
    }

    // Individual Day Tour: /day-tours/:slug/
    if (path.startsWith('/day-tours/')) {
      const slug = path.replace('/day-tours/', '').replace(/\//g, '');
      const matchedDayTour = DAY_TOURS.find((dt) => dt.slug === slug);
      if (matchedDayTour) {
        return <DayTourDetailView tour={matchedDayTour} onNavigate={navigateTo} />;
      }
    }

    // Route Guides: /routes/:slug/
    if (path.startsWith('/routes/')) {
      const slug = path.replace('/routes/', '').replace(/\//g, '');
      const matchedRoute = TRAVEL_ROUTES.find((r) => r.slug === slug);
      if (matchedRoute) {
        return <RouteDetailView route={matchedRoute} onNavigate={navigateTo} />;
      }
    }

    // Services
    if (path === '/sri-lanka-private-driver/') {
      return <PrivateDriverView onNavigate={navigateTo} />;
    }

    if (path === '/sri-lanka-airport-transfers/') {
      return <AirportTransfersView onNavigate={navigateTo} />;
    }

    // Itineraries Directory
    if (path === '/itineraries/') {
      return <ItinerariesComparisonView onNavigate={navigateTo} />;
    }

    // Tour Detail View: /itineraries/:slug/
    if (path.startsWith('/itineraries/')) {
      const rawSlug = path.replace('/itineraries/', '').replace(/\//g, '');
      let resolvedSlug = rawSlug;
      if (rawSlug === 'sri-lanka-honeymoon-package') resolvedSlug = 'sri-lanka-honeymoon';
      else if (rawSlug === 'sri-lanka-family-adventure') resolvedSlug = 'sri-lanka-family-tours';
      else if (rawSlug === 'sri-lanka-wildlife-safari') resolvedSlug = 'sri-lanka-safari-tours';
      else if (rawSlug === 'sri-lanka-private-driver-tour') resolvedSlug = 'tailor-made-sri-lanka-tours';

      const matchedTour = TOURS.find((t) => t.slug === resolvedSlug);
      if (matchedTour) {
        return <TourDetailView tour={matchedTour} onNavigate={navigateTo} />;
      }
    }

    // Destinations Directory
    if (path === '/destinations/') {
      return <DestinationsListView onNavigate={navigateTo} />;
    }

    // Destination Detail View: /destinations/:slug/
    if (path.startsWith('/destinations/')) {
      const slug = path.replace('/destinations/', '').replace(/\//g, '');
      const matchedDest = DESTINATIONS.find((d) => d.slug === slug);
      if (matchedDest) {
        return <DestinationDetailView destination={matchedDest} onNavigate={navigateTo} />;
      }
    }

    // Travel Guides / Blog
    if (path === '/sri-lanka-travel-guide/' || path === '/blog/') {
      return <BlogListView onNavigate={navigateTo} />;
    }

    if (path.startsWith('/sri-lanka-travel-guide/') || path.startsWith('/blog/')) {
      const cleanSlug = path
        .replace('/sri-lanka-travel-guide/', '')
        .replace('/blog/', '')
        .replace(/\//g, '');

      // Support slug aliases
      let resolvedSlug = cleanSlug;
      if (cleanSlug === 'scenic-train-kandy-to-ella') {
        resolvedSlug = 'kandy-to-ella-scenic-train-guide';
      } else if (cleanSlug === 'yala-vs-udawalawe-safari') {
        resolvedSlug = 'yala-or-udawalawe-safari-guide';
      }

      const matchedPost = BLOG_POSTS.find((p) => p.slug === resolvedSlug);
      if (matchedPost) {
        return <BlogDetailView post={matchedPost} onNavigate={navigateTo} />;
      }
    }

    // Trust & Contact Pages
    if (path === '/about/') {
      return <AboutView onNavigate={navigateTo} />;
    }

    if (path === '/contact/') {
      return <ContactView onNavigate={navigateTo} />;
    }

    // 404 Fallback with noindex SEO headers
    return <NotFoundView onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <ScrollToTop currentPath={currentPath} />
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <FloatingWhatsApp contextTitle={currentPath !== '/' ? currentPath.replace(/\//g, ' ').trim() : undefined} />
    </div>
  );
}
