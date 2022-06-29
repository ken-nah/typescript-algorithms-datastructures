/*
 *Let's write a function that takes a string and returns the number of
 *times the letter "x" occurs in the string.
 *Examples: countX('xxhixx') === 4, countX('xaxb') === 2, countX('abc') === 0
 *Assumption: We will only be given lowercase letters.
 */

export default function countX(word: string): number {
  if (word.length === 0) return 0; // base case
  if (word[0] === 'x') return 1 + countX(word.slice(1));
  return countX(word.slice(1));
}
