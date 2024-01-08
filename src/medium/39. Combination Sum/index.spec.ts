import combinationSum from './index';

describe('39. Combination Sum', () => {
  describe('given input [2], target = 1', () => {
    it('return []', () => {
      expect(combinationSum([2], 1)).toEqual([]);
    });
  });

  describe('given input [2], target = 2', () => {
    it('return [[2]]', () => {
      expect(combinationSum([2], 2)).toEqual([[2]]);
    });
  });

  describe('given input [2,3,5], target = 8', () => {
    it('return [[2,2,2,2],[2,3,3],[3,5]]', () => {
      expect(combinationSum([2, 3, 5], 8)).toEqual([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ]);
    });
  });
});
