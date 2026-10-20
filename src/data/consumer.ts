/** Shopper-facing content. Anything marked SAMPLE must be replaced with AML's real product data before launch. */

/** logo: file in /public/certs, taken from the certification logos on amlion.com.my. */
export type TrustCard = { logo: string; w: number; h: number; title: string; plain: string };

export const TRUST_FEATURED = {
  logo: "halal", w: 353, h: 352,
  title: "Halal certified by JAKIM",
  text: "AML products carry the Halal mark certified by JAKIM, the Department of Islamic Development Malaysia, one of the most widely recognised Halal authorities. Production follows Shariah guidelines from start to finish.",
  note: "In Bangladesh, most families look for the Halal mark before they buy toothpaste or personal care. With AML, that answer is already on the pack.",
};

export const TRUST_CARDS: TrustCard[] = [
  { logo: "iso", w: 462, h: 352, title: "ISO 9001:2015", plain: "Quality is checked at every step, so each tube and bottle matches the last." },
  { logo: "gmp", w: 353, h: 352, title: "Good Manufacturing Practices", plain: "Made in clean, controlled conditions. AML Group earned GMP before Malaysia made it mandatory." },
  { logo: "haccp", w: 233, h: 337, title: "HACCP food safety", plain: "A food-grade safety system, applied to products you put in your mouth." },
  { logo: "brc", w: 246, h: 337, title: "British Retail Consortium", plain: "Trusted as a supplier to British retail brands, one of the strictest markets." },
  { logo: "bsci", w: 519, h: 192, title: "BSCI", plain: "Made in factories that follow fair and safe working conditions." },
  { logo: "kosher", w: 341, h: 340, title: "Kosher certified", plain: "Another independent check that what goes into the product is accounted for." },
];

