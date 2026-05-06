"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" style={{ background: "var(--bg-surface)" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <span className="section-label">Experience</span>
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
              Career Journey
            </h2>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: 44 }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 19,
                top: 6,
                bottom: 20,
                width: 2,
                background: `linear-gradient(to bottom, var(--accent), var(--border))`,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {experience.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  variants={item}
                  style={{ position: "relative" }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -35,
                      top: 6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: exp.current ? "var(--accent)" : "var(--border-soft)",
                      border: "2px solid var(--bg)",
                      boxShadow: exp.current ? "0 0 0 3px var(--accent-border)" : "none",
                    }}
                  />

                  {/* Card */}
                  <div className="card" style={{ padding: "24px 28px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 8,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            color: "var(--text)",
                            marginBottom: 4,
                          }}
                        >
                          {exp.role}
                        </h3>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--accent)",
                            fontWeight: 500,
                          }}
                        >
                          {exp.company}
                        </div>
                      </div>

                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            letterSpacing: "0.06em",
                            color: "var(--text-dim)",
                            marginBottom: 4,
                          }}
                        >
                          {exp.period}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            color: "var(--text-dim)",
                          }}
                        >
                          {exp.location}
                        </div>
                        {exp.current && (
                          <span
                            style={{
                              display: "inline-block",
                              marginTop: 6,
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.62rem",
                              letterSpacing: "0.08em",
                              color: "var(--accent)",
                              background: "var(--accent-muted)",
                              border: "1px solid var(--accent-border)",
                              padding: "2px 8px",
                              borderRadius: 999,
                            }}
                          >
                            CURRENT
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        height: 1,
                        background: "var(--border)",
                        margin: "16px 0",
                      }}
                    />

                    {/* Highlights */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 12,
                            fontSize: "0.875rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.65,
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              flexShrink: 0,
                              marginTop: 3,
                              fontWeight: 700,
                              fontSize: "0.6rem",
                            }}
                          >
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
