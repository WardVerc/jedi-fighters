export interface Fighter {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  wiki: string;
  image: string;
  born: number;
  bornLocation?: string;
  died?: number;
  diedLocation?: string;
  species: string;
  hairColor?: string;
  eyeColor: string;
  skinColor: string;
  cybernetics?: string;
  affiliations: string[];
  masters?: string[] | string;
  apprentices?: string[];
  formerAffiliations: string[];
  dateCreated?: number;
  dateDestroyed?: number;
  destroyedLocation?: string;
  creator?: string;
  manufacturer?: string;
  productLine?: string;
  model?: string;
  class?: string;
  sensorColor?: string;
  platingColor?: string;
  equipment?: string | string[];
}

export const hasDarthMasters = (fighter: Fighter): boolean => {
  if (fighter.masters) {
    if (Array.isArray(fighter.masters)) {
      return fighter.masters.some((master) =>
        master.toLowerCase().includes('darth')
      );
    } else {
      return (
        typeof fighter.masters === 'string' &&
        fighter.masters.toLowerCase().includes('darth')
      );
    }
  }

  return false;
};

export const hasEvilAffiliations = (fighter: Fighter): boolean => {
  return fighter?.affiliations.some(
    (affiliation) =>
      affiliation.toLowerCase().includes('darth') ||
      affiliation.toLowerCase().includes('sith')
  );
};

export const isFighterEvil = (fighter: Fighter) => {
  const nameContainsEvil = fighter.name
    .toLowerCase()
    .includes('darth' || 'sith');

  if (
    nameContainsEvil ||
    hasEvilAffiliations(fighter) ||
    hasDarthMasters(fighter)
  ) {
    return true;
  }
  return false;
};
