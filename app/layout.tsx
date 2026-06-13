import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabrielebaiamonte.github.io";
const siteTitle = "Gabriele Baiamonte | Software Developer & Cybersecurity Student";
const siteDescription =
  "Portfolio di Gabriele Baiamonte, Ingegnere Informatico e studente magistrale in Cybersicurezza. Sviluppo siti web, web app full-stack, backend Java/Spring Boot, software gestionali e soluzioni digitali moderne.";
const siteKeywords = [
  "Gabriele Baiamonte",
  "software developer",
  "cybersecurity",
  "ingegnere informatico",
  "siti web",
  "web app",
  "backend developer",
  "Java",
  "Spring Boot",
  "Palermo",
  "portfolio"
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Gabriele Baiamonte" }],
  creator: "Gabriele Baiamonte",
  publisher: "Gabriele Baiamonte",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Gabriele Baiamonte Portfolio",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Gabriele Baiamonte portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"]
  }
};

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
