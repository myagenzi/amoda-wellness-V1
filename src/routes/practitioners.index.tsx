import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { EcosystemIcon } from "@/components/brand/EcosystemIcon";
import { practitioners } from "@/content/practitioners";
import { categories } from "@/content/categories";

const vetting = [
  {
    title: "Credentials, verified",
    body: "Every certification is checked at the source. If it can't be verified, the practitioner isn't listed.",
  },
  {
    title: "References, called",
    body: "We speak to past clients and peers. We ask what the practitioner's approach does not do.",
  },
  {
    title: "Ethics, in conversation",
    body: "A long conversation about scope, referral, and honesty. Anyone who overclaims doesn't join.",
  },
];

export const Route = createFileRoute("/practitioners/")({
  head: () => ({
    meta: [
      { title: "Our Practitioners — Vetted, Credentialed, Live | Amoda Wellness" },
      {
        name: "description",
        content:
          "Meet the Amoda practitioners: certified coaches, nutritionists and yoga teachers across Canada, India and the UK — vetted on credentials, references and ethics.",
      },
      { property: "og:title", content: "Our Practitioners | Amoda Wellness" },
      {
        property: "og:description",
        content:
          "Curated, not crowded. Every practitioner verified on credentials, references and ethics before they appear here.",
      },
    ],
  }),
  component: PractitionersIndex,
});

function PractitionersIndex() {
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;

  return (
    <>
      <Section>
        <Reveal className="max-w-[54ch]">
          <Eyebrow withDot>Practitioners</Eyebrow>
          <h1 className="type-hero mt-6 text-ink">Curated, not crowded.</h1>
          <Prose className="mt-6">
            <p>
              We list a small number of practitioners because vetting takes time and we refuse to
              shortcut it. Each one below was assessed on verified credentials, real references, and
              a long conversation about ethics and scope.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section tone="card">
        <ul className="grid gap-6 md:grid-cols-2">
          {practitioners.map((practitioner, index) => (
            <Reveal as="li" key={practitioner.slug} delay={index * 80}>
              <Link
                to="/practitioners/$slug"
                params={{ slug: practitioner.slug }}
                className="emboss emboss-lift flex h-full flex-col p-7 no-underline"
              >
                <h2 className="type-h2 text-ink">{practitioner.name}</h2>
                <p className="type-caption mt-2 text-leaf">{practitioner.title}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/75">
                  {practitioner.approach}
                </p>
                <dl className="mt-6 grid gap-3 border-t border-[var(--hairline)] pt-5 text-[0.875rem] sm:grid-cols-2">
                  <div>
                    <dt className="type-label text-leaf">Based</dt>
                    <dd className="mt-1 text-ink/75">{practitioner.location}</dd>
                  </div>
                  <div>
                    <dt className="type-label text-leaf">Languages</dt>
                    <dd className="mt-1 text-ink/75">{practitioner.languages.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="type-label text-leaf">Categories</dt>
                    <dd className="mt-1 text-ink/75">
                      {practitioner.categories.map(categoryName).join(" · ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="type-label text-leaf">Experience</dt>
                    <dd className="mt-1 text-ink/75">{practitioner.years} years</dd>
                  </div>
                </dl>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-[46ch]">
          <Eyebrow tone="sage">How we vet</Eyebrow>
          <h2 className="type-h1 mt-5 text-parchment">Three gates, no exceptions.</h2>
        </Reveal>
        <dl className="mt-12 grid gap-10 md:grid-cols-3">
          {vetting.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <EcosystemIcon name="trust" className="text-sage" />
              <dt className="type-h3 mt-5 text-parchment">{item.title}</dt>
              <dd className="mt-3 text-[0.9375rem] leading-relaxed text-sage/85">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section tone="sage">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="type-h1 text-ink">Are you a practitioner?</h2>
          <p className="mt-4 text-ink/80">
            We're opening a small number of places across our five categories. If verified
            certification and honest practice describe your work, we'd like to hear from you.
          </p>
          <div className="mt-8">
            <QuietLink to="/practitioners/apply" size="lg">
              Apply to join Amoda
            </QuietLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
