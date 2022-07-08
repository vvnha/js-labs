import { isSubArray, isSubArrayv2 } from './array-subarr-03';
describe('isSubArray()', () => {
  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isSubArray(item, [])).toEqual(false);
    });
  });

  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isSubArray([], item)).toEqual(false);
    });
  });

  it('should return false when a is not a sub  array', () => {
    expect(isSubArray([1, 2], [2, 3, 4])).toBe(false);
  });

  it('should return new array with the subbar increasing arr', () => {
    expect(isSubArray([], [1])).toBe(true);
    expect(isSubArray([1], [1, 2])).toBe(true);
    expect(isSubArray([1, 2], [4, 10, 1, 2, 3])).toBe(true);
  });
});

describe('isSubArrayv2()', () => {
  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isSubArrayv2(item, [])).toEqual(false);
    });
  });

  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isSubArrayv2([], item)).toEqual(false);
    });
  });

  it('should return false when a is not a sub  array', () => {
    expect(isSubArrayv2([1, 2], [2, 3, 4])).toBe(false);
  });

  it('should return new array with the subbar increasing arr', () => {
    expect(isSubArrayv2([], [1])).toBe(true);
    expect(isSubArrayv2([1], [1, 2])).toBe(true);
    expect(isSubArrayv2([1, 2], [4, 10, 1, 2, 3])).toBe(true);
  });
});
