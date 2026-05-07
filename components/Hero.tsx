"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal, links } from "@/data/portfolio";

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-mesh noise-overlay"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px clamp(20px,4vw,40px) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(40px, 6vw, 72px)",
          alignItems: "center",
          justifyContent: "space-between",
        }}>

          {/* ── Text block ──────────────────────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ flex: "1 1 320px", maxWidth: 600 }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
              <span className="availability-badge">
                <span className="pulse-dot" />
                {personal.availability}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 7vw, 5.6rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                marginBottom: 14,
              }}
            >
              {personal.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.72rem, 1.6vw, 0.85rem)",
                letterSpacing: "0.18em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              {personal.title}
              {personal.subtitle ? ` · ${personal.subtitle}` : ""}
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--text-muted)",
                lineHeight: 1.78,
                marginBottom: 44,
                maxWidth: 500,
              }}
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}
            >
              {personal.resumeUrl && (
                <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <DocIcon /> View Resume
                </a>
              )}
              <a href={links.email} className="btn-outline">
                <MailIcon /> Get in Touch
              </a>
              {links.linkedin && (
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <LinkedInIcon /> LinkedIn
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* ── Portrait photo ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ flexShrink: 0, display: "flex", justifyContent: "center" }}
          >
            {/* Outer glow ring — echoes the sunset rose */}
            <div style={{
              padding: 6,
              borderRadius: 24,
              background: "linear-gradient(160deg, rgba(240,168,180,0.22) 0%, rgba(240,152,112,0.12) 50%, rgba(45,212,212,0.08) 100%)",
              boxShadow: "0 0 0 1px rgba(240,168,180,0.12), 0 32px 100px rgba(0,0,0,0.6), 0 8px 32px rgba(240,120,96,0.15)",
            }}>
              {/* Photo container — portrait rectangle */}
              <div style={{
                width: "clamp(265px, 27vw, 320px)",
                height: "clamp(340px, 36vw, 400px)",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                background: "var(--bg-card)",
              }}>
                <Image
                  src="/sushmita.jpg"
                  alt="Sushmita Koti"
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 268px"
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                />
                {/* Subtle warm gradient at bottom edge — blends photo into bg */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: "linear-gradient(to top, rgba(8,6,4,0.55) 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Scroll indicator ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--text-dim)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 7,
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDownIcon />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
