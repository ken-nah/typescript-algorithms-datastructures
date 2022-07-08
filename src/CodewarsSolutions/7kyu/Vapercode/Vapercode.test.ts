import { vaporcode } from './Vapercode';

describe('Codewars - V  A  P  O  R  C  O  D  E', () => {
  it("should convert 'Lets go to the movies' to 'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S'", () => {
    expect(vaporcode('Lets go to the movies')).toBe(
      'L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S'
    );
  });
  it("should convert 'Why isn't my code working?' to 'W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G'", () => {
    expect(vaporcode('Why isnt my code working')).toBe(
      'W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G'
    );
  });
});
