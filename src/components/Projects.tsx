// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import type { ProjectsTranslation, Project } from '../types';

const Projects: React.FC<{ t: ProjectsTranslation }> = ({ t }) => {
  
  // Función para obtener el ícono (La mantenemos igual, es solo visual)
  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return <i className="bx bxl-react text-lg" />;
    if (t.includes('javascript') || t.includes('js')) return <i className="bx bxl-javascript text-lg" />;
    if (t.includes('typescript')) return <i className="bx bxl-typescript text-lg" />;
    if (t.includes('html')) return <i className="bx bxl-html5 text-lg" />;
    if (t.includes('css') || t.includes('tailwind')) return <i className="bx bxl-css3 text-lg" />;
    if (t.includes('python')) return <i className="bx bxl-python text-lg" />;
    if (t.includes('node')) return <i className="bx bxl-nodejs text-lg" />;
    if (t.includes('sql') || t.includes('postgres')) return <i className="bx bxl-postgresql text-lg" />;
    if (t.includes('git')) return <i className="bx bxl-git text-lg" />;
    if (t.includes('figma')) return <i className="bx bxl-figma text-lg" />;
    if (t.includes('next')) return <i className="bx bxl-react text-lg" />;
    if (t.includes('wordpress')) return <i className="bx bxl-wordpress text-lg" />;
    if (t.includes('php')) return <i className="bx bxl-php text-lg" />;
    return <Code size={16} />;
  };

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
                // Nota: Aquí sigo usando picsum, pero idealmente deberías agregar una propiedad 'image' en tu data también
                src={`https://picsum.photos/seed/${project.title.split(' ')[0]}/800/450`} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 backdrop-blur-[2px]">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.url}   // <--- ¡AQUÍ ESTÁ LA MAGIA! Usamos la URL directa
                  target="_blank"
                  rel="noopener noreferrer"
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
                    className="text-xs font-black px-4 py-2 rounded-xl bg-lila-500/10 text-lila-600 dark:text-lila-400 border border-lila-500/20 uppercase tracking-tighter flex items-center gap-2"
                  >
                    {getTechIcon(tech)}
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