import fourSum from './index';

describe('18. 4Sum', () => {
  describe('given input [2,2,2,2,2] and target 8', () => {
    it('should return [[2,2,2,2]]', () => {
      expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
    });
  });

  describe('given input [1,0,-1,0,-2,2] and target 0', () => {
    it('should return [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]', () => {
      expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ]);
    });
  });
});
