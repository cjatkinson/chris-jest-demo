export function sum(num1: number, num2: number): number {
  return num1 + num2;
}
export function isEven(num: number): boolean {
  if (num < 0) throw new Error('Number must be positive');
  if (typeof num !== 'number') throw new Error('Number must be a number');
  return num % 2 === 0;
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error('Division by zero');
  }
  return dividend / divisor;
}

// https://leetcode.com/problems/two-sum/description/
export function twoSumProblem(numbers: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(numbers[i], i);
  }
  throw new Error('No two sum solution');
}

// https://leetcode.com/problems/palindrome-number/
export function isPalindrome(number: number): boolean {
  if (number < 0) {
    return false; // Negative numbers cannot be palindromes
  }
  const originalString: string = String(number);
  const reversedString: string = originalString.split('').reverse().join('');
  return originalString === reversedString;
}
