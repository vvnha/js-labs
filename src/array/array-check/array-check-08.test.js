import { hasFreeShip, hasFreeShipv2 } from './array-check-08';

const productListv2 = [
  { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
  { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 11000000 },
];

const productList = [
  { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
  { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
];

describe('hasFreeShip()', () => {
  it('should return false when productList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasFreeShip(item, 0)).toBe(false);
    });
  });

  it("should return false when productList doesn't have any item freeship which lower than price", () => {
    expect(hasFreeShip(productListv2, 10000000)).toBe(false);
  });

  it('should return false when productList have any item freeship which lower than price', () => {
    expect(hasFreeShip(productList, 10000000)).toBe(true);
  });
});

describe('hasFreeShipv2()', () => {
  it('should return false when productList is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(hasFreeShipv2(item, 0)).toBe(false);
    });
  });

  it("should return false when productList doesn't have any item freeship which lower than price", () => {
    expect(hasFreeShipv2(productListv2, 10000000)).toBe(false);
  });

  it('should return false when productList have any item freeship which lower than price', () => {
    expect(hasFreeShipv2(productList, 10000000)).toBe(true);
  });
});
