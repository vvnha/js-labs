import { hasFalsy, hasFalsyv2 } from './array-check-05';

describe('hasFalsy()', () => {
  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasFalsy(item)).toBe(false);
    });
  });

  it('should return false when arr is empty', () => {
    expect(hasFalsy([])).toBe(false);
  });

  it("should return false when arr doesn't has falsy value", () => {
    expect(hasFalsy(['east', 123])).toBe(false);
  });

  it('should return true when arr has falsy value', () => {
    expect(hasFalsy([false, 123])).toBe(true);
    expect(hasFalsy([false, ''])).toBe(true);
  });
});

describe('hasFalsyv2()', () => {
  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasFalsyv2(item)).toBe(false);
    });
  });

  it('should return false when arr is empty', () => {
    expect(hasFalsyv2([])).toBe(false);
  });

  it("should return false when arr doesn't has truthy value", () => {
    expect(hasFalsyv2([123, 'easy'])).toBe(false);
  });

  it('should return true when arr has truthy value', () => {
    expect(hasFalsyv2([false, 123])).toBe(true);
  });
});
