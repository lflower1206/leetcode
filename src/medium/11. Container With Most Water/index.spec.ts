import maxArea from './index';

describe('11. Container With Most Water', () => {
  describe('given input [1,1]', () => {
    it('should return 1', () => {
      expect(maxArea([1, 1])).toBe(1);
    });
  });
  describe('given input [1,8,6,2,5,4,8,3,7]', () => {
    it('should return 49', () => {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });
  });
});
