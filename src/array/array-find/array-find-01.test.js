import { findMinPositive, findMinPositivev2 } from './array-find-01';

describe('findMinPositive()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMinPositive(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findMinPositive(item)).toBe(undefined);
    });
  });

  it("should return undefined when list doesn't have any min positive number", () => {
    expect(findMinPositive([-1, -5])).toBe(undefined);
  });

  it('should return number when listhave any min positive number', () => {
    expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
  });
});

describe('findMinPositivev2()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findMinPositivev2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findMinPositivev2(item)).toBe(undefined);
    });
  });

  it("should return undefined when list doesn't have any min positive number", () => {
    expect(findMinPositivev2([-1, -5])).toBe(undefined);
  });

  it('should return number when listhave any min positive number', () => {
    expect(findMinPositivev2([-1, -5, 2, 6])).toBe(2);
  });
});
