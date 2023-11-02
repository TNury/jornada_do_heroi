'use client';

import Image from 'next/image';

import { useAppSelector } from '@/redux/store';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { returnSummedStats } from '@/lib/lib';

import { SuperHero } from '@/types/types';

type MainScreenProps = {
  heroList: SuperHero[];
};

// @TODO: Rename this component
export const MainScreen: React.FC<MainScreenProps> = ({ heroList }) => {
  const searchValue = useAppSelector((state) => state.search.value);

  const getFilteredHeroList = (): SuperHero[] => {
    const trimmedSearchValue = searchValue.trim().toLowerCase();

    if (!trimmedSearchValue) return heroList.slice(0, 10);

    return heroList.slice(0, 10).filter(({ name, appearance: { race } }) => {
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
          <Card className='bg-slate-700'>
            <div className='relative h-64 w-full'>
              <Image
                src={entry.images.md}
                alt={entry.name}
                fill
                className='object-cover'
                sizes='256px'
              />
            </div>
            <CardContent>
              <Typography variant='h6' className='text-white'>
                {entry.name}
              </Typography>
              <Typography variant='h6' className='text-white'>
                {returnSummedStats(entry)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
