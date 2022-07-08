import { findLastNegativeOdd, findLastNegativeOddv2 } from './array-find-04';

describe('findLastNegativeOdd', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastNegativeOdd(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findLastNegativeOdd(item)).toBe(undefined);
    });
  });

  it('should return empty when list doesnot even number', () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
  });

  it("should return undefined when list doesn't negative odd number", () => {
    expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
  });

  it('should return first  negative odd number when list has negative odd number', () => {
    expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
  });
});

describe('findLastNegativeOddv2', () => {
  it('should return empty when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastNegativeOddv2(item)).toBe(undefined);
    });
  });

  it('should return empty when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findLastNegativeOddv2(item)).toBe(undefined);
    });
  });

  it("should return undefined when list doesn't negative odd number", () => {
    expect(findLastNegativeOddv2([1, 3, 5])).toBe(undefined);
  });

  it('should return first  negative odd number when list has negative odd number', () => {
    expect(findLastNegativeOddv2([-1, -3, -5])).toBe(-5);
  });
});
