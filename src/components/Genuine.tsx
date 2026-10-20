"use client";

import { useState } from "react";
import { CONTACT } from "@/data/content";
import { GENUINE_CHECKS } from "@/data/consumer";
import { Icon, Roll } from "./ui";

type Side = "front" | "back";

/** Pack images share one 642 x 546 frame so markers and zoom use the same percentages. */
const W = 642, H = 546;
/** Zoom lens shows the pack drawn 1000px wide (about 2x the main view), centred on the feature. */
const LENS_ART_W = 1000;

/**
 * PLACEHOLDER back of pack. Replace with a real photo of the back of the box.
 * The Halal mark is a marked placeholder: use AmLion's official JAKIM artwork, never a redrawn copy.
 */
function BackLabel() {
  const mono = "var(--font-dm-mono), monospace";
  const sans = "var(--font-jakarta), sans-serif";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" role="img" aria-label="Back of the pack: Halal mark, maker name and address, barcode">
      <defs>
        <linearGradient id="gv-band" x1="0" x2="1"><stop offset="0" stopColor="#1D4FA3" /><stop offset="1" stopColor="#2E7FE0" /></linearGradient>
        <filter id="gv-shadow" x="-10%" y="-10%" width="120%" height="125%"><feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#0A2240" floodOpacity=".22" /></filter>
      </defs>
      <g filter="url(#gv-shadow)">
        <rect x="118" y="26" width="406" height="494" rx="10" fill="#FFFFFF" />
      </g>
      <rect x="118" y="26" width="406" height="86" rx="10" fill="url(#gv-band)" />
      <rect x="118" y="96" width="406" height="16" fill="url(#gv-band)" />
      <text x="146" y="76" fontFamily={sans} fontWeight="800" fontStyle="italic" fontSize="34" fill="#FFFFFF">Ziya</text>
      <text x="146" y="100" fontFamily={mono} fontSize="11" letterSpacing="1.6" fill="#DDEEFF">ENAMEL PROTECT TOOTHPASTE · 100 g</text>

      <text x="146" y="146" fontFamily={sans} fontWeight="700" fontSize="13" fill="#0A2240">Directions</text>
      {[160, 172].map((y, i) => <rect key={y} x="146" y={y} width={i ? 220 : 330} height="6" rx="3" fill="#DCE4EE" />)}
      <text x="146" y="206" fontFamily={sans} fontWeight="700" fontSize="13" fill="#0A2240">Ingredients</text>
      {[220, 232, 244].map((y, i) => <rect key={y} x="146" y={y} width={[340, 320, 190][i]} height="6" rx="3" fill="#DCE4EE" />)}
      <text x="146" y="282" fontFamily={sans} fontWeight="700" fontSize="13" fill="#0A2240">Warnings</text>
      {[296, 308].map((y, i) => <rect key={y} x="146" y={y} width={i ? 160 : 300} height="6" rx="3" fill="#DCE4EE" />)}

      <line x1="146" y1="340" x2="496" y2="340" stroke="#E3E8EF" />

      {/* Halal mark placeholder */}
      <circle cx="193" cy="404" r="44" fill="#F1F8F4" stroke="#12805C" strokeWidth="2" strokeDasharray="5 4" />
      <text x="193" y="398" textAnchor="middle" fontFamily={sans} fontWeight="800" fontSize="16" fill="#12805C">HALAL</text>
      <text x="193" y="414" textAnchor="middle" fontFamily={mono} fontSize="8" fill="#12805C">OFFICIAL MARK</text>
      <text x="193" y="425" textAnchor="middle" fontFamily={mono} fontSize="8" fill="#12805C">GOES HERE</text>

      {/* Maker and address */}
      <text x="262" y="370" fontFamily={sans} fontWeight="700" fontSize="12" fill="#0A2240">Manufactured by:</text>
      <text x="262" y="388" fontFamily={sans} fontWeight="600" fontSize="12" fill="#0A2240">{CONTACT.entities[0]}</text>
      {CONTACT.address.map((l, i) => (
        <text key={l} x="262" y={404 + i * 14} fontFamily={sans} fontSize="10.5" fill="#3A4859">{l.replace(/,$/, "")}</text>
      ))}
      <text x="262" y="470" fontFamily={sans} fontWeight="800" fontSize="12" fill="#1D4FA3">MADE IN MALAYSIA</text>

      {/* Barcode and batch */}
      <g transform="translate(146 474)">
        {Array.from({ length: 34 }, (_, i) => (
          <rect key={i} x={i * 3.4} y="0" width={i % 3 === 0 ? 2 : 1} height="30" fill="#0F1C2E" />
        ))}
      </g>
      <text x="380" y="490" fontFamily={mono} fontSize="9" fill="#6B7787">BATCH  ______</text>
      <text x="380" y="504" fontFamily={mono} fontSize="9" fill="#6B7787">EXP    ______</text>
    </svg>
  );
}

