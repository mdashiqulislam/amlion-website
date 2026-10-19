import { CountUp } from "./Effects";
import { Icon, Label, Roll, Sym } from "./ui";

function Factory() {
  return (
    <svg className="scene" viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2E7FE6" /><stop offset=".7" stopColor="#9ED0F7" /></linearGradient>
        <linearGradient id="fwall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F3E6DA" /><stop offset="1" stopColor="#DCC6B2" /></linearGradient>
      </defs>
      <rect width="400" height="520" fill="url(#fsky)" />
      <ellipse cx="80" cy="120" rx="90" ry="26" fill="#fff" opacity=".7" />
      <ellipse cx="300" cy="80" rx="70" ry="18" fill="#fff" opacity=".55" />
      <rect x="40" y="170" width="320" height="210" fill="url(#fwall)" />
      <rect x="40" y="160" width="320" height="16" fill="#C8A98D" />
      <rect x="150" y="120" width="100" height="56" rx="6" fill="#E9DCCF" />
      <circle cx="200" cy="148" r="18" fill="#1C9BD7" />
      <path d="M190 156l8-18h6l-8 18zM201 156l6-12 6 12h-5l-1-3-1 3z" fill="#fff" />
      <g fill="#2C5A86" opacity=".85">
        {[62, 108, 258, 304].flatMap((x) => [196, 256].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width="34" height="40" rx="3" />))}
      </g>
      <rect x="160" y="196" width="80" height="184" fill="#2C5A86" opacity=".9" />
      <path d="M160 196h80v184h-80z" fill="url(#gloss)" opacity=".5" />
      <rect x="0" y="372" width="400" height="148" fill="#8FA39A" />
      <rect x="0" y="420" width="400" height="100" fill="#5E6B70" />
      <path d="M0 468h400" stroke="#fff" strokeWidth="3" strokeDasharray="26 18" opacity=".7" />
      <g fill="#2F7A4E"><circle cx="20" cy="350" r="40" /><circle cx="58" cy="364" r="30" /><circle cx="380" cy="346" r="44" /><circle cx="342" cy="366" r="28" /></g>
      <g fill="#3E9563"><circle cx="34" cy="336" r="24" /><circle cx="368" cy="330" r="26" /></g>
    </svg>
  );
}

const STEPS = ["Research", "Development", "Manufacturing", "Distribution"];

export function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>About us</Label>
          <h2 className="h2" style={{ maxWidth: "17em" }}>
            A Malaysian manufacturing partner helping brands build{" "}
            <span className="inline-pill" style={{ background: "#DDEEFF" }}><Sym id="i-tube" css="--t1:#1D6BDC" /></span> cleaner smiles{" "}
            <span className="soft">
              and <span className="inline-pill" style={{ background: "var(--lime)" }}><Sym id="i-pump" css="--b1:#12805C;--b2:#0E1306" /></span> better daily care
            </span>
          </h2>
          <p className="lede center">
            For more than a decade and a half, AmLion has produced dental and oral care products for brands around the world. We have since widened our range to personal care, custom-designed bottles and multi-product gift sets.
          </p>
        </div>

        <div className="bento">
          <div className="tile photo reveal">
            <Factory />
            <span className="badge">Selangor, Malaysia</span>
            <div className="overlay">
              <div className="stat" style={{ fontSize: 64 }}><CountUp to={15} /><small>+</small></div>
              <p>Years producing oral care for brands worldwide, from research to distribution.</p>
            </div>
          </div>

          <div className="tile reveal">
            <h3>Full OEM &amp; ODM service</h3>
            <p>One partner from the first idea to the export container.</p>
            <div className="steps">
              {STEPS.map((s, i) => <div key={s} className="step"><i>Step {i + 1}</i>{s}</div>)}
            </div>
          </div>

          <div className="tile lime reveal">
            <Label style={{ color: "var(--lime-ink)" }}>Export reach</Label>
            <div className="stat" style={{ marginTop: "auto" }}><CountUp to={30} /><small>+</small></div>
            <p>Countries across 5 continents stock products made in our plant.</p>
          </div>

          <div className="tile white reveal">
            <p className="quote">“We are constantly innovating to deliver better results for our customers.”</p>
            <ul className="rd-list">
              <li>Formulate high-quality products to suit each customer&apos;s requirements</li>
              <li>Research new formulations with an eye on global developments</li>
              <li>Manage rising operational costs so your margins stay healthy</li>
            </ul>
          </div>

          <div className="tile dark reveal">
            <Label style={{ color: "rgba(255,255,255,.6)" }}>Brands served</Label>
            <div className="stat">~<CountUp to={80} /></div>
            <p>Brands we have produced oral and personal care products for.</p>
            <div className="brand-tubes" aria-hidden="true">
              <Sym id="i-tube" css="--t1:#D6FD70;--t3:#F4FFD6" />
              <Sym id="i-tube" css="--t1:#1C9BD7" />
              <Sym id="i-tube" css="--t1:#F05A7E;--t3:#FFE3EA" />
              <Sym id="i-tube" css="--t1:#F5A524;--t3:#FFF1D6" />
              <Sym id="i-tube" css="--t1:#FFFFFF;--t2:#12805C" />
            </div>
          </div>
        </div>

        {/* Product range: specifications to view, not buy */}
        <div className="products" id="products">
          <article className="prod oral reveal">
            <Label>Oral care</Label>
            <h3>Toothpaste &amp; oral care</h3>
            <p>Paste, gel and children&apos;s formulas, mouthwash and oral care kits, filled in your choice of tube and pack.</p>
            <div className="specs"><span>Fluoride &amp; non-fluoride</span><span>Herbal &amp; whitening</span><span>Kids&apos; flavours</span><span>Laminated tubes</span></div>
            <a className="btn btn-dark" href="#contact"><Roll>View specifications</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
            <div className="shelf" aria-hidden="true">
              <Sym id="i-tube" css="--t1:#1D6BDC" />
              <Sym id="i-rinse" css="--b1:#13A6B8;--b2:#F4FBFC" />
              <Sym id="i-tube" css="--t1:#F05A7E;--t3:#FFE3EA" style={{ height: "80%" }} />
            </div>
          </article>
          <article className="prod care reveal">
            <Label>Personal care</Label>
            <h3>Hair, body &amp; skin care</h3>
            <p>Shampoo, conditioner, body wash, lotion and creams for dry, oily, sensitive or children&apos;s skin and hair.</p>
            <div className="specs"><span>Pump &amp; flip-cap bottles</span><span>Jars</span><span>Custom fragrance</span><span>Gift sets</span></div>
            <a className="btn btn-dark" href="#contact"><Roll>View specifications</Roll><span className="arrow"><Icon id="i-arrow" /></span></a>
            <div className="shelf" aria-hidden="true">
              <Sym id="i-pump" css="--b1:#8E7CF0;--b2:#2A2346" />
              <Sym id="i-bottle" css="--b1:#F06B9C" />
              <Sym id="i-jar" view="0 0 120 100" css="--b1:#FFFFFF;--b2:#8E7CF0;--b3:#EDE7FF" style={{ height: "34%" }} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
