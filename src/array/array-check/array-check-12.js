const fibonacciList = [0, 1];

const generateFibonacci = (n) => {
  if (n <= 1) return 1;

  if (fibonacciList[n] !== undefined) return fibonacciList[n];

  const rs = generateFibonacci(n - 1) + generateFibonacci(n - 2);

  if (rs > 100 || isNaN(rs)) return;

  fibonacciList.push(rs);

  return rs;
};

export const hasFibonaciNumber = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 1) return false;

  generateFibonacci(10);

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (fibonacciList.includes(number)) return true;
  }

  return false;
};

export const hasFibonaciNumberv2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList?.length < 1) return false;

  generateFibonacci(10);

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    for (let y = 0; y < fibonacciList.length; y++) {
      const fiboNumber = fibonacciList[y];
      if (fiboNumber === number) return true;
    }
  }

  return false;
};
