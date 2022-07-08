import { findNumbers, findNumbersv2 } from './array-filter-02';

describe('findNumbers()', () => {
  it('should return false when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findNumbers(item)).toEqual([]);
    });
  });

  it('should return when list is smaller than 1 item', () => {
    expect(findNumbers([1])).toEqual([]);
  });

  it('should return when list is smaller than 1 item', () => {
    expect(findNumbers([2, 5, 3, 7])).toEqual([5, 7]);
  });
});

describe('findNumbersv2()', () => {
  it('should return false when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findNumbersv2(item)).toEqual([]);
    });
  });

  it('should return when list is smaller than 1 item', () => {
    expect(findNumbersv2([1])).toEqual([]);
  });

  it('should return when list is smaller than 1 item', () => {
    expect(findNumbersv2([2, 5, 3, 7])).toEqual([5, 7]);
  });
});
