import React from 'react';
import { motion } from 'framer-motion';

const PortfolioItem = ({ title, category, image, description }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg bg-surface border border-border-subtle cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-text-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">
            {category}
          </span>
          <h3 className="text-xl font-bold text-text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-text-primary overflow-hidden">
          <span className="relative">
            Ver Projeto
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-text-primary transition-all duration-300 group-hover:w-full" />
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
