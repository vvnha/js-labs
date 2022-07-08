export const findAllPositiveEvenSubArr = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const positiveEvenList = [];
  let subArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) subArray.push(number);

    const needToReset = number < 0 || number % 2 !== 0 || i === numberList.length - 1;

    if (subArray.length > 0 && needToReset) {
      positiveEvenList.push(subArray);

      subArray = [];
    }
  }

  return positiveEvenList;
};
