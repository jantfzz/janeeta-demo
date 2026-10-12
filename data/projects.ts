// Each project gets a card on /work and its own case-study page at /work/[slug].
// Optional fields:
//   image     main cover photo (put a file in /public and write "/projects/…/main.jpg")
//   gallery   extra images shown as a stack of cards on the case page
//   documents links to the full reports / decks, shown as buttons
//   demo, source. Empty or missing links hide their buttons.
// Projects without an image get a generated, animated illustration.

const g = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "Research" | "Data" | "Business" | "Design";
  year: string;
  organization: string;
  image?: string;
  imageFit?: "cover" | "contain";
  gallery?: string[];
  galleryLabel?: string;
  documents?: { label: string; url: string }[];
  demo?: string;
  source?: string;
  featured?: boolean;
  metrics: { value: string; label: string }[];
  context: string;
  challenge: string;
  role: string;
  approach: string[];
  results: string[];
  tools: string[];
};

export const projects: Project[] = [
  {
    slug: "integrated-urban-farming-system",
    image: "/projects/integrated-urban-farming-system/main.jpg",
    imageFit: "contain",
    gallery: g("integrated-urban-farming-system", 11),
    galleryLabel: "Slides from the TA-2 design presentation",
    documents: [{ label: "TA-2 document", url: "https://drive.google.com/file/d/1_G0Wzy2Qcv9w98Fca7EooFop32m2hcpR/view" }],
    title: "Integrated Urban Farming System",
    summary:
      "A four-subsystem urban farm design for Pasanggrahan, Bandung, chosen by AHP and tested with a 10-year financial model.",
    category: "Design",
    year: "2026",
    organization: "Design thesis (TA-2), ITB",
    featured: true,
    metrics: [
      { value: "1.68", label: "R/C ratio, recommended design" },
      { value: "4", label: "Linked subsystems" },
      { value: "10 yr", label: "Cash-flow horizon" },
    ],
    context:
      "Kelurahan Pasanggrahan in Ujung Berung, Bandung, has land and organic waste but no system linking them into food production. My design thesis asked what a farm there should look like to be both circular and financially viable.",
    challenge:
      "Three design alternatives each looked reasonable on paper. The task was to choose one with a defensible method, then prove it worked physically (mass and energy balance) and financially (cost structure, returns, risk).",
    role:
      "Lead designer and author. I built the alternatives, ran the decision analysis, modelled the balances and the finances, and wrote the full design document.",
    approach: [
      "Defined four connected subsystems: organic fertilizer production, raised-bed lettuce cultivation, post-harvest handling and composting.",
      "Scored three alternatives with the Analytic Hierarchy Process (AHP) against technical, economic and environmental criteria.",
      "Built mass and energy balances for each subsystem so the outputs of one feed the inputs of the next.",
      "Modelled variable and fixed costs, depreciation for 23 assets and a 10-year cash flow, anchored to Bandung 2026 minimum wage and PLN tariffs.",
      "Tested the result with R/C ratio, NPV, IRR and sensitivity analysis.",
    ],
    results: [
      "Recommended Alternative 1, an integrated PGPR + biochar + organic fertilizer system, with an R/C ratio of 1.68.",
      "Outperformed the monoculture lettuce option (R/C 1.60) while closing the organic-waste loop on site.",
      "Delivered a complete design package: layout, workflows, cost tables and an executive summary in Indonesian and English.",
    ],
    tools: ["AHP", "Mass & energy balance", "Financial modelling", "Excel", "Facility layout"],
  },
  {
    slug: "pgpr-biochar-lettuce",
    image: "/projects/pgpr-biochar-lettuce/main.jpg",
    gallery: g("pgpr-biochar-lettuce", 12),
    galleryLabel: "TA-1 slides and lab work",
    documents: [
      {
        label: "Thesis on ITB Digital Library",
        url: "https://digilib.itb.ac.id/gdl/view_data/kuantifikasi-pertumbuhan-hasil-biomassa-dan-neraca-massa-energi-budidaya-tanaman-selada-lactuca-sativa-l-var-new-grand-rapids-dengan-media-tanam-biochar-sekam-padi-dan-plant-growth-promoting-rhizobacteria-pgpr-11422027",
      },
    ],
    title: "PGPR & Rice-Husk Biochar Trial",
    summary:
      "A controlled greenhouse experiment testing whether growth-promoting bacteria and biochar help green lettuce more alone or together.",
    category: "Research",
    year: "2025 – 2026",
    organization: "Experimental thesis (TA-1), ITB",
    metrics: [
      { value: "3", label: "Treatments" },
      { value: "5", label: "Replications each" },
      { value: "6 mo", label: "Trial duration" },
    ],
    context:
      "Plant growth-promoting rhizobacteria (PGPR) and biochar are both promoted as low-input ways to raise yields. Many growers assume combining them gives the best of both.",
    challenge:
      "Test that assumption on green lettuce (Lactuca sativa var. New Grand Rapids) under controlled conditions, and explain the result, not just report it.",
    role:
      "Principal researcher. I designed and ran the trial at the ITB Jatinangor screen house, collected plant, soil and microbial data, and ran the statistics.",
    approach: [
      "Completely Randomized Design with three treatments: PGPR alone, rice-husk biochar alone, and the combination, five replications each.",
      "Tracked growth, biomass and SPAD chlorophyll, and correlated chlorophyll with biomass.",
      "Measured soil microbial activity (FDA hydrolysis) and nitrogen-fixing and phosphate-solubilizing populations (CFU/g) across three growth phases.",
      "Built nitrogen, phosphorus and water mass balances, plus an energy balance for the screen house.",
      "Analysed differences with ANOVA and Duncan's test in R and JASP.",
    ],
    results: [
      "PGPR alone consistently outperformed the PGPR + biochar combination.",
      "Explained the gap through biochar adsorbing PGPR signalling molecules and temporarily immobilizing nitrogen.",
      "Energy balance showed a Bowen ratio of about 4.36, pointing to evaporative stress inside the screen house.",
    ],
    tools: ["R", "JASP", "ANOVA & Duncan", "FDA assay", "CFU enumeration", "SPAD"],
  },
  {
    slug: "tomato-leaf-disease-ml",
    image: "/projects/tomato-leaf-disease-ml/main.jpg",
    gallery: g("tomato-leaf-disease-ml", 8),
    galleryLabel: "Slides and data work from Inari Studio Digital",
    documents: [
      { label: "Task 1 document", url: "https://drive.google.com/file/d/1dmYyZbIVa_OiY4A35MHJjpvkl8HDI1HH/view" },
      { label: "Task 2 document", url: "https://drive.google.com/file/d/13TT5uT5ufeUf3YyoV5g8BpETP_AmaDw9/view" },
    ],
    title: "ML for Precision Farming: Tomato Leaf Disease",
    summary:
      "A machine-learning project that identifies tomato leaf diseases from images, built on scraped and image-processed crop data.",
    category: "Data",
    year: "2025",
    organization: "PT Inari Studio Digital",
    metrics: [
      { value: "2", label: "Data sources: web & images" },
      { value: "CNN", label: "EfficientNet image model" },
      { value: "3 mo", label: "Internship" },
    ],
    context:
      "As a Data Scientist & AI Engineer intern at Inari Studio Digital, I worked on a precision-farming use case: a system that identifies tomato leaf diseases (Sistem Identifikasi Penyakit Daun Tomat Berbasis EfficientNet untuk Aplikasi Precision Farming).",
    challenge:
      "The training data had to be gathered from scattered public sources and images, and arrived noisy and inconsistent. Models are only as good as that input, so collection and cleaning were most of the work.",
    role: "Data Scientist & AI Engineer intern (Jul – Sep 2025, remote).",
    approach: [
      "Collected data through web scraping and image processing.",
      "Cleaned raw data, removing errors and inconsistent records.",
      "Trained an image-classification model on an EfficientNet backbone with TensorFlow.",
      "Built predictive models that help businesses understand trends and solve problems.",
      "Documented the materials and methods for the project presentation.",
    ],
    results: [
      "Turned scattered public crop data into a clean, model-ready dataset.",
      "Delivered a disease-identification model aimed at precision-farming applications.",
    ],
    tools: ["Python", "TensorFlow", "EfficientNet", "Web scraping", "Image processing"],
  },
  {
    slug: "ai-platform-go-to-market",
    title: "Go-to-Market Benchmark for AI Platforms",
    summary:
      "Benchmarked 6+ AI platforms, built audience segments and ran multi-channel campaigns that reached 5,000+ users.",
    category: "Business",
    year: "2026",
    organization: "PT Inovasi Cipta Digital",
    metrics: [
      { value: "+40%", label: "Campaign targeting accuracy" },
      { value: "6+", label: "AI platforms benchmarked" },
      { value: "5,000+", label: "Users reached" },
    ],
    context:
      "PT Inovasi Cipta Digital needed sharper positioning for its AI-based product in a crowded market.",
    challenge:
      "Find where the product stood against competitors and who it should be talking to, then turn that into campaigns.",
    role: "Business Development (Aug – Oct 2026).",
    approach: [
      "Benchmarked competitors across 6+ AI-based platforms.",
      "Developed an audience segmentation framework to guide targeting.",
      "Managed content calendars and coordinated with the design team for multi-channel campaigns.",
      "Supported Meta Ads optimization.",
    ],
    results: [
      "Identified targeting opportunities that improved campaign accuracy by 40%.",
      "Strengthened product positioning against benchmarked competitors.",
      "Campaigns reached 5,000+ users.",
    ],
    tools: ["Competitor benchmarking", "Segmentation", "Meta Ads", "Content planning"],
  },
  {
    slug: "kpa-seasonal-event-fundraising",
    image: "/projects/kpa-seasonal-event-fundraising/main.jpg",
    gallery: g("kpa-seasonal-event-fundraising", 6),
    galleryLabel: "KPA-ITB in Concert 2025",
    title: "Fundraising & Budget for a Seasonal Concert",
    summary:
      "Led fundraising strategy and budget control for KPA-ITB's seasonal event: revenue up 60%, finished 15% under budget.",
    category: "Business",
    year: "2024 – 2025",
    organization: "Keluarga Paduan Angklung ITB",
    metrics: [
      { value: "+60%", label: "Event revenue" },
      { value: "15%", label: "Under budget" },
      { value: "3", label: "Revenue streams" },
    ],
    context:
      "KPA-ITB, the ITB angklung ensemble, funds its seasonal performance through its own fundraising.",
    challenge: "Grow revenue for the event while keeping spending under control.",
    role: "Treasurer and Head of Fundraising Department (Jul 2024 – Aug 2025).",
    approach: [
      "Developed an entrepreneurship strategy across sponsorships, donations and ticket sales.",
      "Owned the event budget and tracked spending against it.",
    ],
    results: [
      "Increased event revenue by 60%.",
      "Delivered the event 15% under budget.",
    ],
    tools: ["Budgeting", "Sponsorship", "Financial tracking", "Excel"],
  },
  {
    slug: "landsat-land-cover-analysis",
    image: "/projects/landsat-land-cover-analysis/main.jpg",
    imageFit: "contain",
    gallery: g("landsat-land-cover-analysis", 9),
    galleryLabel: "Remote Sensing & GIS slides and ArcGIS steps",
    documents: [
      { label: "Task 1 document", url: "https://drive.google.com/file/d/1rAcHtQvm431C_NPpeC_4ojYamNhHMQUb/view" },
      { label: "Task 2: individual imagery assignment", url: "https://drive.google.com/file/d/14Rz69f0LE1hGBokiFFLNX33rY8ngHBk1/view" },
    ],
    title: "Land-Cover Classification with Landsat",
    summary:
      "Classified Landsat imagery to map land cover in Bangka Belitung and land-cover change in Sumedang.",
    category: "Data",
    year: "Coursework",
    organization: "Remote Sensing & GIS, ITB",
    metrics: [
      { value: "2", label: "Study regions" },
      { value: "Landsat", label: "Imagery source" },
      { value: "ArcGIS", label: "Analysis platform" },
    ],
    context:
      "Land-cover maps show where farmland, forest and settlements are changing, which matters for planning and precision agriculture.",
    challenge: "Turn raw satellite imagery into classified, comparable land-cover maps.",
    role: "Analyst for both regional studies.",
    approach: [
      "Processed Landsat imagery in ArcGIS / ArcMap.",
      "Classified land cover for Bangka Belitung.",
      "Compared classifications over time to analyse land-cover change in Sumedang.",
    ],
    results: [
      "Produced land-cover and change maps for both regions.",
      "Summarized the work in a 19-slide GIS portfolio deck.",
    ],
    tools: ["ArcGIS", "ArcMap", "Landsat", "Image classification"],
  },
  {
    slug: "agri-instrumentation-control",
    title: "Agricultural Systems Instrumentation and Control",
    summary:
      "An IoT watering system for mung beans: Wemos D1 sensors stream soil and air data over MQTT to a Node-RED dashboard, and a pump switches on when the soil gets dry.",
    category: "Data",
    year: "2024",
    organization: "Agricultural Systems Instrumentation and Control (BA2204), ITB",
    image: "/projects/agri-instrumentation-control/main.jpg",
    imageFit: "contain",
    documents: [{ label: "Project presentation (PDF)", url: "https://drive.google.com/file/d/1HbuBXtC712W8K7Q8beCuZcqdGQ__E-Li/view" }],
    metrics: [
      { value: "5", label: "Variables measured" },
      { value: "29.4 ± 0.3 °C", label: "Air temperature" },
      { value: "1st order", label: "Dynamic growth model" },
    ],
    context:
      "A group project (Kelompok 12, six students) for ITB's Agricultural Systems Instrumentation and Control course: build a sensor-driven system that monitors a growing plant and waters it automatically.",
    challenge:
      "Make low-cost sensors produce data reliable enough to explain plant growth, run the watering decision automatically, and quantify the error and uncertainty in every measurement.",
    role: "One of six team members in Kelompok 12, working across the build, data collection and analysis.",
    approach: [
      "Wired a Wemos D1 microcontroller with a DHT11 air sensor, a YL-69 soil-moisture probe, a motor driver and a water pump.",
      "Programmed the decision rule in Arduino IDE: if soil moisture is low, run the pump; if it is ideal, skip watering.",
      "Streamed readings over MQTT into Node-RED dashboards and stored them in InfluxDB, then exported to CSV for analysis.",
      "Grew mung beans in andisol soil in Antapani, Bandung, measuring soil moisture, air temperature, humidity, plant height and water added.",
      "Calculated standard deviation and measurement uncertainty, fitted a sigmoid growth curve and a first-order dynamic system model, and compared results with literature.",
    ],
    results: [
      "Air humidity (72.16 ± 0.86)%, temperature (29.41 ± 0.32) °C, soil moisture (81.22 ± 1.93)% and plant height (15.90 ± 1.91) cm.",
      "Found that soil moisture and air humidity significantly affect plant height.",
      "The first-order model predicted growth dynamics with low error.",
      "Flagged inconsistent watering volume (± 2.76 ml) as the main source of instability to fix.",
    ],
    tools: ["Arduino IDE", "Wemos D1", "DHT11 & soil-moisture sensors", "MQTT", "Node-RED", "InfluxDB", "Excel"],
  },
  {
    slug: "growth-chamber-kit",
    image: "/projects/growth-chamber-kit/main.jpg",
    gallery: g("growth-chamber-kit", 9),
    galleryLabel: "Sketches, build and testing",
    title: "The Growth Chamber Kit",
    summary:
      "A team-built plant growth chamber kit, taken from sketch to physical prototype at ITB.",
    category: "Design",
    year: "2023",
    organization: "Institut Teknologi Bandung",
    metrics: [
      { value: "3 mo", label: "Mar – May 2023" },
      { value: "Team", label: "Project lead role" },
      { value: "Build", label: "Physical prototype" },
    ],
    context:
      "An ITB team project to build a growth chamber: an enclosed, controlled environment for growing plants.",
    challenge:
      "Take the chamber from sketch to a working physical kit within one semester, as a team.",
    role: "Team leader and project manager.",
    approach: [
      "Planned the project and coordinated the team through design and assembly.",
      "Sketched the chamber layout and component placement.",
      "Built the physical kit with the team.",
    ],
    results: ["Delivered a working growth chamber prototype within the semester."],
    tools: ["Project management", "Project engineering", "Team leadership", "Prototyping"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Smaller projects listed under "More projects" on /work (no case study page).
export const moreProjects = [
  { title: "Bioethanol from Banana-Peel Waste for Hand Sanitizer", year: "2021", note: "Antibacterial agent research · 3rd Runner-up, Young Scientist Competition" },
  { title: "Eco Snack Wrap", year: "2020", note: "Zero-waste project · life sciences" },
];
