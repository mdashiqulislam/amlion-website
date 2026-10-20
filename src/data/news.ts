import type { NewsItem } from "./consumer";

/** Cover photo for each card and article, with the crop that keeps its subject in frame. */
export const COVERS: Record<NewsItem["cover"], { src: string; alt: string; pos: string }> = {
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
      { t: "p", text: "Ziya and Syawo, the toothpaste and personal care brands made by AML Consumer Care Ltd, are now arriving in cosmetic shops and super shops across Bangladesh." },
      { t: "h2", text: "Where to find AML" },
      { t: "p", text: "AML is sold in cosmetic shops and super shops, not on this website. As stock reaches shelves, look for Ziya and Syawo packs at the shop you already use, and ask the shop owner if you cannot see them yet." },
      { t: "img", src: "/news/halal.webp", alt: "Syawo body wash, shower cream and perfume, and Ziya petroleum jelly, beside a green Halal mark", caption: "Ziya and Syawo packs, shown beside the Halal mark." },
      { t: "h2", text: "What you will find" },
      { t: "p", text: "The range covers everyday oral care, personal care, fragrance and skin care for the whole family." },
      {
        t: "ul",
        items: [
          "Ziya toothpaste, including Enamel Protect, Sensitive Instant Relief and Radiant Fresh",
          "Ziya oral sprays, including a children's flavour",
          "Ziya olive oil and petroleum jelly",
          "Syawo body wash and shower cream",
          "Syawo perfume mist cologne",
        ],
      },
      { t: "h2", text: "Made in Dhaka" },
      { t: "p", text: "Products sold in Bangladesh are made by AML Consumer Care Ltd in Dhaka, with the know-how of AML Group, which has made oral and personal care for more than 15 years. AML Group products are used in more than 30 countries, and Bangladesh is our newest market." },
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
          { href: "/#contact", label: "Ask a question" },
        ],
      },
    ],
  },
];
