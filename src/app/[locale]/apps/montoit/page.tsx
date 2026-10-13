import Image from 'next/image';
import Link from 'next/link';
import { appMetadata } from './metadata';
import styles from './montoit.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return appMetadata(locale, '', 'MonToit', locale === 'fr' ? 'Des logements à louer au Togo. Recherche par quartier et budget, frais de location et contact direct.' : 'Find rentals in Togo. Search by neighbourhood and budget, review rental costs and contact advertisers.');
}
export default async function MonToitPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale === 'fr';
  const features = fr ? [
    ['Cherche à ton rythme', 'Parcours les annonces sans compte. Choisis une ville, un quartier, un type de logement et ton budget.'],
    ['Comprends les frais', 'Retrouve les photos, le loyer, la caution et l’avance indiqués pour préparer ta visite.'],
    ['Prends contact', 'Garde tes coups de cœur, partage une annonce et contacte son auteur par WhatsApp ou téléphone.'],
  ] : [
    ['Search at your own pace', 'Browse without an account. Choose a city, neighbourhood, property type and budget.'],
    ['Understand the costs', 'Review photos, rent, deposit and advance payments before arranging a visit.'],
    ['Get in touch', 'Save your favourites, share listings and contact advertisers through WhatsApp or phone.'],
  ];
  return <>
    <section className={styles.hero}>
      <div><span className={styles.eyebrow}>{fr ? 'Logements à louer au Togo' : 'Rental homes in Togo'}</span>
        <h1>{fr ? 'Trouve ton prochain chez-toi.' : 'Find your next place to call home.'}</h1>
        <p>{fr ? 'Des logements à louer au Togo. Choisis ton quartier, regarde les frais et contacte directement les annonceurs.' : 'Rental homes in Togo. Choose your neighbourhood, check the costs and contact advertisers directly.'}</p>
        <div className={styles.actions}><a className={styles.button} href="https://play.google.com/store/apps/details?id=com.rodrigue.to_rent">{fr ? 'Voir sur Google Play' : 'View on Google Play'}</a><a className={`${styles.button} ${styles.secondary}`} href="#tablet">{fr ? 'Découvrir l’application' : 'Explore the app'}</a></div>
        <p className={styles.small}>{fr ? 'Vérifie le logement et les conditions avec l’annonceur avant tout paiement.' : 'Verify the property and terms with the advertiser before making any payment.'}</p>
      </div>
      <figure className={styles.heroVisual}>
        <Image className={styles.heroPhoto} src="/assets/apps/montoit/hero-interior.jpg" alt={fr ? 'Une chambre lumineuse avec un lit et une table de chevet' : 'A bright bedroom with a bed and bedside table'} width={1280} height={1920} sizes="(max-width: 800px) 90vw, 48vw" priority />
        <figcaption className={styles.heroCaption}>{fr ? 'Un aperçu des intérieurs présentés dans MonToit. Photo d’illustration.' : 'A glimpse of the interiors featured in MonToit. Illustrative photo.'}</figcaption>
      </figure>
    </section>
    <section className={styles.section}><h2>{fr ? 'Les informations utiles, au même endroit.' : 'The details you need, in one place.'}</h2><div className={styles.features}>{features.map(([title, text], i) => <div key={title}><span className={styles.number}>0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section id="tablet" className={styles.section}><span className={styles.eyebrow}>{fr ? 'Téléphone et tablette' : 'Phone and tablet'}</span><h2>{fr ? 'Plus de place pour explorer.' : 'More room to explore.'}</h2><p>{fr ? 'Sur tablette, parcours plusieurs logements côte à côte et retrouve la navigation flottante de MonToit.' : 'On a tablet, browse homes side by side with MonToit’s familiar floating navigation.'}</p><Image className={styles.tablet} src="/assets/apps/montoit/explorer.png" width={2560} height={1600} alt={fr ? 'Explorer MonToit sur tablette avec une grille de logements et une recherche par quartier' : 'MonToit tablet listing grid and neighbourhood search'} /><p className={styles.caption}>{fr ? 'Capture de démonstration. Les logements et tarifs illustrés ne constituent pas des offres réelles.' : 'Demonstration screenshot. The properties and prices shown are not actual offers.'}</p></section>
    <section className={styles.section}><h2>{fr ? 'Tu proposes un logement ?' : 'Have a property to rent?'}</h2><p>{fr ? 'Connecte-toi avec Google, ajoute tes photos et les informations du logement, puis gère tes annonces depuis l’application.' : 'Sign in with Google, add photos and property details, then manage your listings in the app.'}</p><div className={styles.actions}><a className={styles.button} href="mailto:contact@rodriguekoudakpo.com">{fr ? 'Contacter le support' : 'Contact support'}</a><Link className={`${styles.button} ${styles.secondary}`} href={`/${locale}/apps/montoit/confidentialite`}>{fr ? 'Lire la politique de confidentialité' : 'Read the privacy policy'}</Link></div></section>
  </>;
}
