import permuteUnique from './index';

describe('47. Permutations II', () => {
  describe('given input nums = [1,2,3]', () => {
    it('should return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
      expect(permuteUnique([1, 2, 3])).toEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ]);
    });
  });

  describe('given input nums = [1,1,2]', () => {
    it('should return [[1,1,2],[1,2,1],[2,1,1]]', () => {
      expect(permuteUnique([1, 1, 2])).toEqual([
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ]);
    });
  });

  describe('given input nums = [3,3,0,3]', () => {
    it('should return [[0,3,3,3],[3,0,3,3],[3,3,0,3],[3,3,3,0]]', () => {
      expect(permuteUnique([3, 3, 0, 3])).toEqual([
        [0, 3, 3, 3],
        [3, 0, 3, 3],
        [3, 3, 0, 3],
        [3, 3, 3, 0],
      ]);
    });
  });
});
