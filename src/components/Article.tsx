import Image from "next/image";
import Link from "next/link";
import { NEWS } from "@/data/consumer";
import type { NewsItem } from "@/data/consumer";
import { COVERS } from "@/data/news";
import type { Block, Post } from "@/data/news";
import { NewsCard } from "./News";
import { ShareBar } from "./ShareBar";
import { Icon, Roll } from "./ui";

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const words = (blocks: Block[]) =>
  blocks.map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : "")).join(" ").split(/\s+/).filter(Boolean).length;

function Blocks({ body }: { body: Block[] }) {
  return (
    <>
      {body.map((b, i) => {
        switch (b.t) {
          case "p": return <p key={i}>{b.text}</p>;
          case "h2": return <h2 key={i} id={slugify(b.text)}>{b.text}</h2>;
          case "h3": return <h3 key={i}>{b.text}</h3>;
          case "ul": return <ul key={i} className="ticks">{b.items.map((x) => <li key={x}>{x}</li>)}</ul>;
          case "img": return (
            <figure key={i} className="art-fig">
              <div><Image src={b.src} alt={b.alt} fill sizes="(max-width: 860px) 100vw, 740px" /></div>
              {b.caption && <figcaption>{b.caption}</figcaption>}
            </figure>
          );
          case "quote": return (
            <blockquote key={i} className="art-quote"><p>{b.text}</p>{b.by && <cite>{b.by}</cite>}</blockquote>
          );
          case "callout": return (
            <aside key={i} className="art-callout">
              <b>{b.title}</b>
              <p>{b.text}</p>
              {b.link && <Link href={b.link.href} className="u">{b.link.label}</Link>}
            </aside>
          );
          case "cta": return (
            <section key={i} className="art-cta" aria-label={b.title}>
              <div><h2>{b.title}</h2><p>{b.text}</p></div>
              <div className="art-cta-actions">
                {b.actions.map((a) => (
                  <Link key={a.href} href={a.href} className={`btn ${a.primary ? "btn-dark" : "btn-line"}`}>
                    <Roll>{a.label}</Roll>{a.primary && <span className="arrow"><Icon id="i-arrow" /></span>}
                  </Link>
                ))}
              </div>
            </section>
          );
        }
      })}
    </>
  );
}

/**
 * Universal article template: breadcrumb, heading, cover photo, readable body, side panel with contents and sharing,
 * tags and more from AML. Works for any post, whatever blocks it contains.
 */
export function Article({ item, post }: { item: NewsItem; post: Post }) {
  const cover = COVERS[item.cover];
  const minutes = Math.max(1, Math.round(words(post.body) / 200));
  const toc = post.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").filter((b) => b.text !== "Want to know more?");
  const more = NEWS.filter((n) => n.id !== item.id);

  return (
    <main id="main" className="job-page article">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#news">Events &amp; news</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{item.title}</span>
        </nav>

        <header className="art-head">
          <div className="art-meta">
            <span className={`nc-tag ${item.kind === "Event" ? "ev" : ""}`}>{item.kind}</span>
            <span>{item.when}</span>
            <span aria-hidden="true">·</span>
            <span>{minutes} min read</span>
          </div>
          <h1>{item.title}</h1>
          <p className="art-lede">{item.summary}</p>
          {post.author && <p className="art-by">By {post.author}</p>}
        </header>

        <figure className="art-cover">
          <Image src={cover.src} alt={cover.alt} fill priority sizes="(max-width: 1240px) 100vw, 1240px" style={{ objectPosition: cover.pos }} />
        </figure>

        <div className="art-layout">
          <article className="art-body">
            <Blocks body={post.body} />
            {post.tags && post.tags.length > 0 && (
              <ul className="art-tags" aria-label="Tags">{post.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            )}
          </article>

          <aside className="art-side" aria-label="Article tools">
            {toc.length > 1 && (
              <nav aria-label="On this page">
                <h2>On this page</h2>
                <ol>{toc.map((h) => <li key={h.text}><a href={`#${slugify(h.text)}`}>{h.text}</a></li>)}</ol>
              </nav>
            )}
            <ShareBar title={item.title} />
          </aside>
        </div>

        {more.length > 0 && (
          <section className="art-more" aria-labelledby="more-h">
            <h2 id="more-h" className="h2">More from <span className="soft">AML</span></h2>
            <div className="ngrid">{more.map((n) => <NewsCard key={n.id} n={n} />)}</div>
          </section>
        )}
      </div>
    </main>
  );
}
