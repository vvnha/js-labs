export const findStudentById = (studentList, studentId) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0 || typeof studentId !== 'number')
    return -1;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (student.id === studentId) return i;
  }

  return -1;
};

// export const findStudentByIdv2 = (studentList, studentId) => {
//   if (!Array.isArray(studentList) || studentList?.length <= 0 || typeof studentId !== 'number')
//     return -1;

//   return studentList.reduce((studentIndex, student, index) => {
//     studentIndex = student.id === studentId ? index : studentIndex;

//     return studentIndex;
//   }, -1);
// };

export const findStudentByIdv2 = (studentList, studentId) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0 || typeof studentId !== 'number')
    return -1;

  return studentList.findIndex((student) => student.id === studentId);
};
