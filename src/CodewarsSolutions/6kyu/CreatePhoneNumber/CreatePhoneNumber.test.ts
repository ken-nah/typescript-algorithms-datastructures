import createPhoneNumber from './CreatePhoneNumber';

describe('Codewars (7kyu) - Create Phone Number', () => {
  it('should return the correct format for the given numbers', () => {
    const setOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const setTwo = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const setThree = [3, 4, 5, 6, 7, 8, 9, 0, 1, 2];

    expect(createPhoneNumber(setOne)).toBe('(123) 456-7890');
    expect(createPhoneNumber(setTwo)).toBe('(111) 111-1111');
    expect(createPhoneNumber(setThree)).toBe('(345) 678-9012');
  });
});
