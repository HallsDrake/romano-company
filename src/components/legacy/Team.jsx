import React from 'react';
// Force sync for Team copy
import { motion } from 'framer-motion';

const Team = () => {
  const founders = [
    {
      name: "Gabriel Colares",
      role: "Estrategista de Ativos e Design de Conversão",
      instagram: "@eu.colares",
      bio: [
        "Nos últimos anos, Gabriel Colares mergulhou de cabeça no universo dos negócios digitais. Comeceu como designer, mas percebeu rápido que o que travava os resultados não era a estética, era a estratégia.",
        <>Seu foco passou a ser construir <span className="text-blue-600 font-bold">infraestruturas que sustentam o crescimento</span>, com clareza na comunicação e narrativa pensada para conversão.</>,
        <>Colaborou com nomes como <span className="text-blue-600 font-bold">Ícaro de Carvalho, Paulo Cuenca, Dani Noce, Jovens de Negócios, Daniel Penin e Giovanni Begossi.</span></>,
        <>Hoje, lidera a <span className="text-blue-600 font-bold">Levers</span> com o objetivo de transformar ofertas em <span className="text-blue-600 font-bold">ativos digitais prontos para escalar.</span> Para ele, se o produto é bom, ele merece uma estrutura à altura.</>
      ],
      image: "/assets/Gabriel.jpg"
    },
    {
      name: "Ronei Vinagre",
      role: "Especialista em Growth, CRO e Dados",
      bio: [
        <>Fundador e CEO da GrowthNews, portal referência para líderes de negócios no Brasil. Ao longo de sua carreira, ocupou cargos de liderança em gigantes como <span className="text-blue-600 font-bold">Empiricus, Growth Hackers Global, Grupo Alto Astral e Barões Publishing.</span></>,
        <>É pioneiro em estratégias de eventos online e lançamentos digitais desde 2011. Em 2017, fundou a <span className="text-blue-600 font-bold">Growth Conference Brasil</span>, o principal evento de receita B2B da América Latina.</>,
        "Trouxe Sean Ellis (criador do Growth Hacking) ao Brasil pela primeira vez e continua atualizando o mercado com as principais tendências globais.",
        <>Como estrategista de CRO na <span className="text-blue-600 font-bold">Levers</span>, seu foco é garantir que o <span className="text-blue-600 font-bold">crescimento seja previsível e sustentável</span> por meio de infraestrutura de dados e experimentação.</>
      ],
      image: "/assets/Ronei.jpg"
    }
  ];

  return (
    <section id="equipe" className="section-premium bg-bg-offwhite text-inverse py-32 border-t border-black/5">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            A equipe
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Design Estratégico. <span className="text-blue-500">Engenharia de Dados.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-inverse-secondary max-w-2xl mx-auto text-lg opacity-70"
          >
            Na Levers, unimos a estética de alto luxo ao rigor analítico que o seu faturamento exige.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-black/5 flex flex-col gap-10 hover:border-blue-500/20 transition-colors duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-8">
                <div className="relative w-24 h-24 shrink-0">
                  <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black/5 border border-black/10 group-hover:border-blue-500/30 transition-colors">
                    <img 
                        src={founder.image} 
                        alt={founder.name} 
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 items-center justify-center text-blue-500 font-bold text-3xl">
                      {founder.name[0]}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 tracking-tight">{founder.name}</h3>
                  <p className="text-[10px] text-blue-500 font-mono uppercase tracking-widest font-bold opacity-80">{founder.role}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-inverse-secondary leading-relaxed opacity-70 text-sm group-hover:opacity-100 transition-opacity">
                {Array.isArray(founder.bio) ? (
                  founder.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <p>{founder.bio}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-32 border-y border-white/5 py-24">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-inverse-secondary opacity-40">
                Produto bom merece estrutura à altura
            </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
