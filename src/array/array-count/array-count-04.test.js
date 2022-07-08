import { countUniqueNumbers, countUniqueNumbersv2 } from './array-count-04';

describe('countUniqueNumbers()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countUniqueNumbers(item)).toEqual(-1);
    });
  });

  it('should return the number count when list has word length equal or greater than n', () => {
    expect(countUniqueNumbers([1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
    expect(countUniqueNumbers([1, 2, 2, 3, 1])).toBe(3);
  });
});

describe('countUniqueNumbersv2()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countUniqueNumbersv2(item)).toEqual(-1);
    });
  });

  it('should return the number count when list has word length equal or greater than n', () => {
    expect(countUniqueNumbersv2([1, 1, 1])).toBe(1);
    expect(countUniqueNumbersv2([1, 2, 3])).toBe(3);
    expect(countUniqueNumbersv2([1, 2, 2, 3, 1])).toBe(3);
  });
});
