import { sumAllMinDigits, sumAllMinDigitsv2 } from './array-sum-03';

describe('sumAllMinDigits()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(sumAllMinDigits(item)).toEqual(0);
    });
  });

  it('should return sum of min number character in numberList', () => {
    expect(sumAllMinDigits([123])).toBe(1);
    expect(sumAllMinDigits([123, 532])).toBe(3);
  });
});

describe('sumAllMinDigitsv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(sumAllMinDigitsv2(item)).toEqual(0);
    });
  });

  it('should return sum of min number character in numberList', () => {
    expect(sumAllMinDigitsv2([123])).toBe(1);
    expect(sumAllMinDigitsv2([123, 532])).toBe(3);
  });
});
