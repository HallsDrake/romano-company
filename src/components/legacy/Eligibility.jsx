import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ShieldCheck, AlertCircle } from 'lucide-react';

const matchItems = [
  "Operação validada com faturamento em escala",
  "Busca por diferenciação e narrativa de autoridade",
  "Decisores presentes e comprometidos com a execução",
  "Foco em ROI de médio prazo e construção de LTV",
  "Infraestrutura mínima para absorver novas demandas",
  "Equipe aberta a evolução de processos e tecnologia"
];

const antiItems = [
  "Projetos em fase de curiosidade ou sem validação",
  "Expectativa de 'milagres' sem investimento em ativos",
  "Foco exclusivo em custo baixo, não em valor de ativo",
  "Resistência a mudanças operacionais e estratégicas",
  "Busca por resultados imediatistas sem maturação",
  "Falta de braço operacional para implementar as alavancas"
];

const Eligibility = () => {
  return (
    <section className="section-premium bg-bg-offwhite text-inverse relative py-20 lg:py-32 overflow-hidden" id="eligibility">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter text-balance"
            >
              Critérios de <span className="text-blue-600">Elegibilidade.</span>
            </motion.h2>
          </div>
          
          <div className="md:text-right max-w-sm">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.3em] mb-4 flex items-center md:justify-end gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              CULTURAL FIT
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-inverse-secondary opacity-70 leading-relaxed text-sm"
            >
              Selecionamos empresas com governança e visão de escala. Atuamos onde as alavancas de design e CRO geram impacto real.
            </motion.p>
          </div>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          
          {/* Match Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-14 relative group"
          >
            <div className="flex items-center gap-5 mb-14">
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.1)] border border-blue-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-1">Perfil Ideal</h3>
                <span className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em]">MATCH PROFILE</span>
              </div>
            </div>

            <ul className="space-y-6">
              {matchItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group/item">
                  <div className="mt-1 p-0.5 rounded-full text-blue-500 bg-blue-500/10 group-hover/item:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-inverse-secondary text-base font-medium opacity-80 group-hover/item:opacity-100 transition-opacity">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Anti-Persona */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/[0.03] p-8 md:p-14 relative group opacity-40 transition-all duration-700 border-t lg:border-t-0 lg:border-l border-black/5"
          >
            <div className="flex items-center gap-5 mb-14 transition-all">
              <div className="p-4 rounded-2xl bg-black/5 text-black/40">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-1 text-black/40">Não Atendemos</h3>
                <span className="text-[10px] font-mono text-black/20 uppercase tracking-[0.2em]">ANTI-PERSONA</span>
              </div>
            </div>

            <ul className="space-y-6">
              {antiItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-0.5 rounded-full text-black/20">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <span className="text-inverse-secondary text-base font-medium opacity-40">
                    <s>{item}</s>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_70%)]" />
      </div>
    </section>
  );
};

export default Eligibility;
