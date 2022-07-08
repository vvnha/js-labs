import { calcCartTotal, calcCartTotalv2 } from './array-sum-04';

const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];

describe('calcCartTotal()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(calcCartTotal(item)).toEqual(0);
    });
  });
  it('should return sum of product price', () => {
    expect(calcCartTotal(cartItemList)).toBe(250000);
  });
});

describe('calcCartTotalv2()', () => {
  it('should return false when param is not an array', () => {
    [null, undefined, {}, []].forEach((item) => {
      expect(calcCartTotalv2(item, 0, 0)).toEqual(0);
    });
  });

  it('should return sum of product price', () => {
    expect(calcCartTotalv2(cartItemList)).toBe(250000);
  });
});
