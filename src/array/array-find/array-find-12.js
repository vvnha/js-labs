export const findStudentHavingLowestMark = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

  let studentHavingLowestMark = studentList[0];
  for (let i = 1; i < studentList.length; i++) {
    const student = studentList[i];

    const avgLowestMark = (studentHavingLowestMark.math + studentHavingLowestMark.english) / 2;
    const avgMark = (student.math + student.english) / 2;
    if (avgMark <= avgLowestMark) studentHavingLowestMark = student;
  }
  return studentHavingLowestMark;
};

export const findStudentHavingLowestMarkv2 = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

  return studentList.reduce((studentHavingLowestMark, student, index) => {
    const avgLowestMark = (studentHavingLowestMark.math + studentHavingLowestMark.english) / 2;
    const avgMark = (student.math + student.english) / 2;
    studentHavingLowestMark =
      avgMark <= avgLowestMark && index >= 1 ? student : studentHavingLowestMark;
    return studentHavingLowestMark;
  }, studentList[0]);
};
