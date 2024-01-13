import permute from './index';

describe('46. Permutations', () => {
  describe('given input nums = [1]', () => {
    it('should return [[1]]', () => {
      expect(permute([1])).toEqual([[1]]);
    });
  });

  describe('given input nums = [0,1]', () => {
    it('should return [[0,1],[1,0]]', () => {
      expect(permute([0, 1])).toEqual([
        [0, 1],
        [1, 0],
      ]);
    });
  });

  describe('given input nums = [1,2,3]', () => {
    it('should return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
      expect(permute([1, 2, 3])).toEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ]);
    });
  });
});
