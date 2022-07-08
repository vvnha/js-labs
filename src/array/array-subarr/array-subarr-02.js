export const findAllDecreasingSubArr = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const decreasingArray = [];
  let subArray = [];

  for (let i = 0; i < numberList.length; i++) {
    subArray.push(numberList[i]);

    const needToReset = numberList[i] < numberList[i + 1] || i === numberList.length - 1;

    if (subArray.length > 0 && needToReset) {
      if (subArray.length >= 3) decreasingArray.push(subArray);

      subArray = [];
    }
  }

  return decreasingArray;
};
