/*
 *Given an array of integers, return a new array with each value doubled.
 *For example, [1, 2, 3] --> [2, 4, 6]. Modification happens in-place.
 */

export default function doubleArray(arr: number[], index = 0): number[] {
  if (index >= arr.length) return arr;
  arr[index] *= 2;
  return doubleArray(arr, index + 1);
}
