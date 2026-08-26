import { ServiceItem, RealisationItem, ReviewItem, AdvantageItem } from '../types';

export const COMPANY_INFO = {
  name: "EIRL Datin Jimmy",
  trade: "Menuiserie & Agencement",
  tagline: "Menuiserie sur mesure, artisanat familial à Dozulé",
  owner: "Jimmy Datin",
  location: "Dozulé, Calvados (14430)",
  fullAddress: "14430 Dozulé — Normandie",
  phone: "06 45 28 91 33",
  phoneFormatted: "06 45 28 91 33",
  phoneTel: "tel:0645289133",
  email: "contact@menuiserie-datin-dozule.fr",
  workingHours: "Du Lundi au Vendredi : 08h00 - 19h00 | Samedi : sur RDV",
  facebookUrl: "https://www.facebook.com/search/top?q=EIRL%20Datin%20Jimmy",
  rgeNumber: "QUALIBAT RGE n° E-E169284",
  isoverPartner: true,
  experience: "Savoir-faire familial de père en fils",
  zoneRadius: "Rayon d'environ 35 km autour de Dozulé (Pays d'Auge & Côte Fleurie)",
  siret: "849 712 943 00018",
  decennale: "Assurance Décennale & Responsabilité Civile Professionnelle AXA France"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'menuiserie',
    title: 'Menuiserie',
    shortDesc: 'Fabrication sur mesure et pose : fenêtres, portes d\'entrée, meubles d\'ébénisterie, dressings sous combles, parquets et cuisines.',
    fullDesc: 'Artisanat d\'art et précision millimétrique pour tous vos aménagements intérieurs et fermetures extérieures. De la création de meubles uniques et dressings à la pose de fenêtres bois/alu haute performance thermique.',
    iconName: 'Hammer',
    badge: 'Sur-Mesure & Rénovation',
    benefits: [
      'Menuiseries extérieures : fenêtres double/triple vitrage, portes d\'entrée sécurisées et volets battants/roulants',
      'Meubles personnalisés : bibliothèques sur mesure, buffets, tables en bois massif et cuisines artisanales',
      'Aménagements pour enfants : lits superposés sécurisés avec barrières renforcées et rangements intégrés',
      'Pose et rénovation de parquets massifs, contrecollés et stratifiés avec plinthes assorties'
    ],
    materials: ['Chêne massif de pays', 'Frêne', 'Châtaignier', 'Aluminium thermo-laqué', 'PVC renforcé', 'Quincaillerie Blum'],
    imageSrc: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'charpente',
    title: 'Charpente',
    shortDesc: 'Conception, fabrication et pose de charpentes traditionnelles, rénovation de toitures, extensions en ossature bois et préaux.',
    fullDesc: 'Maîtrise complète du taillage en atelier et du levage sur chantier. Nous concevons et rénovons des charpentes traditionnelles en bois massif robustes, conçues pour durer des générations dans le respect des styles normands.',
    iconName: 'Trees',
    badge: 'Artisan Charpentier',
    benefits: [
      'Fabrication et assemblage de charpentes traditionnelles en bois massif (tenons, mortaises, chevilles bois)',
      'Rénovation complète de structures de toiture, remplacement de pannes, arbalétriers et chevrons',
      'Création d\'extensions ossature bois, surélévations de toiture et préaux d\'agrément',
      'Levage et pose sécurisés sur chantier avec engins adaptés dans tout le Pays d\'Auge'
    ],
    materials: ['Chêne de structure', 'Sapin du Nord', 'Bois Douglas', 'Épicéa certifié PEFC', 'Assemblages traditionnels'],
    imageSrc: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'isolation',
    title: 'Isolation',
    shortDesc: 'Isolation thermique et acoustique des combles, toitures et cloisons en partenariat avec ISOVER & certifié Qualibat RGE.',
    fullDesc: 'En tant qu\'artisan certifié Qualibat RGE et partenaire de la marque ISOVER, nous réalisons des travaux d\'isolation performants ouvrant droit aux aides de l\'État (MaPrimeRénov\', primes CEE, TVA réduite à 5,5%).',
    iconName: 'ShieldCheck',
    badge: 'Partenaire ISOVER & RGE',
    benefits: [
      'Isolation des combles perdus par soufflage mécanisé ou rouleaux laine minérale haute performance',
      'Isolation sous rampants de toiture et aménagement thermique des combles',
      'Doublage de murs intérieurs et cloisons à haute absorption acoustique',
      'Dossier complet d\'aides de l\'État pris en charge (MaPrimeRénov\', Prime Énergie CEE)'
    ],
    materials: ['Laine de verre ISOVER haute performance', 'Laine de roche', 'Fibre de bois biosourcée', 'Membranes hygro-régulantes Vario'],
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'hors-norme',
    title: 'Un Projet Hors Norme',
    shortDesc: 'Ouvrages d\'exception, architectures atypiques, structures suspendues, verrières d\'atelier et défis techniques sur-mesure.',
    fullDesc: 'Vous avez une idée singulière ou un projet architectural complexe ? Jimmy Datin étudie la faisabilité technique, modélise votre projet et façonne des pièces d\'exception qui sortent des standards conventionnels.',
    iconName: 'Sparkles',
    badge: 'Création d\'Exception',
    benefits: [
      'Conception et fabrication d\'ouvrages sur-mesure aux dimensions non standard',
      'Mariage des matières : verrières atelier bois-métal, garde-corps sculptés, escaliers aériens',
      'Terrasses suspendues, passerelles en bois et agencements extérieurs paysagers',
      'Étude technique approfondie et conseils personnalisés pour chaque défi architectural'
    ],
    materials: ['Bois nobles séchés', 'Bois exotiques classe 4', 'Profils acier & verres feuilletés', 'Quincaillerie invisible'],
    imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    tag: 'Accréditation Officielle',
    title: 'Certification Qualibat RGE',
    description: 'Le label "Reconnu Garant de l\'Environnement" atteste de notre expertise technique et vous ouvre droit aux primes de l\'État (MaPrimeRénov\', primes CEE, Éco-PTZ et TVA réduite à 5,5%).',
    icon: 'Award'
  },
  {
    tag: 'Excellence des Matériaux',
    title: 'Partenaire Officiel ISOVER',
    description: 'Nous collaborons avec le leader français de l\'isolation thermique et phonique pour vous garantir des matériaux certifiés, une résistance thermique optimale et une durabilité éprouvée.',
    icon: 'ShieldCheck'
  },
  {
    tag: 'Tradition & Transmission',
    title: 'Savoir-Faire Familial de Père en Fils',
    description: 'Nourri par des décennies d\'expérience du travail du bois, Jimmy Datin perpétue les gestes d\'une menuiserie et charpente exigeante où chaque assemblage est exécuté avec fierté et précision.',
    icon: 'Trees'
  },
  {
    tag: 'Proximité & Écoute',
    title: 'Sur-Mesure & Respect des Délais',
    description: 'Chaque projet est unique. Nous venons chez vous à Dozulé et dans le Calvados prendre les cotes au millimètre, vous conseiller personnellement et respecter scrupuleusement le calendrier convenu.',
    icon: 'ClockCheck'
  }
];

