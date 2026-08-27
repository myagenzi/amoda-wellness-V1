import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Pointer = { url: string };

/**
 * Looping video ground behind copy. The scrim class carries the brand-tinted
 * veil so type stays legible; reduced-motion visitors get the poster still.
 */
export function VideoBackdrop({
  video,
  poster,
  scrim,
  videoClassName,
  className,
}: {
  video: Pointer;
  poster: Pointer;
  scrim: string;
  videoClassName?: string;
  className?: string;
}) {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return (
    <div
      className={cn("absolute inset-0 -z-10 overflow-hidden bg-ink", className)}
      aria-hidden="true"
    >
      {motionOk ? (
        <video
          className={cn("size-full object-cover", videoClassName)}
          src={video.url}
          poster={poster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img src={poster.url} alt="" className={cn("size-full object-cover", videoClassName)} />
      )}
      <div className={cn("absolute inset-0", scrim)} />
    </div>
  );
}
