import Image from 'next/image';
import { fightersJS } from '../../fighters';

import styles from './fighterOverview.module.css';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addFighter } from '@/slices/currentTeam';
import { Fighter } from './FighterCard';
import { RootState } from '@/app/store';

export default function FightersOverview() {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );
  const dispatch = useAppDispatch();

  const addFighterToTeam = (fighter: Fighter) => {
    if (!currentTeam.includes(fighter)) {
      dispatch(addFighter(fighter));
    }
  };

  return (
    <div>
      <h1>Choose your fighters!</h1>
      <div className={styles.fighterGrid}>
        {fightersJS.map((fighter) => {
          return (
            <div
              key={fighter.id}
              onClick={() => addFighterToTeam(fighter as Fighter)}
            >
              <Image
                src={fighter.image}
                alt='A star wars fighter'
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
