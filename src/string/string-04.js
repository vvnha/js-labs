export const countEmails = (str) => {
  if (str === '') return 0;

  const strArray = str.split(' ');
  let count = 0;

  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];
    const aIndex = element.indexOf('@');
    if (aIndex > -1) {
      const x = element.split('@')[0];
      const y = element.split('@')[1];
      const hasDomain =
        (y.endsWith('.com') && y.length - '.com'.length >= 3) ||
        (y.endsWith('.vn') && y.length - '.vn'.length >= 3) ||
        (y.endsWith('.com.vn') && y.length - '.com.vn'.length >= 3);
      if (hasDomain && x.length >= 3) count++;
    }
  }
  return count;
};

export const countEmailsv2 = (str) => {
  if (str === '') return 0;

  return str
    .split(' ')
    .filter((word) => word.indexOf('@') >= 0)
    .reduce((count, word) => {
      const x = word.split('@')[0];
      const y = word.split('@')[1];
      const hasDomain =
        (y.endsWith('.com') && y.length - '.com'.length >= 3) ||
        (y.endsWith('.vn') && y.length - '.vn'.length >= 3) ||
        (y.endsWith('.com.vn') && y.length - '.com.vn'.length >= 3);
      if (hasDomain && x.length >= 3) count++;

      return count;
    }, 0);
};
