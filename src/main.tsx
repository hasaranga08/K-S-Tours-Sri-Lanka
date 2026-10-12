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

  // Automatically rewrite origin-relative image paths (/images/...) to include base path on subpath deployments
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base) {
    const originalSrcDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
    if (originalSrcDesc && originalSrcDesc.set) {
      const originalSet = originalSrcDesc.set;
      Object.defineProperty(HTMLImageElement.prototype, 'src', {
        set(value: string) {
          if (typeof value === 'string' && value.startsWith('/images/')) {
            originalSet.call(this, `${base}${value}`);
          } else {
            originalSet.call(this, value);
          }
        },
        get: originalSrcDesc.get,
        configurable: true,
        enumerable: true,
      });
    }

    // Fallback error handler in case an image is created outside the standard prototype setter
    window.addEventListener(
      'error',
      (e) => {
        const target = e.target as HTMLElement;
        if (target && target.tagName === 'IMG') {
          const img = target as HTMLImageElement;
          const currentSrc = img.getAttribute('src');
          if (currentSrc && currentSrc.startsWith('/images/')) {
            img.src = `${base}${currentSrc}`;
          }
        }
      },
      true
    );
  }
}

createRoot(document.getElementById('root')!).render(<App />);
