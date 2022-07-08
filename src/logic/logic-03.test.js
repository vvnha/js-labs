import { statisticsNumbers } from './logic-03';

describe('statisticsNumbers()', () => {
  it('should return {} when arr is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(statisticsNumbers(item)).toEqual({});
    });
  });

  it('should return {} when list is empty array', () => {
    expect(statisticsNumbers([])).toEqual({});
  });

  it('should return statistics when list has number', () => {
    expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({
      1: 3,
      2: 2,
      3: 1,
    });
  });
});
