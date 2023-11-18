import { RootState } from '../redux/store';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addFighter } from '@/redux/slices/currentTeam';
import Link from 'next/link';
import { Fighter, isFighterEvil } from '@/models/Fighter';
import styles from './fighterDetail.module.css';
import Button from '@mui/material/Button';

interface FighterDetailProps {
  id: number;
}

export default function FighterDetail({ id }: FighterDetailProps) {
  const dispatch = useAppDispatch();
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );
  const fighter = fighters.find((character) => character.id == id);

  const addFighterToTeam = (fighter: Fighter) => {
    if (currentTeam.length == 5) {
      // Show pop up
      console.log("You can't add anymore fighters!");
      return;
    }
    if (isFighterEvil(fighter)) {
      // Show pop up
      console.log(
        'Our systems detected a malicious vibe from this fighter. Maybe choose a different fighter.'
      );
      return;
    }
    if (currentTeam.some((fighter) => fighter.id == id)) {
      // Show pop up
      console.log('Fighter is already in your team!');
      return;
    } else {
      dispatch(addFighter(fighter));
    }
  };

  const getNextId = () => {
    const lastIndex = fighters.length - 1;
    const currentIndex = fighters.indexOf(fighter as Fighter);
    if (currentIndex < lastIndex) {
      return fighters[currentIndex + 1].id;
    } else {
      return fighters[0].id;
    }
  };

  const getPreviousId = () => {
    const lastIndex = fighters.length - 1;
    const currentIndex = fighters.indexOf(fighter as Fighter);
    if (currentIndex > 0) {
      return fighters[currentIndex - 1].id;
    } else {
      return fighters[lastIndex].id;
    }
  };

  return (
    <div className={styles.container}>
      {fighter ? (
        <div className={styles.fighterContainer}>
          <div className={styles.fighterInformation}>
            <Image
              src={fighter.image}
              alt='A star wars fighter'
              width={200}
              height={200}
            />
            <p className={styles.fighterDescription}>Name: {fighter.name}</p>
            <p className={styles.fighterDescription}>
              Height: {fighter.height}m
            </p>
            <p className={styles.fighterDescription}>Mass: {fighter.mass}kg</p>
            {fighter.affiliations.length > 0 && (
              <div>
                <p className={styles.fighterDescription}>Affiliations:</p>
                <ul>
                  {fighter.affiliations.map((affiliation) => (
                    <li key={affiliation}>{affiliation}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className={styles.actionsContainer}>
            <Button
              onClick={() => addFighterToTeam(fighter)}
              variant='outlined'
              size='large'
              color='success'
            >
              Add to team
            </Button>
            <div className={styles.pageActionsContainer}>
              <Link href={`/${getPreviousId()}`}>
                <Button variant='outlined' size='small'>
                  Previous
                </Button>
              </Link>
              <Link href={'/'}>
                <Button variant='outlined' size='small'>
                  Home
                </Button>
              </Link>
              <Link href={`/${getNextId()}`}>
                <Button variant='outlined' size='small'>
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>No fighter was found.</p>
      )}
    </div>
  );
}
