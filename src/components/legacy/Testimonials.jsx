import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Fernando Tobias",
    role: "Ceo - MaxxiAds",
    text: "Nosso site ficou <strong>MUITO FODA!</strong> Eu pensei se valeria a pena contratar um webdesigner ainda em 2026 com tantas plataformas e IAs que fazem isso, mas depois de encontrar seu trabalho, vi que era necessário.<br /><br />Eu não conseguiria chegar a um resultado assim sozinho. Gostaria de agradecer por você atender a gente <strong>muito rápido</strong>, entregar muito além do esperado, e captar exatamente a essência do que a gente queria.",
    image: "https://anotherlvl.com.br/wp-content/uploads/2026/02/unnamed.jpg"
  },
  {
    name: "Gabriel Saab",
    role: "Founder & CEO - Faw",
    text: "<strong>Eficiência, comprometimento e qualidade</strong>. Tudo isso foi o que eu tive ao contratar serviços do Colares. Além de uma LP muito bonita, foi uma das LP’s que tiveram a <strong>maior % de conversão</strong>. 100% Satisfeito.",
    image: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Saab-e1754946415661.webp"
  },
  {
    name: "Giovanni Begossi",
    role: "El professor da oratória",
    text: "<strong>Design impecável</strong>. Trabalho com o Gabriel faz mais de 1 ano e sempre que roteirizo palestras de grandes players recomendo ele como designer.<br /><br />Ele consegue entregar <strong>máxima qualidade</strong> mesmo nos prazos mais curtos. Tem minha confiança total!",
    image: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Giovanni-e1754946401499.webp"
  },
  {
    name: "Gustavo Sales",
    role: "Hipnoterapeuta",
    text: "Minha experiência com a Levers foi <strong>simplesmente incrível</strong>. Uma das coisas que me faz indicar o trabalho do Gabriel para todos é o <strong>profissionalismo</strong> dele.<br /><br />Entrega tudo no prazo, é super atencioso, gentil, ele transforma um trabalho sério em algo descontraído e de quebra, te entrega algo de <strong>qualidade incontestável</strong>. Só tem uma desvantagem em trabalhar com o Gabriel: a régua de qualidade e entrega vão pras alturas!",
    image: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Camada-8-e1754946089315.webp"
  },
  {
    name: "Rafa Veiga",
    role: "COO - Zap Voice",
    text: "Biel só queria te dizer o quanto eu <strong>amo demais o seu trabalho!</strong> Sério, amei cada ideia louca nossa que vc transformou em realidade.<br /><br />A sua agilidade em fazer as coisas é <strong>fora de série</strong>, e já tô indicando teu trabalho pra todo mundo que me pede dica. Tô ansiosa pra ver mais das tuas criações iradas.",
    image: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Rafa-2-e1754946342819.webp"
  },
  {
    name: "Evy Bonani",
    role: "Psicoterapeuta",
    text: "Minha experiência foi ótima! O Colares foi super atencioso e entregou um <strong>trabalho excelente</strong>. Super indico e com certeza farei outros projetos com ele.<br /><br /><strong>Superou minhas expectativas</strong> criando o meu site profissional e também com a minha página de venda para um curso de meditação. Captou muito bem a minha essência e conseguiu trazer isso para o design.",
    image: "https://anotherlvl.com.br/wp-content/uploads/2025/06/Evy-e1754947433823.webp"
  },
  {
    name: "Pedro MKV",
    role: "Filmmaker",
    text: "O trabalho da Another Level é <strong>impecável!</strong> Gostei muito da Landing Page que foi produzida para o meu curso Video Marketing Masters. Como eu também trabalho com prospeção e venda, desde o primeiro contato e a maneira como eles me abordaram e fecharam o trabalho comigo eu já senti que eram diferenciados.",
    image: "https://anotherlvl.com.br/wp-content/uploads/2023/09/Pedro-e1754946359689.webp"
  },
  {
    name: "Rodrigo Aguiar",
    role: "Expert MSK",
    text: "Espetacular o nível de entrega da empresa! Tudo certo e no tempo acertado. Além de tudo, a Laura e o Colares são pessoas muito tranquilas de se relacionar. Eu já tinha altas expectativas devido à fonte que me indicou a empresa, mas elas foram <strong>completamente superadas!</strong>",
    image: "https://anotherlvl.com.br/wp-content/uploads/2025/07/Frame-13-e1754947399209.webp"
  },
  {
    name: "Ellen Watson",
    role: "Arquiteta",
    text: "Contratei o Colares e sua equipe para realizar a minha landing page de arquitetura. Gostei muito do trabalho desde o atendimento inicial até a finalização do projeto. Sempre muito solícito, criou uma landing page bem focada nas minhas necessidades quanto empresa. <strong>Recomendo demais.</strong>",
    image: "https://anotherlvl.com.br/wp-content/uploads/2025/06/Ellen-big.webp"
  },
  {
    name: "12min",
    role: "Leitura Dinâmica",
    text: "Trabalhar com o Gabriel foi uma surpresa muito boa. Há tempos estávamos procurando alguém para nos ajudar a dar um brilho nas nossas LPs, e com o Gabriel achamos <strong>exatamente o que procurávamos</strong>. Com certeza voltaríamos a fazer negócio.",
    image: "https://anotherlvl.com.br/wp-content/uploads/2023/12/unnamed.jpg"
  }
];

