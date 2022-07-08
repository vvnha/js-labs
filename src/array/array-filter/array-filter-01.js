export const generateNumberInRange = (a, b) => {
  if (a === undefined || b === undefined || a >= b) return [];

  const numberList = [];

  for (let i = a; i <= b; i++) {
    numberList.push(i);
  }

  return numberList;
};

export const generateNumberInRangev2 = (a, b) => {
  if (a === undefined || b === undefined || a >= b) return [];

  return Array.from({ length: b - a + 1 }, (_, i) => i + a);
};
