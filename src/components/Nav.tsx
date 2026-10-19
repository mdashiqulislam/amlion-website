"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Icon, Logo, Roll } from "./ui";

/** Navigation inside the hero frame, with the mobile menu. */
export function HeroNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hero2-nav" aria-label="Main">
        <a className="hero2-logo" href="#top" aria-label="AML Consumer Care Ltd home">
          <Image src="/hero/logo.svg" width={79} height={41} alt="AML Consumer Care Ltd" priority />
        </a>
        <div className="hero2-links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}><Roll>{l.label}</Roll></a>
          ))}
        </div>
        <a className="hero2-quote" href="#contact"><Roll>Request a quote</Roll></a>
        <button className="burger" aria-label="Open menu" aria-expanded={open} aria-controls="mmenu" onClick={() => setOpen((o) => !o)}>
          <svg width="22" height="22" viewBox="0 0 22 22"><path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      </nav>
      <div className="mobile-menu" id="mmenu" hidden={!open} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
        {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a className="btn btn-lime" href="#contact" style={{ paddingRight: 22 }}>Request a quote</a>
      </div>
    </>
  );
}

/** Pill nav that slides in once the hero has scrolled away. */
export function FloatNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { rootMargin: "-60% 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`float-nav${show ? " show" : ""}`} aria-label="Quick">
      <Logo />
      <div className="navlinks">
        {NAV_LINKS.map((l) => (
          <a key={l.href} className="navlink" href={l.href}><Roll>{l.label}</Roll></a>
        ))}
      </div>
      <a className="btn btn-lime" href="#where-to-buy" style={{ paddingRight: 18 }}><Roll>Find a shop</Roll></a>
    </nav>
  );
}

export function WhatsApp() {
  return (
    <a className="wa" href="#contact" aria-label="Ask us on WhatsApp">
      <i><Icon id="i-wa" size={20} /></i>
      <span>Ask us</span>
    </a>
  );
}
