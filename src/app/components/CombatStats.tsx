import Typography from '@mui/material/Typography';

import { returnTitleCase } from '@/lib/lib';

import { SuperHero } from '@/types/types';

type CombatStatsProps = {
  combatants: SuperHero[];
};

const comparisonIcons = {
  higher: () => <span className='text-5xl text-green-500'>+</span>,
  lower: () => <span className='text-5xl text-red-500'>-</span>,
  equal: () => null,
};

export const CombatStats: React.FC<CombatStatsProps> = ({ combatants }) => {
  const getCombatantStats = (combatant: SuperHero) => {
    return Object.entries(combatant.powerstats).map(([title, value]) => ({
      title: title as string,
      value,
    }));
  };

  const getComparisonSymbol = (
    combatantOne: SuperHero,
    combatantTwo: SuperHero,
    stat: string
  ) => {
    if (combatantOne.powerstats[stat] === combatantTwo.powerstats[stat]) {
      return null;
    }

    // @ts-ignore
    if (combatantOne.powerstats[stat] > combatantTwo.powerstats[stat]) {
      return (
        <span className='flex h-6 w-6 items-center justify-center text-5xl text-green-500'>
          +
        </span>
      );
    } else {
      return (
        <span className='flex h-6 w-6 items-center justify-center text-5xl text-red-500'>
          -
        </span>
      );
    }
  };

  return (
    <div className='text-shadow relative flex h-full w-full flex-col items-center justify-center text-white'>
      <div className='mb-auto mt-auto flex w-full items-center justify-between gap-4 text-center'>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[0]).map((stat) => (
            <Typography
              variant='h6'
              component='div'
              className='flex items-center gap-2'>
              <span className='w-8 text-center'>{stat.value}</span>
              {getComparisonSymbol(
                combatants[0],
                combatants[1],
                `${stat.title}`
              )}
            </Typography>
          ))}
        </div>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[0]).map((stat) => (
            <Typography variant='h6'>{returnTitleCase(stat.title)}</Typography>
          ))}
        </div>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[1]).map((stat) => (
            <Typography
              variant='h6'
              component='div'
              className='flex flex-row-reverse items-center gap-2'>
              <span className='w-8 text-center'>{stat.value}</span>
              {getComparisonSymbol(
                combatants[1],
                combatants[0],
                `${stat.title}`
              )}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};
