import React from 'react';
import { motion } from 'framer-motion';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20">
      {/* Horizontal Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
      />
      
      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between px-[10%]">
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.1 }}
            transition={{ duration: 2, delay: i * 0.2 }}
            className="w-[1px] h-full bg-blue-500/20"
          />
        ))}
      </div>

      {/* Animated Grid Dots */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', 
        backgroundSize: '40px 40px',
        opacity: 0.05 
      }} />

      {/* Decorative Technical Labels */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-blue-500/40 uppercase tracking-[0.2em]">
        Status: Premium Asset // [40.7128° N, 74.0060° W]
      </div>
      <div className="absolute top-10 right-10 text-[10px] font-mono text-blue-500/40 uppercase tracking-[0.2em]">
        Revenue Architecture v2.0
      </div>
    </div>
  );
};

export default GeometricBackground;
