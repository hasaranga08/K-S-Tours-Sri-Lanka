import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from '../src/entry-server';
import { COMPANY_INFO } from '../src/data/company';
import { LEGACY_REDIRECTS } from '../src/data/legacyRedirects';

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

  // --- Audit and sanitize sitemap.xml source ---
  const { validRoutes: routes, entryCount: sitemapCount } = auditAndGenerateSitemap();

  console.log(`Prerendering ${routes.length} valid canonical routes from sitemap (${sitemapCount} total sitemap URLs)...`);

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

  // --- Generate static legacy redirect HTML files ---
  console.log('--- Generating Static Legacy Redirect HTML Files ---');
  
  // Track unique files to write: relativeFilePath -> { targetUrl, title }
  const filesToWrite = new Map<string, { targetUrl: string; title: string }>();

  for (const item of LEGACY_REDIRECTS) {
    const canonicalTarget = `${COMPANY_INFO.canonicalOrigin}${item.targetPath}`;
    const rawLegacyPath = item.legacyPath.replace(/^\//, '');

    let decodedPath = rawLegacyPath;
    try {
      decodedPath = decodeURIComponent(rawLegacyPath);
    } catch {
      // ignore
    }

    // Variations: raw, decoded, and properly encoded spaces/parentheses
    const variants = new Set<string>();
    variants.add(rawLegacyPath);
    variants.add(decodedPath);
    variants.add(rawLegacyPath.toLowerCase());
    variants.add(decodedPath.toLowerCase());

    // Also handle URL-encoded parentheses and spaces explicitly if present
    if (decodedPath.includes(' ') || decodedPath.includes('(') || decodedPath.includes(')')) {
      const reEncoded = decodedPath
        .replace(/ /g, '%20')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29');
      variants.add(reEncoded);
      variants.add(reEncoded.toLowerCase());
    }

    for (const variant of variants) {
      if (!variant) continue;
      // Never overwrite a canonical route's index.html
      if (variant.endsWith('/index.html') || variant === 'index.html') continue;
      
      filesToWrite.set(variant, {
        targetUrl: canonicalTarget,
        title: item.title,
      });
    }
  }

  let redirectCount = 0;
  for (const [relativePath, data] of filesToWrite.entries()) {
    const targetFilePath = path.resolve(distDir, relativePath);
    const parentDir = path.dirname(targetFilePath);
    fs.mkdirSync(parentDir, { recursive: true });

    const redirectHtml = generateLegacyRedirectHtml(data.targetUrl, data.title);
    fs.writeFileSync(targetFilePath, redirectHtml, 'utf-8');
    redirectCount++;
  }

  console.log(`Successfully generated ${redirectCount} unique static legacy redirect HTML files in dist/.`);
}

