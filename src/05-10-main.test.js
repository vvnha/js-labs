import { classifyStudent } from './05-10-main';

describe('classifyStudent()', () => {
  test('should return invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudent(-1);

    expect(value).toBe('Invalid mark');
  });

  test('should return invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudent(11);

    expect(value).toBe('Invalid mark');
  });

  test('should return Excellence when pass n in [9, 10]', () => {
    expect(classifyStudent(9)).toBe('Excellence');
    expect(classifyStudent(10)).toBe('Excellence');
  });

  test('should return Good when pass n in [7, 8]', () => {
    [7, 8].forEach((n) => {
      expect(classifyStudent(n)).toBe('Good');
    });
  });
});
