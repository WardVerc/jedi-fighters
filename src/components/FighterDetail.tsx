import { RootState } from '../redux/store';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Fighter } from './FighterCard';
import { addFighter } from '@/redux/slices/currentTeam';

interface FighterDetailProps {
  id: number;
}

export default function FighterDetail({ id }: FighterDetailProps) {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );
  const fighter = fighters.find((character) => character.id == id);

  const dispatch = useAppDispatch();

  const addFighterToTeam = (fighter: Fighter) => {
    if (currentTeam.length == 5) {
      // Show pop up
      console.log("You can't add anymore fighters!");
      return;
    }
    if (currentTeam.includes(fighter)) {
      // Show pop up
      console.log('Fighter is already in your team!');
      return;
    } else {
      dispatch(addFighter(fighter));
    }
  };

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
          <button onClick={() => addFighterToTeam(fighter)}>Choose</button>
        </>
      ) : (
        <p>No fighter was found.</p>
      )}
    </div>
  );
}
