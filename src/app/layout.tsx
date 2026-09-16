import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodriguekoudakpo.com"),
  title: "Komi Rodrigue Koudakpo — Je construis. Je vends.",
  description:
    "Développeur par passion, commercial par expérience. Je construis des produits et je les porte jusqu'au client.",
  keywords:
    "Flutter, Dart, Next.js, TypeScript, Mobile Development, Web Development, Commercial, Vente, Produits, Rodrigue Koudakpo",
  authors: [{ name: "Komi Rodrigue Koudakpo", url: "https://rodriguekoudakpo.com" }],
  creator: "Komi Rodrigue Koudakpo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rodriguekoudakpo.com",
    title: "Komi Rodrigue Koudakpo — Je construis. Je vends.",
    description:
      "Développeur par passion, commercial par expérience. Je construis des produits et je les porte jusqu'au client.",
    siteName: "Komi Rodrigue Koudakpo — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Komi Rodrigue Koudakpo — Je construis. Je vends.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komi Rodrigue Koudakpo — Je construis. Je vends.",
    description:
      "Développeur par passion, commercial par expérience. Je construis des produits et je les porte jusqu'au client.",
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
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased transition-colors duration-300 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
