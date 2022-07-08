import {
  hasOddNumberDivisibleBy3,
  hasOddNumberDivisibleBy3v2,
  hasOddNumberDivisibleBy3v3,
} from './array-check-02';

describe('hasOddNumberDivisibleBy3(', () => {
  it('should return false when numberList is empty', () => {
    expect(hasOddNumberDivisibleBy3([], 1)).toBe(false);
  });

  it('should return false when no odd number in list is divisible by 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 5, 7])).toBe(false);
  });

  it('should return true when minimum even number in list greater than the provided number', () => {
    expect(hasOddNumberDivisibleBy3([1, 6])).toBe(true);
  });
});

describe('hasOddNumberDivisibleBy3v2(', () => {
  it('should return false when numberList is empty', () => {
    expect(hasOddNumberDivisibleBy3v2([], 1)).toBe(false);
  });

  it('should return false when no odd number in list is divisible by 3', () => {
    expect(hasOddNumberDivisibleBy3v2([1, 5, 7])).toBe(false);
  });

  it('should return true when minimum even number in list greater than the provided number', () => {
    expect(hasOddNumberDivisibleBy3v2([1, 6])).toBe(true);
  });
});

describe('hasOddNumberDivisibleBy3v3(', () => {
  it('should return false when numberList is empty', () => {
    expect(hasOddNumberDivisibleBy3v3([], 1)).toBe(false);
  });

  it('should return false when no odd number in list is divisible by 3', () => {
    expect(hasOddNumberDivisibleBy3v3([1, 5, 7])).toBe(false);
  });

  it('should return true when minimum even number in list greater than the provided number', () => {
    expect(hasOddNumberDivisibleBy3v3([1, 6])).toBe(true);
  });
});
