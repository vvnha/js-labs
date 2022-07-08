export function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}

export function convertHoursToSecond(hours) {
  if (hours <= 0) return 0;

  const SECONDS_PER_HOUR = 3600;
  return hours * SECONDS_PER_HOUR;
}
