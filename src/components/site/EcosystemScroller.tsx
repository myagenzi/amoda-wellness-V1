import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Section";
import { QuietLink } from "@/components/site/QuietButton";
import { ecosystem, whatAmodaIs } from "@/content/home";
import { cn } from "@/lib/utils";
import practitionersImage from "@/assets/ecosystem-practitioners.jpg";
import classesImage from "@/assets/ecosystem-classes.jpg";
import communityImage from "@/assets/ecosystem-community.jpg";
import shoppeImage from "@/assets/ecosystem-shoppe.jpg";
import retreatsImage from "@/assets/ecosystem-retreats.jpg";
import corporateImage from "@/assets/ecosystem-corporate.jpg";

const backgroundUrl =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85";

const cardImages: Record<string, string> = {
  trust: practitionersImage,
  class: classesImage,
  community: communityImage,
  shoppe: shoppeImage,
  retreat: retreatsImage,
  corporate: corporateImage,
};

const navLabels = [
  "Practitioners",
  "Classes",
  "Community",
  "Shoppe",
  "Retreats",
  "Corporate",
];

const imageAlt: Record<string, string> = {
  trust: "A practitioner's hands making notes in a journal by a window",
  class: "A woman in a live online session at home, laptop open on a mat",
  community: "A small circle of people of different ages in conversation",
  shoppe: "Hands opening a wooden wellness box with tea and a linen pouch",
  retreat: "Golden-hour light across tall grass beside still water",
  corporate: "Colleagues stretching beside their desks during a quiet break",
};

export function EcosystemScroller() {
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    ecosystem.map(() => false),
  );

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setRevealed(ecosystem.map(() => true));
      return;
    }

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset["index"]);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { threshold: 0.6 },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset["index"]);
          if (Number.isNaN(index)) return;
          setRevealed((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    nodes.forEach((node) => {
      activeObserver.observe(node);
      revealObserver.observe(node);
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="what-amoda-is"
      className="relative overflow-hidden px-5 py-20 md:px-10 md:py-40 lg:px-16 lg:py-48"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url("${backgroundUrl}")` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 72%, transparent) 0%, color-mix(in oklab, var(--ink) 52%, transparent) 42%, color-mix(in oklab, var(--ink) 66%, transparent) 100%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[400px_1fr] lg:gap-24 xl:grid-cols-[460px_1fr] xl:gap-48">
        {/* Sticky left column */}
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <Eyebrow withDot tone="sage">
            {whatAmodaIs.eyebrow}
          </Eyebrow>
          <h2 className="type-h1 mt-6 max-w-[22ch] text-parchment">
            {whatAmodaIs.headline}
          </h2>
          <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-parchment/80">
            {whatAmodaIs.subheadline}
          </p>

          <ul className="mt-9 hidden grid-cols-2 gap-2 lg:grid">
            {ecosystem.map((item, index) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() =>
                    cardRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  className={cn(
                    "type-label w-full rounded-full border px-4 py-2.5 text-left transition-all duration-500 ease-[var(--ease-settle)]",
                    active === index
                      ? "border-sage/45 bg-ink/45 text-parchment"
                      : "border-sage/20 bg-ink/20 text-parchment/45 hover:text-parchment/75",
                  )}
                >
                  {navLabels[index]}
                </button>
              </li>
            ))}
          </ul>

          <QuietLink
            to={whatAmodaIs.cta.to}
            variant="onInk"
            size="lg"
            className="mt-9"
          >
            {whatAmodaIs.cta.label}
          </QuietLink>
        </div>

        {/* Scrolling right column */}
        <ul className="space-y-6 md:space-y-10">
          {ecosystem.map((item, index) => (
            <li
              key={item.name}
              data-index={index}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={cn(
                "transition-all duration-700 ease-out",
                revealed[index]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0",
              )}
            >
              <Link
                to={item.to}
                className="block rounded-3xl border border-sage/15 bg-ink/25 p-6 no-underline backdrop-blur-sm transition-colors duration-500 hover:bg-ink/35 md:p-10"
              >
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={cardImages[item.icon]}
                    alt={imageAlt[item.icon] ?? item.name}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="type-h2 mt-7 text-parchment">{item.name}</h3>
                <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-parchment/75">
                  {item.what}
                </p>
                {item.note ? (
                  <span className="type-label mt-4 inline-block rounded-full border border-sage/25 px-3 py-1 text-sage">
                    {item.note}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
