import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word blur-in, unhurried: each word settles from a soft blur once the
 * line scrolls into view. Line breaks in the text are preserved.
 */
export function BlurWords({
  text,
  className,
  startDelay = 0,
  stagger = 120,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const lines = text.split("\n");
  let index = 0;

  return (
    <p ref={ref} className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(" ").map((word) => {
            const delay = startDelay + index * stagger;
            index += 1;
            return (
              <span
                key={`${word}-${delay}`}
                className={cn("blur-word", shown && "blur-word-in")}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {word}
                {"\u00A0"}
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
