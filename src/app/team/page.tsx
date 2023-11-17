'use client';
import styles from './page.module.css';
import CurrentTeamOverview from '@/components/CurrentTeamOverview';

export default function TeamPage() {
  return (
    <div className={styles.main}>
      <CurrentTeamOverview />
    </div>
  );
}
