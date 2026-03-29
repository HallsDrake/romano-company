import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const PortfolioLaura = () => {
  return (
    <section id="portfolio" className="relative bg-main pb-0">
      <div className="container-editorial pt-64 pb-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 left-0 whitespace-nowrap z-0 pointer-events-none select-none max-w-full overflow-hidden"
        >
          <span className="text-[15vw] md:text-[20vw] font-header text-text-primary/10 leading-none uppercase tracking-tighter">
            nossos projetos
          </span>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative z-10 mb-12"
        >
           <div className="w-12 h-0.5 bg-accent-primary mb-6" />
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-text-primary/30">
             trabalhos selecionados
           </p>
        </motion.div>
      </div>

      {/* 3x3 Grid - Horizontal Style */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-text-primary relative z-10 -mt-40 lg:-mt-64">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projeto/${project.id}`}
            className="group block relative aspect-video overflow-hidden bg-main border-[0.5px] border-text-primary/10"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay - Title only */}
            <div className="absolute inset-0 bg-text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
              <h3 className="text-xl md:text-2xl font-header text-main text-center uppercase tracking-widest px-4">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioLaura;
