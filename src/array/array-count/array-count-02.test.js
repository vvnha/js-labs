import { countNumbers, countNumbersv2 } from './array-count-02';

describe('countNumbers()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countNumbers(item)).toEqual(-1);
    });
  });

  it('should return the number count when list has numbers which is smaller than prev number', () => {
    expect(countNumbers([1, 2, 3])).toBe(0);
    expect(countNumbers([1, 2, 3, 10, 9, 8])).toBe(2);
  });
});

describe('countNumbersv2()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countNumbersv2(item)).toEqual(-1);
    });
  });

  it('should return the number count when list has numbers which is smaller than prev number', () => {
    expect(countNumbersv2([1, 2, 3])).toBe(0);
    expect(countNumbersv2([1, 2, 3, 10, 9, 8])).toBe(2);
  });
});
