import { findFirstElement, findFirstElementv2 } from './09-09-main';

describe('findFirstElement()', () => {
  test('should return undefined when param is not array', () => {
    expect(findFirstElement(undefined)).toBe(undefined);
    expect(findFirstElement(null)).toBe(undefined);
    expect(findFirstElement({})).toBe(undefined);
    expect(findFirstElement(-1)).toBe(undefined);
    expect(findFirstElement('a')).toBe(undefined);
  });

  test('should return first even element when list has minimum count of even number', () => {
    expect(findFirstElement([1, 2, 3])).toBe(2);
  });
});

describe('findFirstElementv2()', () => {
  test('should return undefined when param is not array', () => {
    expect(findFirstElementv2(undefined, () => {})).toBe(undefined);
    expect(findFirstElementv2(null, () => {})).toBe(undefined);
    expect(findFirstElementv2({}, () => {})).toBe(undefined);
    expect(findFirstElementv2(-1, () => {})).toBe(undefined);
    expect(findFirstElementv2('a', () => {})).toBe(undefined);
  });

  test('should return undefined when callbackFn is not a function', () => {
    expect(findFirstElementv2([1, 2, 3], -1)).toBe(undefined);
  });

  test('should return first even element when list has minimum count of even number', () => {
    expect(findFirstElementv2([1, 2, 3], (number) => number % 2 === 0)).toBe(2);
  });
});
