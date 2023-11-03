import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';

import { returnSummedStats, returnTitleCase } from '@/lib/lib';

import { SuperHero } from '@/types/types';

type CombatStatsProps = {
  combatants: SuperHero[];
};

const comparisonIcons = {
  higher: () => <AddIcon className='text-green-500' />,
  lower: () => <RemoveIcon className='text-red-500' />,
  equal: () => <></>,
};

export const CombatStats: React.FC<CombatStatsProps> = ({ combatants }) => {
  const getWinner = (): SuperHero | null => {
    const combatantOne = returnSummedStats(combatants[0]);
    const combatantTwo = returnSummedStats(combatants[1]);

    if (combatantOne > combatantTwo) {
      return combatants[0];
    } else if (combatantOne < combatantTwo) {
      return combatants[1];
    } else {
      return null;
    }
  };

  const getCombatantStats = (combatant: SuperHero) => {
    return Object.entries(combatant.powerstats).map(([title, value]) => ({
      title: title as string,
      value,
    }));
  };

  const getComparisonResult = (
    combatantOne: SuperHero,
    combatantTwo: SuperHero,
    stat: string
  ) => {
    // @ts-ignore
    if (combatantOne.powerstats[stat] > combatantTwo.powerstats[stat]) {
      return 'higher';
    }
    // @ts-ignore
    else if (combatantOne.powerstats[stat] < combatantTwo.powerstats[stat]) {
      return 'lower';
    } else {
      return 'equal';
    }
  };

  return (
    <div className='relative flex h-full w-1/2 flex-col items-center justify-center text-white'>
      <div className='absolute top-0 p-4'>
        <Typography variant='h6'>
          <span className='text-green-500'>Winner</span> is {getWinner()?.name}
        </Typography>
      </div>
      <div className='mb-auto mt-auto flex w-full items-center justify-between gap-4 text-center'>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[0]).map((stat) => (
            <div className='relative flex justify-center'>
              <Typography variant='body1'>{stat.value}</Typography>
              <div className='absolute left-8 flex items-center justify-center'>
                {comparisonIcons[
                  getComparisonResult(
                    combatants[0],
                    combatants[1],
                    `${stat.title}`
                  )
                ]()}
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[0]).map((stat) => (
            <Typography variant='body1'>
              {returnTitleCase(stat.title)}
            </Typography>
          ))}
        </div>
        <div className='flex flex-col'>
          {getCombatantStats(combatants[1]).map((stat) => (
            <div className='relative flex justify-center'>
              <Typography variant='body1'>{stat.value}</Typography>
              <div className='absolute right-8 flex items-center justify-center'>
                {comparisonIcons[
                  getComparisonResult(
                    combatants[1],
                    combatants[0],
                    `${stat.title}`
                  )
                ]()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
