export const statisticsNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return {};

  const flag = {};
  for (let i = 0; i < numberList.length; i++) {
    flag[numberList[i]] = flag[numberList[i]] !== undefined ? flag[numberList[i]] + 1 : 1;
  }

  return flag;
};
