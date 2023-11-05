import { twMerge } from 'tailwind-merge';

import { type ClassValue, clsx } from 'clsx';

import { SuperHero } from '@jdh/types/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function returnTitleCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function returnSummedStats(hero: SuperHero): number {
  const valuesAsArr = Object.values(hero.powerstats);

  let summedStats = 0;

  valuesAsArr.forEach((num) => {
    summedStats += num;
  });

  return summedStats;
}

export function getHighestStat(hero: SuperHero): string {
  return Object.entries(hero.powerstats).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0];
}
