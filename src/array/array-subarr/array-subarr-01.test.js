import { findAllIncreasingSubArr } from './array-subarr-01';
describe('findAllIncreasingSubArr()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findAllIncreasingSubArr(item)).toEqual([]);
    });
  });

  it('should return new array with the subbar increasing arr', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);
  });
});
