# Project rules

- The agent-immobilier page is the site's main page at `/`; the promoteur page lives at `/promoteur-immobilier`, and `/agent-immobilier` only redirects to `/`. Keep the header profession switch (a segmented Agent/Promoteur toggle, not a dropdown) ordered agent first, promoteur second, because the business now leads with the agent offer.
- SEO landing pages are data-driven: add entries to src/data/seoPages.ts (routes, footer links and tests derive from it) and add the URL to public/sitemap.xml; footer city links only become links when a matching page exists, to avoid 404s and thin duplicate pages.
