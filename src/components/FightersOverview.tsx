import Image from 'next/image';
import styles from './fighterOverview.module.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import Link from 'next/link';
import { useEffect } from 'react';
import useGetFighters from '@/hooks/useGetFighters';
import { setFighters } from '@/redux/slices/fighters';

export default function FightersOverview() {
  const { fetchedFighters, loading, error } = useGetFighters();
  const dispatch = useAppDispatch();

  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );

  useEffect(() => {
    if (fighters.length == 0) {
      dispatch(setFighters(fetchedFighters));
    }
  }, [fetchedFighters]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error ocurred: {error}</p>;
  }

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
