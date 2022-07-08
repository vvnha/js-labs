import { findAllProducts, findAllProductsv2 } from './array-filter-08';

const productList = [
  { id: 1, name: 'iphone X', isFreeShip: true },
  { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
  { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];

describe('findAllProducts()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllProducts(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllProducts(productList)).toEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });
});

describe('findAllProductsv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllProductsv2(item)).toEqual([]);
    });
  });

  it('should return when n > 0', () => {
    expect(findAllProductsv2(productList)).toEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });
});
