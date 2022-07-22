import replicate from './RecursiveReplication';

describe('Codewars (7kyu) - Recursive Replication', () => {
  it('should return an array containing repetitions of the number argument', () => {
    expect(replicate(3, 5)).toEqual([5, 5, 5]);
    expect(replicate(2, 1)).toEqual([1, 1]);
    expect(replicate(1, 0)).toEqual([0]);
    expect(replicate(0, 1)).toEqual([]);
    expect(replicate(-1, 1)).toEqual([]);
    expect(replicate(8, 0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
