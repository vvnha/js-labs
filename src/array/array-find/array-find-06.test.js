import { findLastPerfectSquare, findLastPerfectSquarev2 } from './array-find-06';

describe('findLastPerfectSquare()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastPerfectSquare(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findLastPerfectSquare(item)).toBe(undefined);
    });
  });

  it('should return undefined when list doesnot have perfect square', () => {
    expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
  });

  it('should return number when list has perfect square', () => {
    expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
  });
});
describe('findLastPerfectSquarev2()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastPerfectSquarev2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findLastPerfectSquarev2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list doesnot have perfect square', () => {
    expect(findLastPerfectSquarev2([2, 3, 5])).toBe(undefined);
  });

  it('should return number when list has perfect square', () => {
    expect(findLastPerfectSquarev2([4, 16, 25, 36, 40])).toBe(36);
  });
});
