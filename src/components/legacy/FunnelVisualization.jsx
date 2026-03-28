import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowDown } from 'lucide-react';

const ParticleStream = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: -20, 
            x: '50%', 
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: [0, 150, 300, 480],
            x: [
              '50%', 
              `calc(50% + ${Math.random() * 60 - 30}px)`, 
              `calc(50% + ${Math.random() * 20 - 10}px)`, 
              '50%'
            ],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 0.8, 0.4],
            filter: [
              'blur(1px)', 
              'blur(0px) brightness(1.5)', 
              'blur(1px) brightness(2)', 
              'blur(2px)'
            ]
          }}
          transition={{ 
            duration: 3.5 + Math.random() * 2, 
            delay: i * 0.4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-1 h-3 bg-blue-400 rounded-full"
          style={{ 
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
            left: '0',
            right: '0',
            margin: '0 auto'
          }}
        />
      ))}
    </div>
  );
};

const FunnelVisualization = () => {
  const stages = useMemo(() => [
    { 
      label: 'Visitas Qualificadas', 
      value: '250.000', 
      percent: '100%', 
      color: 'url(#funnel-grad-1)',
      path: "M 0,0 L 400,0 L 360,140 L 40,140 Z",
      floatDelay: 0
    },
    { 
      label: 'Engenharia de Conversão', 
      value: '12.500', 
      percent: '5.0%', 
      color: 'url(#funnel-grad-2)', 
      path: "M 42,145 L 358,145 L 315,295 L 85,295 Z",
      highlight: true,
      floatDelay: 0.2
    },
    { 
      label: 'Faturamento / Vendas', 
      value: '875', 
      percent: '0.35%', 
      color: 'url(#funnel-grad-3)', 
      path: "M 87,300 L 313,300 L 275,450 L 125,450 Z",
      floatDelay: 0.4
    }
  ], []);

  return (
    <section className="section-premium bg-bg-deep py-40 overflow-hidden relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Side: Strategic Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.3em] font-bold">
              Protocolo de Otimização ∞
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.95] text-white"
          >
            Maximize cada <br /> 
            <span className="text-blue-500 italic">Ponto de Contato</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary opacity-70 mb-14 max-w-xl leading-relaxed font-medium"
          >
            Nós não apenas trazemos tráfego. Nós projetamos a arquitetura que retém, educa e converte essa demanda em faturamente previsível. <br /><br />
            Enquanto outros olham para o topo, nós resolvemos o **gargalo de lucro** no meio do caminho.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
                { title: 'CRO de Elite', desc: 'Testes contínuos em cada etapa para encontrar o lucro oculto.' },
                { title: 'Data Assets', desc: 'Transformamos dados em infraestrutura de vendas escalável.' }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group"
                >
                   <h4 className="font-bold text-white mb-2 uppercase text-[10px] tracking-widest flex items-center gap-2">
                      <Zap className="w-3 h-3 text-blue-500" />
                      {item.title}
                   </h4>
                   <p className="text-sm text-text-secondary opacity-50 leading-snug">{item.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Loose Premium Funnel Drawing */}
        <div className="relative flex flex-col items-center justify-center min-h-[600px]">
          
          {/* Luminous Stream Animation */}
          <ParticleStream count={25} />

          <div className="relative w-full max-w-[440px] aspect-[400/500]">
            <svg viewBox="0 0 400 500" className="w-full h-full">
              <defs>
                <linearGradient id="funnel-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <linearGradient id="funnel-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
                </linearGradient>
                <linearGradient id="funnel-grad-3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.9)" />
                  <stop offset="100%" stopColor="rgba(37,99,235,1)" />
                </linearGradient>
                
                <filter id="energy-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {stages.map((stage, i) => (
                <motion.g
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    duration: 4, 
                    delay: stage.floatDelay, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {/* Glass Layer Path */}
                  <path
                    d={stage.path}
                    fill={stage.color}
                    className="transition-all duration-1000"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                    style={stage.highlight ? { filter: 'url(#energy-glow)' } : {}}
                  />

                  {/* Rim Light Effect */}
                  <path
                    d={stage.path.split(' L')[0] + ' L ' + stage.path.split(' L ')[1]}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  
                  {/* Labels and Strategic Data */}
                  <foreignObject 
                    x={i === 0 ? "80" : i === 1 ? "110" : "150"} 
                    y={i === 0 ? "40" : i === 1 ? "190" : "345"} 
                    width={i === 0 ? "240" : i === 1 ? "180" : "100"} 
                    height="100"
                  >
                    <div className="flex flex-col items-center justify-center text-center pointer-events-none font-mono">
                      <span className="text-[7px] uppercase tracking-[0.4em] text-white/30 mb-3 font-bold">{stage.label}</span>
                      <span className={`text-3xl md:text-4xl font-black tracking-tighter ${stage.highlight ? 'text-blue-400' : 'text-white'}`}>
                        {stage.value}
                      </span>
                      <div className="mt-2 text-[9px] font-bold py-0.5 px-2 rounded-sm bg-white/5 border border-white/10 text-white/40 tracking-[0.1em]">
                          {stage.percent}
                      </div>
                    </div>
                  </foreignObject>

                  {/* HIGH-END CONVERSION LIFT ELEMENT - Adjusted for mobile visibility */}
                  {stage.highlight && (
                    <g transform="translate(290, 210)">
                        <motion.circle 
                            r="3" 
                            className="fill-blue-500" 
                            animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} 
                            transition={{ duration: 2, repeat: Infinity }} 
                        />
                        <rect x="8" y="-12" width="75" height="20" rx="10" className="fill-blue-500/10 border border-blue-500/30" stroke="rgba(59,130,246,0.3)" />
                        <text x="45" y="2" textAnchor="middle" className="fill-blue-500 text-[6px] font-bold uppercase tracking-[0.2em]">MAXIMIZE</text>
                    </g>
                  )}
                </motion.g>
              ))}

              {/* Central Energy Axis */}
              <line x1="200" y1="0" x2="200" y2="460" stroke="rgba(59, 130, 246, 0.05)" strokeDasharray="10 10" />
            </svg>
          </div>

          {/* Result Summary Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center relative z-30"
          >
             <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-[0.5em] mb-4 opacity-30 font-bold">ROI Projetado de Estrutura</div>
             <div className="text-6xl font-black text-white tracking-widest font-mono flex items-center justify-center gap-3">
                <span className="text-blue-500 text-3xl font-light">↑</span>
                240
                <span className="text-blue-500 text-3xl font-light">%</span>
             </div>
             
             <div className="mt-10 inline-flex items-center gap-4 p-1 rounded-full border border-blue-500/10 bg-blue-500/5 pr-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                    <div className="text-[9px] font-mono text-blue-400 uppercase tracking-widest font-black text-left">Levers Powerhouse</div>
                    <div className="text-[8px] text-white/30 uppercase tracking-widest text-left">Conversion Engineering</div>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FunnelVisualization;
