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
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 4,
      }}>
      {getFilteredHeroList().map((entry, index) => (
        <Grid item xs={6} md={3} key={index}>
          <HeroCard hero={entry} />
        </Grid>
      ))}
    </Grid>
  );
};
