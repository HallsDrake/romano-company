import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, TrendingUp, Target, BarChart3, MousePointer2, RefreshCcw, Cpu, Zap, Shield, ChevronRight, Layout, BarChart2 } from 'lucide-react';

const TechnicalModule = ({ stage, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative group lg:w-[45%] z-10"
  >
    {/* Module Header - Meta Info */}
    <div className="flex items-center justify-between mb-4 px-2">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-blue-500 font-bold px-2 py-0.5 bg-blue-500/10 border border-blue-500/20">{stage.phase}</span>
        <span className="text-[9px] font-mono text-text-tertiary uppercase tracking-widest opacity-40">{stage.code}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className={`w-1 h-1 rounded-full ${stage.status === 'ACTIVE' ? 'bg-green-500 animate-pulse' : 'bg-blue-500/40'}`} />
        <span className="text-[8px] font-mono text-text-tertiary uppercase opacity-40">{stage.status}</span>
      </div>
    </div>

    {/* Module Body */}
    <div className={`p-8 lg:p-10 border transition-all duration-500 ${
      stage.highlight 
      ? 'bg-blue-600/[0.03] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.03)]' 
      : 'bg-white/[0.01] border-white/5 group-hover:border-white/10'
    }`}>
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-blue-500 bg-white/[0.03]">
          {stage.icon}
        </div>
        <div>
          <div className="text-[10px] font-mono text-blue-500/60 uppercase tracking-widest mb-1">{stage.category}</div>
          <h4 className="text-xl lg:text-2xl font-bold text-white tracking-tight">{stage.title}</h4>
        </div>
      </div>

      <p className="text-sm text-text-secondary opacity-60 mb-10 leading-relaxed max-w-sm">
        {stage.description}
      </p>

      {/* Item Grid */}
      <div className="grid grid-cols-1 gap-4">
        {stage.tracks.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-t border-white/[0.03] group/item">
            <div className="flex items-center gap-3">
              <ChevronRight className="w-3 h-3 text-blue-500/40 group-hover/item:text-blue-500 transition-colors" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-text-secondary">{item.label}</span>
            </div>
            <span className="text-[10px] font-mono text-text-tertiary opacity-40 group-hover/item:opacity-70 transition-opacity">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Technical Footer Decoration */}
      <div className="mt-8 pt-6 border-t border-dashed border-white/5 flex justify-end">
        <div className="text-[8px] font-mono text-text-tertiary opacity-10 uppercase tracking-[0.4em]">SYSTEM.DEPLOYMENT.VER_2.4</div>
      </div>
    </div>
  </motion.div>
);

const BlueprintSchematic = ({ index }) => {
  const schematics = [
    // Phase 1: Strategic Map (Ghostly)
    <svg key="s1" viewBox="0 0 400 300" className="w-full h-full opacity-20">
      <defs>
        <pattern id="grid-dots-ghost" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="currentColor" className="opacity-30" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid-dots-ghost)" />
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        d="M 50 200 L 150 100 L 250 250 L 350 150" 
        stroke="currentColor" strokeWidth="0.4" fill="none" 
      />
      {[
        { x: 50, y: 200, label: "INIT" },
        { x: 150, y: 100, label: "GAP" },
        { x: 250, y: 250, label: "AUDIT" },
        { x: 350, y: 150, label: "EXIT" }
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="2" fill="currentColor" className="opacity-40" />
          <motion.circle 
            animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            cx={p.x} cy={p.y} r="4" stroke="currentColor" fill="none" strokeWidth="0.2" 
          />
          <text x={p.x + 8} y={p.y + 4} className="text-[5px] font-mono fill-current opacity-30 select-none uppercase tracking-widest">{p.label}</text>
        </g>
      ))}
    </svg>,

    // Phase 2: Assembly Line (Ghostly)
    <svg key="s2" viewBox="0 0 400 300" className="w-full h-full opacity-20">
      <rect x="100" y="60" width="200" height="180" stroke="currentColor" fill="none" strokeWidth="0.4" strokeDasharray="1 3" />
      <motion.rect 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 3 }}
        x="130" y="90" width="140" height="120" stroke="currentColor" fill="none" strokeWidth="0.6" 
      />
      <line x1="100" y1="60" x2="300" y2="240" stroke="currentColor" strokeWidth="0.2" className="opacity-20" />
      <line x1="300" y1="60" x2="100" y2="240" stroke="currentColor" strokeWidth="0.2" className="opacity-20" />
      <text x="110" y="50" className="text-[5px] font-mono fill-current opacity-40 uppercase tracking-[0.4em]">STRUCTURE.ENG // REF: 0x2A</text>
    </svg>,

    // Phase 3: Profit Loop (Ghostly)
    <svg key="s3" viewBox="0 0 400 300" className="w-full h-full opacity-25">
      <motion.circle 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        cx="200" cy="150" r="100" stroke="currentColor" fill="none" strokeWidth="0.3" strokeDasharray="2 10" 
      />
      <motion.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 5 }}
        d="M 50 150 Q 200 50 350 150" 
        stroke="currentColor" strokeWidth="0.5" fill="none" className="opacity-20"
      />
      <circle cx="200" cy="150" r="1" fill="currentColor" />
      <text x="170" y="153" className="text-[7px] font-mono fill-current opacity-40 uppercase tracking-[0.8em]">SCALING</text>
    </svg>
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ 
        opacity: { duration: 2 },
        y: { duration: 15, repeat: Infinity, ease: "easeInOut" }
      }}
      className={`hidden lg:flex items-center justify-center w-[35%] text-blue-500/20 pointer-events-none select-none h-80 relative ${
        index % 2 === 0 ? 'lg:translate-x-20' : 'lg:-translate-x-20'
      }`}
    >
        {/* Mysterious Coordinate Marker */}
        <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} flex flex-col items-end opacity-20`}>
            <span className="text-[6px] font-mono text-blue-400 uppercase tracking-tighter">COORD: 0.{index+1}7.00{index*2}</span>
            <span className="text-[6px] font-mono text-blue-400 uppercase tracking-tighter">STATE: SYNC_IDLE</span>
        </div>
      {schematics[index]}
    </motion.div>
  );
};

const funnelStages = [
  {
    id: 1,
    phase: 'PHASE_01',
    code: 'INT_CORE // STABLE',
    status: 'READY',
    category: 'Strategic Intelligence',
    title: 'Mapeamento de Alavancas',
    icon: <Search className="w-5 h-5" />,
    description: 'Análise estrutural da operação para identificar gargalos de conversão, pontos de fuga de capital e autoridade de marca.',
    tracks: [
      { id: 1, label: 'Briefing Executivo', value: 'Imersão no modelo e oferta' },
      { id: 2, label: 'Análise de Gap', value: 'Identificação de furos no funil' },
      { id: 3, label: 'Data Mapping', value: 'Estruturação de tracking e metas' }
    ],
    highlight: false
  },
  {
    id: 2,
    phase: 'PHASE_02',
    code: 'REV_ENG // STABLE',
    status: 'ACTIVE',
    category: 'Revenue Engineering',
    title: 'Ativos de Alta Performance',
    icon: <Layout className="w-5 h-5" />,
    description: 'Construção da infraestrutura de conversão: design de alto nível, copy de impacto e visibilidade em mecanismos de IA (GEO).',
    tracks: [
      { id: 1, label: 'Sales Infrastructure', value: 'Páginas de Alta Conversão' },
      { id: 2, label: 'SEO/GEO Engine', value: 'Visibilidade em buscas de IA' },
      { id: 3, label: 'Performance Tech', value: 'Carregamento sub-segundo' }
    ],
    highlight: true
  },
  {
    id: 3,
    phase: 'PHASE_03',
    code: 'OPT_BI // STABLE',
    status: 'READY',
    category: 'Profit Optimization',
    title: 'Ciclo de Escala & ROI',
    icon: <BarChart2 className="w-5 h-5" />,
    description: 'Otimização contínua baseada em dados reais. Ajustamos a engenharia para maximizar o lucro por usuário e reduzir o CAC.',
    tracks: [
      { id: 1, label: 'CRO Management', value: 'Testes A/B e Otimização' },
      { id: 2, label: 'Data Insights', value: 'Dashboards de Transparência' },
      { id: 3, label: 'Scale Readiness', value: 'Preparação para Escala' }
    ],
    highlight: false
  }
];

const Funnel = () => {
  return (
    <section className="section-premium bg-bg-deep relative py-24 lg:py-48 overflow-hidden" id="funnel">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            GROWTH ENGINEERING JOURNEY
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-white text-balance">
            Engenharia Aplicada ao <span className="text-blue-500">Lucro.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto opacity-70 leading-relaxed">
            Não acreditamos em fórmulas mágicas. Acreditamos em infraestrutura de dados, design estratégico e experimentação contínua.
          </p>
        </div>

        {/* The Connector Layout */}
        <div className="relative space-y-12 lg:space-y-0">
          {/* Vertical Connector Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

          {/* Stages */}
          <div className="flex flex-col gap-12 lg:gap-24 relative">
            {funnelStages.map((stage, i) => (
              <div 
                key={stage.id} 
                className={`flex flex-col lg:flex-row items-center w-full min-h-[400px] ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <TechnicalModule stage={stage} index={i} />
                
                {/* Decoration Side (Fills the vacuum) */}
                <BlueprintSchematic index={i} />
                
                {/* Visual Connection (Center Dot) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 border border-white/20 bg-bg-deep rounded-full hidden lg:flex items-center justify-center z-20">
                    <div className={`w-1 h-1 rounded-full ${stage.highlight ? 'bg-blue-500 animate-pulse' : 'bg-white/20'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equity Impact Grid - Design Break (White Background) */}
        <div className="mt-48 w-screen relative -left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:-left-[max(3rem,calc((100vw-80rem)/2+3rem))] bg-bg-offwhite pt-32 md:pt-48 pb-20 md:pb-24 px-6 lg:px-12 border-t border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="text-[10px] font-mono text-blue-600/60 uppercase tracking-[0.3em] mb-4">Proposta de Valor</div>
              <h3 className="text-4xl lg:text-7xl font-bold mb-6 text-inverse tracking-tight">
                Impacto Estrutural <span className="text-blue-600">Além do ROI.</span>
              </h3>
              <p className="text-lg text-inverse-secondary max-w-2xl mx-auto opacity-70 leading-relaxed">
                Mensuramos o sucesso pela solidez da sua infraestrutura e pela valorização real do seu ativo digital.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-black/5">
              {[
                { id: '01', title: 'Arquitetura de Conversão', icon: <Layout className="w-4 h-4" /> },
                { id: '02', title: 'Visibilidade GEO/IA', icon: <Search className="w-4 h-4" /> },
                { id: '03', title: 'Engenharia de Dados', icon: <Cpu className="w-4 h-4" /> },
                { id: '04', title: 'Mapeamento de Alavancas', icon: <Target className="w-4 h-4" /> },
                { id: '05', title: 'Infraestrutura de Vendas', icon: <Shield className="w-4 h-4" /> },
                { id: '06', title: 'Otimização de ROI (CRO)', icon: <TrendingUp className="w-4 h-4" /> },
                { id: '07', title: 'Escala de Performance', icon: <Zap className="w-4 h-4" /> },
                { id: '08', title: 'Valorização de Equity', icon: <BarChart2 className="w-4 h-4" /> }
              ].map((impact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative p-8 lg:p-14 border-r border-b border-black/5 hover:bg-white transition-all duration-300"
                >
                  <div className="flex flex-col gap-10">
                    <div className="text-blue-600 opacity-40 group-hover:opacity-100 transition-opacity">
                      {impact.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-black/10 block mb-2 font-bold">{impact.id}</span>
                      <h4 className="text-sm lg:text-base font-bold text-inverse tracking-tight uppercase leading-tight">
                          {impact.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funnel;
