'use client';
import styles from './page.module.css';
import Overview from '@/components/Overview';

export default function Home() {
  return (
    <div className={styles.main}>
      <Overview />
    </div>
  );
}
