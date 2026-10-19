"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/data/consumer";
import type { Product } from "@/data/consumer";
import { Icon, Label, Roll, Sym } from "./ui";

const GROUPS = ["All", "Oral care", "Hair care", "Body & skin"] as const;

function Drawer({ product, onClose }: { product: Product; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="drawer-wrap" onClick={onClose}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label={`${product.name} specifications`} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="drawer-x" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
        <div className="drawer-art">
          <Sym id={product.art.sym} view={product.art.view} css={product.art.css} />
        </div>
        <Label>{product.group}</Label>
        <h3>{product.name}</h3>
        <p className="tagline">{product.tagline}</p>
        <dl className="specs-list">
          {product.specs.map((s) => (
            <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
          ))}
        </dl>
        <p className="sample-note">Sample details. The final product information will come from AmLion.</p>
        <a className="btn btn-dark" href="#where-to-buy" onClick={onClose}>
          <Roll>Find it in a shop</Roll><span className="arrow"><Icon id="i-arrow" /></span>
        </a>
      </aside>
    </div>
  );
}

/** Our products: browse by group and open specifications. No buying on the site. */
export function Products() {
  const [group, setGroup] = useState<(typeof GROUPS)[number]>("All");
  const [open, setOpen] = useState<Product | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const shown = PRODUCTS.filter((p) => group === "All" || p.group === group);

  return (
    <section className="block" id="products">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>Our products</Label>
          <h2 className="h2" style={{ maxWidth: "14em" }}>Care for every day, <span className="soft">for the whole family</span></h2>
          <p className="lede center">See what is in each pack before you shop. AmLion is sold in cosmetic shops and super shops, not on this website.</p>
        </div>

        <div className="tabs reveal" role="tablist" aria-label="Product groups">
          {GROUPS.map((g) => (
            <button key={g} role="tab" aria-selected={group === g} className={group === g ? "on" : ""} onClick={() => setGroup(g)}>{g}</button>
          ))}
        </div>

        <div className="pgrid">
          {shown.map((p) => (
            <article key={p.id} className="pcard">
              <span className="sample-tag">Sample</span>
              <div className="pcard-art"><Sym id={p.art.sym} view={p.art.view} css={p.art.css} /></div>
              <div className="pcard-body">
                <span className="tag">{p.group}</span>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <button className="btn btn-line" onClick={() => setOpen(p)}><Roll>View specifications</Roll></button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {open && <Drawer product={open} onClose={close} />}
    </section>
  );
}
