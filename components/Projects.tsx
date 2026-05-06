"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type SvgType } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function MealSVG() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="meal-bg" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1a3a3a" />
          <stop offset="100%" stopColor="#050a0a" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#meal-bg)" />
      <circle cx="200" cy="130" r="95" fill="none" stroke="#1f4848" strokeWidth="2" />
      <circle cx="200" cy="130" r="75" fill="#0d2020" />
      <path d="M188 108 L212 108 L218 158 L182 158 Z" fill="#f97316" />
      <path d="M182 108 Q200 100 218 108" fill="#fb923c" />
      <path d="M200 104 C196 88 186 82 192 96" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M200 104 C204 88 214 82 208 96" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M200 104 C200 85 200 82 200 96" stroke="#4ade80" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="120" y1="95" x2="120" y2="175" stroke="#2dd4d4" strokeWidth="3" strokeLinecap="round" />
      <line x1="113" y1="95" x2="113" y2="118" stroke="#2dd4d4" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="95" x2="120" y2="118" stroke="#2dd4d4" strokeWidth="2" strokeLinecap="round" />
      <line x1="127" y1="95" x2="127" y2="118" stroke="#2dd4d4" strokeWidth="2" strokeLinecap="round" />
      <line x1="280" y1="95" x2="280" y2="175" stroke="#2dd4d4" strokeWidth="3" strokeLinecap="round" />
      <path d="M280 95 C290 110 290 125 280 130" fill="#2dd4d4" opacity="0.6" />
      <circle cx="330" cy="50" r="2" fill="#2dd4d4" opacity="0.5" />
      <circle cx="60" cy="60" r="1.5" fill="#2dd4d4" opacity="0.4" />
      <text x="200" y="228" textAnchor="middle" fill="#4a7a7a" fontSize="11" fontFamily="monospace" letterSpacing="3">MEAL STRATEGY</text>
    </svg>
  );
}

function SafetySVG() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="safety-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2d1428" />
          <stop offset="100%" stopColor="#050a0a" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#safety-bg)" />
      <path d="M200 42 L258 66 L258 138 C258 174 200 210 200 210 C200 210 142 174 142 138 L142 66 Z"
        fill="none" stroke="#f43f5e" strokeWidth="2.5" opacity="0.75" />
      <path d="M200 56 L244 76 L244 136 C244 164 200 196 200 196 C200 196 156 164 156 136 L156 76 Z"
        fill="#f43f5e" opacity="0.1" />
      <path d="M200 162 C200 162 168 143 168 126 C168 115 176 108 186 111 C192 113 197 118 200 123 C203 118 208 113 214 111 C224 108 232 115 232 126 C232 143 200 162 200 162 Z"
        fill="#f43f5e" opacity="0.9" />
      <rect x="54" y="108" width="68" height="22" rx="4" fill="#2d1428" stroke="#f9a8d4" strokeWidth="1" opacity="0.5" />
      <text x="88" y="123" textAnchor="middle" fill="#f9a8d4" fontSize="9" fontFamily="monospace">KNOW YOU</text>
      <rect x="54" y="140" width="68" height="22" rx="4" fill="#2d1428" stroke="#f9a8d4" strokeWidth="1" opacity="0.5" />
      <text x="88" y="155" textAnchor="middle" fill="#f9a8d4" fontSize="9" fontFamily="monospace">FIRST MEET</text>
      <rect x="278" y="108" width="68" height="22" rx="4" fill="#2d1428" stroke="#f9a8d4" strokeWidth="1" opacity="0.5" />
      <text x="312" y="123" textAnchor="middle" fill="#f9a8d4" fontSize="9" fontFamily="monospace">DETECTION</text>
      <circle cx="330" cy="55" r="2" fill="#f43f5e" opacity="0.5" />
      <circle cx="65" cy="65" r="1.5" fill="#f43f5e" opacity="0.4" />
      <text x="200" y="234" textAnchor="middle" fill="#7a3a5a" fontSize="11" fontFamily="monospace" letterSpacing="3">SAFETY LAYER</text>
    </svg>
  );
}

function PlantSVG() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="plant-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0a2a1a" />
          <stop offset="100%" stopColor="#050a0a" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#plant-bg)" />
      <line x1="200" y1="210" x2="200" y2="60" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M200 190 C200 190 148 165 155 115 C162 72 200 55 200 55 C200 55 238 72 245 115 C252 165 200 190 200 190 Z"
        fill="#10b981" opacity="0.65" />
      <path d="M200 115 C178 108 162 115 152 126" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M200 142 C174 134 158 142 150 154" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M200 115 C222 108 238 115 248 126" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M200 142 C226 134 242 142 250 154" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.5" />
      <text x="40" y="106" fill="#34d399" fontSize="9" fontFamily="monospace" letterSpacing="1">FILLING SCORE</text>
      <rect x="40" y="112" width="90" height="7" rx="3.5" fill="#0a2a1a" />
      <rect x="40" y="112" width="70" height="7" rx="3.5" fill="#10b981" opacity="0.85" />
      <text x="40" y="136" fill="#34d399" fontSize="9" fontFamily="monospace" letterSpacing="1">SATIETY INDEX</text>
      <rect x="40" y="142" width="90" height="7" rx="3.5" fill="#0a2a1a" />
      <rect x="40" y="142" width="52" height="7" rx="3.5" fill="#10b981" opacity="0.6" />
      <text x="270" y="106" fill="#34d399" fontSize="9" fontFamily="monospace" letterSpacing="1">PERCEIVED VALUE</text>
      <rect x="270" y="112" width="90" height="7" rx="3.5" fill="#0a2a1a" />
      <rect x="270" y="112" width="62" height="7" rx="3.5" fill="#34d399" opacity="0.7" />
      <circle cx="350" cy="55" r="2" fill="#10b981" opacity="0.5" />
      <text x="200" y="234" textAnchor="middle" fill="#2a5a3a" fontSize="11" fontFamily="monospace" letterSpacing="3">PRODUCT ANALYSIS</text>
    </svg>
  );
}

