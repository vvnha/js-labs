import { isDecreasingNumberList, isDecreasingNumberListv2 } from './array-check-10';

describe('isDecreasingNumberList()', () => {
  it('should return false when productList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isDecreasingNumberList(item)).toBe(false);
    });
  });

  it('should return false when prev item is greater or equal than next item', () => {
    expect(isDecreasingNumberList([1, 2])).toBe(false);
    expect(isDecreasingNumberList([1, 1])).toBe(false);
  });

  it('should return false when prev item is smaller than next item', () => {
    expect(isDecreasingNumberList([2, 1])).toBe(true);
  });
});

describe('isDecreasingNumberListv2()', () => {
  it('should return false when productList is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(isDecreasingNumberListv2(item)).toBe(false);
    });
  });

  it('should return false when prev item is greater or equal than next item', () => {
    expect(isDecreasingNumberList([1, 2])).toBe(false);
    expect(isDecreasingNumberList([1, 1])).toBe(false);
  });

  it('should return false when prev item is smaller than next item', () => {
    expect(isDecreasingNumberListv2([2, 1])).toBe(true);
  });
});
