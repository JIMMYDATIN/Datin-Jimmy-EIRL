export interface CommuneItem {
  name: string;
  postal: string;
  distanceKm: number;
  travelTime: string;
  isCovered: boolean; // < 40 km = true
  highlight?: string;
}

export const COMMUNES_DATABASE: CommuneItem[] = [
  // 0 - 10 km (Ultra-proche / Cœur Pays d'Auge & Côte)
  { name: 'Dozulé', postal: '14430', distanceKm: 0, travelTime: '0 min', isCovered: true, highlight: 'Atelier & siège de l\'entreprise — Déplacement prioritaire' },
  { name: 'Putot-en-Auge', postal: '14430', distanceKm: 3, travelTime: '4 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Cricqueville-en-Auge', postal: '14430', distanceKm: 3, travelTime: '4 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Goustranville', postal: '14430', distanceKm: 4, travelTime: '5 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Saint-Jouin', postal: '14430', distanceKm: 4, travelTime: '5 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Angerville', postal: '14430', distanceKm: 4, travelTime: '5 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Grangues', postal: '14160', distanceKm: 5, travelTime: '6 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Victot-Pontfol', postal: '14430', distanceKm: 5, travelTime: '7 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Gerrots', postal: '14430', distanceKm: 6, travelTime: '8 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Brucourt', postal: '14160', distanceKm: 6, travelTime: '7 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Beuvron-en-Auge', postal: '14430', distanceKm: 6, travelTime: '8 min', isCovered: true, highlight: 'Village classé — Spécialiste bâti normand' },
  { name: 'Danestal', postal: '14430', distanceKm: 7, travelTime: '8 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Annebault', postal: '14430', distanceKm: 7, travelTime: '9 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Périers-en-Auge', postal: '14160', distanceKm: 7, travelTime: '8 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Beaufour-Druval', postal: '14340', distanceKm: 9, travelTime: '10 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Léaupartie', postal: '14340', distanceKm: 10, travelTime: '11 min', isCovered: true, highlight: 'Intervention immédiate' },
  { name: 'Varaville', postal: '14390', distanceKm: 10, travelTime: '11 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Dives-sur-Mer', postal: '14160', distanceKm: 10, travelTime: '12 min', isCovered: true, highlight: 'Côte Fleurie — Déplacement très fréquent' },

  // 11 - 20 km (Côte Fleurie & Plaine de Caen)
  { name: 'Cabourg', postal: '14390', distanceKm: 11, travelTime: '13 min', isCovered: true, highlight: 'Côte Fleurie — Déplacement très fréquent' },
  { name: 'Gonneville-sur-Mer', postal: '14510', distanceKm: 11, travelTime: '13 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Rumesnil', postal: '14340', distanceKm: 11, travelTime: '13 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Houlgate', postal: '14510', distanceKm: 12, travelTime: '14 min', isCovered: true, highlight: 'Côte Fleurie — Villas d\'époque & menuiserie' },
  { name: 'Bavent', postal: '14860', distanceKm: 13, travelTime: '14 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Bonnebosq', postal: '14340', distanceKm: 13, travelTime: '15 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Auberville', postal: '14640', distanceKm: 13, travelTime: '15 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Cambremer', postal: '14340', distanceKm: 14, travelTime: '16 min', isCovered: true, highlight: 'Cœur Pays d\'Auge' },
  { name: 'Beaumont-en-Auge', postal: '14950', distanceKm: 14, travelTime: '16 min', isCovered: true, highlight: 'Bourg d\'art & patrimoine' },
  { name: 'Troarn', postal: '14670', distanceKm: 14, travelTime: '14 min', isCovered: true, highlight: 'Plaine de Caen Est' },
  { name: 'Merville-Franceville-Plage', postal: '14810', distanceKm: 14, travelTime: '15 min', isCovered: true, highlight: 'Côte de Nacre & Baie de l\'Orne' },
  { name: 'Bréville-les-Monts', postal: '14860', distanceKm: 14, travelTime: '15 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Drubec', postal: '14130', distanceKm: 14, travelTime: '16 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Clarbec', postal: '14130', distanceKm: 15, travelTime: '16 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Saint-Pierre-Azif', postal: '14950', distanceKm: 15, travelTime: '17 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Amfreville', postal: '14860', distanceKm: 15, travelTime: '16 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Escoville', postal: '14850', distanceKm: 15, travelTime: '15 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Touffréville', postal: '14940', distanceKm: 15, travelTime: '15 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Villers-sur-Mer', postal: '14640', distanceKm: 16, travelTime: '18 min', isCovered: true, highlight: 'Côte Fleurie — Résidences & maisons' },
  { name: 'Ranville', postal: '14860', distanceKm: 16, travelTime: '17 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Crèvecœur-en-Auge', postal: '14340', distanceKm: 16, travelTime: '18 min', isCovered: true, highlight: 'Pays d\'Auge' },
  { name: 'Sannerville', postal: '14940', distanceKm: 16, travelTime: '16 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Banneville-la-Campagne', postal: '14940', distanceKm: 17, travelTime: '17 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Blonville-sur-Mer', postal: '14910', distanceKm: 18, travelTime: '20 min', isCovered: true, highlight: 'Côte Fleurie' },
  { name: 'Canapville', postal: '14800', distanceKm: 18, travelTime: '19 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Reux', postal: '14130', distanceKm: 18, travelTime: '20 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Démouville', postal: '14840', distanceKm: 18, travelTime: '18 min', isCovered: true, highlight: 'Agglomération caennaise' },
  { name: 'Pont-l\'Évêque', postal: '14130', distanceKm: 19, travelTime: '20 min', isCovered: true, highlight: 'Pays d\'Auge — Déplacement fréquent' },
  { name: 'Bonneville-sur-Touques', postal: '14800', distanceKm: 19, travelTime: '20 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Bénouville', postal: '14970', distanceKm: 19, travelTime: '20 min', isCovered: true, highlight: 'Pegasus Bridge & bord d\'Orne' },
  { name: 'Giberville', postal: '14730', distanceKm: 19, travelTime: '18 min', isCovered: true, highlight: 'Agglomération caennaise' },
  { name: 'Cuverville', postal: '14840', distanceKm: 19, travelTime: '19 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Argences', postal: '14370', distanceKm: 19, travelTime: '20 min', isCovered: true, highlight: 'Plaine de Caen / Val ès Dunes' },
  { name: 'Vimont', postal: '14370', distanceKm: 19, travelTime: '19 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Le Pré-d\'Auge', postal: '14340', distanceKm: 19, travelTime: '20 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Bénerville-sur-Mer', postal: '14910', distanceKm: 20, travelTime: '22 min', isCovered: true, highlight: 'Côte Fleurie' },
  { name: 'Tourgéville', postal: '14800', distanceKm: 20, travelTime: '22 min', isCovered: true, highlight: 'Côte Fleurie & campagne' },
  { name: 'Saint-Arnoult', postal: '14800', distanceKm: 20, travelTime: '21 min', isCovered: true, highlight: 'Côte Fleurie' },
  { name: 'Colombelles', postal: '14460', distanceKm: 20, travelTime: '20 min', isCovered: true, highlight: 'Agglomération caennaise' },

  // 21 - 30 km (Deauville/Trouville, Lisieux, Caen)
  { name: 'Touques', postal: '14800', distanceKm: 21, travelTime: '22 min', isCovered: true, highlight: 'Côte Fleurie & patrimoine' },
  { name: 'Mézidon Vallée d\'Auge', postal: '14270', distanceKm: 21, travelTime: '23 min', isCovered: true, highlight: 'Pays d\'Auge Sud' },
  { name: 'Coquainvilliers', postal: '14130', distanceKm: 21, travelTime: '22 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Blainville-sur-Orne', postal: '14550', distanceKm: 21, travelTime: '22 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Bellengreville', postal: '14370', distanceKm: 21, travelTime: '21 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Cagny', postal: '14630', distanceKm: 21, travelTime: '21 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Deauville', postal: '14800', distanceKm: 22, travelTime: '24 min', isCovered: true, highlight: 'Côte Fleurie — Maisons de maître, villas & menuiseries haut de gamme' },
  { name: 'Hérouville-Saint-Clair', postal: '14200', distanceKm: 22, travelTime: '21 min', isCovered: true, highlight: 'Communauté urbaine Caen la mer' },
  { name: 'Mondeville', postal: '14120', distanceKm: 22, travelTime: '20 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Moult-Chicheboville', postal: '14370', distanceKm: 22, travelTime: '22 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Frénouville', postal: '14630', distanceKm: 22, travelTime: '22 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Saint-Désir', postal: '14100', distanceKm: 23, travelTime: '23 min', isCovered: true, highlight: 'Bassin lexovien' },
  { name: 'Ouistreham', postal: '14150', distanceKm: 23, travelTime: '24 min', isCovered: true, highlight: 'Riva-Bella & Côte de Nacre' },
  { name: 'Trouville-sur-Mer', postal: '14360', distanceKm: 24, travelTime: '26 min', isCovered: true, highlight: 'Côte Fleurie — Rénovation de standing' },
  { name: 'Cormelles-le-Royal', postal: '14123', distanceKm: 24, travelTime: '22 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Grentheville', postal: '14540', distanceKm: 24, travelTime: '23 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Lisieux', postal: '14100', distanceKm: 25, travelTime: '25 min', isCovered: true, highlight: 'Capitale du Pays d\'Auge — Déplacement quotidien' },
  { name: 'Caen', postal: '14000', distanceKm: 25, travelTime: '24 min', isCovered: true, highlight: 'Préfecture du Calvados — Centre-ville & quartiers' },
  { name: 'Épron', postal: '14610', distanceKm: 25, travelTime: '24 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Soliers', postal: '14540', distanceKm: 25, travelTime: '24 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Colleville-Montgomery', postal: '14880', distanceKm: 26, travelTime: '27 min', isCovered: true, highlight: 'Côte de Nacre' },
  { name: 'Saint-Contest', postal: '14280', distanceKm: 26, travelTime: '25 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Ifs', postal: '14123', distanceKm: 26, travelTime: '24 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Bourguébus', postal: '14540', distanceKm: 26, travelTime: '25 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Hermanville-sur-Mer', postal: '14880', distanceKm: 27, travelTime: '28 min', isCovered: true, highlight: 'Côte de Nacre' },
  { name: 'Saint-Germain-la-Blanche-Herbe', postal: '14280', distanceKm: 27, travelTime: '26 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Fleury-sur-Orne', postal: '14123', distanceKm: 27, travelTime: '25 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Saint-Gatien-des-Bois', postal: '14130', distanceKm: 28, travelTime: '26 min', isCovered: true, highlight: 'Plateau de Honfleur' },
  { name: 'Hermival-les-Vaux', postal: '14100', distanceKm: 28, travelTime: '28 min', isCovered: true, highlight: 'Pays d\'Auge' },
  { name: 'Louvigny', postal: '14111', distanceKm: 28, travelTime: '26 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Villerville', postal: '14113', distanceKm: 29, travelTime: '28 min', isCovered: true, highlight: 'Bord de mer Côte Fleurie' },
  { name: 'Lion-sur-Mer', postal: '14780', distanceKm: 29, travelTime: '30 min', isCovered: true, highlight: 'Côte de Nacre' },
  { name: 'Saint-Pierre-des-Ifs', postal: '14100', distanceKm: 29, travelTime: '28 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Bretteville-sur-Odon', postal: '14760', distanceKm: 29, travelTime: '27 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Saint-Pierre-en-Auge', postal: '14170', distanceKm: 30, travelTime: '32 min', isCovered: true, highlight: 'Pays d\'Auge Sud' },
  { name: 'Cresserons', postal: '14440', distanceKm: 30, travelTime: '30 min', isCovered: true, highlight: 'Intervention directe' },
  { name: 'Plumetot', postal: '14440', distanceKm: 30, travelTime: '30 min', isCovered: true, highlight: 'Intervention directe' },

  // 31 - 40 km (Honfleur, Côte de Nacre Ouest, Beuzeville, etc.)
  { name: 'Cricquebœuf', postal: '14113', distanceKm: 31, travelTime: '29 min', isCovered: true, highlight: 'Côte de Grâce' },
  { name: 'Éterville', postal: '14930', distanceKm: 31, travelTime: '28 min', isCovered: true, highlight: 'Caen la mer' },
  { name: 'Luc-sur-Mer', postal: '14530', distanceKm: 32, travelTime: '32 min', isCovered: true, highlight: 'Côte de Nacre' },
  { name: 'Douvres-la-Délivrande', postal: '14440', distanceKm: 32, travelTime: '31 min', isCovered: true, highlight: 'Cœur Côte de Nacre' },
  { name: 'Carpiquet', postal: '14650', distanceKm: 32, travelTime: '28 min', isCovered: true, highlight: 'Agglomération caennaise' },
  { name: 'Pennedepie', postal: '14600', distanceKm: 33, travelTime: '30 min', isCovered: true, highlight: 'Côte de Grâce' },
  { name: 'Équemauville', postal: '14600', distanceKm: 34, travelTime: '30 min', isCovered: true, highlight: 'Plateau de Honfleur' },
  { name: 'Langrune-sur-Mer', postal: '14830', distanceKm: 34, travelTime: '34 min', isCovered: true, highlight: 'Côte de Nacre' },
  { name: 'Honfleur', postal: '14600', distanceKm: 36, travelTime: '32 min', isCovered: true, highlight: 'Cité des peintres — Rénovation de charpente et menuiseries traditionnelles' },
  { name: 'Saint-Aubin-sur-Mer', postal: '14750', distanceKm: 36, travelTime: '35 min', isCovered: true, highlight: 'Côte de Nacre' },
  { name: 'Beuzeville', postal: '27210', distanceKm: 36, travelTime: '30 min', isCovered: true, highlight: 'Limite Calvados / Eure' },
  { name: 'La Rivière-Saint-Sauveur', postal: '14600', distanceKm: 38, travelTime: '34 min', isCovered: true, highlight: 'Bassin de Honfleur' },
  { name: 'Saint-Maclou', postal: '27210', distanceKm: 38, travelTime: '32 min', isCovered: true, highlight: 'Limite Calvados / Eure' },
  { name: 'Courseulles-sur-Mer', postal: '14470', distanceKm: 39, travelTime: '38 min', isCovered: true, highlight: 'Côte de Nacre Ouest' },
  { name: 'Livarot-Pays-d\'Auge', postal: '14140', distanceKm: 39, travelTime: '40 min', isCovered: true, highlight: 'Cœur du Pays d\'Auge' },
  { name: 'Bernay (environs nord)', postal: '27300', distanceKm: 39, travelTime: '38 min', isCovered: true, highlight: 'Étude préalable selon chantier' },

  // > 40 km (Villes limitrophes / Normandie étendue - Sur étude de projet)
  { name: 'Pont-Audemer', postal: '27500', distanceKm: 42, travelTime: '36 min', isCovered: false, highlight: 'Déplacement sur étude (grand chantier / charpente)' },
  { name: 'Orbec', postal: '14290', distanceKm: 43, travelTime: '40 min', isCovered: false, highlight: 'Déplacement possible selon envergure du projet' },
  { name: 'Falaise', postal: '14700', distanceKm: 44, travelTime: '42 min', isCovered: false, highlight: 'Déplacement possible selon envergure du projet' },
  { name: 'Bayeux', postal: '14400', distanceKm: 54, travelTime: '45 min', isCovered: false, highlight: 'Déplacement sur étude de faisabilité' },
  { name: 'Le Havre', postal: '76600', distanceKm: 50, travelTime: '45 min', isCovered: false, highlight: 'De l\'autre côté du Pont de Normandie — Sur devis spécifique' },
  { name: 'Rouen', postal: '76000', distanceKm: 90, travelTime: '1h05', isCovered: false, highlight: 'Hors zone standard — Uniquement projets d\'exception' }
];

