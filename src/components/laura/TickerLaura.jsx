import React from 'react';
import { motion } from 'framer-motion';

const TickerLaura = () => (
  <div className="w-full bg-main py-8 overflow-hidden flex whitespace-nowrap border-y border-border-subtle">
    <motion.div
      className="flex gap-16 text-xl font-header font-bold uppercase tracking-widest text-text-primary/60"
      animate={{ x: [0, "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <React.Fragment key={i}>
          <span className="italic">estratégia com intenção</span>
          <span className="opacity-20 text-accent-primary">✤</span>
          <span>fundação de marca</span>
          <span className="opacity-20 text-accent-primary">✤</span>
          <span className="italic">rigor lógico e visual</span>
          <span className="opacity-20 text-accent-primary">✤</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export default TickerLaura;
