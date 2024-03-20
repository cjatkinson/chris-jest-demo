import { sum, isEven, capitalize, divide, twoSumProblem, isPalindrome } from './basicExamples';

describe('sum', () => {
  test('should return 3', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('isEven', () => {
  test('should return true if number is even', () => {
    expect(isEven(2)).toEqual(true);
  });

  test('should returns false if number is odd', () => {
    expect(isEven(3)).toEqual(false);
  });

  test('should throw an error if number is negative', () => {
    expect(() => isEven(-1)).toThrow();
  });

  test('should throws an error if number is not a number', () => {
    // @ts-ignore
    expect(() => isEven('1')).toThrow();
  });
});

describe('capitalize', () => {
  test('should return a string with the first letter capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('world')).toEqual('World');
  });

  test('should return an empty string', () => {
    expect(capitalize('')).toEqual('');
  });
});

describe('divide', () => {
  test('should return 5', () => {
    expect(divide(10, 2)).toEqual(5);
  });

  test('should throw an error if division by zero', () => {
    expect(() => {
      divide(10, 0);
    }).toThrow('Division by zero');
  });
});

describe('twoSumProblem', () => {
  test('should pass the leetcode example cases', () => {
  const testCases = [
    { numbers: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { numbers: [3, 2, 4], target: 6, expected: [1, 2] },
    { numbers: [3, 3], target: 6, expected: [0, 1] }
  ];
  testCases.forEach(({ numbers, target, expected }) => {
    expect(twoSumProblem(numbers, target)).toEqual(expected);
  });
})
  test('should return an error if two numbers dont sum to target', () => {
    function runTwoSumProblem() {
      twoSumProblem([1,3], 9);
    }
    expect(runTwoSumProblem).toThrow();
  });
});

describe('isPalindrome', () => {
  test('should pass the leetcode example cases', () => {
    const testCases = [
      { input: 121, expected: true },
      { input: -121, expected: false },
      { input: 10, expected: false }
    ];
    testCases.forEach(({ input, expected }) => {
      expect(isPalindrome(input)).toEqual(expected);
    });
  });
});
