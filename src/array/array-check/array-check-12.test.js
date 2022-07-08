import { hasFibonaciNumber, hasFibonaciNumberv2 } from './array-check-12';

describe('hasFibonaciNumber()', () => {
  it('should return false when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasFibonaciNumber(item)).toBe(false);
    });
  });

  it('should return when list is smaller than 1 item', () => {
    expect(hasFibonaciNumber([])).toBe(false);
  });

  it("should return false when numberList doesn't have any fibonacci number", () => {
    expect(hasFibonaciNumber([[4, 6, 7]])).toBe(false);
  });

  it('should return true when numberList has any fibonacci number', () => {
    [[89], [0, 1, 2, 3, 4, 5]].forEach((numberList) => {
      expect(hasFibonaciNumber(numberList)).toBe(true);
    });
  });
});

describe('hasFibonaciNumberv2()', () => {
  it('should return false when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasFibonaciNumberv2(item)).toBe(false);
    });
  });

  it('should return when list is smaller than 1 item', () => {
    expect(hasFibonaciNumberv2([])).toBe(false);
  });

  it("should return false when numberList doesn't have any fibonacci number", () => {
    expect(hasFibonaciNumberv2([[4, 6, 7]])).toBe(false);
  });

  it('should return true when numberList has any fibonacci number', () => {
    [[89], [0, 1, 2, 3, 4, 5]].forEach((numberList) => {
      expect(hasFibonaciNumberv2(numberList)).toBe(true);
    });
  });
});
