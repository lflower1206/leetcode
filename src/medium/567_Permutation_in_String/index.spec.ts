import checkInclusion from './index';

describe('567. Permutation in String', () => {
  describe('given input s1 = "ab", s2 = "eidbaooo"', () => {
    it('should return true', () => {
      expect(checkInclusion('ab', 'eidbaooo')).toBeTruthy();
    });
  });

  describe('given input s1 = "ab", s2 = "eidboaoo"', () => {
    it('should return false', () => {
      expect(checkInclusion('ab', 'eidboaoo')).toBeFalsy();
    });
  });

  describe('given input s1 = "adc", s2 = "dcda"', () => {
    it('should return true', () => {
      expect(checkInclusion('adc', 'dcda')).toBeTruthy();
    });
  });

  describe('given input s1 = "trinitrophenylmethylnitramine", s2 = "dinitrophenylhydrazinetrinitrophenylmethylnitramine"', () => {
    it('should return true', () => {
      expect(
        checkInclusion(
          'trinitrophenylmethylnitramine',
          'dinitrophenylhydrazinetrinitrophenylmethylnitramine'
        )
      ).toBeTruthy();
    });
  });
});
