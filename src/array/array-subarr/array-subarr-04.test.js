import { findAllPositiveEvenSubArr } from './array-subarr-04';

describe('findAllPositiveEvenSubArr()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findAllPositiveEvenSubArr(item)).toEqual([]);
    });
  });

  it('should return [] when list does not have positive even sub arr', () => {
    expect(findAllPositiveEvenSubArr([15, 11, 921])).toEqual([]);
  });

  it('should return new array with the subbar increasing arr', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);
  });
});
