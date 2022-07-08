export const sumAllMinDigits = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return 0;

  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    let lastDigits = numberList[i];
    let minDigits = 10;

    while (Math.trunc(lastDigits / 10) > 0) {
      const digit = lastDigits % 10;

      if (digit < minDigits) minDigits = digit;

      lastDigits = Math.trunc(lastDigits / 10);
    }

    if (lastDigits / 10 > 0 && lastDigits / 10 < 1 && lastDigits < minDigits)
      minDigits = lastDigits;
    sum += minDigits;
  }

  return sum;
};

export const sumAllMinDigitsv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return 0;

  return numberList.reduce((sum, number) => {
    let lastDigits = number;
    let minDigits = 10;

    while (Math.trunc(lastDigits / 10) > 0) {
      const digit = lastDigits % 10;

      if (digit < minDigits) minDigits = digit;

      lastDigits = Math.trunc(lastDigits / 10);
    }

    if (lastDigits / 10 > 0 && lastDigits / 10 < 1 && lastDigits < minDigits)
      minDigits = lastDigits;

    sum += minDigits;
    return sum;
  }, 0);
};
