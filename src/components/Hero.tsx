import React from 'react';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, Facebook } from 'lucide-react';
import { SmartImage } from './SmartImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAF7F2] border-b border-[#E8DFD3]"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F5EFE6] rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FEF3C7]/40 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Artisan Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Certifications & Tradition Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#1C2826] text-[#4ADE80] text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs border border-[#2D3F3B]">
                <Award className="w-4 h-4 text-[#4ADE80]" />
                Qualibat RGE Certifié
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1.5 rounded-full border border-[#FDE68A]">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                Partenaire ISOVER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] font-bold text-[#1F1C18] tracking-tight mb-6">
              Menuiserie sur mesure, <br className="hidden sm:inline" />
              <span className="text-[#92400E] relative inline-block">
                artisanat familial
                <span className="absolute left-0 -bottom-1.5 w-full h-2 bg-[#FDE68A]/60 -z-10 rounded-xs" />
              </span> à Dozulé
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#55473A] leading-relaxed mb-8 max-w-2xl">
              Dans son atelier du Pays d'Auge, Jimmy Datin façonne le bois avec la patience et la précision d'un artisan qui ne travaille jamais deux projets de la même manière. Menuiserie, charpente, isolation : trois savoir-faire réunis pour donner vie à vos projets, du premier trait de crayon à la dernière finition.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm text-[#3E342B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Fabrication 100% sur mesure & locale</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#3E342B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Aides de l'État : MaPrimeRénov' & CEE</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#3E342B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Devis & prise de cotes 100% gratuits</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#3E342B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Garantie décennale & respect des délais</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a
                id="hero-devis-cta"
                href="#devis"
                className="inline-flex items-center justify-center gap-2.5 bg-[#92400E] hover:bg-[#78350F] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-98"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-realisations-cta"
                href="https://www.facebook.com/menuiserieDATIN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0D65D9] hover:bg-[#0A4BB3] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all hover:shadow-lg active:scale-98"
              >
                <Facebook className="w-5 h-5 fill-current" />
                <span>Voir nos réalisations</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative py-6 px-2 sm:px-4">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card / Hero Image with guaranteed height */}
              <div className="relative h-[420px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#261E17]">
                <SmartImage
                  src="/maison1.webp"
                  fallbackSrc="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Charpente et menuiserie artisanale - Menuiserie Datin J. à Dozulé"
                  className="w-full h-full object-cover"
                  containerClassName="h-full w-full"
                  badge="Colombages en chêne"
                  width={550}
                  height={550}
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Overlay with subtle warm gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1C18]/95 via-[#1F1C18]/30 to-transparent flex flex-col justify-end p-6 text-white z-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FDE68A] mb-1">
                    Charpente & Menuiserie
                  </span>
                  <p className="font-display text-xl sm:text-2xl font-bold">
                    Du bois brut aux finitions d'exception
                  </p>
                  <p className="text-xs text-[#D1D5DB] mt-1">
                    Charpente, menuiserie & isolation dans tout le Pays d'Auge
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
