import type { CSSProperties, ReactNode } from "react";
import { sv } from "@/lib/sv";
import { Icon, Seal, Sym } from "./ui";

export type CardDef = { className?: string; style?: CSSProperties; node: ReactNode };

const lime: CSSProperties = { display: "inline-block", width: 14, height: 14, borderRadius: "50%", background: "var(--lime)", verticalAlign: "middle" };
const JAKARTA = "var(--font-jakarta), sans-serif";

/** Consumer-facing cards for the hero ring. Products, trust, and where to find them. */
export const CARDS: CardDef[] = [
  {
    style: { background: "linear-gradient(160deg,#E3F2FF,#AFD8FB)" },
    node: (
      <>
        <span className="tag">Toothpaste</span>
        <div className="art">
          <svg viewBox="0 0 80 200" style={sv("--t1:#1D6BDC;--t2:#fff;--t3:#EAF2FB")}>
            <use href="#i-tube" />
            <text x="39" y="92" textAnchor="middle" fontFamily={JAKARTA} fontWeight="700" fontSize="10" fill="#0A2240">AmLion</text>
          </svg>
        </div>
        <h4>Everyday fresh and clean</h4>
      </>
    ),
  },
  {
    node: (
      <>
        <span className="tag">Made in</span>
        <div className="big" style={{ marginTop: "auto", fontSize: 40 }}>Malaysia</div>
        <p>By AmLion Group, a manufacturer with 15+ years of experience.</p>
        <div style={{ display: "flex", gap: 4, height: 44, marginTop: 10 }}>
          <Sym id="i-tube" css="--t1:#1D6BDC;--t3:#E3EAF2" />
          <Sym id="i-rinse" css="--b1:#13A6B8;--b2:#F4FBFC" />
          <Sym id="i-pump" css="--b1:#8E7CF0;--b2:#2A2346" />
          <Sym id="i-bottle" css="--b1:#F06B9C" />
        </div>
      </>
    ),
  },
  {
    className: "dark",
    node: (
      <>
        <h4 style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.25 }}>
          Care <span style={lime} /> that <span style={{ opacity: 0.55 }}>your whole</span> family <span style={{ opacity: 0.55 }}>can</span> trust
        </h4>
        <p style={{ marginTop: "auto" }}>Toothpaste, mouthwash, hair and skin care from one Malaysian maker.</p>
      </>
    ),
  },
  {
    style: { background: "linear-gradient(160deg,#F6EEFF,#E4D4FB)" },
    node: (
      <>
        <span className="tag">Personal care</span>
        <div className="art">
          <Sym id="i-pump" css="--b1:#8E7CF0;--b2:#2A2346" />
          <Sym id="i-bottle" css="--b1:#F06B9C;--b2:#fff" style={{ height: "80%" }} />
        </div>
        <h4>Shampoo, body wash &amp; lotion</h4>
      </>
    ),
  },
  {
    className: "lime",
    node: (
      <>
        <span className="tag" style={{ color: "rgba(20,32,0,.6)" }}>Loved in</span>
        <div className="big" style={{ marginTop: "auto" }}>30+</div>
        <p>Countries across 5 continents.</p>
      </>
    ),
  },
  {
    node: (
      <>
        <span className="tag">Why families choose AmLion</span>
        <ul className="checklist">
          {["Halal certified (JAKIM)", "ISO 9001 quality", "GMP manufacturing", "Made in Malaysia"].map((t) => (
            <li key={t}><span className="ck"><Icon id="i-check" size={10} /></span>{t}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    style: { background: "linear-gradient(160deg,#E9F8F1,#C7EEDC)" },
    node: (
      <>
        <span className="tag" style={{ color: "#0B4A35" }}>Halal certified</span>
        <div className="art" style={{ alignItems: "center" }}>
          <Seal code="HALAL" sub="JAKIM" color="#12805C" label="Halal seal" style={{ width: "62%", height: "auto", filter: "none" }} />
        </div>
        <h4 style={{ color: "#0B4A35" }}>Certified by JAKIM, Malaysia</h4>
      </>
    ),
  },
  {
    style: { background: "linear-gradient(160deg,#E5FAFB,#B9ECEF)" },
    node: (
      <>
        <span className="tag">Oral care</span>
        <div className="art">
          <Sym id="i-rinse" css="--b1:#13A6B8;--b2:#F4FBFC" />
          <Sym id="i-brush" view="0 0 40 200" css="--b1:#0E7C8A" style={{ height: "86%" }} />
        </div>
        <h4>Mouthwash &amp; oral kits</h4>
      </>
    ),
  },
  {
    style: { background: "linear-gradient(160deg,#FFE9C9,#F8C78F)", color: "#4A2A00" },
    node: (
      <>
        <span className="tag" style={{ color: "#8A5A00" }}>Where to buy</span>
        <div className="art" style={{ flexDirection: "column", alignItems: "stretch", justifyContent: "flex-end", gap: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 6, height: "62%" }}>
            <Sym id="i-tube" css="--t1:#1D6BDC" style={{ height: "84%" }} />
            <Sym id="i-pump" css="--b1:#8E7CF0;--b2:#2A2346" />
            <Sym id="i-bottle" css="--b1:#F06B9C" style={{ height: "88%" }} />
            <Sym id="i-rinse" css="--b1:#13A6B8;--b2:#fff" style={{ height: "80%" }} />
          </div>
          <div style={{ height: 8, borderRadius: 4, background: "#B5462E", marginTop: -1 }} />
        </div>
        <h4 style={{ color: "#4A2A00", marginTop: 8 }}>Cosmetic shops &amp; super shops</h4>
      </>
    ),
  },
  {
    node: (
      <>
        <span className="tag">Bangladesh</span>
        <svg viewBox="0 0 180 110" style={{ width: "100%", height: "auto", marginTop: 10 }}>
          <rect width="180" height="110" rx="12" fill="#EEF4FA" />
          <path d="M34 82 Q90 0 146 34" fill="none" stroke="#1C9BD7" strokeWidth="2.5" strokeDasharray="5 5" />
          <circle cx="34" cy="82" r="6" fill="#0A2240" />
          <circle cx="146" cy="34" r="7" fill="#D6FD70" stroke="#0E1306" strokeWidth="2" />
          <text x="22" y="102" fontFamily="var(--font-dm-mono), monospace" fontSize="10" fill="#3A4859">KUL</text>
          <text x="132" y="20" fontFamily="var(--font-dm-mono), monospace" fontSize="10" fill="#3A4859">DAC</text>
        </svg>
        <h4 style={{ marginTop: "auto" }}>Now arriving in Bangladesh</h4>
      </>
    ),
  },
  {
    node: (
      <>
        <span className="tag">Certified quality</span>
        <div className="big" style={{ marginTop: "auto" }}>7</div>
        <p>International certifications.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10 }}>
          {["ISO 9001", "GMP", "HACCP", "BRC"].map((t) => (
            <span key={t} className="cert-chip" style={{ background: "#EEF4FA", fontSize: 10, padding: "4px 8px" }}>{t}</span>
          ))}
        </div>
      </>
    ),
  },
  {
    style: { background: "linear-gradient(160deg,#FFF6D9,#FFE08A)" },
    node: (
      <>
        <span className="tag" style={{ color: "#7A5300" }}>Kids&apos; range</span>
        <div className="art">
          <Sym id="i-tube" css="--t1:#F5A524;--t2:#fff;--t3:#FFF1D6" style={{ height: "86%" }} />
          <Sym id="i-tube" css="--t1:#F05A7E;--t2:#fff;--t3:#FFE3EA" style={{ height: "72%" }} />
          <Sym id="i-brush" view="0 0 40 200" css="--b1:#12805C;--b3:#FFD95A" style={{ height: "78%" }} />
        </div>
        <h4 style={{ color: "#4A3300" }}>Fun flavours for children</h4>
      </>
    ),
  },
  {
    style: { background: "linear-gradient(160deg,#FFF0F3,#FBD3DD)" },
    node: (
      <>
        <span className="tag" style={{ color: "#8A2A45" }}>Skin care</span>
        <div className="art" style={{ alignItems: "center" }}>
          <Sym id="i-jar" view="0 0 120 100" css="--b1:#FFFFFF;--b2:#F05A7E;--b3:#FFE3EA" style={{ height: "58%" }} />
        </div>
        <h4 style={{ color: "#5A1A2E" }}>Creams &amp; lotions in jars</h4>
      </>
    ),
  },
];
