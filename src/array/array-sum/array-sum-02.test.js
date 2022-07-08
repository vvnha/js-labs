import { sumAllDigits, sumAllDigitsv2 } from './array-sum-02';

describe('sumAllDigits()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(sumAllDigits(item)).toEqual(0);
    });
  });

  it('should return sum of number character in numberList', () => {
    expect(sumAllDigits([4])).toBe(4);
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([1234, 55])).toBe(20);
  });
});

describe('sumAllDigitsv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(sumAllDigitsv2(item)).toEqual(0);
    });
  });

  it('should return sum of number character in numberList', () => {
    expect(sumAllDigitsv2([4])).toBe(4);
    expect(sumAllDigitsv2([123, 4])).toBe(10);
    expect(sumAllDigitsv2([1234, 55])).toBe(20);
  });
});
