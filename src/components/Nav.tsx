"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";
import { Icon, Roll } from "./ui";

/**
 * The one top navigation, identical on every page: a flat white bar fixed to the top (Figma "Version #2"), with a menu button on small screens.
 * The link for the section you are in is marked with aria-current.
 */
export function FloatNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar's bottom stroke shows only once the page has scrolled, so it sits flush with the hero at the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => (href.startsWith("/#") ? undefined : pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined);

  return (
    <>
      <nav className="float-nav" aria-label="Main" data-scrolled={scrolled}>
        <Link className="float-logo" href="/" aria-label="AML Consumer Care Ltd home">
          <Image src="/hero/logo-nav.svg" width={106} height={41} alt="AML Consumer Care Ltd" priority />
        </Link>
        <div className="navlinks">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className="navlink" href={l.href} aria-current={current(l.href)}><Roll>{l.label}</Roll></Link>
          ))}
        </div>
        <div className="float-actions">
          <Link className="btn btn-lime" href="/#contact"><Roll>Request a quote</Roll></Link>
          <button className="burger float-burger" aria-label="Menu" aria-expanded={open} aria-controls="fmenu" onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>
      <div className="mobile-menu float-menu" id="fmenu" hidden={!open} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
        {NAV_LINKS.map((l) => <Link key={l.href} href={l.href} aria-current={current(l.href)}>{l.label}</Link>)}
      </div>
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
