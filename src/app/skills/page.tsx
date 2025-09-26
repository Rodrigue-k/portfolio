'use client';

import { ArrowLeft, Smartphone, Code, Database, Settings, Star, Award, BookOpen } from 'lucide-react';
import { AnimatedSection, FadeIn } from '../../components/animations';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { useEffect, useState } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Développement Mobile",
      icon: Smartphone,
      gradient: "from-blue-400 to-indigo-500",
      description: "Expertise en développement d'applications mobiles cross-platform",
      skills: [
        {
          name: "Flutter & Dart",
          level: 95,
          description: "Framework principal pour le développement mobile"
        },
        {
          name: "iOS Natif (Swift)",
          level: 70,
          description: "Développement d'applications iOS natives"
        },
        {
          name: "Android Natif (Kotlin)",
          level: 65,
          description: "Développement d'applications Android natives"
        },
        {
          name: "React Native",
          level: 60,
          description: "Alternative pour le développement cross-platform"
        }
      ]
    },
    {
      title: "Backend & Base de données",
      icon: Database,
      gradient: "from-green-400 to-teal-500",
      description: "Technologies backend et gestion des données",
      skills: [
        {
          name: "Firebase & Firestore",
          level: 90,
          description: "Backend-as-a-Service pour applications mobiles"
        },
        {
          name: "REST APIs",
          level: 85,
          description: "Conception et intégration d'APIs REST"
        },
        {
          name: "Node.js & Express",
          level: 75,
          description: "Développement backend JavaScript"
        },
        {
          name: "MongoDB & SQL",
          level: 70,
          description: "Bases de données NoSQL et relationnelles"
        }
      ]
    },
    {
      title: "State Management",
      icon: Code,
      gradient: "from-purple-400 to-pink-500",
      description: "Gestion d'état avancée pour applications complexes",
      skills: [
        {
          name: "Provider",
          level: 95,
          description: "State management le plus utilisé avec Flutter"
        },
        {
          name: "Bloc Pattern",
          level: 85,
          description: "Architecture pour applications complexes"
        },
        {
          name: "Riverpod",
          level: 70,
          description: "State management moderne et type-safe"
        },
        {
          name: "Cubit",
          level: 80,
          description: "Simplification du pattern Bloc"
        }
      ]
    },
    {
      title: "Outils & DevOps",
      icon: Settings,
      gradient: "from-orange-400 to-red-500",
      description: "Outils de développement et déploiement",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          description: "Contrôle de version et collaboration"
        },
        {
          name: "CI/CD",
          level: 75,
          description: "Intégration et déploiement continus"
        },
        {
          name: "Testing",
          level: 70,
          description: "Tests unitaires et d'intégration"
        },
        {
          name: "Docker",
          level: 60,
          description: "Containerisation des applications"
        }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Résolution de problèmes",
      description: "Capacité à analyser et résoudre des problèmes complexes de manière efficace"
    },
    {
      name: "Apprentissage continu",
      description: "Veille technologique constante et adaptation aux nouvelles technologies"
    },
    {
      name: "Travail d'équipe",
      description: "Collaboration efficace avec les équipes de développement et clients"
    },
    {
      name: "Communication",
      description: "Capacité à expliquer des concepts techniques de manière claire"
    },
    {
      name: "Gestion du temps",
      description: "Organisation et respect des délais de livraison"
    },
    {
      name: "Attention aux détails",
      description: "Souci de la qualité et de la finition des projets"
    }
  ];

  const certifications = [
    {
      name: "Flutter Developer",
      issuer: "Google",
      year: "2024",
      status: "En cours"
    },
    {
      name: "Mobile App Development",
      issuer: "Coursera",
      year: "2023",
      status: "Obtenu"
    },
    {
      name: "Firebase Fundamentals",
      issuer: "Google",
      year: "2023",
      status: "Obtenu"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation mobile améliorée */}
      <MobileNavigation currentPath="/skills" isDark={isDark} />

      {/* Navigation desktop */}
      <DesktopNavigation currentPath="/skills" isDark={isDark} />

      {/* Header - Mobile optimisé */}
      <AnimatedSection className="mobile-hero pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 sm:mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Retour à l'accueil
            </a>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Mes{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                compétences
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Technologies, outils et compétences que j'utilise pour créer des applications exceptionnelles
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Technical Skills - Mobile optimisé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mobile-grid md:grid-cols-2 gap-4 sm:gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <FadeIn key={skill.name} delay={skillIndex * 0.1}>
                      <div className="p-4 sm:p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h3>
                          <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                          {skill.description}
                        </p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Soft Skills - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Compétences transversales
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Qualités personnelles qui enrichissent mon travail
            </p>
          </FadeIn>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => (
              <FadeIn key={skill.name} delay={index * 0.1}>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {skill.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Certifications
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Formations et certifications obtenues
            </p>
          </FadeIn>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.name} delay={index * 0.1}>
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'Obtenu'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    {cert.year}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Learning - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Apprentissage continu
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Technologies que j'apprends actuellement
            </p>
          </FadeIn>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Machine Learning",
                progress: 30,
                description: "IA et apprentissage automatique"
              },
              {
                name: "GraphQL",
                progress: 50,
                description: "API Query Language"
              },
              {
                name: "Web3",
                progress: 25,
                description: "Blockchain et DApps"
              },
              {
                name: "DevOps",
                progress: 40,
                description: "CI/CD et déploiement"
              }
            ].map((tech, index) => (
              <FadeIn key={tech.name} delay={index * 0.1}>
                <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                    {tech.description}
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mt-2 block">
                    {tech.progress}%
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Besoin de mes compétences ?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Travaillons ensemble sur votre prochain projet
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
            >
              Me contacter
            </a>
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
            <p>&copy; 2024 Rodrigue KOUDAKPO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
