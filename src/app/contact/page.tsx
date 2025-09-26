'use client';

import { ArrowLeft, Mail, Github, Linkedin, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { AnimatedSection, FadeIn } from '../../components/animations';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status après 3 secondes
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "koudakpo.rodrigue@gmail.com",
      href: "mailto:koudakpo.rodrigue@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+228 XX XX XX XX",
      href: "tel:+228XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Lomé, Togo",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rodrigue-k",
      href: "https://github.com/rodrigue-k"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rodrigue-koudakpo",
      href: "https://linkedin.com/in/rodrigue-koudakpo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation mobile améliorée */}
      <MobileNavigation currentPath="/contact" isDark={isDark} />

      {/* Navigation desktop */}
      <DesktopNavigation currentPath="/contact" isDark={isDark} />

      {/* Header */}
      <AnimatedSection className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l'accueil
            </a>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Me{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                contacter
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discutons de votre projet ou collaboration
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Parlons de votre projet
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Je suis toujours ouvert aux nouvelles opportunités et collaborations.
                  Que ce soit pour un projet mobile, une consultation technique, ou simplement
                  pour échanger sur le développement Flutter, n'hésitez pas à me contacter.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Informations de contact
                </h3>
                {contactInfo.map((info, index) => (
                  <FadeIn key={info.label} delay={index * 0.1}>
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                        <div className="font-medium text-gray-900 dark:text-white">{info.value}</div>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Temps de réponse
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Je m'efforce de répondre à tous les messages dans les 24 heures.
                  Pour les projets urgents, mentionnez-le dans votre message.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envoyez-moi un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      ✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Réponses aux questions les plus courantes
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              {
                question: "Quels sont vos tarifs ?",
                answer: "Les tarifs varient selon la complexité du projet. Je propose des devis personnalisés après analyse de vos besoins."
              },
              {
                question: "Combien de temps prend un projet ?",
                answer: "Un projet simple peut prendre 2-4 semaines, tandis qu'une application complexe peut nécessiter 3-6 mois. Je fournis des estimations précises après analyse."
              },
              {
                question: "Faites-vous le déploiement sur les stores ?",
                answer: "Oui, je gère le déploiement sur Google Play Store et Apple App Store, y compris la préparation des assets et la soumission."
              },
              {
                question: "Proposez-vous un support après livraison ?",
                answer: "Oui, je propose différentes formules de maintenance et support après la livraison du projet."
              }
            ].map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Je suis impatient de travailler avec vous
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:koudakpo.rodrigue@gmail.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                M'écrire directement
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Voir mes projets
              </a>
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                RK
              </div>
              <p className="text-gray-400">
                Développeur mobile Flutter passionné par l'innovation et l'expérience utilisateur.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="/projects" className="hover:text-white transition-colors">Projets</a></li>
                <li><a href="/skills" className="hover:text-white transition-colors">Compétences</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact rapide</h3>
              <ul className="space-y-2 text-gray-400">
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
                <li>
                  <a href="https://linkedin.com/in/rodrigue-koudakpo" className="hover:text-white transition-colors">
                    linkedin.com/in/rodrigue-koudakpo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rodrigue KOUDAKPO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
