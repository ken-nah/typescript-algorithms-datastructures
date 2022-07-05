import fibonacci from './fibonacci';

describe('Dynamic Programming - Fibonacci', () => {
  it('should return 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 13 for n = 7', () => {
    expect(fibonacci(7)).toBe(13);
  });

  it('should return 21 for n = 8', () => {
    expect(fibonacci(8)).toBe(21);
  });

  it('should return 12586269025 for n = 50', () => {
    expect(fibonacci(50)).toBe(12586269025);
  });
});
