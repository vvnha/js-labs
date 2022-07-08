export const removeStudentById = (studentList, studentId) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return [];

  if (typeof studentId !== 'number') return [];

  const newStudentList = [];
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (student.id !== studentId) newStudentList.push({ ...student });
  }
  return newStudentList;
};

export const removeStudentByIdv2 = (studentList, studentId) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return [];

  if (typeof studentId !== 'number') return [];

  return studentList.filter((student) => student.id !== studentId);
};
