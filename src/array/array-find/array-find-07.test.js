import { findFirstEmail, findFirstEmailv2, findFirstEmailv3 } from './array-find-07';

describe('findFirstEmail()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findFirstEmail(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findFirstEmail(item)).toBe(undefined);
    });
  });

  it('should return undefined when list does not have email', () => {
    expect(findFirstEmail(['abc@easy.frontend'])).toBe(undefined);
  });

  it('should return the first email when list has email', () => {
    expect(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
  });
});

describe('findFirstEmailv2()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findFirstEmailv2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findFirstEmailv2(item)).toBe(undefined);
    });
  });

  it('should return undefined when list does not have email', () => {
    expect(findFirstEmailv2(['abc@easy.frontend'])).toBe(undefined);
  });

  it('should return the first email when list has email', () => {
    expect(findFirstEmailv2(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
  });
});

describe('findFirstEmailv3()', () => {
  it('should return undefined when list is not an array', () => {
    [null, undefined, {}].forEach((item) => {
      expect(findFirstEmailv3(item)).toBe(undefined);
    });
  });

  it('should return undefined when list is empty', () => {
    [[]].forEach((item) => {
      expect(findFirstEmailv3(item)).toBe(undefined);
    });
  });

  it('should return undefined when list does not have email', () => {
    expect(findFirstEmailv3(['abc@easy.frontend'])).toBe(undefined);
  });

  it('should return the first email when list has email', () => {
    expect(findFirstEmailv3(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
  });
});
