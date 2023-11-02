'use client';

import Image from 'next/image';

import { addCombatant } from '@/redux/slices/combatSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { returnSummedStats } from '@/lib/lib';

import { SuperHero } from '@/types/types';

type HeroCardProps = {
  hero: SuperHero;
};

export const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  const highLight = useAppSelector((state) => {
    if (hero.id === 1) {
      console.log(state.combat.value);
    }
    return state.combat.value.includes(hero);
  });

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(addCombatant(hero));
  };

  return (
    <Card
      data-highlight={highLight}
      className='bg-slate-700 data-[highlight="true"]:bg-red-500'
      onClick={handleOnClick}
      role='button'>
      <div className='relative h-64 w-full'>
        <Image
          src={hero.images.md}
          alt={hero.name}
          fill
          className='object-cover'
          sizes='256px'
        />
      </div>
      <CardContent>
        <Typography variant='h6' className='text-white'>
          {hero.name}
        </Typography>
        <Typography variant='h6' className='text-white'>
          {returnSummedStats(hero)}
        </Typography>
      </CardContent>
    </Card>
  );
};
