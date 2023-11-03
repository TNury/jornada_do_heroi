'use client';

import Image from 'next/image';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { SuperHero } from '@/types/types';

type CombatCardProps = {
  hero: SuperHero;
};

export const CombatCard: React.FC<CombatCardProps> = ({ hero }) => {
  return (
    <Card className='h-fit bg-slate-700'>
      <div className='relative h-64 w-56'>
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
      </CardContent>
    </Card>
  );
};
