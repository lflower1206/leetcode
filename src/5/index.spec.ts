import longestPalindrome from './index';

describe('5. Longest Palindromic Substring', () => {
  describe('given input a', () => {
    it('should return a', () => {
      expect(longestPalindrome('a')).toEqual('a');
    });
  });

  describe('given input abaaba', () => {
    it('should return abaaba', () => {
      expect(longestPalindrome('abaaba')).toEqual('abaaba');
    });
  });

  describe('given input bb', () => {
    it('should return bb', () => {
      expect(longestPalindrome('bb')).toEqual('bb');
    });
  });

  describe('given input babad', () => {
    it('should return babad', () => {
      expect(longestPalindrome('babad')).toEqual('aba');
    });
  });

  describe('given input cbbd', () => {
    it('should return cbbd', () => {
      expect(longestPalindrome('cbbd')).toEqual('bb');
    });
  });
});
