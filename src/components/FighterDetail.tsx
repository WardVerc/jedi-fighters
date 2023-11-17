import { RootState } from '../redux/store';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks';

interface FighterDetailProps {
  id: number;
}

export default function FighterDetail({ id }: FighterDetailProps) {
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );
  const fighter = fighters.find((character) => character.id == id);

  return (
    <div>
      {fighter ? (
        <>
          <p>{fighter.name}</p>
          <p>{fighter.id}</p>
          <Image
            src={fighter.image}
            alt='A star wars fighter'
            width={100}
            height={100}
          />
        </>
      ) : (
        <p>No fighter was found.</p>
      )}
    </div>
  );
}
