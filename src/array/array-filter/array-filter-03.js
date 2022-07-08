export const generateFibonaci = (n) => {
  if (n <= 0 || n >= 1000 || typeof n !== 'number') return [];

  const fibonacciList = [0, 1];

  const numberList = Array.from({ length: n }, (_, i) => i);

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    const fibonacciListLength = fibonacciList.length;

    if (fibonacciList[fibonacciListLength - 1] + fibonacciList[fibonacciListLength - 2] === i) {
      fibonacciList.push(number);
    }
  }

  return fibonacciList;
};

export const generateFibonaciv2 = (n) => {
  if (n <= 0 || n >= 1000 || typeof n !== 'number') return [];

  const numberList = Array.from({ length: n }, (_, i) => i);

  let prevNumber2 = 0;
  let prevNumber1 = 1;

  const fiboList = numberList.filter((number) => {
    if (prevNumber1 + prevNumber2 === number) {
      prevNumber2 = prevNumber1;
      prevNumber1 = number;
      return true;
    }

    return false;
  });

  return [0, 1, ...fiboList];
};
