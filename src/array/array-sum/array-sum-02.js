export const sumAllDigits = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return 0;

  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    let lastDigits = numberList[i];

    while (Math.trunc(lastDigits / 10) > 0) {
      sum += lastDigits % 10;
      lastDigits = Math.trunc(lastDigits / 10);
    }

    if (lastDigits / 10 > 0 && lastDigits / 10 < 1) sum += lastDigits;
  }

  return sum;
};

export const sumAllDigitsv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return 0;

  return numberList.reduce((sum, number) => {
    let lastDigits = number;

    while (Math.trunc(lastDigits / 10) > 0) {
      sum += lastDigits % 10;
      lastDigits = Math.trunc(lastDigits / 10);
    }

    if (lastDigits / 10 > 0 && lastDigits / 10 < 1) sum += lastDigits;

    return sum;
  }, 0);
};
