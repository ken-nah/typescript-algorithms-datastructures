import sumArray from './ArraySum';

describe('Recursion - ArraySum', () => {
  it('should return the sum of all numbers in an array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumArray([16, 4, 3, 2, 1])).toBe(26);
  });
});
