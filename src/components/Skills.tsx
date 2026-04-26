
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { Cpu } from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPostgresql, SiVercel,
  SiOpenai, SiGit, SiVite, SiJest, SiFigma,
  SiJavascript, SiHtml5, SiCss, SiPython,
  SiSocketdotio
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { SkillsTranslation } from '../types';

const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('react native'))         return <SiReact size={28} />;
  if (n.includes('react') || n.includes('next')) return <SiNextdotjs size={28} />;
  if (n.includes('typescript'))           return <SiTypescript size={28} />;
  if (n.includes('tailwind'))             return <SiTailwindcss size={28} />;
  if (n.includes('node'))                 return <SiNodedotjs size={28} />;
  if (n.includes('postgres') || n.includes('prisma')) return <SiPostgresql size={28} />;
  if (n.includes('websocket') || n.includes('sse'))   return <SiSocketdotio size={28} />;
  if (n.includes('vercel'))               return <SiVercel size={28} />;
  if (n.includes('aws'))                  return <FaAws size={28} />;
  if (n.includes('openai') || n.includes('llm'))      return <SiOpenai size={28} />;
  if (n.includes('git'))                  return <SiGit size={28} />;
  if (n.includes('vite'))                 return <SiVite size={28} />;
  if (n.includes('jest'))                 return <SiJest size={28} />;
  if (n.includes('figma'))                return <SiFigma size={28} />;
  if (n.includes('javascript') || n.includes('js'))   return <SiJavascript size={28} />;
  if (n.includes('html'))                 return <SiHtml5 size={28} />;
  if (n.includes('css'))                  return <SiCss size={28} />;
  if (n.includes('python'))               return <SiPython size={28} />;
  return <Cpu size={28} />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 24 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 }
  },
  exit: { opacity: 0, scale: 0.85, y: -12, transition: { duration: 0.15 } }
};

const Skills: React.FC<{ t: SkillsTranslation }> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState(SKILLS_DATA[0].name);

  return (
    <section id="habilidades" className="scroll-mt-32">
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="p-4 rounded-3xl bg-lila-500/15 text-lila-600 dark:text-lila-400 mb-6" aria-hidden="true">
          <Cpu size={36} />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">{t.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg font-medium">
          {t.description}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div
        role="tablist"
        aria-label="Categorías de habilidades"
        className="flex flex-row overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 md:gap-3 mb-16 p-2 liquid-glass w-full md:w-fit max-w-3xl mx-auto rounded-[2rem] border border-lila-500/10"
      >
        {SKILLS_DATA.map((cat) => (
          <button
            key={cat.name}
            role="tab"
            aria-selected={activeCategory === cat.name}
            aria-controls={`tabpanel-${cat.name}`}
            onClick={() => setActiveCategory(cat.name)}
            className={`whitespace-nowrap flex-shrink-0 px-5 md:px-8 py-2.5 md:py-3 rounded-[1.5rem] text-[11px] md:text-sm font-black uppercase tracking-widest transition-all duration-300 relative ${
              activeCategory === cat.name
                ? 'text-white'
                : 'text-slate-500 dark:text-slate-500 hover:text-lila-500 hover:bg-white/10 dark:hover:bg-white/5'
            }`}
          >
            <span className="relative z-10">{cat.name}</span>
            {activeCategory === cat.name && (
              <motion.div
                layoutId="catTabHighlight"
                className="absolute inset-0 bg-gradient-to-r from-lila-600 to-violet-700 rounded-[1.5rem] shadow-xl shadow-lila-600/30"
                transition={{ type: 'spring', bounce: 0.1, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div className="min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id={`tabpanel-${activeCategory}`}
            role="tabpanel"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto px-4"
          >
            {SKILLS_DATA.find(c => c.name === activeCategory)?.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                <div className="organic-shape w-full aspect-square liquid-glass flex flex-col items-center justify-center p-8 bg-gradient-to-br from-lila-500/5 via-transparent to-transparent group-hover:from-lila-500/15 group-hover:border-lila-500/40 transition-all duration-700 shadow-xl border border-lila-500/10">
                  <div className="mb-5 text-lila-600 dark:text-lila-400 group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500" aria-hidden="true">
                    {getIcon(skill.name)}
                  </div>
                  <h4 className="text-base font-black text-slate-900 dark:text-slate-100 text-center tracking-tight mb-4 uppercase">
                    {skill.name}
                  </h4>

                  {/* Visual Progress */}
                  <div className="w-16 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden" aria-hidden="true">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-lila-500 to-violet-600"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
