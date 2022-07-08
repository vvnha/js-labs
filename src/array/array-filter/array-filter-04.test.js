import { generatePrimeNumbers, generatePrimeNumbersv2 } from './array-filter-04';
describe('generatePrimeNumbers()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(generatePrimeNumbers(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});

describe('generatePrimeNumbersv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(generatePrimeNumbersv2(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(generatePrimeNumbersv2(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbersv2(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
