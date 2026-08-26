import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { InterventionZone } from './components/InterventionZone';
import { QuoteForm } from './components/QuoteForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from './data/menuiserieData';

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211D] flex flex-col selection:bg-[#92400E] selection:text-white">
      {/* Sticky Header with Navigation & Quick Phone Call */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Banner */}
        <Hero />

        {/* 2. Notre Savoir-Faire (Services) */}
        <Services />

        {/* 3. Pourquoi Nous Choisir (Qualibat RGE & ISOVER) */}
        <WhyChooseUs />

        {/* 4. Nos Réalisations (Galerie photos) */}
        <Gallery />

        {/* 5. Avis Clients (Témoignages) */}
        <Reviews />

        {/* 6. Zone d'intervention (Carte Google Maps & Communes) */}
        <InterventionZone />

        {/* 7. Demander un devis (Formulaire interactif) */}
        <QuoteForm />

        {/* 8. Contact & Atelier */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={() => setIsLegalOpen(true)} />

      {/* Legal Notice Modal */}
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />

      {/* Floating Action Buttons for Mobile Screen */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex gap-2">
        <a
          id="mobile-sticky-call"
          href={COMPANY_INFO.phoneTel}
          className="flex-1 bg-[#261E17] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xl flex items-center justify-center gap-2 border border-[#45372B]"
        >
          <Phone className="w-4 h-4 text-[#FDE68A]" />
          <span>Appeler</span>
        </a>
        <a
          id="mobile-sticky-devis"
          href="#devis"
          className="flex-1 bg-[#92400E] hover:bg-[#78350F] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xl flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" />
          <span>Devis Gratuit</span>
        </a>
      </div>
    </div>
  );
}
