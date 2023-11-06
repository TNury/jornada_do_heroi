import { twMerge } from 'tailwind-merge';

import { type ClassValue, clsx } from 'clsx';

import { SuperHero } from '@jdh/types/types';

/**
 * Makes an asynchronous HTTP request to the specified URL with optional options and payload.
 * @param requestURL - The URL to make the request to.
 * @param options - Optional request options such as headers and HTTP method.
 * @param payload - Optional payload to include in the request body.
 * @returns A Promise that resolves to the parsed JSON response from the server.
 */
export async function callAPI(
  requestURL: string,
  options?: Record<string, any>,
  payload?: Record<string, any>
): Promise<any> {
  const parsedURL = new URL(requestURL);

  const requestOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    ...options,
  };

  const rawResponse = await fetch(parsedURL, requestOptions);

  const parsedResponse = await rawResponse.json();

  return parsedResponse;
}

/**
 * Returns a string of classes merged together
 * @param inputs
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the first letter of a string in uppercase
 * @param text
 */
export function returnTitleCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Returns the summed stats of a hero
 * @param hero
 */
export function returnSummedStats(hero: SuperHero): number {
  const valuesAsArr = Object.values(hero.powerstats);

  let summedStats = 0;

  valuesAsArr.forEach((num) => {
    summedStats += num;
  });

  return summedStats;
}

/**
 * Returns the highest stat of a hero
 * @param hero
 */
export function getHighestStat(hero: SuperHero): string {
  return Object.entries(hero.powerstats).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0];
}
