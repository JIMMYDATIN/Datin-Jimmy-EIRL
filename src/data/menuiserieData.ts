import { ServiceItem, RealisationItem, ReviewItem, AdvantageItem } from '../types';

export const COMPANY_INFO = {
  name: "Menuiserie Datin J.",
  legalName: "EIRL Datin Jimmy",
  trade: "Menuiserie & Agencement",
  tagline: "Menuiserie sur mesure, artisanat familial à Dozulé",
  owner: "Jimmy Datin",
  location: "Dozulé, Calvados (14430)",
  fullAddress: "14430 Dozulé — Normandie",
  phone: "07 43 64 14 13",
  phoneFormatted: "07 43 64 14 13",
  phoneTel: "tel:0743641413",
  email: "eirldatinj@gmail.com",
  workingHours: "Du Lundi au Vendredi : 08h00 - 19h00 | Samedi : sur RDV",
  facebookUrl: "https://www.facebook.com/menuiserieDATIN",
  rgeNumber: "QUALIBAT RGE n° E-E169284",
  isoverPartner: true,
  experience: "Savoir-faire familial",
  zoneRadius: "Rayon d'environ 40 km autour de Dozulé (Pays d'Auge & Côte Fleurie)",
  siret: "849 712 943 00018",
  decennale: "Assurance Décennale & Responsabilité Civile Professionnelle Groupama"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'menuiserie',
    title: 'Menuiserie',
    shortDesc: 'Fabrication sur mesure et pose soignée de fermetures et agencements intérieurs ou extérieurs.',
    fullDesc: 'Artisanat et précision millimétrique pour tous vos aménagements intérieurs et fermetures extérieures : fenêtres, portes, dressings et mobilier artisanal.',
    iconName: 'Hammer',
    badge: 'Sur-Mesure & Rénovation',
    benefits: [
      'Fenêtres double/triple vitrage, volets & portes d\'entrée isolantes',
      'Mobilier, dressings & bibliothèques sur mesure',
      'Portails et portes de garage',
      'Pose et rénovation de parquets massifs et contrecollés'
    ],
    materials: ['Chêne massif de pays', 'Frêne', 'Châtaignier', 'Aluminium thermo-laqué', 'PVC renforcé', 'Quincaillerie haute précision'],
    imageSrc: '/PORTAIL1.webp'
  },
  {
    id: 'charpente',
    title: 'Charpente',
    shortDesc: 'Conception, taillage traditionnel en atelier et levage de structures en bois massif.',
    fullDesc: 'Maîtrise complète du taillage en atelier et du levage sur chantier pour concevoir des charpentes robustes et durables.',
    iconName: 'Trees',
    badge: 'Bois Massif & Tradition',
    benefits: [
      'Charpentes traditionnelles en bois massif (tenons, mortaises)',
      'Création et rénovation de colombages traditionnels et appliques',
      'Extensions en ossature bois, surélévations & préaux',
      'Taillage en atelier et levage sécurisé sur chantier'
    ],
    materials: ['Chêne de structure', 'Sapin du Nord', 'Bois Douglas', 'Épicéa certifié PEFC', 'Assemblages traditionnels'],
    imageSrc: '/CHARPENTES1.webp'
  },
  {
    id: 'isolation',
    title: 'Isolation',
    shortDesc: 'Aménagement de combles habitables, amélioration des performances thermiques et acoustiques',
    fullDesc: 'Isolation haute performance pour réduire vos factures énergétiques et valoriser votre bien avec prise en charge des aides de l\'État.',
    iconName: 'ShieldCheck',
    badge: 'Certifié Qualibat RGE & ISOVER',
    benefits: [
      'Isolation des combles perdus & sous rampants de toiture',
      'Doublage thermique des murs intérieurs & cloisons acoustiques',
      'Matériaux haute performance en partenariat avec ISOVER',
      'Éligibilité complète aux aides de l\'État (MaPrimeRénov\', CEE)'
    ],
    materials: ['Laine de verre ISOVER haute performance', 'Laine de roche', 'Fibre de bois biosourcée', 'Membranes hygro-régulantes'],
    imageSrc: '/ISOLATION1.webp'
  },
  {
    id: 'hors-norme',
    title: 'Une Demande Spécifique',
    shortDesc: 'Créations sur-mesure, architectures atypiques et défis techniques adaptés à votre espace.',
    fullDesc: 'Jimmy Datin étudie la faisabilité technique, modélise votre besoin et façonne des ouvrages personnalisés hors des standards industriels.',
    iconName: 'Sparkles',
    badge: 'Projets Personnalisés',
    benefits: [
      'Étude technique et modélisation 3D pour projets hors gabarit',
      'Mariage bois-métal, verrières d\'atelier & garde-corps sculptés',
      'Terrasses suspendues, passerelles et escaliers sur-mesure',
      'Adaptation millimétrée aux contraintes architecturales existantes'
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
    title: 'Savoir-Faire Familial',
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
    author: 'Christophe Deleque',
    location: 'Houlgate',
    rating: 5,
    date: 'Avis vérifié',
    projectType: 'Isolation & création de cloisons, pose de parquet et placards',
    content: "Pour création et isolation de cloisons ainsi que pose parquet et création de placards, Jimmy Datin et son équipe sont d'un très grand professionnalisme, respect des délais et qualité du travail, je recommande vivement.",
    verified: true,
    highlight: "Très grand professionnalisme & respect des délais"
  },
  {
    id: 'rev-2',
    author: 'fr Ba',
    location: 'Dozulé',
    rating: 5,
    date: 'Avis vérifié',
    projectType: 'Charpente',
    content: "Une entreprise très professionnelle avec de bons conseils, qui respecte les délais malgré les aléas climatiques. Nous sommes très satisfaits du travail effectué, sur la charpente. Nous recommandons vivement.",
    verified: true,
    highlight: "Bons conseils & respect des délais"
  },
  {
    id: 'rev-3',
    author: 'Marine Cuvelier',
    location: 'Cabourg',
    rating: 5,
    date: 'Avis vérifié',
    projectType: 'Colombage bois sur façade',
    content: "Pose d'un colombage bois sur notre façade. Nous sommes ravis. Le bois est de très bonne qualité, le rendu est soigné. Merci pour ce bel ouvrage.",
    verified: true,
    highlight: "Bois de très bonne qualité & rendu soigné"
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
