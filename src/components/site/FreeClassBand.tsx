import { LotusMark } from "@/components/brand/LotusMark";
import { QuietLink } from "@/components/site/QuietButton";
import { cn } from "@/lib/utils";
import bgDesktop from "@/assets/freeclass-bg-desktop.jpg";
import bgMobile from "@/assets/freeclass-bg-mobile.jpg";

/**
 * Section 5 — "Free Live Class This Week".
 *
 * Measurement-driven layering, same technique as the hero band: a full-bleed
 * still under a warm-green scrim, fluid container-query type, frosted-glass
 * panels behind the weekly schedule, and a floating parchment column that
 * overhangs the header baseline by 1.5em.
 *
 * The background is a still for now. To add the montage later, drop a
 * <video autoPlay muted loop playsInline> above the <picture>, start it at
 * opacity-0 and flip to opacity-100 on `canplay` with a .9s ease transition —
 * the same cross-fade the hero uses.
 */

type Row = {
  category: string;
  practitioner: string;
  price: string;
  /** This week's open class — rendered in the parchment column. */
  free?: boolean;
};

/** Static for now; rotates weekly once practitioner scheduling exists. */
const schedule: Row[] = [
  { category: "Health Coaching", practitioner: "Meera Raghavan", price: "$95", free: true },
  { category: "Life Coaching", practitioner: "Joanne Mercier", price: "$110" },
  { category: "Nutrition", practitioner: "Lila Shah", price: "$85" },
  { category: "Yoga Classes", practitioner: "Hannah Osei", price: "$30" },
  { category: "Diabetic Solutions", practitioner: "Arun Desai", price: "$120" },
];

const cell = "type-band-cell px-2 text-center md:px-4";

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
        {/* Headline block */}
        <p className="type-label text-parchment/70">Free this week</p>
        <h2 className="type-band-hero mt-6 max-w-[22ch] text-parchment [text-shadow:0_1px_18px_rgb(0_0_0/_0.25)]">
          Try Amoda for free — no card, no commitment.
        </h2>
        <p className="type-band-sub mt-5 max-w-[46ch] text-parchment/85">
          Every week, we open one live class to everyone — free.
        </p>

        {/* Weekly schedule — three layers */}
        <div className="relative mt-20 md:mt-24">
          {/* Layer 1 — frosted panels behind */}
          <div className="schedule-grid pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="frost col-span-2 h-full rounded-2xl" />
            <div className="frost h-full rounded-2xl" />
          </div>

          {/* Layer 2 — the floating parchment column */}
          <div
            className="schedule-grid pointer-events-none absolute inset-0 items-stretch"
            aria-hidden="true"
          >
            <div />
            <div className="free-col mx-1.5 -mt-[1.5em] mb-1.5" />
            <div />
          </div>

          {/* Layer 3 — content */}
          <div className="relative z-10">
            <div className="schedule-grid border-b border-parchment/15 py-5">
              <p className="type-label px-4 text-left text-parchment/75 md:px-6">
                Class &amp; Practitioner
              </p>
              <p className="type-label px-3 text-center text-ink md:px-4">This Week</p>
              <p className="type-label px-3 text-center text-parchment/75 md:px-4">
                Regular Booking
              </p>
            </div>

            <ul>
              {schedule.map((row) => (
                <li
                  key={row.category}
                  className="schedule-grid border-b border-parchment/10 py-5 last:border-b-0"
                >
                  <div className="flex items-center gap-3 px-4 text-left md:px-6">
                    {row.free ? (
                      <LotusMark
                        variant="micro"
                        ground="dark"
                        className="w-[1.1em] shrink-0"
                        title="Included in this session"
                      />
                    ) : (
                      <span className="w-[1.1em] shrink-0" aria-hidden="true" />
                    )}
                    <span className="type-band-cell text-parchment">
                      {row.category}
                      <span className="text-parchment/65"> — {row.practitioner}</span>
                    </span>
                  </div>
                  <p
                    className={cn(
                      cell,
                      row.free ? "type-label text-leaf" : "text-ink/45",
                    )}
                  >
                    {row.free ? "Free" : "—"}
                  </p>
                  <p className={cn(cell, "text-parchment/80")}>{row.price}</p>
                </li>
              ))}
            </ul>

            {/* Totals row */}
            <div className="schedule-grid border-t border-parchment/20 py-6">
              <p className="type-band-cell px-4 text-left text-parchment md:px-6">
                Total price
                <span className="type-accent ml-3 block text-parchment/70 md:ml-0">
                  New free class every week — no card required, no commitment.
                </span>
              </p>
              <p className={cn(cell, "type-h3 text-ink")}>$0</p>
              <p className={cn(cell, "text-parchment/70")}>from $30</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <QuietLink
            to="/classes"
            size="lg"
            className="rounded-full bg-parchment text-ink transition-colors duration-200 ease-out hover:bg-sage active:translate-y-px"
          >
            Reserve Your Free Spot
          </QuietLink>
          <QuietLink
            to="/classes"
            size="lg"
            variant="onInk"
            className="frost rounded-full border-parchment/25 text-parchment transition-colors duration-200 ease-out hover:bg-parchment hover:text-ink active:translate-y-px"
          >
            See Full Schedule
          </QuietLink>
        </div>
      </div>
    </section>
  );
}
