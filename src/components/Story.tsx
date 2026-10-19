import { CONTACT } from "@/data/content";
import { BELT_ITEMS } from "@/data/content";
import { CountUp } from "./Effects";
import { Label, Sym } from "./ui";

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

/** Who is AmLion: proves it is a real company, in plain words. */
export function Story() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <Label>Who is AmLion</Label>
          <h2 className="h2" style={{ maxWidth: "16em" }}>
            Real care from a real <span className="inline-pill" style={{ background: "#DDEEFF" }}><Sym id="i-tube" css="--t1:#1D6BDC" /></span> Malaysian company, <span className="soft">now on your <span className="inline-pill" style={{ background: "var(--lime)" }}><Sym id="i-pump" css="--b1:#12805C;--b2:#0E1306" /></span> local shelf</span>
          </h2>
          <p className="lede center">
            For more than a decade and a half, AmLion has made toothpaste and oral care in Selangor, Malaysia. We have since added hair, body and skin care for the whole family.
          </p>
        </div>

        <div className="bento">
          <div className="tile photo reveal">
            <Factory />
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
          <Label>Inside our factory</Label>
          <h2 className="h2">Clean lines. <span style={{ color: "#7FB6EE" }}>Careful checks.</span> Every batch.</h2>
          <p>Every tube and bottle is made in our own factory in Selangor, with modern equipment and strict quality rules, so what reaches you is the same every time.</p>
          <div className="plant-stats"><span>Own factory in Selangor</span><span>Checked every batch</span><span>Halal certified</span></div>
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
