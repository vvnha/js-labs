import { isIncreasingNumberList, isIncreasingNumberListv2 } from './array-check-09';

describe('isIncreasingNumberList()', () => {
  it('should return false when productList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isIncreasingNumberList(item)).toBe(false);
    });
  });

  it('should return false when prev item is greater or equal than next item', () => {
    expect(isIncreasingNumberList([1, 1])).toBe(false);
  });

  it('should return false when prev item is smaller than next item', () => {
    expect(isIncreasingNumberList([1, 2])).toBe(true);
  });
});

describe('isIncreasingNumberListv2()', () => {
  it('should return false when productList is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(isIncreasingNumberListv2(item)).toBe(false);
    });
  });

  it('should return false when prev item is greater or equal than next item', () => {
    expect(isIncreasingNumberListv2([1, 1])).toBe(false);
  });

  it('should return false when prev item is smaller than next item', () => {
    expect(isIncreasingNumberListv2([1, 2])).toBe(true);
  });
});
