import Image from 'next/image';
import styles from './fighterOverview.module.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addFighter } from '../redux/slices/currentTeam';
import { Fighter } from './FighterCard';
import { RootState } from '../redux/store';

export default function FightersOverview() {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );
  const dispatch = useAppDispatch();

  const addFighterToTeam = (fighter: Fighter) => {
    if (!currentTeam.includes(fighter)) {
      dispatch(addFighter(fighter));
    } else {
      // Show pop up "This fighter is already in your team!"
    }
  };

  return (
    <div>
      <h1>Choose your fighters!</h1>
      <div className={styles.fighterGrid}>
        {fighters &&
          fighters.map((fighter) => {
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
