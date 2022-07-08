import { map } from './09-10-main';

describe('map()', () => {
  test('should return undefined when param is not array', () => {
    expect(map(undefined, () => {})).toBe(undefined);
    expect(map(null, () => {})).toBe(undefined);
    expect(map({}, () => {})).toBe(undefined);
    expect(map(-1, () => {})).toBe(undefined);
    expect(map('a', () => {})).toBe(undefined);
  });

  test('should return undefined when callbackFn is not a function', () => {
    expect(map([1, 2, 3], -1)).toBe(undefined);
  });

  test('should return new array', () => {
    expect(map([1, 2, 3], (number, i) => number * 2)).toEqual([2, 4, 6]);
  });
});
