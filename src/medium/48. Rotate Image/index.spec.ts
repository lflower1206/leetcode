import rotate from './index';

describe('48. Rotate Image', () => {
  describe('given  input matrix = [[1,2],[3,4]]', () => {
    it('should return [[3,1],[4,2]]', () => {
      const givenMatrix = [
        [1, 2],
        [3, 4],
      ];

      rotate(givenMatrix);

      expect(givenMatrix).toEqual([
        [3, 1],
        [4, 2],
      ]);
    });
  });
  describe('given  input matrix = [[1,2,3],[4,5,6],[7,8,9]]', () => {
    it('should return [[7,4,1],[8,5,2],[9,6,3]]', () => {
      const givenMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      rotate(givenMatrix);

      expect(givenMatrix).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ]);
    });
  });

  describe('given  input matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]', () => {
    it('should return [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]', () => {
      const givenMatrix = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ];

      rotate(givenMatrix);

      expect(givenMatrix).toEqual([
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ]);
    });
  });
});
