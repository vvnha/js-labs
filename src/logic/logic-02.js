// export const findMissingNumber = (numberList, n) => {
//   if (!Array.isArray(numberList) || numberList?.length <= 0) return 0;

//   if (typeof n !== 'number' || n < 5) return 0;

//   for (let i = 0; i <= n - 5; i++) {
//     if (numberList[i] !== i + 5) return i + 5;
//   }
// };

export const findMissingNumber = (numberList, n) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return 0;

  if (typeof n !== 'number' || n < 5) return 0;

  let frequency = new Array();
  for (let i = 0; i < numberList.length; i++) {
    frequency[numberList[i]] =
      frequency[numberList[i]] !== undefined ? frequency[numberList[i]] + 1 : 1;
  }

  for (let i = 5; i <= n; i++) {
    if (frequency[i] === undefined) return i;
  }
};
