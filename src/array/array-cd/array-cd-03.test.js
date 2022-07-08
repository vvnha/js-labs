import { removeStudentById, removeStudentByIdv2 } from './array-cd-03';

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

describe('removeStudentById()', () => {
  it('should return empty array when  student List is not an array', () => {
    [{}, [], null, undefined, 1].forEach((item) => {
      expect(removeStudentById(item, 0)).toEqual([]);
    });
  });
  it('should return empty array when studentId is not a number', () => {
    [{}, [], null, undefined].forEach((item) => {
      expect(removeStudentById(studentList, item)).toEqual([]);
    });
  });

  it('should return reomoved array when studentId is in a student list', () => {
    expect(removeStudentById(studentList, 1)).toEqual([{ id: 2, name: 'Bob' }]);
    expect(removeStudentById(studentList, 3)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });
});

describe('removeStudentByIdv2()', () => {
  it('should return empty array when  student List is not an array', () => {
    [{}, [], null, undefined, 1].forEach((item) => {
      expect(removeStudentByIdv2(item, 0)).toEqual([]);
    });
  });
  it('should return empty array when studentId is not a number', () => {
    [{}, [], null, undefined].forEach((item) => {
      expect(removeStudentByIdv2(studentList, item)).toEqual([]);
    });
  });

  it('should return reomoved array when studentId is in a student list', () => {
    expect(removeStudentByIdv2(studentList, 1)).toEqual([{ id: 2, name: 'Bob' }]);
    expect(removeStudentByIdv2(studentList, 3)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });
});
