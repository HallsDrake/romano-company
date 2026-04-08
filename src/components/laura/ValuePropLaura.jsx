import React from 'react';
import { motion } from 'framer-motion';

const ValuePropLaura = () => {
  return (
    <section id="sobre" className="relative py-32 md:py-56 bg-text-primary text-main overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-[1100px] mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[10px] md:text-xs tracking-[0.4em] text-accent-primary font-bold mb-12 uppercase">
                manifesto
              </h2>
              
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-header text-main leading-[0.95] tracking-tighter mb-16 md:mb-32 px-4 md:px-0">
                Num mercado cheio de marcas mornas e iguais, <span className="font-serif italic px-2 text-[#ff7b5b]">ser reconhecido</span> é o que torna a sua marca única.
              </h3>
            </motion.div>
 
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 text-center md:text-left pt-16 md:pt-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-12 text-2xl md:text-3xl font-header leading-tight text-main/95 max-w-xl mx-auto md:mx-0"
              >
                <p className="text-2xl md:text-3xl font-header leading-tight text-main/90">
                  A gente acredita em trabalho feito com cuidado e estratégia, não em soluções rápidas que precisam ser refeitas daqui a seis meses.
                </p>
                <p className="text-lg md:text-xl text-main/60 leading-relaxed font-body">
                  Marca não é só visual, é fundação. E quem constrói essa base do jeito certo para de correr atrás e começa a ser procurado.
                </p>
                
                <div className="pt-12 w-full md:w-auto">
                   <a href="#portfolio" className="btn-editorial text-main text-[10px] tracking-[0.1em] font-bold hover:text-accent-primary after:bg-accent-primary w-full md:w-auto flex items-center justify-center md:justify-start gap-4 uppercase group">
                    QUERO UMA MARCA MEMORÁVEL
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                   </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative group"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 shadow-2xl">
                  <img 
                    src="/assets/fotos-laura/IMG_3283.PNG" 
                    alt="Laura Romano - Manifesto" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-text-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Accent element behind image */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-accent-primary/30 z-0" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-accent-primary/30 z-0" />
              </motion.div>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default ValuePropLaura;
