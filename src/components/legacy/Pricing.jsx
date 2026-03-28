import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "ESSENCIAL",
      badge: "Para quem já tem oferta validada e precisa de uma estrutura de conversão no ar.",
      features: [
        "Diagnóstico estratégico da operação",
        "Arquitetura de Conversão (Wireframe)",
        "Engenharia de Copy & Narrativa",
        "Design Estratégico (Desktop & Mobile)",
        "Desenvolvimento via Elementor",
        "Otimização de performance",
        "Suporte pós-entrega (7 dias)"
      ],
      cta: "Quero o Essencial",
      recommended: false
    },
    {
      name: "PRO",
      badge: "Para quem busca engenharia de receita, design estratégico e crescimento sustentável.",
      isPro: true,
      features: [
        { label: "— Tudo do Essencial —", isHeader: true },
        "Diagnóstico estratégico da operação",
        "Arquitetura de Conversão (Wireframe)",
        "Engenharia de Copy & Narrativa",
        "Design Estratégico (Desktop & Mobile)",
        "Desenvolvimento via Elementor",
        "Otimização de performance",
        "Suporte pós-entrega (7 dias)",
        { label: "— Exclusivo do Pro —", isHeader: true },
        "Identidade visual e brandbook",
        "Suporte estendido (30 dias)",
        "Relatório de desempenho (30 dias)",
        "Sessão de CRO estratégico"
      ],
      cta: "Quero o Pro",
      recommended: true
    }
  ];

  return (
    <section id="pricing" className="section-premium bg-bg-deep py-20 lg:py-48 w-full border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            Escolha a estrutura certa pro seu momento
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold mb-8 text-balance uppercase tracking-tighter"
          >
            Quanto mais complexa a operação, mais completa é a entrega.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed opacity-70"
          >
            Dois caminhos. O ponto de partida depende de onde você está e o que precisa acontecer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${plan.recommended
                  ? 'bg-blue-600/5 border-blue-500/30 shadow-[0_40px_100px_rgba(37,99,235,0.1)]'
                  : 'bg-white/[0.02] border-white/5'
                }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-500 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-lg">
                  Mais Completo
                </div>
              )}

              <div className="mb-10 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">{plan.name} {plan.isPro && <span className="text-blue-500 text-sm align-top ml-1">(COMPLETO)</span>}</h3>
                <p className="text-sm text-text-secondary leading-relaxed opacity-60">
                  {plan.badge}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  typeof feature === 'string' ? (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-blue-500" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-text-secondary opacity-80">{feature}</span>
                    </div>
                  ) : (
                    <div key={idx} className="pt-4 pb-2 first:pt-0">
                      <span className="text-[10px] font-mono text-blue-500/60 uppercase tracking-widest">{feature.label}</span>
                    </div>
                  )
                ))}
              </div>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full py-6 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${plan.recommended
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)]'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20 text-text-tertiary text-sm">
          <p className="opacity-60 font-mono tracking-tight">Não tem certeza qual faz sentido pro seu momento? <br className="md:hidden" />
            <a href="#" className="text-blue-500 hover:underline mx-1 font-medium">Fala com a gente</a> antes de decidir. Sem compromisso.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
