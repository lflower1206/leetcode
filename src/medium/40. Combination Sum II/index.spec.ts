import combinationSum2 from './index';

describe('40. Combination Sum II', () => {
  describe('given candidates [2,5,2,1,2], target = 5', () => {
    it('should return [[1,2,2],[5]]', () => {
      expect(combinationSum2([2, 5, 2, 1, 2], 5)).toEqual([[1, 2, 2], [5]]);
    });
  });

  describe('given candidates [10,1,2,7,6,1,5], target = 8', () => {
    it('should return [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]', () => {
      expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ]);
    });
  });
});
