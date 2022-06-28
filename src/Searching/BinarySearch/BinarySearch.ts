/*
 *Given a sorted array of integers A and an integer B, find and return the index of the B in A.
 *For example, if A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and B = 5, return 4.
 *If B is not present in A, return -1.
 *Achieve this in O(log(N)) time and O(1) space.
 */

export default function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) return middle;
    else if (arr[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}
