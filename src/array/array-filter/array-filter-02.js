export const findNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return [];

  const greaterNumberList = [];
  for (let i = 1; i < numberList.length; i++) {
    const number = numberList[i];

    if (numberList[i] > numberList[i - 1]) {
      greaterNumberList.push(numberList[i]);
    }
  }

  return greaterNumberList;
};

export const findNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return [];

  let prevNumber = numberList[0];

  return numberList.filter((number, index) => {
    if (number > prevNumber && index > 0) {
      prevNumber = number;
      return true;
    }

    prevNumber = number;
    return false;
  });
};
