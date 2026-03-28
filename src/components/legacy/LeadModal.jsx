import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LeadModal = ({ isOpen, onClose, planName }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Infoprodutor / Expert',
    'E-commerce / Drop',
    'Negócio Local',
    'Agência / Freelancer',
    'Outro'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      navigate(`/obrigado?name=${encodeURIComponent(formData.name.split(' ')[0])}`);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-deep/80 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-bg-deep border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
        >
          {/* Header */}
          <div className="p-8 pb-0 flex justify-between items-start">
            <div>
              <div className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-3">Qualificação</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Você escolheu o plano <span className="text-blue-500">{planName}</span>
              </h3>
              <p className="text-text-secondary opacity-60 text-sm mt-2 leading-relaxed">
                Preencha os dados abaixo para que nossa equipe analise seu perfil.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full transition-colors text-text-tertiary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-text-tertiary mb-2 ml-1">Seu Nome Completo</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Gabriel Colares"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-text-tertiary mb-2 ml-1">WhatsApp de Contato</label>
                <input
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-text-tertiary mb-2 ml-1">Tipo de Negócio</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, businessType: type})}
                      className={`px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider text-left transition-all border ${
                        formData.businessType === type 
                          ? 'bg-blue-600 border-blue-500 text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)]' 
                          : 'bg-white/5 border-white/5 text-text-secondary hover:bg-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              disabled={isSubmitting || !formData.businessType}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all group mt-4"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Finalizar Qualificação
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            
            <p className="text-[9px] text-text-tertiary opacity-40 text-center font-mono uppercase tracking-widest leading-relaxed">
              Respeitamos seus dados. Seus ativos estão seguros conosco.
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadModal;
