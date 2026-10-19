/** Shopper-facing content. Anything marked SAMPLE must be replaced with AmLion's real product data before launch. */

export type TrustCard = { code: string; sub: string; color: string; title: string; plain: string };

export const TRUST_FEATURED = {
  title: "Halal certified by JAKIM",
  text: "AmLion is Halal certified by JAKIM, the Department of Islamic Development Malaysia, one of the most widely recognised Halal authorities. Our factory follows Shariah guidelines from start to finish.",
  note: "In Bangladesh, most families look for the Halal mark before they buy toothpaste or personal care. With AmLion, that answer is already on the pack.",
};

export const TRUST_CARDS: TrustCard[] = [
  { code: "ISO", sub: "9001:2015", color: "#1D6BDC", title: "ISO 9001:2015", plain: "Quality is checked at every step, so each tube and bottle matches the last." },
  { code: "GMP", sub: "MOH MALAYSIA", color: "#4B4FD8", title: "Good Manufacturing Practices", plain: "Made in clean, controlled conditions. AmLion earned GMP before Malaysia made it mandatory." },
  { code: "HACCP", sub: "FOOD SAFETY", color: "#0E9384", title: "HACCP food safety", plain: "A food-grade safety system, applied to products you put in your mouth." },
  { code: "BRC", sub: "GLOBAL STD", color: "#0A2240", title: "British Retail Consortium", plain: "Trusted as a supplier to British retail brands, one of the strictest markets." },
  { code: "BSCI", sub: "SOCIAL", color: "#3A4859", title: "BSCI", plain: "Made in factories that follow fair and safe working conditions." },
  { code: "K", sub: "KOSHER", color: "#8A5A00", title: "Kosher certified", plain: "Another independent check that what goes into the product is accounted for." },
];

export type Product = {
  id: string;
  group: "Oral care" | "Hair care" | "Body & skin";
  name: string;
  tagline: string;
  /** Illustration colours for the placeholder pack: sprite id + css custom properties. */
  art: { sym: string; css: string; view?: string };
  specs: { label: string; value: string }[];
};

/** SAMPLE products. Names, sizes and ingredients are placeholders, not AmLion's real range. */
export const PRODUCTS: Product[] = [
  {
    id: "toothpaste-fresh", group: "Oral care", name: "Fresh Mint Toothpaste", tagline: "Everyday clean and fresh breath",
    art: { sym: "i-tube", css: "--t1:#1D6BDC;--t2:#fff;--t3:#EAF2FB" },
    specs: [
      { label: "Pack size", value: "150 g tube" },
      { label: "Key ingredients", value: "Fluoride, mint, calcium" },
      { label: "Benefits", value: "Cavity protection, fresh breath" },
      { label: "How to use", value: "Brush twice a day for two minutes" },
      { label: "Halal", value: "Certified by JAKIM" },
    ],
  },
  {
    id: "toothpaste-kids", group: "Oral care", name: "Kids Fruit Toothpaste", tagline: "A flavour children like to brush with",
    art: { sym: "i-tube", css: "--t1:#F05A7E;--t2:#fff;--t3:#FFE3EA" },
    specs: [
      { label: "Pack size", value: "70 g tube" },
      { label: "Key ingredients", value: "Low-fluoride formula, fruit flavour" },
      { label: "Benefits", value: "Gentle on young teeth" },
      { label: "How to use", value: "A pea-sized amount, with adult supervision" },
      { label: "Halal", value: "Certified by JAKIM" },
    ],
  },
  {
    id: "mouthwash", group: "Oral care", name: "Daily Mouthwash", tagline: "Rinse for lasting freshness",
    art: { sym: "i-rinse", css: "--b1:#13A6B8;--b2:#F4FBFC" },
    specs: [
      { label: "Pack size", value: "500 ml bottle" },
      { label: "Key ingredients", value: "Mint, zinc" },
      { label: "Benefits", value: "Freshness that lasts" },
      { label: "How to use", value: "Rinse 20 ml for 30 seconds, then spit" },
      { label: "Halal", value: "Certified by JAKIM" },
    ],
  },
  {
    id: "shampoo", group: "Hair care", name: "Gentle Care Shampoo", tagline: "Soft, clean hair for the whole family",
    art: { sym: "i-pump", css: "--b1:#8E7CF0;--b2:#2A2346" },
    specs: [
      { label: "Pack size", value: "400 ml pump bottle" },
      { label: "Key ingredients", value: "Mild cleansers, conditioning agents" },
      { label: "Benefits", value: "Cleans gently, leaves hair soft" },
      { label: "How to use", value: "Massage into wet hair, then rinse" },
      { label: "Halal", value: "Certified by JAKIM" },
    ],
  },
  {
    id: "body-wash", group: "Body & skin", name: "Fresh Body Wash", tagline: "A clean, soft feel after every shower",
    art: { sym: "i-bottle", css: "--b1:#F06B9C;--b2:#fff" },
    specs: [
      { label: "Pack size", value: "500 ml bottle" },
      { label: "Key ingredients", value: "Mild cleansers, moisturisers" },
      { label: "Benefits", value: "Cleans without drying" },
      { label: "How to use", value: "Lather on wet skin, then rinse" },
      { label: "Halal", value: "Certified by JAKIM" },
    ],
  },
  {
    id: "lotion", group: "Body & skin", name: "Soft Skin Lotion", tagline: "Daily moisture for dry skin",
    art: { sym: "i-jar", css: "--b1:#FFD2DE;--b2:#F05A7E;--b3:#FFE3EA", view: "0 0 120 100" },
    specs: [
      { label: "Pack size", value: "200 ml" },
      { label: "Key ingredients", value: "Glycerin, vitamin E" },
      { label: "Benefits", value: "Keeps skin soft for hours" },
      { label: "How to use", value: "Apply to clean, dry skin as needed" },
      { label: "Halal", value: "Certified by JAKIM" },
    ],
  },
];

