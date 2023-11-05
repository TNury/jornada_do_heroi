'use client';

import Image from 'next/image';

import { selectCombatants } from '@jdh/redux/slices/combatSlice';
import { useAppSelector } from '@jdh/redux/store';

import { cn, getHighestStat, returnSummedStats } from '@jdh/lib/lib';

import { SuperHero } from '@jdh/types/types';

import { VariantProps, cva } from 'class-variance-authority';

const cardVariants = cva(
  'border-2 border-black shadow-comic relative h-full w-full p-2',
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-white data-[highlight="true"]:bg-white',
        intelligence:
          'bg-blue-700 hover:bg-blue-400 data-[highlight="true"]:bg-blue-400',
        strength:
          'bg-red-700 hover:bg-red-400 data-[highlight="true"]:bg-red-400',
        speed:
          'bg-orange-700 hover:bg-orange-400 data-[highlight="true"]:bg-orange-400',
        durability:
          'bg-green-700 hover:bg-green-400 data-[highlight="true"]:bg-green-400',
        power:
          'bg-purple-700 hover:bg-purple-400 data-[highlight="true"]:bg-purple-400',
        combat:
          'bg-pink-700 hover:bg-pink-400 data-[highlight="true"]:bg-pink-400',
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

// @TODO: Fix image bug when text is two lines
export const HeroCard: React.FC<HeroCardProps> = ({
  hero,
  className,
  ...otherAttributes
}) => {
  const highLight = useAppSelector(selectCombatants).includes(hero);

  return (
    <div
      {...otherAttributes}
      data-highlight={highLight}
      className={cn(
        cardVariants({
          variant: getHighestStat(hero) as VariantProps<
            typeof cardVariants
          >['variant'],
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
        <div
          className={cn(
            cardContentVariants({
              variant: getHighestStat(hero) as VariantProps<
                typeof cardContentVariants
              >['variant'],
            })
          )}>
          <div className='flex flex-col'>
            <p className='text-xl text-white'>{hero.name}</p>
            <p className='text-base text-white'>
              {hero.appearance.race ? hero.appearance.race : 'Unknown'}
            </p>
          </div>
          <p className='h-9 text-4xl text-white sm:text-3xl md:text-4xl'>
            {returnSummedStats(hero)}
          </p>
        </div>
      </div>
    </div>
  );
};
