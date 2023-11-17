import { RootState } from '../redux/store';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addFighter } from '@/redux/slices/currentTeam';
import Link from 'next/link';
import { Fighter } from '@/models/Fighter';

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

  const hasDarthOrSithMasters = (fighter: Fighter): boolean => {
    if (fighter.masters) {
      if (Array.isArray(fighter.masters)) {
        return fighter.masters.some(
          (master) =>
            master.toLowerCase().includes('darth') ||
            master.toLowerCase().includes('sith')
        );
      } else {
        return (
          typeof fighter.masters === 'string' &&
          (fighter.masters.toLowerCase().includes('darth') ||
            fighter.masters.toLowerCase().includes('sith'))
        );
      }
    }

    return false;
  };

  const hasEvilAffiliations = (fighter: Fighter): boolean => {
    return fighter?.affiliations.some(
      (affiliation) =>
        affiliation.toLowerCase().includes('darth') ||
        affiliation.toLowerCase().includes('sith')
    );
  };

  const isFighterEvil = () => {
    const nameContainsEvil = fighter?.name
      .toLowerCase()
      .includes('darth' || 'sith');

    const isAffiliatedWithEvil = fighter && hasEvilAffiliations(fighter);
    const hasEvilMaster = fighter && hasDarthOrSithMasters(fighter);

    if (nameContainsEvil || isAffiliatedWithEvil || hasEvilMaster) {
      return true;
    }
    return false;
  };

  const addFighterToTeam = (fighter: Fighter) => {
    if (currentTeam.length == 5) {
      // Show pop up
      console.log("You can't add anymore fighters!");
      return;
    }
    if (isFighterEvil()) {
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
    <div>
      {fighter ? (
        <>
          <div>
            <Image
              src={fighter.image}
              alt='A star wars fighter'
              width={200}
              height={200}
            />
            <p>Name: {fighter.name}</p>
            <p>Height: {fighter.height}m</p>
            <p>Mass: {fighter.mass}kg</p>
            {fighter.affiliations.length > 0 && (
              <div>
                <p>Affiliations:</p>
                <ul>
                  {fighter.affiliations.map((affiliation) => (
                    <li key={affiliation}>{affiliation}</li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={() => addFighterToTeam(fighter)}>Choose</button>
          </div>
          <div>
            <Link href={`/${getPreviousId()}`}>
              <button>Previous</button>
            </Link>
            <Link href={`/${getNextId()}`}>
              <button>Next</button>
            </Link>
          </div>
        </>
      ) : (
        <p>No fighter was found.</p>
      )}
    </div>
  );
}
