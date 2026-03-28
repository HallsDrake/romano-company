import React from 'react';
import { motion } from 'framer-motion';

const HeroLaura = () => {
  return (
    <section id="hero" className="relative w-full h-[100svh] flex flex-col md:flex-row overflow-hidden font-body pt-24 md:pt-0">

      {/* Left Side: Cream Background */}
      <div className="w-full md:w-[55%] h-1/2 md:h-full bg-main flex flex-col justify-center px-8 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[800px] md:max-w-[1000px]"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.5rem] font-header text-text-primary leading-[1.02] tracking-tighter mb-6 md:mb-8 transition-all">
            A sua <span className="font-serif italic px-1 lowercase">marca</span><br />
            precisa ir <span className="font-serif italic px-1 lowercase opacity-90">além</span><br />
            da <span className="font-serif italic px-1 lowercase">estética</span><span className="text-accent-primary">.</span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-text-primary/80 font-body font-medium tracking-tight leading-relaxed max-w-[500px] mb-12">
            Estratégia e design para empresas que precisam estar à altura do próprio crescimento. Mais do que estética: intenção e rigor visual.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12">
            <a href="#contato" className="py-4 px-10 text-[10px] uppercase font-bold tracking-[0.2em] rounded-[30px] btn-premium transition-all duration-300 hover:scale-105 shadow-xl">
              INICIAR PROJETO
            </a>
            
            <a href="#portfolio" className="group flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] text-text-primary/70 hover:text-text-primary transition-colors">
              EXPLORE NOSSO TRABALHO
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Photo */}
      <div className="w-full md:w-[45%] h-1/2 md:h-full relative flex flex-col justify-end p-6 md:p-8 z-0">

        {/* Full Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src="/assets/Fotos Laura/IMG_1160.JPG.jpeg"
            alt="Romano Company"
            className="w-full h-full object-cover object-center translate-y-[-5%]"
          />
        </motion.div>

        {/* Floating Tags over image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 flex justify-between items-end w-full"
        >
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-white drop-shadow-md hidden sm:block">
            Estúdio de branding estratégico
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-white drop-shadow-md ml-auto">
            Romano company © 2026
          </span>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroLaura;
