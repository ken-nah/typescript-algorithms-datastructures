import bubbleSort from './BubbleSort';

describe('Sorting - BubbleSort', () => {
  it('should return an array of sorted numbers', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([13, 32, 12, 5, 6])).toEqual([5, 6, 12, 13, 32]);
    expect(bubbleSort([100, -10, -100, -1, 0])).toEqual([-100, -10, -1, 0, 100]);
  });
});
