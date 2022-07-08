import { findFirstPositiveEven, findFirstPositiveEvenv2 } from './array-find-03';

describe('findFirstPositiveEven', () => {
  it('should return empty when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findFirstPositiveEven(item)).toBe(undefined);
    });
  });

  it('should return empty when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findFirstPositiveEven(item)).toBe(undefined);
    });
  });

  it('should return empty when list doesnot even number', () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
  });

  it("should return undefined when list doesn't positive even  number", () => {
    expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
  });

  it('should return first  positive even  number when list has positive even  number', () => {
    expect(findFirstPositiveEven([1, 4, 5])).toBe(4);
  });
});

describe('findFirstPositiveEvenv2', () => {
  it('should return empty when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findFirstPositiveEvenv2(item)).toBe(undefined);
    });
  });

  it('should return empty when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findFirstPositiveEvenv2(item)).toBe(undefined);
    });
  });

  it("should return undefined when list doesn't positive even  number", () => {
    expect(findFirstPositiveEvenv2([1, 3, 5])).toBe(undefined);
  });

  it('should return first  positive even  number when list has positive even  number', () => {
    expect(findFirstPositiveEvenv2([1, 4, 5, 8])).toBe(4);
  });
});
