import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
        q: "Quanto tempo leva para minha página ficar pronta?", 
        a: "Nosso ciclo médio para o plano Starter é de 7 a 10 dias úteis. Para o plano Pro, que envolve uma narrativa mais profunda, o prazo é de 15 dias úteis após o briefing." 
    },
    { 
        q: "Vocês fazem a copy da página?", 
        a: "Sim, a copy estratégica de alta conversão está inclusa em ambos os planos. Não usamos textos genéricos; cada palavra é pensada para converter sua oferta específica." 
    },
    { 
        q: "A página é feita no WordPress?", 
        a: "Sim, utilizamos WordPress + Elementor Pro para garantir que sua página seja rápida, segura e, principalmente, que você tenha total autonomia para editá-la depois." 
    },
    { 
        q: "Eu terei acesso aos arquivos de design?", 
        a: "Com certeza. No plano Pro, você recebe o acesso ao Drive com todos os recursos visuais, ícones e assets utilizados na criação da sua identidade visual para a página." 
    },
    { 
        q: "A página é otimizada para celular?", 
        a: "Mobile-first é nossa regra. Mais de 80% do tráfego hoje vem do celular, então sua página é desenhada e codada para carregar instantaneamente e converter em qualquer tela." 
    },
    { 
        q: "O que acontece após a entrega?", 
        a: "Damos suporte total pós-projeto (7 ou 15 dias dependendo do plano) para garantir que tudo esteja funcionando. Além disso, no relatório de 30 dias, avaliamos como a página está performando." 
    }
  ];

  return (
    <section className="section-premium bg-bg-deep py-20 lg:py-48 w-full border-t border-white/5" id="faq">
      <div className="w-full max-w-4xl mx-auto px-6 text-left md:text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-blue-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4"
        >
          Dúvidas Frequentes
        </motion.div>
        <h2 className="text-3xl md:text-5xl mb-12 md:mb-24 font-bold tracking-tight text-white">
          Tire suas <span className="text-blue-500 text-glow">dúvidas</span>
        </h2>
        
        <div className="text-left space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden backdrop-blur-sm transition-colors hover:border-blue-500/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 cursor-pointer focus:outline-none"
              >
                <h4 className="text-base md:text-xl font-medium tracking-tight text-white/90 pr-4">{faq.q}</h4>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base text-text-secondary leading-relaxed opacity-80">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
