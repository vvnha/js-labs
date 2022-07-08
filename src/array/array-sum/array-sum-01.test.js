import { sumEvenNumbers, sumEvenNumbersv2 } from './array-sum-01';

describe('sumEvenNumbers()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(sumEvenNumbers(item)).toEqual(0);
    });
  });

  it('should return sum of even number in numberList', () => {
    expect(sumEvenNumbers([-4, 2, 8, 5])).toBe(6);
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(10);
  });
});

describe('sumEvenNumbersv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(sumEvenNumbersv2(item)).toEqual(0);
    });
  });

  it('should return sum of even number in numberList', () => {
    expect(sumEvenNumbersv2([-4, 2, 8, 5])).toBe(6);
    expect(sumEvenNumbersv2([2, 8, 5, 4])).toBe(10);
  });
});