export const CATEGORIES = ["Oral Care", "Fragrance", "Personal Care", "Skin Care"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Product = {
  id: string;
  name: string;
  category: Category;
  brand: "Ziya" | "Syawo";
  /** Flavour, scent or type, as printed on the pack. */
  variant: string;
  /** Pack size as printed on the pack. */
  size: string;
  /** Claims printed on the pack. Ingredients and directions still need to come from AML. */
  claims: string[];
  /** File in /public/products */
  image: string;
};

/** Products from the Figma "Cards" section, in design order. Details are read from the pack artwork. */
export const PRODUCTS: Product[] = [
  { id: "syawo-sensual-mist-cologne", name: "Syawo Sensual Mist Cologne", category: "Fragrance", brand: "Syawo", variant: "Sensual mist cologne", size: "50 ml", claims: [], image: "syawo-sensual-mist-cologne" },
  { id: "ziya-enamel-protect-toothpaste", name: "Ziya Enamel Protect Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Fresh mint", size: "100 g", claims: ["Stronger enamel", "Cavity protection", "Long-lasting freshness"], image: "ziya-enamel-protect-toothpaste" },
  { id: "ziya-oral-spray-children", name: "Ziya Oral Spray - Children", category: "Oral Care", brand: "Ziya", variant: "Strawberry flavour", size: "20 ml", claims: ["Helps freshen breath", "Supports oral hygiene", "Mild and safe for children", "Tasty strawberry flavour"], image: "ziya-oral-spray-children" },
  { id: "ziya-oral-spray-honey-soothing", name: "Ziya Oral Spray - Honey Soothing", category: "Oral Care", brand: "Ziya", variant: "Honey soothing", size: "20 ml", claims: ["Soothes sore throat", "Supports oral hygiene", "Natural honey extract", "Mild and safe for daily use"], image: "ziya-oral-spray-honey-soothing" },
  { id: "ziya-sensitive-instant-relief-toothpaste", name: "Ziya Sensitive Instant Relief Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Mild mint", size: "100 g", claims: ["Rapid relief from tooth sensitivity", "Strengthens enamel", "Gentle cleaning", "Freshens breath"], image: "ziya-sensitive-instant-relief-toothpaste" },
  { id: "ziya-radiant-fresh-toothpaste", name: "Ziya Radiant Fresh Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Cool mint", size: "100 g", claims: ["Long-lasting freshness and whiter teeth", "Cavity protection", "Fresh breath", "Removes plaque"], image: "ziya-radiant-fresh-toothpaste" },
  { id: "ziya-olive-oil", name: "Ziya Olive Oil", category: "Skin Care", brand: "Ziya", variant: "100% pure olive oil", size: "100 ml", claims: ["Natural goodness for healthy skin and hair", "Nourishes skin", "Strengthens hair", "Rich in antioxidants", "No added chemicals"], image: "ziya-olive-oil" },
  { id: "ziya-petroleum-jelly-coco-butter", name: "Ziya Petroleum Jelly - Coco Butter", category: "Skin Care", brand: "Ziya", variant: "Coco butter", size: "50 gm", claims: ["Deep moisture for soft and healthy skin", "Locks in moisture", "Softens dry skin", "Protects skin barrier", "Dermatologically tested"], image: "ziya-petroleum-jelly-coco-butter" },
  { id: "syawo-shower-rich-whitening", name: "Syawo Shower - Rich Whitening", category: "Personal Care", brand: "Syawo", variant: "Shower cream with milk protein and vitamin E", size: "250 ml", claims: ["For brighter, smoother and healthier skin", "Brightens skin", "Moisturises deeply", "Long-lasting freshness", "Gentle and safe"], image: "syawo-shower-rich-whitening" },
  { id: "ziya-petroleum-jelly-lemon-fresh", name: "Ziya Petroleum Jelly - Lemon Fresh", category: "Skin Care", brand: "Ziya", variant: "Lemon fresh", size: "50 gm", claims: ["Deep moisture for soft and healthy skin", "Locks in moisture", "Softens dry skin", "Protects skin barrier", "Dermatologically tested"], image: "ziya-petroleum-jelly-lemon-fresh" },
  { id: "syawo-body-wash-rich-moisturising", name: "Syawo Body Wash - Rich Moisturising", category: "Personal Care", brand: "Syawo", variant: "With milk protein and aloe vera extract", size: "300 ml", claims: ["Deep moisturisation", "Nourishes skin", "Makes skin soft and smooth", "Gentle and safe"], image: "syawo-body-wash-rich-moisturising" },
  { id: "syawo-perfume-mist-cologne-summer", name: "Syawo Perfume - Mist Cologne - Summer", category: "Fragrance", brand: "Syawo", variant: "Summer, eau de cologne", size: "50 ml", claims: ["Fresh, energising and long-lasting fragrance", "Skin friendly", "Everyday use", "Perfect for summer"], image: "syawo-perfume-mist-cologne-summer" },
];

export type GenuineCheck = {
  title: string;
  text: string;
  /** Which side of the pack shows it, and where the marker sits (percent of the pack image). */
  side: "front" | "back";
  x: number;
  y: number;
  /** Zoom centre when the marker sits beside the feature, and how large the lens draws the pack (px wide). */
  zx?: number;
  zy?: number;
  zoom: number;
};

/** Checks a shopper can do, matched to the Ziya Radiant Fresh pack images in /public/genuine. */
export const GENUINE_CHECKS: GenuineCheck[] = [
  { title: "The brand name", text: "Ziya is printed clearly on the front of the box and the tube, with sharp, even colours.", side: "front", x: 43.4, y: 19.9, zoom: 1500 },
  { title: "The Halal mark", text: "Genuine packs carry the official Halal mark from JAKIM on the back of the box and the tube.", side: "back", x: 52.5, y: 20.5, zx: 47.1, zy: 14.7, zoom: 1750 },
  { title: "Made by AML", text: "The back label names the maker, AML Consumer Care Ltd, Dhaka, Bangladesh, with its website.", side: "back", x: 25, y: 85, zx: 33, zy: 85.2, zoom: 1800 },
  { title: "A clean, sealed pack", text: "The tube end is sealed flat with a clean cap, and the box is undamaged and neatly printed.", side: "front", x: 69.5, y: 90.5, zx: 69.5, zy: 91.6, zoom: 1500 },
];

export const BENEFITS = [
  { title: "Halal, made to standard", text: "Certified by JAKIM, so you can buy with confidence.", color: "#E9F8F1", ink: "#0B4A35" },
  { title: "15+ years of know-how", text: "Backed by AML Group, which has made oral and personal care for more than a decade and a half.", color: "#DDEEFF", ink: "#0A2240" },
  { title: "Care for the whole family", text: "Toothpaste, mouthwash, hair and skin care, including a kids' range.", color: "#FFF1D6", ink: "#4A3300" },
  { title: "Trusted in 30+ countries", text: "Used across five continents, now arriving in Bangladesh.", color: "#EDE7FF", ink: "#2A2346" },
] as const;

export const FAQS = [
  { q: "Is AML Halal?", a: "Yes. AML products carry the Halal mark certified by JAKIM, the Department of Islamic Development Malaysia." },
  { q: "Where is AML made?", a: "Products sold in Bangladesh are made by AML Consumer Care Ltd in Dhaka, with the know-how of AML Group, which has made oral and personal care products for more than a decade and a half." },
  { q: "Can I buy AML on this website?", a: "No. AML has no online shop. You can find our products in cosmetic shops and super shops." },
  { q: "How do I know a pack is genuine?", a: "Check the brand name, the Halal mark, and the maker's name and address on the label: AML Consumer Care Ltd, Dhaka, Bangladesh. Our guide above shows what to look for." },
  { q: "Is it safe for children?", a: "We make a kids' range with child-friendly flavours. Always follow the directions on the pack and supervise young children when they brush." },
  { q: "Which products does AML make?", a: "Toothpaste, mouthwash and oral care kits, plus shampoo, body wash, lotion and creams. See the full range in Our products." },
] as const;


export type NewsItem = {
  id: string;
  kind: "News" | "Event";
  when: string;
  title: string;
  summary: string;
  cover: "arrival" | "event" | "halal";
};

/** SAMPLE news and events. Replace with real posts and dates from AML. Cards have no detail pages. */
export const NEWS: NewsItem[] = [
  {
    id: "arrival", kind: "News", when: "Coming soon", cover: "arrival",
    title: "AML products are arriving in shops across Bangladesh",
    summary: "Look for Ziya and Syawo in cosmetic shops and super shops as stock reaches shelves near you.",
  },
  {
    id: "event", kind: "Event", when: "Dates to be announced", cover: "event",
    title: "Meet the AML team at upcoming events",
    summary: "We will share dates and places here as soon as they are confirmed.",
  },
  {
    id: "halal", kind: "News", when: "Coming soon", cover: "halal",
    title: "Why the Halal mark matters when you choose personal care",
    summary: "A short guide to what JAKIM Halal certification means for your family.",
  },
];
