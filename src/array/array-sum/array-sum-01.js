export const sumEvenNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return 0;

  let sum = numberList[0] % 2 === 0 ? numberList[0] : 0;
  for (let i = 1; i < numberList.length; i++) {
    // const number = numberList[i];
    if (numberList[i] % 2 === 0 && numberList[i] > numberList[i - 1]) sum += numberList[i];
  }

  return sum;
};

export const sumEvenNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return 0;

  let prevNumber = numberList[0];

  return numberList.reduce(
    (sum, number, index) => {
      sum = number % 2 === 0 && number > prevNumber && index > 0 ? (sum += number) : sum;
      prevNumber = number;
      return sum;
    },
    numberList[0] % 2 === 0 ? numberList[0] : 0
  );
};
