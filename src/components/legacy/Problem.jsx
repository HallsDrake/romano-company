import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Target, Layout, ArrowRight } from 'lucide-react';

const Problem = () => {
  const problems = [
    { icon: <Layout size={20} />, text: "Design sem fundamentação estratégica" },
    { icon: <Target size={20} />, text: "Copy genérica que não converte" },
    { icon: <AlertCircle size={20} />, text: "Falta de ancoragem na oferta" },
    { icon: <TrendingDown size={20} />, text: "Experiência que não gera retenção" }
  ];

  return (
    <section className="section-premium bg-bg-offwhite text-inverse relative py-32 overflow-hidden" id="metodologia">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 md:text-center md:flex md:flex-col md:items-center mb-16"
          >
             <div className="inline-flex items-center gap-4 text-xs font-mono text-blue-500/60 uppercase tracking-widest mb-6">
              <div className="w-8 h-px bg-blue-500/30" />
              O que está travando seus resultados
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              O tráfego não é o problema.
            </h2>
            <div className="max-w-3xl space-y-6">
                 <p className="text-lg md:text-xl text-inverse-secondary leading-relaxed">
                    Você investe para trazer pessoas até a sua oferta. O que acontece depois que elas chegam é o que define se esse investimento volta.
                </p>
                <p className="text-lg md:text-xl text-inverse-secondary leading-relaxed opacity-70">
                    A maioria dos negócios perde venda não por falta de produto ou tráfego. Perde porque a estrutura que apresenta esse produto ignora o comportamento do usuário, falha na ancoragem de valor e é invisível para as novas buscas por IA (GEO).
                </p>
            </div>
          </motion.div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
                "Visitas que entram e saem sem tomar nenhuma ação",
                "Copy que não comunica o que o seu produto realmente resolve",
                "Design que ficou bonito mas não guia ninguém até a compra",
                "Decisões de ativos baseadas em intuição, não em dados",
                "Tráfego crescente, receita estagnada",
                "Estrutura rígida que impede a evolução do ecossistema"
            ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white/50 border border-black/5 rounded-2xl grayscale hover:grayscale-0 transition-all duration-700">
                    <ArrowRight className="w-5 h-5 text-blue-500/60 shrink-0 mt-1" />
                    <p className="text-lg font-medium text-inverse leading-snug">
                        {text}
                    </p>
                </div>
            ))}
          </div>

          <div className="lg:col-span-12 w-full text-center pt-24 pb-12 border-t border-black/5 relative">
             <p className="text-xl md:text-2xl font-medium italic text-inverse-secondary max-w-4xl mx-auto opacity-90 text-center leading-relaxed relative z-10">
                Esse é o padrão de quase todo negócio digital. Não porque o produto é fraco. <br className="hidden md:block" />
                <span className="text-inverse font-bold">Porque sua infraestrutura foi construída para decorar, não para faturar.</span>
             </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] border border-black/[0.03] rounded-full pointer-events-none -translate-y-1/2" />
    </section>
  );
};

export default Problem;
