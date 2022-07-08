import { getDisplayedAddress } from './string-06';

describe('getDisplayedAddress()', () => {
  it('should return empty string when adress is empty', () => {
    expect(getDisplayedAddress({})).toBe('');
  });

  it('should return string when adress is not full', () => {
    expect(
      getDisplayedAddress({
        street: 'Nguyen Cong Tru',
        district: 'Binh Thanh District',
      })
    ).toBe('Nguyen Cong Tru, Binh Thanh District');
  });

  it('should return string when adress is not full', () => {
    expect(
      getDisplayedAddress({
        number: 123,
        street: 'Nguyen Cong Tru',
        ward: 'Ward 11',
        district: 'Binh Thanh District',
        city: 'HCMC',
      })
    ).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC');
  });
});
