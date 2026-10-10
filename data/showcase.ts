// Data for the interactive showcase on the home page.

// Tab 1 — real figures from the CV.
export const impactMetrics = [
  { label: "Event revenue growth", value: 60, area: "Revenue & budget", source: "KPA-ITB, Treasurer" },
  { label: "Under-budget delivery", value: 15, area: "Revenue & budget", source: "KPA-ITB, Treasurer" },
  { label: "Campaign targeting accuracy", value: 40, area: "Marketing", source: "PT Inovasi Cipta Digital" },
  { label: "Social engagement, ParaJuara.id", value: 60, area: "Marketing", source: "ParaJuara.id, Marketing Manager" },
  { label: "LinkedIn engagement, ReGrow", value: 60, area: "Marketing", source: "ReGrow Project, Head of Product" },
  { label: "Follower engagement, KM ITB", value: 40, area: "Marketing", source: "Kabinet KM ITB, Publication" },
  { label: "Team performance, KPA HR", value: 35, area: "Team", source: "KPA-ITB, HR Officer" },
  { label: "Content team performance", value: 40, area: "Team", source: "ParaJuara.id, Marketing Manager" },
];

export const labWork = [
  { lab: "Agricultural Microbiology", period: "Feb – Jun 2025", experiments: 12, focus: "Microbial data, PGPR R&D" },
  { lab: "Plant & Livestock Sciences", period: "Aug – Dec 2024", experiments: 10, focus: "Teaching experiments, lab resources" },
  { lab: "Land & Water Resources Eng.", period: "Feb – Jun 2026", experiments: 11, focus: "Field & lab experiments, data analysis" },
];

// Tab 2 — SAMPLE DATA for layout only. Replace with your real TA-1 measurements
// (week, then one value per treatment) before publishing.
export const trialIsSample = true;
export const trialMetrics = {
  "Plant height (cm)": [
    { week: "W1", P1: 4.1, P2: 3.9, P3: 4.0 },
    { week: "W2", P1: 7.2, P2: 6.4, P3: 6.8 },
    { week: "W3", P1: 11.0, P2: 9.5, P3: 10.1 },
    { week: "W4", P1: 15.3, P2: 12.8, P3: 13.6 },
    { week: "W5", P1: 18.9, P2: 15.6, P3: 16.4 },
  ],
  "Leaf count": [
    { week: "W1", P1: 4, P2: 4, P3: 4 },
    { week: "W2", P1: 6, P2: 5, P3: 6 },
    { week: "W3", P1: 9, P2: 7, P3: 8 },
    { week: "W4", P1: 12, P2: 10, P3: 11 },
    { week: "W5", P1: 15, P2: 12, P3: 13 },
  ],
  "SPAD chlorophyll": [
    { week: "W1", P1: 22, P2: 21, P3: 21 },
    { week: "W2", P1: 26, P2: 24, P3: 25 },
    { week: "W3", P1: 30, P2: 27, P3: 28 },
    { week: "W4", P1: 33, P2: 29, P3: 30 },
    { week: "W5", P1: 35, P2: 30, P3: 32 },
  ],
} as const;

export const treatments = {
  P1: "PGPR",
  P2: "Rice-husk biochar",
  P3: "PGPR + biochar",
} as const;
