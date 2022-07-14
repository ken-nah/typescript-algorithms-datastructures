import findUniq from './UniqueNumber';

describe('Codewars(6kyu) - Unique Number', () => {
  it('should return the unique number', () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toEqual(2);
    expect(findUniq([0, 0, 0.2, 0, 0])).toEqual(0.2);
    expect(findUniq([3, 10, 3, 3, 3])).toEqual(10);
  });
});
