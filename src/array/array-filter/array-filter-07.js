export const findAllStudents = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 1) return [];

  const studentWithLowMarkList = [];
  for (let i = 0; i < studentList.length; i++) {
    const { math } = studentList[i];

    if (math < 5) studentWithLowMarkList.push(studentList[i]);
  }

  return studentWithLowMarkList;
};

export const findAllStudentsv2 = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 1) return [];

  return studentList.filter((student) => {
    const { math } = student;

    return math < 5;
  });
};
