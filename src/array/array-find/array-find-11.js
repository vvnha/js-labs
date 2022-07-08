export const findStudentHavingHighestMark = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

  let studentHavingHighestMark = studentList[0];
  for (let i = 1; i < studentList.length; i++) {
    const student = studentList[i];

    if (student.math > studentHavingHighestMark.math) studentHavingHighestMark = student;
  }
  return studentHavingHighestMark;
};

export const findStudentHavingHighestMarkv2 = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

  return studentList.reduce((studentHavingHighestMark, student, index) => {
    studentHavingHighestMark =
      index >= 1 && student.math > studentHavingHighestMark.math
        ? student
        : studentHavingHighestMark;
    return studentHavingHighestMark;
  }, studentList[0]);
};
