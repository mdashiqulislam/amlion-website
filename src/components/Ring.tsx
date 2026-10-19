"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { CARDS } from "./RingCards";

/**
 * Rotating 3D ring of product cards. Drifts on its own, slows to a stop on
 * hover, and can be dragged on both mouse and touch.
 */
export function Ring() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = cardRefs.current.filter((c): c is HTMLElement => !!c);
    const N = cards.length;
    const step = 360 / N;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const auto = reduce ? 0 : -0.0065; // degrees per ms
    let base = 0, vel = 0, dragging = false, hovering = false, lastX = 0, lastT = 0, R = 600, raf = 0;

    const measure = () => { R = Math.max(300, Math.min(stage.clientWidth * 0.43, 660)); };
    const render = () => {
      for (let k = 0; k < N; k++) {
        const a = ((((base + k * step) % 360) + 540) % 360) - 180;
        const abs = Math.abs(a);
        const el = cards[k];
        if (abs > 72) { el.style.visibility = "hidden"; continue; }
        el.style.visibility = "visible";
        const rad = (a * Math.PI) / 180;
        const x = R * Math.sin(rad);
        const z = R * (0.8 - Math.cos(rad));
        const y = (z + R * 0.2) * 0.16;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) rotateY(${(-a).toFixed(2)}deg)`;
        el.style.opacity = String(abs < 52 ? 1 : Math.max(0, 1 - (abs - 52) / 20));
      }
    };
    let prev = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(48, now - prev);
      prev = now;
      if (!dragging) {
        vel += ((hovering ? 0 : auto) - vel) * Math.min(1, dt / 420);
        base += vel * dt;
      }
      render();
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") hovering = true; };
    const onLeave = () => { hovering = false; };
    const onDown = (e: PointerEvent) => {
      dragging = true; lastX = e.clientX; lastT = performance.now(); vel = 0;
      stage.setPointerCapture(e.pointerId);
      stage.classList.add("dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const now = performance.now();
      const d = (e.clientX - lastX) * 0.13;
      base += d;
      vel = d / Math.max(1, now - lastT);
      lastX = e.clientX; lastT = now;
    };
    const onUp = () => { dragging = false; stage.classList.remove("dragging"); };

    measure();
    render();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", measure);
    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div className="ring-stage fade-up" style={{ "--d": ".5s" } as CSSProperties} ref={stageRef} aria-label="AmLion highlights, drag to explore">
      <div className="ring">
        {CARDS.map((c, i) => (
          <article key={i} className={`rc${c.className ? ` ${c.className}` : ""}`} style={c.style} ref={(el) => { cardRefs.current[i] = el; }}>
            {c.node}
          </article>
        ))}
      </div>
    </div>
  );
}
