import letterCombinations from './index';

describe('17. Letter Combinations of a Phone Number', () => {
  describe('given input ""', () => {
    it('should return []', () => {
      expect(letterCombinations('')).toEqual([]);
    });
  });

  describe('given input "2"', () => {
    it('should return ["a","b","c"]', () => {
      expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
    });
  });

  describe('given input "23"', () => {
    it('should return ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
      expect(letterCombinations('23')).toEqual([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
      ]);
    });
  });

  describe('given input "678"', () => {
    it('should return ["mpt","mpu","mpv","mqt","mqu","mqv","mrt","mru","mrv","mst","msu","msv","npt","npu","npv","nqt","nqu","nqv","nrt","nru","nrv","nst","nsu","nsv","opt","opu","opv","oqt","oqu","oqv","ort","oru","orv","ost","osu","osv",]', () => {
      expect(letterCombinations('678')).toEqual([
        'mpt',
        'mpu',
        'mpv',
        'mqt',
        'mqu',
        'mqv',
        'mrt',
        'mru',
        'mrv',
        'mst',
        'msu',
        'msv',
        'npt',
        'npu',
        'npv',
        'nqt',
        'nqu',
        'nqv',
        'nrt',
        'nru',
        'nrv',
        'nst',
        'nsu',
        'nsv',
        'opt',
        'opu',
        'opv',
        'oqt',
        'oqu',
        'oqv',
        'ort',
        'oru',
        'orv',
        'ost',
        'osu',
        'osv',
      ]);
    });
  });
});
