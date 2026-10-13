import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from '../src/entry-server';
import { COMPANY_INFO } from '../src/data/company';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const sitemapPath = path.resolve(rootDir, 'public/sitemap.xml');

async function prerender() {
  console.log('--- Starting Static Route Prerendering ---');

  if (!fs.existsSync(distDir)) {
    console.error('Error: dist directory does not exist. Run "vite build" first.');
    process.exit(1);
  }

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html template not found.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Extract routes from public/sitemap.xml
  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: public/sitemap.xml not found.');
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  const locRegex = /<loc>https:\/\/www\.kstourssrilanka\.com([^<]*)<\/loc>/g;
  const routes: string[] = [];
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    const rawPath = match[1] || '/';
    const normalized = rawPath === '' ? '/' : (rawPath.endsWith('/') ? rawPath : `${rawPath}/`);
    if (!routes.includes(normalized)) {
      routes.push(normalized);
    }
  }

  console.log(`Found ${routes.length} routes in sitemap.xml to prerender.`);

  let successCount = 0;
  const invalidRoutes: string[] = [];

  for (const route of routes) {
    try {
      const { html, seo } = render(route);

      // Check if rendered view is a 404
      if (seo?.noIndex || seo?.title?.includes('Page Not Found')) {
        invalidRoutes.push(route);
        console.warn(`[WARN] Route ${route} resolved to NotFoundView.`);
      }

      // Title
      const fullTitle = seo?.title
        ? (seo.title.includes('Kumar & Sons') || seo.title.includes('KS Tours')
            ? seo.title
            : `${seo.title} | KS Tours Sri Lanka`)
        : 'Sri Lanka Tours & Holiday Packages | KS Tours Sri Lanka';

      // Description
      const desc = seo?.description ||
        'Discover Sri Lanka with Kumar & Sons Tours. 40 years of local expertise crafting private tours, tailor-made holiday packages, wildlife safaris & chauffeur travel.';

      // Canonical URL
      const cleanPath = route === '/' ? '' : route.replace(/^\/|\/$/g, '');
      const canonicalUrl = cleanPath.length === 0
        ? `${COMPANY_INFO.canonicalOrigin}/`
        : `${COMPANY_INFO.canonicalOrigin}/${cleanPath}/`;

      // OG Image
      const ogImage = seo?.ogImage || '/images/Slide1.jpg';
      const absoluteOgImage = ogImage.startsWith('http')
        ? ogImage
        : `${COMPANY_INFO.canonicalOrigin}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

      const ogType = seo?.ogType || 'website';

      // Perform string replacements in the template
      let pageHtml = template;

      // 1. Injected prerendered markup into root
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // 2. Title tag
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(fullTitle)}</title>`);

      // 3. Meta description
      pageHtml = pageHtml.replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
        `<meta name="description" content="${escapeAttr(desc)}" />`
      );

      // 4. Canonical link
      pageHtml = pageHtml.replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );

      // 5. OpenGraph metadata
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
        `<meta property="og:title" content="${escapeAttr(fullTitle)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
        `<meta property="og:description" content="${escapeAttr(desc)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/,
        `<meta property="og:type" content="${ogType}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/,
        `<meta property="og:image" content="${absoluteOgImage}" />`
      );

      // 6. Twitter card metadata
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
        `<meta name="twitter:title" content="${escapeAttr(fullTitle)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
        `<meta name="twitter:description" content="${escapeAttr(desc)}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/,
        `<meta name="twitter:image" content="${absoluteOgImage}" />`
      );

      // 7. Schema.org JSON-LD
      if (seo?.schema) {
        const schemaString = JSON.stringify(seo.schema);
        const schemaTag = `<script id="dynamic-jsonld" type="application/ld+json">${schemaString}</script>`;
        if (pageHtml.includes('id="dynamic-jsonld"')) {
          pageHtml = pageHtml.replace(/<script id="dynamic-jsonld" type="application\/ld\+json">.*?<\/script>/s, schemaTag);
        } else {
          pageHtml = pageHtml.replace('</head>', `  ${schemaTag}\n  </head>`);
        }
      }

      // Write files
      if (route === '/') {
        fs.writeFileSync(path.resolve(distDir, 'index.html'), pageHtml, 'utf-8');
      } else {
        const routeSegments = route.replace(/^\/|\/$/g, '');
        const targetDir = path.resolve(distDir, routeSegments);
        fs.mkdirSync(targetDir, { recursive: true });
        
        // Write dist/<route>/index.html (served by GitHub Pages for /<route>/)
        fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageHtml, 'utf-8');

        // Also write dist/<route>.html (served by hosts supporting clean URLs)
        const parentDir = path.dirname(targetDir);
        fs.mkdirSync(parentDir, { recursive: true });
        fs.writeFileSync(path.resolve(parentDir, `${path.basename(targetDir)}.html`), pageHtml, 'utf-8');
      }

      successCount++;
    } catch (err) {
      console.error(`Failed to prerender route ${route}:`, err);
      process.exit(1);
    }
  }

  console.log(`Successfully prerendered ${successCount}/${routes.length} routes.`);
  if (invalidRoutes.length > 0) {
    console.warn(`Routes that rendered NotFoundView (${invalidRoutes.length}):`, invalidRoutes);
  } else {
    console.log('All sitemap routes mapped to valid, populated page views with 0 errors.');
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

prerender();
