import { generateFibonaci, generateFibonaciv2 } from './array-filter-03';
describe('generateFibonaci()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(generateFibonaci(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(generateFibonaci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(generateFibonaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});

describe('generateFibonaciv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(generateFibonaciv2(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(generateFibonaciv2(5)).toEqual([0, 1, 1, 2, 3]);
    expect(generateFibonaciv2(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
