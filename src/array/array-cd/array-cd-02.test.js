import { remove, removev2 } from './array-cd-02';

describe('remove()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(remove(item, 0, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(remove([], item, 0)).toEqual([]);
    });
  });
  it('should return new array when param is not a number', () => {
    expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
    expect(remove([1, 2, 3], 0)).toEqual([]);
  });
});

describe('removev2()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(removev2(item, 0, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(removev2([], item, 0)).toEqual([]);
    });
  });
  it('should return new array when param is not a number', () => {
    expect(removev2([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(removev2([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(removev2([1, 2, 3], 1, 2)).toEqual([1]);
    expect(removev2([1, 2, 3], 0)).toEqual([]);
  });
});
