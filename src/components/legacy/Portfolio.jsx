import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: "Ícaro de Carvalho", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/ONM.jpg", tag: "Expert" },
  { name: "Paulo Cuenca", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/O-teste.jpg", tag: "Expert" },
  { name: "Essential Beauty", img: "https://anotherlvl.com.br/wp-content/uploads/2026/02/EBH.jpg", tag: "Estética" },
  { name: "Creare", img: "https://anotherlvl.com.br/wp-content/uploads/2024/08/Creare.jpg", tag: "Expert" },
  { name: "Paulo Cuenca", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Cuenca.jpg", tag: "Expert" },
  { name: "Breno Perrucho", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Level-Five.jpg", tag: "Educação" },
  { name: "Nathalia Bataglia", img: "https://anotherlvl.com.br/wp-content/uploads/2026/02/Nath.jpg", tag: "Engenharia" },
  { name: "Garden", img: "https://anotherlvl.com.br/wp-content/uploads/2024/08/Garden.webp", tag: "Branding" },
  { name: "Livia Viccari", img: "https://anotherlvl.com.br/wp-content/uploads/2026/02/Livia.jpg", tag: "Tricologia" },
  { name: "Juvenal Valentin", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Juvenal.jpg", tag: "Expert" },
  { name: "Daniel Tobias", img: "https://anotherlvl.com.br/wp-content/uploads/2026/02/Maxxi.jpg", tag: "Tráfego Pago" },
  { name: "Pedro MKV", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Pedro.jpg", tag: "Edição de vídeos" },
  { name: "Mari Vabo", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Mari-Vabo-2.jpg", tag: "Expert" },
  { name: "Zapvoice", img: "https://anotherlvl.com.br/wp-content/uploads/2026/02/Projeto-zapvoice.webp", tag: "Automação" },
  { name: "Beasy", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Beasy.jpg", tag: "Curso online" },
  { name: "Gisele Palma", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Gisele-Palma.jpg", tag: "Expert" },
  { name: "Gabi Miazzi", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Gabi-Miazzi.jpg", tag: "Expert" },
  { name: "Gustavo Sales", img: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Gabi-Miazzi-1.webp", tag: "Psicoterapia" },
];

const Portfolio = () => {
  return (
    <section className="section-premium bg-[#030406] relative py-20 lg:py-48 flex flex-col items-center w-full overflow-x-hidden" id="results">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 lg:mb-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            Cases
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Resultados reais, de negócios reais.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed opacity-80"
          >
            Infoprodutores, startups, especialistas e empresas que pararam de perder venda por causa de uma estrutura mal feita.
          </motion.p>
        </div>
      </div>

      {/* Screen-Wide Marquee Container */}
      <div className="relative w-full py-6 lg:py-12">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-80 lg:w-[400px] bg-gradient-to-r from-[#030406] via-[#030406]/60 to-transparent z-40 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-80 lg:w-[400px] bg-gradient-to-l from-[#030406] via-[#030406]/60 to-transparent z-40 pointer-events-none" />

        <div className="flex w-max gap-8 lg:gap-12 animate-marquee-slower px-8 items-start overflow-visible">
          {[...projects, ...projects].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-6 shrink-0 cursor-pointer"
              style={{ width: '360px' }}
            >
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-bg-deep border border-white/5 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_30px_80px_rgba(37,99,235,0.1)] h-[480px]">
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Information Row: Name Left, Tag Right */}
              <div className="flex justify-between items-baseline px-2">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-xl">
                  {project.name}
                </h3>
                <div className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.3em] font-bold opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {project.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slower {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); } 
        }
        .animate-marquee-slower {
          animation: marquee-slower 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
