import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "@fontsource/syne";
import "@fontsource/jetbrains-mono";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { JsonLd } from "@/presentation/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const canonicalUrl = `https://rodriguekoudakpo.com/${locale}`;

  return {
    metadataBase: new URL("https://rodriguekoudakpo.com"),
    title: {
      default: t('title'),
      template: "%s · Komi Rodrigue Koudakpo"
    },
    description: t('description'),
    keywords: [
      "Komi Rodrigue Koudakpo",
      "Rodrigue Koudakpo",
      "Développeur Flutter Togo",
      "Flutter Developer West Africa",
      "Développeur Mobile Freelance",
      "Next.js",
      "TypeScript",
      "Mobile App Development",
      "iOS",
      "Android",
      "Clean Architecture",
      "Darollo Technologies Corporation",
      "Evee Engineering"
    ],
    authors: [{ name: "Komi Rodrigue Koudakpo", url: "https://rodriguekoudakpo.com" }],
    creator: "Komi Rodrigue Koudakpo",
    publisher: "Komi Rodrigue Koudakpo",
    alternates: {
      canonical: canonicalUrl,
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
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      url: canonicalUrl,
      title: t('title'),
      description: t('description'),
      siteName: "Komi Rodrigue Koudakpo — Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('title'),
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      creator: "@rodrigue_k",
      images: ["/og-image.png"],
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
      apple: "/apple-touch-icon.png",
    },
  };
}

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
    <div lang={locale} className={`${inter.variable} contents`}>
      <JsonLd locale={locale} />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "6e55ffab764c48aca3211e6554d9b397"}'
        strategy="afterInteractive"
      />
    </div>
  );
}
