import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import lotusFront from "@/assets/lotus-front.png";
import lotusReveal from "@/assets/lotus-reveal.png";

type TrailPoint = { x: number; y: number; r: number; a: number; seed: number };

/**
 * Morph-reveal lotus: the gold "reveal" lotus is painted only inside an
 * organic, noisy, decaying blob trail that follows the pointer — so moving
 * across the flower uncovers the gold standard at its core, then lets it
 * settle back to green.
 *
 * Implementation note: a single <canvas> overlay with
 * globalCompositeOperation = "source-in" is used instead of the
 * mask-image/toDataURL technique — same visual result, no per-frame
 * data-URL encoding, so it stays smooth at large viewport sizes.
 */
export function LotusMorphReveal({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    const img = new Image();
    img.src = lotusReveal;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const trail: TrailPoint[] = [];
    const pointer = { x: -1, y: -1, active: false };
    let headRadius = 0;
    let targetRadius = 0;
    let raf = 0;
    let t = 0;

    const push = (x: number, y: number) => {
      trail.push({ x, y, r: headRadius, a: 1, seed: Math.random() * 100 });
      if (trail.length > 60) trail.shift();
    };

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      targetRadius = 140;
    };
    const onLeave = () => {
      pointer.active = false;
      targetRadius = 0;
    };

    // Ambient auto-trail on touch devices (no hover trigger available).
    let autoT = Math.random() * 1000;
    const ambient = () => {
      autoT += 0.006;
      const cx = width / 2;
      const cy = height / 2;
      pointer.x = cx + Math.sin(autoT * 1.1) * width * 0.26;
      pointer.y = cy + Math.cos(autoT * 0.83) * height * 0.24;
      pointer.active = true;
      targetRadius = Math.min(120, width * 0.28);
    };

    const blob = (p: TrailPoint) => {
      const steps = 24;
      const pts: Array<[number, number]> = [];
      for (let i = 0; i < steps; i++) {
        const angle = (i / steps) * Math.PI * 2;
        const noise =
          Math.sin(angle * 3 + t * 1.4 + p.seed) * 0.45 +
          Math.sin(angle * 5 - t * 0.9 + p.seed * 1.7) * 0.22 +
          Math.cos(angle * 2 + t * 0.6 + p.seed * 0.4) * 0.18;
        const r = p.r * (1 + noise * 0.22);
        pts.push([p.x + Math.cos(angle) * r, p.y + Math.sin(angle) * r]);
      }
      ctx.beginPath();
      const at = (i: number) => pts[((i % pts.length) + pts.length) % pts.length]!;
      const midX = (i: number) => (at(i)[0] + at(i + 1)[0]) / 2;
      const midY = (i: number) => (at(i)[1] + at(i + 1)[1]) / 2;
      ctx.moveTo(midX(-1), midY(-1));
      for (let i = 0; i < pts.length; i++) {
        ctx.quadraticCurveTo(at(i)[0], at(i)[1], midX(i), midY(i));
      }
      ctx.closePath();
      ctx.globalAlpha = p.a * 0.9;
      ctx.fill();
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      t += 0.012;

      if (isTouch) ambient();

      headRadius += (targetRadius - headRadius) * 0.06;
      if (pointer.active && headRadius > 4) push(pointer.x, pointer.y);

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i]!;
        p.a *= 0.955;
        p.r *= 0.995;
        if (p.a < 0.04) trail.splice(i, 1);
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      if (!trail.length) return;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#000";
      for (const p of trail) blob(p);

      if (img.complete && img.naturalWidth) {
        ctx.globalCompositeOperation = "source-in";
        ctx.globalAlpha = 1;
        ctx.drawImage(img, 0, 0, width, height);
        ctx.globalCompositeOperation = "source-over";
      }
      ctx.globalAlpha = 1;
    };

    if (!reduced) {
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerenter", onMove);
      wrap.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerenter", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn("relative isolate aspect-square w-full touch-none select-none", className)}
    >
      <img
        src={lotusFront}
        alt="Illustrated six-petal Amoda lotus in deep green with a gold centre"
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
