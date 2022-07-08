import { countPositiveEvenNumbers, countPositiveEvenNumbersv2 } from './array-count-01';

describe('countPositiveEvenNumbers()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countPositiveEvenNumbers(item)).toEqual(-1);
    });
  });

  it('should return the number count when list has positive even numbers', () => {
    expect(countPositiveEvenNumbers([-2, -1])).toBe(0);
    expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toBe(2);
  });
});

describe('countPositiveEvenNumbersv2()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countPositiveEvenNumbersv2(item)).toEqual(-1);
    });
  });

  it('should return the number count when list has positive even numbers', () => {
    expect(countPositiveEvenNumbersv2([-2, -1])).toBe(0);
    expect(countPositiveEvenNumbersv2([-2, -1, 1, 2, 4])).toBe(2);
  });
});
