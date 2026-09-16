import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Komi Rodrigue Koudakpo - Flutter Developer · Mobile & Web",
  description:
    "Portfolio de Komi Rodrigue Koudakpo, Développeur d'applications autodidacte spécialisé en Flutter pour le mobile et Next.js pour le web.",
  keywords:
    "Flutter, Dart, Next.js, TypeScript, Mobile Development, Web Development, iOS, Android",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
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
