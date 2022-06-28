import doubleArray from './DoubleArray';

describe('Recursion - DoubleArray', () => {
  it('should return an array with each value doubled', () => {
    const arr = [12, 7, 3, 5, 11, 8, 9];
    const result = doubleArray(arr);
    expect(result).toEqual([24, 14, 6, 10, 22, 16, 18]);
  });
});