function TVSVG() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="tv-bg" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#1e1040" />
          <stop offset="100%" stopColor="#050a0a" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#tv-bg)" />
      {/* TV frame */}
      <rect x="70" y="32" width="260" height="162" rx="10" fill="#0d0820" stroke="#6d28d9" strokeWidth="2" opacity="0.9" />
      <rect x="78" y="40" width="244" height="146" rx="6" fill="#120a2e" />
      {/* Screen glow */}
      <rect x="78" y="40" width="244" height="146" rx="6" fill="#7c3aed" opacity="0.04" />
      {/* Play button */}
      <circle cx="200" cy="113" r="26" fill="#7c3aed" opacity="0.18" stroke="#8b5cf6" strokeWidth="1" />
      <path d="M192 101 L192 125 L218 113 Z" fill="#a78bfa" />
      {/* TV stand */}
      <line x1="165" y1="194" x2="152" y2="218" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" />
      <line x1="235" y1="194" x2="248" y2="218" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" />
      <line x1="138" y1="218" x2="262" y2="218" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" />
      {/* Mood tags — left side */}
      <rect x="14" y="68" width="42" height="16" rx="8" fill="#1e1040" stroke="#7c3aed" strokeWidth="1" opacity="0.8" />
      <text x="35" y="79" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">RELAX</text>
      <rect x="14" y="92" width="42" height="16" rx="8" fill="#1e1040" stroke="#7c3aed" strokeWidth="1" opacity="0.8" />
      <text x="35" y="103" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">COZY</text>
      <rect x="14" y="116" width="42" height="16" rx="8" fill="#1e1040" stroke="#7c3aed" strokeWidth="1" opacity="0.8" />
      <text x="35" y="127" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">FEEL GOOD</text>
      {/* Playlist heart — right side */}
      <path d="M348 78 C348 78 336 68 336 60 C336 54 342 50 348 54 C354 50 360 54 360 60 C360 68 348 78 348 78 Z"
        fill="#8b5cf6" opacity="0.85" />
      <text x="348" y="94" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">MY PLAYLIST</text>
      {/* Share icon — right side */}
      <circle cx="342" cy="120" r="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <circle cx="360" cy="113" r="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <circle cx="360" cy="127" r="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <line x1="346" y1="117" x2="356" y2="115" stroke="#8b5cf6" strokeWidth="1.2" />
      <line x1="346" y1="123" x2="356" y2="125" stroke="#8b5cf6" strokeWidth="1.2" />
      <text x="351" y="140" textAnchor="middle" fill="#a78bfa" fontSize="8" fontFamily="monospace">SHARE</text>
      {/* Ambient dots */}
      <circle cx="340" cy="42" r="2" fill="#8b5cf6" opacity="0.45" />
      <circle cx="62" cy="170" r="1.5" fill="#7c3aed" opacity="0.35" />
      <circle cx="355" cy="178" r="1.5" fill="#8b5cf6" opacity="0.3" />
      <text x="200" y="242" textAnchor="middle" fill="#3a2a6a" fontSize="11" fontFamily="monospace" letterSpacing="3">STREAMING REPLICA</text>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectThumbnail({ svgType }: { svgType: SvgType }) {
  if (svgType === "meal") return <MealSVG />;
  if (svgType === "safety") return <SafetySVG />;
  if (svgType === "tv") return <TVSVG />;
  return <PlantSVG />;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <span className="section-label">Projects</span>
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
              Case Studies
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div key={project.title} variants={item}>
                  <div
                    className="card"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      overflow: "hidden",
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        order: isEven ? 0 : 1,
                        overflow: "hidden",
                        minHeight: 200,
                        borderRight: isEven ? "1px solid var(--border)" : "none",
                        borderLeft: !isEven ? "1px solid var(--border)" : "none",
                        display: "flex",
                        alignItems: "stretch",
                      }}
                    >
                      <ProjectThumbnail svgType={project.svgType} />
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        order: isEven ? 1 : 0,
                        padding: "28px 32px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          marginBottom: 12,
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.72,
                          marginBottom: 20,
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="pill"
                            style={{ borderColor: project.accent + "40", color: project.accent }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons — only shown when URL is real */}
                      {(project.github || project.demo) && (
                        <div style={{ display: "flex", gap: 12 }}>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline"
                              style={{ fontSize: "0.8rem", padding: "8px 16px" }}
                            >
                              GitHub
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary"
                              style={{
                                fontSize: "0.8rem",
                                padding: "8px 16px",
                                background: project.accent,
                              }}
                            >
                              <ExternalLinkIcon />
                              Live Prototype
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
