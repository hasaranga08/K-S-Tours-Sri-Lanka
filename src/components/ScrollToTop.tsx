import React, { useEffect, useLayoutEffect, useRef } from 'react';

interface ScrollToTopProps {
  currentPath: string;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Centrally manages scroll positioning on route navigation.
 * - Instantly resets scroll position to the top (0, 0) on pathname changes.
 * - Preserves in-page anchor navigation (e.g. #tour-enquiry, #driver-enquiry).
 * - Avoids animated/smooth scroll conflicts during page transitions.
 */
export const ScrollToTop: React.FC<ScrollToTopProps> = ({ currentPath }) => {
  const prevPathRef = useRef<string>(currentPath);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // Extract pathname portion (strip query and hash for comparison)
    const currentPathname = currentPath.split('?')[0].split('#')[0];
    const prevPathname = prevPathRef.current.split('?')[0].split('#')[0];

    // If pathname changed or on initial load
    const isNewPath = currentPathname !== prevPathname;
    prevPathRef.current = currentPath;

    // Check if an anchor hash is present in the URL
    const hash = window.location.hash;

    if (hash) {
      // Respect in-page anchor navigation
      const elementId = hash.replace(/^#/, '');
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // If there is no hash and we navigated to a new page (or requested top)
    if (!hash) {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Ensure that subsequent layout shifts or image renders do not trap scroll position
      const frameId = requestAnimationFrame(() => {
        if (!window.location.hash) {
          try {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          } catch {
            window.scrollTo(0, 0);
          }
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      });

      return () => cancelAnimationFrame(frameId);
    }
  }, [currentPath]);

  // Handle in-page hashchange events smoothly without page reload
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.replace(/^#/, '');
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
};
