'use client';

import { addCombatant } from '@/redux/slices/combatSlice';
import { selectSearchValue } from '@/redux/slices/searchSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Grid from '@mui/material/Grid';

import { HeroCard } from '@/components/HeroCard';

import { SuperHero } from '@/types/types';

type HeroListProps = {
  heroList: SuperHero[];
};

export const HeroList: React.FC<HeroListProps> = ({ heroList }) => {
  const searchValue = useAppSelector(selectSearchValue);

  const dispatch = useAppDispatch();

  const handleCardClick = (hero: SuperHero) => {
    dispatch(addCombatant(hero));
  };

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
    <div className='w-full px-8 pb-8'>
      <Grid
        container
        spacing={{
          xs: 4,
        }}>
        {getFilteredHeroList().map((hero, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <HeroCard
              hero={hero}
              role='button'
              onClick={() => handleCardClick(hero)}
              className='h-[50vh] md:h-96'
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
