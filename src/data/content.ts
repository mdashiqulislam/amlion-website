export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact us" },
] as const;

export const CERT_CHIPS = [
  { label: "Halal · JAKIM", halal: true },
  { label: "ISO 9001:2015" },
  { label: "GMP" },
  { label: "HACCP" },
  { label: "BRC" },
  { label: "BSCI" },
  { label: "Kosher" },
] as const;

export type Cert = { code: string; sub: string; color: string; title: string; text: string };

export const CERTS: Cert[] = [
  { code: "ISO", sub: "9001:2015", color: "#1D6BDC", title: "ISO 9001:2015 quality management", text: "Shows our quality system is effective and productive, cutting waste while delivering on time and at the highest quality." },
  { code: "HACCP", sub: "FOOD SAFETY", color: "#0E9384", title: "Hazard Analysis Critical Control Point", text: "A standard certification for food manufacturers. Our process was strong enough to earn it for oral care production." },
  { code: "GMP", sub: "MOH MALAYSIA", color: "#4B4FD8", title: "Good Manufacturing Practices", text: "We were among the first manufacturers awarded GMP, before Malaysia's Ministry of Health made it mandatory." },
  { code: "BRC", sub: "GLOBAL STD", color: "#0A2240", title: "British Retail Consortium", text: "Recognises AmLion as a preferred manufacturing supplier for private-label brands in the British retail market." },
  { code: "BSCI", sub: "SOCIAL", color: "#3A4859", title: "Business Social Compliance Initiative", text: "A supply-chain system that drives social compliance and better working conditions in the factories behind your products." },
  { code: "K", sub: "KOSHER", color: "#8A5A00", title: "Kosher certification", text: "Confirms our products follow kosher food laws, opening more retail markets for your brand." },
];

export type Country = { name: string; code: string; lat: number; lon: number };

export const HQ = { lat: 3.1, lon: 101.6 };

export const COUNTRIES: Country[] = [
  { name: "Bangladesh", code: "BD", lat: 23.7, lon: 90.4 },
  { name: "Australia", code: "AU", lat: -33.9, lon: 151.2 },
  { name: "Belgium", code: "BE", lat: 50.8, lon: 4.4 },
  { name: "Cambodia", code: "KH", lat: 11.6, lon: 104.9 },
  { name: "Canada", code: "CA", lat: 43.7, lon: -79.4 },
  { name: "China", code: "CN", lat: 31.2, lon: 121.5 },
  { name: "Denmark", code: "DK", lat: 55.7, lon: 12.6 },
  { name: "France", code: "FR", lat: 48.9, lon: 2.3 },
  { name: "Hong Kong", code: "HK", lat: 22.3, lon: 114.2 },
  { name: "India", code: "IN", lat: 19.1, lon: 72.9 },
  { name: "Indonesia", code: "ID", lat: -6.2, lon: 106.8 },
  { name: "Kenya", code: "KE", lat: -1.3, lon: 36.8 },
  { name: "New Zealand", code: "NZ", lat: -36.8, lon: 174.8 },
  { name: "Norway", code: "NO", lat: 59.9, lon: 10.8 },
  { name: "Philippines", code: "PH", lat: 14.6, lon: 121 },
  { name: "Singapore", code: "SG", lat: 1.35, lon: 103.8 },
  { name: "Taiwan", code: "TW", lat: 25, lon: 121.5 },
  { name: "Thailand", code: "TH", lat: 13.8, lon: 100.5 },
  { name: "Türkiye", code: "TR", lat: 41, lon: 29 },
  { name: "UAE", code: "AE", lat: 25.2, lon: 55.3 },
  { name: "United Kingdom", code: "GB", lat: 51.5, lon: -0.1 },
  { name: "United States", code: "US", lat: 40.7, lon: -74 },
  { name: "Vietnam", code: "VN", lat: 10.8, lon: 106.7 },
  { name: "Zimbabwe", code: "ZW", lat: -17.8, lon: 31 },
];

