export const countPositiveEvenNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return -1;

  let count = 0;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number > 0 && number % 2 === 0) count++;
  }
  return count;
};

export const countPositiveEvenNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return -1;

  return numberList.reduce((count, number) => {
    count = number > 0 && number % 2 === 0 ? count + 1 : count;
    return count;
  }, 0);
};
