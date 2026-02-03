import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProgramDetail from './pages/ProgramDetail';

import serviceDetailPsychiatry from './src/assets/images/service-detail-psychiatry.jpg';
import serviceDetailPsychology from './src/assets/images/service-detail-psychology.jpg';
import programAngustia from './src/assets/images/program-angustia.png';
import programCulpa from './src/assets/images/program-culpa.png';
import programIrritabilidad from './src/assets/images/program-irritabilidad.jpg';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />

        <Route
          path="/psiquiatria"
          element={
            <Layout>
              <ServiceDetail
                title="Psiquiatría y Diagnóstico"
                subtitle="Enfoque Transdisciplinario y Neurociencia Afectiva"
                description="En Equilibrar, la psiquiatría trasciende la prescripción convencional."
                points={[
                  "Diagnóstico transdisciplinario integral.",
                  "Neurociencia afectiva aplicada a la clínica.",
                  "Integración con medicina oriental.",
                  "Farmacología consciente y supervisada."
                ]}
                imageSrc={serviceDetailPsychiatry}
                ctaText="Agendar sesión vía WhatsApp"
                ctaMessage="Hola, me interesa agendar una hora de Psiquiatría/Diagnóstico."
              />
            </Layout>
          }
        />

        <Route
          path="/psicologia"
          element={
            <Layout>
              <ServiceDetail
                title="Psicología Clínica"
                subtitle="Regulación Somática y Vínculo Terapéutico"
                description="La sanación real ocurre en el contexto de un vínculo seguro."
                points={[
                  "Terapia centrada en la regulación somática.",
                  "Fortalecimiento del vínculo terapéutico.",
                  "Desarrollo de resiliencia emocional.",
                  "Enfoque en trauma y apego."
                ]}
                imageSrc={serviceDetailPsychology}
                ctaText="Agendar sesión vía WhatsApp"
                ctaMessage="Hola, quisiera consultar por disponibilidad para Psicología Clínica."
              />
            </Layout>
          }
        />

        {/* PROGRAMS - Wrap in Layout to show Menu but HIDE Footer */}
        <Route
          path="/programa-angustia"
          element={
            <Layout showFooter={false}>
              <ProgramDetail
                title="Redefinir la Angustia"
                subtitle="Reprogramación Emocional"
                price={250000}
                description="Un proceso clínico para resignificar el miedo a la pérdida y restaurar el vínculo interno."
                longDescription="La angustia no es enemiga; es una señal de desconexión profunda. Vivir en estado de alerta constante erosiona tu capacidad de confiar. Transita desde la parálisis hacia la seguridad interna."
                problemTitle="¿El miedo decide por ti?"
                problemContent={[
                  "Hipervigilancia constante.",
                  "Sensación inminente de catástrofe.",
                  "Incapacidad para habitar el presente."
                ]}
                solutionGrid={[
                  { title: "Neurociencia", desc: "Regulación vagal." },
                  { title: "Vínculo", desc: "Seguridad interna." },
                  { title: "Cuerpo", desc: "Habitar la calma." },
                  { title: "Mente", desc: "Claridad cognitiva." }
                ]}
                structure={[
                  { title: "Semanas 1-2", desc: "Desactivar Alerta: Protocolos de seguridad." },
                  { title: "Semanas 3-4", desc: "Restauración: Construir confianza básica." }
                ]}
                duration="4 Semanas"
                imageSrc={programAngustia}
              />
            </Layout>
          }
        />

        <Route
          path="/programa-culpa"
          element={
            <Layout showFooter={false}>
              <ProgramDetail
                title="Redefinir la Culpa"
                subtitle="Reprogramación Cognitiva"
                price={250000}
                description="Transformar el castigo en responsabilidad soberana y desactivar el autoataque."
                longDescription="La culpa tóxica es un mecanismo de control interno que drena nuestra vitalidad. Aprende a distinguir entre la culpa neurótica y la responsabilidad ética para recuperar tu paz."
                problemTitle="¿Te castigas por existir?"
                problemContent={[
                  "Rumiación mental obsesiva.",
                  "Sensación de no ser suficiente.",
                  "Autoexigencia destructiva."
                ]}
                solutionGrid={[
                  { title: "Ética", desc: "Responsabilidad real." },
                  { title: "Compasión", desc: "Cese del fuego." },
                  { title: "Dignidad", desc: "Soberanía personal." },
                  { title: "Acción", desc: "Reparación efectiva." }
                ]}
                structure={[
                  { title: "Semanas 1-2", desc: "Culpa vs Responsabilidad: Distinciones." },
                  { title: "Semanas 3-4", desc: "Desactivar Autoataque: Paz interna." }
                ]}
                duration="4 Semanas"
                imageSrc={programCulpa}
              />
            </Layout>
          }
        />

        <Route
          path="/programa-irritabilidad"
          element={
            <Layout showFooter={false}>
              <ProgramDetail
                title="Redefinir la Irritabilidad"
                subtitle="Reprogramación Focalizada"
                price={250000}
                description="Un proceso profundo para resignificar la irritabilidad desde el amor propio."
                longDescription="La discrepancia entre la realidad y nuestras expectativas genera una fricción sistémica. La irritabilidad mantiene al sistema nervioso en alerta constante, erosionando tu vitalidad."
                problemTitle="¿Cuándo deja de ser una señal?"
                problemContent={[
                  "Tensión corporal acumulada.",
                  "Erosión de la energía vital.",
                  "Debilitamiento de vínculos."
                ]}
                solutionGrid={[
                  { title: "Neurociencia", desc: "Calma fisiológica." },
                  { title: "Presencia", desc: "Habitar sin lucha." },
                  { title: "Reprogramar", desc: "PNL y juicios." },
                  { title: "Amor Propio", desc: "Autocompasión." }
                ]}
                structure={[
                  { title: "Semanas 1-2", desc: "Descomprimir: reactividad y seguridad." },
                  { title: "Semanas 3-4", desc: "Reorganizar: identidad y amor propio." }
                ]}
                duration="4 Semanas"
                imageSrc={programIrritabilidad}
              />
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;