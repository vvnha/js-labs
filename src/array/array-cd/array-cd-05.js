// export const removeDuplicatedNumbers = (numberList) => {
//   if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

//   const nonDuplicatedNumberList = [];

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     let count = 0;

//     for (let y = 0; y < numberList.length; y++) {
//       if (number === numberList[y]) {
//         count++;
//       }
//     }

//     if (count === 1) nonDuplicatedNumberList.push(number);
//   }

//   return nonDuplicatedNumberList;
// };

//-------------------------------------------------------------------

//https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/#:~:text=1)%20Remove%20duplicates%20from%20an%20array%20using%20a%20Set&text=To%20remove%20duplicates%20from%20an%20array%3A,set%20back%20to%20an%20array.
//quicker

export const removeDuplicatedNumbers = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const nonDuplicatedNumberList = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    let matchDiffIndex = false;

    for (let y = 0; y < numberList.length; y++) {
      // see first diff index with same value => break;
      if (i !== y && numberList[y] === number) {
        matchDiffIndex = true;
        break;
      }
    }

    if (!matchDiffIndex) nonDuplicatedNumberList.push(number);
  }

  return nonDuplicatedNumberList;
};

//-------------------------------------------------------------------

export const removeDuplicatedNumbersv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length <= 0) return [];

  const flag = {};

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    flag[number] = flag[number] !== undefined ? flag[number] + 1 : 1;
  }

  return Object.keys(flag).reduce((arr, key) => {
    if (flag[key] === 1) arr.push(Number(key));
    return arr;
  }, []);
};
