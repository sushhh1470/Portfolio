// ─── Types ────────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  bio: string;
  philosophy: string;
  location: string;
  openToRemote: boolean;
  availability: string;
  email: string;
  phone: string;
  resumeUrl: string;
}

export interface Links {
  github: string;
  linkedin: string;
  email: string;
}

export interface SkillItem {
  name: string;
  devicon?: string;
  simpleSlug?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
}

export type SvgType = "meal" | "safety" | "plant" | "tv";

export interface ProjectItem {
  title: string;
  description: string;
  bullets: string[];
  outcome: string;
  tags: string[];
  github: string;
  demo: string;
  accent: string;
  svgType: SvgType;
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
}

// ─── Content ──────────────────────────────────────────────────────────────────

export const personal: PersonalInfo = {
  name: "Sushmita Koti",
  title: "Project Manager",
  subtitle: "",
  tagline: "User-first thinking. Clinical rigor. Data-driven execution.",
  bio: "I spent six years diagnosing patients before realizing the real bottleneck wasn't clinical skill — it was the system around the patient. That realization drove me to pursue a Master's in Healthcare Informatics and pivot into product, where I could fix systems rather than just work within them.\n\nToday I lead end-to-end clinical trial delivery at AXIS Clinicals across a ~$100M drug development program, while building product prototypes on the side to stay sharp on user research, funnel analysis, and tradeoff thinking.",
  philosophy: "The best products are built by people who understand what's truly at stake for the user. Six years of patient care taught me that better than any framework.",
  location: "Minnesota",
  openToRemote: true,
  availability: "Open to Product Manager Roles",
  email: "Sushmitakoti2051@gmail.com",
  phone: "(203) 361-0927",
  resumeUrl: "/Sushmita_Koti_Resume.pdf", // Place Sushmita_Koti_Resume.pdf in /public/ and set to "/Sushmita_Koti_Resume.pdf"
};

export const links: Links = {
  github: "",
  linkedin: "https://www.linkedin.com/in/sushmitakoti/",
  email: "mailto:Sushmitakoti2051@gmail.com",
};

