export const findFirstPositiveEven = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length === 0) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number > 0 && number % 2 === 0) return number;
  }

  return undefined;
};

// export const findFirstPositiveEvenv2 = (numberList) => {
//   if (!Array.isArray(numberList) || numberList?.length === 0) return undefined;

//   return numberList.reduce((firstPositiveEvenNumber, number) => {
//     firstPositiveEvenNumber =
//       firstPositiveEvenNumber === undefined && number > 0 && number % 2 === 0
//         ? number
//         : firstPositiveEvenNumber;
//     return firstPositiveEvenNumber;
//   }, undefined);
// };

export const findFirstPositiveEvenv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length === 0) return undefined;

  return numberList.find((number) => {
    return number % 2 === 0 && number > 0;
  });
};
