import { isDivisibleBy10, isDivisibleBy10v2 } from './number-08';
describe('isDivisibleBy10', () => {
  it('should return false when n <= 0 or n >= 1000000', () => {
    [-1, 0, 1000000, 1000001].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(false);
    });
  });

  it('should return false when sum of n is not divided by 10', () => {
    [123, 324, 112, 456].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(false);
    });
  });

  it('should return false when sum of n is divided by 10', () => {
    [1234, 55127, 1199, 123455].forEach((number) => {
      expect(isDivisibleBy10(number)).toBe(true);
    });
  });
});

describe('isDivisibleBy10v2', () => {
  it('should return false when n <= 0 or n >= 1000000', () => {
    [-1, 0, 1000000, 1000001].forEach((number) => {
      expect(isDivisibleBy10v2(number)).toBe(false);
    });
  });

  it('should return false when sum of n is not divided by 10', () => {
    [123, 324, 112, 456].forEach((number) => {
      expect(isDivisibleBy10v2(number)).toBe(false);
    });
  });

  it('should return false when sum of n is divided by 10', () => {
    [1234, 55127, 1199, 123455].forEach((number) => {
      expect(isDivisibleBy10v2(number)).toBe(true);
    });
  });
});
