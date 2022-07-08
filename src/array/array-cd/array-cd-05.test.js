import { removeDuplicatedNumbers, removeDuplicatedNumbersv2 } from './array-cd-05';

describe('removeDuplicatedNumbers()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(removeDuplicatedNumbers(item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('removeDuplicatedNumbersv2()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(removeDuplicatedNumbersv2(item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(removeDuplicatedNumbersv2([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbersv2([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
