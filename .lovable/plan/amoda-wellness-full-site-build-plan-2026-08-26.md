# Amoda Wellness — Full Site Build Plan

Static, launch-ready marketing site. No accounts, no payments, no booking engine: every conversion point is a validated enquiry or email-capture form. Content is written into the code from your v2 structure document.

## What gets built

### Pages (TanStack routes)
| Route | Page |
|---|---|
| `/` | Home — all 9 sections from the doc |
| `/about` | Our Story & Founder, Mission & Manifesto, Where We're Headed |
| `/about/how-it-works` | Ecosystem overview, Steps 1–4 |
| `/classes` | Live Classes & Coaching overview + free weekly class card |
| `/classes/health-coaching` | Category page |
| `/classes/life-coaching` | Category page |
| `/classes/nutrition` | Category page |
| `/classes/yoga` | Category page |
| `/classes/diabetic-solutions` | Category page |
| `/practitioners` | Browse by category, roster grid |
| `/practitioners/$slug` | Profile template ("Why Amoda Trusts…", session types) |
| `/practitioners/apply` | Become a Practitioner + application form |
| `/shoppe` | Seasonal Wellness Boxes, Curated Tools — catalogue + enquiry |
| `/membership` | What's Included, Tiers, Corporate Wellness, Experiences & Retreats |
| `/contact` | Contact form with the interest dropdown from the doc |
| `/privacy`, `/terms` | Legal |

Retreats and Blog render as waitlist/coming-next sections rather than separate nav items, matching the Phase 1 priority list. Nav is the specified 6 items + a distinct "Join Amoda" button; Practitioners folds into a dropdown on mobile.

### Forms (all enquiry-only)
Four form types — Contact, Free Class RSVP (email capture), Session/Class Enquiry, Practitioner Application, Newsletter — each Zod-validated with trimmed length limits, inline error messages, and a quiet success state in brand voice ("Come as you are. We'll meet you there."). Submissions are held client-side and surfaced via a success confirmation; wiring them to a real inbox or database is a follow-up step you can trigger whenever you want it.

### Logo usage system
Three derived SVG variants from your two lockup PDFs, so nothing heavy is ever scaled down:
- **Full lockup** (mark + AMODA/WELLNESS + tagline) — header and footer only, never below 120px wide. Lotus Parchment on light grounds, Lily Shadow on Ink grounds.
- **Mark-only** (petals + ring + gold center) — mobile nav, section accents, social/OG, loading state.
- **Micro mark** (petals + gold center, ring dropped) — favicon and anything under 48px, per the guideline.
- Clear space equal to the mark's height on all sides; never on busy photography; no recoloring.

### Lotus motif rules enforced in code
Full lockup in header/footer only. Single-petal divider between major sections instead of a plain rule. Six-petal watermark at 4% opacity behind the Manifesto section only. One-time petal "unfold" on hero load, once per session, never repeated. Never more than one decorative lotus on screen at once.

## Design system

Tokens go into `src/styles.css` as oklch conversions of the exact hex values, mapped to semantic Tailwind utilities:

- Parchment as `--background` (52% of surfaces), Leaf as structure/text/rings (24%), Ink as dark grounds and primary text (14%), Sage as the light-on-light quiet tone (6%), Gold strictly as accent (4%) — available only as a hairline, dot, or icon token so it cannot be used as a fill.
- Fraunces 400 display, Fraunces Italic accent, Work Sans 400 body (16–18px / 1.6), Work Sans 500 uppercase 0.2em labels. Loaded via `<link>` in the root route.
- Scale: 64 hero / 44 H1 / 30 H2 / 22 H3 / 16 body / 12 caption, with responsive clamps.
- **Quiet Emboss:** `0 1px 2px rgba(30,46,26,0.06), 0 4px 12px rgba(30,46,26,0.04)`, 1px Leaf hairline at 18%, 6–10px radius, 3% paper-grain overlay on Parchment, consistent warm upper-left light.
- **Motion:** 400–600ms transitions, 800ms+ section reveals, settling cubic-bezier, no bounce or snap, hero parallax capped at 8%. Respects `prefers-reduced-motion`.
- **Icons:** custom 1.5px-stroke organic linework for the six ecosystem categories, Leaf or Ink, gold reserved for the single trust/vetting icon.

## Imagery

Generated to the documented Flow prompts — documentary framing, warm low light, real skin and fabric texture, Leaf/Parchment grade, no staged spa serenity: hero (woman 40+ mid-conversation), Problem section (single figure by a window), three Who We Serve cards, About founder/story, five category headers, Shoppe product stills. Category pages that carry a hero image get `og:image` set to that exact asset.

## SEO

Per-route `head()` with the SEO titles and meta descriptions already written in your doc, single H1 per page, semantic sectioning, alt text on every image, JSON-LD `Organization` plus `Service` on category pages, canonical tags, lazy loading below the fold.

## Technical notes

- TanStack Start file-based routes; shared header/footer/nav in `__root.tsx` around `<Outlet />`.
- Content lives in typed data modules (`src/content/*.ts`) — practitioners, categories, tiers, products, testimonials — so swapping to a database later is a data-layer change, not a rewrite.
- Zod validation on all forms; no `dangerouslySetInnerHTML`; encoded values on any outbound link.
- No backend, auth, or payment integration in this phase.

## Deliberately deferred

Real booking/scheduling, Shoppe checkout, member and practitioner logins, admin CMS, blog article pages. Each is additive on top of this build when you're ready.

## Suggested build order

Home → Live Classes & Coaching (overview + 5 categories) → Practitioners → Shoppe → About → Membership → Contact → Retreats/Blog teasers → legal pages.
