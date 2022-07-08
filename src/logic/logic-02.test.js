import { findMissingNumber } from './logic-02';

describe('findMissingNumber()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMissingNumber(item, 5)).toBe(0);
    });
  });

  it('should return [] when n is not a number', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMissingNumber([1], item)).toBe(0);
    });
  });

  it('should return [] when n is smaller than 5', () => {
    [1, 2, 3, 4].forEach((item) => {
      expect(findMissingNumber([1], item)).toBe(0);
    });
  });

  it('should return missing number when list miss the number', () => {
    expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toBe(7);
    expect(findMissingNumber([5], 6)).toBe(6);
  });
});
