import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const PortfolioLaura = () => {
  return (
    <section id="portfolio" className="relative bg-main pb-0">
      <div className="container-editorial py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-display font-header text-text-primary leading-[0.95] tracking-tighter lowercase"
        >
          projetos<br />selecionados
        </motion.h2>
        <div className="w-16 h-1 bg-accent-primary mt-8" />
      </div>

      {/* Zero-Gap Full-Bleed Grid (4 columns) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-text-primary">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projeto/${project.id}`}
            className="group block relative aspect-square md:aspect-[3/4] overflow-hidden bg-main"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/80 transition-colors duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-header text-main transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {project.title}
              </h3>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-primary mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                {project.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioLaura;
