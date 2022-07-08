export const isDivisibleBy10 = (n) => {
  if (n <= 0 || n >= 1000000) return false;
  let remaining = n;
  let sum = 0;

  while (remaining > 0) {
    const lastDigits = remaining % 10;

    sum += lastDigits;
    remaining = Math.trunc(remaining / 10);
  }

  if (sum % 10 !== 0) return false;
  return true;
};

export const isDivisibleBy10v2 = (n) => {
  if (n <= 0 || n >= 1000000) return false;

  const numberString = n.toString();
  let sum = 0;

  for (let i = 0; i < numberString.length; i++) {
    sum += parseInt(numberString[i]);
  }

  return sum % 10 === 0;
};
