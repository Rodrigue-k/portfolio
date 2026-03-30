import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/syne";
import "@fontsource/jetbrains-mono";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Komi Rodrigue Koudakpo - Flutter Developer · Mobile & Web",
  description: "Portfolio de Komi Rodrigue Koudakpo, Développeur d'applications autodidacte spécialisé en Flutter pour le mobile et Next.js pour le web.",
  keywords: "Flutter, Dart, Next.js, TypeScript, Mobile Development, Web Development, iOS, Android",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={`${inter.variable} antialiased transition-colors duration-300 overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
