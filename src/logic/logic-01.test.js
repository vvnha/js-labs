import { findSumPair } from './logic-01';

describe('findSumPair()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findSumPair(item, 5)).toEqual([]);
    });
  });

  it('should return [] when targetSum is not a number', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findSumPair(item)).toEqual([]);
    });
  });

  it('should return [] when list is empty array', () => {
    expect(findSumPair([], 10)).toEqual([]);
  });

  it('should return [] when list has sum equal provided number', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
  });

  it('should return max sum when list has increasing sub array', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
  });
});
