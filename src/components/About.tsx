
import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="sobre-mi" className="scroll-mt-32">
      <div className="flex items-center gap-5 mb-16">
        <div className="p-4 rounded-2xl bg-lila-500/15 text-lila-600 dark:text-lila-400">
          <User size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100">{t.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-2 space-y-8 text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
          <p dangerouslySetInnerHTML={{ __html: t.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
          <p dangerouslySetInnerHTML={{ __html: t.p3 }} />
          
          <div className="flex items-center gap-3 text-lila-700 dark:text-lila-400 mt-12 bg-lila-500/5 p-6 rounded-3xl border border-lila-500/10 w-fit">
            <MapPin size={24} className="animate-bounce" />
            <span className="font-bold tracking-tight">{t.location}</span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="liquid-glass p-8 rounded-[2.5rem] border border-lila-500/15 shadow-2xl">
            <div className="flex items-center gap-4 mb-8 text-lila-600 dark:text-lila-400">
              <GraduationCap size={28} />
              <h3 className="text-xl font-black uppercase tracking-widest">{t.eduTitle}</h3>
            </div>
            <ul className="space-y-6">
              {[
                { title: t.edu1, sub: t.edu1Sub },
                { title: t.edu2, sub: t.edu2Sub },
                { title: t.edu3, sub: t.edu3Sub }
              ].map((edu, idx) => (
                <li key={idx} className="border-l-4 border-lila-500/30 pl-6 py-2 group hover:border-lila-500 transition-all">
                  <p className="font-black text-lg text-slate-900 dark:text-slate-100 group-hover:text-lila-600 transition-colors">{edu.title}</p>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-500">{edu.sub}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="liquid-glass p-8 rounded-[2.5rem] border border-lila-500/15 shadow-2xl">
            <h3 className="text-xl font-black text-lila-600 dark:text-lila-400 mb-8 uppercase tracking-widest">{t.langTitle}</h3>
            <div className="space-y-4">
              {[
                { name: t.lang1, lvl: t.lang1Lvl, p: '100%' },
                { name: t.lang2, lvl: t.lang2Lvl, p: '70%' },
                { name: t.lang3, lvl: t.lang3Lvl, p: '20%' }
              ].map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-slate-800 dark:text-slate-200">{lang.name}</span>
                    <span className="text-lila-600 dark:text-lila-400 text-xs px-2 py-1 bg-lila-500/10 rounded-lg">{lang.lvl}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.p }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-full bg-gradient-to-r from-lila-500 to-violet-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
