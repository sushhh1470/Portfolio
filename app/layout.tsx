import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data/portfolio";

const metaDescription =
  "Product Manager with a Healthcare Informatics Master's and 6+ years of clinical experience. Leading clinical trial delivery at AXIS Clinicals. Open to PM roles in healthtech, digital health, and consumer products.";

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title}`,
  description: metaDescription,
  keywords: ["Product Manager", "Healthcare Informatics", "Clinical Trials", "Healthtech", "UX Research", "Sushmita Koti"],
  openGraph: {
    title: `${personal.name} — Product Manager`,
    description: metaDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${personal.name} — Product Manager`,
    description: metaDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
