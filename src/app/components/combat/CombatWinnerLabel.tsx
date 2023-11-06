import React from 'react';

import { getHighestStat } from '@jdh/lib/lib';

import { SuperHero } from '@jdh/types/types';

import { VariantProps, cva } from 'class-variance-authority';

// The color variants for the winner name text
const winnerLabelVariants = cva('', {
  variants: {
    variant: {
      default: 'text-black',
      intelligence: 'text-blue-500',
      strength: 'text-red-500',
      speed: 'text-orange-500',
      durability: 'text-green-500',
      power: 'text-purple-500',
      combat: 'text-pink-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type CombatWinnerLabelProps = {
  combatWinner: SuperHero;
};

/**
 * Renders a header that displays the winner of the combat.
 * @returns JSX.Element
 */
export const CombatWinnerLabel: React.FC<CombatWinnerLabelProps> = ({
  combatWinner,
}) => {
  return (
    <div className='-ml-2 w-fit -skew-x-6 border-b-2 border-r-2 border-black bg-white p-4 pl-6'>
      <h2 className='text-center text-2xl text-[#6ecfef] md:text-4xl'>
        And the winner is...{' '}
        <span
          className={winnerLabelVariants({
            variant: getHighestStat(combatWinner) as VariantProps<
              typeof winnerLabelVariants
            >['variant'],
          })}>
          {combatWinner?.name}!
        </span>
      </h2>
    </div>
  );
};
