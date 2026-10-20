import Image from "next/image";
import { CONTACT } from "@/data/content";
import { BELT_ITEMS } from "@/data/content";
import { CountUp } from "./Effects";
import { Label, Sym } from "./ui";

/** Who is AmLion: proves it is a real company, in plain words. */
export function Story() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "16em" }}>
            Real care from a real <span className="inline-pill" style={{ background: "#DDEEFF" }}><Sym id="i-tube" css="--t1:#1D6BDC" /></span> Malaysian company, <span className="soft">now on your <span className="inline-pill" style={{ background: "var(--lime)" }}><Sym id="i-pump" css="--b1:#12805C;--b2:#0E1306" /></span> local shelf</span>
          </h2>
          <p className="lede center">
            For more than a decade and a half, AmLion has made toothpaste and oral care in Selangor, Malaysia. We have since added hair, body and skin care for the whole family.
          </p>
        </div>

        <div className="bento">
          <div className="tile photo reveal">
            <Image className="scene" src="/about/factory.webp" alt="AmLion factory building under a blue sky" fill sizes="(max-width: 720px) 100vw, 400px" />
            <span className="badge">Selangor, Malaysia</span>
            <div className="overlay">
              <div className="stat" style={{ fontSize: 64 }}><CountUp to={15} /><small>+</small></div>
              <p>Years making oral and personal care in our own factory.</p>
            </div>
          </div>

          <div className="tile reveal">
            <h3>Made in Malaysia</h3>
            <p>Every AmLion product is made in Malaysia, then shipped to shops in Bangladesh.</p>
            <div className="route" aria-hidden="true">
              <span><b>KUL</b>Selangor</span><i />
              <span><b>DAC</b>Bangladesh</span>
            </div>
          </div>

          <div className="tile lime reveal">
            <Label style={{ color: "var(--lime-ink)" }}>Trusted worldwide</Label>
            <div className="stat" style={{ marginTop: "auto" }}><CountUp to={30} /><small>+</small></div>
            <p>Countries across 5 continents use products made by AmLion.</p>
          </div>

          <div className="tile white reveal">
            <p className="quote">“We are constantly innovating to deliver better results for our customers.”</p>
            <ul className="rd-list">
              <li>Quality formulas made for everyday use</li>
              <li>Checked against international standards</li>
              <li>Always researching better products</li>
            </ul>
          </div>

          <div className="tile dark reveal">
            <Label style={{ color: "rgba(255,255,255,.6)" }}>The AmLion companies</Label>
            <ul className="co-list">
              {CONTACT.entities.map((e) => <li key={e}>{e}</li>)}
            </ul>
            <p>Look for these names on the label to confirm the maker.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Creative banner: an animated filling line, worded for shoppers. */
export function Plant() {
  const items = [...BELT_ITEMS, ...BELT_ITEMS];
  return (
    <section className="block" aria-label="Inside our factory">
      <div className="wrap plant reveal">
        <div className="copy">
          <h2 className="h2">Clean lines. <span style={{ color: "#7FB6EE" }}>Careful checks.</span> Every batch.</h2>
          <p>Every tube and bottle is made in our own factory in Selangor, with modern equipment and strict quality rules, so what reaches you is the same every time.</p>
          <div className="plant-stats"><span>Own factory in Selangor</span><span>Checked every batch</span><span>Halal certified</span></div>
        </div>
        <div className="line" aria-hidden="true">
          <svg className="machine" viewBox="0 0 600 340" preserveAspectRatio="xMidYMax meet">
            {/* Glass head panel with the AML logo (Figma: white at 10%, soft light rim) */}
            <rect x="250.5" y="0.5" width="119" height="69" rx="10" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.3)" />
            <image href="/factory/logo-mark.svg" x="269.4" y="19.9" width="81.56" height="31.21" />
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
