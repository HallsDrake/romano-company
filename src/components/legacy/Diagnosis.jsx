import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Shield, TrendingUp } from 'lucide-react';

const Diagnosis = () => {
  return (
    <section id="solution" className="section-premium bg-bg-deep relative py-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            O que a Levers faz de diferente
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Engenharia de Receita e Design Estratégico.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Quando design e otimização de ativos trabalham isolados, você paga duas vezes pelo mesmo gargalo. A Levers foi criada para resolver isso de forma integrada. Não entregamos telas. Construímos a infraestrutura que sustenta sua escala.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Design Estratégico",
              desc: "Cada elemento visual tem razão de existir. Layout, hierarquia e identidade a serviço da conversão, não do portfólio.",
              icon: <Maximize2 className="w-6 h-6" />
            },
            {
              title: "Infraestrutura de Conversão",
              desc: "Wireframe, narrativa e copy construídos a partir de inteligência de consumo. Não no que parece 'bonito' no portfólio.",
              icon: <Shield className="w-6 h-6" />
            },
            {
              title: "Otimização Contínua",
              desc: "Entrega não é o fim. Acompanhamos os dados, rodamos testes e ajustamos o que precisa ser ajustado para o resultado crescer.",
              icon: <TrendingUp className="w-6 h-6" />
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
              <p className="text-text-secondary leading-relaxed opacity-70">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Diagnosis;
