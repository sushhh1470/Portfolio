"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, education } from "@/data/portfolio";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function GraduationIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ background: "var(--bg-surface)" }}>
      <div className="section-container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"}>

          <motion.div variants={fadeUp} style={{ marginBottom: 56 }}>
            <span className="section-label">About</span>
            <div className="accent-line" />
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(40px, 6vw, 72px)",
            alignItems: "start",
          }}>

            {/* Left — heading */}
            <motion.div variants={fadeUp}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 500,
                lineHeight: 1.18,
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Bridging clinical expertise with product thinking
              </h2>
            </motion.div>

            {/* Right — bio + location + education */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                {personal.bio.split("\n\n").map((para, i) => (
                  <p key={i} style={{
                    fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                    lineHeight: 1.82,
                    color: "var(--text-muted)",
                    marginBottom: i < personal.bio.split("\n\n").length - 1 ? 16 : 0,
                  }}>
                    {para}
                  </p>
                ))}

                {personal.philosophy && (
                  <blockquote style={{
                    marginTop: 24,
                    paddingLeft: 16,
                    borderLeft: "2px solid var(--accent-border)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}>
                    &ldquo;{personal.philosophy}&rdquo;
                  </blockquote>
                )}

                {/* Location + relocation tag */}
                <div style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--text-dim)",
                  fontSize: "0.875rem",
                }}>
                  <MapPinIcon />
                  <span>{personal.location}</span>
                  {personal.openToRemote && (
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.08em",
                      color: "var(--warm)",
                      background: "var(--warm-muted)",
                      border: "1px solid var(--warm-border)",
                      padding: "3px 10px",
                      borderRadius: 999,
                    }}>
                      OPEN TO RELOCATE
                    </span>
                  )}
                </div>
              </div>

              {/* Education */}
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                  color: "var(--accent)",
                }}>
                  <GraduationIcon />
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}>
                    Education
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {education.map((edu) => (
                    <div key={edu.degree} className="card" style={{ padding: "18px 20px" }}>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", marginBottom: 5 }}>
                        {edu.degree}
                      </div>
                      <div style={{ fontSize: "0.84rem", color: "var(--accent)", marginBottom: 6, fontWeight: 400 }}>
                        {edu.school}
                      </div>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 4,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.67rem",
                        letterSpacing: "0.04em",
                        color: "var(--text-dim)",
                      }}>
                        <span>{edu.location}</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
