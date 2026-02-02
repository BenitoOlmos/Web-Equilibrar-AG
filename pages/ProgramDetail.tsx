import React from 'react';
import { ArrowLeft, Lock, Star, CreditCard, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramDetailProps {
  title: string;
  price: number;
  description: string;
  longDescription: string;
  structure: { title: string; desc: string }[];
  duration: string;
  imageSrc: string;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({
  title,
  price,
  description,
  longDescription,
  structure,
  duration,
  imageSrc
}) => {

  const handlePayment = () => {
    window.open('https://mpago.la/1pCPf7G', '_blank');
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">

      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={imageSrc} className="w-full h-full object-cover animate-fade-in" alt="Background" loading="eager" />
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        <div className="absolute top-0 left-0 p-6 md:p-12 z-20 pt-24 md:pt-12">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white transition-colors text-xs md:text-sm tracking-wide bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full animate-fade-in-down">
            <ArrowLeft size={14} className="mr-2" /> Volver
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-8 md:pb-16 z-20">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 border border-white/30 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 backdrop-blur-sm rounded-sm animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
              Programa Clínico {duration}
            </span>
            <h1 className="text-3xl md:text-6xl font-serif text-white mb-4 md:mb-6 max-w-3xl leading-tight animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
              {title}
            </h1>
            <p className="text-base md:text-xl text-white/90 font-light max-w-2xl leading-relaxed hidden md:block animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
              {description}
            </p>
            <p className="text-sm text-white/90 font-light max-w-2xl leading-relaxed md:hidden animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Content */}
          <div className="lg:col-span-7 animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-serif text-brand-heading mb-6 md:mb-8">Narrativa del Proceso</h2>
            <div className="prose prose-base md:prose-lg text-slate-600 font-light leading-relaxed mb-12 md:mb-16">
              <p>{longDescription}</p>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-serif italic text-brand-heading mb-6 md:mb-8 border-b border-brand-sand pb-4">Estructura de Transformación</h3>
              <div className="space-y-4 md:space-y-6">
                {structure.map((item, idx) => (
                  <div key={idx} className="group flex gap-4 md:gap-6 p-4 md:p-6 border border-gray-100 rounded-sm hover:border-brand-primary/20 hover:bg-brand-light/30 transition-all duration-300">
                    <span className="text-3xl md:text-4xl font-serif text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-brand-heading text-base md:text-lg mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm text-slate-400 italic bg-brand-sand p-4 rounded-lg">
              <Star size={14} className="text-brand-gold" />
              Contenido basado en evidencia clínica y neurociencia aplicada.
            </div>
          </div>

          {/* Checkout Sticky Sidebar */}
          <div className="lg:col-span-5 animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
            <div className="sticky top-24 bg-brand-sand/50 p-6 md:p-10 rounded-sm border border-brand-primary/5 shadow-luxury">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Inversión Única</span>
                  <p className="text-3xl md:text-4xl font-serif text-brand-heading mt-2">${price.toLocaleString('es-CL')}</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
                  <Lock size={18} />
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-sm text-slate-600">
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span>Modalidad</span>
                  <span className="font-medium text-brand-heading">100% Online</span>
                </li>
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span>Material</span>
                  <span className="font-medium text-brand-heading">Digital (PDF + Audio)</span>
                </li>
                <li className="flex justify-between border-b border-gray-200/50 pb-2">
                  <span>Soporte</span>
                  <span className="font-medium text-brand-heading">Vía WhatsApp</span>
                </li>
              </ul>

              <button
                onClick={handlePayment}
                className="w-full bg-[#009EE3] hover:bg-[#008ED0] text-white py-4 md:py-5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 mb-4 md:mb-6 text-sm md:text-base transform active:scale-95"
              >
                <CreditCard size={18} /> Adquirir Programa
              </button>

              <p className="text-center text-[10px] md:text-xs text-slate-400 leading-relaxed px-2">
                Pagos procesados de forma segura por Mercado Pago. <br />
                Tus credenciales llegarán a tu correo tras la confirmación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;