export const insert = (numberList, newNumber) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return [];

  if (typeof newNumber !== 'number') return [];

  if (numberList.length === 0) return [newNumber];

  const newNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    if (newNumber > numberList[i - 1] && (newNumber < numberList[i] || i === numberList.length - 1))
      newNumberList.push(newNumber);

    newNumberList.push(numberList[i]);
  }

  return newNumberList;
};

export const insertv2 = (numberList, newNumber) => {
  if (!Array.isArray(numberList) || numberList?.length < 0) return [];

  if (typeof newNumber !== 'number') return [];

  if (numberList.length === 0) return [newNumber];

  let prevNumber = numberList[0];

  return numberList.reduce((newNumberList, number, index) => {
    if (
      index > 0 &&
      newNumber > prevNumber &&
      (newNumber < number || index === numberList.length - 1)
    ) {
      newNumberList.push(newNumber);
    }
    prevNumber = number;
    newNumberList.push(number);
    return newNumberList;
  }, []);
};
