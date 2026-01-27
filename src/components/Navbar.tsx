
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Briefcase, 
  Code, 
  Cpu, 
  User, 
  Mail, 
  Sun, 
  Moon,
  Globe
} from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  language: 'ES' | 'EN';
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode, language, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('inicio');

  const translations = {
    ES: {
      inicio: 'Inicio',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      sobremi: 'Sobre mí',
      contacto: 'Contacto'
    },
    EN: {
      inicio: 'Home',
      experiencia: 'Experience',
      proyectos: 'Projects',
      habilidades: 'Skills',
      sobremi: 'About',
      contacto: 'Contact'
    }
  };

  const t = translations[language];

  const navItems = [
    { id: 'inicio', name: t.inicio, icon: <Home size={18} />, href: '#inicio' },
    { id: 'experiencia', name: t.experiencia, icon: <Briefcase size={18} />, href: '#experiencia' },
    { id: 'proyectos', name: t.proyectos, icon: <Code size={18} />, href: '#proyectos' },
    { id: 'habilidades', name: t.habilidades, icon: <Cpu size={18} />, href: '#habilidades' },
    { id: 'sobre-mi', name: t.sobremi, icon: <User size={18} />, href: '#sobre-mi' },
    { id: 'contacto', name: t.contacto, icon: <Mail size={18} />, href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['inicio', 'experiencia', 'proyectos', 'habilidades', 'sobre-mi', 'contacto'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveItem(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center gap-4 px-4 pointer-events-none">
      {/* 1. Main Navigation Pill */}
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="liquid-glass flex items-center gap-1 p-1.5 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto backdrop-blur-md"
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveItem(item.id)}
              className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group ${
                activeItem === item.id 
                ? 'text-white' 
                : 'text-slate-600 dark:text-slate-400 hover:text-lila-500'
              }`}
            >
              <span className="relative z-10">{item.icon}</span>
              <AnimatePresence>
                {!scrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                    animate={{ opacity: 1, width: 'auto', marginLeft: 4 }}
                    exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                    className="hidden md:block text-[11px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden relative z-10"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
              {activeItem === item.id && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-gradient-to-r from-lila-600 to-violet-700 rounded-full shadow-lg shadow-lila-500/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* 2. Independent Settings Pill */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.1 }}
        className="liquid-glass flex items-center gap-2 p-1.5 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto backdrop-blur-md"
      >
        {/* Language Selector */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-all group"
          title={language === 'ES' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <Globe size={18} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-bold tracking-widest">{language}</span>
        </button>

        <div className="w-px h-6 bg-lila-500/20" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
