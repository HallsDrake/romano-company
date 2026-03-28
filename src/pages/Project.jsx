import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import NavbarLaura from '../components/laura/NavbarLaura';
import FooterLaura from '../components/laura/FooterLaura';
import TickerLaura from '../components/laura/TickerLaura';

const Project = () => {
   const { id } = useParams();
   const project = projects.find(p => p.id === id);

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [id]);

   if (!project) return (
     <div className="bg-main min-h-screen flex items-center justify-center">
       <h1 className="text-4xl font-header">Projeto não encontrado.</h1>
       <Link to="/" className="btn-premium ml-8">VOLTAR</Link>
     </div>
   );

   return (
      <div className="bg-main min-h-screen">
         <NavbarLaura />
         
         <div className="pt-48 pb-20 container-editorial">
            <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-text-primary/50 hover:text-accent-primary mb-12 inline-block">
               ← Voltar ao Início
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
              <div>
                <h1 className="text-display font-header text-text-primary mb-4 leading-none">{project.title}</h1>
                <p className="text-sm font-bold uppercase tracking-widest text-accent-primary">{project.category}</p>
              </div>
              <div className="md:text-right">
                {project.client && (
                  <div className="mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-text-primary/50 block">Cliente</span>
                    <span className="font-header text-xl text-text-primary">{project.client}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* The project's main imagery without any tinting or blending */}
            <img src={project.image} alt={project.title} className="w-full aspect-[21/9] object-cover mb-24 rounded-sm shadow-xl" />
            
            <div className="max-w-4xl mx-auto text-xl md:text-3xl text-text-primary/80 leading-relaxed font-header mb-24 text-center">
               <p>{project.description || "Descrição completa do projeto em desenvolvimento. A Romano Company atua de forma estratégica na construção e posicionamento desta marca, garantindo um grid de entregáveis focado em conversão e percepção de valor."}</p>
            </div>

            {project.behanceUrl && (
              <div className="flex justify-center mb-32">
                <a 
                  href={project.behanceUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-premium flex items-center gap-4 py-4 px-10 text-xs tracking-[0.2em] font-bold"
                >
                  VER PROJETO COMPLETO NO BEHANCE
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M17 7 7 17"/></svg>
                </a>
              </div>
            )}
         </div>
         
         <TickerLaura />
         <FooterLaura />
      </div>
    )
}
export default Project;
