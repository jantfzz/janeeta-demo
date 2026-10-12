// The three skill groups on the home page (05 · What I work with), ordered as on the resume.
// `projects` are slugs from data/projects.ts and become links.

export const capabilities = [
  {
    title: "Data & analytics skills",
    skills: [
      "Data cleansing & validation",
      "Dashboard development",
      "Business intelligence",
      "Data analytics (R, SQL, Power BI)",
      "Python & C++ (OOP)",
      "Data engineering",
      "Machine learning & predictive models",
      "Web scraping & image processing",
      "Statistical analysis (ANOVA, Duncan)",
      "GIS & remote sensing",
    ],
    projects: ["tomato-leaf-disease-ml", "agri-instrumentation-control", "landsat-land-cover-analysis"],
  },
  {
    title: "Lab skills",
    skills: [
      "Agricultural microbiology",
      "Microbiological experiments",
      "CFU & FDA assays",
      "Contamination checks against SOPs",
      "GMP, GLP & BPOM standards",
      "Product formulation records",
      "Lab safety",
      "Experimental design",
      "Sensors & instrumentation",
    ],
    projects: ["pgpr-biochar-lettuce", "agri-instrumentation-control"],
  },
  {
    title: "Business & strategy skills",
    skills: [
      "Cross-functional collaboration",
      "Stakeholder management",
      "Vendor & agency coordination",
      "Project management",
      "Commercial planning",
      "Business process improvement",
      "Research & development",
      "Competitor benchmarking",
      "Financial modelling & budgeting",
    ],
    projects: ["ai-platform-go-to-market", "kpa-seasonal-event-fundraising", "integrated-urban-farming-system"],
  },
];
