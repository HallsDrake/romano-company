import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users, Cpu, Maximize2 } from 'lucide-react';

const CountUp = ({ end, duration = 2, prefix = '', suffix = '', decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration,
        onUpdate: (value) => setCount(value),
        ease: [0.16, 1, 0.3, 1], // Custom ease out expo
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {count.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
};

const FloatingCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.8,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2,
      ease: "easeInOut"
    }}
    className={`absolute hidden lg:block z-20 backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-2xl ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-bg-offwhite p-3 md:p-4 lg:p-6 overflow-hidden">
      {/* 1. THE BLACK FRAME */}
      <div className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-bg-deep rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden flex flex-col items-center justify-center pt-32 pb-16">

        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 z-0 h-[150%]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              d="M 50 0 L 50 100"
              className="stroke-blue-500 stroke-[0.1px] fill-none"
              style={{ strokeDasharray: "1 1" }}
            />
          </svg>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          {/* Floating Cards */}
          <FloatingCard className="top-[25%] left-[5%] xl:left-[8%] w-52" delay={0.2}>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1.5 bg-green-500/10 rounded-lg text-green-500">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-mono text-text-tertiary uppercase font-bold tracking-widest">META PERFORMANCE</span>
            </div>
            <div className="text-xl font-bold text-white">+24% ROAS <span className="text-[10px] text-text-tertiary font-normal">em 14 dias</span></div>
          </FloatingCard>

          <FloatingCard className="top-[35%] right-[5%] xl:right-[8%] w-52" delay={0.5}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-500">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-mono text-text-tertiary uppercase font-bold tracking-widest">CONVERSION RATE</span>
            </div>
            <div className="text-xl font-bold text-white">+18% CVR</div>
          </FloatingCard>

          {/* Central Content */}
          <div className="text-center relative py-12 lg:py-16 flex flex-col items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Cpu className="w-3 h-3 text-blue-500 shrink-0" />
                <span className="text-[8px] md:text-[9px] font-mono text-blue-500 uppercase tracking-widest font-bold">Revenue Infrastructure & Growth Engineering</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1] text-white text-balance">
                Transformamos visitas em faturamento real através de Otimização de Conversão.
              </h1>

              <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 opacity-80 font-medium leading-relaxed">
                Menos "páginas". Mais ativos de Engenharia. Atuamos na infraestrutura de design, dados e IA (GEO) que seu negócio exige para converter visitantes em lucro e autoridade.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.a
                  href="#pricing"
                  className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
                >
                  Quero aumentar minha conversão
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Experts Row (End of Frame) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col items-center"
          >
            <img
              src="/assets/Fotos.jpg"
              alt="Experts"
              className="w-full max-w-[160px] h-auto opacity-90"
            />
            <p className="mt-3 text-[9px] font-mono text-white/30 uppercase tracking-[0.2em] font-bold text-center">
              + de 100 empresas de sucesso <br /> já mudaram seus resultados com a gente.
            </p>
          </motion.div>
        </div>

        {/* Blueprint System Labels */}
        <div className="absolute bottom-10 left-10 flex flex-col gap-2 pointer-events-none">
          <div className="text-[10px] font-mono text-blue-500/40 uppercase tracking-[0.3em]">System.Core // Engineering_Asset</div>
          <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em]">LEVERS REVENUE INFRASTRUCTURE V.1.0-STABLE</div>
        </div>
      </div>

      {/* 2. THE METRICS (Outside the frame, on white bg) */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 md:py-20 border-y border-black/5 w-full justify-items-center">
          {[
            { label: 'Receita Gerada', value: 17, prefix: 'R$ ', suffix: 'MM' },
            { label: 'Projetos Entregues', value: 100, suffix: '+' },
            { label: 'Retenção Média', value: 98, suffix: '%' },
            { label: 'ROI Médio', value: 4.2, suffix: 'x', decimals: 1 }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-[9px] font-mono text-blue-600 uppercase tracking-widest mb-2 font-bold">{stat.label}</span>
              <div className="text-3xl md:text-5xl font-black text-inverse tracking-tighter">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
