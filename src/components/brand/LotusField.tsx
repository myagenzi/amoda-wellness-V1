import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Oversized, line-only lotus field for the manifesto section.
 *
 * Draws from the same six-petal mark as LotusMark, but abstracted to hairline
 * strokes only — no fills, no gold disc — so it reads as brand energy behind
 * the type. Animates on first reveal: a slow trace-in, then continuous
 * breathing and a very long rotation.
 *
 * Reduced-motion users get the fully drawn shape immediately.
 */
export function LotusField({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-auto w-[160vw] min-w-[1100px] -translate-x-1/2 -translate-y-1/2 overflow-visible",
        "lotus-breathe",
        drawn ? "lotus-draw" : "lotus-undrawn",
        className,
      )}

      aria-hidden="true"
    >
      <defs>
        <linearGradient id="manifestoField" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-sage)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--color-leaf-soft)" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <g className="lotus-turn" style={{ transformBox: "view-box", transformOrigin: "300px 300px" }}>
        {/* Outer ring */}
        <circle
          cx="300"
          cy="300"
          r="285"
          fill="none"
          stroke="url(#manifestoField)"
          strokeWidth="1"
          opacity="0.55"
        />

        {/* Inner hairline ring */}
        <circle
          cx="300"
          cy="300"
          r="138"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="0.9"
          opacity="0.18"
        />

        {/* Six petals at 60° intervals — larger so they bleed past the frame. */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <ellipse
            key={deg}
            cx="300"
            cy="300"
            rx="42"
            ry="268"
            fill="none"
            stroke="var(--color-sage)"
            strokeWidth="1"
            opacity={0.14 + (i % 2) * 0.05}
            transform={`rotate(${deg} 300 300)`}
            className="lotus-petal"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}
      </g>

    </svg>
  );
}
