// Awards and certifications, newest first.

export const recognition = [
  {
    date: "2024",
    title: "3rd Winner, “The Landformation” Scientific Paper Competition",
    issuer: "Universitas Padjadjaran",
    level: "National",
    field: "Environmental Restoration",
    description:
      "Compared how well spent mushroom substrate (Agaricus bisporus) and Pseudomonas aeruginosa biodegrade soil contaminated with total petroleum hydrocarbons.",
    impact: "Showed a low-cost bioremediation route that reuses mushroom-farming waste to clean oil-contaminated soil.",
  },
  {
    date: "2023",
    title: "Silver Medal, Research Essay Competition, Soedirman Event of Animal Husbandry 7.0",
    issuer: "Universitas Jenderal Soedirman",
    level: "National",
    field: "Animal Husbandry & Bioenergy",
    description:
      "Proposed biodiesel made from chicken fat with an eggshell-derived catalyst as a response to global boiling.",
    impact: "Turned two poultry by-products, fat and eggshells, into a fuel and its catalyst.",
  },
  {
    date: "2021",
    title: "3rd Runner-up, Young Scientist Competition, Environmental Science",
    issuer: "Pudak Scientific",
    level: "Provincial",
    field: "Environmental Science",
    description:
      "Studied how fermentation volume and time with tape yeast affect bioethanol yield from banana-peel waste for hand sanitizer.",
    impact: "Converted household fruit waste into an antibacterial hand-sanitizer ingredient.",
  },
];

export const certificationCategories = ["Programming", "Data & AI", "Soft skills", "Language"] as const;

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  category: "Programming" | "Data & AI" | "Soft skills" | "Language";
  url?: string; // add the "Show credential" link from LinkedIn to show a button
};

export const certifications: Certification[] = [
  { title: "Introduction to Programming Using Python", issuer: "Dicoding Indonesia", date: "Sep 2026", category: "Programming" },
  { title: "AI for Productivity", issuer: "Dicoding Indonesia", date: "May 2026", category: "Soft skills" },
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI, Stanford University", date: "Sep 2024", category: "Data & AI" },
  { title: "Data Analyst with Python", issuer: "BINUS Group", date: "Aug 2024", category: "Data & AI" },
  { title: "Introduction to Data Analytics", issuer: "RevoU", date: "Aug 2024", category: "Data & AI" },
  { title: "Object Oriented Programming with C++", issuer: "BINUS Group", date: "Jul 2024", category: "Programming" },
  { title: "EF SET English Certificate (67/100)", issuer: "EF Standard English Test", date: "", category: "Language" },
  { title: "English Program", issuer: "Wall Street English Indonesia", date: "Aug 2021", category: "Language" },
];
