import maxSubArray from './index';

describe('53. Maximum Subarray', () => {
  describe('given input nums = [-2,1,-3,4,-1,2,1,-5,4]', () => {
    it('should return 6', () => {
      expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });
  });

  describe('given input nums = [1]', () => {
    it('should return 1', () => {
      expect(maxSubArray([1])).toBe(1);
    });
  });

  describe('given input nums = [[5,4,-1,7,8]]', () => {
    it('should return 23', () => {
      expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    });
  });
});
