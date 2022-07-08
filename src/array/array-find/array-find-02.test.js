import { findLongestWord, findLongestWordv2 } from './array-find-02';

describe('findLongestWord()', () => {
  it('should return empty when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLongestWord(item)).toBe('');
    });
  });

  it('should return empty when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findLongestWord(item)).toBe('');
    });
  });

  it("should return super when list doesn't have any word with height <5  without having space", () => {
    expect(findLongestWord(['super', 'cool'])).toBe('super');
  });

  it('should return super when listhave any word with height <5 without having space', () => {
    expect(findLongestWord(['super', 'super cool'])).toBe('super');
  });
});

describe('findLongestWordv2()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLongestWordv2(item)).toBe('');
    });
  });

  it('should return empty when list is empty array', () => {
    [[]].forEach((item) => {
      expect(findLongestWordv2(item)).toBe('');
    });
  });

  it("should return empty when list doesn't have any word with height <5  without having space", () => {
    expect(findLongestWordv2(['super', 'cool'])).toBe('super');
  });

  it('should return number when listhave any word with height <5  without having space', () => {
    expect(findLongestWordv2(['super', 'super cool'])).toBe('super');
  });
});
