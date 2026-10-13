import { useEffect, createContext, useContext } from 'react';
import { COMPANY_INFO } from '../data/company';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: object | object[];
  noIndex?: boolean;
}

export interface SEOContextType {
  setSEO: (props: SEOProps) => void;
  getSEO: () => SEOProps | undefined;
}

export const SEOContext = createContext<SEOContextType | null>(null);

export function useSEO({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = '/images/Slide1.jpg',
  schema,
  noIndex = false,
}: SEOProps) {
  const seoCtx = useContext(SEOContext);
  if (seoCtx) {
    seoCtx.setSEO({
      title,
      description,
      canonicalPath,
      ogType,
      ogImage,
      schema,
      noIndex,
    });
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // 1. Title formatting: ensure KS Tours or Kumar & Sons branding
    const fullTitle = title.includes('Kumar & Sons') || title.includes('KS Tours')
      ? title
      : `${title} | KS Tours Sri Lanka`;
    document.title = fullTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Robots meta (index vs noindex)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noIndex ? 'noindex, follow' : 'index, follow');

    // 4. Canonical URL resolution with strict trailing slash
    let cleanPath = canonicalPath.trim();
    if (cleanPath.startsWith('/')) {
      cleanPath = cleanPath.slice(1);
    }
    if (cleanPath.length > 0 && !cleanPath.endsWith('/')) {
      cleanPath = `${cleanPath}/`;
    }
    const fullCanonical = cleanPath.length === 0 
      ? `${COMPANY_INFO.canonicalOrigin}/` 
      : `${COMPANY_INFO.canonicalOrigin}/${cleanPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonical);

    // 5. OpenGraph & Twitter helper
    const setMeta = (attrName: 'property' | 'name', attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const absoluteImage = ogImage.startsWith('http')
      ? ogImage
      : `${COMPANY_INFO.canonicalOrigin}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

    // OpenGraph tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', COMPANY_INFO.name);
    setMeta('property', 'og:image', absoluteImage);

    // Twitter Card tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absoluteImage);

    // 6. Schema.org JSON-LD
    let scriptTag = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, ogType, ogImage, noIndex, JSON.stringify(schema)]);
}
