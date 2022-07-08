import { findStudentById, findStudentByIdv2 } from './array-find-09';

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

describe('findStudentById()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentById(item, 0)).toBe(-1);
    });
  });

  it('should return when id is not a number', () => {
    [[], null, undefined, {}].forEach((item) => {
      expect(findStudentById(studentList, item)).toBe(-1);
    });
  });

  it('should return index when list is empty', () => {
    expect(findStudentById(studentList, 1)).toBe(0);
    expect(findStudentById(studentList, 3)).toBe(-1);
  });
});

describe('findStudentByIdv2()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findStudentByIdv2(item, 0)).toBe(-1);
    });
  });

  it('should return when id is not a number', () => {
    [[], null, undefined, {}].forEach((item) => {
      expect(findStudentByIdv2(studentList, item)).toBe(-1);
    });
  });

  it('should return index when list is empty', () => {
    expect(findStudentByIdv2(studentList, 1)).toBe(0);
    expect(findStudentByIdv2(studentList, 3)).toBe(-1);
  });
});
