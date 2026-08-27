import { EmailCaptureForm } from "@/components/forms/EmailCaptureForm";
import { Reveal } from "@/components/site/Reveal";
import { QuietLink } from "@/components/site/QuietButton";
import { freeClass } from "@/content/site";
import bgDesktop from "@/assets/freeclass-bg-desktop.jpg";
import bgMobile from "@/assets/freeclass-bg-mobile.jpg";

/**
 * Section 5 — "Free Live Class This Week".
 *
 * Full-bleed still under a deep ink scrim with fluid container-query type.
 * The plate is slightly blurred and desaturated so no bright highlight lands
 * behind the copy; the reservation form sits in an ink-tinted glass card with
 * a sage hairline so it reads as a deliberate element, not a smudge.
 */
export function FreeClassBand() {
  return (
    <section
      id="free-live-class"
      className="relative isolate overflow-hidden bg-ink px-5 py-20 sm:px-8 md:py-26"
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
          className="absolute inset-0 -z-10 size-full scale-105 object-cover blur-[3px] saturate-[0.7]"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-freeclass-scrim" aria-hidden="true" />

      <div className="band-cq mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="text-left">
            <p className="type-label text-sage">{freeClass.eyebrow}</p>
            <h2 className="type-band-hero mt-6 max-w-[22ch] text-parchment">
              {freeClass.title}
            </h2>
            <p className="type-band-sub mt-5 max-w-[46ch] text-parchment/90">
              {freeClass.body}
            </p>
            <div className="mt-8">
              <QuietLink
                to="/classes"
                variant="quiet"
                className="px-0 text-sage decoration-sage/45 hover:decoration-sage"
              >
                See Full Schedule
              </QuietLink>
            </div>
          </Reveal>

          <Reveal delay={140} className="frost rounded-2xl p-7 md:p-8">
            <p className="type-label text-gold">{freeClass.cta}</p>
            <p className="mt-3 text-[0.9375rem] text-parchment/85">
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
