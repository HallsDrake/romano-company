import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react';

const Framework = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      desc: "Antes de criar qualquer coisa, entendemos o que está sendo vendido, para quem e o que precisa acontecer para esse ativo gerar receita líquida.",
      details: ["Alinhamento estratégico", "Análise da oferta", "Alavancas de conversão", "Sessão de briefing"],
      icon: <Search className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Arquitetura",
      desc: "A estrutura nasce da estratégia. Definimos o fluxo, escrevemos a copy, criamos o wireframe e desenvolvemos o design com intenção.",
      details: ["Arquitetura de Conversão", "Engenharia de Venda", "Design Estratégico", "Hierarquia de Impacto"],
      icon: <PenTool className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Entrega e CRO",
      desc: "Implementamos com foco em performance técnica. Depois da entrega, acompanhamos os dados e otimizamos o que os números pedem.",
      details: ["Desenvolvimento", "Otimização de performance", "Suporte pós-publicação", "Relatório de resultados"],
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="metodologia" className="section-premium relative overflow-hidden bg-bg-deep py-40">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            Como trabalhamos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Cada decisão tem um porquê.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed opacity-70"
          >
            Nosso processo transforma investimento em ativo de receita. Três etapas com intenção clara em cada uma.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 group hover:bg-white/[0.02] transition-all"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-white/5 group-hover:text-blue-500/10 transition-all font-mono">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-secondary mb-8 opacity-70 leading-relaxed">
                {step.desc}
              </p>

              <div className="space-y-3 pt-8 border-t border-white/5">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-mono text-text-tertiary">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Framework;
