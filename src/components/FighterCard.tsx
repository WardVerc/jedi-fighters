import { useAppDispatch } from '@/app/hooks';
import { removeFighterById } from '@/slices/currentTeam';
import Image from 'next/image';
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

interface FighterCardProps {
  fighter: Fighter;
}

export default function FighterCard({ fighter }: FighterCardProps) {
  const dispatch = useAppDispatch();

  const removeFighterFromTeam = () => {
    dispatch(removeFighterById(fighter.id));
  };

  return (
    <div>
      <p>{fighter.name}</p>
      <Image
        src={fighter.image}
        alt='A star wars fighter'
        width={100}
        height={100}
      />

      <button onClick={removeFighterFromTeam}>Remove</button>
    </div>
  );
}
