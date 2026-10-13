import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/presentation/components/layout/Header';
import { Footer } from '@/presentation/components/layout/Footer';
import { resumeData } from '@/core/data/resume';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'fr' ? 'Applications' : 'Apps';
  const description = locale === 'fr' ? 'Découvrez les applications présentées par Komi Rodrigue Koudakpo et retrouvez leurs pages, liens de téléchargement et support.' : 'Explore applications presented by Komi Rodrigue Koudakpo, with product pages, download links and support.';
  return { title, description, alternates: { canonical: `https://rodriguekoudakpo.com/${locale}/apps`, languages: { fr: 'https://rodriguekoudakpo.com/fr/apps', en: 'https://rodriguekoudakpo.com/en/apps' } }, openGraph: { title, description, url: `https://rodriguekoudakpo.com/${locale}/apps` } };
}
export default async function ApplicationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const fr = locale === 'fr';
  const t = await getTranslations({locale,namespace:'Projects'});
  const mobile = resumeData.projects.map((project,index)=>({project,index})).filter(({project})=>project.playStore || project.appStore);
  return <><Header /><main className="mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-10">
    <p className="section-label text-xs uppercase tracking-widest text-muted">{fr ? 'Produits mobiles' : 'Mobile products'}</p>
    <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">{fr ? 'Les applications.' : 'The apps.'}</h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{fr ? 'Retrouve chaque application, découvre ses fonctionnalités et accède à ses liens utiles.' : 'Find each app, explore its features and access its useful links.'}</p>
    <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label={fr ? 'Catalogue des applications' : 'App catalogue'}>
      <article className="overflow-hidden rounded-2xl border border-card-border bg-card-bg">
        <div className="flex h-52 items-center justify-center bg-[#f4efe9]"><Image src="/assets/apps/montoit/icon.png" width={100} height={100} alt="MonToit" className="rounded-2xl" /></div>
        <div className="p-6"><h2 className="text-2xl font-semibold">MonToit</h2><p className="mt-3 leading-relaxed text-muted">{fr ? 'Des logements à louer au Togo. Recherche par quartier, frais de location et contact direct.' : 'Rental homes in Togo. Neighbourhood search, rental costs and direct contact.'}</p>
          <a className="mt-6 inline-flex rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold !text-white" href={`/${locale}/apps/montoit`}>{fr ? 'Découvrir MonToit' : 'Discover MonToit'} →</a>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted"><a className="underline underline-offset-4" href={`/${locale}/apps/montoit/confidentialite`}>{fr ? 'Confidentialité' : 'Privacy'}</a><a className="underline underline-offset-4" href={`/${locale}/apps/montoit/suppression-compte`}>{fr ? 'Supprimer mon compte' : 'Delete my account'}</a></div>
        </div>
      </article>
      {mobile.map(({project,index})=><article key={project.title} className="overflow-hidden rounded-2xl border border-card-border bg-card-bg">
        {project.image && <div className="flex h-52 items-center justify-center bg-[#f4efe9] p-4"><Image src={project.image} width={400} height={240} alt={project.title} className="h-full w-full object-contain" /></div>}
        <div className="p-6"><h2 className="text-2xl font-semibold">{project.title}</h2><p className="mt-3 leading-relaxed text-muted">{t.has(`items.item${index}.description`) ? t(`items.item${index}.description`) : project.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">{project.playStore && <a className="underline underline-offset-4" href={project.playStore}>Google Play →</a>}{project.appStore && <a className="underline underline-offset-4" href={project.appStore}>App Store →</a>}{project.website && <a className="underline underline-offset-4" href={project.website}>{fr ? 'Site web' : 'Website'} →</a>}</div>
        </div>
      </article>)}
    </section>
    <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{fr ? 'Certaines applications ont été réalisées pour des clients. Leurs fiches de téléchargement indiquent leur éditeur et leurs coordonnées de support.' : 'Some apps were built for clients. Their store listings identify their publisher and support contacts.'}</p>
  </main><Footer /></>;
}
