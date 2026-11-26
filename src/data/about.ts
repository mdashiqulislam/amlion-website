/**
 * About page content, from the client's About feedback document.
 */

export const OVERVIEW = {
  facts: [
    { value: "32+", label: "years of AMLION Group experience in oral and personal care" },
    { value: "30+", label: "countries across 5 continents use AMLION Group products" },
    { value: "Malaysia", label: "where products sold in Bangladesh are made" },
    { value: "Halal", label: "certified by JAKIM, with ISO 9001:2015 and GMP in the group" },
  ],
} as const;

/** Mission and vision from the client's About feedback. */
export const MISSION = "To enrich everyday lives by providing high-quality, innovative and affordable oral and personal care products that promote better hygiene, healthier lifestyles and greater confidence for everyone.";
export const VISION = "To become one of Bangladesh's most trusted and preferred names in oral and personal care, making quality hygiene products accessible to every household while contributing to a healthier, happier and more confident society.";

export const BELIEF = {
  line: "Trusted Care, Better Life",
  text: "Care starts with trust. When a family can rely on what is in the pack, small daily routines like brushing and washing become a little better, and so does life.",
  points: [
    { title: "Trusted", text: "Halal certified, made to quality standards and checked every batch." },
    { title: "Care", text: "Products for the whole family, from toothpaste to body wash and skin care." },
    { title: "Better life", text: "Everyday essentials that make daily routines simple and dependable." },
  ],
} as const;

export type Person = { name: string; role: string; photo?: string };

/** Board and leading team from the client's About feedback, in the order given. Portraits are 5:6 photos in /public/team. */
const photo = (slug: string) => `/team/${slug}.webp`;

export const BOARD: Person[] = [
  { name: "Koek Yee Chuan", role: "Director", photo: photo("koek-yee-chuan") },
  { name: "Anisur Rahman", role: "Director", photo: photo("anisur-rahman") },
];

export const TEAM: Person[] = [
  { name: "Anisur Rahman", role: "CEO", photo: photo("anisur-rahman") },
  { name: "Md. Kamrul Hasan Mehedi", role: "Head of Sales", photo: photo("kamrul-hasan-mehedi") },
  { name: "Khandakar Nazmul Islam", role: "Accounts & Finance", photo: photo("nazmul-islam") },
  { name: "Fayjus Salehin", role: "Distribution", photo: photo("fayjus-salehin") },
  { name: "Md. Shahadat Hossain", role: "Sales & Marketing", photo: photo("shahadat-hossain") },
  { name: "Md. Fahim Ahmed", role: "HR & Admin", photo: photo("fahim-ahmed") },
  { name: "Omar Faruk", role: "Accounts", photo: photo("omar-faruk") },
  { name: "Md. Tawfique Hasan", role: "Branding & Marketing", photo: photo("tawfique-hasan") },
  { name: "Seba Guda", role: "Administration", photo: photo("seba-guda") },
];
