import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Pointer = { url: string };

/**
 * Cinematic video ground: the footage fades in once it has data, and fades
 * back out just before the loop point so the cycle never cuts. Reduced-motion
 * visitors get the poster still.
 */
const edgeFade: Record<string, string> = {
  bottom:
    "[mask-image:linear-gradient(to_bottom,#fff_0%,#fff_62%,transparent_100%)]",
  top: "[mask-image:linear-gradient(to_bottom,transparent_0%,#fff_38%,#fff_100%)]",
};

export function FadingVideo({
  video,
  poster,
  scrim,
  videoClassName,
  fadeEdge,
}: {
  video: Pointer;
  poster: Pointer;
  scrim: string;
  videoClassName?: string;
  /** Taper the whole ground toward a shared edge so stacked sections dissolve. */
  fadeEdge?: "top" | "bottom";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [motionOk, setMotionOk] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !motionOk) return;

    const onData = () => setVisible(true);
    const onTime = () => {
      if (!el.duration) return;
      // Dip out over the last second, then back in as the loop restarts.
      setVisible(el.duration - el.currentTime > 1);
    };

    el.addEventListener("loadeddata", onData);
    el.addEventListener("timeupdate", onTime);
    if (el.readyState >= 2) setVisible(true);
    return () => {
      el.removeEventListener("loadeddata", onData);
      el.removeEventListener("timeupdate", onTime);
    };
  }, [motionOk]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ink" aria-hidden="true">
      <img
        src={poster.url}
        alt=""
        className={cn("absolute inset-0 size-full object-cover", videoClassName)}
      />
      {motionOk ? (
        <video
          ref={ref}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-500 ease-[var(--ease-settle)]",
            visible ? "opacity-100" : "opacity-0",
            videoClassName,
          )}
          src={video.url}
          poster={poster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className={cn("absolute inset-0", scrim)} />
    </div>
  );
}
