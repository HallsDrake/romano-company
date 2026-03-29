import React from 'react';
import { motion } from 'framer-motion';

const ValuePropLaura = () => {
  return (
    <section id="sobre" className="relative py-32 md:py-56 bg-text-primary text-main overflow-hidden border-y border-main/5 lowercase">
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
                Num mercado cheio de marcas mornas e iguais, <span className="font-serif italic px-2">ser reconhecido</span> é o que torna a sua marca única.
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 md:gap-32 text-left border-t border-main/10 pt-16 md:pt-32 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-12 text-2xl md:text-3xl font-header leading-tight text-main/95"
              >
                <p className="text-2xl md:text-3xl font-header leading-tight text-main/90">
                  A gente acredita em trabalho feito com cuidado e estratégia, não em soluções rápidas que precisam ser refeitas daqui a seis meses.
                </p>
                <p className="text-lg md:text-xl text-main/60 leading-relaxed font-body">
                  Marca não é só visual, é fundação. E quem constrói essa base do jeito certo para de correr atrás e começa a ser procurado.
                </p>
                
                <div className="pt-12">
                   <a href="#portfolio" className="btn-editorial text-main text-[10px] hover:text-accent-primary after:bg-accent-primary lowercase">
                    explore o portfólio
                   </a>
                </div>
              </motion.div>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default ValuePropLaura;
