import { filter } from './09-11-main';

describe('filter()', () => {
  test('should return undefined when param is not array', () => {
    expect(filter(undefined, () => {})).toBe(undefined);
    expect(filter(null, () => {})).toBe(undefined);
    expect(filter({}, () => {})).toBe(undefined);
    expect(filter(-1, () => {})).toBe(undefined);
    expect(filter('a', () => {})).toBe(undefined);
  });

  test('should return undefined when callbackFn is not a function', () => {
    expect(filter([1, 2, 3], -1)).toBe(undefined);
  });

  test('should return new array', () => {
    expect(filter([1, 2, 3], (number, i) => number % 2 === 0)).toEqual([2]);
  });
});