/** Land coverage per 5° latitude band, as [fromLon, toLon] ranges. Drawn as a dot grid. */
export const LAND: Record<string, [number, number][]> = {
  "72.5": [[-160, -75], [-55, -20], [55, 140]],
  "67.5": [[-165, -60], [-50, -25], [15, 180]],
  "62.5": [[-165, -60], [-50, -42], [5, 180]],
  "57.5": [[-160, -95], [-80, -62], [-7, -1], [5, 165]],
  "52.5": [[-130, -58], [-10, 2], [4, 142]],
  "47.5": [[-125, -55], [-5, 145]],
  "42.5": [[-124, -70], [-9, 30], [35, 135], [140, 145]],
  "37.5": [[-123, -76], [-9, 0], [10, 18], [24, 128], [133, 141]],
  "32.5": [[-118, -80], [-9, 35], [44, 121], [129, 135]],
  "27.5": [[-112, -81], [-15, 35], [40, 56], [60, 121]],
  "22.5": [[-107, -97], [-80, -74], [-17, 38], [42, 59], [68, 91], [94, 116]],
  "17.5": [[-103, -88], [-17, 42], [43, 53], [73, 85], [95, 108], [120, 123]],
  "12.5": [[-90, -83], [-17, 44], [75, 80], [98, 109], [121, 125]],
  "7.5": [[-80, -74], [-13, 48], [80, 82], [98, 103], [117, 126]],
  "2.5": [[-79, -50], [8, 43], [100, 105], [109, 119]],
  "-2.5": [[-80, -40], [10, 41], [101, 106], [110, 117], [120, 125], [132, 141]],
  "-7.5": [[-80, -35], [12, 40], [106, 115], [131, 150]],
  "-12.5": [[-77, -38], [13, 40], [44, 50], [126, 142]],
  "-17.5": [[-72, -40], [12, 38], [44, 50], [120, 146]],
  "-22.5": [[-70, -42], [14, 35], [45, 48], [114, 150]],
  "-27.5": [[-70, -48], [15, 32], [114, 153]],
  "-32.5": [[-72, -53], [18, 28], [116, 152]],
  "-37.5": [[-73, -57], [140, 150], [174, 178]],
  "-42.5": [[-73, -63], [145, 148], [170, 174]],
  "-47.5": [[-75, -66], [167, 170]],
  "-52.5": [[-75, -68]],
};

export const BELT_ITEMS = [
  { sym: "i-tube", style: "--t1:#1D6BDC" },
  { sym: "i-rinse", style: "--b1:#13A6B8;--b2:#fff" },
  { sym: "i-tube", style: "--t1:#F05A7E;--t3:#FFE3EA" },
  { sym: "i-pump", style: "--b1:#8E7CF0;--b2:#2A2346" },
  { sym: "i-tube", style: "--t1:#D6FD70;--t2:#0A2240" },
  { sym: "i-bottle", style: "--b1:#F5A524" },
  { sym: "i-tube", style: "--t1:#12805C" },
  { sym: "i-pump", style: "--b1:#FFFFFF;--b2:#1C9BD7;--b3:#DDEEFF" },
];

export const PRODUCT_TYPES = ["Toothpaste", "Mouthwash", "Shampoo & body wash", "Lotion & cream", "Gift sets", "Samples & catalogue"];

export const CONTACT = {
  phone: "+603-6156 5810",
  email: "enquiries@amlion.com.my",
  hours: "Mon to Fri, 8.30am to 5.30pm (MYT)",
  entities: ["AmLion Toothpaste Mfg. Sdn Bhd", "AmLion Personal Care Mfg. Sdn Bhd", "AmLion Retail Connection Sdn Bhd"],
  address: ["Lot 4, Gate 4, Jalan Teknologi 3/4,", "Taman Sains Selangor, Kota Damansara,", "47810 Petaling Jaya,", "Selangor Darul Ehsan, Malaysia"],
};
