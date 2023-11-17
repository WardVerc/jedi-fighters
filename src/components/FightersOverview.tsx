import Image from 'next/image';
import styles from './fighterOverview.module.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addFighter } from '../redux/slices/currentTeam';
import { Fighter } from './FighterCard';
import { RootState } from '../redux/store';
import Link from 'next/link';

export default function FightersOverview() {
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );

  return (
    <div>
      <h1>Choose your fighters!</h1>
      <div className={styles.fighterGrid}>
        {fighters &&
          fighters.map((fighter) => {
            return (
              <Link href={`/${fighter.id}`} key={fighter.id}>
                <div>
                  <Image
                    src={fighter.image}
                    alt='A star wars fighter'
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
