import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PractitionerApplicationForm } from "@/components/forms/PractitionerApplicationForm";

const expectations = [
  "Verified certification in your practice area — we check at the source.",
  "At least three years of real client practice, with references we can call.",
  "Comfort holding live sessions online, 1:1 and in small groups.",
  "Honesty about scope: what your approach does, and where you refer out.",
];

export const Route = createFileRoute("/practitioners/apply")({
  head: () => ({
    meta: [
      { title: "Become a Practitioner — Apply to Join | Amoda Wellness" },
      {
        name: "description",
        content:
          "Apply to join the Amoda practitioner network. A curated, not crowded platform for certified coaches, nutritionists and yoga teachers holding live sessions.",
      },
      { property: "og:title", content: "Become an Amoda Practitioner" },
      {
        property: "og:description",
        content:
          "A small, vetted network. Verified credentials, real references, honest practice — apply to join.",
      },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-[54ch]">
          <Eyebrow withDot>Become a practitioner</Eyebrow>
          <h1 className="type-hero mt-6 text-ink">
            Practise where the standard is the point.
          </h1>
          <Prose className="mt-6">
            <p>
              Amoda is built to be small. We take a limited number of practitioners in each
              category, verify everything, and then get out of the way — you keep your own approach,
              your own voice, and your own client relationships.
            </p>
            <p>
              What you get is a platform that doesn't ask you to compete on price against a thousand
              unverified profiles, and clients who arrive already trusting the room.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <Eyebrow>What we look for</Eyebrow>
            <ul className="mt-6 space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[var(--hairline)] pb-4">
                  <span
                    className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="type-caption mt-6 text-leaf">
              Vetting takes about two weeks: credentials, references, and one long conversation.
            </p>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <PractitionerApplicationForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
