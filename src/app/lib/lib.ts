import { twMerge } from 'tailwind-merge';

import { SuperHero } from '@/types/types';

import { type ClassValue, clsx } from 'clsx';

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
