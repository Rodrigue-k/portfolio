import type { Metadata } from 'next';
export function appMetadata(locale: string, path: string, title: string, description: string): Metadata {
  const route = `/apps/montoit${path}`;
  const url = `https://rodriguekoudakpo.com/${locale}${route}`;
  return {
    title, description,
    alternates: { canonical: url, languages: { fr: `https://rodriguekoudakpo.com/fr${route}`, en: `https://rodriguekoudakpo.com/en${route}` } },
    openGraph: { title, description, url, siteName: 'MonToit', locale: locale === 'fr' ? 'fr_FR' : 'en_US', images: [{ url: '/assets/apps/montoit/explorer.png', width: 2560, height: 1600, alt: 'MonToit' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/assets/apps/montoit/explorer.png'] },
    icons: { icon: '/assets/apps/montoit/icon.png', apple: '/assets/apps/montoit/icon.png' },
  };
}
