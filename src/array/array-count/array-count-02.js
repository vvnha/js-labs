export const countNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return -1;

  let count = 0;
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] < numberList[i - 1]) count++;
  }

  return count;
};

export const countNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return -1;

  let prevNumber = numberList[0];
  return numberList.reduce((count, number, index) => {
    if (number < prevNumber && index > 0) {
      count++;
    }
    prevNumber = number;
    return count;
  }, 0);
};
