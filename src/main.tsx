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
}

createRoot(document.getElementById('root')!).render(<App />);
