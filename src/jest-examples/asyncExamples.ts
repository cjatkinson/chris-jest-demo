import { PastaRegions } from './types/types';

export function fetchData(): Promise<PastaRegions> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        spaghetti: {
          region: 'Campania'
        },
        penne: {
          region: 'Liguria'
        },
        fettuccine: {
          region: 'Emilia-Romagna'
        },
        farfalle: {
          region: 'Lombardy'
        }
      });
    }, 1000);
  });
}

export function fetchDataReject(): Promise<never> {
  return new Promise((resolve, reject) => {
    // Simulating an error by rejecting the promise
    reject(new Error('Failed to fetch data from API'));
  });
}
