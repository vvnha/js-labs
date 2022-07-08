export const isIncreasingNumberList = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 2) return false;

  let prevNumber = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (prevNumber >= numberList[i]) return false;

    prevNumber = numberList[i];
  }

  return true;
};

export const isIncreasingNumberListv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 2) return false;

  let prevNumber = Number.NEGATIVE_INFINITY;

  return numberList.reduce((result, number) => {
    result = prevNumber >= number ? false : result;
    prevNumber = number;
    return result;
  }, true);
};
