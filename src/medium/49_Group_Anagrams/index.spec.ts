import groupAnagrams from './index';

describe('49. Group Anagrams', () => {
  describe('given input [""]', () => {
    it('should return [""]', () => {
      expect(groupAnagrams([''])).toEqual([['']]);
    });
  });

  describe('given input ["a"]', () => {
    it('should return ["a"]', () => {
      expect(groupAnagrams(['a'])).toEqual([['a']]);
    });
  });

  describe('given input ["eat","tea","tan","ate","nat","bat"]', () => {
    it('should return [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]', () => {
      expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual(
        [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
      );
    });
  });

  describe('given input ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]', () => {
    it('should return [["max"],["buy"],["doc"],["may"],["ill"],["duh"],["tin"],["bar"],["pew"],["cab"]]', () => {
      expect(
        groupAnagrams([
          'cab',
          'tin',
          'pew',
          'duh',
          'may',
          'ill',
          'buy',
          'bar',
          'max',
          'doc',
        ])
      ).toEqual([
        ['cab'],
        ['tin'],
        ['pew'],
        ['duh'],
        ['may'],
        ['ill'],
        ['buy'],
        ['bar'],
        ['max'],
        ['doc'],
      ]);
    });
  });
});
