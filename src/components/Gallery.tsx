import React, { useState } from 'react';
import { REALISATIONS } from '../data/menuiserieData';
import { RealisationItem } from '../types';
import { SmartImage } from './SmartImage';
import { Eye, MapPin, Sparkles, X, CheckCircle2, Info, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<RealisationItem | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes nos réalisations' },
    { id: 'menuiserie', label: 'Menuiserie' },
    { id: 'charpente', label: 'Charpente' },
    { id: 'isolation', label: 'Isolation' },
    { id: 'hors-norme', label: 'Un projet hors norme' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? REALISATIONS
    : REALISATIONS.filter(item => item.category === selectedCategory);

  return (
    <section id="realisations" className="py-20 bg-[#F5EFE6] border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF7F2] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#E5DACB] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CHANTIERS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Nos Réalisations en Normandie
          </h2>
          <p className="text-base sm:text-lg text-[#615344] leading-relaxed">
            Découvrez quelques-uns de nos chantiers récents réalisés à Dozulé, Cabourg, Lisieux, Houlgate et dans le Pays d'Auge. 
            Chaque ouvrage témoigne de notre amour du bois bien travaillé.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#92400E] text-white shadow-md'
                  : 'bg-[#FAF7F2] text-[#5C5042] hover:bg-[#EAE1D5] hover:text-[#1F1C18] border border-[#E0D3C0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E0D3C0] shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Photo container */}
              <div className="relative h-60 overflow-hidden bg-[#261E17]">
                <SmartImage
                  src={item.imageSrc}
                  fallbackSrc={item.fallbackUnsplash}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-[#1F1C18]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white border border-white/40">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold">Agrandir la réalisation</span>
                </div>

                {/* City badge */}
                <div className="absolute top-3 left-3 bg-[#1C2826]/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1 border border-white/20">
                  <MapPin className="w-3 h-3 text-[#F97316]" />
                  <span>{item.location}</span>
                </div>

                {/* Category label */}
                <div className="absolute bottom-3 left-3 bg-[#92400E]/90 backdrop-blur-xs text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-sm">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Title & snippet */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#1F1C18] line-clamp-2 mb-2 group-hover:text-[#92400E] transition-colors">
                    {item.title}
                  </h3>
                  {item.woodType && (
                    <p className="text-xs text-[#786C5E] font-medium mb-3">
                      <span className="text-[#92400E] font-semibold">Essence :</span> {item.woodType}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#92400E] font-semibold">
                  <span>En savoir plus</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Link & Photo Notice banner for Jimmy Datin */}
        <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E0D3C0] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0 mt-0.5">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F1C18]">
                Suivez nos chantiers au jour le jour sur Facebook
              </h4>
              <p className="text-xs text-[#6B5E51] mt-0.5">
                Jimmy Datin publie régulièrement des photos de ses fabrications d'atelier et poses de menuiseries sur la page officielle.
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0D65D9] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Facebook className="w-4 h-4" />
            <span>Voir la page Facebook EIRL Datin Jimmy</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E5DACB] relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Modal Header bar */}
            <div className="p-4 border-b border-[#E8DFD3] flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#92400E] bg-[#FEF3C7] px-2.5 py-1 rounded-md">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-xs text-[#5C5042] flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  {activeItem.location}
                </span>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="text-[#786C5E] hover:text-[#1F1C18] p-1.5 rounded-lg bg-[#EAE1D5] hover:bg-[#DECFC0]"
                aria-label="Fermer la vue"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6">
              
              {/* Big Photo Preview */}
              <div className="rounded-xl overflow-hidden mb-6 h-72 sm:h-80 bg-[#261E17]">
                <SmartImage
                  src={activeItem.imageSrc}
                  fallbackSrc={activeItem.fallbackUnsplash}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#1F1C18] mb-3">
                {activeItem.title}
              </h3>

              <p className="text-sm text-[#4E4135] leading-relaxed mb-6">
                {activeItem.description}
              </p>

              {activeItem.woodType && (
                <div className="mb-4 text-xs font-semibold text-[#78350F] bg-[#FEF3C7] p-2.5 rounded-lg border border-[#FDE68A]">
                  Essence & Matériaux utilisés : {activeItem.woodType}
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-[#786C5E] tracking-wider mb-2.5">
                  Points clés & spécificités de l'ouvrage :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2E261E] bg-[#F5EFE6] p-2 rounded-lg border border-[#E5DACB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E8DFD3]">
                <a
                  href="#devis"
                  onClick={() => setActiveItem(null)}
                  className="flex-1 text-center bg-[#92400E] hover:bg-[#78350F] text-white font-bold py-3 px-4 rounded-xl text-sm shadow-xs"
                >
                  Demander un devis similaire
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="bg-[#EAE1D5] hover:bg-[#D9CBB9] text-[#4A3E31] px-5 py-3 rounded-xl text-sm font-medium"
                >
                  Fermer
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
