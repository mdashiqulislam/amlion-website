import { TRUST_CARDS, TRUST_FEATURED } from "@/data/consumer";
import Image from "next/image";

/** Why you can trust AML: certifications explained in plain words. */
export function Trust() {
  return (
    <section className="block" id="trust">
      <div className="wrap panel">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "14em" }}>Checked and certified, <span className="soft">so you don&apos;t have to wonder</span></h2>
          <p className="lede center">Seven independent certifications cover how AML products are made, from Halal to quality to safety. Here is what each one means for you.</p>
        </div>

        <div className="featured reveal">
          <div className="logo-box big"><Image src={`/certs/${TRUST_FEATURED.logo}.png`} width={TRUST_FEATURED.w} height={TRUST_FEATURED.h} alt="Halal Malaysia certification mark" /></div>
          <div>
            <h3>{TRUST_FEATURED.title}</h3>
            <p>{TRUST_FEATURED.text}</p>
          </div>
          <div className="bd-note">
            <b>For families in Bangladesh</b>
            {TRUST_FEATURED.note}
          </div>
        </div>

        <div className="certs">
          {TRUST_CARDS.map((c) => (
            <article key={c.logo} className="cert reveal">
              <div className="logo-box"><Image src={`/certs/${c.logo}.png`} width={c.w} height={c.h} alt={`${c.title} certification mark`} /></div>
              <div><h3>{c.title}</h3><p>{c.plain}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
