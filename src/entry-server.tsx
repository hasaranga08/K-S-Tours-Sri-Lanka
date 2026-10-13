import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { SEOContext, SEOProps } from './hooks/useSEO';

export function render(url: string): { html: string; seo?: SEOProps } {
  let capturedSEO: SEOProps | undefined;

  const seoContextValue = {
    setSEO: (props: SEOProps) => {
      capturedSEO = props;
    },
    getSEO: () => capturedSEO,
  };

  const html = renderToString(
    <SEOContext.Provider value={seoContextValue}>
      <App initialPath={url} />
    </SEOContext.Provider>
  );

  return { html, seo: capturedSEO };
}
