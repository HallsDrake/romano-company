import React from 'react';
import { motion } from 'framer-motion';

const AboutLaura = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-main overflow-hidden">
      <div className="container-editorial relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left Hand Image Spread */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full aspect-[4/5] object-cover"
        >
          <img
            src="/assets/fotos-laura/img-1158.jpg"
            alt="Laura Romano - Romano Company"
            className="w-full h-full object-cover rounded-sm shadow-2xl"
          />
        </motion.div>

        {/* Right Hand Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-display xl:text-epic font-header text-text-primary leading-[1] tracking-tighter mb-8 transition-all">
            Laura <br />
            <span className="font-serif italic text-accent-primary">Romano</span>
          </h2>

          <div className="text-lg md:text-xl text-text-primary/80 font-body leading-relaxed space-y-6 max-w-xl mx-auto md:mx-0">
            <p>
              Fundadora e mente estratégica por trás da Romano Company. Laura acredita que marcas históricas não são fruto do acaso, mas de uma fundação sólida onde estratégia e rigor visual caminham juntos.
            </p>
            <p>
              Com um olhar arquitetônico para o branding, ela lidera o estúdio focada em transformar negócios em marcas que não apenas ocupam espaço, mas que lideram mercados. Para Laura, a identidade visual é a tradução tangível de uma inteligência estruturada que gera reconhecimento imediato e valor de longo prazo.
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-text-primary mt-8 pt-4 inline-block">
              Intencionalidade em cada traço.
            </p>
          </div>

          <div className="pt-10 mt-10 w-full md:w-auto">
            <a
              href="https://wa.me/5511998984313?text=Oi%20Laura!%20Tudo%20bem%3F%20Vi%20o%20site%20da%20Romano%20e%20amei%20o%20seu%20trabalho.%20Quero%20levar%20minha%20marca%20para%20o%20pr%C3%B3ximo%20n%C3%ADvel%20com%20voc%C3%AA%2C%20podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-10 text-[10px] uppercase font-bold tracking-[0.2em] rounded-[30px] btn-premium transition-all duration-300 hover:scale-105 shadow-xl text-center flex items-center justify-center gap-2"
            >
              VAMOS CONVERSAR
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutLaura;
