import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import type { ProjectsTranslation, Project } from '../types';

const Projects: React.FC<{ t: ProjectsTranslation }> = ({ t }) => {
  return (
    <section id="proyectos" className="scroll-mt-32">
      <div className="flex items-center gap-5 mb-20">
        <div className="p-4 rounded-2xl bg-lila-500/15 text-lila-600 dark:text-lila-400">
          <Code size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100">{t.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {t.items.map((project: Project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group liquid-glass rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-lila-500/10 hover:border-lila-500/40 transition-all duration-700 shadow-2xl"
          >
            <div className="relative h-72 overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${project.title.split(' ')[0]}/800/450`} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 backdrop-blur-[2px]">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  target="_blank" 
                  className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-lila-500 hover:text-white transition-all shadow-2xl"
                >
                  {t.visit} <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>

            <div className="p-10 flex flex-col flex-grow bg-white/50 dark:bg-transparent">
              <h3 className="text-3xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-lila-500 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-400 mb-8 text-lg font-medium leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.techs.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="text-xs font-black px-4 py-2 rounded-xl bg-lila-500/10 text-lila-600 dark:text-lila-400 border border-lila-500/20 uppercase tracking-tighter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;