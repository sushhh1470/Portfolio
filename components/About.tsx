"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal, education } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function GraduationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <span className="section-label">About</span>
            <div className="accent-line" />
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "start",
            }}
          >
            {/* Left — heading + highlights */}
            <motion.div variants={item}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                }}
              >
                Bridging clinical expertise with product thinking
              </h2>
            </motion.div>

            {/* Right — bio + education */}
            <motion.div variants={item} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <p
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.8,
                    color: "var(--text-muted)",
                  }}
                >
                  {personal.bio}
                </p>
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--text-dim)",
                    fontSize: "0.875rem",
                  }}
                >
                  <MapPinIcon />
                  <span>{personal.location}</span>
                  {personal.openToRemote && (
                    <span
                      style={{
                        marginLeft: 8,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--accent)",
                        background: "var(--accent-muted)",
                        border: "1px solid var(--accent-border)",
                        padding: "2px 8px",
                        borderRadius: 999,
                        letterSpacing: "0.06em",
                      }}
                    >
                      REMOTE OK
                    </span>
                  )}
                </div>
              </div>

              {/* Education */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                    color: "var(--accent)",
                  }}
                >
                  <GraduationIcon />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Education
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {education.map((edu) => (
                    <div key={edu.degree} className="card" style={{ padding: "16px 18px" }}>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", marginBottom: 4 }}>
                        {edu.degree}
                      </div>
                      <div style={{ fontSize: "0.84rem", color: "var(--accent)", marginBottom: 4 }}>
                        {edu.school}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-dim)",
                          letterSpacing: "0.04em",
                        }}
                      >
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
