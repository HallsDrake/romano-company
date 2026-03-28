import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Branding",
    highlight: "estratégico",
    label: "NOSSA ESSÊNCIA",
    description: "Criar uma marca é potencializar a sua presença no mercado. A fundação invisível que sustenta grandes empresas: mergulhamos na sua essência para definir posicionamento, tom de voz e propósito estrutural. O branding garante que a sua marca não apenas exista, mas lidere.",
    deliverables: [
      { name: "Posicionamento", benefit: "A clareza definitiva de como os clientes devem enxergar sua empresa." },
      { name: "Plataforma de Marca", benefit: "A espinha dorsal que guia suas mensagens e decisões internas." },
      { name: "Tom de Voz & Narrativa", benefit: "Como sua marca se comunica, persuade e engaja audiências." }
    ],
    bgClass: "bg-main",
    textClass: "text-text-primary",
    borderClass: "border-text-primary/20",
    btnClass: "bg-accent-primary text-white hover:scale-105 shadow-xl rounded-full text-center px-10",
    image: "/assets/Fotos Laura/IMG_1158.JPG.jpeg",
    reverse: false
  },
  {
    title: "Identidade",
    highlight: "visual",
    label: "NOSSO TRABALHO",
    description: "A tradução tangível da inteligência estruturada no branding. Desenvolvemos sistemas visuais proprietários completos para que a sua empresa seja reconhecida imediatamente, de forma sofisticada e inconfundível perante a concorrência.",
    deliverables: [
      { name: "Design de Logotipo", benefit: "O selo principal de confiança que assina todas as comunicações." },
      { name: "Cores e Tipografia", benefit: "Regras visuais para transmitir a exata percepção de autoridade." },
      { name: "Manual de Uso Corporativo", benefit: "As diretrizes táticas de como aplicar a marca no físico e digital." }
    ],
    bgClass: "bg-text-primary",
    textClass: "text-main",
    borderClass: "border-main/20",
    btnClass: "bg-accent-primary text-white hover:scale-105 shadow-xl rounded-full text-center px-10",
    image: "/assets/Fotos Laura/IMG_1160.JPG.jpeg",
    reverse: true
  }
];

const ServicosLaura = () => {
  return (
    <section id="servicos" className="w-full flex flex-col">
      {services.map((service, index) => (
        <div key={index} className={`w-full min-h-screen flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${service.bgClass}`}>

          {/* Text Content Half */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-24 lg:py-32">

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block ${service.textClass} opacity-60`}
            >
              {service.label}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-6xl sm:text-7xl lg:text-[5.5rem] font-header font-bold tracking-tighter leading-[0.85] mb-8 ${service.textClass}`}
            >
              {service.title} <br />
              <span className="font-serif italic lowercase font-light tracking-normal text-[1.1em] opacity-90">{service.highlight}</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg font-body leading-relaxed max-w-md ${service.textClass} opacity-80 mb-12`}
            >
              {service.description}
            </motion.p>

            {/* Deliverables List matching reference's middle section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`border-t border-b py-8 flex flex-col gap-8 mb-12 ${service.borderClass}`}
            >
              <div className={`text-[9px] uppercase font-bold tracking-[0.2em] opacity-50 ${service.textClass}`}>
                O QUE ENTREGAMOS
              </div>

              {service.deliverables.map((item, idx) => (
                <div key={idx}>
                  <h4 className={`font-header text-2xl tracking-tighter mb-1 ${service.textClass}`}>{item.name}</h4>
                  <p className={`text-sm font-body opacity-60 ${service.textClass}`}>{item.benefit}</p>
                </div>
              ))}
            </motion.div>

            {/* Bottom Actions matching reference's footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6"
            >
              <span className={`text-[10px] uppercase font-bold tracking-[0.2em] ${service.textClass} opacity-80`}>
                Eleve o seu posicionamento
              </span>
              <a
                href="#contato"
                className={`py-4 px-8 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 ${service.btnClass}`}
              >
                INICIAR PROJETO ↗
              </a>
            </motion.div>

          </div>

          {/* Full Bleed Image Half */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      ))}
    </section>
  );
};

export default ServicosLaura;
