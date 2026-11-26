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
  { logo: "gmp", w: 353, h: 352, title: "Good Manufacturing Practices", plain: "Made in clean, controlled conditions. AMLION Group earned GMP before Malaysia made it mandatory." },
  { logo: "haccp", w: 233, h: 337, title: "HACCP food safety", plain: "A food-grade safety system, applied to products you put in your mouth." },
  { logo: "brc", w: 246, h: 337, title: "British Retail Consortium", plain: "Trusted as a supplier to British retail brands, one of the strictest markets." },
  { logo: "bsci", w: 519, h: 192, title: "BSCI", plain: "Made in factories that follow fair and safe working conditions." },
  { logo: "kosher", w: 341, h: 340, title: "Kosher certified", plain: "Another independent check that what goes into the product is accounted for." },
];

export const CATEGORIES = ["Oral Care", "Personal Care", "Perfume"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Product = {
  id: string;
  name: string;
  category: Category;
  brand: "Ziya" | "SYAWO";
  variant: string;
  /** Pack sizes, as given by AML (several sizes separated by "/"). */
  size: string;
  /** "Details" bullet list from AML. */
  details: string[];
  /** File in /public/products */
  image: string;
};

/* Shared detail lines, word for word from AML's product feedback, for products that use the same copy. */
const TP_MEDICATED = ["Made with a Malaysian formula using 100% halal ingredients, and medicated for oral care", "Microplastic-free and lab tested"];
const TP_DAILY = ["Regular use twice a day keeps teeth and gums healthy", "Safe for the whole family"];
const TP_HALAL = ["Made with 100% halal ingredients", "Malaysian formula", "Microplastic-free and lab tested"];
const SPRAY = ["Made with 100% halal ingredients", "Malaysian formula", "This is an OTC natural oral spray with no side effects", "Works quickly to relieve throat infection and cough", "Helps fight harmful bacteria", "Instantly removes bad breath, leaving your mouth with a fresh and lively breath"];
const JELLY = ["Made with a Malaysian formula using 100% halal ingredients", "Ensures deep moisturization of the skin", "Maintains the skin's natural protective layer", "Nourishes dry and rough skin from deep within", "Makes skin soft and smooth", "Gives the skin protection and a comfortable feeling", "Suitable for lips, hands, cracked heels, and dry skin", "Helps retain skin moisture", "Dermatologically tested"];
const BODY_WASH = ["100% halal and made with a Korean formula", "Cleans away the body's sweat and odor from throughout the day", "Makes skin soft, smooth, and radiantly bright", "Keeps skin moisturized for a long time", "Keeps you fresh after your bath, with a pleasant fragrance that lifts your mood all day", "Lathers well even with a small amount", "Dermatologically tested", "Skin-type-friendly formulas and fragrances to suit your preference"];
const BODY_MIST = ["100% halal and made with a Korean formula", "No-gas, water-based perfume body mist", "Keeps you feeling fresh despite sweat and a busy day", "The pleasant fragrance instantly draws people close", "A perfume that becomes your identity", "A long-lasting, captivating scent makes you even more attractive"];

/** Products from Feedback/Products/AML-PRODUCT PAGE.docx, in the document's order. */
export const PRODUCTS: Product[] = [
  { id: "ziya-advanced-whitening-toothpaste", name: "Ziya Advanced Whitening Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Medicated Toothpaste", size: "50gm/140gm", image: "ziya-advanced-whitening-toothpaste",
    details: [...TP_MEDICATED, "Advanced whitening formula removes tea and coffee stains and yellowing, leaving teeth bright white", "Strengthens tooth enamel and protects against decay", "Protects teeth from plaque and cavities", "Eliminates bad breath for long-lasting fresh breath", ...TP_DAILY] },
  { id: "ziya-sensitive-care-toothpaste", name: "Ziya Sensitive Care Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Medicated Toothpaste", size: "50gm/140gm", image: "ziya-sensitive-care-toothpaste",
    details: [...TP_MEDICATED, "Quickly relieves sharp tooth sensitivity (tingling) and brings comfort", "Rebuilds weakened enamel and protects against acid erosion", "Protects teeth from infection and sensitivity", "Protects teeth from plaque and cavities", "Eliminates bad breath for long-lasting fresh breath", ...TP_DAILY] },
  { id: "ziya-radiant-fresh-toothpaste-miswak", name: "Ziya Radiant Fresh Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Miswak+Mint Toothpaste", size: "75gm/140gm", image: "ziya-radiant-fresh-toothpaste-miswak",
    details: [...TP_HALAL, "Natural miswak extract keeps teeth and mouth clean", "Makes teeth strong and sturdy", "Rebuilds tooth enamel", "Protects against acid erosion", "Protects against plaque and cavities", "Regular use keeps teeth and gums safe", "Safe for the whole family"] },
  { id: "ziya-enamel-repair-toothpaste", name: "Ziya Enamel Repair Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Calcium+Nano-HAp Toothpaste", size: "75gm/140gm", image: "ziya-enamel-repair-toothpaste",
    details: [...TP_HALAL, "Cleans teeth deeply", "Rebuilds and strengthens weakened enamel", "Protects against acid erosion", "Protects against plaque and cavities", "Mint flavor gives a fresh breath", "Regular use keeps teeth and gums protected", "Safe for the whole family"] },
  { id: "ziya-natural-clean-toothpaste", name: "Ziya Natural Clean Toothpaste", category: "Oral Care", brand: "Ziya", variant: "Salt+Mint Toothpaste", size: "75gm/140gm", image: "ziya-natural-clean-toothpaste",
    details: [...TP_HALAL, "Sea salt deeply cleans teeth", "Sea salt helps prevent enamel erosion", "Protects against plaque and cavities", "Protects against acid erosion", "Ensures long-lasting freshness", "Regular use keeps teeth and gums protected", "Safe for the whole family"] },
  { id: "ziya-cooling-menthol-oral-spray", name: "Ziya Cooling Menthol Oral Spray", category: "Oral Care", brand: "Ziya", variant: "Cooling Menthol Oral Spray", size: "15ml", image: "ziya-cooling-menthol-oral-spray",
    details: [...SPRAY, "Mint flavor gives instant freshness", "Helps keep your mouth moist", "Easy to carry and ready to use anytime"] },
  { id: "ziya-honey-fresh-oral-spray", name: "Ziya Honey Fresh Oral Spray", category: "Oral Care", brand: "Ziya", variant: "Honey Fresh Oral Spray", size: "15ml", image: "ziya-honey-fresh-oral-spray",
    details: [...SPRAY, "Honey flavor gives a sweet feeling", "Helps keep your mouth moist", "Easy to carry and ready to use anytime"] },
  { id: "ziya-kids-oral-spray", name: "Ziya Kids Oral Spray", category: "Oral Care", brand: "Ziya", variant: "Kids Oral Spray", size: "15ml", image: "ziya-kids-oral-spray",
    details: ["Made with 100% halal ingredients", "Malaysian formula", "Special formula for children", "Works quickly to relieve throat infection and cough", "Works against odor-causing bacteria", "Keeps the respiratory tract healthy with natural protection", "Made with New Zealand Manuka flower honey", "Gives a lively, comfortable feeling in the mouth", "Sweet and fresh flavor that kids enjoy", "Suitable for children above 1 year of age"] },
  { id: "ziya-original-petroleum-jelly", name: "Ziya Original Petroleum Jelly", category: "Personal Care", brand: "Ziya", variant: "Original Petroleum Jelly", size: "50ml", image: "ziya-original-petroleum-jelly",
    details: JELLY },
  { id: "ziya-lemon-fresh-petroleum-jelly", name: "Ziya Lemon Fresh Petroleum Jelly", category: "Personal Care", brand: "Ziya", variant: "Lemon Fresh Petroleum Jelly", size: "50ml", image: "ziya-lemon-fresh-petroleum-jelly",
    details: JELLY },
  { id: "ziya-cocoa-butter-petroleum-jelly", name: "Ziya Cocoa Butter Petroleum Jelly", category: "Personal Care", brand: "Ziya", variant: "Cocoa Butter Petroleum Jelly", size: "50ml", image: "ziya-cocoa-butter-petroleum-jelly",
    details: JELLY },
  { id: "ziya-intensive-care-olive-oil", name: "Ziya Intensive Care Olive Oil", category: "Personal Care", brand: "Ziya", variant: "Intensive Care Olive Oil", size: "100ml/250ml/500ml", image: "ziya-intensive-care-olive-oil",
    details: ["Made with a Malaysian formula using premium Spanish olive oil", "100% halal and dermatologically tested", "Ensures deep moisturization of the skin", "Nourishes rough and dry skin from deep within", "Makes skin soft and smooth", "Maintains the skin's natural glow and softness", "Gives skin and hair the protection of Vitamin E", "Helps maintain the skin's natural protective layer"] },
  { id: "syawo-body-wash-rich-moisturizing", name: "SYAWO Body Wash - Rich Moisturizing", category: "Personal Care", brand: "SYAWO", variant: "Rich Moisturizing Body Wash", size: "300ml/1000ml", image: "syawo-body-wash-rich-moisturizing",
    details: BODY_WASH },
  { id: "syawo-body-wash-rich-whitening", name: "SYAWO Body Wash - Rich Whitening", category: "Personal Care", brand: "SYAWO", variant: "Rich Whitening Body Wash", size: "300ml/1000ml", image: "syawo-body-wash-rich-whitening",
    details: BODY_WASH },
  { id: "syawo-body-wash-rich-soothing", name: "SYAWO Body Wash - Rich Soothing", category: "Personal Care", brand: "SYAWO", variant: "Rich Soothing Body Wash", size: "300ml/1000ml", image: "syawo-body-wash-rich-soothing",
    details: BODY_WASH },
  { id: "syawo-body-wash-rich-rejuvenating", name: "SYAWO Body Wash - Rich Rejuvenating", category: "Personal Care", brand: "SYAWO", variant: "Rich Rejuvenating Body Wash", size: "300ml/1000ml", image: "syawo-body-wash-rich-rejuvenating",
    details: BODY_WASH },
  { id: "syawo-body-mist-sensual", name: "SYAWO Body Mist - Sensual", category: "Perfume", brand: "SYAWO", variant: "Sensual Body Mist", size: "50ml", image: "syawo-body-mist-sensual",
    details: BODY_MIST },
  { id: "syawo-body-mist-sophisticated", name: "SYAWO Body Mist - Sophisticated", category: "Perfume", brand: "SYAWO", variant: "Sophisticated Body Mist", size: "50ml", image: "syawo-body-mist-sophisticated",
    details: BODY_MIST },
  { id: "syawo-body-mist-sport", name: "SYAWO Body Mist - Sport", category: "Perfume", brand: "SYAWO", variant: "Sport Body Mist", size: "50ml", image: "syawo-body-mist-sport",
    details: BODY_MIST },
  { id: "syawo-body-mist-summer", name: "SYAWO Body Mist - Summer", category: "Perfume", brand: "SYAWO", variant: "Summer Body Mist", size: "50ml", image: "syawo-body-mist-summer",
    details: BODY_MIST },
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
  { title: "The brand name", text: "Every pack and tube carries our brand name in crisp, consistent colour, a mark of quality you can spot at a glance.", side: "front", x: 43.4, y: 19.9, zoom: 1500 },
  { title: "The Halal mark", text: "Genuine packs carry the official HALAL mark by JAKIM on the front and back.", side: "back", x: 52.5, y: 20.5, zx: 47.1, zy: 14.7, zoom: 1750 },
  { title: "Made by Amlion Malaysia", text: "Check that the label names Amlion Malaysia as the maker, made for AML Consumer Care Ltd.", side: "back", x: 25, y: 85, zx: 33, zy: 85.2, zoom: 1800 },
  { title: "A clean, sealed pack", text: "Every tube is sealed flat with a clean cap, and every box arrives undamaged and neatly printed.", side: "front", x: 69.5, y: 90.5, zx: 69.5, zy: 91.6, zoom: 1500 },
];

export const BENEFITS = [
  { title: "Halal, made to standard", text: "Certified by JAKIM, Malaysia, so you can buy with confidence.", color: "#E9F8F1", ink: "#0B4A35" },
  { title: "Best quality, for better care", text: "Strict quality control, backed by ISO certification, means better care for your family.", color: "#DDEEFF", ink: "#0A2240" },
  { title: "32+ years of expertise", text: "Backed by AMLION Group, which has made oral and personal care products for more than 32 years.", color: "#FFF1D6", ink: "#4A3300" },
  { title: "Trusted in 30+ countries", text: "Used across five continents, now arriving in Bangladesh.", color: "#EDE7FF", ink: "#2A2346" },
] as const;

export const FAQS = [
  { q: "Is our product Halal?", a: "Yes. Our products carry the Halal mark certified by JAKIM, the Department of Islamic Development Malaysia." },
  { q: "Where are our products made?", a: "Products sold in Bangladesh are made by AMLION Group in Malaysia for AML Consumer Care Ltd. AMLION has made oral and personal care products for more than 32 years." },
  { q: "What are our brands?", a: "Ziya is our oral and skin care brand, offering HALAL toothpaste, oral spray, olive oil and petroleum jelly. SYAWO is our personal care brand, offering body wash and body mist for a fresh, confident day." },
  { q: "How do I know the product is genuine?", a: "Check the brand name, the Halal mark, and the maker's name and address on the label." },
  { q: "Is it safe for children?", a: "We make HALAL products for kids under strict quality regulations, so our little ones get the best care." },
  { q: "Can I buy AML on this website?", a: "No. AML has no online shop. You can find our products in cosmetic shops and super shops." },
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
