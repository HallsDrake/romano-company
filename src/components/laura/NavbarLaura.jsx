import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarLaura = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-500 px-6 md:px-10 lg:px-16 bg-main ${scrolled ? 'py-4 border-b border-border-subtle shadow-sm' : 'py-8 border-b border-transparent'}`}
      >
        {/* LOGO - Melhor pensada (Stylized text logo) */}
        <a
          href="/"
          className="relative z-50 font-header font-bold tracking-tighter text-2xl md:text-3xl text-text-primary transition-colors"
        >
          ROMANO<span className="text-accent-primary ml-0.5">.</span>
        </a>

        {/* ASTRO-style Center Links */}
        <div className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex items-center gap-16 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">
          <div className={`flex gap-10 ${scrolled ? 'text-text-primary/70' : 'text-text-primary'}`}>
            <a href="/#portfolio" className="hover:text-accent-primary transition-colors">Trabalhos</a>
            <a href="/#servicos" className="hover:text-accent-primary transition-colors">Serviços</a>
          </div>

          {/* Minimalist center anchor/dot */}
          <div className={`w-1.5 h-1.5 rounded-full ${scrolled ? 'bg-accent-primary' : 'bg-text-primary opacity-50'}`} />

          <div className={`flex gap-10 ${scrolled ? 'text-text-primary/70' : 'text-text-primary'}`}>
            <a href="/#sobre" className="hover:text-accent-primary transition-colors">Manifesto</a>
            <a href="/#contato" className="hover:text-accent-primary transition-colors">Contato</a>
          </div>
        </div>

        {/* Right Actions & CTA */}
        <div className="hidden lg:flex items-center gap-8 z-50">
          {/* Instagram Icon acting as the "User/Search" icons from the ASTRO reference */}
          <a href="https://instagram.com/romanolaurah" target="_blank" rel="noreferrer" className={`transition-colors hover:text-accent-primary ${scrolled ? 'text-text-primary' : 'text-text-primary'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>

          <a href="/#contato" className={`py-2.5 px-6 text-[9px] uppercase font-bold tracking-[0.2em] rounded-[30px] transition-all duration-300 ${scrolled ? 'btn-premium' : 'btn-premium shadow-2xl hover:scale-105'}`}>
            INICIAR PROJETO
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-end justify-center gap-1.5 z-50"
        >
          <span className={`block h-[2px] transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-[8px] bg-text-primary' : `w-8 ${scrolled ? 'bg-text-primary' : 'bg-main'}`}`} />
          <span className={`block h-[2px] transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-[8px] bg-text-primary' : `w-6 ${scrolled ? 'bg-text-primary' : 'bg-main'}`}`} />
        </button>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-main flex flex-col items-center justify-center p-6"
          >
            <ul className="flex flex-col gap-8 text-center w-full">
              <li className="overflow-hidden">
                <a href="/#portfolio" onClick={() => setMenuOpen(false)} className="text-4xl font-header font-bold text-text-primary hover:text-accent-primary transition-colors block">
                  Trabalhos
                </a>
              </li>
              <li className="overflow-hidden">
                <a href="/#servicos" onClick={() => setMenuOpen(false)} className="text-4xl font-header font-bold text-text-primary hover:text-accent-primary transition-colors block">
                  Serviços
                </a>
              </li>
              <li className="overflow-hidden">
                <a href="/#sobre" onClick={() => setMenuOpen(false)} className="text-4xl font-header font-bold text-text-primary hover:text-accent-primary transition-colors block">
                  Manifesto
                </a>
              </li>
              <li className="overflow-hidden">
                <a href="/#contato" onClick={() => setMenuOpen(false)} className="text-4xl font-header font-bold text-text-primary hover:text-accent-primary transition-colors block">
                  Contato
                </a>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 left-10 right-10 flex flex-col gap-6 text-center border-t border-border-subtle pt-6"
            >
              <a href="/#contato" onClick={() => setMenuOpen(false)} className="btn-premium w-full flex items-center justify-center">
                INICIAR PROJETO
              </a>
              <a href="https://instagram.com/romanolaurah" className="text-[10px] uppercase tracking-widest font-bold text-text-secondary w-full">
                Siga no Instagram
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarLaura;
