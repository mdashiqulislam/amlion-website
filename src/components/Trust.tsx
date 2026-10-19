import { TRUST_CARDS, TRUST_FEATURED } from "@/data/consumer";
import { Label, Seal } from "./ui";

/** Why you can trust AmLion: certifications explained in plain words. */
export function Trust() {
  return (
    <section className="block" id="trust">
      <div className="wrap panel">
        <div className="sec-head reveal">
          <Label>Why you can trust AmLion</Label>
          <h2 className="h2" style={{ maxWidth: "14em" }}>Checked and certified, <span className="soft">so you don&apos;t have to wonder</span></h2>
          <p className="lede center">Seven independent certifications cover how AmLion products are made, from Halal to quality to safety. Here is what each one means for you.</p>
        </div>

        <div className="featured reveal">
          <Seal className="seal" code="HALAL" sub="JAKIM" color="#12805C" label="Halal certification seal" />
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
            <article key={c.code} className="cert reveal">
              <Seal className="seal" code={c.code} sub={c.sub} color={c.color} label={`${c.title} seal`} />
              <div><h3>{c.title}</h3><p>{c.plain}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
