import isAnagram from './index';

describe('242. Valid Anagram', () => {
  describe('given input s = "anagram", t = "nagaram"', () => {
    it('should return true', () => {
      expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    });
  });

  describe('given input s = "rat", t = "car"', () => {
    it('should return false', () => {
      expect(isAnagram('rat', 'car')).toBeFalsy();
    });
  });
});
