import { Fighter } from '@/models/Fighter';
import { useAppDispatch } from '@/redux/hooks';
import { removeFighterById } from '@/redux/slices/currentTeam';
import Image from 'next/image';

interface FighterCardProps {
  fighter: Fighter;
}

export default function FighterCard({ fighter }: FighterCardProps) {
  const dispatch = useAppDispatch();

  const removeFighterFromTeam = () => {
    dispatch(removeFighterById(fighter.id));
  };

  return (
    <div>
      <p>{fighter.name}</p>
      <Image
        src={fighter.image}
        alt='A star wars fighter'
        width={75}
        height={75}
      />

      <button onClick={removeFighterFromTeam}>Remove</button>
    </div>
  );
}
