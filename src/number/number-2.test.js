import { isDecreasingNumberv1 } from './number-02';

describe('isDecreasingNumber()', () => {
  it('should return false when n < 10', () => {
    Array.from({ length: 10 }, (_, index) => index).forEach((number) => {
      expect(isDecreasingNumberv1(number)).toBe(false);
    });
  });

  it('should return false when n is not decresing number', () => {
    [123, 231, 222, 333, 132, 2134, 73725].forEach((number) => {
      expect(isDecreasingNumberv1(number)).toBe(false);
    });
  });

  it('should return false when n is decresing number', () => {
    [321, 21, 7432, 8731].forEach((number) => {
      expect(isDecreasingNumberv1(number)).toBe(true);
    });
  });
});
