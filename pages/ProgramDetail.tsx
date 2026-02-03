import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/images/logo.png';
import claudioReyes from '../src/assets/images/claudio-reyes.jpg';

interface ProgramDetailProps {
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string; // Used for "El Problema" or narrative

  // Specific New Props
  problemTitle?: string;
  problemContent?: string[]; // List of points

  solutionGrid?: { title: string; desc: string }[];

  structure: { title: string; desc: string }[];
  duration: string;

  price: number;
  imageSrc: string; // Keeping for compatibility

  author?: {
    name: string;
    role: string;
    image: string;
  };
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({
  title,
  subtitle = "Reprogramación Focalizada",
  description,
  longDescription,
  problemTitle = "¿Cuándo deja de ser una señal?",
  problemContent = [
    "Tensión corporal acumulada.",
    "Erosión de la energía vital.",
    "Debilitamiento de vínculos."
  ],
  solutionGrid = [
    { title: "Neurociencia", desc: "Calma fisiológica." },
    { title: "Presencia", desc: "Habitar sin lucha." },
    { title: "Reprogramar", desc: "PNL y juicios." },
    { title: "Amor Propio", desc: "Autocompasión." }
  ],
  structure,
  duration,
  imageSrc,
  price,
  author = {
    name: "Claudio Reyes Vera",
    role: "Psicólogo Clínico Transdisciplinario",
    image: claudioReyes
  }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setCurrentPage(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = containerRef.current?.querySelectorAll('.page-section');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToPage = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: window.innerHeight * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-hidden relative selection:bg-[#0097b2] selection:text-white">

      {/* Navigation Dots */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 bg-white/40 backdrop-blur-sm p-3 rounded-full hidden sm:flex">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i ? 'bg-[#0097b2] h-6' : 'bg-slate-300 hover:bg-[#0097b2]/50'
              }`}
            aria-label={`Ir a sección ${i + 1}`}
          />
        ))}
      </div>

      {/* Main Scroll Container */}
      <div
        ref={containerRef}
        className="h-[100dvh] w-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none' }} // Firefox
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .page-section { flex: 0 0 100%; height: 100dvh; scroll-snap-align: start; position: relative; }
          .reveal { opacity: 0; transform: translateY(20px); transition: all 0.7s ease-out; }
          .active .reveal { opacity: 1; transform: translateY(0); }
          .circle-accent { position: absolute; border: 18px solid #0097b2; border-radius: 50%; opacity: 0.08; pointer-events: none; z-index: 0; }
          .top-right { top: -20%; right: -20%; width: 80vw; height: 80vw; clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%); }
          .bottom-left { bottom: -20%; left: -20%; width: 80vw; height: 80vw; clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%); }
          /* Allow header to sit on top */
          .page-section { padding-top: 80px; }
        `}</style>

        {/* PAGE 1: PORTADA */}
        <section className={`page-section flex flex-col justify-center items-center p-6 text-center ${currentPage === 0 ? 'active' : ''}`} data-index="0">
          <div className="absolute top-2 left-2 sm:top-6 sm:left-6 z-50">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-[#0097b2] transition-colors text-xs font-bold tracking-widest uppercase">
              <ArrowLeft size={16} className="mr-2" /> Volver
            </Link>
          </div>
          <div className="circle-accent top-right"></div>
          <div className="circle-accent bottom-left"></div>

          <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="reveal w-40 md:w-60 mb-6 md:mb-8 transition-delay-0">
              <img src={logo} alt="Equilibrar Logo" className="w-full object-contain drop-shadow-sm" />
            </div>

            <div className="reveal transition-delay-100">
              <p className="text-[10px] md:text-sm tracking-[0.3em] font-bold mb-4 uppercase text-gray-400">{subtitle}</p>
              <h1 className="font-bold mb-6 text-[#0097b2] uppercase tracking-tight text-4xl md:text-7xl leading-[0.9]">
                {title}
              </h1>
              <p className="font-light mb-8 text-gray-600 leading-relaxed max-w-xs md:max-w-lg mx-auto text-sm md:text-lg">
                {description}
              </p>
              <div className="bg-[#0097b2] text-white px-5 py-2 rounded-md font-bold text-xs md:text-sm uppercase tracking-widest inline-block shadow-lg shadow-cyan-500/20">
                Solo 5 Cupos
              </div>
            </div>

            <div className="reveal transition-delay-200 mt-12 pt-8 border-t border-gray-100">
              <p className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-slate-700">{author.name}</p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{author.role}</p>
            </div>
          </div>
        </section>

        {/* PAGE 2: EL PROBLEMA */}
        <section className={`page-section flex flex-col justify-center items-center p-6 ${currentPage === 1 ? 'active' : ''}`} data-index="1">
          <div className="circle-accent top-right"></div>
          <div className="z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-1 order-2">
              <h2 className="reveal text-3xl md:text-5xl font-bold text-[#0097b2] mb-8 tracking-tighter text-center md:text-left leading-tight">
                {problemTitle}
              </h2>
              <div className="reveal transition-delay-100 space-y-6 text-gray-600 font-light text-center md:text-left text-sm md:text-lg leading-relaxed">
                {longDescription ? (
                  <p>{longDescription}</p>
                ) : (
                  <p>La discrepancia entre la realidad y nuestras expectativas genera una fricción sistémica.</p>
                )}
              </div>
              <p className="reveal transition-delay-300 mt-12 text-center md:text-left italic font-light text-gray-400">
                "La irritabilidad no protege: <span className="text-[#0097b2] font-normal">erosiona</span>."
              </p>
            </div>

            <div className="md:order-2 order-1 reveal transition-delay-200 bg-gray-50 p-8 md:p-16 rounded-[2rem] border-l-8 border-[#0097b2] shadow-sm">
              <ul className="space-y-6 text-base md:text-xl font-light text-slate-700">
                {problemContent.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0097b2] mr-4 font-bold text-2xl leading-none">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PAGE 3: LA SOLUCIÓN */}
        <section className={`page-section flex flex-col justify-center items-center p-6 ${currentPage === 2 ? 'active' : ''}`} data-index="2">
          <div className="circle-accent bottom-left"></div>
          <div className="z-10 w-full max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0097b2] mb-4 tracking-tighter">Cambio de Paradigma</h2>
              <p className="text-gray-500 font-light text-lg">Sustituir la fricción por coherencia interna.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal transition-delay-100">
              {solutionGrid.map((item, idx) => (
                <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-2xl bg-white shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow">
                  <div className="w-2 h-12 bg-[#0097b2] rounded-full shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-[#0097b2] text-sm md:text-lg uppercase mb-1">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE 4: ARQUITECTURA */}
        <section className={`page-section flex flex-col justify-center items-center p-6 bg-slate-50 ${currentPage === 3 ? 'active' : ''}`} data-index="3">
          <div className="circle-accent top-right"></div>
          <div className="z-10 w-full max-w-4xl mx-auto">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-[#0097b2] text-center uppercase tracking-tighter mb-12">Arquitectura Clínica</h2>

            <div className="reveal transition-delay-100 grid grid-cols-3 gap-4 md:gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border-b-4 border-[#0097b2]">
                <span className="block text-3xl md:text-5xl font-bold text-[#0097b2]">{duration.split(' ')[0]}</span>
                <p className="text-[10px] md:text-xs uppercase text-gray-400 font-bold mt-2">Semanas</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border-b-4 border-[#0097b2]">
                <span className="block text-2xl md:text-4xl font-bold text-[#0097b2]">100%</span>
                <p className="text-[10px] md:text-xs uppercase text-gray-400 font-bold mt-2">Online</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border-b-4 border-[#0097b2]">
                <span className="block text-2xl md:text-4xl font-bold text-[#0097b2]">Clin.</span>
                <p className="text-[10px] md:text-xs uppercase text-gray-400 font-bold mt-2">Enfoque</p>
              </div>
            </div>

            <div className="reveal transition-delay-200 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-gray-600 font-light">
                <li className="flex items-center"><ArrowLeft size={16} className="rotate-180 mr-3 text-[#0097b2]" /> 2 Sesiones Individuales.</li>
                <li className="flex items-center"><ArrowLeft size={16} className="rotate-180 mr-3 text-[#0097b2]" /> Plataforma Digital.</li>
                <li className="flex items-center"><ArrowLeft size={16} className="rotate-180 mr-3 text-[#0097b2]" /> Protocolos de Hipnosis.</li>
                <li className="flex items-center"><ArrowLeft size={16} className="rotate-180 mr-3 text-[#0097b2]" /> Audios de Reprogramación.</li>
                <li className="flex items-center"><ArrowLeft size={16} className="rotate-180 mr-3 text-[#0097b2]" /> Guía de Integración.</li>
                <li className="flex items-center"><ArrowLeft size={16} className="rotate-180 mr-3 text-[#0097b2]" /> Evaluación de Coherencia.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PAGE 5: EL VIAJE */}
        <section className={`page-section flex flex-col justify-center items-center p-6 ${currentPage === 4 ? 'active' : ''}`} data-index="4">
          <div className="circle-accent bottom-left"></div>
          <div className="z-10 w-full max-w-lg mx-auto">
            <h2 className="reveal text-3xl md:text-5xl font-bold text-[#0097b2] tracking-tight text-center mb-16">Orden del Proceso</h2>

            <div className="relative pl-12 space-y-16">
              <div className="absolute left-[30px] top-4 bottom-4 w-0.5 bg-[#0097b2]/20"></div>

              {structure.map((item, idx) => (
                <div key={idx} className={`reveal transition-delay-${(idx + 1) * 100} relative`}>
                  <div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-[#0097b2] border-4 border-white shadow-md z-10"></div>
                  <h4 className="font-bold text-lg uppercase mb-2 text-gray-800">{item.title}</h4>
                  <p className="text-base text-gray-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal transition-delay-300 mt-20 p-6 bg-slate-50 rounded-2xl border border-gray-100 text-center">
              <p className="text-sm text-gray-500 italic">Transformación profunda sin violencia interna.</p>
            </div>
          </div>
        </section>

        {/* PAGE 6: CIERRE */}
        <section className={`page-section flex flex-col justify-center items-center p-6 ${currentPage === 5 ? 'active' : ''}`} data-index="5">
          <div className="circle-accent top-right"></div>
          <div className="z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Profile */}
            <div className="order-2 md:order-1 flex flex-col items-center reveal">
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-50 shadow-2xl mb-6">
                <img src={author.image} alt={author.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="font-bold text-[#0097b2] text-sm uppercase tracking-[0.2em]">{author.name}</p>
              <p className="mt-8 text-center italic text-gray-500 font-light text-lg md:text-xl max-w-xs">
                "Tu salud mental merece una arquitectura de paz, no de guerra."
              </p>
            </div>

            {/* Pricing Card */}
            <div className="order-1 md:order-2 reveal transition-delay-100 w-full max-w-sm mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#0097b2]/10"></div>

              <div className="text-center mb-8">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Inversión Total</p>
                <div className="text-5xl font-bold text-gray-800 tracking-tighter">${price.toLocaleString('es-CL')}</div>
              </div>

              <a
                href="https://mpago.la/1pCPf7G"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0097b2] hover:bg-[#008199] text-white font-bold py-5 rounded-2xl transition-all uppercase text-sm tracking-widest text-center active:scale-95 shadow-xl shadow-cyan-100 mb-8"
              >
                Comprar programa
              </a>

              <div className="flex justify-between items-center opacity-30 grayscale gap-2">
                {/* Placeholder for Logos */}
                <span className="text-[9px] font-bold uppercase">Colmena</span>
                <span className="text-[9px] font-bold uppercase">Consalud</span>
                <span className="text-[9px] font-bold uppercase">CruzBlanca</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default ProgramDetail;