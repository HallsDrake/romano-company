import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LogoAnotherLevel from './LogoAnotherLevel';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLandingPage = location.pathname === '/landing-page';

  const navLinks = isLandingPage 
    ? [
        { name: 'Processo', href: '#metodologia' },
        { name: 'Resultados', href: '#results' },
        { name: 'Planos', href: '#plans' }
      ]
    : [
        { name: 'Método', href: '#metodologia' },
        { name: 'Cases', href: '#results' },
        { name: 'Planos', href: '#plans' }
      ];

  return (
    <nav className="fixed top-10 left-0 right-0 z-50 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500
            ${isScrolled
              ? 'bg-bg-deep/80 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-bg-deep/20 border-white/5 backdrop-blur-md'}
          `}
        >
          {/* Logo & System Detail */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              {isLandingPage ? (
                <LogoAnotherLevel />
              ) : (
                <img
                  src="/assets/logos/Logo horizontal branco.svg"
                  alt="Levers"
                  className="h-6 w-auto transition-all duration-300"
                />
              )}
            </Link>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] font-mono text-text-tertiary uppercase tracking-widest">Core // v1.0.4</span>
            </div>
          </div>

          {/* Desktop Nav Links - Enhanced with Sliding Pill */}
          <div className="hidden md:flex items-center gap-4 p-1 bg-white/[0.02] border border-white/5 rounded-full relative">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredId(link.name)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-white transition-colors z-10"
              >
                {link.name}
                {hoveredId === link.name && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 group"
            >
              Falar com a equipe
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 p-8 bg-bg-deep border border-white/10 rounded-[2rem] backdrop-blur-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] md:hidden z-40 mx-6"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-white hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                  <button className="text-sm font-mono uppercase tracking-widest text-text-secondary text-left">
                    Sign In
                  </button>
                  <a
                    href="#plans"
                    className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold uppercase tracking-widest"
                  >
                    Falar com a equipe
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
