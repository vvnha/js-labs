import { isPrime } from './number-04';

describe('isPrime', () => {
  it('should return n <= 0 or n >= 100000', () => {
    [0, -1, 100000, 100001].forEach((number) => {
      expect(isPrime(number)).toBe(false);
    });
  });

  it('should return false when n is not prime', () => {
    [4, 6, 9].forEach((number) => {
      expect(isPrime(number)).toBe(false);
    });
  });

  it('should return true when n is  prime', () => {
    [2, 5, 11].forEach((number) => {
      expect(isPrime(number)).toBe(true);
    });
  });
});
