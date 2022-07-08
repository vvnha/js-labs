import { findFirstIPhone, findFirstIPhonev2 } from './array-find-15';

const productList = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'IPHONE X' },
  { id: 3, name: 'iPhone 12 Pro' },
];

describe('findFirstIPhone()', () => {
  it('should return null when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findFirstIPhone(item)).toBe(null);
    });
  });

  it('should return 1st product named Iphone in  a list', () => {
    expect(findFirstIPhone(productList)).toEqual({ id: 2, name: 'IPHONE X' });
  });
});

describe('findFirstIPhonev2()', () => {
  it('should return null when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findFirstIPhonev2(item)).toBe(null);
    });
  });

  it('should return 1st product named Iphone in  a list', () => {
    expect(findFirstIPhonev2(productList)).toEqual({ id: 2, name: 'IPHONE X' });
  });
});
