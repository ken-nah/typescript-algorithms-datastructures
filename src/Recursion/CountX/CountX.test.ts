import countX from './CountX';

describe('Recursion - CountX', () => {
  it('should return the number of times the letter "x" occurs in the string', () => {
    expect(countX('xxhixx')).toBe(4);
    expect(countX('xaxb')).toBe(2);
    expect(countX('abc')).toBe(0);
  });
});
