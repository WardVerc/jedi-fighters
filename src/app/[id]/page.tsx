'use client';
import FighterDetail from '@/components/FighterDetail';
import styles from './page.module.css';
import CurrentTeamOverview from '@/components/CurrentTeamOverview';

interface FighterDetailPageProps {
  params: {
    id: number;
  };
}

export default function FighterDetailPage({
  params: { id },
}: FighterDetailPageProps) {
  return (
    <div className={styles.main}>
      <FighterDetail id={id} />
      <CurrentTeamOverview />
    </div>
  );
}
