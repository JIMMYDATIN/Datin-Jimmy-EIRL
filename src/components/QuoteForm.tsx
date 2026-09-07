import React, { useState, useRef } from 'react';
import { Send, Upload, CheckCircle2, AlertCircle, FileText, Image as ImageIcon, Trash2, Clock, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/menuiserieData';
import { QuoteFormData } from '../types';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Dozulé (14430)',
    projectType: 'fenetres-portes',
    timeframe: 'dans-les-3-mois',
    description: '',
    wantsRgeAdvice: true,
    uploadedPhotoName: '',
    uploadedPhotoPreview: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          uploadedPhotoName: file.name,
          uploadedPhotoPreview: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removePhoto = () => {
    setFormData(prev => ({
      ...prev,
      uploadedPhotoName: '',
      uploadedPhotoPreview: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `DEV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: 'Dozulé (14430)',
      projectType: 'fenetres-portes',
      timeframe: 'dans-les-3-mois',
      description: '',
      wantsRgeAdvice: true,
      uploadedPhotoName: '',
      uploadedPhotoPreview: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="devis" className="py-20 bg-[#F5EFE6] border-b border-[#E5DACB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#FDE68A] shadow-2xs mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>ÉTUDE 100% GRATUITE SANS ENGAGEMENT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-3">
            Demandez Votre Devis Gratuit
          </h2>
          <p className="text-sm sm:text-base text-[#615344] leading-relaxed">
            Remplissez ce formulaire pour nous exposer votre projet. 
            Jimmy Datin vous recontactera sous 48 heures pour échanger et convenir d’une prise de cotes gratuite à votre domicile.
          </p>
        </div>

        {/* Success Confirmation Card */}
        {isSuccess ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#16A34A] shadow-xl text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#DCFCE7] px-3 py-1 rounded-full">
              Demande enregistrée avec succès
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1F1C18] mt-4 mb-2">
              Merci {formData.fullName} !
            </h3>
            
            <p className="text-sm text-[#4E4135] max-w-lg mx-auto mb-6">
              Votre demande de devis n° <strong className="font-mono text-[#92400E]">{submittedRef}</strong> a bien été transmise à Jimmy Datin. 
              Vous recevrez une confirmation et un appel sous <strong>48h ouvrées</strong>.
            </p>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E5DACB] text-left max-w-md mx-auto mb-8 text-xs text-[#3E342B] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#786C5E]">Projet :</span>
                <span className="font-semibold capitalize">{formData.projectType.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786C5E]">Téléphone de contact :</span>
                <span className="font-semibold">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786C5E]">Email :</span>
                <span className="font-semibold">{formData.email}</span>
              </div>
              {formData.wantsRgeAdvice && (
                <div className="text-[#15803D] font-medium pt-1 border-t border-[#E8DFD3]">
                  ✓ Conseils pour les aides RGE (MaPrimeRénov') inclus
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 bg-[#92400E] hover:bg-[#78350F] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Envoyer une autre demande</span>
              </button>

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#EAE1D5] text-[#261E17] text-sm font-semibold px-6 py-3 rounded-xl border border-[#D9CBB9] transition-all"
              >
                <span>Joindre Jimmy Datin directement</span>
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Quote Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E0D3C0] shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                    Nom & Prénom <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Ex: Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                    Numéro de Téléphone <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ex: 06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Commune */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                    Adresse Email <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex: jean.dupont@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                    Ville ou Code Postal du chantier <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Ex: Dozulé (14430), Cabourg..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Project Type & Timeframe */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                    Type de projet <span className="text-[#DC2626]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                  >
                    <option value="menuiserie">Menuiserie (Fenêtres, Portes, Meubles, Dressings, Cuisines, Parquets)</option>
                    <option value="charpente">Charpente (Traditionnelle, Rénovation toiture, Extension ossature bois)</option>
                    <option value="isolation">Isolation thermique & phonique (ISOVER / Qualibat RGE)</option>
                    <option value="hors-norme">Une demande spécifique (Création sur-mesure, ouvrage singulier)</option>
                    <option value="autre">Autre projet / Renseignement</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeframe" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                    Délai de réalisation souhaité
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                  >
                    <option value="urgent">Dès que possible (Urgent)</option>
                    <option value="dans-les-3-mois">Dans les 1 à 3 mois</option>
                    <option value="dans-les-6-mois">Dans les 6 mois</option>
                    <option value="etude">Simple étude préalable / Estimation budgétaire</option>
                  </select>
                </div>
              </div>

              {/* Description TextArea */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                  Description de votre besoin <span className="text-[#DC2626]">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre projet : nombre d'ouvertures, dimensions approximatives, essence de bois souhaitée, contraintes particulières..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D9CBB9] bg-[#FAF7F2] text-sm text-[#1F1C18] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#92400E] focus:border-transparent transition-all"
                />
              </div>

              {/* RGE Help advice checkbox */}
              <div className="bg-[#DCFCE7]/40 p-4 rounded-xl border border-[#86EFAC]/60 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="wantsRgeAdvice"
                  name="wantsRgeAdvice"
                  checked={formData.wantsRgeAdvice}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-0.5 text-[#16A34A] rounded-sm focus:ring-[#16A34A] border-gray-300"
                />
                <label htmlFor="wantsRgeAdvice" className="text-xs text-[#14532D] cursor-pointer">
                  <strong>Je souhaite bénéficier des conseils pour les aides à la rénovation énergétique</strong> 
                  (MaPrimeRénov', CEE, TVA à 5.5% grâce à la qualification Qualibat RGE de Jimmy Datin).
                </label>
              </div>

              {/* Optional Photo / Plan Upload Simulation */}
              <div>
                <span className="block text-xs font-bold text-[#1F1C18] uppercase tracking-wider mb-1.5">
                  Joindre une photo ou un plan (optionnel)
                </span>

                {formData.uploadedPhotoPreview ? (
                  <div className="flex items-center gap-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#D9CBB9]">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-[#E5DACB] shrink-0">
                      <img src={formData.uploadedPhotoPreview} alt="Aperçu du fichier" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-[#1F1C18] truncate">{formData.uploadedPhotoName}</div>
                      <div className="text-[11px] text-[#15803D]">Photo attachée avec succès</div>
                    </div>
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="p-2 text-[#EF4444] hover:bg-[#FEE2E2] rounded-lg transition-colors"
                      title="Supprimer la photo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-[#92400E] bg-[#FEF3C7]/40'
                        : 'border-[#D9CBB9] hover:border-[#92400E] bg-[#FAF7F2]'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="w-10 h-10 rounded-full bg-[#EAE1D5] text-[#92400E] flex items-center justify-center mx-auto mb-2">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-semibold text-[#1F1C18]">
                      Cliquez pour sélectionner une photo ou glissez-la ici
                    </div>
                    <div className="text-[11px] text-[#786C5E] mt-1">
                      Formats acceptés : JPG, PNG (Max 10 Mo)
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="submit-quote-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#92400E] hover:bg-[#78350F] text-white font-bold text-base py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmission de votre demande en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer ma demande de devis gratuit</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#786C5E] text-center pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                  Données protégées & non cédées
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#92400E]" />
                  Réponse sous 48h ouvrées
                </span>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
