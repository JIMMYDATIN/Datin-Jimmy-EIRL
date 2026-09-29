import React from 'react';
import { X, ShieldCheck, Scale, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E5DACB] relative max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#786C5E] hover:text-[#1F1C18] p-2 rounded-lg bg-[#EAE1D5] hover:bg-[#DECFC0] transition-colors"
          aria-label="Fermer les mentions légales"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8DFD3]">
          <div className="w-10 h-10 rounded-xl bg-[#92400E] text-white flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-[#1F1C18]">
              Mentions Légales & Réglementation
            </h3>
            <p className="text-xs text-[#786C5E]">
              Menuiserie Datin J. (EIRL Datin Jimmy) — Entreprise Individuelle de Menuiserie
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#4E4135] leading-relaxed">
          
          {/* Section 1: Identification */}
          <div>
            <h4 className="font-bold text-[#1F1C18] uppercase tracking-wider text-xs mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#92400E]" />
              1. Identification de l'entreprise
            </h4>
            <ul className="space-y-1 pl-4 list-disc">
              <li><strong>Nom commercial :</strong> {COMPANY_INFO.name}</li>
              <li><strong>Raison sociale :</strong> {COMPANY_INFO.legalName} (Entrepreneur Individuel à Responsabilité Limitée)</li>
              <li><strong>Dirigeant :</strong> {COMPANY_INFO.owner}</li>
              <li><strong>Siège social :</strong> {COMPANY_INFO.fullAddress}</li>
              <li><strong>SIRET :</strong> {COMPANY_INFO.siret}</li>
              <li><strong>Activité :</strong> Travaux de menuiserie bois et PVC (Code NAF / APE 43.32A)</li>
              <li><strong>Téléphone :</strong> {COMPANY_INFO.phoneFormatted}</li>
              <li><strong>Email :</strong> {COMPANY_INFO.email}</li>
            </ul>
          </div>

          {/* Section 2: Conception & Réalisation du Site */}
          <div>
            <h4 className="font-bold text-[#1F1C18] uppercase tracking-wider text-xs mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#92400E]" />
              2. Conception & Développement du site
            </h4>
            <ul className="space-y-1 pl-4 list-disc">
              <li><strong>Créateur & Webmaster :</strong> Hugo Fournier EI</li>
              <li><strong>Site web :</strong> <a href="https://hugofournier.fr" target="_blank" rel="noopener noreferrer" className="text-[#92400E] underline hover:text-[#78350F]">hugofournier.fr</a></li>
              <li><strong>SIREN :</strong> 107 042 475</li>
              <li><strong>Activité :</strong> Conception, design graphique & développement web sur-mesure</li>
            </ul>
          </div>

          {/* Section 3: Certifications & Assurances */}
          <div>
            <h4 className="font-bold text-[#1F1C18] uppercase tracking-wider text-xs mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803D]" />
              3. Certifications & Assurances Professionnelles
            </h4>
            <ul className="space-y-1 pl-4 list-disc">
              <li><strong>Qualification Qualibat RGE :</strong> {COMPANY_INFO.rgeNumber} (Reconnu Garant de l'Environnement).</li>
              <li><strong>Partenariat :</strong> Partenaire installateur agréé ISOVER.</li>
              <li><strong>Assurance Décennale :</strong> {COMPANY_INFO.decennale}. Garantie décennale obligatoire couvrant l'ensemble des chantiers de pose et structure sur 10 ans.</li>
            </ul>
          </div>

          {/* Section 4: Propriété intellectuelle */}
          <div>
            <h4 className="font-bold text-[#1F1C18] uppercase tracking-wider text-xs mb-2">
              4. Propriété intellectuelle & Droits d'auteur
            </h4>
            <p>
              L’ensemble des contenus, textes, logos et photographies présents sur ce site sont la propriété exclusive de l'EIRL Datin Jimmy ou de ses partenaires. La structure, l'ergonomie, les graphismes et le code source du site sont la propriété intellectuelle de <strong>l'EIRL Datin Jimmy</strong>. Toute reproduction ou utilisation non autorisée est strictement interdite.
            </p>
          </div>

          {/* Section 5: Données personnelles RGPD */}
          <div>
            <h4 className="font-bold text-[#1F1C18] uppercase tracking-wider text-xs mb-2">
              5. Protection des données personnelles (RGPD)
            </h4>
            <p>
              Les informations recueillies via le formulaire de devis (nom, téléphone, email, commune) sont uniquement utilisées pour l'établissement de propositions commerciales et le suivi personnalisé de votre projet de menuiserie. Elles ne sont jamais cédées ni vendues à des tiers.
            </p>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-[#E8DFD3] text-right">
          <button
            onClick={onClose}
            className="bg-[#92400E] hover:bg-[#78350F] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
