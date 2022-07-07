import powersOfTwo from './PowersOfTwo';

describe('Codewars - PowersOfTwo ', () => {
  it('should return an array of powers of 2', () => {
    expect(powersOfTwo(0)).toEqual([1]);
    expect(powersOfTwo(1)).toEqual([1, 2]);
    expect(powersOfTwo(2)).toEqual([1, 2, 4]);
    expect(powersOfTwo(3)).toEqual([1, 2, 4, 8]);
    expect(powersOfTwo(4)).toEqual([1, 2, 4, 8, 16]);
    expect(powersOfTwo(5)).toEqual([1, 2, 4, 8, 16, 32]);
  });
});
