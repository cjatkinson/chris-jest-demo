// [ async resolve example ] - simulate a promise resolving with data
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
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
    }, 1000);
  });
}

// [ async reject example ] - simulate a promise rejecting with and error
function fetchDataReject() {
  return new Promise((resolve, reject) => {
    // Simulating an error by rejecting the promise
    reject(new Error('Failed to fetch data from API'));
  });
}

module.exports = { fetchData, fetchDataReject };
