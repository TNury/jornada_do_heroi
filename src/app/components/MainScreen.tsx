'use client';

import Image from 'next/image';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { returnSummedStats } from '@/lib/lib';

import { SuperHero } from 'src/app/types/types';

type MainScreenProps = {
  heroList: SuperHero[];
};

export const MainScreen: React.FC<MainScreenProps> = ({ heroList }) => {
  return (
    <Container>
      <Grid
        container
        spacing={{
          xs: 2,
          sm: 4,
        }}>
        {heroList.slice(25, 50).map((entry, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card className='bg-slate-700'>
              <div className='relative h-64 w-full'>
                <Image
                  src={entry.images.md}
                  alt={entry.name}
                  fill
                  className='object-cover'
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
    </Container>
  );
};
