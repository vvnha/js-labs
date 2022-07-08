export const hasStudent = (studentList, studentId) => {
  if (!Array.isArray(studentList)) return false;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (student?.id === studentId) return true;
  }

  return false;
};

export const hasStudentv2 = (studentList, studentId) => {
  if (!Array.isArray(studentList)) return false;

  return studentList.some((student) => student?.id === studentId);
};
