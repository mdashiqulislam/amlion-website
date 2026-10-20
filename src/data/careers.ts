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
  education: string;
  /** SAMPLE posting date, shown on the card and detail page. */
  posted: string;
  deadline: string;
  summary: string;
  about: string;
  does: string[];
  needs: string[];
};

export const JOBS: Job[] = [
  {
    slug: "production-supervisor",
    title: "Production Supervisor",
    dept: "Production",
    location: "Dhaka factory",
    type: "Full-time",
    mode: "On site",
    experience: "3+ years",
    education: "Diploma or bachelor's degree in a technical field",
    posted: "12 Oct 2026",
    deadline: "30 Nov 2026",
    summary: "Lead a shift on the filling and packing lines and keep every batch on time and on standard.",
    about: "You run a shift on our toothpaste and personal care lines. You keep the team safe, the line moving and every batch to the written standard.",
    does: [
      "Plan the shift and assign people to filling, capping, labelling and packing",
      "Keep batch records complete and accurate, and report problems early",
      "Follow hygiene and Halal production rules on the line, every shift",
      "Coach operators and run short daily briefings",
    ],
    needs: [
      "3+ years in FMCG, cosmetics or pharma production",
      "Experience leading a team of 15 or more",
      "Good understanding of GMP and line hygiene",
      "Comfortable with shift work",
    ],
  },
  {
    slug: "qc-officer",
    title: "Quality Control Officer",
    dept: "Quality",
    location: "Dhaka factory",
    type: "Full-time",
    mode: "On site",
    experience: "1+ year",
    education: "BSc in Chemistry, Pharmacy or Microbiology",
    posted: "12 Oct 2026",
    deadline: "30 Nov 2026",
    summary: "Test raw materials and finished packs so what reaches the shelf is the same every time.",
    about: "You are the last check before a pack leaves the line. You test samples, record results and stop a batch when something is not right.",
    does: [
      "Sample and test raw materials, in-process and finished products",
      "Check pack labels, batch codes and seals against the approved artwork",
      "Record results clearly and raise any failure the same day",
      "Keep the lab clean and instruments calibrated",
    ],
    needs: [
      "BSc in Chemistry, Pharmacy, Microbiology or a related field",
      "1+ year in a quality lab (fresh graduates with strong results may apply)",
      "Careful, honest record keeping",
      "Basic English reading and writing",
    ],
  },
  {
    slug: "qa-compliance-executive",
    title: "QA Executive, Halal & ISO Compliance",
    dept: "Quality",
    location: "Dhaka factory",
    type: "Full-time",
    mode: "On site",
    experience: "3+ years",
    education: "BSc in Science, Pharmacy or Engineering",
    posted: "19 Oct 2026",
    deadline: "15 Dec 2026",
    summary: "Keep our Halal, ISO 9001 and GMP documents and audits in order.",
    about: "You look after the systems behind our certificates. You prepare for audits, keep procedures current and help teams follow them.",
    does: [
      "Maintain procedures, records and training logs for Halal, ISO 9001 and GMP",
      "Prepare for and take part in internal and external audits",
      "Track corrective actions until they are closed",
      "Train line and warehouse teams on the rules",
    ],
    needs: [
      "3+ years in quality assurance or compliance in manufacturing",
      "Working knowledge of ISO 9001 and GMP",
      "Clear writing and good attention to detail",
      "Halal certification experience is a plus",
    ],
  },
  {
    slug: "area-sales-manager",
    title: "Area Sales Manager, Super Shops",
    dept: "Sales",
    location: "Dhaka",
    type: "Full-time",
    mode: "Field-based",
    experience: "4+ years",
    education: "Bachelor's degree, any discipline",
    posted: "8 Oct 2026",
    deadline: "30 Nov 2026",
    summary: "Grow AML in super shop chains across Dhaka and keep shelves full and well placed.",
    about: "AML is sold in super shops and cosmetic shops, not online. You build the relationships that put our products on those shelves.",
    does: [
      "Manage listings, orders and shelf space with super shop chains",
      "Visit stores, check stock and fix gaps with the supply team",
      "Agree and track monthly sales targets",
      "Share what shoppers ask for so our range keeps improving",
    ],
    needs: [
      "4+ years in FMCG or personal care sales, ideally modern trade",
      "A strong network in Dhaka super shop chains",
      "Confident with numbers and reports",
      "Own transport preferred",
    ],
  },
  {
    slug: "territory-sales-officer",
    title: "Territory Sales Officer, Cosmetic Shops",
    dept: "Sales",
    location: "Chattogram",
    type: "Full-time",
    mode: "Field-based",
    experience: "2+ years",
    education: "HSC or bachelor's degree",
    posted: "19 Oct 2026",
    deadline: "15 Dec 2026",
    summary: "Open and look after cosmetic shops in your territory, one visit at a time.",
    about: "You are the face of AML for shop owners in Chattogram. You introduce the range, take orders and make sure they come back.",
    does: [
      "Visit assigned cosmetic shops on a fixed weekly route",
      "Introduce new shops to the range and take orders",
      "Keep AML packs neatly displayed and in date",
      "Report stock, prices and competitor activity weekly",
    ],
    needs: [
      "2+ years in field sales, FMCG or cosmetics preferred",
      "Lives in or near Chattogram and knows the market",
      "Motorbike and licence",
      "Friendly, reliable and good with shop owners",
    ],
  },
  {
    slug: "digital-brand-executive",
    title: "Brand Executive, Digital",
    dept: "Marketing",
    location: "Dhaka",
    type: "Full-time",
    mode: "Hybrid",
    experience: "2+ years",
    education: "Bachelor's degree in Marketing, Media or similar",
    posted: "15 Oct 2026",
    deadline: "15 Dec 2026",
    summary: "Tell the AML story to Bangladeshi families on social media and keep shoppers informed.",
    about: "You plan and publish content that helps shoppers know our products, spot genuine packs and find them in a shop near them.",
    does: [
      "Plan and publish weekly content in Bangla and English",
      "Work with the design agency on pack and campaign artwork",
      "Answer shopper questions and pass product issues to the right team",
      "Report on reach and what is working",
    ],
    needs: [
      "2+ years in brand, social or content marketing",
      "Strong Bangla and English writing",
      "Comfortable with Meta Business tools and basic analytics",
      "A portfolio or sample work",
    ],
  },
  {
    slug: "warehouse-logistics-executive",
    title: "Warehouse & Logistics Executive",
    dept: "Supply chain",
    location: "Dhaka factory",
    type: "Full-time",
    mode: "On site",
    experience: "2+ years",
    education: "Bachelor's degree, any discipline",
    posted: "5 Oct 2026",
    deadline: "30 Nov 2026",
    summary: "Keep stock accurate and get orders out to distributors on time.",
    about: "You make sure the right product leaves our warehouse in the right quantity, in good condition and on the day we promised.",
    does: [
      "Receive, store and dispatch finished goods using first-in, first-out",
      "Keep stock records accurate and run regular counts",
      "Plan daily deliveries with transport partners",
      "Follow handling and storage rules that protect pack quality",
    ],
    needs: [
      "2+ years in warehouse or logistics, ideally FMCG",
      "Good with spreadsheets or stock software",
      "Organised and able to work under deadline",
      "Able to supervise a small warehouse team",
    ],
  },
  {
    slug: "accounts-executive",
    title: "Accounts Executive",
    dept: "Finance",
    location: "Dhaka",
    type: "Full-time",
    mode: "On site",
    experience: "2+ years",
    education: "BBA or B.Com in Accounting or Finance",
    posted: "19 Oct 2026",
    deadline: "15 Dec 2026",
    summary: "Handle day-to-day accounts, payables and receivables for AML in Bangladesh.",
    about: "You keep our books accurate and on time, and help the team understand where the money is going.",
    does: [
      "Process invoices, payments and bank reconciliations",
      "Follow up customer receivables with the sales team",
      "Prepare monthly reports for management",
      "Support VAT, tax and audit filings",
    ],
    needs: [
      "BBA or B.Com in Accounting or Finance",
      "2+ years in accounts, ideally in manufacturing or FMCG",
      "Good Excel skills and familiarity with accounting software",
      "Accurate, honest and organised",
    ],
  },
  {
    slug: "production-trainee",
    title: "Production Trainee Programme",
    dept: "Production",
    location: "Dhaka factory",
    type: "Internship",
    mode: "On site",
    experience: "Students and fresh graduates",
    education: "Studying or recently graduated in Science, Engineering or Business",
    posted: "1 Oct 2026",
    deadline: "31 Jan 2027",
    summary: "Six months learning every step of how a toothpaste tube or shampoo bottle gets made.",
    about: "A hands-on programme for students and new graduates. You rotate through filling, packing, quality and the warehouse, with a mentor at each step.",
    does: [
      "Rotate through filling, packing, quality and warehouse teams",
      "Shadow supervisors and learn how a batch is planned and recorded",
      "Complete a small improvement project in your last month",
      "Share what you learn with the team at the end",
    ],
    needs: [
      "Studying or recently graduated in Science, Engineering or Business",
      "Curious, careful and happy to learn on the floor",
      "Able to commit to the full six months",
      "No experience needed",
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

/** Facts below come from the AML website. Add real employee stories, photos and benefits when HR provides them. */
export const PERKS = [
  { title: "Learn from 15+ years of know-how", text: "AML Group has made oral and personal care for more than 15 years. You work alongside people who have done it at scale.", tone: "#DDEEFF" },
  { title: "Work to recognised standards", text: "AML Group works to Halal, ISO 9001:2015 and GMP standards, so you learn how careful, certified production runs.", tone: "#E6F6EE" },
  { title: "Make products families use daily", text: "Toothpaste, body wash and skin care sold in cosmetic shops and super shops across Bangladesh.", tone: "#FFF0D6" },
  { title: "Join a group that sells worldwide", text: "AML Group products are used in more than 30 countries across 5 continents. Bangladesh is the newest market.", tone: "#ECE6FF" },
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
