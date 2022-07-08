import { findMaxEven, convertHoursToSecond } from './06-10-main';

describe('findMaxEven()', () => {
  test('should return max (a) even number in [9, 8, 6]', () => {
    expect(findMaxEven(10, 8, 6)).toBe(10);
  });

  test('should return max (b) even number in [3, 8, 6]', () => {
    expect(findMaxEven(3, 8, 6)).toBe(8);
  });

  test('should return max (c) even number in [3, 8, 11]', () => {
    expect(findMaxEven(3, 8, 10)).toBe(10);
  });
});

describe('convertHoursToSecond()', () => {
  test('should return 0 when hours <= 0', () => {
    expect(convertHoursToSecond(-1)).toBe(0);
    expect(convertHoursToSecond(0)).toBe(0);
  });

  test('should return seconds when hours > 0', () => {
    expect(convertHoursToSecond(3)).toBe(3 * 3600);
  });
});
