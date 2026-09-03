import React, { useState, useId } from 'react';
import { Search, MapPin, CheckCircle2, AlertTriangle, ArrowRight, Phone, Navigation, X } from 'lucide-react';
import { COMMUNES_DATABASE, searchCommune, CommuneItem } from '../data/communesData';
import { INTERVENTION_CITIES, COMPANY_INFO } from '../data/menuiserieData';

export const UnifiedInterventionCard: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCommune, setSelectedCommune] = useState<CommuneItem | null>(null);
  const [activeCityName, setActiveCityName] = useState<string | null>(null);
  const [isSearched, setIsSearched] = useState(false);
  const inputId = useId();

  const { exactMatch, suggestions } = searchCommune(query);

  const handleSelectCommune = (commune: CommuneItem) => {
    setSelectedCommune(commune);
    setQuery(`${commune.name} (${commune.postal})`);
    setIsSearched(true);
    setActiveCityName(null);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (exactMatch) {
      setSelectedCommune(exactMatch);
    } else if (suggestions.length > 0) {
      setSelectedCommune(suggestions[0]);
    }
    setIsSearched(true);
    setActiveCityName(null);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedCommune(null);
    setIsSearched(false);
  };

  const handleCityClick = (cityName: string) => {
    if (activeCityName === cityName) {
      setActiveCityName(null);
      return;
    }
    setActiveCityName(cityName);
    const found = COMMUNES_DATABASE.find(c => c.name.toLowerCase().includes(cityName.toLowerCase()) || cityName.toLowerCase().includes(c.name.toLowerCase()));
    if (found) {
      setSelectedCommune(found);
      setIsSearched(true);
    }
  };

  const currentResult = selectedCommune || (isSearched ? exactMatch : null);

  return (
    <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#E0D3C0] shadow-xs flex flex-col justify-between">
      
      <div>
        {/* Title & Badge */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#92400E] mb-1.5">
          <Navigation className="w-4 h-4 text-[#92400E]" />
          <span>Rayon d'action &lt; 40 km autour de Dozulé</span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-[#1F1C18] mb-1">
          Vérifiez si votre commune est desservie
        </h3>

        <p className="text-xs sm:text-sm text-[#6B5E51] mb-4">
          Entrez votre ville ou code postal pour vérifier instantanément la prise en charge de votre chantier par Jimmy Datin.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative mb-4">
          <label htmlFor={inputId} className="sr-only">Rechercher une commune</label>
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 pointer-events-none" />
            <input
              id={inputId}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedCommune(null);
                setIsSearched(false);
              }}
              placeholder="Ex: Cabourg, 14160, Deauville, Lisieux, Caen..."
              className="w-full bg-white text-[#1F1C18] placeholder-[#9CA3AF] text-xs sm:text-sm pl-10 pr-10 py-3 rounded-xl border border-[#D9CBB9] focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all shadow-2xs"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 text-[#9CA3AF] hover:text-[#1F1C18] p-1 rounded-md"
                aria-label="Effacer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Autocomplete dropdown suggestions */}
          {query.trim().length > 1 && !selectedCommune && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E0D3C0] rounded-xl shadow-xl z-30 overflow-hidden max-h-52 overflow-y-auto">
              <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[#8C7E70] bg-[#F5EFE6] border-b border-[#E8DFD3]">
                Communes suggérées :
              </div>
              {suggestions.map((item) => (
                <button
                  key={`${item.name}-${item.postal}`}
                  type="button"
                  onClick={() => handleSelectCommune(item)}
                  className="w-full px-3.5 py-2.5 text-left text-xs text-[#1F1C18] hover:bg-[#FAF7F2] flex items-center justify-between border-b border-[#F0EAE1] last:border-0 transition-colors"
                >
                  <span className="font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#92400E] shrink-0" />
                    <span>{item.name}</span>
                    <span className="text-[11px] text-[#786C5E]">({item.postal})</span>
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    item.isCovered ? 'bg-[#DCFCE7] text-[#15803D]' : 'bg-[#FEF3C7] text-[#92400E]'
                  }`}>
                    {item.distanceKm === 0 ? 'Sur place' : `~${item.distanceKm} km`}
                  </span>
                </button>
              ))}
            </div>
          )}
        </form>

        {/* Dynamic Search / Selection Result Card */}
        {currentResult ? (
          <div className="mb-5 animate-fadeIn transition-all">
            {currentResult.isCovered ? (
              <div className="bg-[#F0FDF4] border border-[#86EFAC] rounded-xl p-3.5 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#15803D]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-sm font-bold text-[#14532D] flex items-center gap-1.5">
                        <span>{currentResult.name}</span>
                        <span className="text-xs text-[#166534]">({currentResult.postal})</span>
                      </h4>
                      <span className="text-[11px] font-bold bg-[#15803D] text-white px-2 py-0.5 rounded-md">
                        ✅ Commune 100% desservie
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#166534]">
                      <span>Distance : <strong>{currentResult.distanceKm === 0 ? '0 km (Dozulé même)' : `${currentResult.distanceKm} km`}</strong></span>
                      <span>•</span>
                      <span>Trajet : <strong>{currentResult.travelTime}</strong></span>
                    </div>

                    {currentResult.highlight && (
                      <p className="text-[11px] text-[#15803D] mt-1 italic">
                        "{currentResult.highlight}"
                      </p>
                    )}

                    <p className="text-xs text-[#166534] mt-1.5 leading-relaxed">
                      Jimmy Datin intervient à <strong>{currentResult.name}</strong> pour la prise de cotes et l'exécution de vos travaux de <strong>menuiserie, charpente et isolation</strong> (déplacement gratuit).
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-[#BBF7D0] flex flex-col sm:flex-row gap-2">
                      <a
                        href="#devis"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold py-2 px-3 rounded-lg shadow-2xs transition-colors"
                      >
                        <span>Demander un devis pour {currentResult.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={COMPANY_INFO.phoneTel}
                        className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F0FDF4] text-[#14532D] text-xs font-semibold py-2 px-3 rounded-lg border border-[#86EFAC] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#15803D]" />
                        <span>{COMPANY_INFO.phoneFormatted}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#FFFBEB] border border-[#FCD34D] rounded-xl p-3.5 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FEF3C7] text-[#92400E] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-[#92400E]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-sm font-bold text-[#78350F] flex items-center gap-1.5">
                        <span>{currentResult.name}</span>
                        <span className="text-xs text-[#92400E]">({currentResult.postal})</span>
                      </h4>
                      <span className="text-[11px] font-bold bg-[#92400E] text-white px-2 py-0.5 rounded-md">
                        ⚠️ Distance &gt; 40 km ({currentResult.distanceKm} km)
                      </span>
                    </div>

                    <p className="text-xs text-[#78350F] mt-1.5 leading-relaxed">
                      Votre commune est située à environ <strong>{currentResult.distanceKm} km</strong> de Dozulé. Un déplacement reste possible selon l'envergure de votre projet (charpente complète, rénovation globale, meuble d'exception).
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-[#FDE68A] flex flex-col sm:flex-row gap-2">
                      <a
                        href={COMPANY_INFO.phoneTel}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#92400E] hover:bg-[#78350F] text-white text-xs font-bold py-2 px-3 rounded-lg shadow-2xs transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Contacter Jimmy Datin au {COMPANY_INFO.phoneFormatted}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Communes Section Header */}
        <div className="mb-2">
          <h4 className="text-xs font-bold text-[#1F1C18] uppercase tracking-wider flex items-center gap-1.5">
            <span>Exemples de communes dans notre rayon d'intervention :</span>
          </h4>
          <p className="text-[11px] text-[#786C5E]">
            Cliquez pour afficher les spécificités de déplacement par secteur.
          </p>
        </div>

        {/* Interactive List of Main Communes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[260px] overflow-y-auto pr-1">
          {INTERVENTION_CITIES.map((city) => {
            const isSelected = activeCityName === city.name || (selectedCommune && selectedCommune.name.toLowerCase().includes(city.name.toLowerCase()));
            return (
              <div
                key={city.name}
                onClick={() => handleCityClick(city.name)}
                className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#FEF3C7] border-[#F59E0B] text-[#92400E] font-bold shadow-xs ring-1 ring-[#F59E0B]/50'
                    : 'bg-white hover:bg-[#F5EFE6] border-[#E8DFD3] text-[#332A23]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1.5">
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#92400E]' : 'text-[#A3978A]'}`} />
                    {city.name}
                  </span>
                  <span className="text-[10px] text-[#786C5E] bg-[#F5EFE6] px-2 py-0.5 rounded-md font-medium">
                    {city.postal}
                  </span>
                </div>
                {isSelected && city.note && (
                  <div className="mt-1.5 pt-1 border-t border-[#FDE68A] text-[11px] text-[#92400E] font-normal leading-tight">
                    {city.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-3.5 pt-2.5 border-t border-[#E8DFD3] text-[11px] text-[#786C5E] italic">
          Toutes les communes situées à moins de 40 km de Dozulé sont prises en charge avec déplacement et devis gratuits.
        </div>

      </div>

    </div>
  );
};
