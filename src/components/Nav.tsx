"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Icon, Roll } from "./ui";

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
            <Link key={l.href} href={l.href}><Roll>{l.label}</Roll></Link>
          ))}
        </div>
        <a className="hero2-quote" href="#contact"><Roll>Request a quote</Roll></a>
        <button className="burger" aria-label="Open menu" aria-expanded={open} aria-controls="mmenu" onClick={() => setOpen((o) => !o)}>
          <svg width="22" height="22" viewBox="0 0 22 22"><path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      </nav>
      <div className="mobile-menu" id="mmenu" hidden={!open} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
        {NAV_LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        <a className="btn btn-lime" href="#contact" style={{ paddingRight: 22 }}>Request a quote</a>
      </div>
    </>
  );
}

/**
 * Pill nav, identical on every page. On the landing page it slides in once the hero has scrolled away;
 * on inner pages (`always`) it is visible from the start, with a menu button on small screens.
 */
export function FloatNav({ always = false }: { always?: boolean }) {
  const [show, setShow] = useState(always);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (always) return;
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { rootMargin: "-60% 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, [always]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className={`float-nav${show ? " show" : ""}${always ? " always" : ""}`} aria-label="Quick">
        <Link className="float-logo" href={always ? "/" : "#top"} aria-label="AML Consumer Care Ltd home">
          <Image src="/hero/logo-dark.svg" width={79} height={41} alt="AML Consumer Care Ltd" />
        </Link>
        <div className="navlinks">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className="navlink" href={l.href}><Roll>{l.label}</Roll></Link>
          ))}
        </div>
        <Link className="btn btn-lime" href="/#contact" style={{ paddingRight: 18 }}><Roll>Request a quote</Roll></Link>
        {always && (
          <button className="burger float-burger" aria-label="Menu" aria-expanded={open} aria-controls="fmenu" onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        )}
      </nav>
      {always && (
        <div className="mobile-menu float-menu" id="fmenu" hidden={!open} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
          {NAV_LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </div>
      )}
    </>
  );
}

export function WhatsApp() {
  return (
    <a className="wa" href="/#contact" aria-label="Ask us on WhatsApp">
      <i><Icon id="i-wa" size={20} /></i>
      <span>Ask us</span>
    </a>
  );
}
