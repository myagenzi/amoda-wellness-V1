import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { HeroVideo } from "@/components/site/HeroVideo";
import { QuietLink } from "@/components/site/QuietButton";
import { LotusMark, PetalDivider, LotusWatermark } from "@/components/brand/LotusMark";
import { EcosystemIcon } from "@/components/brand/EcosystemIcon";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import {
  audiences,
  ecosystem,
  finalCta,
  hero,
  manifesto,
  problem,
  seo,
  socialProof,
  testimonials,
  trust,
  whatAmodaIs,
  whoWeServe,
} from "@/content/home";
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
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1 — Hero: video stage, parchment type on an ink scrim */}
      <section className="relative -mt-[var(--header-h)] flex min-h-[94svh] flex-col justify-center overflow-hidden px-5 pt-[calc(var(--header-h)+3.5rem)] pb-[15rem] sm:px-8 md:min-h-[100svh] md:pt-[calc(var(--header-h)+6rem)] md:pb-[13rem]">
        <HeroVideo />
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="max-w-[46rem]">
            <Eyebrow withDot tone="sage">
              {site.tagline}
            </Eyebrow>
            <h1 className="type-hero mt-7 max-w-[24ch] text-parchment">
              Wellness isn't a destination. It's{" "}
              <span className="type-accent text-sage">coming home to yourself.</span>
            </h1>
            <p className="mt-7 max-w-[46ch] text-lg text-parchment/85">{hero.subheadline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <QuietLink to="/classes" size="lg" variant="onInk">
                {hero.primaryCta}
              </QuietLink>
              <QuietLink
                to="/classes"
                hash="free-live-class"
                variant="quiet"
                className="text-sage decoration-sage/45 hover:decoration-sage"
              >
                {hero.secondaryCta}
              </QuietLink>
            </div>
            <LotusMark
              variant="micro"
              ground="dark"
              className="mt-10 w-14 opacity-85"
              unfold
            />
          </Reveal>
        </div>
        <HeroTakeaways />
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
            <h2 className="type-h1 max-w-[26ch] text-ink">{problem.headline}</h2>
            <Prose className="mt-6">
              {problem.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Prose>
            <p className="type-accent mt-7 text-xl text-leaf">{problem.close}</p>
          </Reveal>
        </div>
      </Section>

      {/* 3 — What Amoda is */}
      <Section>
        <Reveal className="max-w-[52ch]">
          <Eyebrow>What Amoda is</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">{whatAmodaIs.headline}</h2>
          <p className="mt-5 text-ink/80">{whatAmodaIs.intro}</p>
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
        <Reveal delay={120} className="mt-12">
          <QuietLink to={whatAmodaIs.cta.to}>{whatAmodaIs.cta.label}</QuietLink>
        </Reveal>
      </Section>

      {/* 4 — Who we serve */}
      <Section tone="sage">
        <Reveal className="max-w-[52ch]">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">{whoWeServe.headline}</h2>
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
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{audience.body}</p>
              <p className="type-h3 mt-4 text-ink">“{audience.quote}”</p>
              <QuietLink to={audience.cta.to} variant="quiet" size="sm" className="mt-5 px-0">
                {audience.cta.label}
              </QuietLink>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 — Free live class banner */}
      <Section tone="card" id="free-live-class">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow withDot>{freeClass.eyebrow}</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[26ch] text-ink">{freeClass.title}</h2>
            <Prose className="mt-5">
              <p>{freeClass.body}</p>
            </Prose>
          </Reveal>
          <Reveal delay={140} className="emboss p-7">
            <p className="type-label text-leaf">{freeClass.cta}</p>
            <p className="mt-3 text-[0.9375rem] text-ink/75">
              Email only. We'll send the link and a reminder — nothing else.
            </p>
            <div className="mt-6">
              <EmailCaptureForm
                cta={freeClass.cta}
                successTitle="Your spot is reserved."
                successBody="The link is on its way, with one reminder an hour before. Nothing else, ever."
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 6 — Trust / differentiation */}
      <Section tone="ink" className="relative overflow-hidden">
        <LotusWatermark className="pointer-events-none absolute -right-24 -bottom-32 w-[26rem]" />
        <Reveal className="relative max-w-[52ch]">
          <Eyebrow tone="sage">Trust</Eyebrow>
          <h2 className="type-h1 mt-5 text-parchment">{trust.headline}</h2>
          <p className="mt-6 text-sage/85">{trust.body}</p>
          <p className="type-accent mt-6 text-xl text-sage">{trust.close}</p>
        </Reveal>
        <ul className="relative mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-sage/20 pt-8">
          {trust.strip.map((item, index) => (
            <Reveal as="li" key={item} delay={index * 80}>
              <span className="type-label text-sage">✓ {item}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 7 — Manifesto moment */}
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
          </Reveal>
        </div>
      </Section>

      {/* 8 — Social proof */}
      <Section>
        <Reveal className="max-w-[42ch]">
          <Eyebrow>Social proof</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">{socialProof.headline}</h2>
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

      {/* 9 — Final CTA */}
      <Section tone="card">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="type-h1 text-ink">{finalCta.headline}</h2>
            <p className="mt-5 text-ink/80">{finalCta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <QuietLink to={finalCta.primary.to} size="lg">
                {finalCta.primary.label}
              </QuietLink>
              <QuietLink to={finalCta.secondary.to} variant="outline">
                {finalCta.secondary.label}
              </QuietLink>
            </div>
            <p className="type-caption mt-6 text-muted-foreground">{finalCta.smallPrint}</p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
