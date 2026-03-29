import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCarousel = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative py-12 select-none group">
      <motion.div 
        ref={carousel}
        className="cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-10"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] overflow-hidden bg-border-subtle"
            >
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex justify-between items-center mt-10 px-4 md:px-0 opacity-40 group-hover:opacity-100 transition-opacity">
         <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Arraste para explorar</span>
            <div className="w-12 h-[1px] bg-text-primary" />
         </div>
         <span className="text-[9px] uppercase tracking-[0.3em] font-bold">{images.length} DETALHES</span>
      </div>
    </div>
  );
};

export default ProjectCarousel;
