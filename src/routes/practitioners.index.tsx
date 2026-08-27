import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { practitioners } from "@/content/practitioners";
import { browseLabels, categories } from "@/content/categories";
import { trust } from "@/content/home";
import { VideoBackdrop } from "@/components/site/VideoBackdrop";
import practitionersVideo from "@/assets/practitioners.mp4.asset.json";
import practitionersPoster from "@/assets/practitioners-poster.jpg.asset.json";

const seo = {
  title: "Find a Trusted Wellness Practitioner | Amoda Wellness",
  description:
    "Browse Amoda's vetted network of health coaches, life coaches, nutritionists, yoga teachers, and diabetic wellness specialists — live and online.",
};

const filters = ["Language", "Availability", "Session Type (1:1 / Group)"];

export const Route = createFileRoute("/practitioners/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
    ],
  }),
  component: PractitionersIndex,
});

function PractitionersIndex() {
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;

  return (
    <>
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 md:py-28">
        <VideoBackdrop
          video={practitionersVideo}
          poster={practitionersPoster}
          scrim="bg-practitioners-scrim"
          className="bg-parchment"
          videoClassName="object-[68%_50%] md:object-[60%_50%]"
        />
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-[54ch]">
            <Eyebrow withDot>Practitioners</Eyebrow>
            <h1 className="type-hero mt-6 text-ink [text-shadow:0_1px_18px_var(--parchment)]">
              Every practitioner here has earned your trust.
            </h1>
            <Prose className="mt-6 text-ink/85 [text-shadow:0_1px_14px_var(--parchment)]">
              <p>
                We don't list everyone. We curate carefully — checking certifications, experience,
                and ethical standards — so you can book with confidence.
              </p>
            </Prose>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 border-y border-[var(--hairline)] py-5">
              {trust.strip.map((item) => (
                <li
                  key={item}
                  className="type-label text-leaf [text-shadow:0_1px_12px_var(--parchment)]"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section tone="card">
        <Reveal>
          <Eyebrow>Filter / Browse by</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <QuietLink
                  to={`/classes/${category.slug}`}
                  variant="outline"
                  size="sm"
                >
                  {browseLabels[category.slug]}
                </QuietLink>
              </li>
            ))}
          </ul>
          <p className="type-caption mt-6 text-muted-foreground">
            Filter by: {filters.join(" | ")}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {practitioners.map((practitioner, index) => (
            <Reveal as="li" key={practitioner.slug} delay={index * 80}>
              <Link
                to="/practitioners/$slug"
                params={{ slug: practitioner.slug }}
                className="emboss emboss-lift flex h-full flex-col p-7 no-underline"
              >
                <h2 className="type-h2 text-ink">
                  {practitioner.name} — {practitioner.title}
                </h2>
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

      <Section tone="sage">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="type-h1 text-ink">Not Sure Who to Book?</h2>
          <p className="mt-4 text-ink/80">
            Take the Matching Quiz — tell us what you're looking for and a person will suggest a
            practitioner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <QuietLink to="/contact" size="lg">
              Take the Matching Quiz
            </QuietLink>
            <QuietLink to="/practitioners/apply" variant="outline">
              Become a Practitioner
            </QuietLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
