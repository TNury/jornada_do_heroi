'use client';

import Image from 'next/image';

import { addCombatant } from '@/redux/slices/combatSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { cn, returnSummedStats } from '@/lib/lib';

import { SuperHero } from '@/types/types';

import { VariantProps, cva } from 'class-variance-authority';

const cardVariants = cva('relative h-full w-full !rounded-none p-2 border-2 border-black !shadow-comic', {
  variants: {
    variant: {
      default: '!bg-white hover:!bg-white data-[highlight="true"]:!bg-white',
      intelligence:
        '!bg-blue-800 hover:!bg-blue-500 data-[highlight="true"]:!bg-blue-500',
      strength:
        '!bg-red-800 hover:!bg-red-500 data-[highlight="true"]:!bg-red-500',
      speed:
        '!bg-orange-800 hover:!bg-orange-500 data-[highlight="true"]:!bg-orange-500',
      durability:
        '!bg-green-800 hover:!bg-green-500 data-[highlight="true"]:!bg-green-500',
      power:
        '!bg-purple-800 hover:!bg-purple-500 data-[highlight="true"]:!bg-purple-500',
      combat:
        '!bg-pink-800 hover:!bg-pink-500 data-[highlight="true"]:!bg-pink-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const cardContentVariants = cva(
  'flex items-end justify-between bg-gradient-to-t from-black !px-4 !pb-4 !pt-4 border-t-2 border-black',
  {
    variants: {
      variant: {
        default: '',
        intelligence: 'to-blue-800',
        strength: 'to-red-800',
        speed: 'to-orange-800',
        durability: 'to-green-800',
        power: 'to-purple-800',
        combat: 'to-pink-800',
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

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(addCombatant(hero));
  };

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
      )}
      onClick={handleOnClick}>
      <div className='relative h-full w-full border-2 border-black'>
        <div className='relative h-[50vh] w-full sm:h-80'>
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
