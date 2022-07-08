export const hasEvenNumberGreaterThanN = (numberList, n) => {
  if (numberList.length === 0) return false;
  if (typeof n !== 'number') return false;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0 && number > n) return true;
  }

  return false;
};

// export const hasEvenNumberGreaterThanNv2 = (numberList, n) => {
//   if (numberList.length === 0) return false;
//   if (typeof n !== 'number') return false;

//   return numberList.some((number) => number % 2 === 0 && number > n);
// };

export const hasEvenNumberGreaterThanNv2 = (numberList, n) => {
  if (numberList.length === 0) return false;
  if (typeof n !== 'number') return false;

  return numberList.findIndex((number) => number % 2 === 0 && number > n) > -1;
};
