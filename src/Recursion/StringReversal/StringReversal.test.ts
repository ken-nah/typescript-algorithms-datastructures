import reverseString from './StringReversal';

describe('Recursion - StringReversal', () => {
  it('should return the reversed string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });
});
