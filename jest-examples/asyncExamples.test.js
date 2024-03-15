const { fetchData, fetchDataReject } = require('./asyncExamples');

describe('fetchData', () => {
  test('returns the correct data', () => {
    return expect(fetchData()).resolves.toBe(
      JSON.stringify({
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
      })
    );
  });

  test('returns the correct data (using async/await)', async () => {
    await expect(fetchData()).resolves.toBe(
      JSON.stringify({
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
      })
    );
  });
});

describe('fetchDataReject', () => {
  test('returns a promise rejection', () => {
    return expect(fetchDataReject()).rejects.toEqual(new Error('Failed to fetch data from API'));
  });

  test('returns a promise rejection (using async/await)', async () => {
    await expect(fetchDataReject()).rejects.toEqual(new Error('Failed to fetch data from API'));
  });
});
