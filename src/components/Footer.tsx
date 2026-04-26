
import React from 'react';
import type { FooterTranslation } from '../types';

const Footer: React.FC<{ t: FooterTranslation }> = ({ t }) => {
  return (
    <footer className="py-12 border-t border-lila-500/10 text-center">
      <div className="container mx-auto px-4">
        <p className="text-slate-500 dark:text-slate-500 text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-lila-500 font-semibold">Agustín Cervello</span>. 
          {t.builtWith}
        </p>
        <p className="mt-2 text-slate-400 dark:text-slate-600 text-xs italic">
          {t.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
