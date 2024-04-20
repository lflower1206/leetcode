import searchRange from './index';

describe('34. Find First and Last Position of Element in Sorted Array', () => {
  describe('given input [], target 0', () => {
    it('should return [-1,-1]', () => {
      expect(searchRange([], 0)).toEqual([-1, -1]);
    });
  });

  describe('given input [5,7,7,8,8,10], target 6', () => {
    it('should return [-1,-1]', () => {
      expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });
  });

  describe('given input [5,7,7,8,8,10], target 8', () => {
    it('should return [3,4]', () => {
      expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });
  });
});
