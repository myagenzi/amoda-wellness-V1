import { useEffect, useRef, useState } from "react";
import { Eyebrow, Prose, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import artiPortrait from "@/assets/arti-founder-garden.jpg.asset.json";

const chapters = [
  {
    label: "Why I Created Amoda",
    title: "A simple belief.",
    content: (
      <p>
        I created Amoda from a simple belief: <strong>wellness shouldn't depend on where you live
        or whether you know where to look.</strong>
      </p>
    ),
  },
  {
    label: "The Problem",
    title: "I wanted to create something different.",
    content: (
      <>
        <p>
          There are extraordinary wellness practitioners and traditions around the world, yet
          finding someone you can genuinely trust can feel overwhelming. Wellness can also feel
          fragmented—one place for yoga, another for meditation, another for coaching, another for
          traditional practices. And even when we find support, we can still feel like we're
          navigating our wellbeing alone.
        </p>
        <p>I wanted to create something different.</p>
      </>
    ),
  },
  {
    label: "What Amoda Brings",
    title: "Knowledge and support from around the world.",
    content: (
      <p>
        Amoda brings trusted wellness practitioners, meaningful wellness experiences and community
        together in one place—connecting people with knowledge and support from around the world,
        not just what's available locally.
      </p>
    ),
  },
  {
    label: "How I Show Up",
    title: "Connector. Curator. Community Builder.",
    content: (
      <div className="space-y-5">
        <p>
          As a <strong>Connector</strong>, I bring people and practitioners together.
        </p>
        <p>
          As a <strong>Curator</strong>, I seek out knowledgeable, experienced practitioners who
          meet Amoda's standards for trust, professionalism and care.
        </p>
        <p>
          And as a <strong>Community Builder</strong>, I want Amoda to be a place where people feel
          welcomed, supported and connected—not simply another website where you book a service and
          leave.
        </p>
      </div>
    ),
  },
];

function StoryCard({
  chapter,
  index,
  activeIndex,
  mobile = false,
}: {
  chapter: (typeof chapters)[number];
  index: number;
  activeIndex: number;
  mobile?: boolean;
}) {
  const distance = index - activeIndex;

  return (
    <article
      className={cn(
        mobile
          ? "border-t border-parchment/20 py-9 first:border-t-0 first:pt-0"
          : "liquid-glass absolute inset-x-0 top-1/2 rounded-2xl px-8 py-9 transition-[opacity,transform] duration-700 ease-[var(--ease-settle)] lg:px-11 lg:py-10",
        !mobile && distance === 0 && "pointer-events-auto opacity-100",
        !mobile && distance < 0 && "pointer-events-none opacity-0",
        !mobile && distance > 0 && "pointer-events-none opacity-0",
      )}
      style={
        mobile
          ? undefined
          : {
              transform: `translateY(calc(-50% + ${distance * 28}px)) scale(${distance === 0 ? 1 : 0.985})`,
            }
      }
      aria-hidden={!mobile && distance !== 0}
    >
      <p className="type-label text-gold">{chapter.label}</p>
      <h3 className="type-h2 mt-4 max-w-[23ch] text-parchment">{chapter.title}</h3>
      <div className="mt-5 space-y-5 text-[0.96rem] leading-[1.75] text-sage sm:text-base">
        {chapter.content}
      </div>
    </article>
  );
}

export function FounderStory() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = scene.getBoundingClientRect();
      const travel = Math.max(scene.offsetHeight - window.innerHeight, 1);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(nextProgress);
      setActiveIndex(Math.min(chapters.length - 1, Math.floor(nextProgress * chapters.length)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Section tone="card" className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow withDot>Our Story &amp; Founder</Eyebrow>
          </div>
          <h2 className="type-hero mt-7 text-ink">
            Meet Arti<span className="text-gold">.</span>
          </h2>
          <div className="mx-auto my-6 h-px w-16 bg-gold" aria-hidden="true" />
          <p className="text-[0.95rem] font-medium text-leaf sm:text-base">
            Founder, Connector &amp; Community Builder
          </p>
          <Prose className="mx-auto mt-8 text-left sm:text-center">
            <p>
              Arti brings a background in psychology, health and life coaching, and holistic
              wellness to the creation of Amoda Wellness. She holds a <strong>BA in Psychology from
              McGill University</strong> and is a <strong>Certified Health &amp; Life Coach</strong>.
            </p>
            <p>
              But Amoda grew from more than professional credentials. It grew from a belief that
              wellness should feel <strong>accessible, connected and human</strong>.
            </p>
          </Prose>
        </Reveal>
      </Section>

      <section ref={sceneRef} className={cn("relative bg-ink", !reduceMotion && "lg:h-[400vh]")}>
        <div
          className={cn(
            "mx-auto max-w-6xl px-5 py-20 sm:px-8",
            !reduceMotion && "lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-16",
          )}
        >
          <div className="grid w-full gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-lg shadow-2xl lg:h-[min(72vh,43rem)] lg:max-w-none">
              <img
                src={artiPortrait.url}
                alt="Arti, founder of Amoda Wellness, standing in a garden"
                width={1536}
                height={2048}
                className="size-full object-cover object-[50%_34%] transition-transform duration-700 ease-[var(--ease-settle)]"
                style={reduceMotion ? undefined : { transform: `scale(${1 + progress * 0.035})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-parchment sm:p-8">
                <p className="type-h3">Arti</p>
                <p className="type-caption mt-1 text-sage">Founder of Amoda Wellness</p>
              </div>
            </div>

            <div
              className={cn(
                "hidden min-h-[32rem] items-center",
                !reduceMotion && "lg:relative lg:flex",
              )}
            >
              {chapters.map((chapter, index) => (
                <StoryCard
                  key={chapter.label}
                  chapter={chapter}
                  index={index}
                  activeIndex={activeIndex}
                />
              ))}
            </div>

            <div className={cn(!reduceMotion && "lg:hidden")}>
              {chapters.map((chapter, index) => (
                <StoryCard
                  key={chapter.label}
                  chapter={chapter}
                  index={index}
                  activeIndex={activeIndex}
                  mobile
                />
              ))}
            </div>
          </div>

          <div
            className={cn(
              "absolute bottom-7 left-1/2 hidden -translate-x-1/2 gap-2",
              !reduceMotion && "lg:flex",
            )}
            aria-hidden="true"
          >
            {chapters.map((chapter, index) => (
              <span
                key={chapter.label}
                className={cn(
                  "h-0.5 transition-[width,background-color] duration-500",
                  index === activeIndex ? "w-9 bg-gold" : "w-4 bg-parchment/25",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <Section className="py-24 text-center md:py-32">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex justify-center">
            <Eyebrow withDot>Where We're Headed</Eyebrow>
          </div>
          <h2 className="type-h1 mt-6 text-ink">My Vision for Amoda</h2>
          <div className="mx-auto my-7 h-px w-16 bg-gold" aria-hidden="true" />
          <Prose className="mx-auto text-left sm:text-center">
            <p>
              My vision for Amoda is much bigger than a wellness platform. I want it to become a
              trusted global wellness ecosystem where people can explore different paths to
              wellbeing and find what resonates with them— whether that's yoga, Ayurveda,
              meditation, wellness coaching, stress and burnout support, or simply a community that
              helps them feel less alone.
            </p>
            <p>
              Because I believe true wellbeing is about more than the physical body. It's about
              creating greater balance and connection across <strong>body, mind, emotions and
              energy</strong>.
            </p>
          </Prose>
          <blockquote className="type-accent mx-auto mt-9 max-w-2xl text-xl leading-relaxed text-leaf sm:text-2xl">
            And above all, I believe <strong>wellness was never meant to be a journey taken
            alone.</strong>
          </blockquote>
          <p className="type-h3 mt-6 text-ink">That is the heart of Amoda.</p>
          <p className="type-accent mt-8 text-base text-leaf">— Arti, Founder of Amoda</p>
        </Reveal>
      </Section>
    </>
  );
}