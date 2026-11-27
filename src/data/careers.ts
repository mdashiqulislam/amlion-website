/**
 * SAMPLE career content. Roles, requirements, deadlines and perks are placeholders written to
 * show the page working; replace them with AML's real openings and HR policies before launch.
 */

export const DEPARTMENTS = ["Production", "Quality", "Sales", "Marketing", "Supply chain", "Finance"] as const;
export type Department = (typeof DEPARTMENTS)[number];

export type Job = {
  slug: string;
  title: string;
  dept: Department | "General";
  location: string;
  type: "Full-time" | "Internship";
  /** On site, Field-based or Hybrid. */
  mode: string;
  experience: string;
  /** Shown under Experience on the card and in the job page facts. */
  salary?: string;
  education: string;
  /** SAMPLE posting date, shown on the card and detail page. */
  posted: string;
  deadline: string;
  summary: string;
  about: string;
  does: string[];
  needs: string[];
};

/** Client feedback (Feedback/Career/AML-CARRER PAGE.docx): one open role only, with a salary range under experience. */
export const JOBS: Job[] = [
  {
    slug: "sales-executive",
    title: "Sales Executive",
    dept: "Sales",
    location: "All Over Bangladesh",
    type: "Full-time",
    mode: "Field-based",
    experience: "3+ years",
    /** NOT IN THE FEEDBACK: a market-based figure. Confirm the real range with AML HR before going live. */
    salary: "Negotiable",
    education: "Bachelor's Degree",
    posted: "25 Nov 2026",
    deadline: "30 December 2026",
    summary: "Grow AML's brands in cosmetic shops and super shops and build strong relationships with retailers.",
    about: "AML is sold in cosmetic shops and super shops, not online. You build the relationships that put ZIYA and SYAWO products on those shelves and keep them there.",
    does: [
      "Visit cosmetic shops and super shops in your area on a planned route",
      "Introduce new shops to the range and take orders",
      "Keep AML packs well displayed, in stock and in date",
      "Agree and track monthly sales targets",
      "Report stock, prices and competitor activity every week",
    ],
    needs: [
      "3+ years in FMCG, cosmetics or personal care sales",
      "A bachelor's degree in any discipline",
      "Willing to travel and work in the field",
      "Confident with shop owners, numbers and simple reports",
    ],
  },
];

export const GENERAL: Job = {
  slug: "general-application",
  title: "General application",
  dept: "General",
  location: "Bangladesh",
  type: "Full-time",
  mode: "Any",
  experience: "Any",
  education: "Any",
  posted: "",
  deadline: "Open",
  summary: "Send us your CV and we will keep it on file.",
  about: "",
  does: [],
  needs: [],
};

/** Titles and text from the client's Career feedback (Feedback/Career/AML-CARRER PAGE.docx), word for word. */
export const PERKS = [
  { title: "Be Part of Something New", text: "Highlights the opportunity to build a startup together.", tone: "#DDEEFF" },
  { title: "Learn from Global Experience", text: "Connects AML with AmLion Group's heritage.", tone: "#E6F6EE" },
  { title: "Make an Everyday Difference", text: "Communicates the purpose of an FMCG personal care business.", tone: "#FFF0D6" },
  { title: "Grow with Our Expanding Team", text: "Attracts candidates interested in future opportunities.", tone: "#ECE6FF" },
] as const;

/** PLACEHOLDER. Confirm every step and any timing with the recruitment team before launch. */
export const STEPS = [
  { title: "Apply online", does: "You choose a role and send your CV and contact details.", expect: "No account needed. It takes about five minutes." },
  { title: "Application review", does: "The recruitment team checks your application against the role.", expect: "We contact you if you are shortlisted." },
  { title: "Interview or assessment", does: "Shortlisted candidates speak with the team, and some roles include a short task.", expect: "We tell you the format before you come." },
  { title: "Offer and onboarding", does: "Successful candidates receive an offer and joining details.", expect: "Your manager and HR guide your first days." },
] as const;

/** PLACEHOLDER benefit headings. HR must supply the real terms; they are shown as "to be confirmed" until then. */
export const BENEFIT_ITEMS = ["Salary and bonus", "Leave", "Medical or insurance cover", "Training and development"] as const;

/** What the application form actually collects. */
export const APPLY_REQUIREMENTS = [
  "Full name",
  "Phone or WhatsApp number",
  "Email address",
  "Your CV as a PDF or Word file, up to 5 MB",
] as const;
