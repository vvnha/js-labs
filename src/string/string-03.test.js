import { statisticsCharacters, statisticsCharactersv2 } from './string-03';

describe('statisticsCharacters()', () => {
  it('should return {} when str is empty', () => {
    expect(statisticsCharacters('')).toEqual({});
  });

  it('should return statistics when str is not empty', () => {
    [
      {
        word: 'aa b cc ',
        result: { a: 2, b: 1, c: 2, space: 3 },
      },
    ].forEach(({ word, result }) => {
      expect(statisticsCharacters(word)).toEqual(result);
    });
  });
});

describe('statisticsCharactersv2()', () => {
  it('should return {} when str is empty', () => {
    expect(statisticsCharactersv2('')).toEqual({});
  });

  it('should return statistics when str is not empty', () => {
    [
      {
        word: 'aa b cc ',
        result: { a: 2, b: 1, c: 2, space: 3 },
      },
    ].forEach(({ word, result }) => {
      expect(statisticsCharactersv2(word)).toEqual(result);
    });
  });
});
