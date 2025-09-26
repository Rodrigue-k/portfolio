import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodrigue KOUDAKPO - Développeur Flutter Mobile",
  description: "Portfolio professionnel de Rodrigue KOUDAKPO, développeur mobile Flutter passionné. Expert en création d'applications mobiles modernes et performantes.",
  keywords: "Flutter, Dart, Mobile Development, iOS, Android, React Native, développeur mobile, applications mobiles",
  authors: [{ name: "Rodrigue KOUDAKPO" }],
  creator: "Rodrigue KOUDAKPO",
  openGraph: {
    title: "Rodrigue KOUDAKPO - Développeur Flutter Mobile",
    description: "Portfolio professionnel de développeur mobile Flutter",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigue KOUDAKPO - Développeur Flutter Mobile",
    description: "Portfolio professionnel de développeur mobile Flutter",
    creator: "@RodrigueKDev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
