import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import NavbarLaura from '../components/laura/NavbarLaura';
import FooterLaura from '../components/laura/FooterLaura';

const Project = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return (
    <div className="bg-main min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-header mb-8">Projeto não encontrado.</h1>
      <Link to="/" className="btn-premium">VOLTAR AO INÍCIO</Link>
    </div>
  );

  return (
    <div className="bg-main min-h-screen text-text-primary selection:bg-accent-primary/20">
      <NavbarLaura />

      {/* 1. IMMERSIVE HERO */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-main px-6">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-text-primary/60 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center max-w-5xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-header leading-[0.85] tracking-tighter uppercase text-main"
          >
            {project.title}<span className="text-accent-primary">.</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-main/60"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll para explorar</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-main/60 to-transparent" />
        </motion.div>
      </section>

      {/* 2. METADATA BAR */}
      <div className="border-y border-border-subtle bg-main">
        <div className="container-editorial py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12 md:gap-6">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-secondary opacity-50 mb-2">Projeto</span>
            <span className="font-header text-2xl md:text-xl uppercase tracking-tighter">{project.title}</span>
          </div>
          <div className="flex flex-col items-center md:items-center w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-secondary opacity-50 mb-2">Cliente</span>
            <span className="font-header text-2xl md:text-xl uppercase tracking-tighter">{project.client}</span>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-secondary opacity-50 mb-2">Expertise</span>
            <span className="font-header text-2xl md:text-xl uppercase tracking-tighter">{project.category}</span>
          </div>
        </div>
      </div>

      {/* 3. EDITORIAL NARRATIVE - THE CHALLENGE (30/70 SPLIT) */}
      <section className="py-24 md:py-40 container-editorial">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 text-center lg:text-left"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-primary mb-4">O Desafio</h2>
            <p className="font-serif italic text-3xl text-text-primary leading-tight">
              Reinventando a percepção de valor.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light mb-8">
              {project.challenge || "Identificamos a necessidade de uma ruptura visual e estratégica para que a marca pudesse ocupar seu lugar de direito no topo do segmento premium."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. FULL BLEED IMAGE 1 */}
      <section className="w-full h-[80vh] overflow-hidden">
        <img 
          src={project.gallery && project.gallery[0] ? project.gallery[0] : project.image} 
          className="w-full h-full object-cover" 
          alt="Detalhe do projeto"
        />
      </section>

      {/* 5. STRATEGY SECTION (30/70 SPLIT) */}
      <section className="py-24 md:py-40 container-editorial">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 text-center lg:text-left"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-primary mb-4">Estratégia</h2>
            <p className="font-serif italic text-3xl text-text-primary leading-tight">
              Design que comunica poder.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light mb-12">
              {project.strategy || "Nossa abordagem focou em trazer elementos atemporais e uma tipografia que respira luxo, garantindo que cada ponto de contato da marca reforce sua nova autoridade."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src={project.gallery && project.gallery[1] ? project.gallery[1] : project.image} className="w-full aspect-square object-cover" alt="Grid 1" />
              <img src={project.gallery && project.gallery[2] ? project.gallery[2] : project.image} className="w-full aspect-square object-cover" alt="Grid 2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. RESPIRO SECTION */}
      <section className="bg-accent-primary py-32 px-6 text-center text-main">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="font-header text-4xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tighter"
          >
            "O design premium é o silêncio que fala mais alto que qualquer ruído."
          </motion.p>
        </div>
      </section>

      {/* 7. GALLERY GRID */}
      <section className="py-24 container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 h-[600px]">
            <img src={project.gallery && project.gallery[3] ? project.gallery[3] : project.image} className="w-full h-full object-cover" alt="Gallery 3" />
          </div>
          <div className="md:col-span-4 h-[600px] flex flex-col gap-8">
            <div className="h-1/2 w-full bg-border-subtle overflow-hidden">
               <img src={project.image} className="w-full h-full object-cover" alt="Gallery 4" />
            </div>
            <div className="h-1/2 w-full flex items-center justify-center border border-border-subtle p-12 text-center">
               <p className="font-serif italic text-2xl text-text-secondary">A Romano Company eleva marcas ao status de ícone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RESULTS (30/70 SPLIT) */}
      <section className="py-24 md:py-40 container-editorial border-t border-border-subtle">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-center text-center lg:text-left">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-primary">O Resultado</h2>
          <div>
            <p className="text-3xl md:text-5xl font-header uppercase tracking-tighter text-text-primary mb-6">
              {project.results || "Sucesso absoluto em posicionamento e conversão."}
            </p>
            {project.behanceUrl && (
              <a 
                href={project.behanceUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-premium flex items-center justify-center gap-4 mt-8 w-full lg:w-auto"
              >
                VER PROJETO NO BEHANCE
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M17 7 7 17"/></svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 9. NEXT PROJECT CTA */}
      <section className="py-24 md:py-32 bg-main text-center border-t border-border-subtle">
        <span className="text-[10px] uppercase tracking-widest font-bold text-text-secondary mb-4 block">Próximo Caso</span>
        <Link 
          to="/#portfolio" 
          className="text-3xl sm:text-5xl md:text-8xl font-header uppercase tracking-tighter hover:text-accent-primary transition-colors block px-4"
        >
          EXPLORAR PORTFÓLIO
        </Link>
      </section>

      <FooterLaura />
    </div>
  );
};

export default Project;
