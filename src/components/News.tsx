import Image from "next/image";
import { NEWS } from "@/data/consumer";
import type { NewsItem } from "@/data/consumer";

/** One photo per card, matched to its story. `pos` keeps the subject in frame when the photo is cropped. */
const COVERS: Record<NewsItem["cover"], { src: string; alt: string; pos: string }> = {
  arrival: {
    src: "/news/arrival.webp",
    alt: "Ziya Enamel Protect toothpaste and Syawo body wash on a shop shelf in a store",
    pos: "50% 60%",
  },
  event: {
    src: "/news/event.webp",
    alt: "The AML Consumer Care Ltd exhibition stand with Ziya and Syawo products on display",
    pos: "50% 58%",
  },
  halal: {
    src: "/news/halal.webp",
    alt: "Syawo and Ziya personal care products beside a green Halal mark",
    pos: "50% 62%",
  },
};

function Cover({ kind }: { kind: NewsItem["cover"] }) {
  const c = COVERS[kind];
  return (
    <div className="nc-cover">
      <Image src={c.src} alt={c.alt} fill sizes="(max-width: 720px) 100vw, 410px" style={{ objectPosition: c.pos }} />
    </div>
  );
}

/** News and events overview. Cards are informational only: no links and no detail pages. */
export function News() {
  return (
    <section className="block" id="news">
      <div className="wrap">
        <div className="sec-head reveal">
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
