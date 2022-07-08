export function isEvenNumber(n) {
  return n % 2 === 0;
}

export function isPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtNInt = Math.trunc(Math.sqrt(n));
  return sqrtNInt * sqrtNInt === n;
}
