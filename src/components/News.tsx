import Image from "next/image";
import { NEWS } from "@/data/consumer";
import type { NewsItem } from "@/data/consumer";
import { Label, Seal, Sym } from "./ui";

function Cover({ kind }: { kind: NewsItem["cover"] }) {
  if (kind === "arrival") {
    return (
      <div className="nc-cover" style={{ background: "linear-gradient(160deg, #E3F2FF, #B8DBF8)" }}>
        <Image className="nc-img a" src="/products/ziya-enamel-protect-toothpaste.webp" width={321} height={273} alt="" />
        <Image className="nc-img b" src="/products/syawo-body-wash-rich-moisturising.webp" width={321} height={273} alt="" />
      </div>
    );
  }
  if (kind === "event") {
    return (
      <div className="nc-cover" style={{ background: "linear-gradient(160deg, #1D6BDC, #0A2240)" }} aria-hidden="true">
        <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="nc-art">
          <circle cx="330" cy="30" r="140" fill="#3B8DEC" opacity=".55" />
          <rect x="50" y="130" width="300" height="100" rx="14" fill="#0A2240" />
          <rect x="50" y="198" width="300" height="26" rx="13" fill="#D6FD70" />
          <text x="200" y="216" textAnchor="middle" fontFamily="var(--font-dm-mono), monospace" fontSize="12" fill="#142000" letterSpacing="2">AML · EVENT STAND</text>
          <g transform="translate(86 52) scale(.8)"><Sym id="i-tube" css="--t1:#fff;--t2:#1D6BDC" width={80} height={200} /></g>
          <g transform="translate(168 62) scale(.72)"><Sym id="i-pump" css="--b1:#D6FD70;--b2:#0A2240" width={80} height={200} /></g>
          <g transform="translate(246 56) scale(.76)"><Sym id="i-rinse" css="--b1:#13A6B8;--b2:#fff" width={80} height={200} /></g>
        </svg>
      </div>
    );
  }
  return (
    <div className="nc-cover" style={{ background: "linear-gradient(160deg, #E9F8F1, #BFEBD6)" }} aria-hidden="true">
      <Seal code="HALAL" sub="JAKIM" color="#12805C" label="" className="nc-seal" />
    </div>
  );
}

/** News and events overview. Cards are informational only: no links and no detail pages. */
export function News() {
  return (
    <section className="block" id="news">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>News &amp; events</Label>
          <h2 className="h2" style={{ maxWidth: "14em" }}>Events and news <span className="soft">from AML</span></h2>
          <p className="lede center">What is happening at AML and where you can meet us. Sample posts are shown until real ones are added.</p>
        </div>

        <div className="ngrid">
          {NEWS.map((n) => (
            <article key={n.id} className="nc">
              <Cover kind={n.cover} />
              <div className="nc-body">
                <div className="nc-meta">
                  <span className={`nc-tag ${n.kind === "Event" ? "ev" : ""}`}>{n.kind}</span>
                  <span className="nc-when">{n.when}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
