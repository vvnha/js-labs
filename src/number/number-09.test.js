import { hasTwoDigitsWithSum, hasTwoDigitsWithSumv2 } from './number-09';
describe('hasTwoDigitsWithSum', () => {
  it('should return false when n <= 0 or n >= 1000000', () => {
    [9, 10, 1000000, 1000001].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 0)).toBe(false);
    });
  });

  it('should return false when sum <= 9 or sum >= 19', () => {
    [9, 10, 19, 20].forEach((number) => {
      expect(hasTwoDigitsWithSum(0, number)).toBe(false);
    });
  });

  it('should return false when sum of n is not divided by 10', () => {
    [101].forEach((number) => {
      expect(hasTwoDigitsWithSum(number, 3)).toBe(false);
    });
  });

  it('should return false when sum of n is divided by 10', () => {
    [
      { num: 10, sum: 1 },
      { num: 11, sum: 2 },
    ].forEach(({ num, sum }) => {
      expect(hasTwoDigitsWithSum(num, sum)).toBe(true);
    });
  });
});

describe('hasTwoDigitsWithSumv2', () => {
  it('should return false when n <= 0 or n >= 1000000', () => {
    [9, 10, 1000000, 1000001].forEach((number) => {
      expect(hasTwoDigitsWithSumv2(number, 0)).toBe(false);
    });
  });

  it('should return false when sum <= 9 or sum >= 19', () => {
    [9, 10, 19, 20].forEach((number) => {
      expect(hasTwoDigitsWithSumv2(0, number)).toBe(false);
    });
  });

  it('should return false when sum of n is not divided by 10', () => {
    [101].forEach((number) => {
      expect(hasTwoDigitsWithSumv2(number, 3)).toBe(false);
    });
  });

  it('should return false when sum of n is divided by 10', () => {
    [
      { num: 10, sum: 1 },
      { num: 11, sum: 2 },
    ].forEach(({ num, sum }) => {
      expect(hasTwoDigitsWithSumv2(num, sum)).toBe(true);
    });
  });
});
