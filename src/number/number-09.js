export const hasTwoDigitsWithSum = (n, sum) => {
  if (n <= 0 || n >= 1000000 || sum <= 0 || sum >= 19) return false;

  let remaining = n;
  let prevDigits = 0;

  while (remaining > 0) {
    const lastDigits = remaining % 10;

    remaining = Math.trunc(remaining / 10);

    if (lastDigits + prevDigits === sum) return true;

    prevDigits = lastDigits;
  }

  return false;
};

export const hasTwoDigitsWithSumv2 = (n, sum) => {
  if (n <= 0 || n >= 1000000 || sum <= 0 || sum >= 19) return false;

  const numberString = n.toString();

  for (let i = 1; i < numberString.length; i++) {
    const element = parseInt(numberString[i]);
    const prevElement = parseInt(numberString[i - 1]);

    if (element + prevElement === sum) return true;
  }

  return false;
};
