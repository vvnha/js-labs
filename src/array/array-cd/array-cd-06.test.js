import { uniqueArray, uniqueArrayv2, uniqueArrayv3, uniqueArrayv4 } from './array-cd-06';

describe('uniqueArray()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(uniqueArray(item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(uniqueArray([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1])).toEqual([1]);
  });
});

describe('uniqueArrayv2()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(uniqueArrayv2(item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(uniqueArrayv2([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueArrayv2([1, 1, 1, 1])).toEqual([1]);
  });
});

describe('uniqueArrayv3()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(uniqueArrayv3(item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(uniqueArrayv3([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueArrayv3([1, 1, 1, 1])).toEqual([1]);
  });
});

describe('uniqueArrayv4()', () => {
  it('should return [] when arr is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(uniqueArrayv4(item)).toEqual([]);
    });
  });

  it('should return new array when newNumber is available', () => {
    expect(uniqueArrayv4([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
    expect(uniqueArrayv4([1, 1, 1, 1])).toEqual([1]);
  });
});
