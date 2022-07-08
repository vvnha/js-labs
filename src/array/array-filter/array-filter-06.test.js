import { findAllNumbers, findAllNumbersv2 } from './array-filter-06';
describe('findAllNumbers()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllNumbers(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllNumbers([1, 5, 6])).toEqual([1, 5]);
    expect(findAllNumbers([234, 421, 123])).toEqual([123]);
  });
});

describe('findAllNumbersv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllNumbersv2(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllNumbers([1, 5, 6])).toEqual([1, 5]);
    expect(findAllNumbers([234, 421, 123])).toEqual([123]);
  });
});
