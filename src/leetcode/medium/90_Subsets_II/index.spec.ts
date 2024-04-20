import subsetsWithDup from './index';

describe('90. Subsets II', () => {
  describe('given input [0]', () => {
    it('should return [[],[0]]', () => {
      expect(subsetsWithDup([0])).toEqual([[], [0]]);
    });
  });

  describe('given input [1,2,2]', () => {
    it('should return [[],[1],[1,2],[1,2,2],[2],[2,2]]', () => {
      const expectResult = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
      const result = subsetsWithDup([1, 2, 2]);

      expect(result).toEqual(expect.arrayContaining(expectResult));
      expect(result).toHaveLength(expectResult.length);
    });
  });

  describe('given input [4,4,4,1,4]', () => {
    it('should return[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]', () => {
      const expectResult = [
        [],
        [1],
        [1, 4],
        [1, 4, 4],
        [1, 4, 4, 4],
        [1, 4, 4, 4, 4],
        [4],
        [4, 4],
        [4, 4, 4],
        [4, 4, 4, 4],
      ];
      const result = subsetsWithDup([4, 4, 4, 1, 4]);

      expect(result).toEqual(expect.arrayContaining(expectResult));
      expect(result).toHaveLength(expectResult.length);
    });
  });
});
