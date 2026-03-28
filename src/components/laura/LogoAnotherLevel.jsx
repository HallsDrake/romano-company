import React from 'react';
import { motion } from 'framer-motion';

const LogoAnotherLevel = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1 font-bold tracking-tighter text-white ${className}`}>
      <span className="text-lg md:text-xl">An</span>
      <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
        {/* The Stylized O / Circle */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-blue-500 rounded-full border-t-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full blur-[2px] opacity-50" />
      </div>
      <span className="text-lg md:text-xl">ther Level</span>
    </div>
  );
};

export default LogoAnotherLevel;
