export const hasOddNumberDivisibleBy3 = (numberList) => {
  if (numberList.length === 0 || !Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 3 === 0 && number % 2 === 0) return true;
  }
  return false;
};

export const hasOddNumberDivisibleBy3v2 = (numberList) => {
  if (numberList.length === 0 || !Array.isArray(numberList)) return false;

  return numberList.some((number) => number % 3 === 0 && number % 2 === 0);
};

export const hasOddNumberDivisibleBy3v3 = (numberList) => {
  if (numberList.length === 0 || !Array.isArray(numberList)) return false;

  return numberList.reduce((result, number) => {
    result = number % 3 === 0 && number % 2 === 0 ? true : result;
    return result;
  }, false);
};
