import { useAppSelector } from '@/redux/hooks';
import FighterCard, { Fighter } from './FighterCard';
import { RootState } from '@/redux/store';

export default function CurrentTeamOverview() {
  const currentTeam = useAppSelector(
    (state: RootState) => state.currentTeam.currentTeam
  );

  return (
    <div>
      <h1>Your team:</h1>
      {currentTeam.map((fighter) => {
        return <FighterCard fighter={fighter as Fighter} key={fighter.id} />;
      })}
    </div>
  );
}
