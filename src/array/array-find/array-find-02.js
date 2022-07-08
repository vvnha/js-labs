export const findLongestWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList?.length < 1) return '';

  let longestWord = '';

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];

    if (!word.includes(' ') && word.length <= 5 && word.length > longestWord.length)
      longestWord = word;
  }

  return longestWord;
};

export const findLongestWordv2 = (wordList) => {
  if (!Array.isArray(wordList) || wordList?.length < 1) return '';

  return wordList.reduce((longestWord, word) => {
    longestWord =
      !word.includes(' ') && word.length <= 5 && word.length > longestWord.length
        ? word
        : longestWord;
    return longestWord;
  }, '');
};
