/*
 *Given an array of integers, return the sum of all the elements
 *in the array. For example, sumArray([1, 2, 3, 4, 5]) should return 15
 *Use recursion to solve this problem.
 */

export default function sumArray(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  return arr[0] + sumArray(arr.slice(1));
}
