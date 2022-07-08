export const findSecondLargestNumber = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return undefined;

  let maxNumber = numberList[0];
  let secondMaxNumber = undefined;

  for (let i = 1; i < numberList.length; i++) {
    const number = numberList[i];
    if (number > maxNumber) {
      secondMaxNumber = maxNumber;
      maxNumber = number;
    }
  }

  return secondMaxNumber;
};

export const findSecondLargestNumberv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 1) return undefined;

  let maxNumber = numberList[0];

  return numberList.reduce((secondMaxNumber, number) => {
    if (number > maxNumber) {
      secondMaxNumber = maxNumber;
      maxNumber = number;
    }

    return secondMaxNumber;
  }, undefined);
};
