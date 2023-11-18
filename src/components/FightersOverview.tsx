import Image from 'next/image';
import styles from './fighterOverview.module.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import useGetFighters from '@/hooks/useGetFighters';
import { setFighters } from '@/redux/slices/fighters';
import usePagination from '@/hooks/usePagination';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';

const ITEMS_PER_PAGE = 10;

export default function FightersOverview() {
  const dispatch = useAppDispatch();
  const { fetchedFighters, loading, error } = useGetFighters();

  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );
  const { jumpPage, currentPageData } = usePagination(fighters, ITEMS_PER_PAGE);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(fighters.length / ITEMS_PER_PAGE);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    jumpPage(page);
  };

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
        {currentPageData() &&
          currentPageData().map((fighter) => {
            return (
              <Link href={`/${fighter.id}`} key={fighter.id}>
                <div>
                  <Image
                    src={fighter.image}
                    alt='A star wars fighter'
                    width={140}
                    height={140}
                  />
                </div>
              </Link>
            );
          })}
      </div>
      <Pagination
        count={pageCount}
        color='primary'
        size='large'
        page={page}
        variant='outlined'
        onChange={handlePageChange}
        className={styles.pagination}
      />
      <Link href={'/team'}>
        <Button variant='outlined' size='small'>
          My Team
        </Button>
      </Link>
    </div>
  );
}
