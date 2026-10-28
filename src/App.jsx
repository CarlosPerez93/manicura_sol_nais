import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { FloatingActions } from './components/layout/FloatingActions/FloatingActions';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Services } from './components/sections/Services/Services';
import { InteractiveQuote } from './components/sections/InteractiveQuote/InteractiveQuote';
import { Portfolio } from './components/sections/Portfolio/Portfolio';
import { ClientStories } from './components/sections/ClientStories/ClientStories';
import { Location } from './components/sections/Location/Location';
import { Contact } from './components/sections/Contact/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';
import './components/common/Toast/Toast.scss';

export function App() {
  const sectionIds = ['inicio', 'sobre-soles', 'servicios', 'estilos', 'trabajos', 'opiniones', 'ubicacion', 'contacto'];
  const activeSection = useScrollSpy(sectionIds, 150);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForForm(serviceTitle);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ToastProvider>
      <div className="app-root">
        {/* Navigation Bar */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main id="main-content">
          <Hero />
          <About />
          <Services onSelectService={handleSelectService} />
          <InteractiveQuote />
          <Portfolio />
          <ClientStories />
          <Location />
          <Contact preselectedService={selectedServiceForForm} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp and Instagram shortcuts */}
        <FloatingActions />
      </div>
    </ToastProvider>
  );
}

export default App;
