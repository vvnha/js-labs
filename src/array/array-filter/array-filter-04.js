export const generatePrimeNumbers = (n) => {
  if (n <= 0 || n >= 1000 || typeof n !== 'number') return [];

  const primeList = [];

  const numberList = Array.from({ length: n - 2 }, (_, i) => i + 2);

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    const numberRoot = Math.sqrt(number);
    let count = 0;

    for (let y = 2; y <= numberRoot; y++) {
      if (number % y === 0) count++;
    }

    if (count === 0) primeList.push(number);
  }

  return primeList;
};

export const generatePrimeNumbersv2 = (n) => {
  if (n <= 0 || n >= 1000 || typeof n !== 'number') return [];

  const numberList = Array.from({ length: n - 2 }, (_, i) => i + 2);

  return numberList.filter((number) => {
    const dividedNumberCount = Array.from({ length: number - 2 }, (_, i) => i + 2).reduce(
      (count, subNumber) => {
        count = subNumber <= Math.sqrt(number) && number % subNumber === 0 ? count + 1 : count;
        return count;
      },
      0
    );

    return dividedNumberCount === 0;
  });
};
