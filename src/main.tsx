import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppress benign ResizeObserver notification warnings commonly triggered by third-party widgets (e.g., Elfsight)
if (typeof window !== 'undefined') {
  const isResizeObserverError = (msg?: string | Event) => {
    if (!msg) return false;
    const text = typeof msg === 'string' ? msg : (msg as ErrorEvent).message || '';
    return (
      text.includes('ResizeObserver loop completed with undelivered notifications') ||
      text.includes('ResizeObserver loop limit exceeded')
    );
  };

  window.addEventListener(
    'error',
    (event) => {
      if (isResizeObserverError(event.message)) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    },
    true
  );

  const prevOnError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (typeof message === 'string' && isResizeObserverError(message)) {
      return true;
    }
    if (prevOnError) {
      return prevOnError(message, source, lineno, colno, error);
    }
    return false;
  };

  // When deployed under a subpath on GitHub Pages (/K-S-Tours-Sri-Lanka/),
  // intercept any images that fail due to origin-relative paths (/images/...) and retry with the base path.
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base) {
    window.addEventListener(
      'error',
      (event) => {
        const target = event.target as HTMLElement | null;
        if (target && target.tagName === 'IMG') {
          const img = target as HTMLImageElement;
          const currentSrc = img.getAttribute('src');
          if (currentSrc && currentSrc.startsWith('/images/') && !currentSrc.startsWith(`${base}/`)) {
            img.src = `${base}${currentSrc}`;
          }
        }
      },
      true
    );
  }
}

createRoot(document.getElementById('root')!).render(<App />);
