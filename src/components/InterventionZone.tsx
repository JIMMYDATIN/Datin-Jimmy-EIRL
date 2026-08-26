import React, { useState } from 'react';
import { MapPin, Navigation, Compass, CheckCircle2, Clock, Phone } from 'lucide-react';
import { INTERVENTION_CITIES, COMPANY_INFO } from '../data/menuiserieData';

export const InterventionZone: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

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
            dans tout le Calvados pour la prise de cotes, le conseil technique et l'installation de vos menuiseries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Google Maps Interactive Iframe */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E0D3C0] shadow-md">
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden bg-[#E5DACB]">
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
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-lg border border-[#E0D3C0] max-w-[220px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F1C18] mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span>Atelier à Dozulé (14430)</span>
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  Rayon d'action : ~35 km (Côte Fleurie, Pays d'Auge, Plaine de Caen)
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

          {/* Right Column: List of Main Communes & Travel Perks */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Communes List */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E0D3C0] shadow-xs">
              <h3 className="font-display text-lg font-bold text-[#1F1C18] mb-1 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#92400E]" />
                Principales communes desservies :
              </h3>
              <p className="text-xs text-[#6B5E51] mb-4">
                Cliquez sur une commune pour vérifier notre présence locale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[290px] overflow-y-auto pr-1">
                {INTERVENTION_CITIES.map((city) => (
                  <div
                    key={city.name}
                    onClick={() => setActiveCity(activeCity === city.name ? null : city.name)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      activeCity === city.name
                        ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#92400E] font-bold shadow-xs'
                        : 'bg-white hover:bg-[#F5EFE6] border-[#E8DFD3] text-[#332A23]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{city.name}</span>
                      <span className="text-[10px] text-[#786C5E] bg-[#F5EFE6] px-1.5 py-0.5 rounded-xs">
                        {city.postal}
                      </span>
                    </div>
                    {activeCity === city.name && (
                      <div className="mt-1 text-[11px] text-[#92400E] font-normal">
                        {city.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DFD3] text-xs text-[#786C5E]">
                <em>Votre commune n'est pas listée ? Nous intervenons également dans toutes les communes environnantes du Calvados.</em>
              </div>
            </div>

            {/* Direct Contact Callout Box */}
            <div className="bg-[#261E17] text-white p-6 rounded-2xl border border-[#45372B] shadow-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FDE68A] mb-1">
                  Artisan local & disponible
                </div>
                <h4 className="font-display text-xl font-bold mb-2">
                  Vous souhaitez qu'on vienne voir votre chantier ?
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-4">
                  Jimmy Datin convient avec vous d'un créneau adapté pour inspecter vos ouvertures, 
                  étudier vos combles ou mesurer l'emplacement de votre futur meuble.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#92400E] hover:bg-[#B45309] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FDE68A]" />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
                <a
                  href="#devis"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5EFE6] text-[#261E17] text-xs font-bold py-2.5 px-3 rounded-xl transition-colors"
                >
                  <span>Prendre RDV en ligne</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