export const GENUINE_CHECKS = [
  { title: "The AmLion name", text: "Look for the AmLion name clearly printed on the front of the pack." },
  { title: "The Halal mark", text: "Genuine packs carry the Halal mark from JAKIM, Malaysia." },
  { title: "Made in Malaysia", text: "The label names AmLion as the maker and gives its Selangor, Malaysia address." },
  { title: "A clean, sealed pack", text: "Tubes and bottles are sealed, undamaged and neatly printed." },
] as const;

export const BENEFITS = [
  { title: "Halal, made to standard", text: "Certified by JAKIM, so you can buy with confidence.", color: "#E9F8F1", ink: "#0B4A35" },
  { title: "Malaysian quality", text: "Made by a company with 15+ years of making oral and personal care.", color: "#DDEEFF", ink: "#0A2240" },
  { title: "Care for the whole family", text: "Toothpaste, mouthwash, hair and skin care, including a kids' range.", color: "#FFF1D6", ink: "#4A3300" },
  { title: "Trusted in 30+ countries", text: "Used across five continents, now arriving in Bangladesh.", color: "#EDE7FF", ink: "#2A2346" },
] as const;

export const FAQS = [
  { q: "Is AmLion Halal?", a: "Yes. AmLion is Halal certified by JAKIM, the Department of Islamic Development Malaysia." },
  { q: "Where is AmLion made?", a: "In our own factories in Selangor, Malaysia, by AmLion Group, which has made oral and personal care products for more than a decade and a half." },
  { q: "Can I buy AmLion on this website?", a: "No. AmLion has no online shop. You can find our products in cosmetic shops and super shops." },
  { q: "How do I know a pack is genuine?", a: "Check the AmLion name, the Halal mark, and the maker's name and Malaysian address on the label. Our guide above shows what to look for." },
  { q: "Is it safe for children?", a: "We make a kids' range with child-friendly flavours. Always follow the directions on the pack and supervise young children when they brush." },
  { q: "Which products does AmLion make?", a: "Toothpaste, mouthwash and oral care kits, plus shampoo, body wash, lotion and creams. See the full range in Our products." },
] as const;

export const DIVISIONS = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"] as const;
export type Division = (typeof DIVISIONS)[number];
export type Stockist = { name: string; area: string; type: "Cosmetic shop" | "Super shop" };

/** Fill in once AmLion supplies real stockists. Empty on purpose: the page shows a "coming soon" state. */
export const STOCKISTS: Partial<Record<Division, Stockist[]>> = {};
