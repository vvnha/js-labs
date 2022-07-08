import { isPerfectNumber } from './number-06';

describe('isPerfectNumber', () => {
  it('should return false when n <= 1 && n >= 1000', () => {
    [0, 1, 1000, 1001].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });

  it('should return false when n is not Perfect Number', () => {
    [5, 7, 11].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(false);
    });
  });

  it('should return true when n is Perfect Number', () => {
    [6, 28, 496].forEach((number) => {
      expect(isPerfectNumber(number)).toBe(true);
    });
  });
});
