import React from 'react';
import { motion } from 'framer-motion';

const FooterLaura = () => {
  return (
    <footer id="contato" className="relative bg-text-primary text-main pt-32 pb-12 overflow-hidden">
      <div className="container-editorial relative z-10 flex flex-col h-full min-h-[50vh] justify-between">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12 mb-32">
          
          <div className="max-w-md flex flex-col items-center md:items-start">
            <span className="inline-block px-4 py-1.5 rounded-full border border-main/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-main/80">
              ROMANO COMPANY
            </span>
            <p className="font-header text-3xl leading-[1.2] text-main/90 mb-12">
              Marcas inesquecíveis não são coincidência. São o resultado de escolhas estratégicas.
            </p>
            
            <a href="mailto:contato@romanocompany.com.br" className="btn-premium w-full md:w-auto flex items-center justify-center group">
               VAMOS CONVERSAR
            </a>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-32 text-main/60 w-full md:w-auto">
             <div className="flex flex-col items-center md:items-start gap-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent-primary">Social</span>
                <a href="https://instagram.com/romanolaurah" className="font-header text-lg hover:text-main transition-colors block mix-blend-screen">Instagram</a>
                <a href="https://behance.net/romanolaurah" className="font-header text-lg hover:text-main transition-colors block mix-blend-screen">Behance</a>
             </div>
             
             <div className="flex flex-col items-center md:items-start gap-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent-primary">Navegação</span>
                <a href="#portfolio" className="font-header text-lg hover:text-main transition-colors block mix-blend-screen">Projetos</a>
                <a href="#sobre" className="font-header text-lg hover:text-main transition-colors block mix-blend-screen">Manifesto</a>
             </div>
          </div>
        </div>

        {/* Epic Typography Bottom */}
        <div className="mt-auto pt-12 relative">
           
           <motion.div 
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
             className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-end gap-12 md:gap-0"
           >
               <h2 className="text-[11vw] font-header text-main leading-[0.75] tracking-tighter uppercase mb-0 opacity-90 select-none pointer-events-none text-center md:text-left">
                  ROMANO<span className="text-accent-primary">.</span>
               </h2>
              
              <div className="text-center md:text-right pb-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-main/40 mb-2">© 2026 Todos os Direitos Reservados</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-main/40">Design & CRO by <a href="https://anotherlvl.com.br/" className="text-accent-primary hover:text-main hover:underline">Another Level</a></p>
              </div>
           </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLaura;
