import digitalRoot from './DigitalRoot';

describe('Codewars(6kyu) - Digital Root', () => {
  it('should return 7 for 16', () => {
    expect(digitalRoot(16)).toBe(7);
  });

  it('should return 6 for 942', () => {
    expect(digitalRoot(942)).toBe(6);
  });

  it('should return 6 for 132189', () => {
    expect(digitalRoot(132189)).toBe(6);
  });

  it('should return 2 for 493193', () => {
    expect(digitalRoot(493193)).toBe(2);
  });
});