function Art({ side }: { side: Side }) {
  return side === "front"
    ? <img src="/products/ziya-enamel-protect-toothpaste.webp" width={W} height={H} alt="Front of a Ziya Enamel Protect Toothpaste pack and box" draggable={false} />
    : <BackLabel />;
}

/** Is it genuine? Real pack views with markers on each feature, a zoom lens, and a linked checklist. */
export function Genuine() {
  const [active, setActive] = useState(0);
  const [side, setSide] = useState<Side>(GENUINE_CHECKS[0].side);
  const check = GENUINE_CHECKS[active];

  const pick = (i: number) => {
    setActive(i);
    setSide(GENUINE_CHECKS[i].side);
  };

  return (
    <section className="block" id="genuine">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "15em" }}>How to spot a genuine <span className="soft">AmLion pack</span></h2>
          <p className="lede center">Four quick checks before you buy. Tap a check to see exactly where to look on the pack.</p>
        </div>

        <div className="genuine">
          <div className="gv reveal">
            <div className="gv-toggle" role="tablist" aria-label="Pack side">
              {(["front", "back"] as Side[]).map((s) => (
                <button key={s} role="tab" aria-selected={side === s} className={side === s ? "on" : ""} onClick={() => setSide(s)}>
                  {s === "front" ? "Front" : "Back"}
                </button>
              ))}
            </div>

            <div className="gv-stage">
              <div className="gv-art"><Art side={side} /></div>
              {GENUINE_CHECKS.map((c, i) => c.side === side && (
                <button
                  key={c.title}
                  className={`gv-pin${active === i ? " on" : ""}`}
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  onClick={() => pick(i)}
                  aria-label={`Check ${i + 1}: ${c.title}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {check.side === side && (
              <div className={`gv-lens${check.y < 50 ? " low" : ""}`} aria-hidden="true">
                <div
                  className="gv-lens-art"
                  style={{
                    width: LENS_ART_W,
                    height: LENS_ART_W * (H / W),
                    left: `calc(50% - ${((check.zx ?? check.x) / 100) * LENS_ART_W}px)`,
                    top: `calc(50% - ${((check.zy ?? check.y) / 100) * LENS_ART_W * (H / W)}px)`,
                  }}
                >
                  <Art side={side} />
                </div>
                <span className="gv-lens-label">{active + 1}. {check.title}</span>
              </div>
            )}

            <p className="gv-note">Placeholder pack artwork. Replace with real front and back photos and the official Halal mark.</p>
          </div>

          <ol className="checks reveal">
            {GENUINE_CHECKS.map((c, i) => (
              <li key={c.title} className={`check${active === i ? " on" : ""}`}>
                <button className="check-btn" onClick={() => pick(i)} aria-pressed={active === i}>
                  <span className="num">{i + 1}</span>
                  <span className="check-txt"><span className="check-title">{c.title}</span><span className="check-text">{c.text}</span></span>
                  <span className="side-tag">{c.side === "front" ? "Front" : "Back"}</span>
                </button>
              </li>
            ))}
            <li className="check-cta">
              <p>Not sure about a pack? Send us a question and we will help.</p>
              <a className="btn btn-dark" href="#contact"><Roll>Ask AmLion</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
