import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const ProjectCarousel = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Use a smaller set for the loop (only double) to minimize confusion
  const loopImages = [...images, ...images];

  useEffect(() => {
    if (carousel.current) {
      const singleSetWidth = carousel.current.scrollWidth / 2;
      setWidth(singleSetWidth);
      x.set(0);
      startAutoplay(singleSetWidth);
    }
  }, [images, controls, x]);

  const startAutoplay = (singleWidth) => {
    controls.start({
      x: [0, -singleWidth],
      transition: {
        duration: images.length * 8, // Slower, more elegant
        ease: "linear",
        repeat: Infinity,
      }
    });
  };

  const handleDragStart = () => {
    controls.stop();
  };

  const handleDragEnd = (_, info) => {
    const currentX = x.get();
    // Keep it within bounds of the first set
    if (currentX > 0) x.set(currentX - width);
    if (currentX < -width) x.set(currentX + width);
    
    setTimeout(() => startAutoplay(width), 2000); // 2s delay after drag
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative py-12 select-none group overflow-hidden">
      <motion.div 
        ref={carousel}
        className="cursor-grab active:cursor-grabbing"
      >
        <motion.div 
          drag="x"
          style={{ x }}
          animate={controls}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => startAutoplay(width)}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-10"
        >
          {loopImages.map((img, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] overflow-hidden bg-border-subtle"
            >
              <img 
                src={img} 
                alt="Detalhe do projeto"
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
