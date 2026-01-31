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
  Globe,
  Menu,
  X
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR DESKTOP - Se oculta en móvil */}
      <div className="hidden lg:flex fixed top-6 left-0 right-0 z-50 items-center justify-center gap-4 px-4 pointer-events-none">
        
        {/* NAVEGACIÓN PRINCIPAL (INDICADOR FLUIDO) */}
        <motion.nav
          layout
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="liquid-glass flex items-center gap-1 p-1.5 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto transition-all duration-500"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveItem(item.id)}
              className="relative flex items-center justify-center px-4 py-2 rounded-full no-underline group"
            >
              <span className={`relative z-10 flex items-center gap-2 font-medium transition-colors duration-200 ${
                activeItem === item.id ? 'text-white' : 'text-slate-400 hover:text-lila-400'
              }`}>
                {item.icon}
                {!scrolled && (
                  <span className="hidden md:block text-[11px] font-bold uppercase tracking-wider">
                    {item.name}
                  </span>
                )}
              </span>

              {activeItem === item.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-gradient-to-r from-lila-600 to-violet-700 rounded-full shadow-lg"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    mass: 1
                  }}
                  style={{ originY: "center" }} 
                />
              )}
            </a>
          ))}
        </motion.nav>

        {/* BOTONES DE CONFIGURACIÓN (IDIOMA Y TEMA) */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="liquid-glass flex items-center gap-2 p-1.5 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto"
        >
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-all group"
          >
            <Globe size={18} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] font-bold">{language}</span>
          </button>

          <div className="w-px h-6 bg-lila-500/20" />

          <button
            type="button"
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </motion.div>
      </div>

      {/* NAVBAR MOBILE - Solo se muestra en móvil */}
      <div className="lg:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
        
        {/* Logo/Botón de menú */}
        <motion.button
          type="button"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="liquid-glass p-3 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto hover:bg-lila-500/10 transition-all"
        >
          {mobileMenuOpen ? (
            <X size={20} className="text-lila-500" />
          ) : (
            <Menu size={20} className="text-lila-500" />
          )}
        </motion.button>

        {/* Botones de configuración móvil */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="liquid-glass flex items-center gap-2 p-1.5 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto"
        >
          <button
            type="button"
            aria-label={`Cambiar idioma a ${language === 'ES' ? 'inglés' : 'español'}`}
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-all"
          >
            <Globe size={18} />
          </button>

          <div className="w-px h-5 bg-lila-500/20" />

          <button
            type="button"
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </motion.div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel del menú */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-[280px] bg-white dark:bg-slate-900 shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header del menú */}
              <div className="p-6 border-b border-lila-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lila-600 to-violet-700 flex items-center justify-center">
                    <Code size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Agustín Cervello</h3>
                    <p className="text-xs text-lila-600">Portfolio</p>
                  </div>
                </div>
              </div>

              {/* Items del menú */}
              <nav className="p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-4 px-4 py-3.5 mb-2 rounded-xl transition-all ${
                      activeItem === item.id
                        ? 'bg-gradient-to-r from-lila-600 to-violet-700 text-white shadow-lg'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-lila-500/10'
                    }`}
                  >
                    <span className={activeItem === item.id ? 'text-white' : 'text-lila-600'}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </nav>

              {/* Footer del menú */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-lila-500/20">
                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                  © 2025 BAA
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;