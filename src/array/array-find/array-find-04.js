export const findLastNegativeOdd = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length === 0) return undefined;

  let lastNegativeOdd = undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number < 0 && number % 2 !== 0) lastNegativeOdd = number;
  }

  return lastNegativeOdd;
};

export const findLastNegativeOddv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length === 0) return undefined;

  return numberList.reduce((firstPositiveEvenNumber, number) => {
    firstPositiveEvenNumber = number < 0 && number % 2 !== 0 ? number : firstPositiveEvenNumber;
    return firstPositiveEvenNumber;
  }, undefined);
};
