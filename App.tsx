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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/psiquiatria"
            element={
              <ServiceDetail
                title="Psiquiatría y Diagnóstico"
                subtitle="Enfoque Transdisciplinario y Neurociencia Afectiva"
                description="En Equilibrar, la psiquiatría trasciende la prescripción convencional. Concebimos el diagnóstico como un mapa de navegación que integra la medicina oriental y la neurociencia afectiva. Entendemos el síntoma no como un error del sistema, sino como un intento de regulación biológica que debe ser escuchado, comprendido y estabilizado."
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
            }
          />

          <Route
            path="/psicologia"
            element={
              <ServiceDetail
                title="Psicología Clínica"
                subtitle="Regulación Somática y Vínculo Terapéutico"
                description="La sanación real ocurre en el contexto de un vínculo seguro. Nuestros procesos terapéuticos priorizan la regulación somática (body-up), permitiendo que el sistema nervioso recupere su capacidad de sentir seguridad. Trabajamos el trauma y los patrones relacionales desde la experiencia sentida, no solo desde la narrativa cognitiva."
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
            }
          />

          <Route
            path="/programa-angustia"
            element={
              <ProgramDetail
                title="Redefinir la Angustia"
                price={250000}
                description="Un proceso clínico para resignificar el miedo a la pérdida y restaurar el vínculo interno."
                longDescription="La angustia no es enemiga; es una señal de desconexión profunda. Este programa está diseñado para quienes habitan un estado de alerta constante ante la posibilidad de pérdida. A través de un trabajo clínico estructurado, transitaremos desde la parálisis del miedo hacia la restauración de la confianza básica en la vida y en uno mismo."
                structure={[
                  { title: "Semanas 1-2: Desactivar Alerta", desc: "Protocolos de regulación vagal para disminuir la hipervigilancia y estabilizar la fisiología del miedo." },
                  { title: "Semanas 3-4: Restauración del Vínculo Interno", desc: "Reconstrucción de la seguridad interna y herramientas de afrontamiento ante la incertidumbre." }
                ]}
                duration="4 Semanas"
                imageSrc={programAngustia}
              />
            }
          />

          <Route
            path="/programa-culpa"
            element={
              <ProgramDetail
                title="Redefinir la Culpa"
                price={250000}
                description="Transformar el castigo en responsabilidad soberana y desactivar el autoataque."
                longDescription="La culpa tóxica es un mecanismo de control interno que drena nuestra vitalidad mediante el autocastigo. Este programa te invita a distinguir entre la culpa neurótica y la responsabilidad ética. Aprenderás a reparar vínculos y errores desde una postura de dignidad (soberanía), desactivando la rumiación mental y el ataque hacia ti mismo."
                structure={[
                  { title: "Semanas 1-2: Culpa vs Responsabilidad", desc: "Diferenciación cognitiva y emocional entre culpa funcional (reparatoria) y desadaptativa (tóxica)." },
                  { title: "Semanas 3-4: Desactivar el Autoataque", desc: "Prácticas de reparación simbólica y desactivación de la voz crítica interna para recuperar la paz." }
                ]}
                duration="4 Semanas"
                imageSrc={programCulpa}
              />
            }
          />

          <Route
            path="/programa-irritabilidad"
            element={
              <ProgramDetail
                title="Irritabilidad & Amor Propio"
                price={250000}
                description="Un proceso focalizado y profundo para resignificar la irritabilidad desde el amor propio y la aceptación de la realidad."
                longDescription="Cuando la irritabilidad deja de ser una señal de límites vulnerados y se convierte en un estado de agotamiento sistémico, erosiona nuestra vitalidad. Este programa no busca imponer una calma artificial, sino restaurar la coherencia interna a través de la neurociencia de la regulación y la fenomenología de la aceptación. Transformaremos la lucha contra la realidad en una relación de presencia y autocompasión funcional."
                structure={[
                  { title: "Semanas 1-2: Descomprimir la Fricción", desc: "Comprender la irritabilidad como respuesta a expectativas rígidas y entregar señales reales de seguridad al sistema nervioso." },
                  { title: "Semanas 3-4: Reorganizar la Realidad", desc: "Reprogramar el diálogo interno crítico, fortalecer el amor propio y desarrollar una aceptación activa y flexible." }
                ]}
                duration="4 Semanas (Solo 5 cupos)"
                imageSrc={programIrritabilidad}
              />
            }
          />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;