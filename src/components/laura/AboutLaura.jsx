import React from 'react';
import { motion } from 'framer-motion';

const AboutLaura = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-main overflow-hidden border-t border-border-subtle">
      <div className="container-editorial relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left Hand Image Spread */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full aspect-[4/5] object-cover"
        >
          <img
            src="/assets/Fotos Laura/IMG_1158.JPG.jpeg"
            alt="Laura Romano - Romano Company"
            className="w-full h-full object-cover rounded-sm shadow-2xl"
          />
        </motion.div>

        {/* Right Hand Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-display xl:text-epic font-header text-text-primary leading-[1] tracking-tighter mb-8 transition-all">
            Laura <br />
            <span className="font-serif italic text-accent-primary">Romano</span>
          </h2>

          <div className="text-lg md:text-xl text-text-primary/80 font-body leading-relaxed space-y-6 max-w-xl">
            <p>
              Fundadora e mente estratégica por trás da Romano Company. Laura acredita que marcas históricas não são fruto do acaso, mas de uma fundação sólida onde estratégia e rigor visual caminham juntos.
            </p>
            <p>
              Com um olhar arquitetônico para o branding, ela lidera o estúdio focada em transformar negócios em marcas que não apenas ocupam espaço, mas que lideram mercados. Para Laura, a identidade visual é a tradução tangível de uma inteligência estruturada que gera reconhecimento imediato e valor de longo prazo.
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-text-primary mt-8 pt-4 border-t border-border-subtle inline-block">
              Intencionalidade em cada traço.
            </p>
          </div>

          <div className="pt-10 mt-10">
            <a href="#contato" className="btn-premium">
              INICIAR PROJETO
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutLaura;
