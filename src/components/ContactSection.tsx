import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#F5EFE6] border-b border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#261E17] text-white rounded-3xl p-8 sm:p-12 border border-[#433528] shadow-2xl relative overflow-hidden">
          {/* Ambient Wood Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#92400E]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Contact Info & Reassurance */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#FDE68A] bg-[#3D3025] px-3 py-1 rounded-full border border-[#524335]">
                  Contact Direct
                </span>
                <span className="text-xs text-[#D1D5DB]">
                  Artisan Menuisier à Dozulé
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                Une question ? Un projet bois ? <br />
                <span className="text-[#FDE68A]">Contactez Jimmy Datin</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed mb-8 max-w-xl">
                Que vous ayez des plans déjà dessinés ou simplement une idée d'aménagement, 
                nous prenons le temps d'échanger avec vous pour trouver la solution technique et esthétique idéale.
              </p>

              {/* Direct Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Phone */}
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="bg-[#352B22] hover:bg-[#43372B] p-4 rounded-2xl border border-[#524335] transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#92400E] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-[#FDE68A]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#9CA3AF] uppercase font-bold tracking-wider">Téléphone</div>
                    <div className="text-sm font-bold text-white">{COMPANY_INFO.phoneFormatted}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="bg-[#352B22] hover:bg-[#43372B] p-4 rounded-2xl border border-[#524335] transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#3D3025] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-[#FDE68A]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#9CA3AF] uppercase font-bold tracking-wider">Email</div>
                    <div className="text-xs font-bold text-white truncate max-w-[170px]">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                {/* Address */}
                <div className="bg-[#352B22] p-4 rounded-2xl border border-[#524335] flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#3D3025] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#9CA3AF] uppercase font-bold tracking-wider">Localisation</div>
                    <div className="text-xs font-bold text-white">{COMPANY_INFO.fullAddress}</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#352B22] p-4 rounded-2xl border border-[#524335] flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#3D3025] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FDE68A]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#9CA3AF] uppercase font-bold tracking-wider">Disponibilité</div>
                    <div className="text-xs font-bold text-white">Lun - Ven : 8h-19h</div>
                  </div>
                </div>

              </div>

              {/* Social & Certs */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#433528]">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0D65D9] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Page Facebook Officielle</span>
                </a>

                <div className="flex items-center gap-3 text-xs text-[#D1D5DB]">
                  <span className="flex items-center gap-1 text-[#4ADE80]">
                    <Award className="w-4 h-4" />
                    Qualibat RGE
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#FCD34D]">
                    <ShieldCheck className="w-4 h-4" />
                    ISOVER
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Fast CTA Box */}
            <div className="lg:col-span-5 bg-[#FAF7F2] text-[#1F1C18] p-8 rounded-2xl border border-[#E0D3C0] shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full mb-3 inline-block">
                  Prise de contact rapide
                </span>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Vous préférez être rappelé ?
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5042] leading-relaxed mb-6">
                  Laissez-nous vos coordonnées dans notre formulaire de devis. 
                  Jimmy Datin vous contacte directement pour organiser une visite sur place.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="#devis"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#92400E] hover:bg-[#78350F] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition-all"
                >
                  <span>Accéder au formulaire de devis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F5EFE6] hover:bg-[#EAE1D5] text-[#261E17] font-semibold text-xs py-3 px-4 rounded-xl border border-[#D9CBB9] transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#92400E]" />
                  <span>Appeler maintenant : {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
