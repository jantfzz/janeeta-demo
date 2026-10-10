// Professional and organizational experience, newest first.

export type Experience = {
  organization: string;
  location: string;
  period: string;
  role: string;
  type: "Professional" | "Leadership";
  highlight: string;
  details?: string[];
};

export const experience: Experience[] = [
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
  },
  {
    organization: "AGAVI (PT Agritama Sinergi Inovasi)",
    location: "Bandung, West Java",
    period: "Jan 2026 – Apr 2026",
    role: "R&D Intern, Microbiology Laboratory & Food Science",
    type: "Professional",
    highlight:
      "Identified signs of microbiological contamination in products against SOPs, and supported food quality under GMP, global standards and BPOM regulations.",
    details: [
      "Prepared and documented experimental data and product formulations.",
    ],
  },
  {
    organization: "PT Inari Studio Digital",
    location: "Bandung, West Java",
    period: "Jul 2025 – Sep 2025",
    role: "Data Scientist & AI Engineer",
    type: "Professional",
    highlight:
      "Collected crop data through web scraping and image processing, cleaned it, and built machine-learning models to predict trends.",
  },
  {
    organization: "ParaJuara.id",
    location: "Bandung, West Java",
    period: "May 2025 – Present",
    role: "Manager of Marketing",
    type: "Professional",
    highlight:
      "Raised engagement by 60% across Instagram Reels, Feeds and Stories, and led a 5+ person content team to 100% of content-pillar targets.",
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Bandung, West Java",
    period: "Feb 2025 – Jun 2025",
    role: "Agricultural Microbiology Laboratory Assistant",
    type: "Professional",
    highlight:
      "Assisted 12 microbiology experiments and R&D topics, contributing to 5+ research papers on microorganisms in agriculture.",
  },
  {
    organization: "Institut Teknologi Bandung",
    location: "Bandung, West Java",
    period: "Aug 2024 – Dec 2024",
    role: "Plant and Livestock Sciences Laboratory Assistant",
    type: "Professional",
    highlight:
      "Supported 10 plant and livestock science experiments and helped develop lab resources, keeping a 100% safety record.",
  },
  {
    organization: "Keluarga Paduan Angklung ITB (KPA-ITB)",
    location: "Bandung, West Java",
    period: "Jul 2024 – Aug 2025",
    role: "Treasurer and Head of Fundraising",
    type: "Leadership",
    highlight:
      "Grew seasonal-event revenue by 60% through sponsorships, donations and ticket sales, and finished 15% under budget.",
  },
  {
    organization: "HIMAREKTA AGRAPANA ITB",
    location: "Bandung, West Java",
    period: "Sep 2024 – May 2025",
    role: "Head of Product, ReGrow Project",
    type: "Leadership",
    highlight:
      "Raised LinkedIn page engagement by 60% through educational posts and the ReGrow Magazine flipbook.",
  },
  {
    organization: "Kabinet KM ITB",
    location: "Bandung, West Java",
    period: "Jun 2024 – Dec 2024",
    role: "Publication Officer",
    type: "Leadership",
    highlight:
      "Increased follower engagement on Instagram and TikTok by 40%, and built broadcast strategies reaching 2,000+ members.",
  },
  {
    organization: "HIMAREKTA AGRAPANA ITB",
    location: "Bandung, West Java",
    period: "Oct 2023 – May 2024",
    role: "Staff of Academic Division",
    type: "Leadership",
    highlight:
      "Compiled the complete academic archive and worked with 5+ tutors to run class tutorials.",
  },
  {
    organization: "Keluarga Paduan Angklung ITB (KPA-ITB)",
    location: "Bandung, West Java",
    period: "Mar 2023 – Jul 2024",
    role: "Human Resources Officer",
    type: "Leadership",
    highlight:
      "Built a survey-based engagement review and performance evaluation system, lifting team performance by 35%.",
  },
];
