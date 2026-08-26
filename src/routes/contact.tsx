import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Amoda Wellness — Talk to a Person" },
      {
        name: "description",
        content:
          "Questions about live classes, coaching, the Shoppe or membership? Send a note to Amoda Wellness and a real person replies within one working day.",
      },
      { property: "og:title", content: "Contact Amoda Wellness" },
      {
        property: "og:description",
        content: "Send a note. A person reads every message and replies within one working day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <Eyebrow withDot>Contact</Eyebrow>
          <h1 className="type-hero mt-6 max-w-[18ch] text-ink">Talk to a person.</h1>
          <Prose className="mt-6">
            <p>
              No ticket numbers, no chatbot. Tell us what you need — a practitioner match, a question
              about a class, corporate wellness, or the Shoppe — and we'll reply within one working
              day.
            </p>
          </Prose>
          <dl className="mt-10 space-y-6 border-t border-[var(--hairline)] pt-8">
            <div>
              <dt className="type-label text-leaf">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-ink/80 underline underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="type-label text-leaf">Based</dt>
              <dd className="mt-2 text-ink/80">{site.base}</dd>
            </div>
            <div>
              <dt className="type-label text-leaf">Elsewhere</dt>
              <dd className="mt-2 flex gap-5">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="type-label text-ink/70 transition-colors duration-400 hover:text-leaf"
                  >
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={130} className="emboss p-7 sm:p-9">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
