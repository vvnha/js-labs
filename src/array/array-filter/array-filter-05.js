export const findAllNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return [];

  let firstEvenNumber = null;
  const evenNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0 && number > 0) {
      if (firstEvenNumber === null) firstEvenNumber = number;
      else evenNumberList.push(number);
    }
  }

  return evenNumberList;
};

export const findAllNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return [];

  let firstEvenNumber = null;

  return numberList.filter((number) => {
    if (number % 2 === 0 && number > 0) {
      if (firstEvenNumber === null) firstEvenNumber = number;
      else return true;
    }
    return false;
  });
};
