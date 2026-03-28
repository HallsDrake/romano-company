import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Users, BarChart3, TrendingUp } from 'lucide-react';

const experts = [
  { name: "ÍCARO DE CARVALHO", img: "/assets/People/Ícaro.jpg" },
  { name: "PAULO CUENCA", img: "/assets/People/Cuenca.jpg" },
  { name: "TIAGO FONSECA", img: "/assets/People/Tiago.jpg" },
  { name: "DANI NOCE", img: "/assets/People/Dani Noce.jpg" },
  { name: "GIOVANNI BEGOSSI", img: "/assets/People/Giovanni Begossi.jpg" },
  { name: "BRENO PERRUCHO", img: "/assets/People/Breno.jpg" },
  { name: "RAFA VEIGA", img: "/assets/People/Rafa Veiga.jpg" },
  { name: "DANIEL PENIN", img: "/assets/People/Penin.jpg" },
  { name: "JUVENAL", img: "/assets/People/Juvenal.jpg" }
];

const LandingSocialProof = () => {
  return (
    <section className="section-premium bg-bg-deep pt-12 pb-24 lg:pt-20 lg:pb-40" id="results">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Stats Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-bold text-blue-500 tracking-tighter mb-4"
          >
            R$ 17MM
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500/60 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 font-bold"
          >
            RESULTADOS GERADOS PELOS NOSSOS DESIGNS
          </motion.p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Design de alta performance para ofertas valiosas.</h3>
          <p className="text-text-secondary max-w-2xl mx-auto opacity-70">
            Trabalhamos com alguns dos maiores players do mercado digital brasileiro, transformando tráfego frio em lucro previsível.
          </p>
        </div>

        {/* Experts Grid - Force Single Row */}
        <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-6 md:gap-8 lg:gap-10 overflow-x-auto pb-16 scrollbar-hide px-6">
          {experts.map((expert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 group transition-opacity opacity-70 hover:opacity-100"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/5 shadow-2xl transition-transform group-hover:scale-105 duration-500">
                <img 
                  src={expert.img} 
                  alt={expert.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-center font-mono text-[9px] uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">
                {expert.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Detailed Metrics Section */}
        <div className="mt-16 pt-24 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 text-center opacity-70 max-w-5xl mx-auto">
            {[
                { label: 'Projetos Realizados', value: '150+' },
                { label: 'Taxa de Retenção', value: '98%' },
                { label: 'Ganho em Conversão', value: '+25%' },
                { label: 'SLA de Entrega', value: 'Rápido' }
            ].map((metric, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-2 font-bold">{metric.label}</div>
                    <div className="text-3xl font-bold text-white">{metric.value}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LandingSocialProof;
