export const classifyStudentv1 = (mark) => {
  if (mark < 0 || mark > 10) return 'Invalid mark';

  let grade = 'Bad';

  if (mark > 8) grade = 'Excellence';
  else if (mark >= 7) grade = 'Good';
  else if (mark >= 4) grade = 'Not good';

  return grade;
};

// khu else if with if return
export const classifyStudentv2 = (mark) => {
  if (mark < 0 || mark > 10) return 'Invalid mark';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not good';

  return 'Bad';
};

export const temp = () => {
  return [1, 2, 3];
};
