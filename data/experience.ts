// Professional, leadership and volunteering experience, newest first within each type.

export type Experience = {
  organization: string;
  location: string;
  period: string;
  role: string;
  type: "Professional" | "Leadership" | "Volunteering";
  highlight: string;
  details?: string[];
  skills?: string[];
};

const entries: Experience[] = [
  // ---------- Professional ----------
  {
    organization: "PT Inovasi Cipta Digital",
    location: "Bandung, West Java",
    period: "Aug 2026 – Oct 2026",
    role: "Business Development",
    type: "Professional",
    highlight:
      "Benchmarked 6+ AI-based platforms and built audience segments that improved campaign targeting accuracy by 40%; campaigns reached 5,000+ users.",
    details: [
      "Supported go-to-market planning with competitor benchmarking and an audience segmentation framework.",
      "Ran multi-channel campaigns: content calendars, design coordination and Meta Ads optimization.",
    ],
    skills: ["Business Analysis", "Digital Marketing", "Meta Ads"],
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Bandung, West Java",
    period: "Feb 2026 – Jun 2026",
    role: "Land and Water Resources Engineering Laboratory Assistant",
    type: "Professional",
    highlight:
      "Supported 11 laboratory and field experiments on water and land engineering problems in agricultural systems.",
    details: [
      "Strengthened data analysis methods used to formulate water and land engineering problems.",
      "Kept every experiment within safety standards.",
    ],
    skills: ["Water Resource Engineering", "Precision Agriculture", "Data Analysis"],
  },
  {
    organization: "AGAVI (PT Agritama Sinergi Inovasi)",
    location: "Bandung, West Java",
    period: "Jan 2026 – Apr 2026",
    role: "R&D Intern, Microbiology Laboratory & Food Science",
    type: "Professional",
    highlight:
      "Identified signs of microbiological contamination in products against SOPs, and supported food quality under GMP, global standards and BPOM regulations.",
    details: ["Prepared and documented experimental data and product formulations."],
    skills: ["Quality Control", "GLP", "Industrial Microbiology"],
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Bandung, West Java · Hybrid",
    period: "Aug 2025 – Jan 2026",
    role: "Ethics and Leadership Mentoring Assistant",
    type: "Professional",
    highlight: "Mentored first-year (TPB) students through ethics and leadership mentoring sessions.",
    skills: ["Peer Mentoring", "Public Relations"],
  },
  {
    organization: "PT Inari Studio Digital",
    location: "Bandung, West Java · Remote",
    period: "Jul 2025 – Sep 2025",
    role: "Data Scientist & AI Engineer (Intern)",
    type: "Professional",
    highlight:
      "Built a machine-learning project for precision farming: collected data through web scraping and image processing, cleaned it, and trained predictive models.",
    details: [
      "Data collection: web scraping and image processing.",
      "Data cleaning: removed errors and inconsistent records from raw data.",
      "Analysis and modelling: machine-learning models that help businesses understand trends and solve problems.",
    ],
    skills: ["TensorFlow", "Machine Learning", "Data Modeling"],
  },
  {
    organization: "ParaJuara.id",
    location: "Indonesia · Remote",
    period: "May 2025 – Present",
    role: "Manager of Marketing",
    type: "Professional",
    highlight:
      "Raised engagement by 60% across Instagram Reels, Feeds and Stories, and led a 5+ person content team to 100% of content-pillar targets.",
    details: [
      "Used strategic copywriting and visual content to grow engagement.",
      "Brainstormed content with the team, contributing to a 40% improvement in overall team performance.",
    ],
    skills: ["Social Media Marketing", "Marketing Management"],
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Sumedang, West Java",
    period: "Feb 2025 – Jun 2025",
    role: "Agricultural Microbiology Laboratory Assistant",
    type: "Professional",
    highlight:
      "Assisted 12 microbiology experiments and R&D topics, contributing to 5+ research papers on microorganisms in agriculture.",
    details: ["Taught microbial characterization through to the application of microorganisms in agriculture."],
    skills: ["Laboratory Skills", "Microbiology"],
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Sumedang, West Java",
    period: "Aug 2024 – Dec 2024",
    role: "Plant and Livestock Sciences Laboratory Assistant",
    type: "Professional",
    highlight:
      "Supported 10 plant and livestock science experiments and helped develop lab resources, keeping a 100% safety record.",
    skills: ["Academic Research", "Communication"],
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Hybrid",
    period: "Jul 2024 – Nov 2024",
    role: "Pancasila Assistant Lecturer",
    type: "Professional",
    highlight:
      "Assisted first-year students in Pancasila lectures and guided their TAPAK LIMAN community-service project on raising digital literacy.",
    skills: ["Tutoring", "Communication"],
  },

  // ---------- Leadership ----------
  {
    organization: "Keluarga Paduan Angklung ITB (KPA-ITB)",
    location: "Indonesia · Hybrid",
    period: "Jul 2024 – Aug 2025",
    role: "Treasurer and Head of Fundraising, Konser 2025",
    type: "Leadership",
    highlight:
      "Grew seasonal-event revenue by 60% through sponsorships, donations and ticket sales, and finished 15% under budget.",
    details: [
      "Supervised two divisions: sponsorship & donation, and entrepreneurship & ticketing.",
      "Set monthly profit targets for sponsorship and weekly targets for entrepreneurship and ticketing.",
      "Coordinated fundraising with the event and design departments.",
    ],
    skills: ["Entrepreneurship", "Sponsorship", "Managerial Finance"],
  },
  {
    organization: "Keluarga Paduan Angklung ITB (KPA-ITB)",
    location: "Indonesia · Hybrid",
    period: "May 2024 – Dec 2025",
    role: "Treasurer and Entrepreneurship Manager",
    type: "Leadership",
    highlight: "Kept the organization's cash flow positive and tracked actual net cash flow from event activities each month.",
    skills: ["Accounting", "Cash Management"],
  },
  {
    organization: "Kabinet KM ITB",
    location: "Indonesia",
    period: "Jun 2024 – Dec 2024",
    role: "Publications Officer",
    type: "Leadership",
    highlight:
      "Increased follower engagement on Instagram and TikTok by 40%, and built broadcast strategies reaching 2,000+ members.",
    details: ["Created Instagram and TikTok content, wrote broadcast copy and edited short videos."],
    skills: ["Content Management", "Copywriting", "Video Editing"],
  },
  {
    organization: "HIMAREKTA “Agrapana” ITB",
    location: "West Java · Hybrid",
    period: "Sep 2024 – May 2025",
    role: "Head of Product, ReGrow Project",
    type: "Leadership",
    highlight:
      "Raised LinkedIn page engagement by 60% through educational posts and the ReGrow Magazine flipbook.",
    details: ["Managed the project's funds and vendor needs."],
    skills: ["Product Management", "Product Development"],
  },
  {
    organization: "HIMAREKTA “Agrapana” ITB",
    location: "Sumedang, West Java · Hybrid",
    period: "Aug 2024 – Oct 2024",
    role: "Liaison Officer, October 2024 Graduation",
    type: "Leadership",
    highlight:
      "Managed communication between graduates and the internal committee, and coordinated graduates for the October 2024 ceremony.",
    skills: ["Communication", "Public Relations"],
  },
  {
    organization: "Keluarga Paduan Angklung ITB (KPA-ITB)",
    location: "Indonesia · Hybrid",
    period: "Oct 2023 – Feb 2024",
    role: "Head of Fundraising, Konser Angklung Rakyat XI",
    type: "Leadership",
    highlight:
      "Negotiated sponsor agreements, evaluated the impact of fundraising initiatives and coordinated event merchandise with the design division.",
    skills: ["Negotiation", "Sponsorship"],
  },
  {
    organization: "HIMAREKTA “Agrapana” ITB",
    location: "Sumedang, West Java",
    period: "Oct 2023 – May 2024",
    role: "Sponsorship Officer, 9th Agrifasco 2023",
    type: "Leadership",
    highlight: "Negotiated sponsorship agreements and maintained sponsor relationships for the event.",
    skills: ["Negotiation", "Digital Marketing"],
  },
  {
    organization: "HIMAREKTA “Agrapana” ITB",
    location: "Indonesia",
    period: "Oct 2023 – May 2024",
    role: "Staff of Academic Division",
    type: "Leadership",
    highlight: "Compiled the complete academic archive and worked with 5+ tutors to run class tutorials.",
    skills: ["Academic Advising", "Tutoring"],
  },
  {
    organization: "OSKM ITB 2023",
    location: "Indonesia · Hybrid",
    period: "Aug 2023 – Oct 2023",
    role: "Staff of Operational Division",
    type: "Leadership",
    highlight:
      "Sourced and purchased materials for the university orientation, scheduled shipments and deliveries, and proposed changes to improve efficiency.",
    skills: ["Procurement", "Logistics Management"],
  },
  {
    organization: "Keluarga Paduan Angklung ITB (KPA-ITB)",
    location: "Bandung, West Java · Remote",
    period: "Mar 2023 – Jul 2024",
    role: "Human Resources Officer",
    type: "Leadership",
    highlight:
      "Built a survey-based engagement review and performance evaluation system, lifting team performance by 35%.",
    details: [
      "Compiled recruitment, training and performance reports for post-event analysis.",
      "Recognized outstanding contributions and gave constructive feedback.",
    ],
    skills: ["Human Resources (HR)", "Human Capital Management"],
  },
  {
    organization: "Parade Wisuda April ITB 2023",
    location: "Indonesia · On-site",
    period: "Mar 2023 – May 2023",
    role: "Staff of Documentation and Publication",
    type: "Leadership",
    highlight: "Photographed and filmed the graduation parade, then edited the photos and videos for publication.",
    skills: ["Event Photography", "Video Editing", "Adobe Photoshop"],
  },

  // ---------- Volunteering ----------
  {
    organization: "ParaJuara.id",
    location: "Indonesia",
    period: "Dec 2025 – Present",
    role: "“Project Bumi” Assessor",
    type: "Volunteering",
    highlight: "Assessor for a cross-cultural community service project run with Singapore Management University.",
  },
  {
    organization: "SITH-R ITB 2022",
    location: "Indonesia",
    period: "Apr 2023 – May 2023",
    role: "Documentary Director, Social Event “TALAGATHA”",
    type: "Volunteering",
    highlight: "Directed documentation for the cohort's social-service event.",
  },
];

// Sorted newest first within each type, so you can add entries anywhere above.
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const start = (e: Experience) => {
  const [m, y] = e.period.split("–")[0].trim().split(" ");
  return Number(y) * 12 + months.indexOf(m);
};
const order = { Professional: 0, Leadership: 1, Volunteering: 2 } as const;

export const experience: Experience[] = [...entries].sort(
  (a, b) => order[a.type] - order[b.type] || start(b) - start(a)
);
