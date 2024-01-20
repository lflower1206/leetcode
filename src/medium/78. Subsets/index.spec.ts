import subsets from './index';

describe('78. Subsets', () => {
  describe('given input [0]', () => {
    it('should return [[],[0]]', () => {
      expect(subsets([0])).toEqual([[], [0]]);
    });
  });

  describe('given input [1,2,3]', () => {
    it('should return [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', () => {
      const expectResult = [
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3],
      ];
      const result = subsets([1, 2, 3]);

      expect(result).toEqual(expect.arrayContaining(expectResult));
      expect(result).toHaveLength(expectResult.length);
    });
  });
});
