import threeSumClosest from './index';

describe('16. 3Sum Closest', () => {
  describe('given input [0,0,0] and target 1', () => {
    it('should return 0', () => {
      expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
    });
  });

  describe('given input [-1,2,1,-4] and target 1', () => {
    it('should return 2', () => {
      expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    });
  });

  describe('given input [4,0,5,-5,3,3,0,-4,-5] and target -2', () => {
    it('should return -2', () => {
      expect(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)).toBe(-2);
    });
  });
});
