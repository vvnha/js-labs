export const reduce = (array, callbackFn, initialValue) => {
  if (!Array.isArray(array) || typeof callbackFn !== 'function') {
    throw Error('invalid params');
  }

  if (array.length === 0) {
    if (typeof initialValue === 'undefined') {
      throw Error('should have initialValue when array is empty');
    }
    return initialValue;
  }

  const hasInitialValue = typeof initialValue !== 'undefined';

  let result = hasInitialValue ? initialValue : array[0];
  for (let i = hasInitialValue ? 0 : 1; i < array.length; i++) {
    const element = array[i];

    result = callbackFn(result, element, i);
  }

  return result;
};

// console.log(reduce([1, 2, 8], (sum, e) => sum + e, 10));
// console.log(reduce([1, 2, 8], (max, number) => (number > max ? number : max)));

export const findMaxReduce = (array) => {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  return array.reduce((max, number) => (number > max ? number : max));
};

// console.log(findMaxReduce([1, 2, 8]));

export function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  const numberListLength = numberList.length;

  if (numberListLength <= 1) return [...numberList];

  return numberList.map((value, index) => {
    if (index === 0) return numberList[index + 1];
    if (index === numberListLength - 1) return numberList[index - 1];

    return numberList[index - 1] + numberList[index + 1];
  });
}
// console.log(transformNumbersV3([1]));

// export const reducerV1 = (array, callbackFn, initialValue) => {
//   if (!Array.isArray(array) || typeof callbackFn !== 'function') {
//     throw Error('invalid params');
//   }

//   return n;
// };
