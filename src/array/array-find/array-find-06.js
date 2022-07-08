export const findLastPerfectSquare = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return undefined;

  let lastPerfectSquare = undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    const numberRootSquare = Math.trunc(Math.sqrt(number));
    if (numberRootSquare ** 2 === number) lastPerfectSquare = number;
  }

  return lastPerfectSquare;
};

export const findLastPerfectSquarev2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return undefined;

  return numberList.reduce((lastPerfectSquare, number) => {
    const numberRootSquare = Math.trunc(Math.sqrt(number));

    lastPerfectSquare = numberRootSquare ** 2 === number ? number : lastPerfectSquare;
    return lastPerfectSquare;
  }, undefined);
};
