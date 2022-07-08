import { isIncreasingNumberByDistance, isIncreasingNumberByDistancev2 } from './number-03';

describe('isIncreasingNumberByDistance', () => {
  it('should return false when n < 0 and n > 1000000', () => {
    [-1, 10000001].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 2)).toBe(false);
    });
  });

  it('should return false when x < 0 and x > 5', () => {
    [-1, 6].forEach((number) => {
      expect(isIncreasingNumberByDistance(123, number)).toBe(false);
    });
  });

  it('should return false when n is not increasing number by distance x', () => {
    [11, 124, 135].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 1)).toBe(false);
    });
  });

  it('should return true when n is increasing ', () => {
    [135, 246, 357].forEach((number) => {
      expect(isIncreasingNumberByDistance(number, 2)).toBe(true);
    });
  });
});

describe('isIncreasingNumberByDistancev2', () => {
  it('should return false when n < 0 and n > 1000000', () => {
    [-1, 10000001].forEach((number) => {
      expect(isIncreasingNumberByDistancev2(number, 2)).toBe(false);
    });
  });

  it('should return false when x < 0 and x > 5', () => {
    [-1, 6].forEach((number) => {
      expect(isIncreasingNumberByDistancev2(123, number)).toBe(false);
    });
  });

  it('should return false when n is not increasing number by distance x', () => {
    [11, 124, 135].forEach((number) => {
      expect(isIncreasingNumberByDistancev2(number, 1)).toBe(false);
    });
  });

  it('should return true when n is increasing ', () => {
    [135, 246, 357].forEach((number) => {
      expect(isIncreasingNumberByDistancev2(number, 2)).toBe(true);
    });
  });
});
