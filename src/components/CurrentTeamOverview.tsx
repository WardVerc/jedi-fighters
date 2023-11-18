import { useAppSelector } from '@/redux/hooks';
import FighterCard from './FighterCard';
import { RootState } from '@/redux/store';
import { Fighter } from '@/models/Fighter';
import styles from './currentTeamOverview.module.css';

export default function CurrentTeamOverview() {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );

  return (
    <div className={styles.container}>
      <h2>Your team:</h2>
      <div className={styles.fighterCardsContainer}>
        {currentTeam.map((fighter) => {
          return <FighterCard fighter={fighter as Fighter} key={fighter.id} />;
        })}
      </div>
    </div>
  );
}
