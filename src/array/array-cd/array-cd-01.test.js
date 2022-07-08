import { insert, insertv2 } from './array-cd-01';

describe('insert()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(insert(item, 0, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(insert([], item, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(insert([], 0, item)).toEqual([]);
    });
  });

  it('should return new array when newItem and k is available', () => {
    expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
    expect(insert([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });
});

describe('insertv2()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(insertv2(item, 0, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(insertv2([], item, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(insertv2([], 0, item)).toEqual([]);
    });
  });

  it('should return new array when newItem and k is available', () => {
    expect(insertv2([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
    expect(insertv2([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
    expect(insertv2([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });
});
