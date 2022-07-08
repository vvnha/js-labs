export const getErrorMessage = (errorCode) => {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

  return errorMap[errorCode] || 'Something went wrong'; // errorMap[errorCode] ? errorMap[errorCode] : 'Something went wrong';
};

export function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age >= 70) return 0;
  if (age <= 12) return 20000;
  if (age > 12) return 50000;
}

// console.log(getTicketPrice(-9));
