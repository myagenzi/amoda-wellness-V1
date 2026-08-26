import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { EcosystemIcon } from "@/components/brand/EcosystemIcon";
import { corporate, included, intro, retreats, seo, tiers } from "@/content/membership";
import { cn } from "@/lib/utils";
import communityImage from "@/assets/community-call.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Eyebrow withDot>Amoda Community</Eyebrow>
            <h1 className="type-hero mt-6 max-w-[24ch] text-ink">{intro.headline}</h1>
            <Prose className="mt-6">
              <p>{intro.body}</p>
            </Prose>
            <div className="mt-9">
              <QuietLink to="/contact" size="lg">
                {intro.cta}
              </QuietLink>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={communityImage}
              alt="A live Amoda community session on a laptop beside a notebook"
              width={1400}
              height={900}
              className="emboss aspect-[16/10] w-full rounded-lg object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <Eyebrow>What's Included</Eyebrow>
            <h2 className="type-h1 mt-5 text-ink">Everything membership opens.</h2>
          </Reveal>
          <Reveal delay={110}>
            <ul className="space-y-4">
              {included.map((item) => (
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

      <Section tone="sage">
        <Reveal className="max-w-[46ch]">
          <Eyebrow>Pricing / Tiers</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">Three ways to be part of Amoda.</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal as="li" key={tier.name} delay={index * 100}>
              <div
                className={cn(
                  "emboss flex h-full flex-col p-7",
                  tier.featured && "border-leaf/40 shadow-[var(--shadow-emboss-lift)]",
                )}
              >
                <h3 className="type-h2 text-ink">{tier.name}</h3>
                <p className="type-caption mt-2 text-muted-foreground">Best for</p>
                <p className="mt-1 text-[0.9375rem] text-ink/80">{tier.bestFor}</p>
                <p className="type-caption mt-6 text-muted-foreground">Includes</p>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink/80">{tier.includes}</p>
                <div className="mt-auto pt-8">
                  <QuietLink
                    to="/contact"
                    variant={tier.featured ? "leaf" : "outline"}
                    className="w-full"
                  >
                    {intro.cta}
                  </QuietLink>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200} className="emboss mx-auto mt-12 max-w-xl p-7 text-center">
          <p className="type-label text-leaf">{intro.cta}</p>
          <p className="mt-3 text-[0.9375rem] text-ink/75">
            One email when memberships open, with founding pricing held for you.
          </p>
          <div className="mt-6">
            <EmailCaptureForm
              cta={intro.cta}
              successTitle="You're on the founding list."
              successBody="We'll write once, when memberships open. Founding pricing will be held for you."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="ink" id="corporate">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow tone="sage">Corporate Wellness</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[24ch] text-parchment">{corporate.headline}</h2>
            <p className="mt-6 max-w-[56ch] text-sage/85">{corporate.body}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="type-label text-sage">{corporate.offerTitle}</p>
            <ul className="mt-5 space-y-4">
              {corporate.offer.map((item) => (
                <li key={item} className="flex gap-4 border-b border-sage/20 pb-4">
                  <span
                    className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-sage/85">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <QuietLink to="/contact" variant="onInk">
                {corporate.cta}
              </QuietLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="retreats">
        <Reveal className="max-w-[46ch]">
          <Eyebrow>Experiences &amp; Retreats</Eyebrow>
          <h2 className="type-h1 mt-5 text-ink">{retreats.headline}</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {retreats.items.map((retreat, index) => (
            <Reveal as="li" key={retreat.name} delay={index * 100}>
              <div className="emboss flex h-full flex-col p-7">
                <EcosystemIcon name="retreat" />
                <h3 className="type-h3 mt-5 text-ink">{retreat.name}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">{retreat.body}</p>
                <p className="type-label mt-auto pt-6 text-leaf">Waitlist</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200} className="mt-12">
          <QuietLink to="/contact" variant="outline">
            {retreats.cta}
          </QuietLink>
        </Reveal>
      </Section>

      <Section tone="card">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow withDot>Get in touch</Eyebrow>
            <h2 className="type-h1 mt-5 max-w-[22ch] text-ink">
              Membership, a retreat, or your organisation.
            </h2>
            <Prose className="mt-5">
              <p>
                Tell us which and we'll reply within one working day — with specifics, not a
                brochure.
              </p>
            </Prose>
          </Reveal>
          <Reveal delay={130} className="emboss p-7 sm:p-9">
            <ContactForm defaultInterest="Membership" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
