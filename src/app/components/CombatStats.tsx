import { returnTitleCase } from '@jdh/lib/lib';

import { SuperHero } from '@jdh/types/types';

type CombatStatsProps = {
  combatants: SuperHero[];
};

/**
 * Renders a component that shows the comparison between two combatants' powerstats.
 * @returns JSX.Element
 */
export const CombatStats: React.FC<CombatStatsProps> = ({ combatants }) => {
  // Returns an array of objects containing the combatant's powerstat and value
  const getCombatantStats = (combatant: SuperHero) => {
    return Object.entries(combatant.powerstats).map(([title, value]) => ({
      title: title as string,
      value,
    }));
  };

  // Returns a positive/negative symbol based on the combatant's powerstat
  const getComparisonSymbol = (
    combatantOne: SuperHero,
    combatantTwo: SuperHero,
    stat: string
  ) => {
    if (combatantOne.powerstats[stat] === combatantTwo.powerstats[stat]) {
      return null;
    }

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
    <div className='relative flex h-full w-full flex-col items-center justify-center text-white'>
      <div className='mb-auto mt-auto flex w-full items-center justify-between gap-4 text-center'>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[0]).map((stat, index) => (
            <div key={index} className='flex items-center gap-2'>
              <p className='w-8 text-center text-xl'>{stat.value}</p>
              {getComparisonSymbol(
                combatants[0],
                combatants[1],
                `${stat.title}`
              )}
            </div>
          ))}
        </div>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[0]).map((stat, index) => (
            <p key={index} className='text-xl'>
              {returnTitleCase(stat.title)}
            </p>
          ))}
        </div>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[1]).map((stat, index) => (
            <div
              key={index}
              className='flex flex-row-reverse items-center gap-2'>
              <p className='w-8 text-center text-xl'>{stat.value}</p>
              {getComparisonSymbol(
                combatants[1],
                combatants[0],
                `${stat.title}`
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
