import lengthOfLongestSubstring from './index';

describe('3. Longest Substring Without Repeating Characters', () => {
  describe('given input s = "abcabcbb"', () => {
    it('should return 3', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });
  });

  describe('given input s = "bbbbb"', () => {
    it('should return 1', () => {
      expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });
  });

  describe('given input s = "pwwkew"', () => {
    it('should return 3', () => {
      expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });
  });

  describe('given input s = "au"', () => {
    it('should return 2', () => {
      expect(lengthOfLongestSubstring('au')).toBe(2);
    });
  });

  describe('given input s = " "', () => {
    it('should return 1', () => {
      expect(lengthOfLongestSubstring(' ')).toBe(1);
    });
  });

  describe('given input s = "dvdf"', () => {
    it('should return 3', () => {
      expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    });
  });

  describe('given input s = "tmmzuxt"', () => {
    it('should return 5', () => {
      expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5);
    });
  });
});
