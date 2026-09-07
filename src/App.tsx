import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from './data/menuiserieData';

// Below-the-fold components are lazy loaded to shrink initial bundle and accelerate FCP
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Reviews = lazy(() => import('./components/Reviews').then(m => ({ default: m.Reviews })));
const InterventionZone = lazy(() => import('./components/InterventionZone').then(m => ({ default: m.InterventionZone })));
const QuoteForm = lazy(() => import('./components/QuoteForm').then(m => ({ default: m.QuoteForm })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const LegalModal = lazy(() => import('./components/LegalModal').then(m => ({ default: m.LegalModal })));

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  useEffect(() => {
    // Non-blocking prefetch of remaining sections right after initial display
    const prefetch = () => {
      import('./components/Services');
      import('./components/WhyChooseUs');
      import('./components/Reviews');
      import('./components/InterventionZone');
      import('./components/QuoteForm');
      import('./components/Footer');
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(prefetch);
      } else {
        setTimeout(prefetch, 50);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211D] flex flex-col selection:bg-[#92400E] selection:text-white">
      {/* Sticky Header with Navigation & Quick Phone Call - Loaded immediately */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Banner - Loaded immediately for optimal FCP & LCP */}
        <Hero />

        {/* 2. Notre Savoir-Faire (Services) */}
        <Suspense fallback={<div className="min-h-[300px] bg-[#F5EFE6]" />}>
          <Services />
        </Suspense>

        {/* 3. Pourquoi Nous Choisir (Qualibat RGE & ISOVER) */}
        <Suspense fallback={<div className="min-h-[300px] bg-[#FAF7F2]" />}>
          <WhyChooseUs />
        </Suspense>

        {/* 4. Zone d'intervention (Carte Google Maps & Communes) */}
        <Suspense fallback={<div className="min-h-[350px] bg-[#F5EFE6]" />}>
          <InterventionZone />
        </Suspense>

        {/* 5. Avis Clients (Témoignages) */}
        <Suspense fallback={<div className="min-h-[250px] bg-[#FAF7F2]" />}>
          <Reviews />
        </Suspense>

        {/* 6. Demander un devis (Formulaire interactif) */}
        <Suspense fallback={<div className="min-h-[350px] bg-[#F5EFE6]" />}>
          <QuoteForm />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="min-h-[200px] bg-[#1C1814]" />}>
        <Footer onOpenLegal={() => setIsLegalOpen(true)} />
      </Suspense>

      {/* Legal Notice Modal - Only downloaded when opened */}
      {isLegalOpen && (
        <Suspense fallback={null}>
          <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
        </Suspense>
      )}

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
