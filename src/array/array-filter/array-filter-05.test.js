import { findAllNumbers, findAllNumbersv2 } from './array-filter-05';
describe('findAllNumbers()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllNumbers(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllNumbers([1, 3, 5])).toEqual([]);
    expect(findAllNumbers([1, 2, 5])).toEqual([]);
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]);
  });
});

describe('findAllNumbersv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllNumbersv2(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllNumbersv2([1, 3, 5])).toEqual([]);
    expect(findAllNumbersv2([1, 2, 5])).toEqual([]);
    expect(findAllNumbersv2([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]);
  });
});
