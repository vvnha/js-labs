import { findLastUrl, findLastUrlv2, findLastUrlv3 } from './array-find-08';

describe('findLastUrl()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastUrl(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findLastUrl(item)).toBe(undefined);
    });
  });

  it('should return undefined when list does not have url', () => {
    expect(findLastUrl(['abc@easy.frontend'])).toBe(undefined);
  });
  it('should return the last url when list has url', () => {
    expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
  });
});

describe('findLastUrlv2()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastUrlv2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findLastUrlv2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list does not have url', () => {
    expect(findLastUrlv2(['abc@easy.frontend'])).toBe(undefined);
  });

  it('should return the last url when list has url', () => {
    expect(findLastUrlv2(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
  });
});

describe('findLastUrlv3()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findLastUrlv3(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findLastUrlv3(item)).toBe(undefined);
    });
  });

  it('should return undefined when list does not have url', () => {
    expect(findLastUrlv3(['abc@easy.frontend'])).toBe(undefined);
  });

  it('should return the last url when list has url', () => {
    expect(findLastUrlv2(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
  });
});
