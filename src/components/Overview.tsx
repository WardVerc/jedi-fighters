import styles from './overview.module.css';
import CurrentTeamOverview from './CurrentTeamOverview';
import FightersOverview from './FightersOverview';

export default function Overview() {
  return (
    <div className={styles.overviewContainer}>
      <FightersOverview />
      <CurrentTeamOverview />
    </div>
  );
}
