import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Link as LinkIcon, Layout } from 'lucide-react';
import { IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import LogoAnotherLevel from './LogoAnotherLevel';

export const Footer = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing-page';

  return (
    <>
      {/* 1. PENULTIMA SEÇÃO (CTA) - OFF-WHITE AS REQUESTED */}
      <section className="section-premium bg-bg-offwhite py-20 lg:py-40 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 md:mb-12 max-w-5xl mx-auto text-balance text-inverse"
          >
            Cada dia sem uma estrutura de conversão é <span className="text-blue-600">tráfego sendo desperdiçado.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base md:text-xl text-inverse-secondary max-w-2xl mx-auto mb-10 md:mb-16 opacity-70"
          >
            Se você já investe em mídia, já está pagando por visitas que não convertem. O problema não é o volume. É o que acontece depois que a pessoa chega.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-4 ${isLandingPage ? 'bg-blue-600 hover:bg-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.3)]' : 'bg-blue-600 hover:bg-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.3)]'} text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm transition-all group`}
            >
              Quero uma estrutura que converte
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. ACTUAL FOOTER (MINIMALIST) */}
      <footer className="bg-bg-deep py-20 border-t border-white/5 w-full">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

          {/* Left Side: Branding & Positioning */}
          <div className="flex flex-col gap-6">
            {isLandingPage ? (
              <LogoAnotherLevel />
            ) : (
              <img
                src="/assets/logos/Logo horizontal branco.svg"
                alt="Levers"
                className="h-6 w-auto opacity-90"
              />
            )}
            <div className="space-y-1">
              <p className={`text-[9px] md:text-[10px] font-mono ${isLandingPage ? 'text-blue-500 font-bold' : 'text-text-secondary opacity-40'} uppercase tracking-[0.1em] whitespace-nowrap leading-relaxed`}>
                {isLandingPage ? 'ANOTHER LEVEL COMPANY LTDA - CNPJ 45.266.164/0001-01' : 'High-End Revenue Advisory para empresas em estágio de escala.'}
              </p>
              <p className="text-[10px] md:text-[11px] font-mono text-text-secondary opacity-40 uppercase tracking-[0.2em]">
                © Todos os direitos reservados
              </p>
            </div>
          </div>

          {/* Right Side: Status, Socials & Copyright */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-text-tertiary opacity-40">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              PORTO ALEGRE, RS
            </div>

            {isLandingPage ? (
              <>
                <a href="https://www.instagram.com/eu.colares/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/gcolares/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@eu.colares" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Youtube
                </a>
              </>
            ) : (
              <>
                <a href="https://linkedin.com/company/levers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Linkedin
                </a>
                <a href="https://instagram.com/levers.studio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Instagram
                </a>
              </>
            )}

            <div>© 2026</div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

export const WhatsAppCTA = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing-page';

  if (isLandingPage) return null;

  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] z-[100] transition-transform hover:scale-110 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
};
