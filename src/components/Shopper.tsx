"use client";

import { useId, useState } from "react";
import { BENEFITS, DIVISIONS, FAQS, GENUINE_CHECKS, STOCKISTS } from "@/data/consumer";
import type { Division } from "@/data/consumer";
import { Icon, Label, Roll, Seal, Sym } from "./ui";

/** Is it genuine? What a real AmLion pack looks like. */
export function Genuine() {
  return (
    <section className="block" id="genuine">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>Is it genuine?</Label>
          <h2 className="h2" style={{ maxWidth: "15em" }}>How to spot a genuine <span className="soft">AmLion pack</span></h2>
          <p className="lede center">Four quick checks before you buy, so you know what you are holding was made by AmLion in Malaysia.</p>
        </div>

        <div className="genuine">
          <div className="pack-tile reveal" aria-hidden="true">
            <Sym id="i-tube" css="--t1:#1D6BDC;--t2:#fff;--t3:#EAF2FB" className="pack-art" />
            <span className="callout-dot d1">1</span>
            <span className="callout-dot d2">2</span>
            <span className="callout-dot d3">3</span>
            <span className="callout-dot d4">4</span>
            <Seal code="HALAL" sub="JAKIM" color="#12805C" label="" className="pack-seal" />
          </div>

          <ol className="checks">
            {GENUINE_CHECKS.map((c, i) => (
              <li key={c.title} className="check reveal">
                <span className="num">{i + 1}</span>
                <div><h3>{c.title}</h3><p>{c.text}</p></div>
                <span className="tick"><Icon id="i-check" size={14} /></span>
              </li>
            ))}
            <li className="check-cta reveal">
              <p>Not sure about a pack? Send us a question and we will help.</p>
              <a className="btn btn-dark" href="#contact"><Roll>Ask AmLion</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Why choose AmLion: four reasons a shopper can repeat. */
export function Why() {
  return (
    <section className="block" id="why">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>Why choose AmLion</Label>
          <h2 className="h2" style={{ maxWidth: "14em" }}>Four reasons to pick it <span className="soft">off the shelf</span></h2>
        </div>
        <div className="why">
          {BENEFITS.map((b, i) => (
            <article key={b.title} className="why-card reveal" style={{ background: b.color, color: b.ink }}>
              <span className="why-n">{i + 1}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Where to buy: division picker with an honest empty state until real stockists are added. */
export function WhereToBuy() {
  const selectId = useId();
  const [division, setDivision] = useState<Division | "">("");
  const shops = division ? STOCKISTS[division] ?? [] : [];

  return (
    <section className="block" id="where-to-buy">
      <div className="wrap panel wtb reveal">
        <div className="wtb-copy">
          <Label>Where to buy</Label>
          <h2 className="h2">Find AmLion <span className="soft">near you</span></h2>
          <p className="lede">AmLion doesn&apos;t run its own shops. You will find our products in cosmetic shops and super shops. Pick your division to see where.</p>

          <div className="field">
            <label htmlFor={selectId}>Your division</label>
            <select id={selectId} value={division} onChange={(e) => setDivision(e.target.value as Division | "")}>
              <option value="">Choose your division</option>
              {DIVISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="wtb-result" aria-live="polite">
            {!division && <p>Choose a division to see shops that stock AmLion.</p>}
            {division && shops.length === 0 && (
              <>
                <b>Shop list for {division} is coming soon</b>
                <p>AmLion is just arriving on Bangladesh shelves. Ask for AmLion at your nearest cosmetic shop or super shop, or send us a question and we will point you to the closest one.</p>
              </>
            )}
            {shops.length > 0 && (
              <ul className="shop-list">
                {shops.map((s) => (
                  <li key={s.name + s.area}>
                    <span className="pin-ico"><Icon id="i-arrow" size={14} /></span>
                    <div><b>{s.name}</b><span>{s.type} · {s.area}</span></div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="wtb-art" aria-hidden="true">
          <div className="shelf-row">
            <Sym id="i-tube" css="--t1:#1D6BDC" style={{ height: "74%" }} />
            <Sym id="i-rinse" css="--b1:#13A6B8;--b2:#F4FBFC" style={{ height: "82%" }} />
            <Sym id="i-pump" css="--b1:#8E7CF0;--b2:#2A2346" style={{ height: "88%" }} />
            <Sym id="i-bottle" css="--b1:#F06B9C" style={{ height: "80%" }} />
            <Sym id="i-tube" css="--t1:#F5A524;--t3:#FFF1D6" style={{ height: "70%" }} />
          </div>
          <div className="plank" />
          <div className="shelf-row low">
            <Sym id="i-bottle" css="--b1:#12805C" style={{ height: "78%" }} />
            <Sym id="i-jar" view="0 0 120 100" css="--b1:#FFD2DE;--b2:#F05A7E" style={{ height: "40%" }} />
            <Sym id="i-tube" css="--t1:#F05A7E;--t3:#FFE3EA" style={{ height: "74%" }} />
            <Sym id="i-pump" css="--b1:#1C9BD7;--b2:#0A2240" style={{ height: "84%" }} />
          </div>
          <div className="plank" />
          <span className="shelf-tag">Look for AmLion on the shelf</span>
        </div>
      </div>
    </section>
  );
}

/** FAQ: native details elements, so it works without JavaScript. */
export function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap faq-wrap">
        <div className="sec-head reveal">
          <Label>Questions</Label>
          <h2 className="h2">Before you buy</h2>
        </div>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item reveal">
              <summary>{f.q}<span className="plus" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
