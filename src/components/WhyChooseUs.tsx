import React from 'react';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, FileText, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="pourquoi-nous" className="py-20 bg-[#FAF7F2] border-b border-[#E5DACB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#FDE68A] shadow-2xs mb-3">
            <span>QUALITÉ & CERTIFICATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Pourquoi choisir Jimmy Datin ?
          </h2>
          <p className="text-base sm:text-lg text-[#615344] leading-relaxed">
            Faire appel à un artisan indépendant certifié RGE, c’est la garantie d’un interlocuteur unique, d’un travail soigné dans le respect des traditions et d'une éligibilité complète aux aides de l'État.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Qualibat RGE */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border-2 border-[#16A34A]/30 shadow-xs hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DCFCE7]/50 rounded-bl-full -z-10 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#86EFAC]">
                  Label d'État Officiel
                </span>
                <span className="text-xs text-[#6B7280] font-mono">{COMPANY_INFO.rgeNumber}</span>
              </div>
              
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1F1C18]">
                  Certification Qualibat RGE
                </h3>
              </div>

              <p className="text-sm text-[#4E4135] leading-relaxed mb-6">
                Le label <strong>Reconnu Garant de l'Environnement (RGE)</strong> valide notre rigueur technique 
                pour vos travaux d'isolation et le remplacement de menuiseries extérieures (fenêtres et portes isolantes).
              </p>

              {/* RGE Grants Benefit list */}
              <div className="bg-white p-4 rounded-xl border border-[#D1E7DD] mb-4">
                <div className="text-xs font-bold text-[#14532D] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                  Vos avantages financiers avec notre statut RGE :
                </div>
                <ul className="space-y-1.5 text-xs text-[#374151]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>MaPrimeRénov'</strong> : primes financières directes selon vos revenus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>Certificats d'Économie d'Énergie (CEE)</strong> cumulables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>TVA réduite à 5,5%</strong> sur la fourniture et la pose</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span><strong>Éco-Prêt à Taux Zéro (Éco-PTZ)</strong> jusqu'à 50 000 €</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-[#52796F] italic">
              * Nous vous guidons dans le montage de votre dossier administratif d'aides.
            </p>
          </div>

          {/* Pillar 2: Partenaire ISOVER */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border-2 border-[#D97706]/30 shadow-xs hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEF3C7]/50 rounded-bl-full -z-10 pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#FDE68A]">
                  Partenariat Industriel
                </span>
                <span className="text-xs text-[#92400E] font-semibold">Saint-Gobain ISOVER</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1F1C18]">
                  Partenaire Officiel ISOVER
                </h3>
              </div>

              <p className="text-sm text-[#4E4135] leading-relaxed mb-6">
                Pour l'isolation de vos combles, toitures et cloisons, nous collaborons étroitement avec la marque <strong>ISOVER</strong>, 
                leader français de la laine minérale et des membranes d'étanchéité à l'air.
              </p>

              <div className="bg-white p-4 rounded-xl border border-[#FDE68A] mb-4">
                <div className="text-xs font-bold text-[#92400E] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706]" />
                  Les garanties du partenariat ISOVER :
                </div>
                <ul className="space-y-1.5 text-xs text-[#374151]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Laine minérale certifiée <strong>ACERMI</strong> (résistance thermique certifiée)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Système d'étanchéité à l'air Vario pour éviter les ponts thermiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Amélioration immédiate du DPE (Diagnostic de Performance Énergétique)</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-[#92400E] italic">
              Confort thermique optimal été comme hiver dans votre maison normande.
            </p>
          </div>

          {/* Pillar 3: Expérience locale */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E2D6C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#78350F] bg-[#EAE1D5] px-3 py-1 rounded-full mb-4 inline-block">
                EXPÉRIENCE LOCALE
              </span>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#92400E] flex items-center justify-center shrink-0 border border-[#E2D6C5]">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1F1C18]">
                  Plus de 10 Ans d'Expérience dans le Pays d'Auge
                </h3>
              </div>

              <p className="text-sm text-[#4E4135] leading-relaxed mb-4">
                Jimmy Datin exerce son métier de menuisier-charpentier depuis 2011 dans le Calvados. Une expérience de terrain qui allie précision technique et connaissance fine des spécificités des bâtis normands.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-[#3E342B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92400E] shrink-0" />
                  <span>Un seul interlocuteur dédié : de la prise de mesure à la pose finale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92400E] shrink-0" />
                  <span>Sélection rigoureuse des essences de bois (chêne de pays, résineux certifiés)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4: Rigueur & finitions soignées */}
          <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E2D6C5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#78350F] bg-[#EAE1D5] px-3 py-1 rounded-full mb-4 inline-block">
                ENGAGEMENT CLIENT
              </span>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#92400E] flex items-center justify-center shrink-0 border border-[#E2D6C5]">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1F1C18]">
                  Rigueur & finitions soignées
                </h3>
              </div>

              <p className="text-sm text-[#4E4135] leading-relaxed mb-4">
                Jimmy Datin apporte le même soin à chaque étape du chantier, de la prise de mesure à la dernière finition — précision des ajustages, qualité des assemblages et respect des normes en vigueur pour chaque pose.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-[#3E342B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92400E] shrink-0" />
                  <span>Devis clair, détaillé et sans surprise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92400E] shrink-0" />
                  <span>Garantie décennale (à confirmer avec Jimmy avant d'afficher l'assureur)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#92400E] shrink-0" />
                  <span>Chantiers protégés et nettoyés quotidiennement</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="bg-[#261E17] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#92400E] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#FDE68A]" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold">
                Besoin d'un conseil pour votre éligibilité aux aides RGE ?
              </h4>
              <p className="text-xs sm:text-sm text-[#D1D5DB]">
                Jimmy Datin étudie votre projet et estime le montant de vos subventions pour vos fenêtres et isolation.
              </p>
            </div>
          </div>

          <a
            href="#devis"
            className="whitespace-nowrap bg-[#FAF7F2] hover:bg-white text-[#261E17] font-bold text-sm px-5 py-3 rounded-xl shadow-xs transition-colors shrink-0"
          >
            Faire le point gratuitement
          </a>
        </div>

      </div>
    </section>
  );
};
