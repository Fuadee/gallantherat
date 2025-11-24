import React, { useEffect, useState } from 'react';
import { content } from '../data/content.js';

const Navbar = () => {
  const { logo, items, actions } = content.nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 backdrop-blur bg-white/80 transition-shadow ${
        scrolled ? 'shadow-glass' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-primary/10 text-primary grid place-items-center font-bold shadow-card">
            JJ
          </div>
          <span className="font-semibold text-slate-800 text-sm md:text-base">{logo}</span>
        </div>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {items.map((item) => (
            <a key={item} href="#" className="hover:text-primary">
              {item}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="button-ghost border-secondary text-secondary hover:bg-emerald-50">
            {actions.whatsapp}
          </button>
          <button className="button-ghost">{actions.login}</button>
          <button className="button-primary">{actions.book}</button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button className="button-ghost border-secondary text-secondary hover:bg-emerald-50 px-3 py-2 text-xs">
            {actions.whatsapp}
          </button>
          <button className="button-primary px-4 py-2 text-xs">{actions.book}</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
