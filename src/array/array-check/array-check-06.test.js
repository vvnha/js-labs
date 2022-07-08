import { hasStudent, hasStudentv2 } from './array-check-06';

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

describe('hasStudent', () => {
  it('should return false when studentList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasStudent(item, 1)).toBe(false);
    });
  });
  it('should return false when studentId is not in an array', () => {
    expect(hasStudent(studentList, 3)).toBe(false);
  });

  it('should return true when studentId is in an array', () => {
    expect(hasStudent(studentList, 1)).toBe(true);
  });
});

describe('hasStudentv2', () => {
  it('should return false when studentList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasStudentv2(item, 1)).toBe(false);
    });
  });
  it('should return false when studentId is not in an array', () => {
    expect(hasStudentv2(studentList, 3)).toBe(false);
  });

  it('should return true when studentId is in an array', () => {
    expect(hasStudentv2(studentList, 1)).toBe(true);
  });
});
