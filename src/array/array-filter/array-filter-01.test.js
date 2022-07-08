import { generateNumberInRange, generateNumberInRangev2 } from './array-filter-01';

describe('generateNumberInRange()', () => {
  it('should return empty array when a > b', () => {
    expect(generateNumberInRange(7, 5)).toEqual([]);
  });

  it('should return empty array when a or b is undefined', () => {
    expect(generateNumberInRange(7)).toEqual([]);
  });

  it('should return array when a < b', () => {
    expect(generateNumberInRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRange(5, 7)).toEqual([5, 6, 7]);
  });
});

describe('generateNumberInRangev2()', () => {
  it('should return empty array when a > b', () => {
    expect(generateNumberInRangev2(7, 5)).toEqual([]);
  });

  it('should return empty array when a or b is undefined', () => {
    expect(generateNumberInRangev2(7)).toEqual([]);
  });

  it('should return array when a < b', () => {
    expect(generateNumberInRangev2(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generateNumberInRangev2(5, 7)).toEqual([5, 6, 7]);
  });
});
