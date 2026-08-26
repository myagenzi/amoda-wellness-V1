import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { categories } from "@/content/categories";
import { categoryImage } from "@/content/images";
import { freeClass } from "@/content/site";

export const Route = createFileRoute("/classes/")({
  head: () => ({
    meta: [
      { title: "Live Classes & Coaching — Five Categories | Amoda Wellness" },
      {
        name: "description",
        content:
          "Live online classes and 1:1 coaching across health coaching, life coaching, nutrition, yoga and diabetic solutions — with vetted, credentialed practitioners.",
      },
      { property: "og:title", content: "Live Classes & Coaching | Amoda Wellness" },
      {
        property: "og:description",
        content:
          "Five categories, every one of them live. Small formats, credentialed practitioners, no pre-recorded library.",
      },
    ],
  }),
  component: ClassesIndex,
});

function ClassesIndex() {
  return (
    <>
      <Section>
        <Reveal className="max-w-[52ch]">
          <Eyebrow withDot>Live classes &amp; coaching</Eyebrow>
          <h1 className="type-hero mt-6 text-ink">Live, or it isn't here.</h1>
          <Prose className="mt-6">
            <p>
              Everything Amoda offers happens in real time with a real practitioner — 1:1 or in
              small groups where you can actually be seen. Five categories, each held by
              practitioners we vetted on credentials, references and ethics.
            </p>
            <p>
              We aren't taking payments online yet. Send an enquiry and a person replies within one
              working day with times and a practitioner match.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <Section tone="card">
        <ul className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal as="li" key={category.slug} delay={index * 90}>
              <Link
                to="/classes/$slug"
                params={{ slug: category.slug }}
                className="emboss emboss-lift group flex h-full flex-col overflow-hidden no-underline"
              >
                <img
                  src={categoryImage[category.slug]}
                  alt={category.name}
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="type-h2 text-ink transition-colors duration-500 group-hover:text-leaf">
                    {category.name}
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
                    {category.short}
                  </p>
                  <p className="type-caption mt-auto pt-6 text-leaf">{category.format}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sage">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow withDot>{freeClass.eyebrow}</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-ink">{freeClass.title}</h2>
            <p className="mt-5 max-w-[56ch] text-ink/80">{freeClass.body}</p>
            <p className="type-caption mt-5 text-leaf">{freeClass.detail}</p>
          </Reveal>
          <Reveal delay={130} className="emboss p-7">
            <p className="type-label text-leaf">Save your place</p>
            <div className="mt-5">
              <EmailCaptureForm
                cta="Reserve my spot"
                successTitle="You're in for Thursday."
                successBody="The Zoom link is on its way, with one reminder an hour before."
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="type-h1 text-ink">Not sure which one to start with?</h2>
          <p className="mt-4 text-ink/75">
            Tell us what's going on in a sentence or two. We'll suggest a practitioner — a person
            reading it, not a quiz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <QuietLink to="/contact">Ask us</QuietLink>
            <QuietLink to="/practitioners" variant="outline">
              Browse practitioners
            </QuietLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
