import threeSum from './index';

describe('15. 3Sum', () => {
  describe('given input [0,0,0]', () => {
    it('should return [[0,0,0]]', () => {
      expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
  });

  describe('given input [-1,0,1,2,-1,-4]', () => {
    it('should return [[-1,-1,2],[-1,0,1]]', () => {
      expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
    });
  });

  describe('given input [-1,0,1,2,-1,-4,-2,-3,3,0,4]', () => {
    it('should return [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]', () => {
      expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual([
        [-4, 0, 4],
        [-4, 1, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
    });
  });
});
