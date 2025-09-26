'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileNavigationProps {
  currentPath: string;
  isDark: boolean;
}

export const MobileNavigation = ({ currentPath, isDark }: MobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fermer le menu lors du changement de route
  useEffect(() => {
    closeMenu();
  }, [currentPath]);

  const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/projects', label: 'Projets' },
    { href: '/skills', label: 'Compétences' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Navigation principale mobile - visible uniquement sur mobile */}
      <nav className={`mobile-nav ${isDark ? 'dark' : ''} md:hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              RK
            </a>

            {/* Menu hamburger - visible uniquement sur mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile - visible uniquement sur mobile */}
      <div className={`mobile-menu ${isDark ? 'dark' : ''} ${isMenuOpen ? 'open' : ''} md:hidden`}>
        <div className="px-4 py-6 space-y-4">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-3 px-4 rounded-lg text-base font-medium transition-all ${
                currentPath === item.href
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Actions rapides */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href="mailto:koudakpo.rodrigue@gmail.com"
              className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">📧</span>
              </div>
              <span className="font-medium">Email</span>
            </a>

            <a
              href="https://github.com/rodrigue-k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
            >
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-sm">🐙</span>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay pour fermer le menu - visible uniquement sur mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};
