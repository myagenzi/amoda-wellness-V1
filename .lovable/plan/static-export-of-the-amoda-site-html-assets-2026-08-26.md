# Static export of the Amoda site (HTML + assets)

Produce a downloadable zip containing every page of the site as plain HTML files
with a shared assets folder, so it can be opened locally or dropped on any host.

## What you get

- One HTML file per page, mirroring the current URLs:
  - `index.html`, `about/index.html`, `about/how-it-works/index.html`
  - `classes/index.html` plus one page per class category
  - `practitioners/index.html`, `practitioners/apply/index.html`, one page per practitioner
  - `shoppe/index.html` plus one page per product
  - `membership/index.html`, `contact/index.html`, `privacy/index.html`, `terms/index.html`
- An `assets/` folder with the compiled CSS, the Fraunces and Work Sans web fonts,
  all photography, the hero video and poster, and the favicon.
- Internal links, the header/footer navigation and the logo all work between files.
- Light JavaScript kept: scroll reveal animations, mobile navigation, header search
  toggle, and the sticky ecosystem scroller. Enquiry and email forms keep their
  client-side validation and show their success state, but send nothing (there is no
  backend in a static export).
- Fonts are bundled locally so the export renders correctly offline.

Delivered as `amoda-site-static.zip` in your files, ready to download.

## Technical approach

1. Run the project's production build to get the compiled CSS/JS and hashed asset files.
2. Crawl the running preview with Playwright over the full route list (categories,
   practitioners and products enumerated from `src/content/*.ts`), and capture each
   page's server-rendered HTML rather than the hydrated DOM, so markup stays clean.
3. Rewrite in each captured document:
   - asset URLs (`/_build/...`, `/__l5e/assets-v1/...`, `/favicon.ico`) to relative
     `assets/...` paths, downloading each referenced file once;
   - the Google Fonts stylesheet to a local `assets/fonts.css` with the woff2 files
     fetched alongside it;
   - route links (`/classes/yoga`) to relative `.../index.html` paths.
4. Strip the TanStack hydration script tags and replace them with one small vanilla
   `assets/site.js` implementing reveal-on-scroll (IntersectionObserver), the mobile
   nav toggle, the search toggle, and the ecosystem scroller's active-step tracking,
   plus inert form handling that validates required fields and swaps in the success
   panel.
5. Verify by opening several exported files from disk in Playwright — home, a class
   detail page, a practitioner page and membership — checking no failed requests,
   no console errors, fonts applied, images and video present, and reveals firing.
6. Zip the tree to `/mnt/documents/amoda-site-static.zip`.

No changes to the app itself; this is an export-only task.
