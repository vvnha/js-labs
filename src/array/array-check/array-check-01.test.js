import { hasEvenNumberGreaterThanN, hasEvenNumberGreaterThanNv2 } from './array-check-01';

describe('hasEvenNumberGreaterThanN(', () => {
  it('should return false when numberList is empty', () => {
    expect(hasEvenNumberGreaterThanN([], 1)).toBe(false);
  });

  it('should return false when n is not number', () => {
    [undefined, [], {}, null].forEach((number) => {
      expect(hasEvenNumberGreaterThanN([1, 2, 3], number)).toBe(false);
    });
  });

  it('should return false when no even number in list greater than the provided number', () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4], 5)).toBe(false);
  });

  it('should return true when minimum even number in list greater than the provided number', () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)).toBe(true);
  });
});

describe('hasEvenNumberGreaterThanNv2(', () => {
  it('should return false when numberList is empty', () => {
    expect(hasEvenNumberGreaterThanNv2([], 1)).toBe(false);
  });

  it('should return false when n is not number', () => {
    [undefined, [], {}, null].forEach((number) => {
      expect(hasEvenNumberGreaterThanNv2([1, 2, 3], number)).toBe(false);
    });
  });

  it('should return false when no even number in list greater than the provided number', () => {
    expect(hasEvenNumberGreaterThanNv2([2, 3, 4], 5)).toBe(false);
  });

  it('should return true when minimum even number in list greater than the provided number', () => {
    expect(hasEvenNumberGreaterThanNv2([2, 3, 4, 6], 5)).toBe(true);
  });
});
