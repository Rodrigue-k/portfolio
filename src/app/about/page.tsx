'use client';

import { Code, Smartphone, Award, Users, Calendar, MapPin } from 'lucide-react';
import { AnimatedSection, FadeIn } from '../../components/animations';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { useEffect, useState } from 'react';

export default function About() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Détecter le mode sombre
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation mobile améliorée */}
      <MobileNavigation currentPath="/about" isDark={isDark} />

      {/* Navigation desktop */}
      <DesktopNavigation currentPath="/about" isDark={isDark} />

      {/* Hero Section - Mobile optimisé */}
      <AnimatedSection className="mobile-hero pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              À propos de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                moi
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Découvrez mon parcours, mes passions et mon expertise en développement mobile
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Parcours Section - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Mon parcours
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              De mes débuts en programmation à aujourd'hui
            </p>
          </FadeIn>

          <div className="space-y-8 sm:space-y-12">
            {[
              {
                year: "2022",
                title: "Début en développement mobile",
                description: "Découverte de Flutter et passion pour le développement d'applications mobiles cross-platform.",
                icon: Smartphone
              },
              {
                year: "2023",
                title: "Premiers projets professionnels",
                description: "Développement d'applications pour des clients, maîtrise des APIs REST et Firebase.",
                icon: Code
              },
              {
                year: "2024",
                title: "Spécialisation Flutter",
                description: "Approfondissement des connaissances en state management, animations et bonnes pratiques.",
                icon: Award
              }
            ].map((item, index) => (
              <FadeIn key={index} direction="left" delay={index * 0.2}>
                <div className="flex gap-4 sm:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium w-fit">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Statistiques Section - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Chiffres clés
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Quelques statistiques sur mon parcours
            </p>
          </FadeIn>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "50+",
                label: "Projets réalisés",
                icon: Code
              },
              {
                number: "3+",
                label: "Années d'expérience",
                icon: Calendar
              },
              {
                number: "10+",
                label: "Clients satisfaits",
                icon: Users
              },
              {
                number: "24/7",
                label: "Support technique",
                icon: Award
              }
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Valeurs Section - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Mes valeurs
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Les principes qui guident mon travail
            </p>
          </FadeIn>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Qualité",
                description: "Je m'engage à livrer du code de haute qualité, maintenable et performant.",
                gradient: "from-blue-400 to-indigo-500"
              },
              {
                title: "Innovation",
                description: "Je suis toujours à l'affût des dernières technologies et tendances du marché.",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                title: "Collaboration",
                description: "Je travaille en étroite collaboration avec mes clients pour atteindre leurs objectifs.",
                gradient: "from-green-400 to-teal-500"
              }
            ].map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-6 sm:p-8 bg-gray-50 dark:bg-slate-800 rounded-xl">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact CTA - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Prêt à collaborer ?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Discutons de votre prochain projet mobile
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Me contacter
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Voir mes projets
              </a>
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Footer - Mobile optimisé */}
      <footer className="mobile-footer bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                RK
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Développeur mobile Flutter passionné par l'innovation et l'expérience utilisateur.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="/projects" className="hover:text-white transition-colors">Projets</a></li>
                <li><a href="/skills" className="hover:text-white transition-colors">Compétences</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  Togo, Lomé
                </li>
                <li>
                  <a href="mailto:koudakpo.rodrigue@gmail.com" className="hover:text-white transition-colors">
                    koudakpo.rodrigue@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rodrigue-k" className="hover:text-white transition-colors">
                    github.com/rodrigue-k
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Rodrigue KOUDAKPO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
