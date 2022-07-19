/*
 * Write a function, persistence, that takes in a positive parameter num
 * and returns its multiplicative persistence, which is the number of times you
 * must multiply the digits in num until you reach a single digit.
 * Examples:
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 * persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
 * persistence(4) === 0 // because 4 is already a one-digit number
 */

export default function persistenceBugger(num: number): number {
  if (num < 10) return 0;
  const formattedNum = num.toString().split('');
  const numProduct = formattedNum.reduce((a, b) => a * Number(b), 1);
  return 1 + persistenceBugger(numProduct);
}
