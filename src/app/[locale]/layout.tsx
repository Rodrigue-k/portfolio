import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "@fontsource/syne";
import "@fontsource/jetbrains-mono";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

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

  return {
    metadataBase: new URL("https://rodriguekoudakpo.com"),
    title: t('title'),
    description: t('description'),
    keywords: "Flutter, Dart, Next.js, TypeScript, Mobile Development, Web Development, iOS, Android, Rodrigue Koudakpo",
    authors: [{ name: "Komi Rodrigue Koudakpo", url: "https://rodriguekoudakpo.com" }],
    creator: "Komi Rodrigue Koudakpo",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: `https://rodriguekoudakpo.com/${locale}`,
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
