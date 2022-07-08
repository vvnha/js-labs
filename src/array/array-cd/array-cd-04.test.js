import { insert, insertv2 } from './array-cd-04';

describe('insert()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(insert(item, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(insert([], item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(insert([], 3)).toEqual([3]);
    expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
  });
});

describe('insertv2()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(insertv2(item, 0)).toEqual([]);
    });
  });

  it('should return [] when param is not a number', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(insertv2([], item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(insertv2([], 3)).toEqual([3]);
    expect(insertv2([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
    expect(insertv2([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
  });
});
