import { Fighter } from '@/models/Fighter';
import { useAppDispatch } from '@/redux/hooks';
import { removeFighterById } from '@/redux/slices/currentTeam';
import Button from '@mui/material/Button';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './fighterCard.module.css';
import Link from 'next/link';

interface FighterCardProps {
  fighter: Fighter;
}

export default function FighterCard({ fighter }: FighterCardProps) {
  const dispatch = useAppDispatch();

  const removeFighterFromTeam = () => {
    dispatch(removeFighterById(fighter.id));
  };

  return (
    <div className={styles.fighterContainer}>
      <p>{fighter.name}</p>
      <div className={styles.imageContainer}>
        <Link href={`/${fighter.id}`} key={fighter.id}>
          <Image
            src={fighter.image}
            alt='A star wars fighter'
            width={75}
            height={75}
          />
        </Link>
        <Button
          variant='outlined'
          color='error'
          size='small'
          startIcon={<DeleteIcon />}
          onClick={removeFighterFromTeam}
          className={styles.deleteButton}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