// Combine arrays for infinite effect
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardWidth = 400; 
  const gap = 24;

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Instant teleport to the same card in the middle array to hide the transition
  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex >= testimonials.length * 2) {
        setCurrentIndex(currentIndex - testimonials.length);
      } else if (currentIndex < testimonials.length) {
        setCurrentIndex(currentIndex + testimonials.length);
      }
    }, 650); // duration should be slightly longer than the transition duration

    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning]);

  const activeRealIndex = currentIndex % testimonials.length;

  return (
    <section className="section-premium bg-bg-deep py-24 lg:py-48 overflow-hidden" id="feedbacks">
      <div className="w-full max-w-5xl mx-auto px-6 mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4"
          >
            Nossa Prova Real
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            A régua sobe. <br />
            <span className="text-blue-500 text-glow">Não tem como voltar.</span>
          </h2>
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-blue-500/50 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-blue-500/50 transition-all group"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-5xl mx-auto px-6 overflow-visible">
          <motion.div
            className="flex gap-6 items-stretch"
            animate={{ x: -(currentIndex * (cardWidth + gap)) }}
            transition={isTransitioning ? { duration: 0.6, ease: [0.23, 1, 0.32, 1] } : { duration: 0 }}
          >
            {infiniteTestimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] md:w-[400px]">
                <TestimonialCard t={t} isActive={(i % testimonials.length) === activeRealIndex} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Global Progress Indicators */}
        <div className="max-w-5xl mx-auto px-6 mt-16 flex justify-between items-center">
            <div className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest opacity-40 font-bold">
              <span>0{activeRealIndex + 1}</span>
              <span className="mx-4 font-normal text-white/10">/</span>
              <span>10</span>
            </div>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(i + testimonials.length);
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${activeRealIndex === i ? 'bg-blue-500 w-8' : 'bg-white/10 w-2 hover:bg-white/20'}`}
                />
              ))}
            </div>
        </div>
      </div>

      <style jsx>{`
        strong {
          color: #2563eb;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ t, isActive }) => (
  <motion.div 
    animate={{ 
        opacity: isActive ? 1 : 0.25,
        scale: isActive ? 1 : 0.96 
    }}
    transition={{ duration: 0.5 }}
    className={`p-8 md:p-12 rounded-[2.5rem] bg-white/[0.01] border ${isActive ? 'border-blue-500/30 shadow-[0_30px_60px_rgba(37,99,235,0.05)]' : 'border-white/5'} backdrop-blur-xl h-full flex flex-col min-h-[500px] relative overflow-hidden group`}
  >
    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        <Quote className="w-24 h-24 text-blue-500" />
    </div>

    <div className="flex items-center gap-5 mb-10 relative z-10">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/10 ring-4 ring-blue-500/5 shadow-2xl">
        <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-base md:text-xl tracking-tight text-white mb-0.5">{t.name}</h4>
        <p className="text-[10px] text-blue-500 uppercase tracking-[0.25em] font-mono font-bold">{t.role}</p>
      </div>
    </div>
    
    <div className="flex-grow relative z-10">
        <p 
          className="text-[14px] md:text-[16px] text-text-secondary leading-relaxed font-medium"
          dangerouslySetInnerHTML={{ __html: `"${t.text}"` }}
        />
    </div>

    <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between opacity-50">
        <div className="flex gap-1.5">
            {[1,2,3,4,5].map(s => (
                <div key={s} className="w-1 h-1 rounded-full bg-blue-500" />
            ))}
        </div>
        <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-blue-500" />
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Case Verificado</span>
        </div>
    </div>
  </motion.div>
);

export default Testimonials;
