export const countURLs = (str) => {
  if (str === '') return 0;

  const strArray = str
    .split(' ')
    .filter(
      (x) =>
        x.startsWith('http') || x.startsWith('https') || x.startsWith('ws') || x.startsWith('wss')
    );
  let count = 0;

  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];
    const y = element.split('://')[1];
    const hasDomain =
      (y.endsWith('.com') && y.length - '.com'.length >= 3) ||
      (y.endsWith('.vn') && y.length - '.vn'.length >= 3) ||
      (y.endsWith('.com.vn') && y.length - '.com.vn'.length >= 3);
    if (hasDomain) count++;
  }
  return count;
};

export const countURLsv2 = (str) => {
  if (str === '') return 0;

  return str
    .split(' ')
    .filter(
      (word) =>
        word.startsWith('http') ||
        word.startsWith('https') ||
        word.startsWith('ws') ||
        word.startsWith('wss')
    )
    .reduce((count, word) => {
      const y = word.split('://')[1];
      const hasDomain =
        (y.endsWith('.com') && y.length - '.com'.length >= 3) ||
        (y.endsWith('.vn') && y.length - '.vn'.length >= 3) ||
        (y.endsWith('.com.vn') && y.length - '.com.vn'.length >= 3);
      if (hasDomain) count++;

      return count;
    }, 0);
};
