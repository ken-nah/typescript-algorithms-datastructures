/*
 * Digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n. If that value has more than one
 * digit, continue reducing in this way until a single-digit number is produced.
 * The input will be a non-negative integer.
 * Examples:
 * digital_root(16) => 1 + 6 = 7
 * digital_root(942) => 9 + 4 + 2 = 15  -->  1 + 5 = 6
 * digital_root(132189) => 1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 */

export default function digitalRoot(n: number): number {
  if (n < 10) return n;
  const result = n
    .toString()
    .split('')
    .reduce((a, b) => a + Number(b), 0);
  return digitalRoot(result);
}
