export const countWords = (wordList, n) => {
  if (!Array.isArray(wordList) || wordList?.length < 0) return -1;
  if (typeof n !== 'number') return -1;

  let count = 0;
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length >= n) count++;
  }

  return count;
};

export const countWordsv2 = (wordList, n) => {
  if (!Array.isArray(wordList) || wordList?.length < 0) return -1;
  if (typeof n !== 'number') return -1;

  return wordList.reduce((count, word) => {
    count = word.length >= n ? count + 1 : count;
    return count;
  }, 0);
};
