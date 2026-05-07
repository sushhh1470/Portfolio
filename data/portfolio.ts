// ─── Types ────────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  bio: string;
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
  bio: "I'm a product-focused professional with a Master's in Healthcare Informatics and 4+ years bridging clinical operations, data analysis, and product strategy. I've led end-to-end delivery of clinical trials for a ~$100M drug development program and built product interventions spanning meal personalization systems to safety-first app features, grounded in user research and measurable outcomes.",
  location: "Minnesota",
  openToRemote: true,
  availability: "Open to Product Manager Roles",
  email: "Sushmitakoti2051@gmail.com",
  phone: "(203) 361-0927",
  resumeUrl: "/Sushmita_Koti_Resume.pdf", // Place Sushmita_Koti_Resume.pdf in /public/ and set to "/Sushmita_Koti_Resume.pdf"
};

export const links: Links = {
  github: "",
  linkedin: "", // Fill in: https://linkedin.com/in/sushmitakoti
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
    period: "Mar 2024 – Present",
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
    description:
      "Led a full product teardown identifying 7 critical friction points across acquisition, engagement, and retention funnels. Designed scalable interventions: persona-based meal personalization, visual-first recipe UX, a gamified feedback-to-rewards loop, and a 'Plant Seeds' loyalty system. Prototyped an end-to-end interactive experience to validate usability.",
    tags: ["Product Strategy", "UX Research", "Funnel Analysis", "Prototyping", "Retention"],
    github: "",
    demo: "https://freshbite.replit.app/",
    accent: "#2dd4d4",
    svgType: "meal",
  },
  {
    title: "Dating App Safety Layer — Prototype",
    description:
      "Reframed safety as the core retention driver — positioning trust, not match volume, as the key constraint. Designed a multi-layer safety system addressing critical vulnerability moments: Getting to Know You Mode, First Meet Checklist, and Discomfort Detection System. Validated that psychological safety directly drives retention and real-world interaction conversion.",
    tags: ["Product Design", "Safety Systems", "User Psychology", "Retention", "Prototype"],
    github: "",
    demo: "https://safe-connect--sushmicherry.replit.app/",
    accent: "#f472b6",
    svgType: "safety",
  },
  {
    title: "Pluto TV Replica — Engagement & Retention Design",
    description:
      "Designed and built a streaming platform replica with three engagement features: a 'My Playlist' system where hearting content triggers 1–2 curated recommendations to reduce decision fatigue; a social share-to-playlist feature that adds shared content to friends' playlists, driving peer-influenced return visits; and mood-based channels ('Relax', 'Comfort & Cozy', 'Feel Good TV') to align content with viewer intent and boost session length.",
    tags: ["Engagement Design", "Behavioral Design", "Social Features", "Retention", "Prototype"],
    github: "",
    demo: "https://pluto-stream.replit.app/",
    accent: "#8b5cf6",
    svgType: "tv",
  },
  {
    title: "Thistle — Product Problem Solving & Tradeoff Analysis",
    description:
      "Identified 'lack of satiety' as the dominant driver of negative reviews and mapped it to core user dissatisfaction patterns. Proposed a 'Filling Score' mechanism to guide meal selection, then stress-tested it against business constraints — uncovering risks of revenue cannibalization and subjectivity bias, shifting the analysis from feature thinking to system-level tradeoff evaluation.",
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
