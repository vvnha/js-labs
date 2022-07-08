import { findMaxSumArray } from './array-subarr-05';

describe('findMaxSumArray()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMaxSumArray(item)).toEqual(0);
    });
  });

  it('should return 0 when list is empty array', () => {
    expect(findMaxSumArray([])).toEqual(0);
  });

  it('should return max sum when list has increasing sub array', () => {
    expect(findMaxSumArray([1, 2, 3])).toEqual(6);
    expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toEqual(30);
  });
});
