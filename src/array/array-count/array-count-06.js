export const countStudents = (studentList, avgMark) => {
  if (!Array.isArray(studentList) || studentList?.length < 0) return -1;
  if (typeof avgMark !== 'number') return -1;
  let count = 0;

  for (let i = 0; i < studentList.length; i++) {
    const subjectLength = Object.keys(studentList[i].marks).length;
    const { marks } = studentList[i];

    let studentAvgMark = 0;
    console.log(marks);
    for (const key in marks) {
      if (Object.hasOwnProperty.call(marks, key)) {
        const subjectMark = marks[key];
        studentAvgMark += subjectMark / subjectLength;
      }
    }

    if (studentAvgMark >= avgMark) count++;
  }

  return count;
};

export const countStudentsv2 = (studentList, avgMark) => {
  if (!Array.isArray(studentList) || studentList?.length < 0) return -1;
  if (typeof avgMark !== 'number') return -1;

  return studentList.reduce((count, student) => {
    const { marks } = { ...student };

    const studentAvgMark = Object.keys(marks).reduce((avg, subject) => {
      avg += marks[subject] / Object.keys(marks).length;
      return avg;
    }, 0);

    count = studentAvgMark >= avgMark ? count + 1 : count;

    return count;
  }, 0);
};