function generateLegacyRedirectHtml(targetUrl: string, title: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redirecting to ${escapeHtml(title)} | KS Tours Sri Lanka</title>
  <link rel="canonical" href="${targetUrl}" />
  <meta http-equiv="refresh" content="0; url=${targetUrl}" />
  <meta name="robots" content="index, follow" />
  <meta name="description" content="This page has permanently moved to ${escapeAttr(targetUrl)}. Redirecting to ${escapeAttr(title)} on Kumar &amp; Sons Tours Sri Lanka." />
  <script type="text/javascript">
    window.location.replace("${targetUrl}");
  </script>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF8F5; color: #1a1a1a; padding: 48px 20px; text-align: center; line-height: 1.6;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 36px 28px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #ebe5df;">
    <div style="width: 56px; height: 56px; margin: 0 auto 20px; border-radius: 50%; background: #E6F4F2; color: #0D7C78; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold;">✓</div>
    <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 12px; color: #1a1a1a;">Page Permanently Moved</h1>
    <p style="font-size: 15px; color: #555; margin-bottom: 24px;">
      This legacy page has moved to our updated website:
    </p>
    <p style="margin-bottom: 28px;">
      <a href="${targetUrl}" style="display: inline-block; background-color: #0D7C78; color: #ffffff; padding: 12px 24px; border-radius: 10px; font-weight: 600; text-decoration: none; font-size: 15px;">
        Continue to ${escapeHtml(title)} &rarr;
      </a>
    </p>
    <p style="font-size: 12px; color: #888; margin: 0;">
      Kumar &amp; Sons Tours Sri Lanka &bull; Nearly 40 Years of Local Guiding Expertise
    </p>
  </div>
</body>
</html>`;
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

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

function auditAndGenerateSitemap(): { validRoutes: string[]; entryCount: number } {
  console.log('--- Auditing and Generating Sitemap ---');

  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: public/sitemap.xml not found.');
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');

  // Regex to match any <url>...</url> block
  const urlBlockRegex = /<url>([\s\S]*?)<\/url>/g;
  let match;
  let totalBlocksFound = 0;
  let emptyBlocksRemoved = 0;
  const validEntries: SitemapEntry[] = [];
  const validRoutes: string[] = [];

  while ((match = urlBlockRegex.exec(sitemapXml)) !== null) {
    totalBlocksFound++;
    const blockContent = match[1];

    // Extract <loc> tag
    const locMatch = blockContent.match(/<loc>([\s\S]*?)<\/loc>/);
    const locValue = locMatch ? locMatch[1].trim() : '';

    // Check if the block is empty or missing a valid loc
    if (!locValue) {
      emptyBlocksRemoved++;
      console.warn(`[AUDIT] Removed empty <url> entry (block #${totalBlocksFound}).`);
      continue;
    }

    // Ensure it belongs to the canonical domain https://www.kstourssrilanka.com/
    if (!locValue.startsWith('https://www.kstourssrilanka.com/')) {
      console.warn(`[AUDIT] Warning: non-canonical domain found: ${locValue}`);
    }

    // Ensure it is not a legacy redirect URL (.html extension)
    if (locValue.endsWith('.html')) {
      console.warn(`[AUDIT] Warning: legacy .html URL detected in sitemap, skipping: ${locValue}`);
      continue;
    }

    // Extract other metadata
    const lastmodMatch = blockContent.match(/<lastmod>([\s\S]*?)<\/lastmod>/);
    const changefreqMatch = blockContent.match(/<changefreq>([\s\S]*?)<\/changefreq>/);
    const priorityMatch = blockContent.match(/<priority>([\s\S]*?)<\/priority>/);

    const entry: SitemapEntry = {
      loc: locValue,
      lastmod: lastmodMatch ? lastmodMatch[1].trim() : undefined,
      changefreq: changefreqMatch ? changefreqMatch[1].trim() : undefined,
      priority: priorityMatch ? priorityMatch[1].trim() : undefined,
    };

    validEntries.push(entry);

    // Extract path for prerendering
    const rawPath = locValue.replace('https://www.kstourssrilanka.com', '') || '/';
    const normalized = rawPath === '' ? '/' : (rawPath.endsWith('/') ? rawPath : `${rawPath}/`);
    if (!validRoutes.includes(normalized)) {
      validRoutes.push(normalized);
    }
  }

  console.log(`[AUDIT] Scanned ${totalBlocksFound} <url> blocks: ${validEntries.length} valid, ${emptyBlocksRemoved} empty entries removed.`);

  // Build clean, well-formed XML
  let cleanXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const entry of validEntries) {
    cleanXml += `  <url>\n`;
    cleanXml += `    <loc>${entry.loc}</loc>\n`;
    if (entry.lastmod) cleanXml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    if (entry.changefreq) cleanXml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    if (entry.priority) cleanXml += `    <priority>${entry.priority}</priority>\n`;
    cleanXml += `  </url>\n`;
  }
  cleanXml += `</urlset>\n`;

  // If any empty blocks were removed, rewrite public/sitemap.xml (the source)
  if (emptyBlocksRemoved > 0) {
    fs.writeFileSync(sitemapPath, cleanXml, 'utf-8');
    console.log(`[AUDIT] Cleaned source public/sitemap.xml by removing ${emptyBlocksRemoved} empty <url> entries.`);
  }

  // Write verified clean sitemap directly to dist/sitemap.xml
  const distSitemapPath = path.resolve(distDir, 'sitemap.xml');
  fs.writeFileSync(distSitemapPath, cleanXml, 'utf-8');
  console.log(`[AUDIT] Generated validated dist/sitemap.xml with ${validEntries.length} entries.`);

  // Strict XML validity verification
  validateSitemapXml(cleanXml, validEntries.length);

  return { validRoutes, entryCount: validEntries.length };
}

function validateSitemapXml(xmlContent: string, expectedCount: number) {
  // 1. Verify XML header and root tags
  if (!xmlContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
    throw new Error('Sitemap XML validation failed: Missing XML declaration.');
  }
  if (!xmlContent.includes('<urlset') || !xmlContent.endsWith('</urlset>\n')) {
    throw new Error('Sitemap XML validation failed: Missing or unclosed <urlset> tag.');
  }

  // 2. Count tags
  const openUrls = (xmlContent.match(/<url>/g) || []).length;
  const closeUrls = (xmlContent.match(/<\/url>/g) || []).length;
  const openLocs = (xmlContent.match(/<loc>/g) || []).length;
  const closeLocs = (xmlContent.match(/<\/loc>/g) || []).length;

  if (openUrls !== closeUrls) {
    throw new Error(`Sitemap XML validation failed: Unmatched <url> tags (${openUrls} open, ${closeUrls} close).`);
  }
  if (openLocs !== closeLocs) {
    throw new Error(`Sitemap XML validation failed: Unmatched <loc> tags (${openLocs} open, ${closeLocs} close).`);
  }
  if (openUrls !== openLocs) {
    throw new Error(`Sitemap XML validation failed: <url> count (${openUrls}) does not match <loc> count (${openLocs}).`);
  }
  if (openUrls !== expectedCount) {
    throw new Error(`Sitemap XML validation failed: Expected ${expectedCount} entries, found ${openUrls}.`);
  }

  // 3. Ensure no empty entries
  const emptyUrlRegex = /<url>[\s\r\n]*<\/url>/;
  if (emptyUrlRegex.test(xmlContent)) {
    throw new Error('Sitemap XML validation failed: Found empty <url></url> block!');
  }

  // 4. Ensure every loc is non-empty and starts with canonical domain
  const locRegex = /<loc>([\s\S]*?)<\/loc>/g;
  let locMatch;
  while ((locMatch = locRegex.exec(xmlContent)) !== null) {
    const loc = locMatch[1].trim();
    if (!loc) {
      throw new Error('Sitemap XML validation failed: Found empty <loc> value.');
    }
    if (!loc.startsWith('https://www.kstourssrilanka.com/')) {
      throw new Error(`Sitemap XML validation failed: Invalid domain in <loc>: ${loc}`);
    }
  }

  console.log(`[AUDIT] Sitemap XML validation passed: ${expectedCount} valid URLs, 0 empty entries.`);
}

prerender();
