export const isPerfectNumber = (n) => {
  let sum = 0;

  if (n <= 1 || n >= 1000) return false;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (i === 1) sum += 1;

    if (i > 1 && n % i === 0) sum += i + n / i;
  }

  return sum === n;
};
