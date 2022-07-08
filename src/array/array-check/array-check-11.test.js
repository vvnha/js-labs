import { isSymmetricList } from './array-check-11';

describe('isSymmetricList()', () => {
  it('should return false when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(isSymmetricList(item)).toBe(false);
    });
  });

  it('should return when list is smaller than 1 item', () => {
    expect(isSymmetricList([])).toBe(false);
  });

  it('should return false when item are not the same in the right and left side', () => {
    expect(isSymmetricList([1, 2, 3])).toBe(false);
  });

  it('should return true when item are the same in the right and left side', () => {
    expect(isSymmetricList([1, 2, 2, 1])).toBe(true);
  });
});
