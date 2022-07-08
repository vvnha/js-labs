export const isPerfectSquare = (n) => {
  if (n <= 0 || n >= 100000) return false;

  const squareRoot = Math.trunc(Math.sqrt(n));

  return squareRoot ** 2 === n;
};
