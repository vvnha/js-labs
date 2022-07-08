import { isPerfectSquare } from './number-05';

describe('isPerfectSquare()', () => {
  it('should return false when n <= 0 && n >= 100000', () => {
    [-1, 0, 100000, 100001].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });

  it('should return false when n is not perfect square', () => {
    [3, 8, 6, 10].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(false);
    });
  });

  it('should return true when n is perfect square', () => {
    [4, 9, 16, 49].forEach((number) => {
      expect(isPerfectSquare(number)).toBe(true);
    });
  });
});
