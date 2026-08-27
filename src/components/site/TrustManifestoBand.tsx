import { Reveal } from "@/components/site/Reveal";
import { LotusField } from "@/components/brand/LotusField";
import { Eyebrow } from "@/components/site/Section";
import { manifesto, trust } from "@/content/home";
import bgDesktop from "@/assets/trust-manifesto-desktop.jpg";
import bgMobile from "@/assets/trust-manifesto-mobile.jpg";

/**
 * Sections 6 + 7 merged — Trust and the Manifesto share one full-bleed
 * overhead frame (a person on a mat, leaf shadows across the grass) under a
 * graded ink scrim: heavy where the type lives at the top and foot, near-clear
 * through the middle so the photograph reads. The trust markers are layered
 * into the picture as a hairline row rather than sitting on a card, and a
 * single faint lotus bleeds off the right edge behind the manifesto.
 */
export function TrustManifestoBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 sm:px-8">
      <picture>
        <source media="(max-width: 819px)" srcSet={bgMobile} />
        <img
          src={bgDesktop}
          alt=""
          width={1920}
          height={1280}
          loading="lazy"
          aria-hidden="true"
          className="absolute inset-0 -z-20 size-full object-cover object-[center_38%] saturate-[0.8]"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-trust-scrim" aria-hidden="true" />

      <LotusField className="left-auto right-0 top-[68%] w-[90vw] min-w-[620px] translate-x-1/3 opacity-[0.09]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Top zone — Trust */}
        <div className="pt-24 md:pt-32">
          <Reveal className="max-w-[52ch]">
            <Eyebrow tone="sage">Trust</Eyebrow>
            <h2 className="type-h1 mt-5 text-parchment">{trust.headline}</h2>
            <p className="mt-6 max-w-[52ch] text-parchment/85">{trust.body}</p>
            <p className="type-accent mt-6 text-xl text-sage">{trust.close}</p>
          </Reveal>
        </div>

        {/* Middle zone — trust markers layered into the picture */}
        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-y border-sage/25 py-6 md:mt-24">
          {trust.strip.map((item, index) => (
            <Reveal as="li" key={item} delay={index * 80}>
              <span className="type-label text-sage/90">✓ {item}</span>
            </Reveal>
          ))}
        </ul>

        {/* Bottom zone — the manifesto */}
        <div className="mx-auto max-w-3xl pb-28 pt-24 text-center md:pb-36 md:pt-36">
          <p className="type-label mb-10 text-sage/70">Our Manifesto</p>
          <Reveal>
            <div className="space-y-10">
              {manifesto.map((line, index) => {
                const isClosing = index === manifesto.length - 1;
                return (
                  <p
                    key={index}
                    className={
                      isClosing
                        ? "type-accent mt-12 italic text-gold"
                        : "type-h2 whitespace-pre-line italic text-parchment/90 [text-wrap:balance]"
                    }
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
