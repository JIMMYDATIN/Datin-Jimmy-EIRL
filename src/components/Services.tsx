import React, { useState } from 'react';
import { Hammer, Trees, ShieldCheck, Sparkles, CheckCircle, ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../data/menuiserieData';
import { ServiceItem } from '../types';
import { SmartImage } from './SmartImage';

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-6 h-6 text-[#92400E]" />,
  Trees: <Trees className="w-6 h-6 text-[#92400E]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#92400E]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#92400E]" />
};

const fallbackImages: Record<string, string> = {
  'menuiserie': 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
  'charpente': 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
  'isolation': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  'hors-norme': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="savoir-faire" className="py-20 bg-[#F5EFE6] border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF7F2] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#E5DACB] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCELLENCE ARTISANALE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Notre Savoir-Faire
          </h2>
          <p className="text-base sm:text-lg text-[#615344] leading-relaxed">
            De la conception en atelier à Dozulé jusqu’au levage et à la pose soignée chez vous : 
            découvrez nos 4 domaines d’expertise pour construire, rénover et isoler votre habitat.
          </p>
        </div>

        {/* 4 Main Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const isFeatured = service.id === 'charpente';
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`bg-[#FAF7F2] rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col hover:shadow-xl group ${
                  isFeatured
                    ? 'border-[#B45309] shadow-md ring-1 ring-[#B45309]/30'
                    : 'border-[#E2D6C5] shadow-xs'
                }`}
              >
                {/* Service Image Preview */}
                <div className="h-48 relative overflow-hidden bg-[#261E17]">
                  <SmartImage
                    src={service.imageSrc}
                    fallbackSrc={fallbackImages[service.id]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="h-full w-full"
                    badge={service.badge}
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E0D3C0] flex items-center justify-center shrink-0 group-hover:bg-[#92400E]/10 transition-colors">
                        {iconMap[service.iconName] || <Hammer className="w-5 h-5 text-[#92400E]" />}
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#1F1C18]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#5C4F42] mb-4 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-2 mb-5">
                      {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-[#3E342B]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Details CTA */}
                  <div className="pt-3 border-t border-[#E8DFD3]">
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-xs font-semibold text-[#92400E] hover:text-[#78350F] flex items-center gap-1 focus:outline-hidden"
                      >
                        <span>En savoir plus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href="#devis"
                        className="text-[11px] font-bold bg-[#FAF7F2] hover:bg-[#92400E] text-[#92400E] hover:text-white border border-[#92400E] px-2.5 py-1 rounded-lg transition-all"
                      >
                        Devis
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for custom/special requests */}
        <div className="mt-12 bg-[#261E17] text-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#433528] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#92400E]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#FDE68A] mb-1 block">
              Accompagnement de A à Z
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Un projet de menuiserie, charpente ou isolation dans le Calvados ?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              Jimmy Datin se déplace sur votre chantier à Dozulé, Cabourg, Lisieux, Deauville et dans tout le Pays d'Auge pour une prise de cotes gratuite et des conseils sur-mesure.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 bg-[#92400E] hover:bg-[#B45309] text-white text-sm font-bold py-3 px-6 rounded-xl shadow-md transition-all text-center"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E5DACB] relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#786C5E] hover:text-[#1F1C18] p-2 rounded-lg bg-[#EAE1D5] hover:bg-[#DECFC0]"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] border border-[#E0D3C0] flex items-center justify-center">
                {iconMap[selectedService.iconName]}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#1F1C18]">
                  {selectedService.title}
                </h3>
                {selectedService.badge && (
                  <span className="text-xs font-semibold text-[#92400E] bg-[#FEF3C7] px-2 py-0.5 rounded-sm">
                    {selectedService.badge}
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-[#4E4135] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold text-[#786C5E] tracking-wider mb-2">
                Prestations incluses & finitions :
              </h4>
              <ul className="space-y-2">
                {selectedService.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#2E261E]">
                    <CheckCircle className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedService.materials && (
              <div className="mb-8 p-4 rounded-xl bg-[#F5EFE6] border border-[#E0D3C0]">
                <h4 className="text-xs font-bold text-[#92400E] uppercase tracking-wider mb-2">
                  Matériaux & Essences travaillées :
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.materials.map((m, mIdx) => (
                    <span key={mIdx} className="text-xs bg-white text-[#4A3E31] px-2.5 py-1 rounded-md border border-[#D9CBB9] font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <a
                href="#devis"
                onClick={() => setSelectedService(null)}
                className="flex-1 text-center bg-[#92400E] hover:bg-[#78350F] text-white font-semibold py-3 px-4 rounded-xl text-sm"
              >
                Demander un devis pour ce service
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-[#EAE1D5] hover:bg-[#D9CBB9] text-[#4A3E31] px-4 py-3 rounded-xl text-sm font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
