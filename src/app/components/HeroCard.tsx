'use client';

import Image from 'next/image';

import { useAppSelector } from '@/redux/store';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { cn, returnSummedStats } from '@/lib/lib';

import { SuperHero } from '@/types/types';

import { VariantProps, cva } from 'class-variance-authority';

const cardVariants = cva(
  'relative h-full w-full !rounded-none p-2 border-2 border-black !shadow-comic',
  {
    variants: {
      variant: {
        default: '!bg-white hover:!bg-white data-[highlight="true"]:!bg-white',
        intelligence:
          '!bg-blue-700 hover:!bg-blue-400 data-[highlight="true"]:!bg-blue-400',
        strength:
          '!bg-red-700 hover:!bg-red-400 data-[highlight="true"]:!bg-red-400',
        speed:
          '!bg-orange-700 hover:!bg-orange-400 data-[highlight="true"]:!bg-orange-400',
        durability:
          '!bg-green-700 hover:!bg-green-400 data-[highlight="true"]:!bg-green-400',
        power:
          '!bg-purple-700 hover:!bg-purple-400 data-[highlight="true"]:!bg-purple-400',
        combat:
          '!bg-pink-700 hover:!bg-pink-400 data-[highlight="true"]:!bg-pink-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const cardContentVariants = cva(
  'flex items-end justify-between bg-gradient-to-t from-black !px-4 !pb-4 !pt-4 border-t-2 border-black',
  {
    variants: {
      variant: {
        default: '',
        intelligence: 'to-blue-700',
        strength: 'to-red-700',
        speed: 'to-orange-700',
        durability: 'to-green-700',
        power: 'to-purple-700',
        combat: 'to-pink-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface HeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hero: SuperHero;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  hero,
  className,
  ...otherAttributes
}) => {
  const highLight = useAppSelector((state) => {
    return state.combat.value.includes(hero);
  });

  const getVariant = (): string => {
    return Object.entries(hero.powerstats).reduce((a, b) =>
      b[1] > a[1] ? b : a
    )[0];
  };

  return (
    <Card
      {...otherAttributes}
      elevation={10}
      data-highlight={highLight}
      className={cn(
        cardVariants({
          variant: getVariant() as VariantProps<typeof cardVariants>['variant'],
          className,
        })
      )}>
      <div className='relative flex h-full w-full flex-col border-2 border-black'>
        <div className='relative h-full w-full'>
          <Image
            src={hero.images.md}
            alt={hero.name}
            fill
            className='object-cover'
            sizes='256px'
          />
        </div>
        <CardContent
          className={cn(
            cardContentVariants({
              variant: getVariant() as VariantProps<
                typeof cardContentVariants
              >['variant'],
            })
          )}>
          <div className='flex flex-col'>
            <Typography variant='h6' className='text-white'>
              {hero.name}
            </Typography>
            <Typography variant='body1' className='text-white'>
              {hero.appearance.race ? hero.appearance.race : 'Unknown'}
            </Typography>
          </div>
          <Typography variant='h4' className='h-9 text-white'>
            {returnSummedStats(hero)}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
