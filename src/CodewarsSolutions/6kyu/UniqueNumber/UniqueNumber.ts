/*
 * There is an array with some dict. All dict are equal except for one.
 * Try to find it!
 * It’s guaranteed that array contains at least 3 dict.
 * Example:
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) == 2
 * findUniq([ 0, 0, 0.2, 0, 0 ]) == 0.2
 * The tests contain some very huge arrays, so think about performance.
 */

export default function findUniq(arr: number[]) {
  let [first, second, third] = arr;
  if (first !== second && first !== third) return first;
  for (let num of arr) {
    if (num !== first) return num;
  }
}
