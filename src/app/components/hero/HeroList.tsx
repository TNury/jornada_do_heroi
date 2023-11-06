'use client';

import { useEffect, useState } from 'react';

import { addCombatant } from '@jdh/redux/slices/combatSlice';
import { selectSearchValue } from '@jdh/redux/slices/searchSlice';
import { useAppDispatch, useAppSelector } from '@jdh/redux/store';

import Grid from '@mui/material/Grid';

import { HeroCard } from '@jdh/components/hero/HeroCard';

import { SuperHero } from '@jdh/types/types';

import InfiniteScroll from 'react-infinite-scroll-component';

type HeroListProps = {
  heroList: SuperHero[];
};

/**
 * Renders a list of SuperHeroes with an infinite scroll feature and search functionality.
 * @param heroList - The list of SuperHeroes to be rendered.
 */
export const HeroList: React.FC<HeroListProps> = ({ heroList }) => {
  const [entriesLimit, setEntriesLimit] = useState<number>(25);

  const searchValue = useAppSelector(selectSearchValue);

  const dispatch = useAppDispatch();

  const handleCardClick = (hero: SuperHero) => {
    dispatch(addCombatant(hero));
  };

  // Returns a filtered list of heroes based on the search value
  const getFilteredHeroList = (): SuperHero[] => {
    const trimmedSearchValue = searchValue.trim().toLowerCase();

    // If the search value is empty, return entries based on limit
    if (!trimmedSearchValue) return heroList.slice(0, entriesLimit);

    // Filter based on name and race (if the hero has it)
    return heroList
      .filter(({ name, appearance: { race } }) => {
        const lowerCaseName = name.toLowerCase();
        const lowerCaseRace = race?.toLowerCase() ?? '';

        return (
          lowerCaseName.includes(trimmedSearchValue) ||
          lowerCaseRace.includes(trimmedSearchValue)
        );
      })
      .slice(0, entriesLimit);
  };

  useEffect(() => {
    return () => {
      setEntriesLimit(25);
    };
  }, [searchValue]);

  return (
    <InfiniteScroll
      dataLength={getFilteredHeroList().length}
      next={() => {
        setEntriesLimit(entriesLimit + 10);
      }}
      hasMore={entriesLimit <= heroList.length}
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
              className='h-96'
            />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
