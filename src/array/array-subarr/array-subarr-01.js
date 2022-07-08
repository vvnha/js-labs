export const findAllIncreasingSubArr = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const increasingArray = [];
  let subArray = [];

  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > numberList[i - 1]) {
      if (subArray.length === 0) subArray.push(numberList[i - 1]);
      subArray.push(numberList[i]);
    }

    // if next number is smaller or end arr => break => push sub arr, create new sub arr
    if (numberList[i] > numberList[i + 1] || i === numberList.length - 1) {
      if (subArray.length > 0) increasingArray.push([...subArray]);
      subArray = [];
    }
  }

  return increasingArray;
};
