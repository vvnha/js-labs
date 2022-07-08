import { countWords } from './string-01';

describe('countWords()', () => {
  it('should return 0 when str is null or empty string', () => {
    [null, undefined, ''].forEach((str) => {
      expect(countWords(str)).toBe(0);
    });
  });

  it('should return str length when str is not null or empty string', () => {
    [
      { str: 'newt ne', strLength: 2 },
      { str: 'newt', strLength: 1 },
    ].forEach(({ str, strLength }) => {
      expect(countWords(str)).toBe(strLength);
    });
  });
});