// Helper to normalize strings for search
export function normalizeCityName(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// Search function in the commune database
export function searchCommune(query: string): {
  exactMatch: CommuneItem | null;
  suggestions: CommuneItem[];
  isLikelyCalvadosOrNearby: boolean;
} {
  const cleaned = normalizeCityName(query);
  if (!cleaned) {
    return { exactMatch: null, suggestions: [], isLikelyCalvadosOrNearby: false };
  }

  // Check if it's a numeric postal code
  const isPostal = /^[0-9]{2,5}$/.test(query.trim());

  if (isPostal) {
    const postalMatches = COMMUNES_DATABASE.filter(c => c.postal.startsWith(query.trim()));
    const exact = COMMUNES_DATABASE.find(c => c.postal === query.trim()) || (postalMatches.length === 1 ? postalMatches[0] : null);
    
    // If postal starts with 14 or 27
    const isLikelyCalvados = query.trim().startsWith('14') || query.trim().startsWith('27');

    return {
      exactMatch: exact || null,
      suggestions: postalMatches.slice(0, 6),
      isLikelyCalvadosOrNearby: isLikelyCalvados
    };
  }

  // Name match
  const exact = COMMUNES_DATABASE.find(c => normalizeCityName(c.name) === cleaned);
  
  const suggestions = COMMUNES_DATABASE.filter(c => {
    const cNorm = normalizeCityName(c.name);
    return cNorm.includes(cleaned) || cleaned.includes(cNorm);
  }).sort((a, b) => a.distanceKm - b.distanceKm);

  return {
    exactMatch: exact || (suggestions.length === 1 ? suggestions[0] : null),
    suggestions: suggestions.slice(0, 6),
    isLikelyCalvadosOrNearby: cleaned.includes('calvados') || cleaned.includes('normandie')
  };
}
