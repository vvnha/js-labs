const isPositiveEvenNumberv1 = (n) => {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
};

const isPositiveEvenNumberv2 = (n) => {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
};

const isPositiveEvenNumberv3 = (n) => {
  return n > 0 && n % 2 === 0;
};
