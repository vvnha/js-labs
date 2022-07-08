export const uniqueArray = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const uniArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    let matchNumber = false;

    for (let y = 0; y < uniArray.length; y++) {
      // see first diff index with same value => break;
      if (number === uniArray[y]) {
        matchNumber = true;
        break;
      }
    }

    if (!matchNumber) uniArray.push(number);
  }

  return uniArray;
};

export const uniqueArrayv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const uniArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (!uniArray.includes(number)) uniArray.push(number);
  }

  return uniArray;
};

export const uniqueArrayv3 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  return numberList.reduce((uniArray, number) => {
    if (!uniArray.includes(number)) uniArray.push(number);
    return uniArray;
  }, []);
};

export const uniqueArrayv4 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const flag = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});

  return Object.keys(flag).reduce((uniArray, key) => {
    uniArray.push(Number(key));
    return uniArray;
  }, []);
};
