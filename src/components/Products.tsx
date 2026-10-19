"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/data/consumer";
import type { Product } from "@/data/consumer";
import { Label } from "./ui";

const TABS = ["All", ...CATEGORIES] as const;

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
      <aside className="drawer" role="dialog" aria-modal="true" aria-label={`${product.name} details`} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="drawer-x" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
        <div className="drawer-art">
          <Image src={`/products/${product.image}.webp`} width={321} height={273} alt={product.name} />
        </div>
        <Label>{product.category}</Label>
        <h3>{product.name}</h3>
        <dl className="specs-list">
          <div><dt>Brand</dt><dd>{product.brand}</dd></div>
          <div><dt>Category</dt><dd>{product.category}</dd></div>
          <div><dt>Variant</dt><dd>{product.variant}</dd></div>
          <div><dt>Pack size</dt><dd>{product.size}</dd></div>
          {product.claims.length > 0 && (
            <div><dt>On the pack</dt><dd><ul className="claims">{product.claims.map((c) => <li key={c}>{c}</li>)}</ul></dd></div>
          )}
        </dl>
        <p className="sample-note">Details are read from the pack. Ingredients and directions will come from AmLion.</p>
      </aside>
    </div>
  );
}

/** Our products: five category tabs, three cards per row, click a card for details. No buying on the site. */
export function Products() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [open, setOpen] = useState<Product | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const shown = PRODUCTS.filter((p) => tab === "All" || p.category === tab);

  return (
    <section className="block" id="products">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>Our products</Label>
          <h2 className="h2" style={{ maxWidth: "14em" }}>Care for every day, <span className="soft">for the whole family</span></h2>
          <p className="lede center">See what is in each pack before you shop. AmLion is sold in cosmetic shops and super shops, not on this website.</p>
        </div>

        <div className="tabs reveal" role="tablist" aria-label="Product categories">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        <div className="pgrid">
          {shown.map((p) => (
            <button key={p.id} className="pc" onClick={() => setOpen(p)} aria-label={`${p.name}, view details`}>
              <span className="pc-img">
                <Image src={`/products/${p.image}.webp`} width={321} height={273} alt="" sizes="321px" />
              </span>
              <span className="pc-body">
                <span className="pc-tag">{p.category}</span>
                <span className="pc-name">{p.name}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {open && <Drawer product={open} onClose={close} />}
    </section>
  );
}
