export const isIncreasingNumberByDistance = (n, x) => {
  if (n < 0 || n >= 1000000 || x < 0 || x >= 5) return false;

  let remaining = n;
  let prevDigits = 10;

  while (remaining > 0) {
    const lastDigits = remaining % 10;

    if (lastDigits >= prevDigits) return false;

    if (prevDigits !== 10 && prevDigits - lastDigits !== x) return false;

    prevDigits = lastDigits;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
};

export const isIncreasingNumberByDistancev2 = (n, x) => {
  if (n < 0 || n >= 1000000 || x < 0 || x >= 5) return false;

  const numberString = n.toString();

  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
    if (numberString[i] - numberString[i - 1] !== x) return false;
  }

  return true;
};
