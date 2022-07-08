export const isDecreasingNumberv1 = (n) => {
  if (n <= 10) return false;

  let remaining = n;
  let prevValue = 0;

  while (remaining > 0) {
    const lastValue = remaining % 10;

    if (lastValue <= prevValue) return false;

    remaining = Math.trunc(remaining / 10);
    prevValue = lastValue;
  }

  return true;
};
