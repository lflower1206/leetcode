import intToRoman from './index';

describe('12. Integer to Roman', () => {
  describe('given number 0', () => {
    it('should return ""', () => {
      expect(intToRoman(0)).toBe('');
    });
  });

  describe('given number 1', () => {
    it('should return I', () => {
      expect(intToRoman(1)).toBe('I');
    });
  });

  describe('given number 2', () => {
    it('should return II', () => {
      expect(intToRoman(2)).toBe('II');
    });
  });

  describe('given number 4', () => {
    it('should return IV', () => {
      expect(intToRoman(4)).toBe('IV');
    });
  });

  describe('given number 58', () => {
    it('should return LVIII', () => {
      expect(intToRoman(58)).toBe('LVIII');
    });
  });

  describe('given number 1994', () => {
    it('should return MCMXCIV', () => {
      expect(intToRoman(1994)).toBe('MCMXCIV');
    });
  });
});
