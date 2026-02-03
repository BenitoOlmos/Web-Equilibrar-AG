import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProgramDetail from './pages/ProgramDetail';

import serviceDetailPsychiatry from './src/assets/images/service-detail-psychiatry.jpg';
import serviceDetailPsychology from './src/assets/images/service-detail-psychology.jpg';

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
        {/* Hydrated: Using Slug prop to fetch data */}
        <Route
          path="/programa-angustia"
          element={
            <Layout showFooter={false}>
              <ProgramDetail slug="programa-angustia" />
            </Layout>
          }
        />

        <Route
          path="/programa-culpa"
          element={
            <Layout showFooter={false}>
              <ProgramDetail slug="programa-culpa" />
            </Layout>
          }
        />

        <Route
          path="/programa-irritabilidad"
          element={
            <Layout showFooter={false}>
              <ProgramDetail slug="programa-irritabilidad" />
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;