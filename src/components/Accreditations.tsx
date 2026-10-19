import { BELT_ITEMS, CERTS } from "@/data/content";
import { Label, Seal, Sym } from "./ui";

export function Accreditations() {
  return (
    <section className="block" id="accreditations">
      <div className="wrap panel">
        <div className="sec-head reveal">
          <Label>Accreditations</Label>
          <h2 className="h2" style={{ maxWidth: "15em" }}>Certified at every step, <span className="soft">from formula to filling line</span></h2>
          <p className="lede center">Seven international certifications cover our quality system, food-grade safety, ethics and religious compliance, so your brand can enter new markets with fewer questions.</p>
        </div>

        <div className="featured reveal">
          <Seal className="seal" code="HALAL" sub="JAKIM" color="#12805C" label="Halal certification seal" />
          <div>
            <h3>Halal OEM certification by JAKIM</h3>
            <p>Awarded by Malaysia&apos;s Department of Islamic Development (JAKIM), one of the most widely recognised Halal authorities. It confirms our manufacturing follows Shariah guidelines and requirements.</p>
          </div>
          <div className="bd-note">
            <b>Why it matters in Bangladesh</b>
            Most shoppers check for Halal before they buy toothpaste and personal care. Launching with a JAKIM-certified manufacturer answers that question on day one.
          </div>
        </div>

        <div className="certs">
          {CERTS.map((c) => (
            <article key={c.code} className="cert reveal">
              <Seal className="seal" code={c.code} sub={c.sub} color={c.color} label={`${c.title} seal`} />
              <div><h3>{c.title}</h3><p>{c.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Creative banner: an animated filling line. */
export function Plant() {
  const items = [...BELT_ITEMS, ...BELT_ITEMS];
  return (
    <section className="block" aria-label="Inside the plant">
      <div className="wrap plant reveal">
        <div className="copy">
          <Label>Inside the plant</Label>
          <h2 className="h2">Modern lines. <span style={{ color: "#7FB6EE" }}>Meticulous standards.</span> Every batch.</h2>
          <p>Our team has years of experience delivering quality products and creative packaging. With the latest technology, every run meets strict rules and industry standards, and we keep up with market developments to exceed your expectations.</p>
          <div className="plant-stats"><span>In-house R&amp;D lab</span><span>Tube &amp; bottle filling</span><span>Custom packaging</span></div>
        </div>
        <div className="line" aria-hidden="true">
          <svg className="machine" viewBox="0 0 600 340" preserveAspectRatio="xMidYMax meet">
            <rect x="250" y="0" width="120" height="70" rx="10" fill="#1E3B60" />
            <rect x="262" y="12" width="96" height="10" rx="5" fill="#2E5683" />
            <circle cx="342" cy="44" r="6" fill="#D6FD70" />
            <circle cx="322" cy="44" r="6" fill="#1C9BD7" />
            <g className="nozzle">
              <rect x="296" y="70" width="28" height="56" rx="6" fill="#C9D6E6" />
              <path d="M302 126h16l-4 14h-8z" fill="#9FB1C8" />
            </g>
            <circle className="drip" cx="310" cy="148" r="5" fill="#BDF0DE" />
            <rect x="60" y="282" width="16" height="58" fill="#1E3B60" />
            <rect x="530" y="282" width="16" height="58" fill="#1E3B60" />
          </svg>
          <div className="belt-wrap">
            <div className="belt-track">
              {items.map((b, i) => <Sym key={i} id={b.sym} css={b.style} />)}
            </div>
          </div>
          <div className="belt" />
        </div>
      </div>
    </section>
  );
}
