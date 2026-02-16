import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/obra', label: t('nav.obra') },
    { path: '/mujer-x', label: t('nav.mujerx') },
    { path: '/sobre-mi', label: t('nav.about') },
    { path: '/cv', label: t('nav.cv') },
    { path: '/contacto', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 ${mobileMenuOpen ? 'z-[110]' : 'z-50'} bg-background/95 backdrop-blur-sm`}>
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo / Name */}
          <Link 
            to="/" 
            className="font-serif text-lg md:text-xl tracking-wide transition-opacity duration-300 hover:opacity-70"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <span style={{ fontFamily: "'Elegant', serif" }}>Beatriz Deza</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4 border-l border-border pl-4">
              <button
                onClick={() => setLanguage('es')}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 px-2 py-1 ${
                  language === 'es' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
              <span className="text-muted-foreground/50">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 px-2 py-1 ${
                  language === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 relative z-[110]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu - rendered outside header to avoid stacking context issues */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[100] overflow-y-auto pt-[72px]"
          style={{ backgroundColor: 'hsl(40, 20%, 98%)' }}
        >
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-serif transition-colors duration-300 ${
                  isActive(item.path) ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border">
              <button
                onClick={() => {
                  setLanguage('es');
                  setMobileMenuOpen(false);
                }}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  language === 'es' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => {
                  setLanguage('en');
                  setMobileMenuOpen(false);
                }}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  language === 'en' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
