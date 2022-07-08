export const findStudent = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    let count = 0;
    const studentMarks = { ...student.marks };
    for (const key in studentMarks) {
      if (Object.hasOwnProperty.call(studentMarks, key)) {
        const element = studentMarks[key];
        if (element < 5) count++;
      }
    }

    if (count === 1) return student;
  }

  return null;
};

// export const findStudentv2 = (studentList) => {
//   if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

//   return studentList.reduce((studentLowMark, student) => {
//     const { marks } = student;
//     const count = Object.keys(marks).reduce((lowMarkCount, subject) => {
//       lowMarkCount = marks[subject] < 5 ? lowMarkCount + 1 : lowMarkCount;
//       return lowMarkCount;
//     }, 0);

//     studentLowMark = count === 1 && studentLowMark === null ? student : studentLowMark;

//     return studentLowMark;
//   }, null);
// };

export const findStudentv2 = (studentList) => {
  if (!Array.isArray(studentList) || studentList?.length <= 0) return null;

  return studentList.find((student) => {
    const { marks } = student;

    const count = Object.keys(marks).reduce((lowMarkCount, subject) => {
      lowMarkCount = marks[subject] < 5 ? lowMarkCount + 1 : lowMarkCount;
      return lowMarkCount;
    }, 0);

    return count === 1;
  });
};
