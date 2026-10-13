import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './montoit.module.css';

export default async function MonToitLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const base = `/${locale}/apps/montoit`;
  const fr = locale === 'fr';
  return <div className={styles.site}>
    <a className={styles.skip} href="#montoit-content">{fr ? 'Aller au contenu' : 'Skip to content'}</a>
    <header className={styles.header}>
      <Link className={styles.brand} href={base}><Image src="/assets/apps/montoit/mark.png" width={34} height={34} alt="" />MonToit</Link>
      <nav aria-label={fr ? 'Navigation MonToit' : 'MonToit navigation'}>
        <Link href={`/${locale}/apps`}>{fr ? 'Applications' : 'Apps'}</Link>
        <Link href={`/${locale}/projects`}>Portfolio</Link>
        <Link href={`${base}/confidentialite`}>{fr ? 'Confidentialité' : 'Privacy'}</Link>
        <Link href={`${base}/suppression-compte`}>{fr ? 'Supprimer mon compte' : 'Delete my account'}</Link>
      </nav>
    </header>
    <main id="montoit-content">{children}</main>
    <footer className={styles.footer}>
      <p>MonToit · Komi Rodrigue Koudakpo · Lomé, Togo</p>
      <a href="mailto:contact@rodriguekoudakpo.com">contact@rodriguekoudakpo.com</a>
      <nav aria-label={fr ? 'Liens utiles' : 'Useful links'}><Link href={base}>MonToit</Link><Link href={`${base}/confidentialite`}>{fr ? 'Confidentialité' : 'Privacy'}</Link><Link href={`${base}/suppression-compte`}>{fr ? 'Suppression du compte' : 'Account deletion'}</Link></nav>
    </footer>
  </div>;
}
