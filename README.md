# Kumar & Sons Tours Sri Lanka (KS Tours) – Official Website

A modern, high-performance, SEO-first web application engineered specifically for **Kumar & Sons Tours Sri Lanka** (https://www.kstourssrilanka.com). Designed around search intent, topical authority, mobile-first conversions, and nearly 40 years of authentic local guiding heritage.

---

## 1. Key Features & SEO Architecture

* **SEO-First Architecture**: Clean semantic HTML, self-referencing canonical URLs (`https://www.kstourssrilanka.com/...`), unique meta titles & descriptions for every route.
* **Schema.org Structured Data (JSON-LD)**:
  * `TravelAgency` & `Organization` on homepage
  * `TouristTrip` with day-by-day item lists on individual tour package pages
  * `TouristDestination` on destination guides
  * `Article` on travel advice guides
  * `FAQPage` on all commercial FAQ sections
  * `BreadcrumbList` on all subpages
* **Conversion Optimization**:
  * Floating WhatsApp action button dynamically pre-populated with active tour/destination context.
  * Sticky mobile conversion bar complying with the strict 15% mobile sticky height cap.
  * Reusable Formspree-ready enquiry form with validation, party sizes, and traveler preferences.
  * Zero forced shopping stops promise & verified TripAdvisor reviews from real guests.
* **Technical SEO**:
  * Generated `public/robots.txt`
  * Generated `public/sitemap.xml` with priority and change frequencies
  * Pre-configured `public/CNAME` (`www.kstourssrilanka.com`)
  * Pre-configured `public/404.html` Single Page Application redirect script for GitHub Pages

---

## 2. GitHub & Custom Domain Deployment Guide

This project is configured out of the box for GitHub Pages or any static CDN (Cloudflare Pages, Vercel, Netlify).

### A. Deploying to GitHub Pages via GitHub Actions (Recommended)

1. Push this repository to your GitHub account (e.g. `your-username/kstourssrilanka`).
2. In your GitHub repository, go to **Settings** &rarr; **Pages**.
3. Under **Build and deployment**:
   * Source: **GitHub Actions**
4. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build project
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### B. Configuring Custom Domain `www.kstourssrilanka.com`

1. The repository includes `public/CNAME` containing:
   ```
   www.kstourssrilanka.com
   ```
2. Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare, etc.).
3. Configure the following DNS records:
   * **CNAME Record**:
     * Host: `www`
     * Value / Points to: `<your-github-username>.github.io`
   * **Apex (Root Domain) A Records** (to forward `kstourssrilanka.com` to GitHub Pages):
     * Host: `@` (or leave blank)
     * IP: `185.199.108.153`
     * IP: `185.199.109.153`
     * IP: `185.199.110.153`
     * IP: `185.199.111.153`
4. In GitHub repository **Settings** &rarr; **Pages**:
   * Enter `www.kstourssrilanka.com` in the **Custom domain** field and click **Save**.
   * Check **Enforce HTTPS** (GitHub automatically provisions a free Let's Encrypt SSL certificate within a few minutes).

### C. SPA Routing on GitHub Pages

Static hosts return a 404 error when users refresh deep URLs like `/destinations/sigiriya/`. This repository includes `public/404.html` using the standard MIT-licensed SPA redirect script:
1. When GitHub Pages encounters a route it doesn't have an HTML file for, it serves `404.html`.
2. `404.html` extracts the requested path and redirects smoothly to `/?/destinations/sigiriya/`.
3. `App.tsx` intercepts this URL, restores the clean browser history to `/destinations/sigiriya/`, and renders the exact view without page reload.

---

## 3. How to Update Content & Placeholders

All core business data is isolated in cleanly structured TypeScript files:

| File | Purpose |
| :--- | :--- |
| `src/data/company.ts` | Centralized company name, phone, WhatsApp number, email, address, and Formspree endpoint placeholder. |
| `src/data/tours.ts` | Tour packages, durations, day-by-day itineraries, inclusions, exclusions, and FAQs. |
| `src/data/destinations.ts` | Destination guides, highlights, best times to visit, things to do, and related tours. |
| `src/data/services.ts` | Private driver specs, vehicle fleet details, airport transfer routes, and pricing policies. |
| `src/data/blog.ts` | Editorial travel guides and topical authority articles. |
| `src/data/testimonials.ts` | Preserved TripAdvisor reviews from verified travelers. |

### Formspree Endpoint Configuration

The Formspree endpoint is configured in `src/data/company.ts`:
```typescript
formspreeEndpoint: "https://formspree.io/f/xyekware",
```
Form submissions on the website (Contact Us & Tailor-Made Tours) submit directly to this endpoint.

---

## 4. Google Search Console Setup & Launch Instructions

Follow these step-by-step instructions to connect and monitor the website in Google Search Console:

1. **Verify Property Ownership in Google Search Console**:
   * Navigate to [Google Search Console](https://search.google.com/search-console).
   * Choose **URL Prefix** and enter your live canonical URL: `https://www.kstourssrilanka.com` (or choose Domain property if configuring DNS TXT record).
   * Recommended verification: Add the Google HTML verification tag to `<head>` in `index.html` or upload the provided HTML verification file to `/public/`.

2. **Submit the XML Sitemap**:
   * In the left sidebar, click on **Sitemaps** under *Indexing*.
   * Under *Add a new sitemap*, enter `sitemap.xml`.
   * Click **Submit**. Google will process all canonical URLs including tour packages, day trips, destinations, travel guides, and activities.

3. **Inspect the Homepage**:
   * Use the **URL Inspection** bar at the top and enter `https://www.kstourssrilanka.com/`.
   * Click **Test Live URL** to confirm that Googlebot can fetch the page, execute JavaScript, view the primary H1, and detect Schema.org structured data.
   * Click **Request Indexing**.

4. **Inspect Key Commercial Hub Pages**:
   * Test and request indexing for your core high-intent commercial routes:
     * `https://www.kstourssrilanka.com/sri-lanka-tours/`
     * `https://www.kstourssrilanka.com/tailor-made-sri-lanka-tours/`
     * `https://www.kstourssrilanka.com/sri-lanka-private-driver/`
     * `https://www.kstourssrilanka.com/sri-lanka-honeymoon/`
     * `https://www.kstourssrilanka.com/sri-lanka-family-tours/`
     * `https://www.kstourssrilanka.com/sri-lanka-safari-tours/`
     * `https://www.kstourssrilanka.com/day-tours/`
     * `https://www.kstourssrilanka.com/activities/`
     * `https://www.kstourssrilanka.com/gallery/`

5. **Request Indexing for Important Guides & Itineraries**:
   * Inspect top itineraries (`/itineraries/7-day-sri-lanka-tour/`, etc.) and destination guides (`/destinations/sigiriya/`, `/destinations/kandy/`, etc.).

6. **Monitor Performance & Organic Search Queries**:
   * Review the **Performance** report weekly to track impressions, clicks, click-through rates (CTR), and average search ranking positions for queries like *"Sri Lanka private tours"*, *"Sri Lanka private driver"*, *"Sri Lanka honeymoon packages"*, and *"Sri Lanka tailor-made tours"*.
   * Review the **Pages** indexing report to ensure zero 404 or canonical errors.

