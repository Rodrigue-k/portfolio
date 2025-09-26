'use client';

import { useEffect, useState } from 'react';

interface DesktopNavigationProps {
  currentPath: string;
  isDark: boolean;
}

export const DesktopNavigation = ({ currentPath, isDark }: DesktopNavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/projects', label: 'Projets' },
    { href: '/skills', label: 'Compétences' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`hidden md:block fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            RK
          </a>

          {/* Navigation desktop */}
          <div className="flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  currentPath === item.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
