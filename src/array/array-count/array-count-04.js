export const countUniqueNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return -1;

  const diffNumberList = [];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    let matchNumber = false;

    for (let y = 0; y < diffNumberList.length; y++) {
      const diffNumber = diffNumberList[y];
      if (diffNumber === number) matchNumber = true;
    }

    if (matchNumber === false) {
      diffNumberList.push(number);
    }
  }

  return diffNumberList.length;
};

export const countUniqueNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return -1;

  const flag = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});

  return Object.keys(flag).length;
};
