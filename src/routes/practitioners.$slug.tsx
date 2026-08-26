import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PetalDivider } from "@/components/brand/LotusMark";
import { practitionerBySlug, type Practitioner } from "@/content/practitioners";
import { categories } from "@/content/categories";

export const Route = createFileRoute("/practitioners/$slug")({
  loader: ({ params }) => {
    const practitioner = practitionerBySlug(params.slug);
    if (!practitioner) throw notFound();
    return { practitioner };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Practitioner not found | Amoda Wellness" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { practitioner } = loaderData;
    const title = `${practitioner.name} — ${practitioner.title} | Amoda Wellness`;
    const description = `${practitioner.name}, ${practitioner.title.toLowerCase()} based in ${practitioner.location}. ${practitioner.years} years of practice. Book a live session through Amoda Wellness.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
      ],
    };
  },
  component: PractitionerPage,
});

function PractitionerPage() {
  const { practitioner } = Route.useLoaderData() as { practitioner: Practitioner };
  const cats = categories.filter((c) => practitioner.categories.includes(c.slug));

  return (
    <>
      <Section>
        <Reveal className="max-w-[58ch]">
          <Link to="/practitioners" className="type-label text-leaf no-underline">
            ← All practitioners
          </Link>
          <h1 className="type-hero mt-6 text-ink">{practitioner.name}</h1>
          <p className="type-accent mt-3 text-xl text-leaf">{practitioner.title}</p>
          <Prose className="mt-6">
            <p>{practitioner.approach}</p>
          </Prose>
        </Reveal>
        <Reveal delay={120}>
          <dl className="mt-12 grid gap-6 border-t border-[var(--hairline)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="type-label text-leaf">Based</dt>
              <dd className="mt-2 text-ink/80">{practitioner.location}</dd>
            </div>
            <div>
              <dt className="type-label text-leaf">Languages</dt>
              <dd className="mt-2 text-ink/80">{practitioner.languages.join(", ")}</dd>
            </div>
            <div>
              <dt className="type-label text-leaf">Experience</dt>
              <dd className="mt-2 text-ink/80">{practitioner.years} years in practice</dd>
            </div>
            <div>
              <dt className="type-label text-leaf">Session types</dt>
              <dd className="mt-2 text-ink/80">{practitioner.sessionTypes.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Credentials</Eyebrow>
            <ul className="mt-6 space-y-4">
              {practitioner.credentials.map((credential) => (
                <li key={credential} className="flex gap-4 border-b border-[var(--hairline)] pb-4">
                  <span
                    className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink/80">{credential}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why we chose them</Eyebrow>
            <p className="type-h3 mt-5 text-ink">{practitioner.curationNote}</p>
            {practitioner.testimonial ? (
              <>
                <PetalDivider className="mt-8 w-24" />
                <figure className="mt-6">
                  <blockquote className="text-[1.0625rem] leading-relaxed text-ink/80">
                    “{practitioner.testimonial.quote}”
                  </blockquote>
                  <figcaption className="type-caption mt-3 text-leaf">
                    {practitioner.testimonial.author}
                  </figcaption>
                </figure>
              </>
            ) : null}
          </Reveal>
        </div>
      </Section>

      <Section tone="sage">
        <Reveal>
          <Eyebrow>Works across</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-3">
            {cats.map((category) => (
              <li key={category.slug}>
                <Link
                  to="/classes/$slug"
                  params={{ slug: category.slug }}
                  className="type-label emboss inline-flex px-5 py-3 text-leaf no-underline"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow withDot>Enquire</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-ink">
              Ask about a session with {practitioner.name.split(" ")[0]}.
            </h2>
            <Prose className="mt-5">
              <p>
                Send a note and we'll come back within one working day with availability. If a
                different practitioner would suit you better, we'll say so.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <EnquiryForm subject={`a session with ${practitioner.name}`} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
