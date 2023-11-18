import { Fighter } from '@/models/Fighter';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';

const url = 'https://akabab.github.io/starwars-api/api/all.json';

export default function useGetFighters() {
  const fighters = useAppSelector(
    (state: RootState) => state.fighters.fighters
  );
  const [fetchedFighters, setFetchedFighters] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFighters = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        const result = await response.json();

        // Check individual image URLs for a 404 response
        const fightersWithValidImages = await Promise.all(
          result.map(async (fighter: Fighter) => {
            try {
              const imageResponse = await fetch(fighter.image);

              if (!imageResponse.ok) {
                // if image url returns a 404 response, replace it with placeholder
                fighter.image = '/DALLE-spacewhale3.png';
              }

              return fighter;
            } catch (imageError) {
              console.error(
                `Error fetching image for fighter ${fighter.name}:`,
                imageError
              );
              return fighter;
            }
          })
        );

        setFetchedFighters(fightersWithValidImages);
      } catch (error) {
        setError('An error occurred while fetching fighters');
      } finally {
        setLoading(false);
      }
    };
    if (fighters.length == 0) {
      fetchFighters();
    }
  }, []);

  return { fetchedFighters, loading, error };
}
