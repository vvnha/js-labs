export const findMinPositive = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 1) return undefined;

  let minPositiveNumber = Number.POSITIVE_INFINITY;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0 && numberList[i] < minPositiveNumber) minPositiveNumber = numberList[i];
  }
  return minPositiveNumber !== Number.POSITIVE_INFINITY ? minPositiveNumber : undefined;
};

export const findMinPositivev2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 1) return undefined;

  const minPositiveNumber = numberList.reduce((result, number) => {
    result = number > 0 && number < result ? number : result;
    return result;
  }, Number.POSITIVE_INFINITY);

  return minPositiveNumber !== Number.POSITIVE_INFINITY ? minPositiveNumber : undefined;
};
