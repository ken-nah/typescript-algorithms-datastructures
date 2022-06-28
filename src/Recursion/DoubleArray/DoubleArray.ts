/*
 *Given an array of integers, return a new array with each value doubled.
 *For example, doubleArray([1, 2, 3]) should return [2, 4, 6]
 *You cannot use any of the built-in array functions or loops in your solution.
 */

export default function doubleArray(arr: number[], index = 0): number[] {
  if (index >= arr.length) return arr;
  arr[index] *= 2;
  return doubleArray(arr, index + 1);
}
