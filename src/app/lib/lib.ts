import { SuperHero } from '@/types/types';

export function returnSummedStats(hero: SuperHero): number {
  const valuesAsArr = Object.values(hero.powerstats);

  let summedStats = 0;

  valuesAsArr.forEach((num) => {
    summedStats += num;
  });

  return summedStats;
}

export function returnTitleCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
