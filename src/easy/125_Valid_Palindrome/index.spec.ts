import isPalindrome from './index';

describe('125. Valid Palindrome', () => {
  describe('given input s = "race a car"', () => {
    it('should return false', () => {
      expect(isPalindrome('race a car')).toBeFalsy();
    });
  });

  describe('given input s = "A man, a plan, a canal: Panama"', () => {
    it('should return true', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    });
  });

  describe('given input s = " "', () => {
    it('should return true', () => {
      expect(isPalindrome(' ')).toBeTruthy();
    });
  });

  describe('given input s = ".,"', () => {
    it('should return true', () => {
      expect(isPalindrome('.,')).toBeTruthy();
    });
  });

  describe('given input s = "."', () => {
    it('should return true', () => {
      expect(isPalindrome('.')).toBeTruthy();
    });
  });

  describe('given input s = "ab_a"', () => {
    it('should return true', () => {
      expect(isPalindrome('ab_a')).toBeTruthy();
    });
  });
});
