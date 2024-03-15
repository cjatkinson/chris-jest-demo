const { sum, isEven, capitalize, divide, conditional } = require('./basicExamples');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('isEven', () => {
  test('returns true if number is even', () => {
    expect(isEven(2)).toBe(true);
  });

  test('returns false if number is odd', () => {
    expect(isEven(3)).toBe(false);
  });

  test('throws an error if number is negative', () => {
    expect(() => isEven(-1)).toThrow();
  });

  test('throws an error if number is not a number', () => {
    expect(() => isEven('1')).toThrow();
  });
});

describe('capitalize', () => {
  test('capitalize should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('capitalize should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('divide', () => {
  test('divide should throw an error for division by zero', () => {
    expect(() => {
      divide(10, 0);
    }).toThrow('Division by zero');
  });

  test('divide should return the correct result for valid division', () => {
    expect(divide(10, 2)).toBe(5);
  });
});

describe('conditional', () => {
  test('conditional should return correct region for different types of pasta', () => {
    expect(conditional('spaghetti')).toBe('Campania');
    expect(conditional('penne')).toBe('Liguria');
    expect(conditional('fettuccine')).toBe('Emilia-Romagnas');
    expect(conditional('farfalle')).toBe('Lombardy');
  });

  test('conditional should return "Unknown" for unknown type of pasta', () => {
    expect(conditional('macaroni')).toBe('Unknown');
  });
});
