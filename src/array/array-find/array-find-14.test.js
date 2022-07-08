import { findProductHavingFreeShip, findProductHavingFreeShipv2 } from './array-find-14';

const productList = [
  { id: 1, name: 'IPhone 5', isFreeShip: false },
  { id: 2, name: 'IPhone X', isFreeShip: true },
  { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
];

describe('findProductHavingFreeShip()', () => {
  it('should return null when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findProductHavingFreeShip(item)).toBe(null);
    });
  });
  it('should return product when list has 1st product having free ship', () => {
    expect(findProductHavingFreeShip(productList)).toEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });
});

describe('findProductHavingFreeShipv2()', () => {
  it('should return null when list is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(findProductHavingFreeShipv2(item)).toBe(null);
    });
  });
  it('should return product when list has 1st product having free ship', () => {
    expect(findProductHavingFreeShipv2(productList)).toEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });
});
