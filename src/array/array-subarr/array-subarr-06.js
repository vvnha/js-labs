export const findMaxSumArray = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  let maxSum = 0;
  let subMaxSum = 0;
  let subMaxSumArr = [];
  let subArr = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    const needToReset = i === numberList.length - 1 || numberList[i] > numberList[i + 1];

    subArr.push(number);
    subMaxSum += number;

    if (needToReset) {
      if (subMaxSum > maxSum) {
        maxSum = subMaxSum;
        subMaxSumArr = subArr;
      }
      subMaxSum = 0;
      subArr = [];
    }
  }

  return subMaxSumArr;
};
