import type { ReactNode } from "react";
import { sv } from "@/lib/sv";
import { Icon, Label, Roll } from "./ui";

type Post = { kind: string; meta: string; title: string; cover: ReactNode };

const MONO = "var(--font-dm-mono), monospace";

const POSTS: Post[] = [
  {
    kind: "Event",
    meta: "Trade fair · Dates to be announced",
    title: "Meet our team at the next regional beauty and personal care trade fair",
    cover: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#1D6BDC" />
        <circle cx="330" cy="40" r="140" fill="#3B8DEC" />
        <rect x="40" y="150" width="320" height="120" rx="14" fill="#0A2240" />
        <rect x="40" y="244" width="320" height="26" rx="13" fill="#D6FD70" />
        <text x="200" y="262" textAnchor="middle" fontFamily={MONO} fontSize="12" fill="#142000" letterSpacing="2">AMLION · BOOTH</text>
        <g transform="translate(78 92) scale(.85)"><svg width="80" height="200" style={sv("--t1:#fff;--t2:#1D6BDC")}><use href="#i-tube" /></svg></g>
        <g transform="translate(160 104) scale(.75)"><svg width="80" height="200" style={sv("--b1:#D6FD70;--b2:#0A2240")}><use href="#i-pump" /></svg></g>
        <g transform="translate(236 96) scale(.8)"><svg width="80" height="200" style={sv("--b1:#13A6B8;--b2:#fff")}><use href="#i-rinse" /></svg></g>
      </svg>
    ),
  },
  {
    kind: "Guide",
    meta: "Guide · 6 min read",
    title: "From formula to shelf: how private-label toothpaste gets made",
    cover: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#D6FD70" />
        <path d="M0 220 Q200 160 400 220 V300 H0Z" fill="#C2EB55" />
        <g transform="translate(40 40)"><rect width="90" height="90" rx="45" fill="#fff" /><text x="45" y="52" textAnchor="middle" fontFamily={MONO} fontSize="12" fill="#142000">FORMULA</text></g>
        <path d="M140 85 H178" stroke="#142000" strokeWidth="2" strokeDasharray="4 4" />
        <g transform="translate(160 80) scale(.7)"><svg width="80" height="200" style={sv("--t1:#fff;--t2:#142000;--t3:#fff")}><use href="#i-tube" /></svg></g>
        <path d="M226 160 H262" stroke="#142000" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="268" y="120" width="96" height="110" rx="10" fill="#142000" />
        <rect x="280" y="134" width="72" height="14" rx="4" fill="#D6FD70" />
        <rect x="280" y="156" width="52" height="8" rx="4" fill="#556B1A" />
        <rect x="280" y="172" width="60" height="8" rx="4" fill="#556B1A" />
      </svg>
    ),
  },
  {
    kind: "Market",
    meta: "Market guide · 8 min read",
    title: "Selling personal care in Bangladesh: registration and labelling basics",
    cover: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#0A2240" />
        <rect width="400" height="300" fill="#006A4E" opacity=".9" />
        <circle cx="180" cy="150" r="90" fill="#F42A41" />
        <g transform="translate(232 70) scale(.95)"><svg width="80" height="200" style={sv("--t1:#fff;--t2:#006A4E;--t3:#fff")}><use href="#i-tube" /></svg></g>
        <rect x="40" y="226" width="150" height="34" rx="17" fill="#fff" />
        <text x="115" y="248" textAnchor="middle" fontFamily={MONO} fontSize="12" fill="#0A2240" letterSpacing="1">BN + EN LABEL</text>
      </svg>
    ),
  },
];

export function News() {
  return (
    <section className="block" id="news">
      <div className="wrap">
        <div className="sec-head split reveal">
          <div style={{ display: "grid", gap: 18 }}>
            <Label>News &amp; events</Label>
            <h2 className="h2">Latest from AmLion</h2>
          </div>
          <a className="btn btn-line" href="#news" style={{ justifySelf: "end" }}><Roll>View all</Roll></a>
        </div>
        <div className="news">
          {POSTS.map((p) => (
            <a key={p.title} className="post reveal" href="#news">
              <div className="cover">
                <span className="kind">{p.kind}</span>
                {p.cover}
              </div>
              <span className="meta">{p.meta}</span>
              <h3>{p.title} <span className="go"><Icon id="i-arrow" /></span></h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
