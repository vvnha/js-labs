export const isSymmetricList = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 1) return false;

  const numberListLength = numberList.length;

  for (let i = 0; i < numberListLength / 2; i++) {
    const leftElement = numberList[i];
    const rightElement = numberList[numberListLength - i - 1];

    if (leftElement !== rightElement) return false;
  }
  return true;
};
