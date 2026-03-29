import React from 'react';
import { motion } from 'framer-motion';

const HeroLaura = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen md:h-[100svh] flex flex-col md:flex-row overflow-hidden font-body">

      {/* Left Side: Cream Background */}
      <div className="w-full md:w-[55%] min-h-[65vh] md:h-full bg-main flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-40 pb-20 md:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[800px] md:max-w-[1000px] flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-header text-text-primary leading-[1.1] tracking-tighter mb-8 transition-all px-4 md:px-0">
            O preço de ser só mais uma marca sem identidade é <span className="font-serif italic px-1 block sm:inline whitespace-nowrap">alto demais.</span> 
          </h1>


          <p className="text-base sm:text-xl lg:text-2xl text-text-primary/70 font-body font-medium tracking-tight leading-relaxed max-w-[600px] mb-12 px-4 md:px-0">
            Branding e design para negócios que já entregam valor, e precisam que o mundo veja isso<span className="text-accent-primary inline-block ml-2 w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
          </p>


          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-12 w-full md:w-auto px-4 md:px-0">
            <a href="#contato" className="w-full md:w-auto py-5 px-10 text-[10px] uppercase font-bold tracking-[0.2em] rounded-[30px] btn-premium transition-all duration-300 hover:scale-105 shadow-xl text-center">
              VAMOS CONVERSAR
            </a>
            
            <a href="#portfolio" className="group flex items-center justify-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] text-text-primary/70 hover:text-text-primary transition-all w-full md:w-auto py-5 px-10 border border-text-primary/10 rounded-[30px] md:border-none md:p-0">
              CONHEÇA NOSSO TRABALHO
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Photo */}
      <div className="w-full md:w-[45%] min-h-[40vh] md:h-full relative flex flex-col justify-end p-6 md:p-8 z-0">

        {/* Full Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src="/assets/Fotos Laura/IMG_1160.jpg"
            alt="Romano Company"
            className="w-full h-full object-cover object-[center_20%] translate-y-0"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default HeroLaura;