export const skills: SkillCategory[] = [
  {
    category: "Product Management",
    color: "#2dd4d4",
    items: [
      { name: "Product Strategy", simpleSlug: "miro" },
      { name: "User Research", simpleSlug: "hotjar" },
      { name: "Roadmap Planning", simpleSlug: "notion" },
      { name: "Agile / Scrum", simpleSlug: "atlassian" },
      { name: "A/B Testing", simpleSlug: "optimizely" },
      { name: "Sprint Planning", simpleSlug: "linear" },
    ],
  },
  {
    category: "Analytics & Data",
    color: "#a78bfa",
    items: [
      { name: "Google Analytics", simpleSlug: "googleanalytics" },
      { name: "Tableau", simpleSlug: "tableau" },
      { name: "Power BI", simpleSlug: "powerbi" },
      { name: "Mixpanel", simpleSlug: "mixpanel" },
      { name: "MySQL", devicon: "devicon-mysql-plain" },
      { name: "BigQuery", simpleSlug: "googlebigquery" },
      { name: "Looker Studio", simpleSlug: "looker" },
    ],
  },
  {
    category: "Project Management",
    color: "#f59e0b",
    items: [
      { name: "Jira", devicon: "devicon-jira-plain" },
      { name: "Confluence", devicon: "devicon-confluence-original" },
      { name: "Trello", devicon: "devicon-trello-plain" },
      { name: "Asana", simpleSlug: "asana" },
      { name: "Smartsheet", simpleSlug: "smartsheet" },
      { name: "MS Office", simpleSlug: "microsoftoffice" },
    ],
  },
  {
    category: "Healthcare & Compliance",
    color: "#34d399",
    items: [
      { name: "EHR Systems" },
      { name: "ICH-GCP" },
      { name: "HIPAA" },
      { name: "HITECH" },
      { name: "CITI Certified" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "AXIS Clinicals",
    role: "Associate Project Manager",
    period: "Mar 2025 – Present",
    location: "Dilworth, Minnesota",
    current: true,
    highlights: [
      "Orchestrated cross-functional execution across clinical, regulatory, and operational teams to deliver Phase 1 studies on time for a ~$100M drug development program",
      "Independently owned end-to-end delivery of 4+ clinical trials, achieving 100% contract milestone rate across 20+ deliverables by identifying bottlenecks early and pivoting timelines",
      "Partnered with data scientists and clinical analysts to translate complex datasets into actionable insights, reducing time to insight by ~30%",
      "Drove proactive risk mitigation and timeline coordination with sponsors, ensuring zero missed deadlines across the program",
    ],
  },
  {
    company: "Akhil Multispeciality Dental Clinic",
    role: "Dental Surgeon",
    period: "Feb 2022 – Aug 2023",
    location: "India",
    current: false,
    highlights: [
      "Examined 60+ oral X-rays weekly using EMR systems, applying data analysis to enable early detection and proactive patient intervention",
      "Utilized patient oral health records and treatment outcomes data to identify recovery trends and optimize care strategies",
      "Achieved a 20% reduction in patient recovery time through data-driven treatment optimization protocols",
    ],
  },
  {
    company: "Chagam Dental Care",
    role: "Dental Surgeon",
    period: "Dec 2019 – Feb 2022",
    location: "India",
    current: false,
    highlights: [
      "Diagnosed and treated 50+ patients daily, developing strong pattern recognition skills in a high-volume clinical environment",
      "Conducted qualitative analysis of 1,000+ patient feedback responses, identifying retention and satisfaction trends that informed process redesign",
      "Applied early user research and funnel analysis methodology to improve patient experience and operational efficiency",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Purple Carrot — Product Strategy & Prototype",
    description: "Full product teardown across acquisition, engagement, and retention funnels.",
    bullets: [
      "Audited the end-to-end product and identified 7 friction points across discovery, personalization, engagement, and loyalty",
      "Designed persona-driven meal plans, cuisine-based filters, and visual recipe UX to reduce choice overload and drop-off",
      "Built a gamified loyalty + feedback system to close the retention gap and drive repeat usage",
    ],
    outcome: "7 friction points mapped → 3 retention systems designed and prototyped end-to-end",
    tags: ["Product Strategy", "UX Research", "Funnel Analysis", "Prototyping", "Retention"],
    github: "",
    demo: "https://freshbite.replit.app/",
    accent: "#2dd4d4",
    svgType: "meal",
  },
  {
    title: "Dating App Safety Layer — Prototype",
    description: "Reframed safety as the core retention driver, not a feature afterthought.",
    bullets: [
      "Reframed the problem: dating apps lose users not from bad matches — because users don't feel safe",
      "Getting to Know You Mode — restricts phone/link sharing early; unlocks gradually as trust builds",
      "Discomfort Detector + First Meet Checklist — flags pressure patterns and guides users safely to real-world meetings",
      "Shifted success metric from 'matches made' to 'safe real-world meetings completed'",
    ],
    outcome: "Trust reframed as the core retention metric — not swipe volume or match rate",
    tags: ["Product Design", "Safety Systems", "User Psychology", "Retention", "Prototype"],
    github: "",
    demo: "https://safe-connect--sushmicherry.replit.app/",
    accent: "#f472b6",
    svgType: "safety",
  },
  {
    title: "Pluto TV Replica — Engagement & Retention Design",
    description: "Designed three behavioral features targeting specific session drop-off moments.",
    bullets: [
      "Identified three drop-off drivers: choice paralysis, no social pull, and mood-content mismatch",
      "Heart-to-recommendations engine cuts decision fatigue; social share-to-playlist drives peer-influenced return visits",
      "Mood-based channels (Relax, Comfort & Cozy, Feel Good TV) align content to viewer intent and boost session length",
    ],
    outcome: "3 behavioral loops targeting distinct drop-off moments in the session cycle",
    tags: ["Engagement Design", "Behavioral Design", "Social Features", "Retention", "Prototype"],
    github: "",
    demo: "https://pluto-stream.replit.app/",
    accent: "#8b5cf6",
    svgType: "tv",
  },
  {
    title: "Thistle — Tradeoff Analysis & Product Reasoning",
    description: "Deep tradeoff analysis showing how feature thinking can mask system-level constraints.",
    bullets: [
      "Identified 'lack of satiety' as the #1 driver of negative reviews through systematic review analysis",
      "Proposed a 'Filling Score' to guide meal selection — then stress-tested it against real business constraints",
      "Uncovered revenue cannibalization risk, shifting the analysis from feature thinking to system-level tradeoffs",
    ],
    outcome: "Rejected the easy feature fix — surfaced a deeper pricing and perception constraint",
    tags: ["Product Reasoning", "Tradeoff Analysis", "User Research", "Metric Design"],
    github: "",
    demo: "",
    accent: "#34d399",
    svgType: "plant",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Healthcare Informatics",
    school: "Sacred Heart University",
    location: "Fairfield, Connecticut",
    period: "Sep 2023 – Dec 2024",
  },
  {
    degree: "Bachelor of Dental Sciences",
    school: "GSL Dental College",
    location: "Rajahmundry, India",
    period: "Jul 2014 – Dec 2019",
  },
];
