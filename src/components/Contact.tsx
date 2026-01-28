
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import type { ContactTranslation } from '../types';

const Contact: React.FC<{ t: ContactTranslation }> = ({ t }) => {
  const contacts = [
    {
      name: 'Gmail',
      value: 'aguscervello@gmail.com',
      href: 'mailto:aguscervello@gmail.com',
      icon: <Mail size={26} />,
      color: 'text-brand-gmail',
      bgColor: 'bg-brand-gmail/10',
      label: t.labels.email
    },
    {
      name: 'WhatsApp',
      value: '+54 9 11 5465-9113',
      href: 'https://wa.me/5491154659113',
      icon: <MessageCircle size={26} />,
      color: 'text-brand-whatsapp',
      bgColor: 'bg-brand-whatsapp/10',
      label: t.labels.chat
    },
    {
      name: 'LinkedIn',
      value: 'Agustín Cervello',
      href: 'https://www.linkedin.com/in/agustin-cervello-b04b37235/',
      icon: <Linkedin size={26} />,
      color: 'text-brand-linkedin',
      bgColor: 'bg-brand-linkedin/10',
      label: t.labels.connect
    },
    {
      name: 'GitHub',
      value: 'AgustinCevello',
      href: 'https://github.com/AgustinCevello',
      icon: <Github size={26} />,
      color: 'text-slate-900 dark:text-white',
      bgColor: 'bg-slate-500/10',
      label: t.labels.repos
    }
  ];

  return (
    <section id="contacto" className="scroll-mt-32 pb-32">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="p-4 rounded-3xl bg-lila-500/15 text-lila-600 dark:text-lila-400 mb-6">
          <Send size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6">{t.title}</h2>
        <p className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl font-medium">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.name}
            href={contact.href}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.05 }}
            className="liquid-glass p-8 rounded-[2.5rem] group flex flex-col items-center text-center transition-all border border-lila-500/10 hover:border-lila-500/40 shadow-xl hover:shadow-lila-500/10"
          >
            <div className={`p-5 rounded-2xl mb-6 transition-transform group-hover:scale-110 shadow-lg ${contact.bgColor} ${contact.color}`}>
              {contact.icon}
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">
              {contact.name}
            </h3>
            <p className="text-base font-black text-slate-900 dark:text-slate-100 mb-6 break-all px-2 tracking-tight">
              {contact.value}
            </p>
            <div className="mt-auto flex items-center gap-2 text-sm font-black text-lila-600 dark:text-lila-400 uppercase tracking-widest group-hover:text-lila-500 transition-colors">
              {contact.label} <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
