import Image from "next/image";
import { CONTACT } from "@/data/content";
import { CountUp } from "./Effects";
import { Label } from "./ui";

/** Who is AML: proves it is a real company, in plain words. */
export function Story() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "16em" }}>
            Trusted care, <span className="soft">better life.</span>
          </h2>
          <p className="lede center">
            <strong>AML Consumer Care Ltd.</strong> is the Bangladesh arm of AMLION Group Malaysia, a trusted manufacturer of oral and personal care products with more than 32 years of experience. Backed by AMLION&apos;s research and development, <strong>HALAL-certified</strong> and internationally recognized manufacturing standards, and a presence in over 30 countries, we bring quality, safety and innovation to everyday care for Bangladeshi families.
          </p>
        </div>

        <div className="bento">
          <div className="tile photo reveal">
            <Image className="scene" src="/about/factory.webp" alt="AML factory building under a blue sky" fill sizes="(max-width: 720px) 100vw, 400px" />
            <span className="badge">AMLION Group, Malaysia</span>
            <div className="overlay">
              <div className="stat" style={{ fontSize: 64 }}><CountUp to={32} /><small>+</small></div>
              <p>Years of AMLION Group experience in manufacturing Oral &amp; Personal Care Products.</p>
            </div>
          </div>

          <div className="tile reveal">
            <h3>Made in Malaysia</h3>
            <p>Products are made by AMLION Group, Malaysia. Distributed in Bangladesh by AML Consumer Care Ltd.</p>
            <div className="route" aria-hidden="true">
              <span><b>MY</b>AMLION Group</span><i />
              <span><b>BD</b>AML Consumer Care Ltd.</span>
            </div>
          </div>

          <div className="tile lime reveal">
            <Label style={{ color: "var(--lime-ink)" }}>Trusted worldwide</Label>
            <div className="stat" style={{ marginTop: "auto" }}><CountUp to={30} /><small>+</small></div>
            <p>Countries across 5 continents use products made by AMLION.</p>
          </div>

          <div className="tile white reveal">
            <p className="quote">We keep innovating so you get better care, every day.</p>
            <ul className="rd-list">
              <li>Quality formulas made for everyday use</li>
              <li>Checked against international standards</li>
              <li>Always researching better products</li>
            </ul>
          </div>

          <div className="tile dark reveal">
            <Label style={{ color: "rgba(255,255,255,.6)" }}>The AMLION companies</Label>
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
          <p>Every tube and bottle is made by AMLION in Malaysia, with modern equipment and strict quality rules, so what reaches you is the same every time.</p>
          <div className="plant-stats"><span>Made in Malaysia</span><span>HALAL</span><span>ISO Certified</span></div>
        </div>

        <div className="collage">
          <figure className="ph big">
            <Image src="/factory/qc.webp" alt="A technician in a hairnet, mask and gloves inspecting a toothpaste tube beside the filling line" fill sizes="(max-width: 720px) 100vw, 330px" />
            <figcaption>Quality check</figcaption>
          </figure>
          <figure className="ph top">
            <Image src="/factory/filling-line.webp" alt="Cherry blossom body wash bottles moving along a stainless steel conveyor, checked by a technician" fill sizes="(max-width: 720px) 50vw, 230px" />
            <figcaption>Filling line</figcaption>
          </figure>
          <figure className="ph bottom">
            <Image src="/factory/packing.webp" alt="A worker sealing branded cartons in the packing area of the warehouse" fill sizes="(max-width: 720px) 50vw, 230px" />
            <figcaption>Packing</figcaption>
          </figure>

          <span className="proof p1"><i /> Halal · JAKIM</span>
          <span className="proof p2"><i /> ISO 9001:2015</span>
        </div>
      </div>
    </section>
  );
}
