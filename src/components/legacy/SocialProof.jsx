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

const partnerLogos = [
  { name: "GrowthNews", src: "/assets/logos/growth-news.svg" },
  { name: "TD", src: "/assets/logos/td.webp" },
  { name: "Astral Cultural", src: "/assets/logos/astral-cultural.webp" },
  { name: "Curseria", src: "/assets/logos/curseria.webp" },
  { name: "Empiricus", src: "/assets/logos/empiricus.svg" },
  { name: "Gouvêa Ecosystem", src: "/assets/logos/gouvea.webp" },
  { name: "Growth Conference", src: "/assets/logos/growth-conf.svg" }
];

const SocialProof = () => {
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
            className="text-blue-500/60 font-mono text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            RECEITA GERADA PARA NOSSOS CLIENTES
          </motion.p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Resultados reais, de negócios reais.</h3>
          <p className="text-text-secondary max-w-2xl mx-auto opacity-70">
            Infoprodutores, startups, especialistas e empresas que pararam de perder venda por causa de uma estrutura mal feita.
          </p>
        </div>

        {/* 1. PARTNER MARQUEE (Now here, below header) */}
        <div className="w-full mb-28 overflow-hidden">
          <div className="flex flex-col items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 font-mono text-[10px] uppercase tracking-[0.25em] font-semibold"
            >
              Empresas e negócios que já aceleramos
            </motion.div>

            <div className="relative w-full">
              {/* Fade Gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-deep to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-deep to-transparent z-10" />
              
              <div className="flex animate-marquee whitespace-nowrap items-center">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div 
                    key={i} 
                    className="mx-6 md:mx-10 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-10 md:h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experts Grid - Force Single Row */}
        <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-6 md:gap-8 lg:gap-10 overflow-x-auto pb-8 scrollbar-hide px-6">
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

        {/* ROI Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Case: Asset Engineering */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-xl group hover:border-blue-500/60 transition-all overflow-hidden"
          >
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                     <div className="bg-blue-500 p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">Ativos Estratégicos // Arquitetura</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold mb-6">Arquitetura de Conversão</h4>
                <p className="text-text-secondary mb-10 opacity-80 leading-relaxed">
                    Não construímos apenas páginas; projetamos sistemas de aquisição. Substituímos fluxos amadores por arquitetura de dados e engenharia de precisão que transforma tráfego em ativo financeiro de alta previsibilidade.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-blue-500/20">
                    <div>
                        <div className="text-[10px] font-mono text-blue-500/60 uppercase mb-1">Otimização de LTV</div>
                        <div className="text-2xl font-bold">+40%</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-blue-500/60 uppercase mb-1">Redução de CAC</div>
                        <div className="text-2xl font-bold">32%</div>
                    </div>
                </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <BarChart3 className="w-32 h-32 text-blue-500" />
            </div>
          </motion.div>

          {/* Secondary Case: High Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`group p-8 lg:p-10 rounded-3xl border border-white/5 relative overflow-hidden transition-all duration-700 bg-white/[0.01]`}
          >
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                     <div className="bg-white/10 p-2 rounded-lg">
                        <Share2 className="w-5 h-5 text-text-secondary" />
                    </div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">Satisfação // Retenção</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold mb-6">Ativos de Alto Valor</h4>
                <p className="text-text-secondary mb-10 opacity-70 leading-relaxed">
                    Nossos ativos são ativos de guerra. Onde outros veem design, nós entregamos unidades econômicas otimizadas para escala vertical, com foco absoluto em ROAS real e sustentabilidade operacional.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <div className="text-[10px] font-mono text-text-tertiary uppercase mb-1">Retenção de Clientes</div>
                        <div className="text-2xl font-bold">98%</div>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-text-tertiary uppercase mb-1">SLA de Entrega</div>
                        <div className="text-2xl font-bold">Premium</div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Detailed Metrics Section */}
        <div className="mt-32 pt-24 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 text-center opacity-70 max-w-5xl mx-auto">
            {[
                { label: 'Empresários Atendidos', value: '100+' },
                { label: 'Retenção de Clientes', value: '98%' },
                { label: 'Market ROI Médio', value: '4.2x' },
                { label: 'Ganho em Conversão', value: '+45%' }
            ].map((metric, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-2">{metric.label}</div>
                    <div className="text-3xl font-bold">{metric.value}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
