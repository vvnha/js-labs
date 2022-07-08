import { statisticsWords, statisticsWordsv2 } from './string-02';

describe('statisticsWords', () => {
  it('should return {} when str is empty', () => {
    expect(statisticsWords('')).toEqual({});
  });

  it("should return {} when str doesn't have redundant spaces  ", () => {
    expect(statisticsWords('newt ne he he')).toEqual({
      newt: 1,
      ne: 1,
      he: 2,
    });
  });

  it('should return {} when str have redundant spaces  ', () => {
    expect(statisticsWords('newt  ne  he   he')).toEqual({
      newt: 1,
      ne: 1,
      he: 2,
    });
  });
});

describe('statisticsWordsv2', () => {
  it('should return {} when str is empty', () => {
    expect(statisticsWordsv2('')).toEqual({});
  });

  it("should return {} when str doesn't have redundant spaces  ", () => {
    expect(statisticsWordsv2('newt ne he he')).toEqual({
      newt: 1,
      ne: 1,
      he: 2,
    });
  });

  it('should return {} when str have redundant spaces  ', () => {
    expect(statisticsWordsv2('newt  ne  he   he')).toEqual({
      newt: 1,
      ne: 1,
      he: 2,
    });
  });
});
