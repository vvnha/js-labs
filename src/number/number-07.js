export const isSymetricNumber = (n) => {
  if (n <= 1 || n >= 1000000) return false;

  let numLength = 0;
  let numberCheck = n;
  let remaining = n;

  while (Math.trunc(numberCheck / 10) > 0) {
    numLength++;
    numberCheck = Math.trunc(numberCheck / 10);
  }

  numLength++;

  const median = numLength % 2 === 0 ? numLength / 2 : Math.trunc(numLength / 2) + 1;

  let count = 0;
  while (count < median) {
    const lastDigits = remaining % 10;

    const temp = 10 ** (numLength - count * 2 - 1);

    const firstDegits = Math.trunc(remaining / temp);
    if (firstDegits !== lastDigits) return false;

    remaining = Math.trunc((remaining - firstDegits * temp) / 10);
    count++;
  }

  return true;
};

export const isSymetricNumberv2 = (n) => {
  if (n <= 1 || n >= 1000000) return false;

  const numberString = n.toString();
  const numberLength = numberString.length;

  for (let i = 0; i < Math.trunc(numberLength / 2); i++) {
    if (numberString[i] !== numberString[numberLength - i - 1]) return false;
  }
  return true;
};
