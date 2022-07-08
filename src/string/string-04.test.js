import { countEmails, countEmailsv2 } from './string-04';

describe('countEmails', () => {
  it('should return 0 when str is empty', () => {
    expect(countEmails('')).toBe(0);
  });

  it('should return email count when str has email', () => {
    [
      { str: 'my email should be abc@super.com', rs: 1 },
      { str: 'my email should be a@a.com', rs: 0 },
      { str: 'my email should be @ bla .com', rs: 0 },
      {
        str: 'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn',
        rs: 3,
      },
    ].forEach(({ str, rs }) => {
      expect(countEmails(str)).toBe(rs);
    });
  });
});

describe('countEmailsv2', () => {
  it('should return 0 when str is empty', () => {
    expect(countEmailsv2('')).toBe(0);
  });

  it('should return email count when str has email', () => {
    [
      { str: 'my email should be abc@super.com', rs: 1 },
      { str: 'my email should be a@a.com', rs: 0 },
      { str: 'my email should be @ bla .com', rs: 0 },
      {
        str: 'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn',
        rs: 3,
      },
    ].forEach(({ str, rs }) => {
      expect(countEmailsv2(str)).toBe(rs);
    });
  });
});
