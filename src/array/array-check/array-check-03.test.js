import { hasEasyFrontend, hasEasyFrontendv2 } from './array-check-03';

describe('hasEasyFrontend()', () => {
  it('should return false when wordList is not array', () => {
    [null, undefined, {}].forEach((word) => {
      expect(hasEasyFrontend(word)).toBe(false);
    });
  });
  it('should return false when wordList is empty array', () => {
    expect(hasEasyFrontend({})).toBe(false);
  });
  it("should return false when wordList doesn't have easy frontend", () => {
    expect(hasEasyFrontend(['easy', ''])).toBe(false);
  });
  it('should return false when wordList is empty array', () => {
    expect(hasEasyFrontend(['easy', 'frontend'])).toBe(true);
    expect(hasEasyFrontend(['easy frontend', ''])).toBe(true);
  });
});

describe('hasEasyFrontendv2()', () => {
  it('should return false when wordList is not array', () => {
    [null, undefined, {}].forEach((word) => {
      expect(hasEasyFrontendv2(word)).toBe(false);
    });
  });
  it('should return false when wordList is empty array', () => {
    expect(hasEasyFrontendv2({})).toBe(false);
  });
  it("should return false when wordList doesn't have easy frontend", () => {
    expect(hasEasyFrontendv2(['easy', ''])).toBe(false);
  });
  it('should return false when wordList is empty array', () => {
    expect(hasEasyFrontendv2(['easy', 'frontend'])).toBe(true);
    expect(hasEasyFrontendv2(['easy frontend', ''])).toBe(true);
  });
});
