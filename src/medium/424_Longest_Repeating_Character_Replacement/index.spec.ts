import characterReplacement from './index';

describe('424. Longest Repeating Character Replacement', () => {
  describe('given input s = "ABAB", k = 2', () => {
    it('should return 2', () => {
      expect(characterReplacement('ABAB', 2)).toEqual(4);
    });
  });

  describe('given input s = "AABABBA", k = 1', () => {
    it('should return 1', () => {
      expect(characterReplacement('AABABBA', 1)).toEqual(4);
    });
  });

  describe('given input s = "BAAAB", k = 2', () => {
    it('should return 5', () => {
      expect(characterReplacement('BAAAB', 2)).toEqual(5);
    });
  });
});
