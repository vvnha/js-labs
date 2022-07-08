export const findSumPair = (numberList, targetSum) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  if (targetSum === undefined) return [];

  let frequency = new Array();
  let sumPairArr = [];

  const numberListLength = numberList.length;

  for (let i = 0; i < numberListLength; i++) {
    frequency[numberList[i]] =
      frequency[numberList[i]] !== undefined ? frequency[numberList[i]] + 1 : 1;
  }

  for (let i = 0; i < numberListLength; i++) {
    const number = numberList[i];
    const remainingNumber = targetSum - numberList[i];
    const freqMoreThanOne = frequency[remainingNumber] > 1 && remainingNumber === number;

    if (frequency[remainingNumber] !== undefined) {
      if (freqMoreThanOne) sumPairArr = sumPairArr = [number, remainingNumber]; // when 2 = 1 + 1
      if (remainingNumber > number) sumPairArr = [number, remainingNumber];
      if (remainingNumber < number) sumPairArr = [remainingNumber, number];
    }
  }
  return sumPairArr;
};

// export const findSumPair = (numberList, targetSum) => {
//   if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

//   if (targetSum === undefined) return [];

//   let sumPairArr = [];

//   const numberListLength = numberList.length;

//   for (let i = 0; i < numberListLength; i++) {
//     const number = numberList[i];

//     for (let y = 0; y < numberListLength; y++) {
//       const remaining = numberList[y];

//       if (number + remaining === targetSum && i !== y) {
//         if (remaining > number) sumPairArr = [number, remaining];
//         if (remaining < number) sumPairArr = [remaining, number];
//       }
//     }
//   }

//   return sumPairArr;
// };
