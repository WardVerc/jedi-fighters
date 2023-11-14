import { useAppDispatch } from '@/app/hooks';
import { addFighter } from '@/slices/currentTeam';
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

interface FighterProps {
  fighter: Fighter;
}

export default function FighterCard({ fighter }: FighterProps) {
  const dispatch = useAppDispatch();

  const addFighterToTeam = () => {
    console.log(fighter.name + ' was selected!');
    dispatch(addFighter(fighter));
  };
  return (
    <div style={{ border: '1px solid red' }} onClick={addFighterToTeam}>
      <p>{fighter.name}</p>
      <Image
        src={fighter.image}
        alt='A star wars fighter'
        width={100}
        height={100}
      />
    </div>
  );
}
