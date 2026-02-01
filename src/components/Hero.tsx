import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import type { HeroTranslation } from '../types';

const Hero: React.FC<{ t: HeroTranslation }> = ({ t }) => {
  return (
    <section id="inicio" className="min-h-[85vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mb-10"
      >
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-lila-500/20 liquid-glass p-1.5 shadow-2xl">
          <img 
            src="/src/assets/images/Perfil.png" 
            alt="Agustín Cervello" 
            className="w-full h-full object-cover rounded-full transition-all duration-500"
          />
        </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-12px] border border-dashed border-lila-500/30 rounded-full"
        />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
      >
        {t.greeting} <span className="text-gradient">Agustín</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-3xl text-slate-800 dark:text-slate-200 max-w-3xl mb-10 font-bold leading-tight"
      >
        {t.role}
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 font-medium"
      >
        {t.description}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-16"
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="https://drive.google.com/file/d/1_rM77RrcADeriDioE24UMZL_jVQAnum3/view?usp=sharing"
          target="_blank"
          className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-lila-600 to-violet-700 text-white rounded-2xl font-bold shadow-xl shadow-lila-600/30 transition-all group"
        >
          {t.cvBtn}
          <Download size={22} className="group-hover:translate-y-1 transition-transform" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="#proyectos"
          className="flex items-center gap-3 px-10 py-5 liquid-glass text-slate-900 dark:text-slate-100 rounded-2xl font-bold hover:bg-lila-500/10 transition-all group border border-slate-300/50 dark:border-white/10"
        >
          {t.projectsBtn}
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-8"
      >
        {[
          { icon: <Github size={24} />, url: 'https://github.com/AgustinCevello', label: 'GitHub' },
          { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/agustin-cervello-b04b37235/', label: 'LinkedIn' },
          { icon: <Mail size={24} />, url: 'mailto:aguscervello@gmail.com', label: 'Email' }
        ].map((social, i) => (
          <motion.a
            key={i}
            whileHover={{ y: -6, scale: 1.2 }}
            href={social.url}
            target="_blank"
            className="p-4 rounded-2xl bg-lila-500/10 text-lila-600 dark:text-lila-400 hover:bg-lila-500/20 transition-all border border-lila-500/20 shadow-sm"
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;