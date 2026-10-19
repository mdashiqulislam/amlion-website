"use client";

import { useMemo, useRef, useState } from "react";
import { COUNTRIES, HQ, LAND } from "@/data/content";
import { CountUp } from "./Effects";
import { Label } from "./ui";

const W = 1000, H = 375, LAT0 = 75, LAT1 = -60;
const px = (lon: number) => ((lon + 180) / 360) * W;
const py = (lat: number) => ((LAT0 - lat) / (LAT0 - LAT1)) * H;

type Tip = { name: string; x: number; y: number } | null;

function MapCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [tip, setTip] = useState<Tip>(null);

  const dots = useMemo(() => {
    const out: { x: number; y: number }[] = [];
    for (const [lat, ranges] of Object.entries(LAND)) {
      for (const la of [+lat + 1.25, +lat - 1.25]) {
        for (const [a, b] of ranges) for (let lo = a; lo <= b; lo += 2.5) out.push({ x: px(lo), y: py(la) });
      }
    }
    return out;
  }, []);

  const hx = px(HQ.lon), hy = py(HQ.lat);

  const show = (code: string | null) => {
    setActive(code);
    if (!code) { setTip(null); return; }
    const card = cardRef.current;
    const pin = card?.querySelector<SVGCircleElement>(`.pin[data-c="${code}"]`);
    const c = COUNTRIES.find((x) => x.code === code);
    if (!card || !pin || !c) return;
    const r = pin.getBoundingClientRect(), cr = card.getBoundingClientRect();
    setTip({ name: c.name, x: r.left + r.width / 2 - cr.left, y: r.top - cr.top });
  };

  return (
    <div className="map-card reveal" ref={cardRef}>
      <div className="map-legend">
        <div className="callout">
          <span className="flag" aria-hidden="true">
            <svg viewBox="0 0 10 6"><rect width="10" height="6" fill="#006A4E" /><circle cx="4.5" cy="3" r="2" fill="#F42A41" /></svg>
          </span>
          <b>Bangladesh</b>
          <span>Now arriving. AmLion is reaching cosmetic shops and super shops across Bangladesh.</span>
        </div>
      </div>

      <div className="map-wrap">
        <svg className="map" viewBox="0 0 1000 375" role="img" aria-label="World map of AmLion export markets"
          onPointerOver={(e) => { const p = (e.target as Element).closest(".pin"); if (p) show(p.getAttribute("data-c")); }}
          onPointerOut={(e) => { if ((e.target as Element).closest(".pin")) show(null); }}>
          {dots.map((d, i) => <circle key={i} className="land" cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r="2.1" />)}
          {COUNTRIES.map((c) => {
            const x = px(c.lon), y = py(c.lat);
            const mx = (hx + x) / 2, my = Math.min(hy, y) - Math.abs(hx - x) * 0.22 - 20;
            return <path key={c.code} className={`arc${c.code === "BD" ? " bd" : ""}`} d={`M${hx.toFixed(1)} ${hy.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`} />;
          })}
          {COUNTRIES.map((c) => {
            const bd = c.code === "BD";
            const x = px(c.lon), y = py(c.lat);
            return (
              <g key={c.code}>
                {bd && <circle className="pulse" cx={x} cy={y} r="9" />}
                <circle className={`pin${bd ? " bd" : ""}${active === c.code && !bd ? " hl" : ""}`} data-c={c.code} cx={x.toFixed(1)} cy={y.toFixed(1)} r={bd ? 7 : 5} />
              </g>
            );
          })}
          <circle className="hq" cx={hx} cy={hy} r="9" />
          <circle cx={hx} cy={hy} r="4" fill="#D6FD70" />
          <text x={hx + 12} y={hy + 22} fontFamily="var(--font-dm-mono), monospace" fontSize="13" fill="#0A2240">HQ · SELANGOR</text>
        </svg>
      </div>

      <div className="map-tip" style={tip ? { left: tip.x, top: tip.y, opacity: 1 } : undefined}>{tip?.name}</div>

    </div>
  );
}

export function ExportMarket() {
  return (
    <section className="block" id="export">
      <div className="wrap">
        <div className="sec-head split reveal">
          <div style={{ display: "grid", gap: 18 }}>
            <Label>Trusted worldwide</Label>
            <h2 className="h2" style={{ maxWidth: "13em" }}>Made in Malaysia. <span className="soft">Trusted in 30+ countries.</span></h2>
          </div>
          <p className="lede">AmLion products are used in more than 30 countries across 5 continents. Bangladesh is our newest home.</p>
        </div>

        <div className="export-grid">
          <MapCard />
        </div>
      </div>
    </section>
  );
}
