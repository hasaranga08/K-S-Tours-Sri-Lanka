import React from 'react';
import { COMPANY_INFO } from '../data/company';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  lightText?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, lightText = false }) => {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', path: '/' }, ...items];

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.path ? `${COMPANY_INFO.canonicalOrigin}${item.path}` : undefined,
    })),
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-1 text-xs ${lightText ? 'text-neutral-300' : 'text-neutral-600'}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.label + index} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className={lightText ? 'text-neutral-400' : 'text-neutral-400'} aria-hidden="true">
                  /
                </span>
              )}
              {isLast || !item.path ? (
                <span className={lightText ? 'text-white font-medium' : 'text-neutral-900 font-medium'} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.path) onNavigate(item.path);
                  }}
                  className={lightText ? 'text-neutral-300 hover:text-white transition-colors' : 'hover:text-amber-800 transition-colors'}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
