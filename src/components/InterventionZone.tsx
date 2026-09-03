import React from 'react';
import { Compass, CheckCircle2, Clock } from 'lucide-react';
import { UnifiedInterventionCard } from './UnifiedInterventionCard';

export const InterventionZone: React.FC = () => {
  return (
    <section id="zone" className="py-20 bg-[#F5EFE6] border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF7F2] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#E5DACB] shadow-2xs mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>PROXIMITÉ NORMANDIE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Zone d'Intervention : Dozulé & Pays d'Auge
          </h2>
          <p className="text-base sm:text-lg text-[#615344] leading-relaxed">
            Basé au cœur de <strong>Dozulé (14430)</strong>, Jimmy Datin se déplace directement chez vous 
            dans tout le Calvados et le Pays d'Auge (&lt; 40 km) pour vos travaux de <strong>menuiserie, charpente et isolation</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Google Maps Interactive Iframe */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E0D3C0] shadow-md flex flex-col justify-between h-full">
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl overflow-hidden bg-[#E5DACB]">
              <iframe
                title="Carte de la zone d'intervention EIRL Datin Jimmy - Dozulé 14430"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41804.81134262194!2d-0.07662991040316335!3d49.23192070104889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a6fa58dfc9993%3A0x40c14484fb59400!2s14430%20Dozul%C3%A9!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating info badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-lg border border-[#E0D3C0] max-w-[240px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F1C18] mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span>Atelier à Dozulé (14430)</span>
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  Rayon d'action standard : <strong>&lt; 40 km</strong> (Côte Fleurie, Pays d'Auge, Plaine de Caen)
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-[#6B5E51]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                Déplacement pour devis 100% gratuit
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#92400E]" />
                Prise de rendez-vous rapide sous 48h
              </span>
            </div>
          </div>

          {/* Right Column: Unified Commune Checker with Search Bar and List */}
          <div className="lg:col-span-6">
            <UnifiedInterventionCard />
          </div>

        </div>

      </div>
    </section>
  );
};

