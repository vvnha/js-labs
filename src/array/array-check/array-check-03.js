export const hasEasyFrontend = (wordList) => {
  if (!Array.isArray(wordList)) return false;

  let hasEasy = false;
  let hasFrontend = false;

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];

    if (word.toLowerCase() === 'easy') hasEasy = true;
    if (word.toLowerCase() === 'frontend') hasFrontend = true;

    if (word.toLowerCase() === 'easy frontend') return true;
  }

  return hasEasy && hasFrontend;
};

export const hasEasyFrontendv2 = (wordList) => {
  if (!Array.isArray(wordList)) return false;

  let hasEasy = false;
  let hasFrontend = false;

  return (
    wordList.some((word) => {
      if (word.toLowerCase() === 'easy') hasEasy = true;
      if (word.toLowerCase() === 'frontend') hasFrontend = true;

      return word === 'easy frontend';
    }) ||
    (hasEasy && hasFrontend)
  );
};
