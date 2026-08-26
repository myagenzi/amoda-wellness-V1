import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PractitionerApplicationForm } from "@/components/forms/PractitionerApplicationForm";

const expectations = [
  "Verified certification & experience",
  "Genuine care for client outcomes",
  "Alignment with whole-person wellness values",
];

export const Route = createFileRoute("/practitioners/apply")({
  head: () => ({
    meta: [
      { title: "Become a Practitioner | Amoda Wellness" },
      {
        name: "description",
        content:
          "Amoda is building a curated — not crowded — network of wellness practitioners. Apply to bring your gift to a global community that values it.",
      },
      { property: "og:title", content: "Become an Amoda Practitioner" },
      {
        property: "og:description",
        content:
          "Bring your gift to a global community that values it. Apply to join Amoda's curated practitioner network.",
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
          <Eyebrow withDot>Become a Practitioner</Eyebrow>
          <h1 className="type-hero mt-6 text-ink">
            Bring your gift to a global community that values it.
          </h1>
          <Prose className="mt-6">
            <p>
              Amoda is building a curated — not crowded — network of wellness practitioners. If
              you're certified, ethical, and passionate about real transformation, we'd love to meet
              you.
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
            <p className="type-caption mt-6 text-leaf">Apply to Join Amoda</p>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <PractitionerApplicationForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
