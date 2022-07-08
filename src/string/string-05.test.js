import { countURLs, countURLsv2 } from './string-05';

describe('countURLs()', () => {
  it('should return empty obj when str is empty', () => {
    expect(countURLs('')).toBe(0);
  });

  it('should return count number obj when str is not empty', () => {
    expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1);
    expect(countURLs('my website is: https://ez.com you can visit it')).toBe(0);
  });
});

describe('countURLsv2()', () => {
  it('should return empty obj when str is empty', () => {
    expect(countURLsv2('')).toBe(0);
  });

  it('should return count number obj when str is not empty', () => {
    expect(countURLsv2('my website is: http://ezfrontend.com you can visit it')).toBe(1);
    expect(countURLsv2('my website is: https://ez.com you can visit it')).toBe(0);
  });
});
