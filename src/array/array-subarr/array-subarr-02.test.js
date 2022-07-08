import { findAllDecreasingSubArr } from './array-subarr-02';
describe('findAllDecreasingSubArr()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findAllDecreasingSubArr(item)).toEqual([]);
    });
  });

  it('should return empty array with no subbar increasing arr', () => {
    expect(findAllDecreasingSubArr([15, 10, 20])).toEqual([]);
  });

  it('should return new array with the subbar increasing arr', () => {
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]);
  });
});
