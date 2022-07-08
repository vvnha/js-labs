export const hasAlice = (studentList) => {
  if (!Array.isArray(studentList)) return false;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    if (student.name.toLowerCase() === 'alice' && student.gender === 'female') return true;
  }
  return false;
};

export const hasAlicev2 = (studentList) => {
  if (!Array.isArray(studentList)) return false;

  return studentList.some(
    (student) => student.name.toLowerCase() === 'alice' && student.gender === 'female'
  );
};
