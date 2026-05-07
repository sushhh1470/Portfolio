"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, type SkillItem } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Inline SVG icons for skills with no CDN icon
const inlineSvgIcons: Record<string, React.ReactNode> = {
  "EHR Systems": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M7 12 l2-3 l2 4 l1.5-2.5 l1.5 1.5" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "HIPAA": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  "HITECH": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <line x1="10" y1="7" x2="10" y2="4" /><line x1="14" y1="7" x2="14" y2="4" />
      <line x1="10" y1="20" x2="10" y2="17" /><line x1="14" y1="20" x2="14" y2="17" />
      <line x1="7" y1="10" x2="4" y2="10" /><line x1="7" y1="14" x2="4" y2="14" />
      <line x1="17" y1="10" x2="20" y2="10" /><line x1="17" y1="14" x2="20" y2="14" />
    </svg>
  ),
  "ICH-GCP": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  "CITI Certified": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  // Analytics tools
  "Tableau": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round">
      <rect x="4"    y="10" width="3.5" height="11" rx="1" opacity="0.75" />
      <rect x="10.3" y="5"  width="3.5" height="16" rx="1" opacity="0.88" />
      <rect x="16.5" y="2"  width="3.5" height="19" rx="1" />
    </svg>
  ),
  "Power BI": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round">
      <rect x="3"    y="14" width="4" height="7"  rx="1" opacity="0.55" />
      <rect x="10"   y="9"  width="4" height="12" rx="1" opacity="0.75" />
      <rect x="17"   y="4"  width="4" height="17" rx="1" />
    </svg>
  ),
  // PM tools
  "A/B Testing": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="7"  cy="12" r="4.5" />
      <circle cx="17" cy="12" r="4.5" />
      <line x1="11.5" y1="9"  x2="12.5" y2="9"  />
      <line x1="11.5" y1="15" x2="12.5" y2="15" />
    </svg>
  ),
  "Confluence": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 16 C7 16 7 8 12 8" />
      <path d="M21 16 C17 16 17 8 12 8" />
      <path d="M3 8  C7 8  7 16 12 16" />
      <path d="M21 8  C17 8  17 16 12 16" />
    </svg>
  ),
  "Smartsheet": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3"  y1="9"  x2="21" y2="9"  />
      <line x1="3"  y1="15" x2="21" y2="15" />
      <line x1="9"  y1="9"  x2="9"  y2="21" />
    </svg>
  ),
  "MS Office": (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l7 2v12l-7 2V4z" />
      <path d="M11 6h9v12h-9" />
      <line x1="14" y1="10" x2="17" y2="10" />
      <line x1="14" y1="14" x2="17" y2="14" />
    </svg>
  ),
};

function SkillIcon({ skill, color }: { skill: SkillItem; color: string }) {
  const boxStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: color + "18",
    border: `1px solid ${color}35`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
    color,
  };

  if (inlineSvgIcons[skill.name]) {
    return <div style={boxStyle}>{inlineSvgIcons[skill.name]}</div>;
  }

  if (skill.devicon) {
    return (
      <div style={boxStyle}>
        <i
          className={skill.devicon}
          style={{ fontSize: "1.35rem", color }}
        />
      </div>
    );
  }

  if (skill.simpleSlug) {
    const hex = color.replace("#", "");
    const iconUrl = `https://cdn.simpleicons.org/${skill.simpleSlug}/${hex}`;
    return (
      <div style={boxStyle}>
        <span
          style={{
            width: 22,
            height: 22,
            backgroundImage: `url(${iconUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "block",
          }}
        />
      </div>
    );
  }

  // Text fallback
  const initials = skill.name
    .split(/[\s/\-]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div style={boxStyle}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          fontWeight: 700,
          color,
          letterSpacing: "0.04em",
        }}
      >
        {initials}
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <span className="section-label">Skills</span>
            <div className="accent-line" />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                fontWeight: 700,
                color: "var(--text)",
                marginTop: 16,
                letterSpacing: "-0.02em",
              }}
            >
              Tools & Expertise
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {skills.map((cat) => (
              <motion.div key={cat.category} variants={item}>
                <div
                  className="card"
                  style={{ padding: "24px", height: "100%" }}
                >
                  {/* Category header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 20,
                        borderRadius: 2,
                        background: cat.color,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: cat.color,
                      }}
                    >
                      {cat.category}
                    </span>
                  </div>

                  {/* Skill items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <SkillIcon skill={skill} color={cat.color} />
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--text-muted)",
                            fontWeight: 400,
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
