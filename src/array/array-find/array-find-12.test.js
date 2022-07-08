import { findStudentHavingLowestMark, findStudentHavingLowestMarkv2 } from './array-find-12';

const studentList = [
  { id: 1, name: 'Alice', math: 9, english: 9 },
  { id: 2, name: 'Bob', math: 5, english: 5 },
  { id: 3, name: 'John', math: 5, english: 5 },
];

describe('findStudentHavingLowestMark()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentHavingLowestMark(item)).toBe(null);
    });
  });

  it('should return student when product list has student with Lowest mark', () => {
    expect(findStudentHavingLowestMark(studentList)).toEqual({
      id: 3,
      name: 'John',
      math: 5,
      english: 5,
    });
  });
});

describe('findStudentHavingLowestMarkv2()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentHavingLowestMarkv2(item)).toBe(null);
    });
  });

  it('should return student when product list has student with Lowest mark', () => {
    expect(findStudentHavingLowestMarkv2(studentList)).toEqual({
      id: 3,
      name: 'John',
      math: 5,
      english: 5,
    });
  });
});
