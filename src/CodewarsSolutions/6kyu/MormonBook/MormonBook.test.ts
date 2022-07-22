import mormons from './MormonBook';

describe('Codewars (6kyu) - The Book of Mormon', () => {
  it('should return 0 for starting_number = 10, reach = 3, target = 9', () => {
    expect(mormons(10, 3, 9)).toBe(0);
  });

  it('should return 1 for starting_number = 40, reach = 2, target = 120', () => {
    expect(mormons(40, 2, 120)).toBe(1);
  });

  it('should return 12 for starting_number = 20000, reach = 2, target = 7000000000', () => {
    expect(mormons(20000, 2, 7000000000)).toBe(12);
  });
});
