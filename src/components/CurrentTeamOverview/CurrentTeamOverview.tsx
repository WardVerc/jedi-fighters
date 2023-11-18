import { useAppSelector } from '@/redux/hooks';
import FighterCard from '../FighterCard/FighterCard';
import { RootState } from '@/redux/store';
import { Fighter } from '@/models/Fighter';
import styles from './currentTeamOverview.module.css';
import Link from 'next/link';
import Button from '@mui/material/Button';

interface CurrentTeamOverviewProps {
  showHomeButton?: boolean;
}

export default function CurrentTeamOverview({
  showHomeButton = false,
}: CurrentTeamOverviewProps) {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );

  return (
    <div className={styles.container}>
      <h2>Your team:</h2>
      <div className={styles.fighterCardsContainer}>
        {currentTeam.length > 0 ? (
          currentTeam.map((fighter) => {
            return (
              <FighterCard fighter={fighter as Fighter} key={fighter.id} />
            );
          })
        ) : (
          <p>No teammembers yet.</p>
        )}
      </div>
      {showHomeButton && (
        <Link href={'/'} className={styles.homeButton}>
          <Button variant='outlined' size='small'>
            Home
          </Button>
        </Link>
      )}
    </div>
  );
}
