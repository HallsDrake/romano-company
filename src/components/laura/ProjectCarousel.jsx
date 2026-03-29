import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCarousel = ({ images }) => {
  const containerRef = useRef(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative py-12">
      <div className="flex items-center justify-between mb-8 px-4 md:px-0">
         <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-primary">Galeria Completa</h3>
         <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold">Deslize para explorar →</span>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 px-4 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] snap-center overflow-hidden bg-border-subtle"
          >
            <img 
              src={img} 
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Custom navigation bar at the bottom */}
      <div className="w-full h-[1px] bg-border-subtle relative mt-4">
         <motion.div 
            className="absolute top-0 left-0 h-full bg-accent-primary"
            style={{ width: '10%' }} // Future: animate this with useScroll if needed
         />
      </div>
    </div>
  );
};

export default ProjectCarousel;
