'use client';
import FighterDetail from '@/components/FighterDetail';
import styles from './page.module.css';

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
    </div>
  );
}
