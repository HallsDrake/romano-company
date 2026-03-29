import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const ProjectCarousel = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Triple the images for a seamless loop
  const loopImages = [...images, ...images, ...images];

  useEffect(() => {
    if (carousel.current) {
      // We only care about the width of ONE set of images
      const singleSetWidth = carousel.current.scrollWidth / 3;
      setWidth(singleSetWidth);
      
      // Initial position to the middle set
      x.set(-singleSetWidth);
      
      startAutoplay(singleSetWidth);
    }
  }, [images, controls, x]);

  const startAutoplay = (singleWidth) => {
    controls.start({
      x: [x.get(), x.get() - singleWidth],
      transition: {
        duration: images.length * 6, // 6s per image
        ease: "linear",
        repeat: Infinity,
      }
    });
  };

  const handleDragStart = () => {
    controls.stop();
  };

  const handleDragEnd = (_, info) => {
    // If the drag takes it out of the middle set range, reset it smoothly
    const currentX = x.get();
    if (currentX > 0) {
      x.set(currentX - width);
    } else if (currentX < -width * 2) {
      x.set(currentX + width);
    }
    
    // Resume autoplay after 1s of inactivity
    setTimeout(() => startAutoplay(width), 1000);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative py-12 select-none group overflow-hidden">
      <div className="flex items-center gap-4 mb-8 px-4 md:px-0 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Autoplay / Infinite Collection</span>
        <div className="w-12 h-[1px] bg-text-primary" />
      </div>

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
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                loading={index > images.length && index < images.length * 2 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex justify-between items-center mt-10 px-4 md:px-0 opacity-40 group-hover:opacity-100 transition-opacity">
         <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Arraste para explorar</span>
         </div>
         <span className="text-[9px] uppercase tracking-[0.3em] font-bold">{images.length} DETALHES EXCLUSIVOS</span>
      </div>
    </div>
  );
};

export default ProjectCarousel;
