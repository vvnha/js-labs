import { findAllStudents, findAllStudentsv2 } from './array-filter-07';

const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 4 },
  { id: 3, name: 'John', math: 0 },
];

describe('findAllStudents()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllStudents(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllStudents(studentList)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });
});

describe('findAllStudentsv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllStudentsv2(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllStudentsv2(studentList)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });
});
