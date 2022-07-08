export const findMostFrequentNumber = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return undefined;

  const flag = {};
  for (let i = 0; i < numberList.length; i++) {
    flag[numberList[i]] = flag[numberList[i]] !== undefined ? flag[numberList[i]] + 1 : 1;
  }

  return Number(
    Object.keys(flag).reduce((maxFreq, key) => {
      maxFreq = flag[key] > flag[maxFreq] ? key : maxFreq;
      return maxFreq;
    })
  );
};

// export const findMostFrequentNumber = (numberList) => {
//   if (!Array.isArray(numberList) || numberList?.length <= 0) return undefined;

//   let frequency = new Array();
//   for (let i = 0; i < numberList.length; i++) {
//     frequency[numberList[i]] =
//       frequency[numberList[i]] !== undefined ? frequency[numberList[i]] + 1 : 1;
//   }

//   let maxNumber = numberList[0];

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     if (frequency[number] > frequency[maxNumber]) maxNumber = number;
//   }

//   return maxNumber;
// };
