import { reduce, findMaxReduce, transformNumbersV3, reducerV1 } from './09-14-main';

describe('reduce()', () => {
  test('should return error when param is not array', () => {
    expect(() => reduce(undefined, () => {}, 0)).toThrowError();
    expect(() => reduce(null, () => {}, 0)).toThrow(Error);
    expect(() => reduce({}, () => {}, 0)).toThrow(Error);
    expect(() => reduce(-1, () => {}, 0)).toThrow(Error);
    expect(() => reduce('a', () => {}, 0)).toThrow(Error);
  });

  test('should return error when array empty && initialValue is undefined', () => {
    expect(() => reduce([], () => {}, undefined)).toThrowError();
  });

  test('should return initialValue when array empty', () => {
    expect(reduce([], () => {}, 0)).toBe(0);
  });

  test('should return value when array has number', () => {
    expect(reduce([1, 2, 8], (sum, e) => sum + e, 10)).toBe(21);
  });
});

describe('findMaxReduce', () => {
  test('should return undefined when param is not array', () => {
    expect(findMaxReduce(undefined)).toBe(undefined);
    expect(findMaxReduce(null)).toBe(undefined);
  });

  test('should return undefined when arr length === 0', () => {
    expect(findMaxReduce([])).toBe(undefined);
  });

  test('should return max number', () => {
    expect(findMaxReduce([3, 8, 1])).toBe(8);
  });
});

describe('transformNumbersV3', () => {
  test('should return undefined when param is not array', () => {
    expect(transformNumbersV3(undefined)).toBe(undefined);
    expect(transformNumbersV3(null)).toBe(undefined);
  });

  test('should return array when arr length <= 1', () => {
    expect(transformNumbersV3([])).toEqual([]);
    expect(transformNumbersV3([1])).toEqual([1]);
  });

  test('should return transformed array', () => {
    expect(transformNumbersV3([3, 8, 2, 1])).toEqual([8, 5, 9, 2]);
  });
});
