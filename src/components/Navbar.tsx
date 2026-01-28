import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      
      {/* 1. NAVEGACIÓN PRINCIPAL (INDICADOR FLUIDO) */}
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
            // Eliminamos transiciones de Tailwind que puedan chocar con Framer Motion
            className="relative flex items-center justify-center px-4 py-2 rounded-full no-underline group"
          >
            {/* TEXTO E ICONO: Siempre en z-10 y con layout fijo */}
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

            {/* EL INDICADOR: Usamos layoutId con un motor de spring más rígido */}
            {activeItem === item.id && (
              <motion.div
                layoutId="nav-bg" // Cambiamos el ID para resetear cualquier caché de animación
                className="absolute inset-0 bg-gradient-to-r from-lila-600 to-violet-700 rounded-full shadow-lg"
                transition={{
                  type: "spring",
                  stiffness: 500, // Más rigidez para evitar el "rebote"
                  damping: 35,    // Suficiente amortiguación para que no tiemble
                  mass: 1
                }}
                // Esto fuerza a que la animación se calcule solo sobre la posición
                style={{ originY: "center" }} 
              />
            )}
          </a>
        ))}
      </motion.nav>

      {/* 2. BOTONES DE CONFIGURACIÓN (IDIOMA Y TEMA) */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="liquid-glass flex items-center gap-2 p-1.5 rounded-full border border-lila-500/20 shadow-xl pointer-events-auto"
      >
        {/* Selector de Idioma */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-all group"
        >
          <Globe size={18} className="group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-bold">{language}</span>
        </button>

        <div className="w-px h-6 bg-lila-500/20" />

        {/* Toggle de Tema */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 hover:bg-lila-500/20 hover:text-lila-500 transition-colors"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;