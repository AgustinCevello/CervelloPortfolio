
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(prev => prev === 'ES' ? 'EN' : 'ES');
  
  const t = TRANSLATIONS[language];

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden selection:bg-lila-500/30 transition-colors duration-500">
      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Floating Orbs - Increased Blur and Slower Motion */}
        <motion.div 
          animate={{ 
            x: [0, 80, 0], 
            y: [0, 150, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] bg-lila-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -180, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-violet-600/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            x: [-50, 50, -50],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[40%] right-[10%] w-[20vw] h-[20vw] bg-lila-400/5 rounded-full blur-[100px]"
        />

        {/* Technical Grid Divider Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/3 w-px h-full bg-lila-500/[0.04]" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-lila-500/[0.04]" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-lila-500/[0.03] -rotate-[15deg]" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-lila-500/[0.03] rotate-[10deg]" />
          <div className="absolute top-0 left-[15%] w-px h-full bg-violet-500/[0.02]" />
        </div>
      </div>

      <Navbar 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-48 py-24 relative z-10">
        <Hero t={t.hero} />
        <Experience t={t.experience} />
        <Projects t={t.projects} />
        <Skills t={t.skills} />
        <About t={t.about} />
        <Contact t={t.contact} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
