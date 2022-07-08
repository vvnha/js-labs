import { isEvenNumber, isPerfectSquare } from './06-09-main';

describe('isEvenNumber()', () => {
  test('should return true when n is even', () => {
    expect(isEvenNumber(4)).toBe(true);
  });

  test('should return false when n is not even', () => {
    expect(isEvenNumber(5)).toBe(false);
  });
});

describe('isPerfectSquare()', () => {
  test('should return true when n < 0', () => {
    expect(isPerfectSquare(-1)).toBe(false);
  });

  test('should return true when square sqrt(n) === n ', () => {
    expect(isPerfectSquare(4)).toBe(true);
  });

  test('should return true when square sqrt(n) !== n ', () => {
    expect(isPerfectSquare(3)).toBe(false);
  });
});
