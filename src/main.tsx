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
  // automatically rewrite origin-relative image paths (/images/...) to include the base path
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base) {
    try {
      const originalDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
      if (originalDesc && originalDesc.set) {
        Object.defineProperty(HTMLImageElement.prototype, 'src', {
          set(value: string) {
            if (typeof value === 'string' && value.startsWith('/images/') && !value.startsWith(`${base}/`)) {
              originalDesc.set!.call(this, `${base}${value}`);
            } else {
              originalDesc.set!.call(this, value);
            }
          },
          get() {
            return originalDesc.get!.call(this);
          },
          configurable: true,
          enumerable: true,
        });
      }
    } catch {
      // Fallback to error listener if descriptor modification is restricted
    }

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
