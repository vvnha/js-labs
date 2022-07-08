import { countStudents, countStudentsv2 } from './array-count-06';

const studentList2 = [
  { id: 1, name: 'Alice', marks: { math: 8 } },
  { id: 2, name: 'Bob', marks: { math: 9 } },
];
const studentList1 = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
];

describe('countStudents()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countStudents(item, 4)).toEqual(-1);
    });
  });

  it('should return the number count when student has avg mark > the provided avgMark', () => {
    expect(countStudents(studentList1, 7)).toBe(1);
    expect(countStudents(studentList2, 7)).toBe(2);
  });
});

describe('countStudentsv2()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countStudentsv2(item, 4)).toEqual(-1);
    });
  });

  it('should return the number count when student has avg mark > the provided avgMark', () => {
    expect(countStudentsv2(studentList1, 7)).toBe(1);
    expect(countStudentsv2(studentList2, 7)).toBe(2);
  });
});
