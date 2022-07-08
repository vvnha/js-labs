import { countNumbersNotInB, countNumbersNotInBv2 } from './array-count-05';

describe('countNumbersNotInB()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countNumbersNotInB(item, item)).toEqual(-1);
    });
  });

  it('should return the number count when number appear in a, not in b', () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});

describe('countNumbersNotInBv2()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countNumbersNotInBv2(item, item)).toEqual(-1);
    });
  });

  it('should return the number count when number appear in a, not in b', () => {
    expect(countNumbersNotInBv2([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInBv2([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInBv2([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});
