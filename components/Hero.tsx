"use client";

import { motion } from "framer-motion";
import { personal, links } from "@/data/portfolio";

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,212,212,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 720 }}
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <span className="availability-badge" style={{ marginBottom: 32, display: "inline-flex" }}>
              <span className="pulse-dot" />
              {personal.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "var(--text)",
              marginBottom: 12,
              letterSpacing: "-0.03em",
            }}
          >
            {personal.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            {personal.title} · {personal.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 44,
              maxWidth: 560,
            }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}
          >
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <DocIcon />
                View Resume
              </a>
            )}

            <a href={links.email} className="btn-outline">
              <MailIcon />
              Get in Touch
            </a>

            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--text-dim)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDownIcon />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
