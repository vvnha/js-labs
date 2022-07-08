import { findSecondLargestNumber, findSecondLargestNumberv2 } from './array-find-05';

describe('findSecondLargestNumber()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findSecondLargestNumber(item)).toBe(undefined);
    });
  });

  it('should return undefined when list length is smaller than 2', () => {
    [[], [1]].forEach((item) => {
      expect(findSecondLargestNumber(item)).toBe(undefined);
    });
  });

  it('should return undefined when list length is smaller than 2 ', () => {
    expect(findSecondLargestNumber([1, 2])).toBe(1);
    expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
  });
});

describe('findSecondLargestNumberv2()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findSecondLargestNumberv2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list length is smaller than 2', () => {
    [[], [1]].forEach((item) => {
      expect(findSecondLargestNumberv2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list length is smaller than 2 ', () => {
    expect(findSecondLargestNumberv2([1, 2])).toBe(1);
    expect(findSecondLargestNumberv2([1, 2, 3, 4])).toBe(3);
  });
});
