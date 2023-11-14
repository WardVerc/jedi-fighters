'use client';

import styles from './page.module.css';
import { useState } from 'react';
import Overview from '@/components/Overview';
import { Provider } from 'react-redux';
import { store } from './store';

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
      <Provider store={store}>
        <Overview />
      </Provider>
    </main>
  );
}
