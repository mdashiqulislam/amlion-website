"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/data/consumer";
import type { Product } from "@/data/consumer";
import { Icon, Label, Roll } from "./ui";

/** The eight products shown in the landing page scroller, mixing every category. */
const FEATURED_IDS = [
  "ziya-enamel-protect-toothpaste",
  "ziya-radiant-fresh-toothpaste",
  "syawo-body-wash-rich-moisturising",
  "ziya-olive-oil",
  "syawo-perfume-mist-cologne-summer",
  "ziya-sensitive-instant-relief-toothpaste",
  "ziya-petroleum-jelly-coco-butter",
  "syawo-shower-rich-whitening",
];
const FEATURED = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);

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
        <p className="sample-note">Details are read from the pack. Ingredients and directions will come from AML.</p>
      </aside>
    </div>
  );
}

function Card({ p, onOpen }: { p: Product; onOpen: (p: Product) => void }) {
  return (
    <button className="pc" onClick={() => onOpen(p)} aria-label={`${p.name}, view details`}>
      <span className="pc-img">
        <Image src={`/products/${p.image}.webp`} width={321} height={273} alt="" sizes="321px" />
      </span>
      <span className="pc-body">
        <span className="pc-tag">{p.category}</span>
        <span className="pc-name">{p.name}</span>
      </span>
    </button>
  );
}

/** Landing page: left-aligned heading, a See all button, and a row of eight product cards that scrolls sideways. */
export function Products() {
  const [open, setOpen] = useState<Product | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="block" id="products" aria-labelledby="products-h">
      <div className="wrap">
        <div className="pr-head">
          <div>
            <h2 className="h2" id="products-h" style={{ maxWidth: "14em" }}>Care for every day, <span className="soft">for the whole family</span></h2>
            <p className="lede">See what is in each pack before you shop. AML is sold in cosmetic shops and super shops, not on this website.</p>
          </div>
          <Link className="btn btn-dark" href="/products"><Roll>See all</Roll><span className="arrow"><Icon id="i-arrow" /></span></Link>
        </div>

        <ul className="pscroll" aria-label="Featured products, scroll sideways for more" tabIndex={-1}>
          {FEATURED.map((p) => (
            <li key={p.id}><Card p={p} onOpen={setOpen} /></li>
          ))}
        </ul>
      </div>
      {open && <Drawer product={open} onClose={close} />}
    </section>
  );
}

/** Products page: category tabs, three cards per row, click a card for details. No buying on the site. */
export function ProductCatalog() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [open, setOpen] = useState<Product | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const shown = PRODUCTS.filter((p) => tab === "All" || p.category === tab);

  // Open a category straight from a link such as /products?category=Oral%20Care.
  useEffect(() => {
    const c = new URLSearchParams(location.search).get("category");
    const hit = CATEGORIES.find((x) => x === c);
    if (hit) setTab(hit);
  }, []);

  return (
    <section className="catalog" aria-labelledby="catalog-h">
      <div className="wrap">
        <header className="catalog-head">
          <h1 className="h2" id="catalog-h">Our <span className="soft">products</span></h1>
          <p className="lede">See what is in each pack before you shop. AML is sold in cosmetic shops and super shops, not on this website.</p>
        </header>

        <div className="tabs" role="tablist" aria-label="Product categories">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <p className="sr" role="status" aria-live="polite">{shown.length} {shown.length === 1 ? "product" : "products"} shown</p>

        <div className="pgrid">
          {shown.map((p) => <Card key={p.id} p={p} onOpen={setOpen} />)}
        </div>
      </div>
      {open && <Drawer product={open} onClose={close} />}
    </section>
  );
}
