export const statisticsWords = (str) => {
  if (str === '') return {};

  const strArray = str.split(' ').filter((x) => x !== '');
  const result = {};

  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];

    if (result[element] === undefined) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  }

  return result;
};

export const statisticsWordsv2 = (str) => {
  if (str === '') return {};

  return str
    .split(' ')
    .filter((word) => word !== '')
    .reduce((statistics, word) => {
      statistics[word] = statistics[word] !== undefined ? statistics[word] + 1 : 1;
      return statistics;
    }, {});
};
