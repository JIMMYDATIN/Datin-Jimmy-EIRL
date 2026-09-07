import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, Award, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['accueil', 'savoir-faire', 'pourquoi-nous', 'zone', 'avis', 'devis'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil', id: 'accueil' },
    { href: '#savoir-faire', label: 'Savoir-Faire', id: 'savoir-faire' },
    { href: '#pourquoi-nous', label: 'Pourquoi Nous', id: 'pourquoi-nous' },
    { href: '#zone', label: 'Zone d\'intervention', id: 'zone' },
    { href: '#avis', label: 'Avis Clients', id: 'avis' },
    { href: '#devis', label: 'Devis', id: 'devis' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar with certifications & direct phone */}
      <div className="bg-[#1C2826] text-[#E8DFD3] text-xs py-1.5 px-4 border-b border-[#2C3E3B]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-[#4ADE80] font-medium">
              <Award className="w-3.5 h-3.5" />
              Certifié Qualibat RGE
            </span>
            <span className="hidden sm:inline-block text-[#9CA3AF]">•</span>
            <span className="hidden sm:flex items-center gap-1 text-[#FCD34D] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Partenaire ISOVER
            </span>
            <span className="hidden md:inline-block text-[#9CA3AF]">•</span>
            <span className="hidden md:flex items-center gap-1 text-[#D1D5DB]">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              Dozulé (14430) & Pays d'Auge
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline text-[#D1D5DB] text-xs">
              Savoir-faire familial
            </span>
            <a
              id="header-phone-top"
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-1.5 text-[#E8DFD3] hover:text-[#FDE68A] text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDE68A]" />
              <span className="hover:underline underline-offset-2">{COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5DACB]'
            : 'bg-[#FAF7F2] py-4 border-b border-[#EDE5D8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <a
            href="#accueil"
            className="flex items-center gap-3 group focus:outline-hidden"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-[#E5DACB] group-hover:scale-105 transition-transform flex items-center justify-center bg-[#F3EAD9] shrink-0">
              <img
                src="/icon-colombage-facade.svg"
                alt="Logo Menuiserie Datin J."
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#1F1C18]">
                  Menuiserie Datin J.
                </span>
                <span className="hidden lg:inline-block text-[10px] uppercase font-bold tracking-wider bg-[#F5EFE6] text-[#92400E] px-2 py-0.5 rounded-sm border border-[#E5DACB]">
                  Artisanat
                </span>
              </div>
              <p className="text-[11px] text-[#6B5E51] font-medium">
                Artisan Menuisier • Dozulé (14)
              </p>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#92400E] bg-[#F5EFE6] font-semibold shadow-xs'
                      : 'text-[#5C5042] hover:text-[#1F1C18] hover:bg-[#F5EFE6]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-quote-cta"
              href="#devis"
              className="inline-flex items-center gap-2 bg-[#92400E] hover:bg-[#78350F] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md active:scale-98"
            >
              <span>Devis Gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#261E17] hover:bg-[#EAE1D5] focus:outline-hidden"
            aria-label="Ouvrir le menu de navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DACB] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-[#EAE1D5] text-[#92400E] font-bold'
                      : 'text-[#4A3E31] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5DACB] flex flex-col gap-3">
              <a
                id="mobile-devis-button"
                href="#devis"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[#92400E] hover:bg-[#78350F] text-white font-semibold py-3 px-4 rounded-lg shadow-sm"
              >
                Demander un devis gratuit
              </a>
              <a
                id="mobile-call-button"
                href={COMPANY_INFO.phoneTel}
                className="w-full text-center flex items-center justify-center gap-2 bg-[#261E17] text-white font-medium py-3 px-4 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#FDE68A]" />
                <span>Appeler le {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
