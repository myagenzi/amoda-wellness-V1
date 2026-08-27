import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { freeClass } from "@/content/site";
import bgDesktop from "@/assets/freeclass-bg-desktop.jpg";
import bgMobile from "@/assets/freeclass-bg-mobile.jpg";

/**
 * Section 5 — "Free Live Class This Week".
 *
 * Full-bleed still under a warm-green scrim with fluid container-query type —
 * the same layered atmosphere as the hero band. The content is the original
 * free-class invitation: copy on the left, the reservation form in a
 * frosted-glass card on the right so nothing reads as a stark white slab.
 *
 * The background is a still for now. To add the montage later, drop a
 * <video autoPlay muted loop playsInline> above the <picture>, start it at
 * opacity-0 and flip to opacity-100 on `canplay` with a .9s ease transition —
 * the same cross-fade the hero uses.
 */
export function FreeClassBand() {
  return (
    <section
      id="free-live-class"
      className="relative isolate overflow-hidden bg-ink px-5 py-24 sm:px-8 md:py-32"
    >
      <picture>
        <source media="(max-width: 819px)" srcSet={bgMobile} />
        <img
          src={bgDesktop}
          alt=""
          width={1920}
          height={1088}
          loading="lazy"
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-freeclass-scrim" aria-hidden="true" />

      <div className="band-cq mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="type-label text-parchment/70">{freeClass.eyebrow}</p>
            <h2 className="type-band-hero mt-6 max-w-[22ch] text-parchment [text-shadow:0_1px_18px_rgb(0_0_0/_0.25)]">
              {freeClass.title}
            </h2>
            <p className="type-band-sub mt-5 max-w-[46ch] text-parchment/85">
              {freeClass.body}
            </p>
            <div className="mt-8">
              <QuietLink
                to="/classes"
                variant="quiet"
                className="text-sage decoration-sage/45 hover:decoration-sage"
              >
                See Full Schedule
              </QuietLink>
            </div>
          </Reveal>

          <Reveal delay={140} className="frost rounded-2xl p-7 md:p-8">
            <p className="type-label text-gold">{freeClass.cta}</p>
            <p className="mt-3 text-[0.9375rem] text-parchment/80">
              Email only. We'll send the link and a reminder — nothing else.
            </p>
            <div className="mt-6">
              <EmailCaptureForm
                cta={freeClass.cta}
                successTitle="Your spot is reserved."
                successBody="The link is on its way, with one reminder an hour before. Nothing else, ever."
                ground="dark"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
