export const statisticsCharacters = (str) => {
  if (str === '') return {};

  return str.split('').reduce((statistics, character) => {
    if (character === ' ')
      statistics['space'] = statistics['space'] !== undefined ? statistics['space'] + 1 : 1;
    else {
      statistics[character] = statistics[character] !== undefined ? statistics[character] + 1 : 1;
    }
    return statistics;
  }, {});
};

export const statisticsCharactersv2 = (str) => {
  if (str === '') return {};

  let statistics = {};

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === ' ')
      statistics['space'] = statistics['space'] !== undefined ? statistics['space'] + 1 : 1;
    else {
      statistics[character] = statistics[character] !== undefined ? statistics[character] + 1 : 1;
    }
  }
  return statistics;
};
