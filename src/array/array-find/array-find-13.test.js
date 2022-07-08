import { findStudent, findStudentv2 } from './array-find-13';

const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
];

describe('findStudent()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudent(item)).toBe(null);
    });
  });

  it('should return student when list has student with just a subject mark is smaller than 5', () => {
    expect(findStudent(studentList)).toEqual({
      id: 3,
      name: 'John',
      marks: { math: 4, english: 7, programming: 9 },
    });
  });
});

describe('findStudentv2()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentv2(item)).toBe(null);
    });
  });

  it('should return student when list has student with just a subject mark is smaller than 5', () => {
    expect(findStudentv2(studentList)).toEqual({
      id: 3,
      name: 'John',
      marks: { math: 4, english: 7, programming: 9 },
    });
  });
});
