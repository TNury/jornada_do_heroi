'use client';

import { useState } from 'react';

import { addCombatant } from '@jdh/redux/slices/combatSlice';
import { selectSearchValue } from '@jdh/redux/slices/searchSlice';
import { useAppDispatch, useAppSelector } from '@jdh/redux/store';

import Grid from '@mui/material/Grid';

import { HeroCard } from '@jdh/components/HeroCard';

import { SuperHero } from '@jdh/types/types';

import InfiniteScroll from 'react-infinite-scroll-component';

type HeroListProps = {
  heroList: SuperHero[];
};

export const HeroList: React.FC<HeroListProps> = ({ heroList }) => {
  const [limit, setLimit] = useState<number>(25);

  const searchValue = useAppSelector(selectSearchValue);

  const dispatch = useAppDispatch();

  const handleCardClick = (hero: SuperHero) => {
    dispatch(addCombatant(hero));
  };

  const getFilteredHeroList = (): SuperHero[] => {
    const trimmedSearchValue = searchValue.trim().toLowerCase();

    if (!trimmedSearchValue) return heroList.slice(0, limit);

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
    <InfiniteScroll
      dataLength={getFilteredHeroList().length}
      next={() => {
        if (limit >= heroList.length) return;
        setLimit(limit + 10);
      }}
      hasMore={true}
      loader={null}
      className='w-full px-8 pb-8'>
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
    </InfiniteScroll>
  );
};
