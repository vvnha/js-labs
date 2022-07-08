import { countWords, countWordsv2 } from './array-count-03';

describe('countWords()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countWords(item)).toEqual(-1);
    });
  });

  it('should return -1 when n is not a number', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countWords(['easy', 'frontend'], item)).toEqual(-1);
    });
  });

  it('should return the number count when list has word length equal or greater than n', () => {
    expect(countWords(['easy', 'frontend'], 10)).toBe(0);
    expect(countWords(['easy', 'frontend'], 5)).toBe(1);
    expect(countWords(['easy', 'frontend'], 4)).toBe(2);
  });
});

describe('countWordsv2()', () => {
  it('should return -1 when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countWordsv2(item)).toEqual(-1);
    });
  });

  it('should return -1 when n is not a number', () => {
    [null, undefined, {}].forEach((item) => {
      expect(countWordsv2(['easy', 'frontend'], item)).toEqual(-1);
    });
  });
  it('should return the number count when list has word length equal or greater than n', () => {
    expect(countWordsv2(['easy', 'frontend'], 10)).toBe(0);
    expect(countWordsv2(['easy', 'frontend'], 5)).toBe(1);
    expect(countWordsv2(['easy', 'frontend'], 4)).toBe(2);
  });
});
