// Skills shown on /skills and /resume, in six categories.
// `top` marks the five Top Skills from LinkedIn. `where` shows where the skill was used.

export type Skill = { name: string; where?: string; top?: boolean };
export type SkillGroup = { id: string; title: string; blurb: string; skills: Skill[] };

export const topSkills = ["Python (Programming Language)", "SQL", "Digital Marketing", "Team Leadership", "Research and Development (R&D)"];

// Software & tools, grouped for the Tools category and the scrolling tools strip.
export const toolGroups: { title: string; items: string[] }[] = [
  { title: "Data & analysis", items: ["Python", "SQL", "Query", "R", "JASP", "MATLAB", "Microsoft Excel", "Pivot Tables", "Power BI", "Tableau", "Google Analytics", "Reporting & Dashboards"] },
  { title: "AI & development", items: ["TensorFlow", "scikit-learn", "NumPy", "C++", "React", "Next.js", "AI tools", "Vibe coding"] },
  { title: "Business & productivity", items: ["Microsoft Office", "ERP Software", "Notion", "Miro", "Microsoft Visio", "Meta Ads"] },
  { title: "Design & media", items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere", "SketchUp"] },
  { title: "Geospatial", items: ["ArcGIS", "ArcMap", "Landsat imagery"] },
];

export const tools = toolGroups.flatMap((g) => g.items);

export const skillGroups: SkillGroup[] = [
  {
    id: "tools",
    title: "Tools",
    blurb: "Software I use day to day.",
    skills: [
      { name: "Python (Programming Language)", where: "Data Analyst with Python · Inari Studio Digital", top: true },
      { name: "SQL", where: "KPA-ITB · ITB coursework", top: true },
      { name: "Microsoft Excel", where: "ITB labs · KPA-ITB · 3 other roles" },
      { name: "Power BI", where: "Dashboards & reporting" },
      { name: "R & JASP", where: "Thesis statistics: ANOVA, Duncan, Pearson" },
      { name: "TensorFlow", where: "Inari Studio Digital" },
      { name: "C++", where: "Object Oriented Programming with C++" },
      { name: "ArcGIS / ArcMap", where: "Landsat land-cover coursework" },
      { name: "Adobe Photoshop", where: "Parade Wisuda April ITB 2023" },
      ...toolGroups
        .flatMap((g) => g.items)
        .filter((t) => !["Python", "SQL", "Microsoft Excel", "Power BI", "R", "JASP", "TensorFlow", "C++", "ArcGIS", "ArcMap", "Adobe Photoshop", "Landsat imagery"].includes(t))
        .map((name) => ({ name })),
    ],
  },
  {
    id: "hard",
    title: "Hard skills",
    blurb: "Domain knowledge in analysis, agriculture, research and finance.",
    skills: [
      { name: "Data Analysis", where: "Land & Water Resources Engineering Lab" },
      { name: "Data Analytics", where: "RevoU · BINUS" },
      { name: "Statistical Analysis", where: "ANOVA, Duncan, Pearson in R & JASP" },
      { name: "Data Assessment", where: "Land & Water Resources Engineering Lab" },
      { name: "Precision Agriculture", where: "Land & Water Resources Engineering Lab" },
      { name: "Water Resource Engineering", where: "Land & Water Resources Engineering Lab" },
      { name: "Water & Land Management", where: "Land & Water Resources Engineering Lab" },
      { name: "Mass & Energy Balance", where: "TA-1 and TA-2 theses" },
      { name: "Financial Modelling", where: "IUFS design thesis: NPV, IRR, R/C" },
      { name: "Accounting", where: "KPA-ITB Treasurer" },
      { name: "Treasury Accounting", where: "KPA-ITB" },
      { name: "Managerial Finance", where: "Konser Angklung Rakyat XI" },
      { name: "Cash & Money Management", where: "3 roles at KPA-ITB" },
      { name: "Research Skills", where: "Bioethanol from banana-peel waste" },
      { name: "Scientific Writing", where: "3 award-winning competition papers" },
      { name: "Academic Research", where: "Plant & Livestock Sciences Lab" },
      { name: "Life Sciences", where: "Bioethanol project · Eco Snack Wrap" },
    ],
  },
  {
    id: "technical",
    title: "Technical skills",
    blurb: "Data engineering, AI, geospatial and media production.",
    skills: [
      { name: "Machine Learning", where: "Inari Studio Digital · Stanford / DeepLearning.AI" },
      { name: "Artificial Intelligence (AI)", where: "Inari Studio Digital · Dicoding" },
      { name: "Data Modeling", where: "Inari Studio Digital" },
      { name: "Data Engineering", where: "Inari Studio Digital" },
      { name: "Data Mining", where: "RevoU · BINUS" },
      { name: "Data Warehousing", where: "RevoU" },
      { name: "Databases", where: "RevoU" },
      { name: "Big Data", where: "RevoU · BINUS" },
      { name: "Web Scraping & Image Processing", where: "Inari Studio Digital" },
      { name: "Web Development", where: "Inari Studio Digital" },
      { name: "GIS & Remote Sensing", where: "ArcGIS / Landsat coursework" },
      { name: "IoT Sensors & Smart Farming" },
      { name: "Photography & Event Photography", where: "Parade Wisuda April ITB 2023" },
      { name: "Video Editing", where: "Kabinet KM ITB and 1 other" },
      { name: "Image Editing", where: "Parade Wisuda April ITB 2023" },
    ],
  },
  {
    id: "lab",
    title: "Lab skills",
    blurb: "Rigorous, documented and safe work at the bench.",
    skills: [
      { name: "Research and Development (R&D)", where: "AGAVI · ITB · KPA-ITB", top: true },
      { name: "Microbiology", where: "AGAVI · Agricultural Microbiology Lab" },
      { name: "Industrial Microbiology", where: "AGAVI" },
      { name: "Laboratory Analysis", where: "AGAVI" },
      { name: "Laboratory Skills", where: "Agricultural Microbiology Lab" },
      { name: "Good Laboratory Practice (GLP)", where: "AGAVI" },
      { name: "Quality Control (GMP & BPOM)", where: "AGAVI" },
      { name: "CFU Enumeration & FDA Assay", where: "TA-1 soil microbial analysis" },
      { name: "Experimental Design (CRD)", where: "TA-1 greenhouse trial" },
      { name: "Fermentation", where: "Bioethanol research" },
      { name: "Tissue Culture" },
      { name: "Microscopy" },
      { name: "Spectroscopy" },
      { name: "Chromatography" },
    ],
  },
  {
    id: "business",
    title: "Business & strategy",
    blurb: "Positioning, campaigns, sourcing and decisions that move numbers.",
    skills: [
      { name: "Digital Marketing", where: "ParaJuara.id and 4 other organizations", top: true },
      { name: "Business Analysis", where: "KPA-ITB · Inovasi Cipta Digital" },
      { name: "Competitor Benchmarking", where: "Inovasi Cipta Digital" },
      { name: "Audience Segmentation", where: "Inovasi Cipta Digital" },
      { name: "AHP Decision Analysis", where: "IUFS design thesis" },
      { name: "Marketing & Marketing Management", where: "ParaJuara.id" },
      { name: "Social Media Marketing", where: "ParaJuara.id" },
      { name: "Product Management & Development", where: "ReGrow Project" },
      { name: "Product Marketing", where: "ReGrow Project" },
      { name: "Advertising", where: "HIMAREKTA and 1 other" },
      { name: "Copywriting", where: "Kabinet KM ITB" },
      { name: "Content Creation & Management", where: "Kabinet KM ITB · ParaJuara.id" },
      { name: "Broadcasting", where: "Kabinet KM ITB" },
      { name: "Sponsorship", where: "Konser Angklung Rakyat XI" },
      { name: "Negotiation", where: "9th Agrifasco 2023" },
      { name: "Entrepreneurship", where: "Konser 2025, KPA-ITB" },
      { name: "Procurement", where: "OSKM ITB 2023" },
      { name: "Supply Chain & Logistics", where: "OSKM ITB 2023" },
    ],
  },
  {
    id: "soft",
    title: "Soft skills",
    blurb: "Leading teams, programs and the people inside them.",
    skills: [
      { name: "Team Leadership", where: "KPA-ITB · Growth Chamber Kit", top: true },
      { name: "Project Management", where: "The Growth Chamber Kit" },
      { name: "Communication", where: "Kabinet KM ITB and 2 others" },
      { name: "Public Speaking" },
      { name: "Public Relations", where: "Ethics & Leadership Mentoring, ITB" },
      { name: "Teamwork" },
      { name: "Creativity and Innovation", where: "Growth Chamber Kit · Eco Snack Wrap" },
      { name: "Peer Mentoring & Mentoring", where: "Ethics & Leadership Mentoring, ITB" },
      { name: "Tutoring & Academic Advising", where: "HIMAREKTA Academic Division" },
      { name: "Human Resources (HR)", where: "KPA-ITB" },
      { name: "Human Capital Management", where: "KPA-ITB" },
      { name: "Trustee", where: "KPA-ITB Treasurer" },
    ],
  },
];
