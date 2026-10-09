import React from 'react';
import { FAQItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear, honest answers to help you plan your journey with confidence.",
}) => {
  if (!faqs || faqs.length === 0) return null;

  // Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <section className="my-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {title && (
        <div className="mb-6">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-neutral-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3 divide-y divide-neutral-200">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group pt-3 first:pt-0 cursor-pointer"
          >
            <summary className="flex items-center justify-between text-base font-semibold text-neutral-900 list-none py-2 hover:text-amber-800 transition-colors">
              <span>{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4" />
            </summary>
            <div className="pt-2 pb-4 text-sm text-neutral-700 leading-relaxed max-w-3xl">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};
