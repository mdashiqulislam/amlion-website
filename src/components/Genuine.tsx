"use client";

import Image from "next/image";
import { useState } from "react";
import { GENUINE_CHECKS } from "@/data/consumer";
import { Icon, Roll } from "./ui";

type Side = "front" | "back";

/** Both pack images share one 1359 x 1157 frame, so markers and the zoom lens use the same percentages. */
const W = 1359, H = 1157;
const SRC: Record<Side, string> = { front: "/genuine/front.webp", back: "/genuine/back.webp" };
const ALT: Record<Side, string> = {
  front: "Front of the Ziya Radiant Fresh Toothpaste box and tube",
  back: "Back of the Ziya Radiant Fresh Toothpaste box and tube with the Halal mark, ingredients, directions and maker details",
};

/** Is it genuine? Real front and back pack images with markers on each feature, a zoom lens, and a linked checklist. */
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
          <h2 className="h2" style={{ maxWidth: "15em" }}>How to spot a genuine <span className="soft">AML pack</span></h2>
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
              <div className="gv-art">
                <Image src={SRC[side]} width={W} height={H} alt={ALT[side]} priority unoptimized draggable={false} />
              </div>
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
                    width: check.zoom,
                    height: check.zoom * (H / W),
                    left: `calc(50% - ${((check.zx ?? check.x) / 100) * check.zoom}px)`,
                    top: `calc(50% - ${((check.zy ?? check.y) / 100) * check.zoom * (H / W)}px)`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SRC[side]} width={W} height={H} alt="" draggable={false} />
                </div>
                <span className="gv-lens-label">{active + 1}. {check.title}</span>
              </div>
            )}

            <p className="gv-note">Ziya Radiant Fresh Toothpaste, 100 g. Front and back of the box and tube.</p>
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
              <a className="btn btn-dark" href="#contact"><Roll>Ask AML</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
