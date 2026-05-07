"use client";

import { personal, links } from "@/data/portfolio";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const initials = personal.name.split(" ").map((w) => w[0]).join("");
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "48px clamp(20px,4vw,40px) 36px",
        display: "flex",
        flexDirection: "column",
        gap: 36,
      }}>

        {/* Top row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 28,
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: 6,
              letterSpacing: "-0.01em",
            }}>
              {initials}
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.67rem",
              letterSpacing: "0.1em",
              color: "var(--text-dim)",
            }}>
              {personal.tagline}
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.84rem",
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { href: links.email,    icon: <MailIcon />,     label: "Email" },
              ...(links.linkedin ? [{ href: links.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" }] : []),
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 38, height: 38,
                  borderRadius: 8,
                  border: "1px solid var(--border-soft)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-dim)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-soft)";
                  e.currentTarget.style.color = "var(--text-dim)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.06em", color: "var(--text-dim)" }}>
            © {year} {personal.name}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.06em", color: "var(--text-dim)" }}>
            Next.js · Tailwind CSS · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
