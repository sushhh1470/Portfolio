import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title}`,
  description: personal.tagline,
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.tagline,
    type: "website",
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
