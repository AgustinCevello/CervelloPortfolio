
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="experiencia" className="scroll-mt-32">
      <div className="flex items-center gap-5 mb-20">
        <div className="p-4 rounded-2xl bg-lila-500/15 text-lila-600 dark:text-lila-400">
          <Briefcase size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100">{t.title}</h2>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-lila-500/30 before:to-transparent">
        {t.items.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            {/* Dot Indicator */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-lila-500/40 liquid-glass shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-white dark:bg-slate-900 z-10">
              <div className="w-4 h-4 bg-gradient-to-br from-lila-500 to-violet-700 rounded-full animate-pulse"></div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] liquid-glass p-8 rounded-[2rem] hover:border-lila-500/50 transition-all duration-500 shadow-xl border border-lila-500/10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">{item.role}</h3>
                <span className="text-xs font-black px-4 py-1.5 rounded-full bg-lila-600 text-white shadow-lg shadow-lila-600/20 uppercase tracking-widest">
                  {item.period}
                </span>
              </div>
              <p className="text-lila-600 dark:text-lila-400 font-black text-lg mb-6">{item.company}</p>
              <ul className="space-y-4 text-slate-700 dark:text-slate-400 text-base font-medium">
                {item.desc.map((d: string, i: number) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-lila-500 mt-2 w-2 h-2 rounded-full bg-lila-500 shrink-0 shadow-sm shadow-lila-500"></span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
