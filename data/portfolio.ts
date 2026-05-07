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
      "Mapped 7 critical friction points across the full user funnel",
      "Identified root cause: users felt unrewarded for staying — recipe polish alone wouldn't fix it",
      "Designed persona-based meal personalization to reduce early drop-off at onboarding",
      "Built a visual-first recipe UX and gamified feedback-to-rewards loop for engagement",
      "Created 'Plant Seeds' loyalty system to close the long-term retention gap",
      "Key tradeoff: loyalty system added complexity but addressed the root cause, not symptoms",
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
      "Identified that most platforms optimize for match volume — but trust is the real growth constraint",
      "Mapped the most vulnerable moments in the user journey where safety concerns cause drop-off",
      "Designed Getting to Know You Mode to build trust before users meet in person",
      "Built First Meet Checklist and Discomfort Detection System for real-world safety",
      "Reframed success metric from 'matches made' to 'safe real-world meetings completed'",
      "Key insight: reframing the north star changed every design decision downstream",
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
      "Identified three root causes: choice paralysis, lack of peer influence, and mood-content mismatch",
      "Built heart-to-recommendations engine — hearting content triggers 1–2 curated suggestions",
      "Designed social share-to-playlist feature: shared content lands in friends' playlists, driving return visits",
      "Created mood-based channels (Relax, Comfort & Cozy, Feel Good TV) to align content with viewer intent",
      "Each feature targets a distinct drop-off moment rather than adding passive noise to the interface",
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
      "Analyzed negative reviews and identified 'lack of satiety' as the dominant dissatisfaction driver",
      "Mapped the pattern to core behavior: users chose meals that looked good but didn't fill them",
      "Proposed a 'Filling Score' mechanism to guide meal selection at the point of decision",
      "Stress-tested the solution — uncovered revenue cannibalization risk (users skipping premium meals)",
      "Identified subjectivity bias as a second constraint: satiety is personal and hard to standardize",
      "Conclusion: shifted framing from 'add a feature' to 'what system constraint makes this hard to solve?'",
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
