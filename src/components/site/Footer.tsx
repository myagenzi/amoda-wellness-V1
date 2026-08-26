import { Link } from "@tanstack/react-router";
import { Lockup } from "@/components/brand/Lockup";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { newsletter, site } from "@/content/site";

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
    <footer className="bg-ink px-5 py-16 text-parchment sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 border-b border-sage/15 pb-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="type-h2 max-w-[26ch] text-parchment">{newsletter.headline}</h2>
            <p className="mt-3 max-w-[52ch] text-sage/80">{newsletter.body}</p>
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
          <Link to="/" aria-label="Amoda Wellness — home" className="lg:col-span-1">
            {/* Full lockup: header and footer only */}
            <Lockup ground="dark" size="sm" />
          </Link>
          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <p className="type-label text-sage">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[0.9375rem] text-parchment/75 transition-colors duration-400 hover:text-parchment"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-sage/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-caption text-sage/70">
            © {new Date().getFullYear()} Amoda Wellness · {site.base}
          </p>
          <ul className="flex gap-5">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="type-label text-sage/80 transition-colors duration-400 hover:text-parchment"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
