import maxProduct from './index';

describe('152. Maximum Product Subarray', () => {
  describe('given input nums = [2,3,-2,4]', () => {
    it('should return 6', () => {
      expect(maxProduct([2, 3, -2, 4])).toBe(6);
    });
  });

  describe('given input nums = [-2,0,-1]', () => {
    it('should return 0', () => {
      expect(maxProduct([-2, 0, -1])).toBe(0);
    });
  });
});
