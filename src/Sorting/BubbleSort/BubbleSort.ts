/*
 *Given an array of integers, sort the array in ascending order using bubble
 *sort algorithm.
 *For example bubbleSort([4,1,3,2]) should return [1,2,3,4].
 */

export default function bubbleSort(arr: number[]) {
  let sortedUntilIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i <= sortedUntilIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
    sortedUntilIndex -= 1;
  }

  return arr;
}
