"use client";

import Image from "next/image";
import { useState } from "react";
import { GENUINE_CHECKS } from "@/data/consumer";
import { Icon, Roll } from "./ui";

/** The pack image sits in a 1359 x 1157 frame, so markers and the zoom lens use the same percentages. */
const W = 1359, H = 1157;
const SRC = "/genuine/spray-front.webp";
const ALT = "Front of the Ziya Cooling Menthol Oral Spray box and bottle, with the brand name and the Halal mark";

/** Is it genuine? The real pack image with markers on each feature, a zoom lens, and a linked checklist. */
export function Genuine() {
  const [active, setActive] = useState(0);
  const check = GENUINE_CHECKS[active];
  const spot = check.spot;

  return (
    <section className="block" id="genuine">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "15em" }}>How to spot genuine product <span className="soft">of AML</span></h2>
          <p className="lede center">Four quick checks before you buy. Tap a check to see exactly where to look on the pack.</p>
        </div>

        <div className="genuine">
          <div className="gv reveal">
            <div className="gv-stage">
              <div className="gv-art">
                <Image src={SRC} width={W} height={H} alt={ALT} priority unoptimized draggable={false} />
              </div>
              {GENUINE_CHECKS.map((c, i) => c.spot && (
                <button
                  key={c.title}
                  className={`gv-pin${active === i ? " on" : ""}`}
                  style={{ left: `${c.spot.x}%`, top: `${c.spot.y}%` }}
                  onClick={() => setActive(i)}
                  aria-label={`Check ${i + 1}: ${c.title}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {spot && (
              <div className={`gv-lens${spot.y < 50 ? " low" : ""}`} aria-hidden="true">
                <div
                  className="gv-lens-art"
                  style={{
                    width: spot.zoom,
                    height: spot.zoom * (H / W),
                    left: `calc(50% - ${(spot.x / 100) * spot.zoom}px)`,
                    top: `calc(50% - ${(spot.y / 100) * spot.zoom * (H / W)}px)`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SRC} width={W} height={H} alt="" draggable={false} />
                </div>
                <span className="gv-lens-label">{active + 1}. {check.title}</span>
              </div>
            )}

            <p className="gv-note">Ziya Cooling Menthol Oral Spray, 15 ml. Front of the box and bottle.</p>
          </div>

          <ol className="checks reveal">
            {GENUINE_CHECKS.map((c, i) => (
              <li key={c.title} className={`check${active === i ? " on" : ""}`}>
                <button className="check-btn" onClick={() => setActive(i)} aria-pressed={active === i}>
                  <span className="num">{i + 1}</span>
                  <span className="check-txt"><span className="check-title">{c.title}</span><span className="check-text">{c.text}</span></span>
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
