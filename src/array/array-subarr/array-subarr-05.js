export const findMaxSumArray = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return 0;

  let maxSum = 0;
  let subMaxSum = 0;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    const needToReset = i === numberList.length - 1 || numberList[i] > numberList[i + 1];

    subMaxSum += number;

    if (needToReset) {
      if (subMaxSum > maxSum) maxSum = subMaxSum;
      subMaxSum = 0;
    }
  }

  return maxSum;
};

console.log(findMaxSumArray([1, 2, 3, 1]));
