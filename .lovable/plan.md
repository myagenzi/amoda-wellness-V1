# Refreshed static export of the Amoda site

Rebuild the downloadable zip so it matches the site as it stands today (new hero
video, Live Classes video hero, About mission video with its bottom-anchored crop,
Free Live Class band, Connector marquee, merged Trust + Manifesto band, announcement
bar, Amoda Guide chat).

## What you get

- One HTML file per page, mirroring the current URLs: `index.html`,
  `about/`, `about/how-it-works/`, `classes/` plus each class category,
  `practitioners/`, `practitioners/apply/`, each practitioner, `shoppe/` plus each
  product, `membership/`, `contact/`, `privacy/`, `terms/`.
- An `assets/` folder with compiled CSS, the Fraunces and Work Sans fonts (local, so
  it renders offline), every photograph, the three videos (hero, live classes,
  mission) with their posters, and the favicon.
- Working navigation, logo, footer links and internal links between files.
- Interactivity kept in plain JavaScript: scroll reveals, mobile nav, header search
  with a prebuilt index, announcement bar, sticky ecosystem scroller, connector
  marquee, video autoplay with reduced-motion poster fallback, and the mission
  video's bottom crop behaviour.
- Forms (contact, enquiry, email capture, practitioner application) keep their
  client-side validation and show the success state, but send nothing — a static
  export has no backend.
- The Amoda Guide chat button will be omitted, since it needs a live AI endpoint and
  would only show an error on a static host.

Delivered as `amoda-site-static-v2.zip` in your files.

## Technical approach

1. Run the production build to get compiled CSS and hashed assets.
2. Crawl the running preview with Playwright over the full route list (categories,
   practitioners, products enumerated from `src/content/*.ts`), capturing each page's
   server-rendered HTML rather than the hydrated DOM.
3. Rewrite in each document: `/_build/...`, `/__l5e/assets-v1/...` and `/favicon.ico`
   to relative `assets/...` paths (downloading each file once), the Google Fonts
   stylesheet to a local `assets/fonts.css` with woff2 files, and route links to
   relative `.../index.html`.
4. Strip TanStack hydration scripts and replace with one vanilla `assets/site.js`
   implementing the behaviours listed above plus inert form handling.
5. Verify by opening exported files from disk in Playwright — home, a class detail
   page, a practitioner page, About and membership — at desktop and mobile widths,
   checking no failed requests, no console errors, fonts applied, videos playing and
   correctly cropped, and reveals firing.
6. Zip to `/mnt/documents/amoda-site-static-v2.zip`.

No changes to the app itself; export-only.
