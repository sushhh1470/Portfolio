"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" style={{ background: "var(--bg-surface)" }}>
      <div className="section-container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          <motion.div variants={fadeLeft} style={{ marginBottom: 56 }}>
            <span className="section-label">Experience</span>
            <div className="accent-line" />
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 500,
              color: "var(--text)",
              marginTop: 16,
              letterSpacing: "-0.02em",
            }}>
              Career Journey
            </h2>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: 44 }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: 19,
              top: 6,
              bottom: 20,
              width: 1,
              background: `linear-gradient(to bottom, var(--accent), var(--border))`,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {experience.map((exp, i) => (
                <motion.div key={`${exp.company}-${i}`} variants={fadeLeft} style={{ position: "relative" }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: -35,
                    top: 7,
                    ...(exp.current
                      ? { width: 12, height: 12, background: "var(--accent)", borderRadius: "50%", border: "2px solid var(--bg)", boxShadow: "0 0 0 3px var(--accent-border)" }
                      : { width: 12, height: 12, background: "var(--border-soft)", borderRadius: "50%", border: "2px solid var(--bg)" }
                    ),
                  }} />

                  <div className="card" style={{ padding: "24px 28px" }}>
                    {/* Header */}
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 8,
                    }}>
                      <div>
                        <h3 style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: 4,
                          letterSpacing: "-0.01em",
                        }}>
                          {exp.role}
                        </h3>
                        <div style={{ fontSize: "0.9rem", color: "var(--accent)", fontWeight: 500 }}>
                          {exp.company}
                        </div>
                      </div>

                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          letterSpacing: "0.04em",
                          color: "var(--text-muted)",
                          marginBottom: 4,
                        }}>
                          {exp.period}
                        </div>
                        <div style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                        }}>
                          {exp.location}
                        </div>
                        {exp.current && (
                          <span style={{
                            display: "inline-block",
                            marginTop: 7,
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6rem",
                            letterSpacing: "0.1em",
                            color: "var(--accent)",
                            background: "var(--accent-muted)",
                            border: "1px solid var(--accent-border)",
                            padding: "2px 9px",
                            borderRadius: 999,
                          }}>
                            CURRENT
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ height: 1, background: "var(--border)", margin: "16px 0" }} />

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} style={{
                          display: "flex",
                          gap: 12,
                          fontSize: "0.875rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.68,
                        }}>
                          <span style={{
                            color: "var(--warm)",
                            flexShrink: 0,
                            marginTop: 4,
                            fontSize: "0.55rem",
                            fontWeight: 700,
                          }}>
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
