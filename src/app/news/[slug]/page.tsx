import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/Article";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { Sprite } from "@/components/ui";
import { NEWS } from "@/data/consumer";
import { COVERS, POSTS } from "@/data/news";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => {
  const post = POSTS.find((p) => p.slug === slug);
  const item = NEWS.find((n) => n.id === slug);
  return post && item ? { post, item } : null;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const hit = find((await params).slug);
  if (!hit) return {};
  const { item } = hit;
  return {
    title: `${item.title} | AML Consumer Care Ltd`,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary, images: [COVERS[item.cover].src], type: "article" },
  };
}

/** One page for every article. The content comes from POSTS and NEWS, the layout from the Article template. */
export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const hit = find((await params).slug);
  if (!hit) notFound();
  return (
    <>
      <Sprite />
      <FloatNav always />
      <div className="page career">
        <Article item={hit.item} post={hit.post} />
        <Footer />
      </div>
    </>
  );
}
