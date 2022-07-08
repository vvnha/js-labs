import { findMostFrequentNumber } from './logic-04';

describe('findMostFrequentNumber()', () => {
  it('should return undefined when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMostFrequentNumber(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty array', () => {
    expect(findMostFrequentNumber([])).toBe(undefined);
  });

  it('should return statistics when list has number', () => {
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2, 3, 2])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 3, 2, 3, 4])).toBe(2);
  });
});
