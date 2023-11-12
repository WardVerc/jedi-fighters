'use client';

import styles from './page.module.css';
import { useState } from 'react';
import FighterCard, { Fighter } from '@/components/FighterCard';
import { fighters } from '../../fighters.js';

export default function Home() {
  const [isLoading] = useState(false);
  //const fighters = useSelector(selectFighters);
  //const dispatch = useDispatch();

  //   useEffect(() => {
  //      setLoading(true);
  //      if (!reduxStore.fighters.length)
  //         fetch('https://akabab.github.io/starwars-api/api/all.json')
  //         .then((res) => res.json())
  //        .then((data) => {
  //             dispatch(setFighters(data));
  //         });
  //      setLoading(false);
  //   }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Choose your fighters!</h1>
        {fighters.map((fighter) => {
          return <FighterCard fighter={fighter as Fighter} key={fighter.id} />;
        })}
      </div>
    </main>
  );
}
