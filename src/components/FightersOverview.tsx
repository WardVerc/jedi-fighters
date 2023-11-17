import Image from 'next/image';
import styles from './fighterOverview.module.css';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import Link from 'next/link';

export default function FightersOverview() {
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );

  return (
    <div className={styles.container}>
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
                    width={150}
                    height={150}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
