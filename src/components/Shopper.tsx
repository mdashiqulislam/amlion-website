import { BENEFITS, FAQS } from "@/data/consumer";

/** Why choose AmLion: four reasons a shopper can repeat. */
export function Why() {
  return (
    <section className="block" id="why">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "14em" }}>Four reasons to pick it <span className="soft">off the shelf</span></h2>
        </div>
        <div className="why">
          {BENEFITS.map((b, i) => (
            <article key={b.title} className="why-card reveal" style={{ background: b.color, color: b.ink }}>
              <span className="why-n">{i + 1}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** FAQ: native details elements, so it works without JavaScript. */
export function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap faq-wrap">
        <div className="sec-head reveal">
          <h2 className="h2">Before you buy</h2>
        </div>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item reveal">
              <summary>{f.q}<span className="plus" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
