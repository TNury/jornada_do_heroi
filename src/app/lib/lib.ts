import { twMerge } from 'tailwind-merge';

import { SuperHero } from '@/types/types';

import { type ClassValue, clsx } from 'clsx';

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

/**
 * Merges class names using the `clsx` and `tailwind-merge` libraries.
 * @param inputs - The class names to merge.
 * @returns A string with the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
