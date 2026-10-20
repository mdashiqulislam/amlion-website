/**
 * About page content. Facts come from the AML website. Anything marked PLACEHOLDER (mission and vision wording,
 * board and leadership profiles) is a draft for the client to confirm or replace.
 */

export const OVERVIEW = {
  lede: "AML Consumer Care Ltd makes toothpaste and personal care in Dhaka, Bangladesh, for families who want everyday products they can rely on.",
  body: [
    "We are part of AML Group, which has made oral and personal care for more than 15 years. Our range covers toothpaste, mouthwash and oral care kits, plus hair, body and skin care for the whole family.",
    "Our products are sold in cosmetic shops and super shops across Bangladesh, not on this website. Every pack carries the maker's name and address, so you can see who made it.",
  ],
  facts: [
    { value: "15+", label: "years of AML Group experience in oral and personal care" },
    { value: "30+", label: "countries across 5 continents use AML Group products" },
    { value: "Dhaka", label: "where products sold in Bangladesh are made" },
    { value: "Halal", label: "certified by JAKIM, with ISO 9001:2015 and GMP in the group" },
  ],
} as const;

/** PLACEHOLDER wording. The client must approve or replace both statements. */
export const MISSION = "To make safe, dependable oral and personal care that Bangladeshi families can use with confidence every day.";
export const VISION = "To be the name families in Bangladesh turn to first for everyday care.";

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

/**
 * PLACEHOLDER profiles. The portraits are illustrations (public/team/person-XX.svg) and the positions are sample titles.
 * Replace name, role and photo (a 4:5 portrait in /public/team) with the real people when AML confirms them.
 */
const photo = (n: number) => `/team/person-${String(n).padStart(2, "0")}.svg`;

export const BOARD: Person[] = [
  { name: "Director name", role: "Chairman", photo: photo(1) },
  { name: "Director name", role: "Managing Director", photo: photo(2) },
  { name: "Director name", role: "Director, Finance", photo: photo(3) },
  { name: "Director name", role: "Director, Operations", photo: photo(4) },
];

export const TEAM: Person[] = [
  { name: "Team member name", role: "Head of Production", photo: photo(5) },
  { name: "Team member name", role: "Head of Quality Assurance", photo: photo(6) },
  { name: "Team member name", role: "Head of Sales", photo: photo(7) },
  { name: "Team member name", role: "Head of Marketing", photo: photo(8) },
  { name: "Team member name", role: "Head of Supply Chain", photo: photo(9) },
  { name: "Team member name", role: "Head of Finance", photo: photo(10) },
  { name: "Team member name", role: "Head of Human Resources", photo: photo(11) },
  { name: "Team member name", role: "Head of Research & Development", photo: photo(12) },
];
