"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personal, links } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

type Status = "idle" | "loading" | "success" | "error";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16a2 2 0 0 1 .27.92z" />
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "var(--bg)",
  border: "1px solid var(--border-soft)",
  borderRadius: 8,
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = (await res.json()) as { error?: string };
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ background: "var(--bg-surface)" }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={item} style={{ marginBottom: 56 }}>
            <span className="section-label">Contact</span>
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
              Get in Touch
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 56,
              alignItems: "start",
            }}
          >
            {/* Left */}
            <motion.div variants={item}>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: 36,
                }}
              >
                I&apos;m currently open to product management roles. If you have an opportunity, a project, or just want to connect — my inbox is always open.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <a
                  href={links.email}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--accent-muted)",
                      border: "1px solid var(--accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <MailIcon />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: 2 }}>
                      EMAIL
                    </div>
                    <div style={{ fontSize: "0.9rem" }}>{personal.email}</div>
                  </div>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    color: "var(--text-muted)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--accent-muted)",
                      border: "1px solid var(--accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: 2 }}>
                      PHONE
                    </div>
                    <div style={{ fontSize: "0.9rem" }}>{personal.phone}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={item}>
              {status === "success" ? (
                <div
                  style={{
                    padding: "36px",
                    background: "var(--accent-muted)",
                    border: "1px solid var(--accent-border)",
                    borderRadius: 12,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 12 }}>✓</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      color: "var(--accent)",
                      marginBottom: 8,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline"
                    style={{ marginTop: 24 }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-dim)",
                        marginBottom: 6,
                      }}
                    >
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-soft)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-dim)",
                        marginBottom: 6,
                      }}
                    >
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-soft)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-dim)",
                        marginBottom: 6,
                      }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-soft)")}
                    />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#f87171", fontSize: "0.84rem" }}>{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary"
                    style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "wait" : "pointer" }}
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
