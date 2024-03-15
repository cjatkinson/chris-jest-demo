// [ basic example ] two numbers
function sum(a, b) {
  return a + b;
}
// [ number example ] - takes a number and returns whether it is even or not
function isEven(number) {
  if (number < 0) throw new Error('Number must be positive');
  if (typeof number !== 'number') throw new Error('Number must be a number');
  return number % 2 === 0;
}

// [ string example ] - takes a string and returns it with the first character capitalized
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// [ error example ] - takes two numbers and returns the quotient or the first divided by the second
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Division by zero');
  }
  return dividend / divisor;
}

// [ conditional example ] - takes a pasta and returns it region
function conditional(pasta) {
  switch (pasta) {
    case 'spaghetti':
      return 'Campania';
    case 'penne':
      return 'Liguria';
    case 'fettuccine':
      return 'Emilia-Romagnas';
    case 'farfalle':
      return 'Lombardy';
    default:
      return 'Unknown';
  }
}

module.exports = { sum, isEven, capitalize, divide, conditional };
