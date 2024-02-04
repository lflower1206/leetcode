import productExceptSelf from './index';

describe('238. Product of Array Except Self', () => {
  describe('given input nums = [1,2,3,4]', () => {
    it('should return [24,12,8,6]', () => {
      expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });
  });

  describe('given input nums = [-1,1,0,-3,3]', () => {
    it('should return [0,0,9,0,0]', () => {
      expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
    });
  });
});
