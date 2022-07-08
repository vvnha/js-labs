import { sumDigits, getFullName } from './06-11-main';

describe('sumDigits', () => {
  test('should return -1 when length of n !== 3', () => {
    expect(sumDigits(1234)).toBe(-1);
  });

  test('should return number when length of n === 3', () => {
    expect(sumDigits(235)).toBe(10);
  });
});

describe('getFullName()', () => {
  test('should return first name when params just only firstname or last name is empty', () => {
    expect(getFullName('Newt')).toBe('Newt');
    expect(getFullName('Newt', '')).toBe('Newt');
  });

  test('should return last name when first name is empty', () => {
    expect(getFullName('', 'Vo')).toBe('Vo');
  });

  test('should return full name when first name has so many spaces', () => {
    expect(getFullName('   Newt', 'Vo')).toBe('Newt Vo');
  });

  test('should return full name when last name has so many spaces', () => {
    expect(getFullName('Newt', 'Vo   ')).toBe('Newt Vo');
  });

  test('should return full name when first name has first character is lowercase', () => {
    expect(getFullName('nEWt', 'Vo')).toBe('Newt Vo');
  });

  test('should return full name when last name has first character is lowercase', () => {
    expect(getFullName('newt', 'vO')).toBe('Newt Vo');
  });
});
