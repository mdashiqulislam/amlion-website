import type { NewsItem } from "./consumer";

/** Cover photo for each card and article, with the crop that keeps its subject in frame. */
export const COVERS: Record<NewsItem["cover"], { src: string; alt: string; pos: string }> = {
  arrival: {
    src: "/news/arrival.webp",
    alt: "The Ziya and SYAWO range, from toothpaste to body wash, olive oil and body mist, on a mossy stand in a forest",
    pos: "50% 55%",
  },
  event: {
    src: "/news/event.webp",
    alt: "The AML Consumer Care Ltd team standing together under the AML logo",
    pos: "50% 45%",
  },
  halal: {
    src: "/news/halal.webp",
    alt: "A gold Halal certified seal on a dark green background",
    pos: "50% 50%",
  },
};

/**
 * One article is a list of blocks, so every detail page uses the same template.
 * To add a new article: add its card to NEWS (src/data/consumer.ts) and an entry here with the same `slug`.
 */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "img"; src: string; alt: string; caption?: string }
  | { t: "quote"; text: string; by?: string }
  | { t: "callout"; title: string; text: string; link?: { href: string; label: string } }
  | { t: "cta"; title: string; text: string; actions: { href: string; label: string; primary?: boolean }[] };

export type Post = {
  /** Must match a NEWS card id. */
  slug: string;
  author?: string;
  tags?: string[];
  body: Block[];
};

/** Wording below uses only facts already on the AML site. AML should review it before launch. */
export const POSTS: Post[] = [
  {
    slug: "arrival",
    author: "AML Consumer Care Ltd",
    tags: ["Ziya", "Syawo", "Bangladesh", "Where to buy"],
    body: [
      { t: "p", text: "Ziya & Syawo Is the Oral Care and personal care brands made by Amlion Group are now arriving in cosmetic shops and super shops across Bangladesh with AML Consumer Care Ltd." },
      { t: "h2", text: "Where to find AML" },
      { t: "p", text: "AML is sold in cosmetic shops and super shops, not on this website. As stock reaches shelves, look for Ziya and Syawo packs at the shop you already use, and ask the shop owner if you cannot see them yet." },
      { t: "img", src: "/news/halal.webp", alt: "Syawo body wash, shower cream and perfume, and Ziya petroleum jelly, beside a green Halal mark", caption: "Ziya and Syawo packs, shown beside the Halal mark." },
      { t: "h2", text: "What you will find" },
      { t: "p", text: "The range covers everyday oral care, personal care, fragrance and skin care for the whole family." },
      {
        t: "ul",
        items: [
          "Ziya toothpaste, including Advanced Whitening, Sensitive Instant Relief, Radiant Fresh, Enamel Repair and Natural Clean",
          "Ziya oral sprays, including a children's flavour",
          "Ziya olive oil and petroleum jelly",
          "Syawo Body Wash",
          "Syawo Body Mist",
        ],
      },
      { t: "h2", text: "Made in Malaysia" },
      { t: "p", text: "Products sold in Bangladesh are made by Amlion Group in Malaysia, which has made oral and personal care for more than 32 years. Amlion Group products are used in more than 30 countries, and Bangladesh is our newest market." },
      {
        t: "callout",
        title: "Check your pack",
        text: "Look for the brand name, the Halal mark, and the maker's name and address on the label: AML Consumer Care Ltd, Dhaka, Bangladesh.",
        link: { href: "/#genuine", label: "See how to spot a genuine pack" },
      },
      {
        t: "cta",
        title: "Want to know more?",
        text: "See what is in each pack before you shop, or send us a question.",
        actions: [
          { href: "/products", label: "Browse products", primary: true },
          { href: "/contact", label: "Ask a question" },
        ],
      },
    ],
  },
];
