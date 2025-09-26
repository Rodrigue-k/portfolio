'use client';

import { ArrowRight, Github, Linkedin, Mail, Smartphone, Code, Download } from "lucide-react";
import { AnimatedSection, FadeIn } from "../components/animations";
import { MobileNavigation } from "../components/MobileNavigation";
import { DesktopNavigation } from "../components/DesktopNavigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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
      <MobileNavigation currentPath="/" isDark={isDark} />
      <DesktopNavigation currentPath="/" isDark={isDark} />

      <main className="main-content">
        <AnimatedSection className="mobile-hero pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <FadeIn direction="left" className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Salut, je suis{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Rodrigue
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Développeur mobile Flutter passionné par la création d'expériences utilisateur exceptionnelles.
                    Je transforme vos idées en applications mobiles performantes et intuitives.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/projects"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Voir mes projets
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Me contacter
                  </a>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/rodrigue-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rodrigue-koudakpo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="right" className="relative">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Smartphone className="w-32 h-32 text-white" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section - Mobile optimisé */}
        <AnimatedSection className="py-16 sm:py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                À propos de moi
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Découvrez mon parcours et ma passion pour le développement mobile
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <FadeIn direction="left" delay={0.2}>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Passionné par l'innovation mobile
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Depuis plusieurs années, je me suis spécialisé dans le développement d'applications
                  mobiles avec Flutter. Mon objectif est de créer des expériences utilisateur
                  exceptionnelles en combinant performance, design moderne et fonctionnalités innovantes.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Je maîtrise l'écosystème Flutter/Dart et je suis constamment à l'affût des
                  dernières tendances et meilleures pratiques pour offrir des solutions de qualité.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Projets réalisés</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1 sm:mb-2">3+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Années d'expérience</div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Flutter & Dart</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">iOS & Android</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Firebase & APIs REST</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">State Management</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section - Mobile optimisé */}
        <AnimatedSection className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Compétences
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Technologies et outils que j'utilise
              </p>
            </FadeIn>

            <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Mobile",
                  icon: Smartphone,
                  skills: ["Flutter", "Dart", "iOS", "Android"],
                  color: "blue"
                },
                {
                  category: "Backend",
                  icon: Code,
                  skills: ["Firebase", "REST APIs", "Node.js", "MongoDB"],
                  color: "green"
                },
                {
                  category: "State Management",
                  icon: Code,
                  skills: ["Provider", "Bloc", "Riverpod", "Cubit"],
                  color: "purple"
                }
              ].map((skillGroup, index) => (
                <FadeIn key={skillGroup.category} delay={index * 0.1}>
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${skillGroup.color}-100 dark:bg-${skillGroup.color}-900/20 rounded-lg flex items-center justify-center`}>
                        <skillGroup.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${skillGroup.color}-600`} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{skill}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4].map((star) => (
                              <div key={star} className={`w-2 h-2 rounded-full ${
                                star <= (index + 3) ? `bg-${skillGroup.color}-500` : 'bg-gray-300 dark:bg-gray-600'
                              }`}></div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section - Mobile optimisé */}
        <AnimatedSection className="py-16 sm:py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Mes projets
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Quelques-unes de mes réalisations récentes
              </p>
            </FadeIn>

            <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce App",
                  description: "Application de shopping avec panier et paiement",
                  technologies: ["Flutter", "Firebase", "Stripe"],
                  gradient: "from-blue-400 to-indigo-500"
                },
                {
                  title: "Social Network",
                  description: "Réseau social avec messagerie instantanée",
                  technologies: ["Flutter", "Node.js", "Socket.io"],
                  gradient: "from-purple-400 to-pink-500"
                },
                {
                  title: "Fitness Tracker",
                  description: "Application de suivi d'activité physique",
                  technologies: ["Flutter", "Health API", "Charts"],
                  gradient: "from-green-400 to-teal-500"
                }
              ].map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.1}>
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="text-center mt-8 sm:mt-12">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Voir tous les projets
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </FadeIn>
          </div>
        </AnimatedSection>

        {/* Contact Section - Mobile optimisé */}
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
                  href="mailto:koudakpo.rodrigue@gmail.com"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Email direct
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
                    <Mail className="w-4 h-4" />
                    <a href="mailto:koudakpo.rodrigue@gmail.com" className="hover:text-white transition-colors">
                      koudakpo.rodrigue@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <Github className="w-4 h-4" />
                    <a href="https://github.com/rodrigue-k" className="hover:text-white transition-colors">
                      github.com/rodrigue-k
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 Rodrigue KOUDAKPO. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
