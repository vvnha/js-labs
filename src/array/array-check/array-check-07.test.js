import { hasAlice, hasAlicev2 } from './array-check-07';

const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];

const studentListv2 = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];

describe('hasAlice()', () => {
  it('should return false when studentList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasAlice(item)).toBe(false);
    });
  });

  it('should return false when Alice and female is not in an array', () => {
    expect(hasAlice(studentListv2)).toBe(false);
  });

  it('should return true when studentId is in an array', () => {
    expect(hasAlice(studentList)).toBe(true);
  });
});

describe('hasAlicev2()', () => {
  it('should return false when studentList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasAlicev2(item)).toBe(false);
    });
  });

  it('should return false when Alice and female is not in an array', () => {
    expect(hasAlicev2(studentListv2)).toBe(false);
  });

  it('should return true when studentId is in an array', () => {
    expect(hasAlicev2(studentList)).toBe(true);
  });
});
