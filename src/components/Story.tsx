import Image from "next/image";
import { CONTACT } from "@/data/content";
import { CountUp } from "./Effects";
import { Label, Sym } from "./ui";

/** Who is AML: proves it is a real company, in plain words. */
export function Story() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "16em" }}>
            Real care from a real <span className="inline-pill" style={{ background: "#DDEEFF" }}><Sym id="i-tube" css="--t1:#1D6BDC" /></span> trusted maker, <span className="soft">now on your <span className="inline-pill" style={{ background: "var(--lime)" }}><Sym id="i-pump" css="--b1:#12805C;--b2:#0E1306" /></span> local shelf</span>
          </h2>
          <p className="lede center">
            AML Group has made toothpaste and oral care for more than a decade and a half, and has since added hair, body and skin care for the whole family. Products sold in Bangladesh are made by AML Consumer Care Ltd in Dhaka.
          </p>
        </div>

        <div className="bento">
          <div className="tile photo reveal">
            <Image className="scene" src="/about/factory.webp" alt="AML factory building under a blue sky" fill sizes="(max-width: 720px) 100vw, 400px" />
            <span className="badge">Dhaka, Bangladesh</span>
            <div className="overlay">
              <div className="stat" style={{ fontSize: 64 }}><CountUp to={15} /><small>+</small></div>
              <p>Years of AML Group experience in oral and personal care.</p>
            </div>
          </div>

          <div className="tile reveal">
            <h3>Made in Bangladesh</h3>
            <p>Products sold here are made by AML Consumer Care Ltd in Dhaka, with the know-how of AML Group.</p>
            <div className="route" aria-hidden="true">
              <span><b>MY</b>AML Group</span><i />
              <span><b>BD</b>AML Consumer Care Ltd</span>
            </div>
          </div>

          <div className="tile lime reveal">
            <Label style={{ color: "var(--lime-ink)" }}>Trusted worldwide</Label>
            <div className="stat" style={{ marginTop: "auto" }}><CountUp to={30} /><small>+</small></div>
            <p>Countries across 5 continents use products made by AML.</p>
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
            <Label style={{ color: "rgba(255,255,255,.6)" }}>The AML companies</Label>
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

/** Inside our factory: headline and chips on the left, a real-photo collage on the right with proof badges. */
export function Plant() {
  return (
    <section className="block" aria-label="Inside our factory">
      <div className="wrap plant reveal">
        <div className="copy">
          <h2 className="h2">Clean lines. <span style={{ color: "#7FB6EE" }}>Careful checks.</span> Every batch.</h2>
          <p>Every tube and bottle is made by AML Consumer Care Ltd in Dhaka, with modern equipment and strict quality rules, so what reaches you is the same every time.</p>
          <div className="plant-stats"><span>Made in Dhaka</span><span>Checked every batch</span><span>Halal certified</span></div>
        </div>

        <div className="collage">
          <figure className="ph big">
            <Image src="/factory/qc.webp" alt="A technician in a hairnet, mask and gloves inspecting a Ziya toothpaste tube on the line" fill sizes="(max-width: 720px) 100vw, 330px" />
            <figcaption>Quality check</figcaption>
          </figure>
          <figure className="ph top">
            <Image src="/factory/filling-line.webp" alt="Syawo body wash bottles on the filling line, with a technician at the controls" fill sizes="(max-width: 720px) 50vw, 230px" />
            <figcaption>Filling line</figcaption>
          </figure>
          <figure className="ph bottom">
            <Image src="/factory/packing.webp" alt="A worker sealing a carton in the packing area, with Ziya and Syawo packs ready" fill sizes="(max-width: 720px) 50vw, 230px" />
            <figcaption>Packing</figcaption>
          </figure>

          <span className="proof p1"><i /> Halal · JAKIM</span>
          <span className="proof p2"><i /> ISO 9001:2015</span>
        </div>
      </div>
    </section>
  );
}
