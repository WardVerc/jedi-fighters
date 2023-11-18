import Image from 'next/image';
import { Fighter } from '@/models/Fighter';
import styles from './fighterInformation.module.css';

interface FighterInformationProps {
  fighter: Fighter;
}

export default function FighterInformation({
  fighter,
}: FighterInformationProps) {
  return (
    <div className={styles.fighterInformation}>
      <Image
        src={fighter.image}
        alt='A star wars fighter'
        width={200}
        height={200}
      />
      <p className={styles.fighterDescription}>Name: {fighter.name}</p>
      <p className={styles.fighterDescription}>Height: {fighter.height}m</p>
      <p className={styles.fighterDescription}>Mass: {fighter.mass}kg</p>
      {fighter.affiliations.length > 0 && (
        <div>
          <p className={styles.fighterDescription}>Affiliations:</p>
          <ul>
            {fighter.affiliations.map((affiliation) => (
              <li key={affiliation}>{affiliation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
