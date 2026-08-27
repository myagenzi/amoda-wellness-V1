import { Link } from "@tanstack/react-router";
import { Lockup } from "@/components/brand/Lockup";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { newsletter, site } from "@/content/site";

/** Placeholder ground for the footer glass — swap this one URL for the brand cut. */
const FOOTER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4";

const columns = [
  {
    heading: "Amoda",
    links: [
      { label: "About", to: "/about" as const },
      { label: "How Amoda Works", to: "/about/how-it-works" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Live Classes & Coaching", to: "/classes" as const },
      { label: "Practitioners", to: "/practitioners" as const },
      { label: "Shoppe", to: "/shoppe" as const },
      { label: "Membership", to: "/membership" as const },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Corporate Wellness", to: "/membership" as const },
      { label: "Become a Practitioner", to: "/practitioners/apply" as const },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" as const },
      { label: "Terms of Service", to: "/terms" as const },
    ],
  },
];

export function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-ink px-4 pt-16 pb-8 sm:px-6 md:px-8 md:pt-24">
      {/* Full-bleed ground behind the glass card */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <video
          className="size-full object-cover"
          src={FOOTER_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        {/* Mild ink veil: keeps parchment type legible without dulling the footage. */}
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--ink)_38%,transparent)]" />
      </div>

      <footer className="liquid-glass glass-rise mx-auto w-full max-w-6xl rounded-3xl p-6 text-parchment md:p-10">
        <div className="grid gap-10 border-b border-parchment/15 pb-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="type-h2 max-w-[26ch] text-parchment">{newsletter.headline}</h2>
            <p className="mt-3 max-w-[52ch] text-parchment/80">{newsletter.body}</p>
          </div>
          <div className="lg:justify-self-end lg:pt-2">
            <EmailCaptureForm
              ground="dark"
              cta="Subscribe"
              successTitle="You're on the list."
              successBody="Roughly twice a month. Unsubscribe in one click, no questions asked."
            />
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <Link
            to="/"
            aria-label="Amoda Wellness — home"
            className="lg:col-span-1 lg:pr-6"
          >
            {/* Full lockup: header and footer only */}
            <Lockup ground="dark" size="md" className="drop-shadow-[0_2px_14px_rgb(30_46_26/0.55)]" />
          </Link>
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="type-label text-sage">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[0.9375rem] text-parchment/80 transition-colors duration-400 hover:text-parchment"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-parchment/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-caption text-sage/85">
            © {new Date().getFullYear()} Amoda Wellness · {site.base}
          </p>
          <ul className="flex gap-5">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="type-label text-sage/90 transition-colors duration-400 hover:text-parchment"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
