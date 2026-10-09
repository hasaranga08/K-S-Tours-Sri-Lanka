import React from 'react';
import { BlogPost } from '../types';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TourCard } from '../components/TourCard';
import { EnquiryForm } from '../components/EnquiryForm';
import { TOURS } from '../data/tours';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { Calendar, User, Clock, ArrowRight, MessageCircle } from 'lucide-react';

interface BlogDetailViewProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({ post, onNavigate }) => {
  useSEO({
    title: post.metaTitle,
    description: post.metaDescription,
    canonicalPath: `/sri-lanka-travel-guide/${post.slug}/`,
    ogType: 'article',
    ogImage: post.featuredImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "image": `${COMPANY_INFO.canonicalOrigin}${post.featuredImage}`,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "logo": {
          "@type": "ImageObject",
          "url": `${COMPANY_INFO.canonicalOrigin}/images/logo.png`
        }
      },
      "datePublished": post.publishDate,
      "dateModified": post.updatedDate
    }
  });

  const relatedTourList = TOURS.filter((t) => post.relatedTours.includes(t.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Travel Guide', path: '/sri-lanka-travel-guide/' },
          { label: post.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span className="font-semibold text-amber-800 uppercase tracking-wider">{post.category}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Updated {post.updatedDate}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
          <User className="w-4 h-4 text-amber-700" />
          <span>Written by <strong>{post.author}</strong> &middot; Kumar &amp; Sons Tours</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-100">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
          width="900"
          height="506"
        />
      </div>

      {/* Article Body */}
      <article className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-amber-800 prose-a:underline hover:prose-a:text-amber-950 text-neutral-800 leading-relaxed text-sm sm:text-base space-y-6">
        <div className="p-4 bg-amber-50/60 border-l-4 border-amber-600 rounded-r-lg text-sm text-neutral-800 italic">
          "{post.excerpt}"
        </div>

        <div
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/## (.*?)\n/g, '<h2 class="font-serif text-2xl font-bold text-neutral-900 mt-8 mb-4">$1</h2>')
              .replace(/### (.*?)\n/g, '<h3 class="font-serif text-xl font-bold text-neutral-900 mt-6 mb-3">$1</h3>')
              .replace(/\* (.*?)\n/g, '<li class="list-disc ml-5 mb-1.5">$1</li>')
          }}
        />
      </article>

      {/* Author & WhatsApp Action Box */}
      <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
            Need Expert Local Advice?
          </span>
          <h3 className="font-serif text-xl font-bold text-neutral-900 mb-1">
            Have Questions About This Guide?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
            Our team is happy to share honest advice on train tickets, weather, or custom driving routes without any obligation.
          </p>
        </div>

        <a
          href={getWhatsAppUrl(`Hello Kumar & Sons Tours, I read your article "${post.title}" and would like to ask a few questions.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask Kumar &amp; Chathu on WhatsApp</span>
        </a>
      </div>

      {/* Related Tour Packages */}
      {relatedTourList.length > 0 && (
        <section className="pt-8 border-t border-neutral-200">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-6">
            Recommended Tour Packages for This Route
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedTourList.map((t) => (
              <TourCard key={t.id} tour={t} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      )}

      {/* Enquiry Form */}
      <EnquiryForm headline="Plan Your Sri Lanka Trip With Local Experts" />
    </div>
  );
};
