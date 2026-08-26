import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import heroVideo from "@/assets/hero-montage.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";

/**
 * Full-bleed hero stage: looping macro montage behind an ink scrim so parchment
 * type stays legible. Falls back to the poster still on reduced-motion.
 */
export function HeroVideo({ className }: { className?: string }) {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden bg-ink", className)} aria-hidden>
      {motionOk ? (
        <video
          className="size-full object-cover"
          src={heroVideo.url}
          poster={heroPoster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img src={heroPoster.url} alt="" className="size-full object-cover" />
      )}
      <div className="absolute inset-0 bg-scrim" />
    </div>
  );
}
