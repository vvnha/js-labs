import { classifyStudentv2, classifyStudentv1, temp } from './05-09-main';

describe('classifyStudentv2()', () => {
  test('should return invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudentv2(-1);

    expect(value).toBe('Invalid mark');
  });

  test('should return invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudentv2(11);

    expect(value).toBe('Invalid mark');
  });

  test('should return Excellence when pass n in [9, 10]', () => {
    expect(classifyStudentv2(9)).toBe('Excellence');
    expect(classifyStudentv2(10)).toBe('Excellence');
  });

  test('should return Good when pass n in [7, 8]', () => {
    [7, 8].forEach((n) => {
      expect(classifyStudentv2(n)).toBe('Good');
    });
  });

  test('should return Not good when pass n in [7, 8]', () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentv2(n)).toBe('Not good');
    });
  });

  test('should return Bad when pass n in [7, 8]', () => {
    [0, 1, 2, 3].forEach((n) => {
      expect(classifyStudentv2(n)).toBe('Bad');
    });
  });
});

describe('classifyStudentv1()', () => {
  test('should return invalid mark! when pass invalid n < 0', () => {
    const value = classifyStudentv1(-1);

    expect(value).toBe('Invalid mark');
  });

  test('should return invalid mark! when pass invalid n > 10', () => {
    const value = classifyStudentv1(11);

    expect(value).toBe('Invalid mark');
  });

  test('should return Excellence when pass n in [9, 10]', () => {
    expect(classifyStudentv1(9)).toBe('Excellence');
    expect(classifyStudentv1(10)).toBe('Excellence');
  });

  test('should return Good when pass n in [7, 8]', () => {
    [7, 8].forEach((n) => {
      expect(classifyStudentv1(n)).toBe('Good');
    });
  });

  test('should return Not good when pass n in [7, 8]', () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentv1(n)).toBe('Not good');
    });
  });

  test('should return Bad when pass n in [7, 8]', () => {
    [0, 1, 2, 3].forEach((n) => {
      expect(classifyStudentv1(n)).toBe('Bad');
    });
  });
});

describe('temp()', () => {
  test('should return array', () => {
    expect(temp()).toEqual([1, 2, 3]);
  });
});
