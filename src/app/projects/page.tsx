'use client';

import { Github, ExternalLink, ArrowLeft, Calendar, Users, Star } from 'lucide-react';
import { AnimatedSection, FadeIn } from '../../components/animations';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { useEffect, useState } from 'react';

export default function Projects() {
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

  const projects = [
    {
      id: 1,
      title: "Application E-commerce Mobile",
      description: "Une application mobile complète de e-commerce développée avec Flutter, intégrant un panier d'achat, un système de paiement sécurisé et une gestion des commandes en temps réel.",
      longDescription: "Cette application offre une expérience d'achat fluide avec des fonctionnalités avancées comme la recherche intelligente, les filtres de produits, les avis clients, et un système de notifications push. L'interface utilisateur est optimisée pour une navigation intuitive sur mobile.",
      technologies: ["Flutter", "Firebase", "Stripe", "Provider", "REST APIs"],
      gradient: "from-blue-400 to-indigo-500",
      github: "https://github.com/rodrigue-k/ecommerce-app",
      demo: "#",
      features: [
        "Panier d'achat persistant",
        "Intégration Stripe pour les paiements",
        "Gestion des commandes en temps réel",
        "Notifications push",
        "Recherche et filtres avancés"
      ],
      duration: "3 mois",
      team: "Solo",
      status: "Terminé"
    },
    {
      id: 2,
      title: "Réseau Social Mobile",
      description: "Application de réseau social moderne avec messagerie instantanée, système de stories et notifications push.",
      longDescription: "Une plateforme sociale complète permettant aux utilisateurs de partager du contenu, d'interagir via messagerie instantanée, et de découvrir du contenu personnalisé basé sur leurs intérêts. L'application inclut un système de stories éphémères et des fonctionnalités de géolocalisation.",
      technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Firebase"],
      gradient: "from-purple-400 to-pink-500",
      github: "https://github.com/rodrigue-k/social-app",
      demo: "#",
      features: [
        "Messagerie instantanée",
        "Système de stories",
        "Géolocalisation",
        "Notifications push",
        "Interface adaptative"
      ],
      duration: "4 mois",
      team: "Équipe de 3",
      status: "Terminé"
    },
    {
      id: 3,
      title: "Application Fitness Tracker",
      description: "Tracker d'activité physique avec suivi GPS, statistiques détaillées et intégration avec les capteurs du téléphone.",
      longDescription: "Application complète de suivi fitness permettant aux utilisateurs de monitorer leurs activités physiques, de planifier des entraînements personnalisés, et d'analyser leurs performances avec des graphiques détaillés. Intégration avec Google Fit et Apple Health.",
      technologies: ["Flutter", "Health API", "Charts", "Bloc", "SQLite"],
      gradient: "from-green-400 to-teal-500",
      github: "https://github.com/rodrigue-k/fitness-app",
      demo: "#",
      features: [
        "Suivi GPS des activités",
        "Statistiques détaillées",
        "Plans d'entraînement",
        "Intégration capteurs",
        "Synchronisation cloud"
      ],
      duration: "2 mois",
      team: "Solo",
      status: "Terminé"
    },
    {
      id: 4,
      title: "Gestionnaire de Tâches Collaboratif",
      description: "Application de gestion de projets avec fonctionnalités de collaboration en temps réel et suivi des tâches.",
      longDescription: "Outil de productivité permettant aux équipes de gérer leurs projets efficacement avec des tableaux Kanban, des diagrammes de Gantt, et un système de collaboration en temps réel. Interface responsive et synchronisation multi-appareils.",
      technologies: ["Flutter", "Firebase", "Bloc", "Charts", "Push Notifications"],
      gradient: "from-orange-400 to-red-500",
      github: "https://github.com/rodrigue-k/task-manager",
      demo: "#",
      features: [
        "Tableaux Kanban",
        "Collaboration temps réel",
        "Diagrammes de Gantt",
        "Notifications push",
        "Export PDF"
      ],
      duration: "3 mois",
      team: "Équipe de 2",
      status: "En cours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation mobile améliorée */}
      <MobileNavigation currentPath="/projects" isDark={isDark} />

      {/* Navigation desktop */}
      <DesktopNavigation currentPath="/projects" isDark={isDark} />

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
                projets
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Découvrez en détail mes réalisations en développement mobile Flutter
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Projects Grid - Mobile optimisé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="space-y-12 sm:space-y-20">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
                {/* Project Header - Mobile optimisé */}
                <div className={`h-48 sm:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-medium mb-2">
                          {project.status}
                        </span>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
                        <p className="text-blue-100 text-sm sm:text-base hidden sm:block">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <a
                          href={project.github}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </a>
                        <a
                          href={project.demo}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content - Mobile optimisé */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Description du projet
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Fonctionnalités */}
                    <div>
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Fonctionnalités principales
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Informations projet */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Durée</div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{project.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Équipe</div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{project.team}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Statut</div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{project.status}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* CTA Section - Mobile optimisé */}
      <AnimatedSection className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Intéressé par un projet ?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Discutons ensemble de votre idée d'application mobile
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
