import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodriguekoudakpo.com"),
  title: "Komi Rodrigue Koudakpo — Développeur Flutter & Mobile · Portfolio",
  description:
    "Portfolio de Komi Rodrigue Koudakpo, Développeur d'applications mobiles Flutter (iOS & Android) et plateformes web Next.js.",
  keywords: [
    "Komi Rodrigue Koudakpo",
    "Rodrigue Koudakpo",
    "Développeur Flutter",
    "Flutter Developer",
    "Développeur Mobile Togo",
    "Next.js",
    "TypeScript",
    "Clean Architecture",
    "Dart"
  ],
  authors: [{ name: "Komi Rodrigue Koudakpo", url: "https://rodriguekoudakpo.com" }],
  creator: "Komi Rodrigue Koudakpo",
  publisher: "Komi Rodrigue Koudakpo",
  alternates: {
    canonical: "https://rodriguekoudakpo.com/fr",
    languages: {
      fr: "https://rodriguekoudakpo.com/fr",
      en: "https://rodriguekoudakpo.com/en",
      "x-default": "https://rodriguekoudakpo.com/fr"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    }
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://rodriguekoudakpo.com",
    title: "Komi Rodrigue Koudakpo — Développeur Flutter & Mobile · Portfolio",
    description:
      "Portfolio de Komi Rodrigue Koudakpo, Développeur d'applications mobiles Flutter (iOS & Android) et plateformes web Next.js.",
    siteName: "Komi Rodrigue Koudakpo — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Komi Rodrigue Koudakpo — Développeur Flutter & Mobile",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komi Rodrigue Koudakpo — Développeur Flutter & Mobile · Portfolio",
    description:
      "Portfolio de Komi Rodrigue Koudakpo, Développeur d'applications mobiles Flutter (iOS & Android) et plateformes web Next.js.",
    creator: "@rodrigue_k",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
