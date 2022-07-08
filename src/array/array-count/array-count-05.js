export const countNumbersNotInB = (a, b) => {
  if (!Array.isArray(a) || a?.length < 0) return -1;
  if (!Array.isArray(b) || b?.length < 0) return -1;

  const diffNumberListInA = [];
  for (let i = 0; i < a.length; i++) {
    const aNumber = a[i];
    let matchNumber = false;

    for (let y = 0; y < b.length; y++) {
      const bNumber = b[y];
      if (aNumber === bNumber) matchNumber = true;
    }

    if (matchNumber === false) diffNumberListInA.push(aNumber);
  }

  return diffNumberListInA.length;
};

export const countNumbersNotInBv2 = (a, b) => {
  if (!Array.isArray(a) || a?.length < 0) return -1;
  if (!Array.isArray(b) || b?.length < 0) return -1;

  const flag = a.reduce((flag, aNumber) => {
    const checkBNumber = b.reduce((match, bNumber) => {
      match = aNumber === bNumber ? true : match;
      return match;
    }, false);

    if (checkBNumber === false) flag[aNumber] = true;
    return flag;
  }, {});

  return Object.keys(flag).length;
};
