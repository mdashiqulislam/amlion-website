import Image from "next/image";
import Link from "next/link";
import { NEWS } from "@/data/consumer";
import type { NewsItem } from "@/data/consumer";
import { COVERS, POSTS } from "@/data/news";
import { Icon } from "./ui";

function Cover({ kind }: { kind: NewsItem["cover"] }) {
  const c = COVERS[kind];
  return (
    <div className="nc-cover">
      <Image src={c.src} alt={c.alt} fill sizes="(max-width: 720px) 100vw, 410px" style={{ objectPosition: c.pos }} />
    </div>
  );
}

/** A news or event card. It links to its article when one exists in POSTS, otherwise it is informational only. */
export function NewsCard({ n }: { n: NewsItem }) {
  const linked = POSTS.some((p) => p.slug === n.id);
  return (
    <article className={`nc${linked ? " linked" : ""}`}>
      <Cover kind={n.cover} />
      <div className="nc-body">
        <div className="nc-meta">
          <span className={`nc-tag ${n.kind === "Event" ? "ev" : ""}`}>{n.kind}</span>
          <span className="nc-when">{n.when}</span>
        </div>
        <h3>{linked ? <Link href={`/news/${n.id}`} className="nc-link">{n.title}</Link> : n.title}</h3>
        <p>{n.summary}</p>
        {linked && <span className="nc-more" aria-hidden="true">Read article <i><Icon id="i-arrow" size={14} /></i></span>}
      </div>
    </article>
  );
}

/** News and events overview. Cards link to an article when one exists. */
export function News() {
  return (
    <section className="block" id="news">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2 className="h2" style={{ maxWidth: "14em" }}>Events and news <span className="soft">from AML</span></h2>
          <p className="lede center">What is happening at AML and where you can meet us. Sample posts are shown until real ones are added.</p>
        </div>

        <div className="ngrid">
          {NEWS.map((n) => <NewsCard key={n.id} n={n} />)}
        </div>
      </div>
    </section>
  );
}
