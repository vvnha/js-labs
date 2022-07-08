export const findAllNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return [];

  const firstOddDigitList = [];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    let lastDigits = number;
    while (Math.trunc(lastDigits / 10) > 0) {
      lastDigits = Math.trunc(lastDigits / 10);
    }

    if (lastDigits % 2 !== 0) firstOddDigitList.push(number);
  }
  return firstOddDigitList;
};

export const findAllNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return [];

  return numberList.filter((number) => {
    let lastDigits = number;
    while (Math.trunc(lastDigits / 10) > 0) {
      lastDigits = Math.trunc(lastDigits / 10);
    }

    return lastDigits % 2 !== 0;
  });
};
