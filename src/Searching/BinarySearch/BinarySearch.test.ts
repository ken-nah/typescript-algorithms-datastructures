import binarySearch from './BinarySearch';

describe('Searching - BinarySearch', () => {
  it('should return the index of the target in the array', () => {
    expect(binarySearch([4, 9, 10, 15, 19, 28, 30, 40, 50, 60], 40)).toBe(7);
    expect(binarySearch([3, 12, 17, 22], 3)).toBe(0);
    expect(binarySearch([3, 12, 17, 22], 12)).toBe(1);
  });

  it('should return -1 if the target is not in the array', () => {
    expect(binarySearch([3, 12, 17, 22], 4)).toBe(-1);
    expect(binarySearch([1, 4, 5, 6, 7, 8, 9, 10], 2)).toBe(-1);
  });
});
