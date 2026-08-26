import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PetalDivider } from "@/components/brand/LotusMark";
import { categoryBySlug, type Category } from "@/content/categories";
import { practitioners } from "@/content/practitioners";
import { categoryImage } from "@/content/images";

export const Route = createFileRoute("/classes/$slug")({
  loader: ({ params }) => {
    const category = categoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found | Amoda Wellness" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    return {
      meta: [
        { title: category.seoTitle },
        { name: "description", content: category.metaDescription },
        { property: "og:title", content: category.seoTitle },
        { property: "og:description", content: category.metaDescription },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: Category };
  const matched = practitioners.filter((p) => p.categories.includes(category.slug));

  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Eyebrow withDot>{category.name}</Eyebrow>
            <h1 className="type-hero mt-6 max-w-[22ch] text-ink">{category.headline}</h1>
            <Prose className="mt-6">
              <p>{category.subheadline}</p>
            </Prose>
            <p className="type-caption mt-6 text-leaf">{category.format}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <QuietLink to="/contact" size="lg">
                Enquire about a session
              </QuietLink>
              <QuietLink to="/practitioners" variant="quiet">
                See who teaches this
              </QuietLink>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={categoryImage[category.slug]}
              alt={category.name}
              width={1400}
              height={900}
              className="emboss aspect-[4/3] w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Who this is for</Eyebrow>
            <p className="type-h2 mt-5 text-ink">{category.forWhom}</p>
            <PetalDivider className="mt-8 w-24" />
            <Eyebrow>What you leave with</Eyebrow>
            <p className="mt-4 max-w-[56ch] text-ink/80">{category.outcome}</p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>What's included</Eyebrow>
            <ul className="mt-6 space-y-4">
              {category.included.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[var(--hairline)] pb-4">
                  <span
                    className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {matched.length > 0 ? (
        <Section tone="sage">
          <Reveal className="max-w-[44ch]">
            <Eyebrow>Practitioners</Eyebrow>
            <h2 className="type-h1 mt-5 text-ink">Who holds this work.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {matched.map((practitioner, index) => (
              <Reveal as="li" key={practitioner.slug} delay={index * 90}>
                <Link
                  to="/practitioners/$slug"
                  params={{ slug: practitioner.slug }}
                  className="emboss emboss-lift flex h-full flex-col items-start gap-2 p-6 text-left no-underline"
                >
                  <span className="type-h3 text-ink">{practitioner.name}</span>
                  <span className="type-caption text-leaf">{practitioner.title}</span>
                  <span className="mt-2 text-[0.9375rem] text-ink/75">{practitioner.location}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow withDot>Enquire</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[22ch] text-ink">
              Send a note. A person replies.
            </h2>
            <Prose className="mt-5">
              <p>
                We're not taking online bookings yet — on purpose. Tell us a little and we'll come
                back within one working day with times and a practitioner match for{" "}
                {category.name.toLowerCase()}.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <EnquiryForm subject={category.name} cta="Send enquiry" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
