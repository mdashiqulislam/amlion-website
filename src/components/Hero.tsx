"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, Roll } from "./ui";

/** Slides of the hero carousel. The Figma frame "Version #2" shows five dots and repeats the first slide as a placeholder, so the other four copy it until their content is supplied. */
const FIRST = { image: "/hero/slide-1.webp", alt: "A technician in a hair net and safety glasses inspects a green liquid soap bottle on a production line" };
const SLIDES = [FIRST, FIRST, FIRST, FIRST, FIRST];
const AUTOPLAY_MS = 6500;

/**
 * Hero from the Figma frame "Version #2" (1440 x 731): a swipeable carousel of 1352 x 572 cards, the next card peeking in
 * from the right, and a pill of dots below. Autoplays, and pauses on hover, focus, touch and for reduced motion.
 */
export function Hero() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slideTo = useCallback((i: number) => {
    const t = track.current;
    const el = t?.children[i] as HTMLElement | undefined;
    if (!t || !el) return;
    t.scrollTo({ left: el.offsetLeft - t.offsetLeft - parseFloat(getComputedStyle(t).paddingLeft), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, []);

  // Keep the dots in step with swipes, drags and arrow keys by reading the scroll position.
  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const onScroll = () => {
      const first = t.children[0] as HTMLElement;
      const step = (t.children[1] as HTMLElement).offsetLeft - first.offsetLeft;
      setActive(Math.min(SLIDES.length - 1, Math.max(0, Math.round(t.scrollLeft / step))));
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    return () => t.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse drag. Touch already swipes natively; a mouse cannot scroll an overflow box by dragging, so do it by hand.
  const drag = useRef({ down: false, moved: false, startX: 0, startLeft: 0 });
  const settle = useRef<ReturnType<typeof setTimeout>>(undefined);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const t = track.current;
    if (!t || e.pointerType !== "mouse" || e.button !== 0) return;
    clearTimeout(settle.current);
    drag.current = { down: true, moved: false, startX: e.clientX, startLeft: t.scrollLeft };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const t = track.current;
    const d = drag.current;
    if (!t || !d.down) return;
    const dx = e.clientX - d.startX;
    if (!d.moved) {
      if (Math.abs(dx) < 5) return; // a plain click on the button must still work
      d.moved = true;
      t.dataset.drag = "grabbing";
      t.setPointerCapture(e.pointerId);
    }
    t.scrollLeft = d.startLeft - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const t = track.current;
    const d = drag.current;
    if (!t || !d.down) return;
    d.down = false;
    if (!d.moved) return;
    if (t.hasPointerCapture(e.pointerId)) t.releasePointerCapture(e.pointerId);
    // A drag of more than a sixth of a card moves one card in that direction; anything less springs back.
    const step = (t.children[1] as HTMLElement).offsetLeft - (t.children[0] as HTMLElement).offsetLeft;
    const from = Math.round(d.startLeft / step);
    const dx = e.clientX - d.startX;
    const to = Math.abs(dx) > step / 6 ? from + (dx < 0 ? 1 : -1) : from;
    t.dataset.drag = "settle";
    slideTo(Math.min(SLIDES.length - 1, Math.max(0, to)));
    settle.current = setTimeout(() => delete t.dataset.drag, 700);
  };

  // The click that ends a drag must not follow the "Explore Products" link.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  useEffect(() => () => clearTimeout(settle.current), []);

  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!document.hidden) slideTo((active + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, slideTo]);

  return (
    <header
      className="hero3"
      id="top"
      aria-roledescription="carousel"
      aria-label="About AML"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        className="hero3-track"
        ref={track}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {SLIDES.map((s, i) => {
          const Title = i === 0 ? "h1" : "h2";
          return (
            <article key={i} className="hero3-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${SLIDES.length}`}>
              <Image className="hero3-img" src={s.image} alt={s.alt} fill priority={i === 0} sizes="(max-width: 720px) 100vw, 1352px" />
              <div className="hero3-copy">
                <Title className="hero3-title">
                  AML IS A<br />
                  SISTER CONCERN<br />
                  OF <span>AMLION</span>
                </Title>
                <p className="hero3-sub">
                  AML brings oral and personal care manufacturing experience to businesses across <strong>30+ countries.</strong>
                </p>
                <a className="hero3-btn" href="#products" tabIndex={i === active ? 0 : -1}>
                  <Roll>Explore Products</Roll>
                  <span className="arrow"><Icon id="i-arrow" /></span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hero3-dots" role="group" aria-label="Choose slide">
        {SLIDES.map((_, i) => (
          <button key={i} type="button" className={i === active ? "on" : ""} aria-label={`Show slide ${i + 1}`} aria-current={i === active} onClick={() => slideTo(i)} />
        ))}
      </div>
    </header>
  );
}
