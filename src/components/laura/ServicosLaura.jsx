import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Branding e",
    highlight: "Identidade",
    label: "A MAIORIA DAS MARCAS EXISTE. POUCAS SÃO RECONHECIDAS.",
    description: "Nosso trabalho é fazer o seu negócio ocupar o lugar certo na cabeça de quem importa, com posicionamento, tom de voz e propósito que fazem sentido de verdade.",
    deliverables: [
      { name: "Posicionamento que ocupa lugar.", benefit: "A gente descobre onde sua marca tem mais força, e constrói a partir daí. Sem achismo, sem copiar concorrente. Só o que faz sentido pro seu negócio e pra quem você quer atrair." },
      { name: "Uma base que alinha tudo.", benefit: "Propósito, valores, mensagem. O tipo de clareza que faz seu time parar de improvisar e sua marca parar de parecer diferente dependendo de quem está na frente." },
      { name: "Tom de voz que soa como você.", benefit: "Não é um manual que ninguém lê. É uma voz que qualquer pessoa do seu time consegue usar, e que o seu cliente reconhece antes mesmo de ver o seu nome." }
    ],
    bgClass: "bg-main",
    textClass: "text-text-primary",
    borderClass: "border-text-primary/20",
    btnClass: "bg-accent-primary text-white hover:scale-105 shadow-xl rounded-full text-center px-10",
    image: "/assets/PROJETOS SITE ROMANO COMPANY/FOTOS SITE/1.JPG",
    reverse: false,
    finalCTA: "PRONTO(A) PRA COMEÇAR?"
  },
  {
    title: "Identidade",
    highlight: "Visual",
    label: "RECONHECIMENTO REAL",
    description: "A identidade visual é a essência da sua marca traduzida de forma visual. Não é sobre ser bonito. É sobre ser reconhecido na hora certa, pelo motivo certo, de um jeito que só a sua marca consegue ser.",
    deliverables: [
      { name: "Uma marca que as pessoas lembram.", benefit: "Seu logo, suas cores, sua tipografia, tudo pensado pra criar reconhecimento real. O tipo de identidade que faz o cliente lembrar de você antes de precisar te procurar." },
      { name: "Consistência que gera confiança.", benefit: "Quando sua marca aparece igual em todo lugar — no feed, no site, na proposta — ela para de parecer amadora e começa a parecer estabelecida. Isso não é detalhe. É o que fecha venda." },
      { name: "A sensação de que sua marca chegou.", benefit: "Tem um momento em que o cliente olha pra marca e pensa: isso representa de verdade o que a gente é. É esse sentimento que a gente trabalha pra entregar." }
    ],
    bgClass: "bg-text-primary",
    textClass: "text-main",
    borderClass: "border-main/20",
    btnClass: "bg-accent-primary text-white hover:scale-105 shadow-xl rounded-full text-center px-10",
    image: "/assets/PROJETOS SITE ROMANO COMPANY/FOTOS SITE/2.JPG",
    reverse: true,
    finalCTA: "PRONTO(A) PRA COMEÇAR?"
  }
];

const ServicosLaura = () => {
  return (
    <section id="servicos" className="w-full flex flex-col">
      {services.map((service, index) => (
        <React.Fragment key={index}>
          <div className={`w-full min-h-screen flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${service.bgClass}`}>

            {/* Text Content Half */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 sm:px-12 lg:px-24 py-24 lg:py-32">

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
                className={`text-5xl sm:text-7xl lg:text-[5.5rem] font-header font-bold tracking-tighter leading-[0.85] mb-8 ${service.textClass}`}
              >
                {service.title} <span className="font-serif italic lowercase font-light tracking-normal text-[0.9em] opacity-90 block lg:inline lg:ml-[-5px]">{service.highlight}</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`text-lg font-body leading-relaxed max-w-md ${service.textClass} opacity-80 mb-12 mx-auto lg:mx-0`}
              >
                {service.description}
              </motion.p>

              {/* Deliverables List matching reference's middle section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`border-t border-b py-8 flex flex-col gap-8 mb-12 w-full ${service.borderClass}`}
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
                className="flex flex-col sm:flex-row sm:justify-between items-center gap-8 w-full"
              >
                <span className={`text-[10px] uppercase font-bold tracking-[0.2em] ${service.textClass} opacity-80`}>
                  {service.finalCTA}
                </span>
                <a
                  href="#contato"
                  className={`w-full sm:w-auto py-4 px-10 text-[10px] uppercase font-bold tracking-widest transition-all duration-300 ${service.btnClass}`}
                >
                  Iniciar projeto ↗
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

          {index === 0 && (
            <div className="w-full bg-main py-40 md:py-56 px-8 text-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
              <p className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-accent-primary leading-[1.1] mb-2">
                Parecer uma marca amadora
              </p>
              <p className="font-header text-xl md:text-3xl lg:text-4xl text-text-primary tracking-tighter uppercase leading-tight">
                tem um custo que você já está pagando<span className="text-accent-primary">.</span>
              </p>
              </motion.div>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ServicosLaura;
