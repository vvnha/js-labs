import { findStudentHavingHighestMark, findStudentHavingHighestMarkv2 } from './array-find-11';

const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 10 },
  { id: 3, name: 'John', math: 10 },
];

describe('findStudentHavingHighestMark()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentHavingHighestMark(item)).toBe(null);
    });
  });

  it('should return student when product list has student with highest mark', () => {
    expect(findStudentHavingHighestMark(studentList)).toEqual({ id: 2, name: 'Bob', math: 10 });
  });
});

describe('findStudentHavingHighestMarkv2()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentHavingHighestMarkv2(item)).toBe(null);
    });
  });

  it('should return student when product list has student with highest mark', () => {
    expect(findStudentHavingHighestMarkv2(studentList)).toEqual({ id: 2, name: 'Bob', math: 10 });
  });
});
