import searchMatrix from './index';

describe('74. Search a 2D Matrix', () => {
  describe('given input matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', () => {
    it('should return true', () => {
      expect(
        searchMatrix(
          [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
          ],
          3
        )
      ).toBeTruthy();
    });
  });

  describe('given input matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', () => {
    it('should return true', () => {
      expect(
        searchMatrix(
          [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
          ],
          13
        )
      ).toBeFalsy();
    });
  });
});
