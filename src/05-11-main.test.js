import { getErrorMessage, getTicketPrice } from './05-11-main';

describe('getErrorMessage', () => {
  test('should return some thing went wrong when code is invalid', () => {
    expect(getErrorMessage('E04')).toBe('Something went wrong');
  });

  test('should return Invalid username or password when code is E01', () => {
    expect(getErrorMessage('E01')).toBe('Invalid username or password');
  });

  test('should return Too many attempts when code is E02', () => {
    expect(getErrorMessage('E02')).toBe('Too many attempts');
  });

  test('should return Missing data or password when code is E01', () => {
    expect(getErrorMessage('E03')).toBe('Missing data');
  });
});
