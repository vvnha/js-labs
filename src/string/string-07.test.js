import { fillPath, fillPathv2, fillPathv3 } from './string-07';

describe('fillPath()', () => {
  it('should return empty string when path is empty', () => {
    expect(fillPath('', {})).toBe('');
  });

  it('should return original path when params is empty object', () => {
    expect(fillPath('/products/:productId', {})).toBe('/products/:productId');
  });

  it('should return path when params is not empty object', () => {
    [
      { path: '/products/:productId', params: { productId: 123 }, rs: '/products/123' },
      {
        path: '/categories/:categoryId/products/:productId',
        params: {
          categoryId: 1,
          productId: 2,
        },
        rs: '/categories/1/products/2',
      },
      {
        path: '/categories/:categoryId/products/:productId',
        params: {
          productId: 2,
        },
        rs: '/categories/:categoryId/products/2',
      },
    ].forEach(({ path, params, rs }) => {
      expect(fillPath(path, params)).toBe(rs);
    });
  });
});

describe('fillPathv2()', () => {
  it('should return empty string when path is empty', () => {
    expect(fillPathv2('', {})).toBe('');
  });

  it('should return original path when params is empty object', () => {
    expect(fillPathv2('/products/:productId', {})).toBe('/products/:productId');
  });

  it('should return path when params is not empty object', () => {
    [
      { path: '/products/:productId', params: { productId: 123 }, rs: '/products/123' },
      {
        path: '/categories/:categoryId/products/:productId',
        params: {
          categoryId: 1,
          productId: 2,
        },
        rs: '/categories/1/products/2',
      },
      {
        path: '/categories/:categoryId/products/:productId',
        params: {
          productId: 2,
        },
        rs: '/categories/:categoryId/products/2',
      },
    ].forEach(({ path, params, rs }) => {
      expect(fillPathv2(path, params)).toBe(rs);
    });
  });
});

describe('fillPathv3()', () => {
  it('should return empty string when path is empty', () => {
    expect(fillPathv3('', {})).toBe('');
  });

  it('should return original path when params is empty object', () => {
    expect(fillPathv3('/products/:productId', {})).toBe('/products/:productId');
  });

  it('should return path when params is not empty object', () => {
    [
      { path: '/products/:productId', params: { productId: 123 }, rs: '/products/123' },
      {
        path: '/categories/:categoryId/products/:productId',
        params: {
          categoryId: 1,
          productId: 2,
        },
        rs: '/categories/1/products/2',
      },
      {
        path: '/categories/:categoryId/products/:productId',
        params: {
          productId: 2,
        },
        rs: '/categories/:categoryId/products/2',
      },
    ].forEach(({ path, params, rs }) => {
      expect(fillPathv3(path, params)).toBe(rs);
    });
  });
});
