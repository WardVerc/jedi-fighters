import { fightersJS } from '../../fighters';
import FighterCard, { Fighter } from './FighterCard';
import styles from './overview.module.css';
import { RootState } from '@/app/store';
import { useAppSelector } from '@/app/hooks';

export default function Overview() {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );
  return (
    <div className={styles.overviewContainer}>
      <div>
        <h1>Choose your fighters!</h1>
        {fightersJS.map((fighter) => {
          return <FighterCard fighter={fighter as Fighter} key={fighter.id} />;
        })}
      </div>
      <div>
        <h1>Your team:</h1>
        {currentTeam.map((fighter) => {
          return <FighterCard fighter={fighter as Fighter} key={fighter.id} />;
        })}
      </div>
    </div>
  );
}
