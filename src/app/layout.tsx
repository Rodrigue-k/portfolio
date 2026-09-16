import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodriguekoudakpo.com"),
  title: "Komi Rodrigue Koudakpo — Flutter Developer · Mobile Specialist",
  description:
    "Portfolio de Komi Rodrigue Koudakpo, Développeur mobile spécialisé Flutter (Android/iOS) & Clean Architecture.",
  keywords:
    "Flutter, Dart, Next.js, TypeScript, Mobile Development, Web Development, iOS, Android, Rodrigue Koudakpo",
  authors: [{ name: "Komi Rodrigue Koudakpo", url: "https://rodriguekoudakpo.com" }],
  creator: "Komi Rodrigue Koudakpo",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rodriguekoudakpo.com",
    title: "Komi Rodrigue Koudakpo — Flutter Developer · Mobile Specialist",
    description:
      "Portfolio de Komi Rodrigue Koudakpo, Développeur mobile spécialisé Flutter (Android/iOS) & Clean Architecture.",
    siteName: "Komi Rodrigue Koudakpo — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Komi Rodrigue Koudakpo — Flutter & Mobile Specialist",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komi Rodrigue Koudakpo — Flutter Developer · Mobile Specialist",
    description:
      "Portfolio de Komi Rodrigue Koudakpo, Développeur mobile spécialisé Flutter (Android/iOS) & Clean Architecture.",
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
