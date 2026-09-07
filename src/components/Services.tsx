import React from 'react';
import { Hammer, Trees, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/menuiserieData';
import { SmartImage } from './SmartImage';

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer className="w-5 h-5 text-[#92400E]" />,
  Trees: <Trees className="w-5 h-5 text-[#92400E]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#92400E]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#92400E]" />
};

const fallbackImages: Record<string, string> = {
  'menuiserie': '/PORTAIL1.webp',
  'charpente': '/CHARPENTES1.webp',
  'isolation': '/ISOLATION1.webp',
  'hors-norme': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
};

export const Services: React.FC = () => {
  const mainServices = SERVICES.filter(s => s.id !== 'hors-norme');

  return (
    <section id="savoir-faire" className="py-20 bg-[#F5EFE6] border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF7F2] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#E5DACB] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SAVOIR-FAIRE ARTISANAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Notre Savoir-Faire
          </h2>
          <p className="text-base sm:text-lg text-[#615344] leading-relaxed">
            Trois activités complémentaires au cœur de notre métier dans le Calvados : menuiserie, charpente et isolation.
          </p>
        </div>

        {/* 3 Main Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mainServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E2D6C5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Service Image */}
              <div className="h-52 relative overflow-hidden bg-[#261E17]">
                <SmartImage
                  src={service.imageSrc}
                  fallbackSrc={fallbackImages[service.id]}
                  alt={`${service.title} - Menuiserie Datin J. à Dozulé`}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  containerClassName="h-full w-full"
                  badge={service.badge}
                  width={800}
                  height={600}
                />
              </div>

              {/* Card Body - All Info at a Glance */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E0D3C0] flex items-center justify-center shrink-0">
                      {iconMap[service.iconName] || <Hammer className="w-5 h-5 text-[#92400E]" />}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#1F1C18]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#5C4F42] mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Benefits / Prestations (3 to 4 bullets max) */}
                  <div className="pt-3 border-t border-[#E8DFD3]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#786C5E] block mb-3">
                      Prestations clés :
                    </span>
                    <ul className="space-y-2.5">
                      {service.benefits.slice(0, 4).map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E342B] leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with single primary CTA */}
        <div className="mt-12 bg-[#261E17] text-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#433528] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#92400E]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#FDE68A] mb-1 block">
              Accompagnement de A à Z
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              De l'idée aux clés : votre projet piloté de A à Z
            </h3>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
              Nous coordonnons l'intégralité de votre projet dans le Calvados : étude et plans, démarches administratives (déclaration préalable, dépôt en préfecture), réalisation des travaux et validation finale. Un seul interlocuteur, du premier croquis à la remise des clés.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              id="services-devis-cta"
              href="#devis"
              className="inline-flex items-center justify-center gap-2 bg-[#92400E] hover:bg-[#B45309] text-white text-sm font-bold py-3 px-6 rounded-xl shadow-md transition-all text-center"
            >
              <span>Discuter de mon projet clés en main</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
