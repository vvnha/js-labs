import { hasTruthy, hasTruthyv2 } from './array-check-04';

describe('hasTruthy()', () => {
  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasTruthy(item)).toBe(false);
    });
  });

  it('should return false when arr is empty', () => {
    expect(hasTruthy([])).toBe(false);
  });

  it("should return false when arr doesn't has truthy value", () => {
    expect(hasTruthy([false, ''])).toBe(false);
  });

  it('should return true when arr has truthy value', () => {
    expect(hasTruthy([false, 123])).toBe(true);
  });
});

describe('hasTruthyv2()', () => {
  it('should return false when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasTruthyv2(item)).toBe(false);
    });
  });

  it('should return false when arr is empty', () => {
    expect(hasTruthyv2([])).toBe(false);
  });

  it("should return false when arr doesn't has truthy value", () => {
    expect(hasTruthyv2([false, ''])).toBe(false);
  });

  it('should return true when arr has truthy value', () => {
    expect(hasTruthyv2([false, 123])).toBe(true);
  });
});
