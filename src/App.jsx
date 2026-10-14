import React, { useState } from 'react';
import { contentData } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TeamRibbon } from './components/TeamRibbon';
import { Programs } from './components/Programs';
import { HangarPrototype } from './components/HangarPrototype';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StatusOverlay } from './components/StatusOverlay';
import { ProjectModal } from './components/ProjectModal';
import './App.css';

export function App() {
  const [lang, setLang] = useState('id');
  const [modalOpen, setModalOpen] = useState(false);

  const currentContent = contentData[lang] || contentData.id;

  return (
    <div className="app-root">
      {/* Film Grain & Darkroom Vignette Aesthetic Layers */}
      <div className="grain-overlay" aria-hidden="true"></div>
      <div className="vignette-overlay" aria-hidden="true"></div>

      {/* Main Navigation */}
      <Navbar
        content={currentContent}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Landmark */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section with 4-Frame Filmstrip */}
        <Hero
          content={currentContent}
          onCardClick={() => setModalOpen(true)}
        />

        {/* About Section & Vision & Missions */}
        <About content={currentContent} />

        {/* Team Ribbons & Slogans with Inline Avatars */}
        <TeamRibbon content={currentContent} />

        {/* 5 Work Programs (Beyond Robotics) */}
        <Programs content={currentContent} />

        {/* On Hangar - Featured UAV Prototype */}
        <HangarPrototype
          content={currentContent}
          onOpenModal={() => setModalOpen(true)}
        />

        {/* FAQ Section */}
        <Faq content={currentContent} />

        {/* Contact Section & Form */}
        <Contact content={currentContent} />
      </main>

      {/* Footer */}
      <Footer content={currentContent} />

      {/* Fixed Status Indicators (EN/ID Language Switcher & Live Clock) */}
      <StatusOverlay
        lang={lang}
        setLang={setLang}
      />

      {/* High-Tech Telemetry Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={currentContent}
      />
    </div>
  );
}

export default App;
