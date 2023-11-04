'use client';

import { useAppSelector } from '@/redux/store';

import Grid from '@mui/material/Grid';

import { HeroCard } from '@/components/HeroCard';

import { SuperHero } from '@/types/types';

type HeroListProps = {
  heroList: SuperHero[];
};

export const HeroList: React.FC<HeroListProps> = ({ heroList }) => {
  const searchValue = useAppSelector((state) => state.search.value);

  const getFilteredHeroList = (): SuperHero[] => {
    const trimmedSearchValue = searchValue.trim().toLowerCase();

    if (!trimmedSearchValue) return heroList;

    return heroList.filter(({ name, appearance: { race } }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseRace = race?.toLowerCase() ?? '';

      return (
        lowerCaseName.includes(trimmedSearchValue) ||
        lowerCaseRace.includes(trimmedSearchValue)
      );
    });
  };

  return (
    <div className='w-full px-8'>
      <Grid
        container
        spacing={{
          xs: 4,
        }}>
        {getFilteredHeroList().map((entry, index) => (
          <Grid item xs={12} md={3} key={index}>
            <HeroCard hero={entry} role='button' />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
