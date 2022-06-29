/*
 *Write a function that takes a string & returns a new string with the
 *reversed order of characters.
 *Examples: reverseString('hello') === 'olleh', reverseString('world') === 'dlrow'
 *Solve this challenge using recursion.
 */

export default function reverseString(word: string): string {
  if (word.length === 1) return word[0];
  return reverseString(word.slice(1)) + word[0];
}
