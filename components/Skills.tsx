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
  };

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
