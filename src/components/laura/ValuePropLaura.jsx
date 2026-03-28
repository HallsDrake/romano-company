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
              <h2 className="text-[10px] md:text-xs tracking-[0.4em] text-accent-primary font-bold mb-12">
                o manifesto
              </h2>
              
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-header text-main leading-[0.95] tracking-tighter mb-16 md:mb-32 px-4 md:px-0">
                a intenção que <span className="font-serif italic px-2">precede</span> o traço.
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
                <p>
                  o que separa negócios que lideram de marcas comuns não é apenas o produto. é a clareza estratégica por trás de cada movimento.
                </p>
                <p className="text-main/50 text-[10px] md:text-xs font-body font-bold lowercase tracking-[0.3em] leading-loose pt-4">
                  ( fundação e estrutura )
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-10 text-base md:text-lg lg:text-xl text-main/60 leading-relaxed font-body"
              >
                <p>
                  acreditamos no trabalho longo e sólido. na estrutura focada em eficiência. o cuidado tático com os detalhes separa um serviço comum de um estúdio de branding estratégico.
                </p>
                <p>
                  não trabalhamos apenas com estética; trabalhamos com fundamentos. construir a fundação da marca é o maior ativo de longo prazo que uma empresa pode possuir. vai ficando para trás quem ignora essa base.
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
