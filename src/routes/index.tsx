import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { LotusMark, PetalDivider, LotusWatermark } from "@/components/brand/LotusMark";
import { EcosystemIcon } from "@/components/brand/EcosystemIcon";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { audiences, differentiators, ecosystem, manifesto, testimonials } from "@/content/home";
import { categories } from "@/content/categories";
import { freeClass, site } from "@/content/site";
import heroImage from "@/assets/hero-conversation.jpg";
import problemImage from "@/assets/problem-window.jpg";
import audienceWomen from "@/assets/audience-women.jpg";
import audienceEntrepreneur from "@/assets/audience-entrepreneur.jpg";
import audienceGlobal from "@/assets/audience-global.jpg";

const audienceImages = [audienceWomen, audienceEntrepreneur, audienceGlobal];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amoda Wellness — Live Coaching with Vetted Practitioners" },
      {
        name: "description",
        content:
          "Amoda connects you to yourself through trusted practitioners. Live health coaching, life coaching, nutrition, yoga and diabetic solutions — curated, not crowded.",
      },
      { property: "og:title", content: "Amoda Wellness — ancient roots, modern results" },
      {
        property: "og:description",
        content:
          "Live coaching and classes with vetted practitioners. Curated, not crowded. Live, not library.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="grain relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Eyebrow withDot>{site.tagline}</Eyebrow>
            <h1 className="type-hero mt-6 max-w-[20ch] text-ink">
              Come home to <span className="type-accent">yourself.</span>
            </h1>
            <Prose className="mt-6">
              <p>{site.promise}</p>
              <p>
                Live classes and 1:1 coaching with certified practitioners we vetted ourselves —
                across health, life, nutrition, yoga and diabetic wellness. No library of courses
                you'll never finish. A person who remembers your last conversation.
              </p>
            </Prose>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <QuietLink to="/classes" size="lg">
                Explore live classes
              </QuietLink>
              <QuietLink to="/practitioners" variant="quiet">
                Meet the practitioners
              </QuietLink>
            </div>
          </Reveal>

          <Reveal delay={160} className="relative">
            <img
              src={heroImage}
              alt="Two women in unhurried conversation in warm natural light"
              width={1200}
              height={1400}
              className="emboss aspect-[4/5] w-full rounded-lg object-cover"
            />
            <LotusMark
              variant="micro"
              className="absolute -bottom-5 -left-4 w-16 opacity-90 sm:w-20"
              unfold
            />
          </Reveal>
        </div>
      </section>

      {/* 2 — The problem */}
      <Section tone="card">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <img
              src={problemImage}
              alt="A quiet window with morning light falling across a still room"
              width={1200}
              height={900}
              loading="lazy"
              className="emboss aspect-[4/3] w-full rounded-lg object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why Amoda exists</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-ink">
              You have never had more wellness information, and never less trust in it.
            </h2>
            <Prose className="mt-6">
              <p>
                Certifications nobody can verify. Apps that forget you. Programmes designed for a
                body that isn't yours. The result is a quiet exhaustion — you know what you should
                be doing, and it still isn't working.
              </p>
              <p>
                Amoda takes the opposite approach. We vet a small number of practitioners on
                credentials, references and ethics, and then we put you in a live room with one of
                them.
              </p>
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* 3 — Ecosystem */}
      <Section>
        <Reveal className="max-w-[46ch]">
          <Eyebrow>The ecosystem</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">One place, built in six parts.</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, index) => (
            <Reveal as="li" key={item.name} delay={index * 90}>
              <Link
                to={item.to}
                className="emboss emboss-lift flex h-full flex-col p-7 no-underline"
              >
                <EcosystemIcon name={item.icon} />
                <h3 className="type-h3 mt-5 text-ink">{item.name}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{item.what}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 4 — Categories */}
      <Section tone="sage">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-[40ch]">
            <Eyebrow>Live classes &amp; coaching</Eyebrow>
            <h2 className="type-h1 mt-5 text-ink">Five categories. Every one of them live.</h2>
          </Reveal>
          <Reveal delay={100}>
            <QuietLink to="/classes" variant="outline">
              See all categories
            </QuietLink>
          </Reveal>
        </div>
        <ul className="mt-12 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
          {categories.map((category, index) => (
            <Reveal as="li" key={category.slug} delay={index * 70}>
              <Link
                to="/classes/$slug"
                params={{ slug: category.slug }}
                className="group flex flex-col gap-2 py-6 no-underline sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span className="type-h2 min-w-[16rem] text-ink transition-colors duration-500 group-hover:text-leaf">
                  {category.name}
                </span>
                <span className="max-w-[52ch] text-[0.9375rem] text-ink/75">{category.short}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 5 — Who it's for */}
      <Section>
        <Reveal className="max-w-[46ch]">
          <Eyebrow>Who Amoda is for</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">Specific people, not "everyone".</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal key={audience.label} delay={index * 110}>
              <img
                src={audienceImages[index]}
                alt={audience.label}
                width={1000}
                height={1250}
                loading="lazy"
                className="emboss aspect-[4/5] w-full rounded-lg object-cover"
              />
              <p className="type-label mt-6 text-leaf">{audience.label}</p>
              <h3 className="type-h3 mt-3 text-ink">{audience.headline}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{audience.body}</p>
              <QuietLink to={audience.cta.to} variant="quiet" size="sm" className="mt-5 px-0">
                {audience.cta.label}
              </QuietLink>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — Differentiators */}
      <Section tone="ink" className="relative overflow-hidden">
        <LotusWatermark className="pointer-events-none absolute -right-24 -bottom-32 w-[26rem]" />
        <Reveal className="relative max-w-[48ch]">
          <Eyebrow tone="sage">What makes us different</Eyebrow>
          <h2 className="type-h1 mt-5 text-parchment">
            The standard is the product.
          </h2>
        </Reveal>
        <dl className="relative mt-12 grid gap-10 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <dt className="type-h3 text-parchment">{item.title}</dt>
              <dd className="mt-3 text-[0.9375rem] leading-relaxed text-sage/85">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* 7 — Free class */}
      <Section tone="card">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow withDot>{freeClass.eyebrow}</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-ink">{freeClass.title}</h2>
            <Prose className="mt-5">
              <p>{freeClass.body}</p>
            </Prose>
            <p className="type-caption mt-5 text-leaf">{freeClass.detail}</p>
          </Reveal>
          <Reveal delay={140} className="emboss p-7">
            <p className="type-label text-leaf">Save your place</p>
            <p className="mt-3 text-[0.9375rem] text-ink/75">
              Email only. We'll send the link and a reminder — nothing else.
            </p>
            <div className="mt-6">
              <EmailCaptureForm
                cta="Reserve my spot"
                successTitle="You're in for Thursday."
                successBody="The Zoom link is on its way, with one reminder an hour before. Nothing else, ever."
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 8 — Testimonials */}
      <Section>
        <Reveal className="max-w-[42ch]">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">What actually changed.</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.author} delay={index * 100}>
              <figure className="emboss flex h-full flex-col p-7">
                <blockquote className="type-h3 text-ink">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-auto pt-6">
                  <span className="type-label block text-leaf">{testimonial.author}</span>
                  <span className="type-caption mt-1 block text-muted-foreground">
                    {testimonial.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 9 — Manifesto & close */}
      <Section tone="sage">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <LotusMark variant="ring" className="mx-auto w-14" />
            <div className="mt-8 space-y-6">
              {manifesto.map((line) => (
                <p key={line} className="type-h2 text-ink">
                  {line}
                </p>
              ))}
            </div>
            <PetalDivider className="mx-auto mt-10 w-28" />
            <p className="type-accent mt-8 text-xl text-leaf">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <QuietLink to="/membership" size="lg">
                Join Amoda
              </QuietLink>
              <QuietLink to="/contact" variant="outline">
                Talk to a person
              </QuietLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
