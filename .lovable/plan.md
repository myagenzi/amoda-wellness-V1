# Hostinger-ready export of the Amoda site

A single zip that uploads straight into Hostinger's `public_html` and runs with
no build step, no Node, and no console or 404 errors.

## What you get

`amoda-hostinger.zip` containing:

- `public_html/` — the site itself, ready to drag into Hostinger's File Manager:
  - `index.html` plus one folder per page (`about/`, `about/how-it-works/`,
    `classes/` + each category, `practitioners/` + apply + each practitioner,
    `shoppe/` + each product, `membership/`, `contact/`, `privacy/`, `terms/`),
    each with its own `index.html` so clean URLs like `/about/` work.
  - `assets/` — compiled CSS, the four videos with posters, every photograph and
    lotus graphic, and self-hosted Fraunces / Work Sans / Yatra One fonts so the
    "joy" lettering and headings render even without Google Fonts.
  - `assets/site.js` — plain JavaScript (no React) for scroll reveals, mobile
    nav, header search, announcement bar, sticky ecosystem scroller, connector
    marquee, the fading/cinematic video grounds, the mission-video bottom crop,
    the moving CTA border trail, the interactive lotus morph-reveal on About,
    and form validation with success states.
  - `.htaccess` — friendly URL handling, a 404 fallback, gzip and long-lived
    caching for assets and video.
  - `robots.txt`, `sitemap.xml`, `favicon.ico`.
- `source/` — the complete project code (everything except `node_modules`,
  `dist`, `.git`) in case you or a developer ever want to rebuild or move it to
  a Node host.
- `README-hostinger.txt` — upload steps and what is and isn't live.

## Decisions made for you

- **Target: Hostinger shared / Premium hosting** (`public_html`, no Node). This
  is the version that works on every Hostinger plan; the `source/` folder covers
  the VPS case if you ever upgrade.
- **Forms** (contact, enquiry, practitioner application, email capture) keep
  their validation and success panel but do not send anywhere. I'll include a
  commented PHP mailer snippet in the README so you can wire them to your
  Hostinger email in one step if you want.
- **Amoda Guide chat** is omitted from the static build, since it needs a live
  AI endpoint and would only show an error on shared hosting.

## Technical approach

1. Production build for the final minified CSS and hashed assets.
2. Playwright crawls all 28 routes on the running preview and captures the
   rendered DOM, so video grounds, marquee and lotus canvas markup are present.
3. Rewrite every `/_build/...`, `/__l5e/assets-v1/...`, `/@fs/...` and
   `/favicon.ico` reference to a relative `assets/...` path, downloading each
   file once; swap the Google Fonts stylesheet for a local `assets/fonts.css`
   with woff2 files.
4. Strip TanStack hydration scripts, inject `assets/site.js`, and rewrite route
   links to relative paths that resolve from any subfolder depth.
5. Verify by opening the exported files from disk in Playwright at desktop and
   mobile widths — home, About, a class detail, a practitioner, Shoppe product,
   membership — asserting zero failed requests, zero console errors, fonts
   applied, all videos playing with correct crops, reveals firing, nav and
   footer links resolving, and the CTA trail animating.
6. Zip to `/mnt/documents/amoda-hostinger.zip`.

No changes to the app itself — export only.
