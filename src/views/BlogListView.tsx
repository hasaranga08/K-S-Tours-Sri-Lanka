import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { BLOG_POSTS } from '../data/blog';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageBanner } from '../components/PageBanner';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface BlogListViewProps {
  onNavigate: (path: string) => void;
}

export const BlogListView: React.FC<BlogListViewProps> = ({ onNavigate }) => {
  useSEO({
    title: "Sri Lanka Travel Guides & Local Advice | KS Tours",
    description: "In-depth Sri Lanka travel guides from local drivers: best time to visit, scenic blue train booking, safari park comparisons, and itinerary tips.",
    canonicalPath: "/sri-lanka-travel-guide/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Sri Lanka Travel Guide & Expert Advice",
      "description": "Practical travel advice, guides, and tips distilled from nearly 40 years of guiding international visitors across Sri Lanka.",
      "url": "https://www.kstourssrilanka.com/sri-lanka-travel-guide/",
      "blogPost": BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "url": `https://www.kstourssrilanka.com/sri-lanka-travel-guide/${post.slug}/`,
        "datePublished": post.publishDate,
        "author": {
          "@type": "Person",
          "name": post.author
        }
      }))
    }
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Shared Page Hero Banner using banner.jpg */}
      <PageBanner
        title="Sri Lanka Travel Guide & Expert Advice"
        subtitle="Honest, practical travel advice distilled from nearly 40 years of guiding international visitors across Sri Lanka. Learn when to travel, how to secure scenic train tickets, and which wildlife parks match your travel goals."
        badge="Topical Travel Intelligence"
        breadcrumbs={[{ label: 'Sri Lanka Travel Guide' }]}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl border border-neutral-200 overflow-hidden flex flex-col hover:border-neutral-300 transition-shadow hover:shadow-md"
          >
            <a
              href={`/sri-lanka-travel-guide/${post.slug}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/sri-lanka-travel-guide/${post.slug}/`);
              }}
              className="block aspect-[16/9] overflow-hidden bg-neutral-100"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="400"
                height="225"
              />
            </a>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2.5">
                  <span className="font-semibold text-amber-800">{post.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-serif text-lg font-bold text-neutral-900 leading-snug hover:text-amber-800 transition-colors mb-2.5">
                  <a
                    href={`/sri-lanka-travel-guide/${post.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/sri-lanka-travel-guide/${post.slug}/`);
                    }}
                  >
                    {post.title}
                  </a>
                </h2>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500">By {post.author}</span>
                <a
                  href={`/sri-lanka-travel-guide/${post.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/sri-lanka-travel-guide/${post.slug}/`);
                  }}
                  className="font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);
};
