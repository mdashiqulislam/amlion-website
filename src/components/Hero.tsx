"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, Roll } from "./ui";

/**
 * Slides of the hero carousel, in the client's order (Feedback/Banner/Directions.docx): the main product line-up banner
 * carries the headline and button; banners 1 to 7 already have their copy and branding in the artwork, so they show as is.
 * `bg` is the photo's own tone: it fills the text area on phones, where the photo becomes a strip below the text.
 */
/** `cap` is a short caption shown only on phones, where the banner artwork is too small to read. */
type Slide = { image: string; alt: string; bg: string; copy?: boolean; cap?: { brand: string; title: string; line: string } };
const SLIDES: Slide[] = [
  { image: "/hero/banner-main.webp", bg: "#0E4C8F", copy: true, alt: "The full ZIYA and SYAWO range, from body mists and body washes to petroleum jelly, olive oil, toothpaste and oral spray, lined up on a stone ledge under a blue sky" },
  { image: "/hero/banner-1.webp", bg: "#7C84A8", cap: { brand: "ZIYA · Toothpaste", title: "Whitening+ Advanced", line: "For a brighter, whiter smile." }, alt: "ZIYA Whitening+ Advanced toothpaste: a brighter, whiter smile. Halal certified, made in Malaysia" },
  { image: "/hero/banner-2.webp", bg: "#CBA09C", cap: { brand: "ZIYA · Toothpaste", title: "Sensitive+ Care", line: "Gentle care for sensitive teeth." }, alt: "ZIYA Sensitive+ Care toothpaste: perfect care for sensitive teeth. Halal certified, made in Malaysia" },
  { image: "/hero/banner-3.webp", bg: "#CDE3E7", cap: { brand: "ZIYA · Toothpaste", title: "Everyday family care", line: "Enamel Repair, Radiant Fresh and Natural Clean." }, alt: "ZIYA regular toothpaste for everyday family care, in Enamel Repair, Radiant Fresh and Natural Clean. Halal certified, made in Malaysia" },
  { image: "/hero/banner-4.webp", bg: "#DCE0D5", cap: { brand: "ZIYA · Oral spray", title: "ZIYA Oral Spray", line: "Cooling Menthol, Honey Fresh and Kids." }, alt: "ZIYA Oral Spray in Cooling Menthol, Honey Fresh and Kids: a fresh feeling for your mouth. Halal certified, made in Malaysia" },
  { image: "/hero/banner-5.webp", bg: "#E2D1BC", cap: { brand: "ZIYA · Olive oil", title: "Premium Spanish Olive Oil", line: "Softness for face, body and hair." }, alt: "ZIYA Premium Spanish Olive Oil for face, body and hair: softness in every drop. Halal certified, made in Malaysia" },
  { image: "/hero/banner-6.webp", bg: "#E8DDD5", cap: { brand: "SYAWO · Body wash", title: "SYAWO Body Wash", line: "Cleanse. Nourish. Refresh." }, alt: "SYAWO Body Wash in four Korean-inspired scents: cleanse, nourish, refresh. Halal certified, made in Malaysia" },
  { image: "/hero/banner-7.webp", bg: "#E3C8B6", cap: { brand: "SYAWO · Body mist", title: "SYAWO Body Mist", line: "New vibes, different personality." }, alt: "SYAWO Body Mist in four scents: new vibes, different personality. Halal certified, made in Malaysia" },
];
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
        {SLIDES.map((s, i) => (
          <article
            key={s.image}
            className={s.copy ? "hero3-slide hero3-slide--copy" : "hero3-slide hero3-slide--banner"}
            style={{ "--slide-bg": s.bg } as React.CSSProperties}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
          >
            {/* Banners keep their whole artwork (their copy is part of it): a blurred copy fills any space around it. */}
            {!s.copy && <Image className="hero3-backdrop" src={s.image} alt="" aria-hidden="true" fill sizes="(max-width: 720px) 100vw, 1352px" />}
            <Image className="hero3-img" src={s.image} alt={s.alt} fill priority={i === 0} sizes="(max-width: 720px) 100vw, 1352px" />
            {s.copy && (
              <div className="hero3-copy">
                <h1 className="hero3-title">
                  AML IS THE<br />
                  BANGLADESH PART<br />
                  OF <span>AMLION,</span><br />
                  <span>MALAYSIA.</span>
                </h1>
                <p className="hero3-sub">
                  AML brings Amlion&rsquo;s <strong>32+ years</strong> of oral and personal care expertise to families across Bangladesh.
                </p>
                <a className="hero3-btn" href="#products" tabIndex={i === active ? 0 : -1}>
                  <Roll>Explore Products</Roll>
                  <span className="arrow"><Icon id="i-arrow" /></span>
                </a>
              </div>
            )}
            {s.cap && (
              <div className="hero3-cap">
                <p className="hero3-cap-brand">{s.cap.brand}</p>
                <p className="hero3-cap-title">{s.cap.title}</p>
                <p className="hero3-cap-line">{s.cap.line}</p>
                <a className="hero3-cap-link" href="/products" tabIndex={i === active ? 0 : -1}>
                  See products <Icon id="i-arrow" size={14} />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="hero3-dots" role="group" aria-label="Choose slide">
        {SLIDES.map((_, i) => (
          <button key={i} type="button" className={i === active ? "on" : ""} aria-label={`Show slide ${i + 1}`} aria-current={i === active} onClick={() => slideTo(i)} />
        ))}
      </div>
    </header>
  );
}
