import pacificAtlantic from './index';

describe('417. Pacific Atlantic Water Flow', () => {
  describe('given input heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', () => {
    it('should return [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]', () => {
      expect(
        // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
        pacificAtlantic([
          [1, 2, 2, 3, 5],
          [3, 2, 3, 4, 4],
          [2, 4, 5, 3, 1],
          [6, 7, 1, 4, 5],
          [5, 1, 1, 2, 4],
        ]).sort()
      ).toEqual([
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ]);
    });
  });

  describe('given input heights = [[3,3,3,3,3,3],[3,0,3,3,0,3],[3,3,3,3,3,3]]', () => {
    it('should return [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]', () => {
      expect(
        // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
        pacificAtlantic([
          [3, 3, 3, 3, 3, 3],
          [3, 0, 3, 3, 0, 3],
          [3, 3, 3, 3, 3, 3],
        ]).sort()
      ).toEqual([
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [1, 0],
        [1, 2],
        [1, 3],
        [1, 5],
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
      ]);
    });
  });
});
