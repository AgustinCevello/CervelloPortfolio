
import React from 'react';
import type { FooterTranslation } from '../types';

const Footer: React.FC<{ t: FooterTranslation }> = ({ t }) => {
  return (
    <footer className="py-12 border-t border-lila-500/10 text-center">
      <div className="container mx-auto px-4">
        <p className="text-slate-500 dark:text-slate-500 text-sm md:text-base font-medium">
          © {new Date().getFullYear()} <span className="text-lila-500 font-bold">Agustín Cervello</span>
          <span className="mx-2 hidden sm:inline-block">·</span>
          <span className="block sm:inline-block mt-1 sm:mt-0">{t.builtWith}</span>
        </p>
        <p className="mt-3 text-slate-400/80 dark:text-slate-600/80 text-xs italic tracking-wide">
          {t.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
