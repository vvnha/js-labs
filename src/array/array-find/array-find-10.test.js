import { findProductByCode, findProductByCodev2 } from './array-find-10';

const productList = [
  { id: 1, code: 'ip01', name: 'IPhone 16' },
  { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
];

describe('findProductByCode()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findProductByCode(productList, 0)).toBe(-1);
    });
  });

  it('should return when code is not a number', () => {
    [[], null, undefined, {}].forEach((item) => {
      expect(findProductByCode(productList, item)).toBe(-1);
    });
  });

  it('should return code when product list does not have product', () => {
    expect(findProductByCode(productList, 'ip03')).toBe(-1);
  });

  it('should return code when product list has product', () => {
    expect(findProductByCode(productList, 'ip01')).toBe(0);
  });
});

describe('findProductByCodev2()', () => {
  it('should return -1 when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findProductByCodev2(productList, 0)).toBe(-1);
    });
  });

  it('should return when code is not a number', () => {
    [[], null, undefined, {}].forEach((item) => {
      expect(findProductByCodev2(productList, item)).toBe(-1);
    });
  });

  it('should return code when product list does not have product', () => {
    expect(findProductByCodev2(productList, 'ip03')).toBe(-1);
  });

  it('should return code when product list has product', () => {
    expect(findProductByCodev2(productList, 'ip01')).toBe(0);
  });
});
