import React from 'react';
import { Phone, Mail, MapPin, Award, ShieldCheck, Facebook, ArrowUp, Hammer, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';

interface FooterProps {
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1814] text-[#E8DFD3] pt-16 pb-12 border-t border-[#382E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C241C]">
          
          {/* Brand & Story */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#92400E] text-white flex items-center justify-center font-display font-bold text-lg shadow-xs">
                  DJ
                </div>
                <div>
                  <span className="font-display font-bold text-lg text-white block">
                    {COMPANY_INFO.name}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">
                    Menuiserie & Agencement Sur-Mesure
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#C4B5A5] leading-relaxed mb-6 max-w-md">
                Entreprise artisanale et familiale de menuiserie à <strong>Dozulé (14430)</strong>. 
                Spécialiste de la fabrication sur-mesure, fenêtres, parquets et de l'isolation thermique certifiée Qualibat RGE.
              </p>

              {/* Certifications Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-[#261E17] text-[#4ADE80] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#3A4D45]">
                  <Award className="w-4 h-4 text-[#4ADE80]" />
                  <span>Qualibat RGE</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#261E17] text-[#FCD34D] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#524335]">
                  <ShieldCheck className="w-4 h-4 text-[#FCD34D]" />
                  <span>Partenaire ISOVER</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-xs text-[#8C7E70]">
              <span>Garantie décennale Groupama • SIRET : {COMPANY_INFO.siret}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#FDE68A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B5A5]">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#savoir-faire" className="hover:text-white transition-colors">Notre Savoir-Faire</a>
              </li>
              <li>
                <a href="#pourquoi-nous" className="hover:text-white transition-colors">Pourquoi Nous Choisir (RGE)</a>
              </li>
              <li>
                <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nos Réalisations (Facebook)</a>
              </li>
              <li>
                <a href="#avis" className="hover:text-white transition-colors">Avis Clients</a>
              </li>
              <li>
                <a href="#zone" className="hover:text-white transition-colors">Zone d'Intervention (Dozulé)</a>
              </li>
              <li>
                <a href="#devis" className="hover:text-white transition-colors">Demander un Devis Gratuit</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#FDE68A]">
              Coordonnées de l'Atelier
            </h4>
            <ul className="space-y-3 text-xs text-[#C4B5A5]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Menuiserie Datin J., 14430 Dozulé, Calvados (Normandie)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#92400E] shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="font-bold text-white hover:text-[#FDE68A] transition-colors">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#92400E] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0D65D9] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Page Facebook Menuiserie Datin</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7E70]">
          <div>
            © {new Date().getFullYear()} Menuiserie Datin J. — Tous droits réservés. Menuiserie & Charpente à Dozulé.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://hugofournier.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8AEA3] hover:text-[#FAF7F2] bg-[#221B15] px-2.5 py-1 rounded-md border border-[#3A2E23] transition-colors"
            >
              Site créé par <span className="font-semibold text-white">Hugo Fournier EI</span>
            </a>
            <span>•</span>
            <button
              onClick={onOpenLegal}
              className="hover:text-[#FAF7F2] underline cursor-pointer"
            >
              Mentions Légales & RGPD
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FAF7F2] cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
