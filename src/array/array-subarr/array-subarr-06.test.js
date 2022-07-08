import { findMaxSumArray } from './array-subarr-06';

describe('findMaxSumArray()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMaxSumArray(item)).toEqual([]);
    });
  });

  it('should return [] when list is empty array', () => {
    expect(findMaxSumArray([])).toEqual([]);
  });

  it('should return max sum when list has increasing sub array', () => {
    expect(findMaxSumArray([1, 2, 3, 0, 2, 4])).toEqual([1, 2, 3]);
    expect(findMaxSumArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
