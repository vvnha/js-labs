import { isSymetricNumber, isSymetricNumberv2 } from './number-07';

describe('isSymetricNumber()', () => {
  it('should return false when n < 1 or n > 1000000', () => {
    [0, 1, 1000001].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });

  it('should return false when n is not symetric number', () => {
    [10, 122, 345, 11221, 331].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(false);
    });
  });

  it('should return true when n is symetric number', () => {
    [121, 11, 12321].forEach((number) => {
      expect(isSymetricNumber(number)).toBe(true);
    });
  });
});

describe('isSymetricNumberv2()', () => {
  it('should return false when n < 1 or n > 1000000', () => {
    [0, 1, 1000001].forEach((number) => {
      expect(isSymetricNumberv2(number)).toBe(false);
    });
  });

  it('should return false when n is not symetric number', () => {
    [10, 122, 345, 11221, 331].forEach((number) => {
      expect(isSymetricNumberv2(number)).toBe(false);
    });
  });

  it('should return true when n is symetric number', () => {
    [121, 11, 12321].forEach((number) => {
      expect(isSymetricNumberv2(number)).toBe(true);
    });
  });
});
