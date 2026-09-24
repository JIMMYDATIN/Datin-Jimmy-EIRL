export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  materials: string[];
  imageSrc: string;
  imageAlt?: string;
  badge?: string;
}

export interface RealisationItem {
  id: string;
  title: string;
  category: 'menuiserie' | 'charpente' | 'isolation' | 'hors-norme';
  categoryLabel: string;
  location: string;
  description: string;
  features: string[];
  imageSrc: string;
  fallbackUnsplash: string;
  dimensions?: string;
  woodType?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  projectType: string;
  content: string;
  verified: boolean;
  highlight?: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  timeframe: string;
  description: string;
  wantsRgeAdvice: boolean;
  uploadedPhotoName?: string;
  uploadedPhotoPreview?: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
  tag: string;
}
