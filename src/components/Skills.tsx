
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { Cpu, Layout, Server, Database, Terminal, GitBranch, Figma, Zap, ShieldCheck } from 'lucide-react';

const Skills: React.FC<{ t: any }> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState(SKILLS_DATA[0].name);

  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('react') || n.includes('tailwind') || n.includes('html') || n.includes('framer')) return <Layout size={26} />;
    if (n.includes('js') || n.includes('python')) return <Terminal size={26} />;
    if (n.includes('node')) return <Server size={26} />;
    if (n.includes('sql') || n.includes('postgres')) return <Database size={26} />;
    if (n.includes('arduino') || n.includes('hardware')) return <Cpu size={26} />;
    if (n.includes('git') || n.includes('scrum')) return <GitBranch size={26} />;
    if (n.includes('figma')) return <Figma size={26} />;
    if (n.includes('zap') || n.includes('energía')) return <Zap size={26} />;
    if (n.includes('shield') || n.includes('seguridad')) return <ShieldCheck size={26} />;
    return <Cpu size={26} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="habilidades" className="scroll-mt-32">
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="p-4 rounded-3xl bg-lila-500/15 text-lila-600 dark:text-lila-400 mb-6">
          <Cpu size={36} />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">{t.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg font-medium">
          {t.description}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 liquid-glass max-w-2xl mx-auto rounded-[2rem] border border-lila-500/10">
        {SKILLS_DATA.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-500 relative ${
              activeCategory === cat.name 
              ? 'text-white' 
              : 'text-slate-500 dark:text-slate-500 hover:text-lila-500'
            }`}
          >
            <span className="relative z-10">{cat.name}</span>
            {activeCategory === cat.name && (
              <motion.div
                layoutId="catTabHighlight"
                className="absolute inset-0 bg-gradient-to-r from-lila-600 to-violet-700 rounded-2xl shadow-xl shadow-lila-600/30"
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
                  <div className="mb-5 text-lila-600 dark:text-lila-400 group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500">
                    {getIcon(skill.name)}
                  </div>
                  <h4 className="text-base font-black text-slate-900 dark:text-slate-100 text-center tracking-tight mb-4 uppercase">
                    {skill.name}
                  </h4>
                  
                  {/* Visual Progress Sutil */}
                  <div className="w-16 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
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
