import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
        q: "Preciso ter a copy pronta?", 
        a: "Não. A copy faz parte do nosso processo. Escrevemos com base no briefing e na estratégia que montamos juntos no início do projeto." 
    },
    { 
        q: "Qual o SLA para a implementação do ativo?", 
        a: "Dependendo da complexidade da operação e da profundidade da engenharia de copy, o ciclo médio de 'go-live' é de 2 a 4 semanas após o alinhamento estratégico." 
    },
    { 
        q: "Vocês atendem qualquer nicho?", 
        a: "Atendemos negócios que vendem online: infoprodutores, SaaS, prestadores de serviço, especialistas, startups e empresas com presença digital. Se você vende e quer converter mais, provavelmente encaixa." 
    },
    { 
        q: "Vocês só constroem no Elementor?", 
        a: "Elementor é nossa ferramenta padrão para entregas no WordPress. Se você tem outra plataforma ou precisa de desenvolvimento custom, avisa no briefing e avaliamos juntos." 
    },
    { 
        q: "O que é CRO e por que minha operação precisa dele?", 
        a: "CRO é Otimização de Conversão. É o processo de melhorar continuamente a infraestrutura com base nos dados reais de uso dos seus clientes. É o que diferencia um ativo estático de uma máquina de vendas que evolui com o mercado." 
    },
    { 
        q: "Vocês garantem o resultado de vendas?", 
        a: "Garantimos processo e engenharia. O resultado final depende de variáveis que vão além do ativo: tráfego, oferta e mercado. O que garantimos é uma infraestrutura construída com a mesma estratégia usada pelos maiores players do país." 
    }
  ];

  return (
    <section className="section-premium bg-bg-deep py-20 lg:py-48 w-full border-t border-white/5" id="faq">
      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <div className="w-full max-w-4xl mx-auto px-6 text-left md:text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-blue-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4"
        >
          Ainda com dúvidas?
        </motion.div>
        <h2 className="text-3xl md:text-5xl mb-12 md:mb-24 font-bold tracking-tight text-balance">
          Perguntas <span className="text-blue-500">frequentes</span>
        </h2>
        
        <div className="text-left space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden backdrop-blur-sm transition-colors hover:border-blue-500/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 cursor-pointer focus:outline-none"
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

export default FAQ;
