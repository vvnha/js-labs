import { findAllProducts, findAllProductsv2 } from './array-filter-09';

const productList = [
  { id: 1, name: 'Luxury IPhone X', amount: 1 },
  { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
  { id: 3, name: 'iphone 20 Pro', amount: 2 },
];

describe('findAllProducts()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllProducts(item)).toEqual([]);
    });
  });

  it('should return when product name is iphone & amount >0', () => {
    expect(findAllProducts(productList)).toEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});

describe('findAllProductsv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findAllProductsv2(item)).toEqual([]);
    });
  });

  it('should return when product name is iphone & amount >0', () => {
    expect(findAllProductsv2(productList)).toEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});
