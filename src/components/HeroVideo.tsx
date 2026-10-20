"use client";

import { useEffect, useRef } from "react";

/**
 * Full-card hero background video. Muted, looping and inline so it autoplays everywhere.
 * The poster is the video's first frame, so there is no flash while it loads.
 * Shows only the poster for visitors who prefer reduced motion or have data saving on.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || conn?.saveData) return;

    v.src = matchMedia("(max-width: 720px)").matches ? "/hero/hero-720.mp4" : "/hero/hero.mp4";
    v.muted = true; // some browsers ignore the muted attribute until it is set from script
    v.play().catch(() => { /* autoplay blocked: the poster stays visible */ });
  }, []);

  return (
    <video
      ref={ref}
      className="hero2-bg"
      poster="/hero/poster.jpg"
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Cosmetic and personal care products on a stone podium among white flowers and olives"
    />
  );
}