export const REALISATIONS: RealisationItem[] = [
  {
    id: 'charpente-chantier-cours',
    title: 'Pose de charpente traditionnelle en cours de travaux',
    category: 'charpente',
    categoryLabel: 'Charpente',
    location: 'Dozulé (14430)',
    description: 'Conception, taillage en atelier et montage sur chantier d\'une charpente traditionnelle en bois massif avec fermes, pannes et chevrons sous ciel normand. Levage motorisé et calage millimétré sur maçonnerie neuve.',
    features: ['Bois de charpente massif sélectionné', 'Assemblages traditionnels renforcés', 'Levage et mise en place sécurisés', 'Pentes adaptées au climat normand'],
    imageSrc: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Sapin de pays & Chêne de structure'
  },
  {
    id: 'charpente-extension-ossature-bois',
    title: 'Structure & charpente pour extension de maison',
    category: 'charpente',
    categoryLabel: 'Charpente',
    location: 'Cabourg (14390)',
    description: 'Réalisation d\'une charpente apparente pour une extension salon lumineuse. Poutres maîtresses rabotées, pannes sablières et chevrons traités pour recevoir une couverture en tuiles traditionnelles.',
    features: ['Poutres maîtresses apparentes', 'Traitement fongicide et insecticide classe 2', 'Prise en compte des ouvertures vitrées', 'Chantier livré dans les délais'],
    imageSrc: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Bois Douglas & Sapin contrecollé'
  },
  {
    id: 'meuble-bibliotheque-chene',
    title: 'Meuble bibliothèque & agencement salon sur mesure',
    category: 'menuiserie',
    categoryLabel: 'Menuiserie',
    location: 'Dozulé (14430)',
    description: 'Conception et fabrication d\'un grand meuble bibliothèque d\'ébéniste en chêne massif brossé avec niches rétro-éclairées, placards bas à fermeture douce et intégration sur mesure pour équipement TV et audio.',
    features: ['100% chêne de pays massif', 'Éclairage LED d\'ambiance intégré', 'Placards avec amortisseurs Blum', 'Finitions huilées écologiques'],
    imageSrc: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Chêne massif sélection noble'
  },
  {
    id: 'lit-enfant-securise',
    title: 'Lit superposé sur mesure sécurisé pour enfants',
    category: 'menuiserie',
    categoryLabel: 'Menuiserie',
    location: 'Dozulé (14430)',
    description: 'Conception et fabrication d\'un ensemble lits superposés en pin et chêne massif avec barrières anti-chute renforcées, marches larges antidérapantes et tiroirs de rangement intégrés sur coulisses amorties.',
    features: ['Bois massif certifié PEFC', 'Finitions vernis à l\'eau sans COV', 'Barrières de sécurité enfant renforcées', 'Tiroirs coffres sous le lit'],
    imageSrc: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Pin sylvestre de pays & Chêne blanc'
  },
  {
    id: 'fenetre-chassis-bois',
    title: 'Pose de fenêtres en chêne de pays double vitrage',
    category: 'menuiserie',
    categoryLabel: 'Menuiserie',
    location: 'Cabourg (14390)',
    description: 'Remplacement de fenêtres anciennes sur maison de caractère. Pose en rénovation avec conservation des moulures d\'époque, vitrage haute isolation thermique 4/16/4 argon et quincaillerie en laiton patiné.',
    features: ['Éligible MaPrimeRénov\' (RGE)', 'Performance Uw = 1.2 W/m²K', 'Finition lasure microporeuse', 'Fabrication traditionnelle'],
    imageSrc: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Chêne de France certifié'
  },
  {
    id: 'isolation-combles-perdus',
    title: 'Isolation de combles perdus - Partenaire ISOVER',
    category: 'isolation',
    categoryLabel: 'Isolation',
    location: 'Pont-l\'Évêque (14130)',
    description: 'Soufflage de laine minérale ISOVER haute densité avec création d\'un chemin de visite en planches de sapin et rehausse de trappe d\'accès isolée. Chantier réalisé sous label RGE.',
    features: ['Résistance thermique R = 7.5 m²K/W', 'Matériaux certifiés ACERMI ISOVER', 'Dossier aides RGE géré de A à Z', 'Gain thermique immédiat'],
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Sapin de structure & isolant ISOVER'
  },
  {
    id: 'isolation-sous-toiture',
    title: 'Isolation sous toiture & rampants aménagés',
    category: 'isolation',
    categoryLabel: 'Isolation',
    location: 'Lisieux (14100)',
    description: 'Pose croisée de panneaux isolants ISOVER sous chevrons avec membrane d\'étanchéité à l\'air Vario et suspentes renforcées, garantissant un confort 4 saisons sans déperdition.',
    features: ['Conforme réglementation RE2020', 'Protection pare-vapeur continue', 'Réduction jusqu\'à 30% des factures d\'énergie', 'Certification RGE'],
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Isolant ISOVER & ossature métallique/bois'
  },
  {
    id: 'verriere-bois-acier-sur-mesure',
    title: 'Verrière d\'atelier & terrasse suspendue hors norme',
    category: 'hors-norme',
    categoryLabel: 'Un Projet Hors Norme',
    location: 'Deauville (14800)',
    description: 'Projet d\'exception combinant une verrière intérieure monumentale en chêne et profils métalliques noirs avec une terrasse extérieure en bois suspendue sur double poutraison.',
    features: ['Ouvrage architectural unique', 'Assemblage bois & métal sur mesure', 'Verre feuilleté acoustique 44.2', 'Finitions haut de gamme'],
    imageSrc: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1200&q=80',
    fallbackUnsplash: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1200&q=80',
    woodType: 'Chêne massif noble & Bois Douglas'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Michel & Valérie B.',
    location: 'Dozulé (14430)',
    rating: 5,
    date: 'Janvier 2026',
    projectType: 'Lits superposés sur-mesure & Dressing',
    content: 'Jimmy a réalisé pour nos deux garçons un lit superposé sur mesure d\'une qualité exceptionnelle. Les finitions sont impeccables, la structure est d\'une robustesse rassurante et la sécurité a été pensée dans les moindres détails. Un artisan passionné, ponctuel et d\'une grande gentillesse. Nous recommandons les yeux fermés !',
    verified: true,
    highlight: 'Structure ultra robuste & finitions irréprochables'
  },
  {
    id: 'rev-2',
    author: 'Émilie G.',
    location: 'Cabourg (14390)',
    rating: 5,
    date: 'Novembre 2025',
    projectType: 'Changement de fenêtres bois (RGE)',
    content: 'Remplacement de toutes les fenêtres de notre maison normande. Jimmy Datin a su respecter le style de notre façade tout en nous apportant une isolation thermique remarquable. Le label RGE nous a permis d\'obtenir les aides sans souci. Chantier laissé parfaitement propre tous les soirs.',
    verified: true,
    highlight: 'Isolation remarquable & aides RGE obtenues'
  },
  {
    id: 'rev-3',
    author: 'Jean-Pierre L.',
    location: 'Houlgate (14510)',
    rating: 5,
    date: 'Septembre 2025',
    projectType: 'Pose de parquet en chêne massif & Isolation ISOVER',
    content: 'Artisan sérieux, à l\'écoute et de bon conseil. Jimmy est intervenu pour l\'isolation de nos combles (partenaire ISOVER) et la pose d\'un parquet en chêne massif dans le salon. Le résultat dépasse nos attentes. Respect scrupuleux des délais et des devis.',
    verified: true,
    highlight: 'Respect rigoureux des délais & du devis'
  }
];

export const INTERVENTION_CITIES = [
  { name: 'Dozulé', postal: '14430', note: 'Siège de l\'atelier — Intervention prioritaire' },
  { name: 'Cabourg', postal: '14390', note: 'Côte Fleurie (~12 min)' },
  { name: 'Dives-sur-Mer', postal: '14160', note: 'Côte Fleurie (~10 min)' },
  { name: 'Houlgate', postal: '14510', note: 'Côte Fleurie (~15 min)' },
  { name: 'Villers-sur-Mer', postal: '14640', note: 'Côte Fleurie (~20 min)' },
  { name: 'Deauville / Trouville', postal: '14800', note: 'Côte Fleurie (~25 min)' },
  { name: 'Pont-l\'Évêque', postal: '14130', note: 'Pays d\'Auge (~20 min)' },
  { name: 'Lisieux', postal: '14100', note: 'Pays d\'Auge (~25 min)' },
  { name: 'Troarn / Sannerville', postal: '14670', note: 'Plaine de Caen (~15 min)' },
  { name: 'Caen & agglomération', postal: '14000', note: 'Calvados (~25 min)' }
];
