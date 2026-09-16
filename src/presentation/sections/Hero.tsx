import { resumeData } from "@/core/data/resume";
import { Container, Section } from "@/presentation/components/ui/Layout";
import Image from "next/image";

export function Hero() {
  return (
    <Section id="about" className="flex min-h-svh items-center pb-14 pt-28 md:pb-16 md:pt-32">
      <Container className="w-full">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)] lg:gap-14 xl:grid-cols-[minmax(0,1.08fr)_520px] xl:gap-20">
          <div className="max-w-[700px] md:py-8">
            <p className="section-label mb-5 text-[10px] uppercase tracking-[.2em] text-muted">À propos</p>
            <h1 className="font-display text-[clamp(2.35rem,4.1vw,4.6rem)] font-semibold leading-[1.04] tracking-[-.045em]">Fondateur &amp; développeur produit — également actif en développement commercial</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted">Je construis des produits digitaux et je les vends moi-même — de la prospection client à la livraison. Développeur autodidacte, aujourd&apos;hui aussi commercial terrain, avec une compréhension des deux côtés du métier : celui qui fabrique, et celui qui convainc.</p>
            <a href={`mailto:${resumeData.profile.contact.email}`} className="mt-8 inline-flex rounded-full border border-card-border px-5 py-3 text-sm transition hover:bg-card-bg">{resumeData.profile.contact.email}</a>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px] overflow-visible md:justify-self-end xl:max-w-[540px]">
            <Image
              src="/images/komi-portrait-line-art-v2.png"
              alt="Portrait de Komi dessiné au trait"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-contain brightness-0"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
