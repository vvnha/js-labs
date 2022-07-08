import { calcAreaOfRetangcle } from './06-08-main';

describe('calcAreaOfRetangcle()', () => {
  test('should return -1 when a < 0', () => {
    expect(calcAreaOfRetangcle(-2, 2)).toBe(-1);
  });

  test('should return -1 when b < 0', () => {
    expect(calcAreaOfRetangcle(2, -2)).toBe(-1);
  });

  test('should return a * b when a > 0 && b > 0', () => {
    expect(calcAreaOfRetangcle(2, 2)).toBe(4);
  });
});
